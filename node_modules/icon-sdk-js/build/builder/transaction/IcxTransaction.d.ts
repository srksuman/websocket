import { Hash } from "../../types/hash";
/**
 * Super class representing a transaction object for sending transaction.
 */
export declare class IcxTransaction {
    to: string;
    from: string;
    value: Hash;
    stepLimit: Hash;
    nid: Hash;
    nonce: Hash;
    version: Hash;
    timestamp: Hash;
    data: string;
    dataType: any;
    constructor(to: any, from: any, value: any, stepLimit: any, nid: any, nonce: any, version: any, timestamp: any);
}
/**
 * Builder for 'IcxTransaction' object.
 */
export declare class IcxTransactionBuilder {
    private: any;
    /**
     * Creates an instance of IcxTransactionBuilder.
     */
    constructor();
    /**
     * Set 'to' property
     * @param {string} to - The EOA or SCORE address.
     * @return {IcxTransactionBuilder} this.
     */
    to(to: string): IcxTransactionBuilder;
    /**
     * Set 'from' property
     * @param {string} from - The EOA address.
     * @return {IcxTransactionBuilder} this.
     */
    from(from: string): IcxTransactionBuilder;
    /**
     * Set 'value' property
     * @param {string|BigNumber|number} value - The sending amount of ICX in loop unit.
     * @return {IcxTransactionBuilder} this.
     */
    value(value: Hash): IcxTransactionBuilder;
    /**
     * Set 'stepLimit' property
     * @param {string|BigNumber|number} stepLimit - The step limit.
     * @return {IcxTransactionBuilder} this.
     */
    stepLimit(stepLimit: Hash): IcxTransactionBuilder;
    /**
     * Set 'nid' property
     * @param {string|BigNumber|number} nid - The nid (network ID)
     * @return {IcxTransactionBuilder} this.
     */
    nid(nid: Hash): IcxTransactionBuilder;
    /**
     * Set 'nonce' property
     * @param {string|BigNumber|number} nonce - The nonce.
     * @return {IcxTransactionBuilder} this.
     */
    nonce(nonce: Hash): IcxTransactionBuilder;
    /**
     * Set 'version' property
     * @param {string|BigNumber|number} version - The network version.
     * @return {IcxTransactionBuilder} this.
     */
    version(version: Hash): IcxTransactionBuilder;
    /**
     * Set 'timestamp' property
     * @param {string|BigNumber|number} timestamp - The timestamp.
     * @return {IcxTransactionBuilder} this.
     */
    timestamp(timestamp: Hash): IcxTransactionBuilder;
    build(): IcxTransaction;
}
