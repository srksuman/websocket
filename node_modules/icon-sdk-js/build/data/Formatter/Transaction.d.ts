import ConfirmedTransaction from "./ConfirmedTransaction";
export default class Transaction extends ConfirmedTransaction {
    txIndex: number;
    blockHeight: number;
    blockHash: string;
    constructor(data: any);
}
