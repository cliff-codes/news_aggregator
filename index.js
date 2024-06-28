
const cheerio = require("cheerio")
const axios = require("axios")

const newsSites = ["www.myjoyonline.com", "3news.com", "peacefmonline.com", "ghanaweb.com", "www.pulse.com.gh"]
async function performScraping() {
    // downloading the target web page
    // by performing an HTTP GET request in Axios
    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://www.pulse.com.gh/",
        headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })

    if(axiosResponse.error){
        console.log("Error: " + axiosResponse.error)
    }else{
        console.log(axiosResponse.data)
    }
}

// Parsing the HTML content using Cheerio
    // const $ = cheerio.load(axiosResponse.data)

    // newsSites.forEach(async (site) => {
    //     try {
    //         const response = await axios.get(`https://${site}`)
    //         const siteTitle = $(response.data).find("title").text()

    //         console.log(`Title of ${site}: ${siteTitle}`)
    //     } catch (error) {
    //         console.error(`Error fetching ${site}: ${error.message}`)
    //     }
    // })
performScraping()