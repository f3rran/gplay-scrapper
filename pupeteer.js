var categories =  require('./data/categories.json');

(async () => {
  const puppeteer = require("puppeteer");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const category of categories) {
    await page.goto(category);

    const url = category.split('/');
    let urlCategory = url[url.indexOf('category') + 1];
    urlCategory = urlCategory.split('?')[0];

    await page.screenshot({                      // Screenshot the website using defined options
      path: "./screenshots/"+urlCategory+".png",                   // Save the screenshot in current directory
      fullPage: true                              // take a fullpage screenshot
    });

    // títulos kcen6d
    const asd = await page.$$eval('.kcen6d', els => els.map(el => el.innerText));
    console.log(asd);
  }

  await browser.close();
})();