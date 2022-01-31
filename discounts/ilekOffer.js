import { DiscountOffer } from "./discountOffer";

export class Ilek extends DiscountOffer {
	constructor(expiresIn, discountRateInPercent) {
		super("Ilek", expiresIn, discountRateInPercent);
	}

	updateDiscount() { }
}