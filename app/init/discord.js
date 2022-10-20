"use strict";

const { Webhook, MessageBuilder } = require("discord-webhook-node");
const config = require(__base + "/app/config/config");
const icon = require(__base + "/app/init/icon");

const hook = new Webhook(config.discord.webhook_url);

module.exports.sendMessage = async (
  type,
  method,
  heading,
  address,
  txHash,
  amount
) => {
  try {
    let color = type == "DEPOSITED" ? "#006400" : "#8B0000";
    const getRatio = await icon.crownPerXCrown();
    hook.setUsername("Fred The Banker");
    hook.setAvatar("https://i.imgur.com/U6Jgy2U.png");

    let totalAmount = type === "DEPOSITED" ? amount : amount * Number(getRatio);
    let totalSupply = await icon.getTotalBankBalanceXcrown();

    const embed = new MessageBuilder()
      .setTitle("Check Transaction")
      .setColor(color)
      .addField("Address", address)
      .addField("Amount", `${Number(totalAmount).toLocaleString()} CROWN`)
      .addField("Total xCROWN Supply", Number(totalSupply).toLocaleString())
      .setURL(`${config.tracker.TRACKER}${txHash}`)
      .setAuthor(`CROWN ${type}`, "https://i.imgur.com/AGvglQ2.png")

      .setFooter("Gangstabet", "https://i.imgur.com/BG6blOj.png")
      .setTimestamp();

    hook.send(embed);
  } catch (e) {
    console.log("Error while sending message to webhook", e);
  }
};
