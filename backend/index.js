
const puppeteer = require('puppeteer');
const input='vats.manglam';
const getQuotes =async() =>{
  const browser = await puppeteer.launch({
    defaultViewport:false});
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.goto('https://www.instagram.com/'+input,{

    waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
})
const quote = await page.evaluate(()=>{
  const usernameHandle = document.querySelector(".x6s0dn4");
  const username = usernameHandle.querySelector("h2").innerText;

  const description = document.querySelector(".xieb3on");
  const userDetailHandle=Array.from(description.querySelectorAll("li"));
  const posts=userDetailHandle[0].querySelector("button > span").textContent;
  const followers=userDetailHandle[1].querySelector("button > span").textContent;
  const following=userDetailHandle[2].querySelector("button > span").textContent;
  return {username,posts,followers,following};
})
console.log(quote);
await browser.close();
// const userHandle=await page.$$("div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4>")

};

getQuotes(input);