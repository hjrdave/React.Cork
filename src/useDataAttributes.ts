import React from 'react';
import useQuerySelector from './useQuerySelector';

const useDataAttributes = (dataAttribute: string) => {

    const { element } = useQuerySelector(`#${dataAttribute}`);
    const [data, setData] = React.useState([]);
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((record) => {
            if (record.type === 'attributes') {
                const changedAttrName = record?.attributeName;
                if (dataAttribute === changedAttrName) {
                    const newValue = (record.target as any)?.getAttribute(changedAttrName);
                    setData(JSON.parse(newValue));
                }

            }
        });
    });

    //set observer on target
    React.useEffect(() => {
        if (element) {
            observer.observe(element, {
                attributes: true
            })
        }
    }, [element]);

    return {
        data
    }

};

export default useDataAttributes;