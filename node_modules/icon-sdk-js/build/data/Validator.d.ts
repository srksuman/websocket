import BigNumber from "bignumber.js";
/**
 * Check if input value is a private key.
 * @param {any} privKey - the input value.
 * @return {boolean} returns true if the input value is a private key.
 */
export declare function isPrivateKey(privKey: any): any;
/**
 * Check if input value is a EOA address.
 * @param {any} address - the input value.
 * @return {boolean} returns true if the input value is a EOA address.
 */
export declare function isEoaAddress(address: any): boolean;
/**
 * Check if input value is a SCORE address.
 * @param {any} address - the input value.
 * @return {boolean} returns true if the input value is a SCORE address.
 */
export declare function isScoreAddress(address: any): boolean;
/**
 * Check if input value is a EOA or SCORE address.
 * @param {any} address - the input value.
 * @return {boolean} returns true if the input value is a EOA or SCORE address.
 */
export declare function isAddress(address: any): boolean;
/**
 * Check if input value has upper case letter.
 * @param {any} value - the input value.
 * @return {boolean} returns true if the input value has upper case letter.
 */
export declare function hasUppercase(value: any): boolean;
/**
 * Check if input value has blank.
 * @param {any} value - the input value.
 * @return {boolean} returns true if the input value has blank.
 */
export declare function hasBlank(value: any): boolean;
/**
 * Check if input value is a block number.
 * @param {any} value - the input value.
 * @return {boolean} returns true if the input value is a block number.
 */
export declare function isNonNegative(value: string | BigNumber): boolean;
/**
 * Check if input value is 'latest'.
 * @param {any} value - the input value.
 * @return {boolean} returns true if the input value is 'latest'.
 */
export declare function isPredefinedBlockValue(value: any): boolean;
/**
 * Check if input value is hash.
 * @param {any} hash - the input value.
 * @return {boolean} returns true if the input value is transaction hash.
 */
export declare function isValidHash(hash: any): boolean;
/**
 * Check if input value is 'call' object.
 * @param {Call|object} call - the input value.
 * @return {boolean} returns true if the input value is 'call' object.
 */
export declare function isCall(call: any): boolean;
/**
 * Check if an input transaction object has a data properties properly.
 * @param {IcxTransaction|CallTransaction|DeployTransaction|MessageTransaction|object} transaction
 * @return {boolean} returns true if the input transaction object has a data properties properly.
 */
export declare function checkDataInTransaction(transaction: any): boolean;
/**
 * Check if an input transaction object is a signed transaction object.
 * @param {SignedTransaction|object} signedTransaction - the transaction object.
 * @return {boolean} returns true if an input transaction object is a signed transaction object.
 */
export declare function isSignedTransaction(signedTransaction: any): boolean;
/**
 * Check if an input transaction object is valid.
 * @param {object} txData - the transaction object.
 * @return {boolean} returns true if an input transaction object is a signed transaction object.
 */
export declare function checkTxData(txData: any): boolean;
/**
 * Check if an input object is a block object.
 * @param {Block|object} block - the block object.
 * @return {boolean} returns true if an input object is a block object.
 */
export declare function isBlock(block: any): boolean;
export declare function isScoreApi(api: any): boolean;
/**
 * Check if an input object is a ScoreApiList object.
 * @param {object} scoreApiList - the input object.
 * @return {boolean} returns true if an input object is a ScoreApiList object.
 */
export declare function isScoreApiList(scoreApiList: any): any;
/**
 * Check if an input object is a transaction result object.
 * @param {object} transaction - the input object.
 * @return {boolean} returns true if an input object is a transaction result object.
 */
export declare function isTransactionResult(transaction: any): boolean;
