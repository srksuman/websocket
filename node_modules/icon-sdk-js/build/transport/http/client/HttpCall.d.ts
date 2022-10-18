export default class HttpCall<T> {
    httpCall: HttpCall<T>;
    converter?: (result: string) => T;
    constructor(httpCall: HttpCall<T>, converter?: (result: string) => T);
    execute(): Promise<T>;
    private callAsync;
}
