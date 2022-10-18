import { IcxTransaction, IcxTransactionBuilder } from "./IcxTransaction";
import { Hash } from "../../types/hash";
/**
 * Subclass making a transaction object for deploying SCORE.
 * @extends {IcxTransaction}
 */
export declare class DeployTransaction extends IcxTransaction {
    dataType: "deploy";
    to: string;
    from: string;
    value: Hash;
    stepLimit: Hash;
    nid: Hash;
    nonce: Hash;
    version: Hash;
    timestamp: Hash;
    params: any;
    data: any;
    constructor(to: any, from: any, value: any, stepLimit: any, nid: any, nonce: any, version: any, timestamp: any, contentType: any, content: any, params: any);
}
/**
 * Builder for 'DeployTransaction' object.
 * @extends {IcxTransactionBuilder}
 */
export default class DeployTransactionBuilder extends IcxTransactionBuilder {
    private: any;
    /**
     * Creates an instance of DeployTransactionBuilder.
     */
    constructor();
    /**
     * Set 'contentType' property
     * @param {string} contentType - The content type of content
     * @return {DeployTransactionBuilder} this.
     */
    contentType(contentType: string): DeployTransactionBuilder;
    /**
     * Set 'content' property
     * @param {string} content - The content to deploy.
     * @return {DeployTransactionBuilder} this.
     */
    content(content: string): DeployTransactionBuilder;
    /**
     * Set 'params' property
     * @param {object} params - The input params for deploying content
     * @return {DeployTransactionBuilder} this.
     */
    params(params: any): DeployTransactionBuilder;
    /**
     * Build 'DeployTransaction' object
     * @return {DeployTransaction} 'DeployTransaction' instance exported by 'DeployTransactionBuilder'
     */
    build(): DeployTransaction;
}
