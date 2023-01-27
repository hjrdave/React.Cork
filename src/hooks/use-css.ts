import React from 'react';

export type TRawCSSImport = {
    readonly [key: string]: string;
}
const useCSS = () => {

    const nameSpaceClassNames = (rawCssString: string, namespaces: TRawCSSImport) => {
        let nameSpacedCSS = rawCssString.toString();
        const nameSpaces = Object.entries(namespaces);

        //namespace css classes
        nameSpaces.forEach(([originalClass, nameSpacedClass]) => {

            //Makes sure match is accurate and is replaced by new accurate string
            const matchFn = (match: string) => {
                const splitMatch = match.split(/(:| )/);
                return `${nameSpacedClass}${splitMatch[1]}`;
            }
            const regex = new RegExp(`(${originalClass})(:| )`, 'g');
            nameSpacedCSS = nameSpacedCSS.replaceAll(regex, matchFn);
        })

        //makes sure :global scss syntax is parsed correctly
        const regex = new RegExp('(:global)(\()(.*)(\))', 'g');
        nameSpacedCSS = nameSpacedCSS.replaceAll(regex, (match) => {
            let subString = match;
            subString = subString.replace(':global(', '').replace(')', '');
            return subString;
        });

        return nameSpacedCSS;
    };

    return {
        nameSpaceClassNames
    }
};

export default useCSS;