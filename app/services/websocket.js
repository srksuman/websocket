"use strict";

const { WebSocket } = require("ws");

const icon = require(__base + "/app/init/icon");
const discord = require(__base + "/app/init/discord");
const config = require(__base + "/app/config/config");

const BANK_SCORE = config.contracts.BNAK_SCORE;

const ws_url = config.websocket.url;

module.exports.ws_service = async () => {
  // let latest_blocks = (await icon.getLatestBlock()).height;
  const latest_block = 13416947;
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
        discord.sendMessage("INFO", "Connected to websocket!");
      }
    } catch (e) {
      discord.sendMessage("ERROR", JSON.stringify(e));
      console.log("Error on connecting to websocket!! ", JSON.stringify(e));
    }
  });

  ws.on("message", async (data) => {
    const methods_to_look_for = ["transfer"];

    try {
      data = JSON.parse(data.toString());
      // console.log("Message data", JSON.stringify(data, null, 4));
      if (data.events) {
        console.log("data", data);
        const block_height = parseInt(data.height) - 1;
        console.log(block_height);
        const block = await icon.getBlock(block_height);
        console.log(block);
        console.log(block.confirmedTransactionList);

        block.confirmedTransactionList.forEach(async (tx) => {
          if (methods_to_look_for.includes(tx.data?.method)) {
            console.log("sent request for ", tx.data.method);
            discord.sendMessage("INFO", tx.data.method);
            snsService.publish(tx.txHash);
            console.log(tx.data.method, ": Method published to SNS", "got it?");
          }
        });
      }
    } catch (e) {
      discord.sendMessage("ERROR", JSON.stringify(e));
      console.log("Websocket: Error occured on message ", JSON.stringify(e));
    }
  });
};
