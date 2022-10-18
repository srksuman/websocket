import HttpRequest from "./HttpRequest";
export default class HttpClient {
    static newCall<T = any>(httpRequest: HttpRequest): {
        execute(): Promise<T>;
        sendAsync(): Promise<T>;
    };
}
