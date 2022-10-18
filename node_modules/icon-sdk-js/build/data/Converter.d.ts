import BigNumber from "bignumber.js";
import { Hash } from "../types/hash";
import { IcxTransaction } from "../builder/transaction/IcxTransaction";
import { MessageTransaction } from "../builder/transaction/MessageTransaction";
import { CallTransaction } from "../builder/transaction/CallTransaction";
import { DeployTransaction } from "../builder/transaction/DeployTransaction";
import { DepositTransaction } from "../builder/transaction/DepositTransaction";
/**
 * Convert UTF-8 text to hex string.
 * @param {string} value - the UTF-8 string only.
 * @return {string} the hex string.
 */
export declare function fromUtf8(value: string): string;
/**
 * Convert hex string to UTF-8 text.
 * @param {String} value the hex string only.
 * @returns {String} the UTF-8 string.
 */
export declare function toUtf8(value: string): string;
/**
 * Convert string or BigNumber value to number.
 * @param {string|BigNumber} value - the value.
 * @return {number} the value converted to number.
 */
export declare function toNumber(value: Hash): number;
/**
 * Convert string or number value to BigNumber.
 * @param {string|number} value - the value.
 * @return {BigNumber} the value converted to BigNumber.
 */
export declare function toBigNumber(value: Hash): BigNumber;
/**
 * Convert string, number or BigNumber value to hex string strictly.
 * @param {string|number|BigNumber} value - the value that represents the number.
 * @return {string} the value converted to hex string.
 */
export declare function toHexNumber(value: Hash): string;
/**
 * Convert string, number or BigNumber value to hex string.
 * @param {string|number|BigNumber} value - the value.
 * @return {string} the value converted to hex string.
 */
export declare function toHex(value: Hash): string;
/**
 * Convert transaction object to raw transaction object.
 * @param {object} transaction - the transaction object.
 * @return {object} the raw transaction object.
 */
export declare function toRawTransaction(transaction: IcxTransaction | MessageTransaction | CallTransaction | DeployTransaction | DepositTransaction): any;
