"use strict";

global.__base = __dirname;
require("dotenv").config();
const express = require("express");
const websocketService = require(__base + "/app/services/websocket");
const config = require(__base + "/app/config/config");
const cors = require("cors");
const app = express();

require(__base + "/app/init/discord");
require(__base + "/app/services/discord-bot");
websocketService.ws_service();

app.use(cors());

var server = app.listen(config.app.port, () => {
  console.log(`Node app started at: ${server.address().port}.`);
});
