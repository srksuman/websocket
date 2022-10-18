import BigNumber from "bignumber.js";
import { IcxTransaction } from "./builder/transaction/IcxTransaction";
import { MessageTransaction } from "./builder/transaction/MessageTransaction";
import { CallTransaction } from "./builder/transaction/CallTransaction";
import { DeployTransaction } from "./builder/transaction/DeployTransaction";
import { DepositTransaction } from "./builder/transaction/DepositTransaction";
import Wallet from "./Wallet";
/**
 * Class representing the signed transaction object.
 */
export default class SignedTransaction {
    private private;
    to: string;
    from: string;
    value: string;
    stepLimit: BigNumber;
    nid: BigNumber;
    nonce: string;
    version: BigNumber;
    timestamp: number;
    signature: string;
    dataType: string;
    data: any;
    /**
     * Creates an instance of SignedTransaction.
     *  transaction - The transaction instance.
     * @param transaction
     * @param {Wallet} wallet - The wallet instance.
     */
    constructor(transaction: IcxTransaction | MessageTransaction | CallTransaction | DeployTransaction | DepositTransaction, wallet: Wallet);
    /**
     * Get raw transaction object of this.transaction.
     * @return {object} The raw transaction object.
     */
    getRawTransaction(): SignedTransaction;
    /**
     * Get signature string.
     * @return {string} The signature string.
     */
    getSignature(): string;
    /**
     * Get properties of signed transaction object
     *
     * @return {object} The signed transaction object.
     */
    getProperties(): SignedTransaction;
}
