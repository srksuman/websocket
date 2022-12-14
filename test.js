const axios = require("axios");

const getBribeFloorValue = () => {
  axios
    .get(
      "https://utils.craft.network/getCollectionFloor?collection=cx0ff8d1c6b8ce2085d1eb4e8d976cfef2622a1489"
    )
    .then((res) => {
      console.log(res.data.floor);
    })
    .catch((err) => {
      console.log(err);
    });
};

getBribeFloorValue();
