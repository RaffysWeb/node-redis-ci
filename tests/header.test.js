const Page = require("./helpers/page");
const puppeteer = require("puppeteer");

let page;

describe("renders without crashing", () => {
  test("we view the welcome h1 header", async () => {
    let browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"]
    });
    let page = await browser.newPage();

    await page.goto("http://localhost:3000");
    const text = await page.getContentsOf("a.brand-logo");

    expect(text).toEqual("Blogster");
    browser.close();
  }, 16000);
});

// beforeEach(async () => {
//   page = await Page.build();
//   await page.goto("http://localhost:3000");
// });

// afterEach(async () => {
//   await page.close();
// });

// test("The header has the correct text", async () => {
//   const text = await page.getContentsOf("a.brand-logo");

//   expect(text).toEqual("Blogster");
// });

// test("clicking login launches oauth", async () => {
//   await page.click(".right a");

//   const url = await page.url();

//   expect(url).toMatch(/accounts\.google\.com/);
// });

// test("When signed in, shows logout button", async () => {
//   await page.login();

//   const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);

//   expect(text).toEqual("Logout");
// });
