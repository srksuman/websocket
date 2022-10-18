import { Exception } from "../../Exception";
export default class Response<T> {
    result: T;
    error: Exception;
    constructor(response: {
        result: string;
        error: Exception;
    }, converter?: (result: string) => T);
}
