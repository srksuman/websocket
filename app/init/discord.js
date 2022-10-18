"use strict";

const { Webhook, MessageBuilder } = require("discord-webhook-node");
const config = require(__base + "/app/config/config");

const hook = new Webhook(config.discord.webhook_url);

module.exports.sendMessage = (type, message) => {
  try {
    let stringified_msg = message.toString();
    let color = type == "INFO" ? "#00b0f4" : "#ff0000";

    const embed = new MessageBuilder()
      .setTitle("Check it")
      .setAuthor(type)
      .setColor(color)
      .setDescription(stringified_msg, "https://www.google.com")
      .setURL("https://www.google.com")
      // .setImage("https://cdn.discordapp.com/embed/avatars/0.png")
      .setThumbnail("https://cdn.discordapp.com/embed/avatars/0.png")
      .setAuthor(
        "Author here",
        "https://cdn.discordapp.com/embed/avatars/0.png",
        "https://www.google.com"
      )

      .setFooter(
        "Gangstabet",
        "https://gbet.mypinata.cloud/ipfs/QmNSbSL35cdukZLHY7KSpqR2jvtAcqotnJ2HxKnYHHdSLg/4055.gif"
      )
      .setTimestamp();

    hook.send(embed);
  } catch (e) {
    console.log("Error while sending message to webhook", e);
  }
};
