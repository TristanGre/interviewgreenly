import { Store } from "./store";
import { DiscountOffer } from "./discounts/discountOffer";
import { Naturalia } from "./discounts/naturaliaOffer";
import { Ilek } from "./discounts/ilekOffer";
import { Vinted } from "./discounts/vintedOffer";
import { BackMarket } from "./discounts/backMarketOffer";


import fs from "fs";

const discountOffers = [
  new DiscountOffer("Velib", 20, 30),
  new Naturalia(10, 5),
  new Vinted(5, 40),
  new Ilek(15, 40),
  new BackMarket(10, 45)
];
const store = new Store(discountOffers);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(store.updateDiscounts()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", JSON.stringify(log), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
