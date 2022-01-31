import { Naturalia } from "../discounts/naturaliaOffer";

describe("Naturalia", () => {
	it("should increase the discount by one in before ten days expiration", () => {
		let discount = new Naturalia(11, 3);
		discount.updateDiscount();
		expect(discount).toEqual(new Naturalia(10, 4));
	});

	it("should increase the discount by two in two days before ten days expiration", () => {
		let discount = new Naturalia(12, 3);
		discount.updateDiscount();
		discount.updateDiscount();
		expect(discount).toEqual(new Naturalia(10, 5));
	});

	it("should increase the discount by two after the expiration date", () => {
		let discount = new Naturalia(0, 3);
		discount.updateDiscount();
		expect(discount).toEqual(new Naturalia(-1, 5));
	});

	it("should not incrase nor decrease after reaching maximum discount", () => {
		let discount = new Naturalia(1, 50);
		discount.updateDiscount();
		expect(discount).toEqual(new Naturalia(0, 50));
	});
});