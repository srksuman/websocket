require("dotenv").config();

const { Client, Intents } = require("discord.js");
const axios = require("axios");

const gbetRateUsdClient = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const floorPriceClientNFT = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const floorPriceClientGK = new Client({
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

const floor_value_gk = async () => {
  return new Promise((resolve) => {
    try {
      let price_list = [];
      axios
        .get(
          `https://api.craft.network/nft?tokenIds=1&collectionId=${process.env.CONTRACT_ADDRESS}&limit=100&orderDirection=desc`
        )
        .then((res) => {
          const data =
            res["data"]["data"][0][`${process.env.CONTRACT_ADDRESS}:1`][
              "listings"
            ];
          const keys = Object.keys(data);
          for (let i = 0; i < keys.length; i++) {
            const element = data[keys[i]];
            let price = element["price"];
            price_list.push(price);
          }
          const gk_floor = Math.min(...price_list);
          resolve(gk_floor);
        });
    } catch {
      console.log("Error fetching the floor price of golden key");
    }
  });
};

//gk
floorPriceClientGK.on("ready", async () => {
  let pre_price = 0;
  console.log("Golden Key FP service is ready!!!");
  floorPriceClientGK.user.setActivity("Goldenkey's floor price", {
    type: "WATCHING",
  });
  // let myRole = floorPriceClientGK.guild.roles.cache.find(role => role.name === "Moderators");
  // console.log(myRole);
  floorPriceClientGK.guilds.cache.forEach(async (guild) => {
    setInterval(async () => {
      const price = await floor_value_gk();
      if(price != pre_price){
      if (pre_price >= price) {
        guild.me.setNickname(`FP: ${price} ICX (↘)`);
      } else {
        guild.me.setNickname(`FP: ${price} ICX (↗)`);
      }
    }
      pre_price = price;
    }, 30 * 1000);
  });
});

// gbet
gbetRateUsdClient.on("ready", async () => {
  console.log("gbetRateUsdClient ready");
  let price;
  let flag=0;
  let pre_price = 0;
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
      if(price != pre_price){
      if (price >= pre_price) {
        guild.me.setNickname(`$${price}(↗)/GBET`);
      } else {
        guild.me.setNickname(`$${price}(↘)/GBET`);
      }
    }
      pre_price = price;
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
      if(price != pre_price){
      if (price >= pre_price) {
        guild.me.setNickname(`$${price}(↗)/ICX`);
      } else {
        guild.me.setNickname(`$${price}(↘)/ICX`);
      }}
      pre_price = price;
    }, 30 * 1000);
  });
});

//floorprice
floorPriceClientNFT.on("ready", async () => {
  console.log("floorPriceClientNFT ready");
  let price;
  let pre_price = 0;
  try {
    axios.get(FLOOR_PRICE).then((res) => {
      price = res.data.floor_price;
    });
  } catch {
    price = "Fetching";
  }
  floorPriceClientNFT.user.setActivity("GangstaBet's floor price", {
    type: "WATCHING",
  });
  floorPriceClientNFT.guilds.cache.forEach((guild) => {
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
      if(price != pre_price){
      if (price >= pre_price) {
        guild.me.setNickname(`FP: ${price}${"(↗)"} ICX`);
      } else {
        guild.me.setNickname(`FP: ${price}${"(↘)"} ICX`);
      }
    }
    pre_price =price;
    }, 40 * 1000);
  });
});
gbetRateUsdClient.login(process.env.BOT_TOKEN_GBET_USD_PRICE);
IconICXClient.login(process.env.BOT_TOKEN_ICON_USD_PRICE);
floorPriceClientNFT.login(process.env.BOT_TOKEN_FLOOR_VALUE_NFT);
floorPriceClientGK.login(process.env.BOT_TOKEN_FLOOR_VALUE_GK);
