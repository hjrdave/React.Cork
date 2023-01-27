interface IOptions {
    noSpecialChars?: {
        allow?: string;
    }
}
const useRegex = (options?: IOptions) => {

    const allow = options?.noSpecialChars?.allow;
    const noSpecialChars = (allow) ? new RegExp("[^" + allow + "a-zA-Z0-9]", 'gm') : new RegExp("[^a-zA-Z0-9]", 'gm');
    const noLeadingZero = /\b0+/g;

    const escapeRegExp = (stringToGoIntoTheRegex: string) => {
        return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    return {
        noSpecialChars,
        noLeadingZero,
        escapeRegExp
    }
};

export default useRegex;