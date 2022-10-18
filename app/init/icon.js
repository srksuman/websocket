"use strict";
const config = require(__base + "/app/config/config");

const IconService = require("icon-sdk-js").default;
const HttpProvider = IconService.HttpProvider;
const provider = new HttpProvider(config.icon.wallet_url);
const iconService = new IconService(provider);

// iconService
//   .getBalance("hx9d8a8376e7db9f00478feb9a46f44f0d051aab57")
//   .execute()
//   .then((res) => {
//     console.log(res);
//   });

module.exports.getBlock = (blockNumber) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(iconService);
      // let block = await iconService.getBlockByHeight(blockNumber).execute();
      // resolve(block);
    } catch (e) {
      console.log(e);
      reject({ msg: "Invalid" });
    }
  });
};

module.exports.getLatestBlock = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let block = await iconService.getLastBlock().execute();
      resolve(block);
    } catch (e) {
      console.log(e);
      reject({ msg: "Invalid" });
    }
  });
};
