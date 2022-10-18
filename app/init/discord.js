"use strict";

const { Webhook, MessageBuilder } = require("discord-webhook-node");
const config = require(__base + "/app/config/config");

const hook = new Webhook(config.discord.webhook_url);

module.exports.sendMessage = (type, message) => {
  try {
    let stringified_msg = message.toString();
    let color = type == "INFO" ? "#00b0f4" : "#ff0000";

    const embed = new MessageBuilder()
      .setTitle("Message from websocket")
      .setAuthor(type)
      .setColor(color)
      .setDescription(stringified_msg)
      .setFooter(
        "Gangstabet",
        "https://pbs.twimg.com/profile_images/1467807588557340673/lAiTDtmk_400x400.jpg"
      )
      .setTimestamp();

    hook.send(embed);
  } catch (e) {
    console.log("Error while sending message to webhook", e);
  }
};
