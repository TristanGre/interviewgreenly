import { DiscountOffer } from "./discountOffer";

export class BackMarket extends DiscountOffer {
	constructor(expiresIn, discountInPercent) {
		super("BackMarket", expiresIn, discountInPercent);
	}

	updateDiscount() {
		--this.expiresIn;
		if (this.expiresIn >= 0) this.discountInPercent -= 2;
		else this.discountInPercent -= 4;

		if (this.discountInPercent < 0)
			this.discountInPercent = 0;
	}
}