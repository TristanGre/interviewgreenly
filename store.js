export class DiscountOffer {
  constructor(partnerName, expiresIn, discountRateInPercent) {
    this.partnerName = partnerName;
    this.expiresIn = expiresIn;
    this.discountInPercent = discountRateInPercent;
  }
}

export class Store {
  constructor(discountOffers = []) {
    this.discountOffers = discountOffers;
  }

  updateDiscounts() {
    for (var i = 0; i < this.discountOffers.length; i++) this.discountOffers[i].updateDiscounts();
    return this.discountOffers;
  }
}
