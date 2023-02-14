import { useState, useEffect } from 'react';

interface ListItem {
    listKey: number;
    [key: string]: any;
}

interface Options {
    placeHolderCount?: number;
}

const useList = (initialList: ListItem[] = [], options: Options = {}) => {
    const { placeHolderCount = 0 } = options;
    const [list, setList] = useState<Map<number, ListItem>>(
        new Map(
            initialList.map((item, index) => ([index, { ...item, ['listKey']: index }])),
        ),
    );
    const [render, setRender] = useState<ListItem[]>([]);
    const [listKeys, setListKeys] = useState<number[]>(
        () => initialList.map((_, index) => (index + 1)),
    );

    const add = (item: ListItem | ListItem[]) => {
        const newItems = Array.isArray(item) ? item : [item];
        const newKeys = Array.from({ length: newItems.length }, (_, i) => listKeys.length + (i + 1));
        const newList = new Map(list);
        newItems.forEach((newItem, index) =>
            newList.set(newKeys[index], { ...newItem, ['listKey']: newKeys[index] }),
        );
        setList(newList);
        setListKeys([...listKeys, ...newKeys]);
    };

    const remove = (key: number) => {
        const newList = new Map(list);
        const didRemove = newList.delete(key);
        (didRemove) ? setList(newList) : null;
        return didRemove;
    };

    const clear = () => {
        setList(new Map());
        setListKeys([]);
    };

    useEffect(() => {
        setRender(Array.from(list.values()));
    }, [list]);


    //sets specified placeholders on mount
    useEffect(() => {
        if (placeHolderCount > 0) {
            const placeHolderList = Array.from({ length: placeHolderCount }, (_, i) => ({
                listKey: listKeys.length + i,
            }));
            add(placeHolderList);
        }
    }, []); // Only run once, on mount.

    return {
        render,
        add,
        remove,
        clear,
    };
};
export default useList;