import { DiscountOffer } from "./discountOffer";

export class Naturalia extends DiscountOffer {
	constructor(expiresIn, discountRateInPercent) {
		super("Naturalia", expiresIn, discountRateInPercent);
	}

	updateDiscount() {
		--this.expiresIn;
		if (this.expiresIn < 0 && this.discountInPercent < 50) this.discountInPercent += 2;
		else if (this.discountInPercent < 50) ++this.discountInPercent;

		if (this.discountInPercent > 50) this.discountInPercent = 50;
	}
}