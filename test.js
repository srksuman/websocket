const axios = require("axios");

const floorPriceBribe = async () => {
  let priceArray = [];
  for (let i = 1; i <= 8; i++) {
    let url = `https://api.craft.network/nft?tokenIds=${i}&collectionId=cx69fd9c7587dc8022b1e761d127b35cc354f96b6c&limit=20&orderDirection=desc`;
    const data = await axios.get(url);

    const lowestPrice =
      data.data.data[0][`cx69fd9c7587dc8022b1e761d127b35cc354f96b6c:${i}`]
        .lowestPrice;
    if (lowestPrice !== undefined) {
      priceArray.push(lowestPrice);
    }
  }
  const floorValue = Math.min(...priceArray);
  return floorValue;
};

floorPriceBribeArray().then((fp) => {
  console.log(fp);
});
