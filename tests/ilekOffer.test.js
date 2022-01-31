import { Ilek } from "../discounts/ilekOffer";

describe("Ilek", () => { 
	it("should never expire nor decrease", () => {
		let discount = new Ilek(1, 1);
		discount.updateDiscount();
		expect(discount).toEqual(new Ilek(1, 1));
	});
});