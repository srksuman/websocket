"use strict";

const { WebSocket } = require("ws");

const icon = require(__base + "/app/init/icon");
const discord = require(__base + "/app/init/discord");
const config = require(__base + "/app/config/config");

const BANK_SCORE = config.contracts.BANK_SCORE;

const ws_url = config.websocket.url;

module.exports.ws_service = async () => {
  const latest_block = await icon.getLatestBlock();
  const ws = new WebSocket(ws_url);
  const ws_payload = {
    height: latest_block,
    eventFilters: [
      {
        addr: BANK_SCORE,
        event: config.events.WITHDRAW_FROM_BANK,
      },
      {
        addr: BANK_SCORE,
        event: config.events.DEPOSIT_INTO_BANK,
      },
    ],
    logs: "0x1",
  };
  ws.on("open", () => {
    try {
      if (ws_payload.height > 0) {
        ws.send(JSON.stringify(ws_payload));
        console.log("Connection to websocket successful!");
      }
    } catch (e) {
      discord.sendMessage("ERROR", JSON.stringify(e));
      console.log("Error on connecting to websocket!! ", JSON.stringify(e));
    }
  });
  ws.on("message", async (data) => {
    // const methods_to_look_for = ["transfer", "withdraw"];
    try {
      data = JSON.parse(data.toString());
      if (data.events) {
        // const block_height = parseInt(data.height) - 1;
        // const block = await icon.getBlock(block_height);
        console.log(data?.logs[0][0]);
        // if (data?.logs[0][0][0]) {
        //   const log = data?.logs[0][0][0];
        //   if (
        //     log["scoreAddress"] === BANK_SCORE &&
        //     log["indexed"][0] === config.events.DEPOSIT_INTO_BANK
        //   ) {
        //     const heading = "Deposit";
        //     const address = log["indexed"][1];
        //     const blockHeight = Number(data.height - 1);
        //     const amount = Number(log["indexed"][2]) / 10 ** 18;
        //     discord.sendMessage(
        //       "DEPOSITED",
        //       "transfer",
        //       heading,
        //       address,
        //       blockHeight,
        //       amount
        //     );
        //   }
        //   if (
        //     log["scoreAddress"] === BANK_SCORE &&
        //     log["indexed"][0] === config.events.WITHDRAW_FROM_BANK
        //   ) {
        //     console.log("withdraw");
        //     const heading = "Withdraw";
        //     const address = log["indexed"][1];
        //     const blockHeight = Number(data.height - 1);
        //     const amount = Number(log["indexed"][2]) / 10 ** 18;
        //     discord.sendMessage(
        //       "WITHDRAWN",
        //       "withdraw",
        //       heading,
        //       address,
        //       blockHeight,
        //       amount
        //     );
        //   }
        // }
        // console.log(data?.logs[0][0]);
        // if (
        //   data?.logs[0][0][0]["scoreAddress"] === BANK_SCORE &&
        //   data?.logs[0][0][0]["indexed"][0] === "Deposit(Address,int)"
        // ) {
        // block.confirmed_transaction_list.forEach(async (tx) => {
        //   if (methods_to_look_for.includes(tx.data?.method)) {
        //     if (data?.logs[0][0][0]["scoreAddress"] === BANK_SCORE) {
        //       if (tx.data.method === "transfer") {
        //         console.log(
        //           data?.logs[0][0][0],
        //           data?.logs[0][0][0]["scoreAddress"],
        //           "Tx",
        //           tx.txHash,
        //           "block",
        //           block_height,
        //           "ADDRESS",
        //           tx.from
        //         );
        //         console.log("************************");
        //         const heading = "Deposit";
        //         const address = tx.from;
        //         const txHash = tx.txHash;
        //         const amount = Number(tx.data.params._value) / 10 ** 18;
        //         discord.sendMessage(
        //           "DEPOSITED",
        //           tx.data.method,
        //           heading,
        //           address,
        //           txHash,
        //           amount
        //         );
        //       }
        //     }
        //     if (tx.data.method === "withdraw") {
        //       const heading = "Withdraw";
        //       const address = tx.from;
        //       const txHash = tx.txHash;
        //       const amount = Number(tx.data.params.share) / 10 ** 18;
        //       discord.sendMessage(
        //         "WITHDRAWN",
        //         tx.data.method,
        //         heading,
        //         address,
        //         txHash,
        //         amount
        //       );
        //     }
        //   }
        // });
        // }
      }
    } catch (e) {
      discord.sendMessage("ERROR", JSON.stringify(e));
      console.log("Websocket: Error occured on message ", JSON.stringify(e));
    }
  });
};
