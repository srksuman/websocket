require("dotenv").config();

const { Client, Intents } = require("discord.js");
const axios = require("axios");

const client_one = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const client_two = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const GBET =
  "https://api.coingecko.com/api/v3/simple/price?ids=gangstabet&vs_currencies=usd";
const FLOOR_PRICE =
  "https://gangsta-node-main.herokuapp.com/api/marketmetrics/floorprice";

client_one.on("ready", async () => {
  console.log("starting one");
  let price = "*";
  axios.get(GBET).then((res) => {
    price = res.data.gangstabet.usd;
  });
  client_one.user.setActivity("$GBET", { type: "WATCHING" });
  client_one.guilds.cache.forEach((guild) => {
    setInterval(() => {
      try {
        axios.get(GBET).then((res) => {
          price = res.data.gangstabet.usd;
          console.log("Worked Successfully one");
          console.log(price);
        });
      } catch {
        console.log("Error");
      }
      guild.me.setNickname(`$${price}/GBET`);
    }, 40 * 1000);
  });
});

client_two.on("ready", async () => {
  console.log("starting two");
  let price = "*";
  axios.get(FLOOR_PRICE).then((res) => {
    price = res.data.floor_price;
  });
  client_two.user.setActivity("GangstaBet's floor price", { type: "WATCHING" });
  client_two.guilds.cache.forEach((guild) => {
    setInterval(() => {
      try {
        axios.get(FLOOR_PRICE).then((res) => {
          price = res.data.floor_price;
          console.log("Worked Successfully two");
          console.log(price);
        });
      } catch {
        price = price;
        console.log("Error");
      }
      guild.me.setNickname(`FP: ${price}${" "} ICX`);
    }, 40 * 1000);
  });
});
client_one.login(process.env.BOT_TOKEN_ONE);
client_two.login(process.env.BOT_TOKEN_TWO);
