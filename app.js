const express = require('express');
const app = express();
const cheerio = require('cheerio');
const request = require('request');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/product/:product_name', (req, res, next) => {
  console.log(req.params.product_name);
  const product_list = [];
  request(
    `https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=${req.params.product_name}&_sacat=0`,
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        $('.s-item--watch-at-corner .s-item__wrapper').each((i, e) => {
          const name = $(e).find('.s-item__info .s-item__title').text();
          const price = $(e).find('.s-item__info .s-item__price').text();
          const img_link = $(e)
            .find('.s-item__image-section .s-item__image-wrapper')
            .find('img')
            .attr('src');

          if (name != null && price != null && img_link != null) {
            product_list.push({
              product_name: name,
              product_price: price,
              product_image_link: img_link,
            });
          }
        });
        res.send(product_list);
        console.log(product_list.length);
      }
    }
  );
});

app.listen(3000, () => {
  console.log('running on port 3000');
});
