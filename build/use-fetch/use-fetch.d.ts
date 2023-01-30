import { UseFetch } from "./interfaces";
export default function useFetch<R = Response | undefined>(url: RequestInfo, options?: UseFetch.FetchOptions<R>): {
    response: R;
    error: string | object | null;
    loading: boolean;
    fetchData: () => void;
    get: (route?: string) => void;
    post: (route: string, body?: {
        [key: string]: any;
    } | undefined) => void;
    abort: () => void;
    request: {
        get: (route?: string, options?: {
            bodyType: UseFetch.BodyType;
        }) => Promise<any>;
        post: (route?: string, body?: any, options?: {
            bodyType: UseFetch.BodyType;
        }) => Promise<any>;
    };
};
