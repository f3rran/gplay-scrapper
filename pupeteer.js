var myJson =  require('./data/categories.json');

(async () => {
  const puppeteer = require("puppeteer");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  await page.goto('https://play.google.com/store/apps?hl=es');

  await page.screenshot({                      // Screenshot the website using defined options
    path: "./screenshot.png",                   // Save the screenshot in current directory
    fullPage: true                              // take a fullpage screenshot
  });

  // títulos kcen6d
  //const asd = await page.evaluate(() => document.querySelector('.kcen6d').innerText)
  const asd = await page.$$eval('.kcen6d', els => els.map(el => el.innerText));
  console.log(asd);

  console.log(myJson);

  await browser.close();
})();