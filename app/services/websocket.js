"use strict";

const { WebSocket } = require("ws");

const icon = require(__base + "/app/init/icon");
const discord = require(__base + "/app/init/discord");
const config = require(__base + "/app/config/config");

const BANK_SCORE = config.contracts.BNAK_SCORE;

const ws_url = config.websocket.url;

module.exports.ws_service = async () => {
  const latest_block = await icon.getLatestBlock();
  // const latest_block = 13430185;
  const ws = new WebSocket(ws_url);

  const ws_payload = {
    height: latest_block,
    eventFilters: [
      {
        addr: BANK_SCORE,
        event: config.events.DEPOSIT_INTO_BANK,
      },
      {
        addr: BANK_SCORE,
        event: config.events.WITHDRAW_FROM_BANK,
      },
    ],
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
    const methods_to_look_for = ["transfer", "withdraw"];

    try {
      data = JSON.parse(data.toString());
      if (data.events) {
        const block_height = parseInt(data.height) - 1;
        const block = await icon.getBlock(block_height);
        block.confirmed_transaction_list.forEach(async (tx) => {
          if (methods_to_look_for.includes(tx.data?.method)) {
            if (tx.data.method === "transfer") {
              const heading = "Deposit";
              const address = tx.from;
              const txHash = tx.txHash;
              const amount = Number(tx.data.params._value) / 10 ** 18;
              discord.sendMessage(
                "DEPOSITED",
                tx.data.method,
                heading,
                address,
                txHash,
                amount
              );
            }
            if (tx.data.method === "withdraw") {
              const heading = "Withdraw";
              const address = tx.from;
              const txHash = tx.txHash;
              const amount = Number(tx.data.params.share) / 10 ** 18;

              discord.sendMessage(
                "WITHDRAWN",
                tx.data.method,
                heading,
                address,
                txHash,
                amount
              );
            }
          }
        });
      }
    } catch (e) {
      discord.sendMessage("ERROR", JSON.stringify(e));
      console.log("Websocket: Error occured on message ", JSON.stringify(e));
    }
  });
};
