import Request from "../jsonrpc/Request";
import HttpCall from "./client/HttpCall";
/**
 * Class representing HTTP-based provider
 */
export default class HttpProvider {
    private url;
    /**
     * Creates an instance of HttpProvider.
     * @param {string} url - The url of http provider.
     */
    constructor(url: string);
    request<T = unknown>(request: Request, converter?: (result: string | T) => T): HttpCall<T>;
}
