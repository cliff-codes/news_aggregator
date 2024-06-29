
const { timeout } = require("puppeteer")
const puppeteer = require("puppeteer")


const newsSites = ["www.myjoyonline.com", "3news.com", "peacefmonline.com", "ghanaweb.com", "www.pulse.com.gh"]

const startScrapping = async(site, browser) => {
  try {
    const page = await browser.newPage()
    await page.goto(`https://${site}`, { waitUntil: 'networkidle2', timeout: 120000 })
    await page.setViewport({width: 1080, height: 1024})
    
    if(site === "www.myjoyonline.com"){
      const element = await page.waitForSelector(".home")
      if(element) await page.screenshot({path: `screensShots/${site}.png`});
    }

    // const element = await page.waitForSelector(".home")
     
    await page.screenshot({path: `screenShots/${site}.png`});

    console.log("scrap successful")
  } catch (error) {
    console.log(`Error Scrapping ${site}`, error)
  }
}

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  
  
  //lunch a new page for each site

  for (const site of newsSites) {
    await startScrapping(site, browser)
  }
  // await startScrapping("www.google.com", browser);

  // console.log(responsePromises)

  await browser.close();
})();