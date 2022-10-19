"use strict";
module.exports = {
  app: {
    port: process.env.PORT || 3008,
    environment: process.env.ENVIRONMENT || "local",
  },
  websocket: {
    url: process.env.WEBSOCKET_URL,
  },
  contracts: {
    BANK_SCORE: process.env.BANK_SCORE,
  },
  icon: {
    wallet_url: process.env.WALLET_URL,
  },
  discord: {
    webhook_url: process.env.DISCORD_WEBHOOK_WEBSOCKET,
  },
  events: {
    DEPOSIT_INTO_BANK: "Deposit(Address,int)",
    WITHDRAW_FROM_BANK: "Withdraw(Address,int)",
  },
  tracker: {
    TRACKER: process.env.ICON_TRACKER,
  },
};
