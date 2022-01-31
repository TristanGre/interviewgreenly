import { DiscountOffer } from "../discounts/discountOffer";

describe("DiscountOffer", () => {
	it("should decrease the discount by one in one day before expiration date", () => {
	  let discount = new DiscountOffer("test", 2, 3);
	  discount.updateDiscount();
	  expect(discount).toEqual(new DiscountOffer("test", 1, 2));
	});

	it("should decrease the discount by one in three days before expiration date", () => {
		let discount = new DiscountOffer("test", 4, 1);
		discount.updateDiscount();
		discount.updateDiscount();
		discount.updateDiscount();
		expect(discount).toEqual(new DiscountOffer("test", 1, 0));
	  });

	  it("should decrease the discount by three in three days before expiration date", () => {
		let discount = new DiscountOffer("test", 4, 3);
		discount.updateDiscount();
		discount.updateDiscount();
		discount.updateDiscount();
		expect(discount).toEqual(new DiscountOffer("test", 1, 0));
	  });

	  it("should not decrease the discount", () => {
		let discount = new DiscountOffer("test", 1, 0);
		discount.updateDiscount();
		expect(discount).toEqual(new DiscountOffer("test", 0, 0));
	  });

	  it("should decrease the discount by two in one day after expiration date", () => {
		let discount = new DiscountOffer("test", 0, 2);
		discount.updateDiscount();
		expect(discount).toEqual(new DiscountOffer("test", -1, 0));
	  });

	  it("should decrease the discount by one in one day after expiration date", () => {
		let discount = new DiscountOffer("test", 0, 1);
		discount.updateDiscount();
		expect(discount).toEqual(new DiscountOffer("test", -1, 0));
	  });

	  it("should not decrease the discount after expiration date", () => {
		let discount = new DiscountOffer("test", 0, 0);
		discount.updateDiscount();
		expect(discount).toEqual(new DiscountOffer("test", -1, 0));
	  });
  });