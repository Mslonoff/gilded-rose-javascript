export class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
}
  
export class BaseItem extends Item {
    updateQuality() {
        if (this.quality !== 0 && this.sellIn >= 0) {
            this.quality -= 1;
            this.sellIn -= 1;
        } else if (this.quality === 0) {
            this.sellIn -= 1;
        } else if (this.sellIn < 0 && this.quality >= 2) {
            this.quality -= 2;
            this.sellIn -= 1;
        }

        if(this.quality >= 50) {
            this.quality = 50
        }
    }
}
  
export class Conjured extends Item {
    updateQuality() {
        if (this.quality !== 0 && this.quality !== 1) {
            this.quality -= 2;
            this.sellIn -= 1;
        } else {
            this.quality = 0;
        }
    }
}
  
export class QualityIncrease extends Item {
    updateQuality() {
        this.quality += 1;
        this.sellIn -= 1;
    }
}
  
export class backstagePass extends Item {
    updateQuality() {
        if (this.sellIn < 0) {
            this.quality = 0;
            this.sellIn -= 1;
        } else if (this.sellIn <= 5) {
            this.quality += 3;
            this.sellIn -= 1;
        } else if (this.sellIn <= 10 && this.sellIn > 5) {
            this.quality += 2;
            this.sellIn -= 1;
        }
    }
}
  
export class Legendary extends Item {
    updateQuality() {
      // No changes needed for Legendary items
    }
}