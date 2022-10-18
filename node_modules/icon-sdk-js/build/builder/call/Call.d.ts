import { Hash } from "../../types/hash";
/**
 * Class for calling the SCORE API.
 */
export declare class Call {
    to: Hash;
    from: Hash;
    dataType: "call";
    data: unknown;
    height?: Hash;
    constructor(to: Hash, from: Hash, data: unknown, height?: Hash);
}
/**
 * Builder class for a 'Call' object.
 */
export declare class CallBuilder {
    private private;
    /**
     * Creates an instance of CallBuilder.
     */
    constructor();
    /**
     * Set 'to' property
     * @param {string} to - The SCORE address.
     * @return {CallBuilder} this.
     */
    to(to: string): CallBuilder;
    /**
     * Set 'from' property
     * @param {string} from - The EOA address.
     * @return {CallBuilder} this.
     */
    from(from: string): CallBuilder;
    /**
     * Set 'method' property
     * @param {string} method - The method name of SCORE API
     * @return {CallBuilder} this.
     */
    method(method: string): CallBuilder;
    /**
     * Set 'params' property
     * @param {object} params - The input params for method
     * @return {CallBuilder} this.
     */
    params(params: any): CallBuilder;
    /**
     *  Set 'height' property
     *  @param {Hash} [height] block height.
     *  @return {CallBuilder} this.
     */
    height(height: Hash): CallBuilder;
    /**
     * Build 'Call' object
     * @return {Call} 'Call' instance exported by 'CallBuilder'.
     */
    build(): Call;
}
