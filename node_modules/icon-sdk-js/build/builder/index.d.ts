import { CallBuilder } from "./call/Call";
import { IcxTransactionBuilder } from "./transaction/IcxTransaction";
import { CallTransactionBuilder } from "./transaction/CallTransaction";
import DeployTransactionBuilder from "./transaction/DeployTransaction";
import DepositTransactionBuilder from "./transaction/DepositTransaction";
import MessageTransactionBuilder from "./transaction/MessageTransaction";
declare const Builder: {
    CallBuilder: typeof CallBuilder;
    IcxTransactionBuilder: typeof IcxTransactionBuilder;
    CallTransactionBuilder: typeof CallTransactionBuilder;
    DeployTransactionBuilder: typeof DeployTransactionBuilder;
    MessageTransactionBuilder: typeof MessageTransactionBuilder;
    DepositTransactionBuilder: typeof DepositTransactionBuilder;
};
export default Builder;
