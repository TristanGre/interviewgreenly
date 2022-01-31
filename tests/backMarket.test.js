import { BackMarket } from "../discounts/backMarketOffer";

describe("BackMarket", () => {
	it("should decrease by two percents in one day before expiration date", () => {
		let discount = new BackMarket(1, 2);
		discount.updateDiscount();
		expect(discount).toEqual(new BackMarket(0, 0));
	})

	it("should not decrease under zero", () => {
		let discount = new BackMarket(1, 0);
		discount.updateDiscount();
		expect(discount).toEqual(new BackMarket(0, 0));
	})

	it("should decrease by four percents in one day after expiration date", () => {
		let discount = new BackMarket(0, 10);
		discount.updateDiscount();
		expect(discount).toEqual(new BackMarket(-1, 6));
	})
})