export class DiscountOffer {
	constructor(partnerName, expiresIn, discountRateInPercent) {
	  this.partnerName = partnerName;
	  this.expiresIn = expiresIn;
	  this.discountInPercent = discountRateInPercent;
	}
  
	// Update the discount for the discount created
	updateDiscount() {
	  --this.expiresIn;
	  if (this.expiresIn < 0 && this.discountInPercent >= 2) this.discountInPercent -= 2;
	  else if (this.discountInPercent > 0) this.discountInPercent -= 1;
	}
}