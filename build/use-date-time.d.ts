declare const useDateTime: () => {
    formatDate: (date: Date | undefined | null) => string | undefined;
    today: Date;
    month: number;
    day: number;
    year: number;
};
export default useDateTime;
