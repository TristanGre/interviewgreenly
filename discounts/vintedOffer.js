import { DiscountOffer } from "./discountOffer";

export class Vinted extends DiscountOffer {
	constructor(expiresIn, discountRateInPercent) {
		super("Vinted", expiresIn, discountRateInPercent);
	}

	updateDiscount() {
		--this.expiresIn;
		if (this.expiresIn >= 10) ++this.discountInPercent;
		else if (this.expiresIn >= 5) this.discountInPercent += 2;
		else if (this.expiresIn >= 0) this.discountInPercent += 3;
		else this.discountInPercent = 0;

		if (this.discountInPercent > 50)
			this.discountInPercent = 50;
	}
}