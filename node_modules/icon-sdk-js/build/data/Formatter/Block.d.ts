import ConfirmedTransaction from "./ConfirmedTransaction";
import { Hash } from "../../types/hash";
export default class Block {
    height: number;
    blockHash: string;
    merkleTreeRootHash: string;
    prevBlockHash: string;
    peerId: string;
    confirmedTransactionList: ConfirmedTransaction[];
    signature: string;
    timeStamp: Hash;
    version: Hash;
    constructor(data: any);
    getTransactions(): ConfirmedTransaction[];
}
