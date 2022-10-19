"use strict";

const { Webhook, MessageBuilder } = require("discord-webhook-node");
const config = require(__base + "/app/config/config");

const hook = new Webhook(config.discord.webhook_url);

module.exports.sendMessage = (
  type,
  method,
  heading,
  address,
  txHash,
  amount
) => {
  try {
    let color = type == "DEPOSITED" ? "#006400" : "#8B0000";
    let unit = type == "DEPOSITED" ? "CROWN" : "xCROWN";
    const embed = new MessageBuilder()
      .setTitle("Check Transaction")
      .setAuthor(type)
      .setColor(color)
      .addField("Address", address)
      .addField("Amount", `${Number(amount).toLocaleString()} ${unit}`)
      .setURL(`${config.tracker.TRACKER}${txHash}`)
      .setAuthor(type, "https://i.imgur.com/AGvglQ2.png")

      .setFooter("Gangstabet", "https://i.imgur.com/BG6blOj.png")
      .setTimestamp();

    hook.send(embed);
  } catch (e) {
    console.log("Error while sending message to webhook", e);
  }
};
