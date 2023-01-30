import 'jspdf-autotable';
declare const useExports: () => {
    exportToExcel: (data: any[], columnFields: {
        field: string;
        label?: string;
        title?: string;
    }[]) => Promise<unknown>;
    exportToPDF: (data: any[], columnFields: {
        field: string;
        label?: string;
        title?: string;
    }[]) => Promise<unknown>;
};
export default useExports;
