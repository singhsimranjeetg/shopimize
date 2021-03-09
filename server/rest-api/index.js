const ShopifyAPIClient = require('shopify-api-node');

//SHOPIFY API NODE
const shopify = new ShopifyAPIClient({
  shopName: 'sept-five-app.myshopify.com',
  accessToken: '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'

});
// shopify.on('callLimits', (limits) => console.log(limits));

export const getThemes = () => {
  shopify.theme
    .list({ limit: 5 })
    .then((themes) => {
      console.log(themes)
    })
    .catch((err) => console.error(err));
  return themes;
}


// export default getThemes;