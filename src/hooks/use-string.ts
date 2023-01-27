/**
 * Hook for manipulating strings
 * @param   {<string>} removeLeadingZero Method removes leading zeros from a string.
 * @return  {object} Methods for string manipulating.
 */
import useRegex from './use-regex';
import useObject from './use-object';
const useString = () => {

    const { isFile } = useObject();
    const { escapeRegExp, noLeadingZero } = useRegex();

    const convertToSrcString = (param?: string | File) => {
        return (isFile(param)) ? URL.createObjectURL(param as File) : (typeof param === 'string') ? param : '';
    }

    const removeLeadingZero = (value: string) => {
        if (typeof value === 'string') {
            const [wholeNumSeg, floatSeg] = value.split(".");
            const trimmedNum = String(Number(wholeNumSeg));
            return (floatSeg !== undefined) ? `${trimmedNum}.${floatSeg}` : trimmedNum;
        };
        return ''
    }

    const isEqual = (string1: string, string2: string) => {
        return (string1?.toLocaleLowerCase() === string2?.toLocaleLowerCase()) ? true : false
    }

    const removeSpecialChars = (value: string, options?: { allow?: string }) => {
        const allow = (options?.allow) ? escapeRegExp(options.allow) : '';
        const regex = new RegExp("[^" + allow + "a-zA-Z0-9]", 'gm');
        return value.replace(regex, '');
    }

    const hasSpecialChars = (value: string, options?: { ignore?: string }) => {
        const ignore = (options?.ignore) ? escapeRegExp(options.ignore) : '';
        const regex = new RegExp("[^" + ignore + "a-zA-Z0-9]", 'gm');
        const doSpecialCharsExist = regex.test(value);
        return doSpecialCharsExist;
    }

    const trunicate = (value: string, maxLength?: number) => {
        const newValue = value.substring(0, (maxLength !== undefined) ? maxLength : 100);
        return (value.length !== newValue.length) ? `${newValue}...` : newValue;
    }

    //Tim float is the issue here
    const trimFloat = (value: string, float: number) => {
        if (typeof value === 'string') {
            const [wholeNumSeg, floatSeg] = value.split(".");
            if (floatSeg !== undefined) {
                const joinedValue = `${wholeNumSeg}.${floatSeg.substring(0, float)}`;
                return joinedValue;
            }
            return wholeNumSeg;
        }
        return '';

    }

    return {
        removeLeadingZero,
        isEqual,
        convertToSrcString,
        removeSpecialChars,
        hasSpecialChars,
        trunicate,
        trimFloat
    }
};

export default useString;