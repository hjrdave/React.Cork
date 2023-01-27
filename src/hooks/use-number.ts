/**
 * Hook for manipulating numbers.
 * @returns {Object} Hook Methods
 */
const useNumber = () => {

    /**
     * Checks value agianst a min and max number and returns `true` if in range.
     * @param {boolean} value Min and max range. `[1, 100]`
     * @param {number[]} range Trims a float up to a certain digit.
     * @returns `true` or `false`
     */
    const isInRange = (value: number, range: [min: number | undefined, max: number | undefined]) => {

        const min = range[0];
        const max = range[1];

        if (value !== undefined) {
            if (max !== undefined && min !== undefined) {
                return (value >= min && value <= max) ? true : false;
            }
            else if (max !== undefined) {
                return (value <= max) ? true : false;
            }
            else if (min !== undefined) {
                return (value >= min) ? true : false;
            }
            else {
                return true;
            }
        }
        return false;
    };

    //trims floats by specified decimals.
    const trimFloat = (value: number | string, float: number) => {
        const parsedFloat = Number(Number(value.toString()).toFixed(float));
        if (!(Number.isNaN(parsedFloat))) {
            return parsedFloat;
        }
        return 0
    }

    //converts values to numbers. If value cannot be parsed it returns 0
    const convertToNum = (value?: any) => {
        if (typeof value === 'number') {
            return value;
        }
        else if (typeof value === 'string') {
            const parsedNum = Number(value);
            if (!(Number.isNaN(parsedNum))) {
                return parsedNum;
            }
            return 0;
        };
        return 0;
    };

    //checks how many digits a number has
    const countDigits = (value: number) => {
        const stringify = String(Math.floor(value));
        return stringify.length;
    }

    return {
        isInRange,
        trimFloat,
        convertToNum,
        countDigits
    }
}

export default useNumber;