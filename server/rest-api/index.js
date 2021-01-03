const ShopifyAPIClient = require('shopify-api-node');

//SHOPIFY API NODE
const shopify = new ShopifyAPIClient({
  shopName: 'sept-five-app.myshopify.com',
  accessToken: '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'

});
// shopify.on('callLimits', (limits) => console.log(limits));


shopify.theme
  .list({ limit: 5 })
  .then((themes) => {
    console.log(themes)
  })
  .catch((err) => console.error(err));


// export default getThemes;