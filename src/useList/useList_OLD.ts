import React from 'react';

interface ListItem {
    listKey: number;
    [key: string]: any;
}
interface Options {
    placeHolderCount?: number;
}
const useList = (initialList?: ListItem[], options?: Options) => {

    //empty placeholder items that will display as default. Can be used to render a list of blank form control inputs
    const placeHolderItems = Array.from({ length: options?.placeHolderCount || 0 }, (_, i) => ({ ['listKey']: undefined }));

    const _initialList = (initialList) ? initialList : placeHolderItems;

    //keeps track of keys generated (based on initial data passed)
    const [listKeys, setListKeys] = React.useState<number[]>(_initialList.map((_, index) => (index + 1)));

    //holds entire data list (keys are based on initial data passed)
    const [list, setList] = React.useState(new Map<number, ListItem>(_initialList?.map((item, index) => ([index, { ...item, ['listKey']: index }]))));

    //list to be rendered in UI
    const [render, setRender] = React.useState<ListItem[]>([]);

    //clears list
    const clear = () => {
        setList(new Map<number, ListItem>());
    }

    //adds new item to list
    const add = (item: ListItem | ListItem[]) => {
        const mapObj = new Map<number, ListItem>(list);
        if (!Array.isArray(item) && !mapObj.has(item['listKey'])) {
            mapObj.set(listKeys.length + 1, { ...item, ['listKey']: listKeys.length + 1 });
            setList(mapObj);
            setListKeys(arr => [...arr, arr.length + 1]);
            return true;
        } else if (Array.isArray(item)) {
            item.map((item, index) => {
                mapObj.has(item['listKey']) ? mapObj.set(listKeys.length + (index + 1), { ...item, ['listKey']: listKeys.length + (index + 1) }) : null;
            });
            setList(mapObj);
            setListKeys(arr => [...arr, arr.length + item.length]);
            return true;
        }
        return false;
    };

    //removes item from list
    const remove = (key: number) => {
        const mapObj = new Map<number, ListItem>(list);
        const didRemove = mapObj.delete(key);
        setList(mapObj);
        return didRemove;
    }

    React.useEffect(() => {
        //converts Map to object array so UI can render it
        setRender(Array.from(list).map((item) => (item[1])))
    }, [list]);

    return {
        render,
        add,
        remove,
        clear
    }

};

export default useList;