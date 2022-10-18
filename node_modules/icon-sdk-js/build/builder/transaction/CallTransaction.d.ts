import { IcxTransaction, IcxTransactionBuilder } from "./IcxTransaction";
import { Hash } from "../../types/hash";
/**
 * SubClass for making the transaction object for calling a method in SCORE.
 * @extends {IcxTransaction}
 */
export declare class CallTransaction extends IcxTransaction {
    dataType: "call";
    to: string;
    from: string;
    value: Hash;
    stepLimit: Hash;
    nid: Hash;
    nonce: Hash;
    version: Hash;
    timestamp: number;
    signature: string;
    method: string;
    params: any;
    data: any;
    constructor(to: any, from: any, value: any, stepLimit: any, nid: any, nonce: any, version: any, timestamp: any, method: any, params: any);
}
/**
 * Builder for 'CallTransaction' object.
 * @extends {IcxTransactionBuilder}
 */
export declare class CallTransactionBuilder extends IcxTransactionBuilder {
    private: any;
    /**
     * Creates an instance of CallTransactionBuilder.
     */
    constructor();
    /**
     * Set 'method' property
     * @param {string} method - The method name of SCORE API
     * @return {CallTransactionBuilder} this.
     */
    method(method: string): CallTransactionBuilder;
    /**
     * Set 'params' property
     * @param {object} params - The input params for method
     * @return {CallTransactionBuilder} this.
     */
    params(params: any): CallTransactionBuilder;
    /**
     * Build 'CallTransaction' object
     * @return {CallTransaction} 'CallTransaction' instance exported by 'CallTransactionBuilder'.
     */
    build(): CallTransaction;
}
