import BigNumber from "bignumber.js";
import { Hash } from "../../types/hash";
export default class TransactionResult {
    status: Hash;
    to: string;
    txHash: string;
    txIndex: number;
    blockHeight: number;
    blockHash: string;
    cumulativeStepUsed: BigNumber;
    stepUsed: BigNumber;
    stepPrice: BigNumber;
    scoreAddress?: string;
    eventLogs?: unknown;
    logsBloom?: unknown;
    failure?: unknown;
    constructor(data: any);
}
