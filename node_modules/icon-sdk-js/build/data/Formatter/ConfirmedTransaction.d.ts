import BigNumber from "bignumber.js";
export default class ConfirmedTransaction {
    timestamp: number;
    value: BigNumber;
    fee: BigNumber;
    nid: BigNumber;
    stepLimit: BigNumber;
    nonce: BigNumber;
    from: string;
    to: string;
    signature: string;
    dataType: string;
    data: unknown;
    version: BigNumber;
    txHash: string;
    constructor(data: any);
}
