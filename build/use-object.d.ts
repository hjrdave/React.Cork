declare const useObject: () => {
    isObjectLiteral: (param: any) => boolean;
    chunkArray: (arr: any[], count: number) => any[][];
    windowArray: (chunkedArr: any[][], activeIndex: number) => any[];
    areEqualShallow: (obj1: {
        [key: string]: any;
    }, obj2: {
        [key: string]: any;
    }) => boolean;
    isEmpty: (obj: object | any[] | null) => boolean;
    isFile: (param: any) => boolean;
    isBlob: (param: any) => boolean;
};
export default useObject;
