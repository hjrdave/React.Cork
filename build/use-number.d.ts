declare const useNumber: () => {
    isInRange: (value: number, range: [min: number | undefined, max: number | undefined]) => boolean;
    trimFloat: (value: number | string, float: number) => number;
    convertToNum: (value?: any) => number;
    countDigits: (value: number) => number;
};
export default useNumber;
