import { IcxTransaction, IcxTransactionBuilder } from "./IcxTransaction";
import { Hash } from "../../types/hash";
/**
 * Subclass for making a transaction object for sending a message.
 * @extends {IcxTransaction}
 */
export declare class MessageTransaction extends IcxTransaction {
    dataType: "message";
    to: string;
    from: string;
    value: Hash;
    stepLimit: Hash;
    nid: Hash;
    nonce: Hash;
    version: Hash;
    timestamp: Hash;
    data: string;
    constructor(to: any, from: any, value: any, stepLimit: any, nid: any, nonce: any, version: any, timestamp: any, data: any);
}
/**
 * Builder for 'MessageTransaction' object.
 * @extends {IcxTransactionBuilder}
 */
export default class MessageTransactionBuilder extends IcxTransactionBuilder {
    private: any;
    /**
     * Creates an instance of MessageTransactionBuilder.
     */
    constructor();
    /**
     * Set 'data' property
     * @param {string} data - The data to send.
     * @return {MessageTransactionBuilder} this.
     */
    data(data: string): MessageTransactionBuilder;
    /**
     * Build 'MessageTransaction' object
     * @return {MessageTransaction} 'MessageTransaction' instance
     */
    build(): MessageTransaction;
}
