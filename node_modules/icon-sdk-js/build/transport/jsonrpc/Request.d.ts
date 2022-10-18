export default class Request {
    jsonrpc: string;
    id: number;
    method: string;
    params: any;
    constructor(id: number, method: string, params: any);
}
