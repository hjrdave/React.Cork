const useObject = () => {

    const isFile = (param: any) => {
        return ('File' in window && param instanceof File) ? true : false;
    }

    const isBlob = (param: any) => {
        return ('Blob' in window && param instanceof Blob) ? true : false;
    }

    const isObjectLiteral = function (param: any) {
        return (!!param) && (param.constructor === Object);
    };

    const chunkArray = (arr: any[], count: number) => {
        return Array.from({ length: Math.ceil(arr.length / count) }, (v, i) =>
            arr.slice(i * count, i * count + count)
        );
    };

    const windowArray = (chunkedArr: any[][], activeIndex: number) => {
        const active = (activeIndex) ? activeIndex : 0;
        const count = (chunkedArr.length !== 0) ? chunkedArr.length - 1 : 0;
        const previous = chunkedArr[active - 1];
        const current = chunkedArr[active];
        const next = chunkedArr[active + 1];
        if (!(active > count)) {
            if (active > 0) {
                return [...previous, ...current];;
            }
            if (activeIndex === 0 && chunkedArr.length > 1) {
                return [...current, ...next];
            }
        }
        return current;
    };

    const areEqualShallow = (obj1: { [key: string]: any }, obj2: { [key: string]: any }) => {
        for (var key in obj1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true;
    }

    const isEmpty = (obj: object | any[] | null) => {
        if (obj === null) {
            return true;
        }
        if (Array.isArray(obj)) {
            return (obj.length === 0) ? true : false;
        }
        return (Object.keys(obj).length === 0) ? true : false;
    }

    return {
        isObjectLiteral,
        chunkArray,
        windowArray,
        areEqualShallow,
        isEmpty,
        isFile,
        isBlob
    };
};

export default useObject;