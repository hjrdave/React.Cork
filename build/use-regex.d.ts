export interface IOptions {
    noSpecialChars?: {
        allow?: string;
    };
}
declare const useRegex: (options?: IOptions) => {
    noSpecialChars: RegExp;
    noLeadingZero: RegExp;
    escapeRegExp: (stringToGoIntoTheRegex: string) => string;
};
export default useRegex;
