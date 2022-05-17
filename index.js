require("dotenv").config();

const { Client, Intents } = require("discord.js");
const axios = require("axios");

const gbetRateUsdClient = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const floorPriceClient = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const IconICXClient = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const GBET =
  "https://api.coingecko.com/api/v3/simple/price?ids=gangstabet&vs_currencies=usd";
const ICON =
  "https://api.coingecko.com/api/v3/simple/price?ids=icon&vs_currencies=usd";
const FLOOR_PRICE = process.env.GANGSTA_URL + "/api/marketmetrics/floorprice";

// gbet
gbetRateUsdClient.on("ready", async () => {
  console.log("gbetRateUsdClient ready");
  let price;
  try {
    axios.get(GBET).then((res) => {
      price = res.data.gangstabet.usd;
    });
  } catch {
    price = "Fetching";
  }
  gbetRateUsdClient.user.setActivity("$GBET", { type: "WATCHING" });
  gbetRateUsdClient.guilds.cache.forEach((guild) => {
    setInterval(() => {
      try {
        axios.get(GBET).then((res) => {
          price = res.data.gangstabet.usd;
          console.log("gbet price fetched");
          console.log(price);
        });
      } catch {
        console.log("Error fetching gbet price");
      }
      guild.me.setNickname(`$${price}/GBET`);
    }, 40 * 1000);
  });
});

// Icon
IconICXClient.on("ready", async () => {
  console.log("Icon ICXClient ready");
  let price;
  let pre_price = 0;
  try {
    axios.get(ICON).then((res) => {
      price = res.data.icon.usd;
    });
  } catch {
    price = "Fetching";
    pre_price = "Fetching";
  }
  IconICXClient.user.setActivity("$ICX", { type: "WATCHING" });
  IconICXClient.guilds.cache.forEach((guild) => {
    setInterval(() => {
      try {
        axios.get(ICON).then((res) => {
          price = res.data.icon.usd;
          console.log("icon price fetched");
          console.log(price);
        });
      } catch {
        console.log("Error fetching icon price");
      }
      // if(price>pre_price){
      //   guild.me.setNickname(`$${price}(📈)/ICX`);
      // }else{
      //   guild.me.setNickname(`$${price}(📉)/ICX`);
      // }
      pre_price = price;
      guild.me.setNickname(`$${price}/ICX`);
    }, 30 * 1000);
  });
});

//floorprice
floorPriceClient.on("ready", async () => {
  console.log("floorPriceClient ready");
  let price;
  try {
    axios.get(FLOOR_PRICE).then((res) => {
      price = res.data.floor_price;
    });
  } catch {
    price = "Fetching";
  }
  floorPriceClient.user.setActivity("GangstaBet's floor price", {
    type: "WATCHING",
  });
  floorPriceClient.guilds.cache.forEach((guild) => {
    setInterval(() => {
      try {
        axios.get(FLOOR_PRICE).then((res) => {
          price = res.data.floor_price;
          console.log("Floor price fetched");
          console.log(price);
        });
      } catch {
        price = price;
        console.log("Error fetching Floor price");
      }
      guild.me.setNickname(`FP: ${price}${" "} ICX`);
    }, 40 * 1000);
  });
});
gbetRateUsdClient.login(process.env.BOT_TOKEN_GBET_USD_PRICE);
IconICXClient.login(process.env.BOT_TOKEN_ICON_USD_PRICE);
floorPriceClient.login(process.env.BOT_TOKEN_FLOOR_VALUE);
