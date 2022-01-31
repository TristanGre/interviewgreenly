import { Vinted } from "../discounts/vintedOffer";

describe("Vinted", () => {
	it("should increase the discount by one before ten days expiration", () => {
		let discount = new Vinted(11, 3);
		discount.updateDiscount();
		expect(discount).toEqual(new Vinted(10, 4));
	});

	it("should increase the discount by two in two days before ten days expiration", () => {
		let discount = new Vinted(12, 3);
		discount.updateDiscount();
		discount.updateDiscount();
		expect(discount).toEqual(new Vinted(10, 5));
	});
	
	it("should increase the discount by two in one day at ten days expiration", () => {
		let discount = new Vinted(10, 3);
		discount.updateDiscount();
		expect(discount).toEqual(new Vinted(9, 5));
	});
	
	it("should increase the discount by three in one day at 5 days expiration", () => {
		let discount = new Vinted(5, 3);
		discount.updateDiscount();
		expect(discount).toEqual(new Vinted(4, 6));
	});
	
	it("should not increase nor decrease after reaching maximum discount", () => {
		let discount = new Vinted(1, 50);
		discount.updateDiscount();
		expect(discount).toEqual(new Vinted(0, 50));
	});

	it("should be zero after expiration date", () => {
		let discount = new Vinted(1, 50);
		discount.updateDiscount();
		expect(discount).toEqual(new Vinted(0, 50));
	});
});