import Block from "./Block";
import Transaction from "./Transaction";
import TransactionResult from "./TransactionResult";
import ScoreApiList from "./ScoreApiList";
/**
 * @description Convert block data into the right format.
 */
export declare function toBlock(data: Block): Block;
/**
 * @description Convert transaction data into the right format.
 */
export declare function toTransaction(data: Transaction): Transaction;
/**
 * @description Convert transaction result data into the right format.
 */
export declare function toTransactionResult(data: any): TransactionResult;
/**
 * @description Convert SCORE API list into the right format.
 */
export declare function toScoreApiList(data: any): ScoreApiList;
declare const _default: {
    toBlock: typeof toBlock;
    toTransaction: typeof toTransaction;
    toTransactionResult: typeof toTransactionResult;
    toScoreApiList: typeof toScoreApiList;
};
export default _default;
