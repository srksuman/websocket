import { IcxTransaction, IcxTransactionBuilder } from "./IcxTransaction";
import { Hash } from "../../types/hash";
/**
 * Subclass making a transaction object for depositing to SCORE.
 * @extends {IcxTransaction}
 */
export declare class DepositTransaction extends IcxTransaction {
    dataType: "deposit";
    to: string;
    from: string;
    value: Hash;
    stepLimit: Hash;
    nid: Hash;
    nonce: Hash;
    version: Hash;
    timestamp: Hash;
    data: any;
    constructor(to: any, from: any, value: any, stepLimit: any, nid: any, nonce: any, version: any, timestamp: any, action: any, id: any, amount: any);
}
/**
 * Builder for 'DepositTransaction' object.
 * @extends {IcxTransactionBuilder}
 */
export default class DepositTransactionBuilder extends IcxTransactionBuilder {
    private: any;
    /**
     * Creates an instance of DepositTransactionBuilder.
     */
    constructor();
    /**
     * Set 'action' property
     * @param {string} action - add | withdraw
     * @return {DepositTransactionBuilder} this.
     */
    action(action: string): DepositTransactionBuilder;
    /**
     * Set 'id' property
     * @param {string} id - Identifier of deposit to withdraw
     * @return {DepositTransactionBuilder} this.
     */
    id(id: string): DepositTransactionBuilder;
    /**
     * Set 'amount' property
     * @param {string} amount - amount of deposit to withdraw
     * @return {DepositTransactionBuilder} this.
     */
    amount(amount: Hash): DepositTransactionBuilder;
    /**
     * Build 'DepositTransaction' object
     * @return {DepositTransaction} 'DepositTransaction'
     * instance exported by 'DepositTransactionBuilder'
     */
    build(): DepositTransaction;
}
