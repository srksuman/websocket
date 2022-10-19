"use strict";
const config = require(__base + "/app/config/config");

const axios = require("axios");
const wallet_url = config.icon.wallet_url;
console.log(wallet_url);
module.exports.getBlock = async (blockNumber) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(blockNumber);
      const rpc_dict = {
        jsonrpc: "2.0",
        method: "icx_getBlockByHeight",
        id: 1234,
        params: {
          height: `0x${Number(blockNumber).toString(16)}`,
        },
      };
      const response = await axios.post(wallet_url, rpc_dict);
      resolve(response.data.result);
    } catch (e) {
      console.log("error", e);
      resolve({ msg: "invalid" });
    }
  });
};

module.exports.getLatestBlock = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const rpc_dict = {
        jsonrpc: "2.0",
        method: "icx_getLastBlock",
        id: 1234,
      };
      const response = await axios.post(
        wallet_url,
        rpc_dict
      );
      resolve(response.data.result.height);
    } catch (e) {
      console.log(e);
      resolve({ msg: "invalid" });
    }
  });
};
