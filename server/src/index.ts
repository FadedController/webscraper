import puppeteer from "puppeteer";
import { MY_USER, User } from "./credentials/users";

const LOGIN_URL = "https://plataforma.maristastepic.digital/login/index.php";

const main = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await login(MY_USER, page);
};

type LoginFx = (u: User, p: puppeteer.Page) => Promise<void>;

const login: LoginFx = async (user, page) => {
  await page.goto(LOGIN_URL);
  const loginField = await page.$("#username");
  const passwordField = await page.$("#password");
  const submitButton = await page.$("#loginbtn");
  await loginField?.type(user.username);
  await passwordField?.type(user.password);
  await submitButton?.click();
};

main();
