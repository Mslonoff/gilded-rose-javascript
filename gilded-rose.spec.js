import { expect, describe, it } from "vitest";
import { Conjured, QualityIncrease, backstagePass, Legendary, BaseItem } from "./classes.js";
import { items } from './items.js';
import { nextDay } from './gilded-rose.js'

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new BaseItem("basic", 5, 3);
    items.push(testItem);

    nextDay();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(2);
  });
});

describe("double degrade", () => {
  it('reduces quality twice as fast', () => {
    const test2 = new Conjured("Conjured item", -1, 10);
    items.push(test2);

    nextDay();

    expect(test2.sellIn).toBe(-2);
    expect(test2.quality).toBe(8);
  })
});


describe('never negative quality', () => {
  it('quality never goes below 0', () => {
    const test3 = new BaseItem('', 0, 0);
    items.push(test3);

    nextDay();

    expect(test3.sellIn).toBe(-1);
    expect(test3.quality).toBe(0);
  })
});

describe('Aged Brie increases in quality', () => {
  it('increase quality instead of decrease', () => {
    const agedBrie = new QualityIncrease('Aged Brie', 2, 0)
    items.push(agedBrie);

    nextDay();


    expect(agedBrie.quality).toBe(1);
  });
});

describe('Quality never goes above 50', () => {
  it('Stops at 50', () => {
    const  fifty = new BaseItem('fifty', 12, 500);
    items.push(fifty);

    nextDay();

    expect(fifty.quality).toBe(50);
  });
});

describe('Sulfuras, Hand of Ragnaros', () => {
  it('Never has to be sold and never decreases in quality', () => {
    const sulfuras = new Legendary('Sulfuras, Hand of Ragnaros', 0, 80)
    items.push(sulfuras);

    nextDay();

    expect(sulfuras.sellIn).toBe(0);
    expect(sulfuras.quality).toBe(80);
  })
})

describe('Backstage passes to a TAFKAL80ETC concert', () => {
  it('tests quality increments', () => {
    const tix = new backstagePass('Backstage passes to a TAFKAL80ETC concert', 10, 20);
    const tix2 = new backstagePass('Backstage passes to a TAFKAL80ETC concert', 5, 20);
    const tix3 = new backstagePass('Backstage passes to a TAFKAL80ETC concert', -1, 20);
    items.push(tix);
    items.push(tix2);
    items.push(tix3);

    nextDay();

    if (tix.sellIn <= 10) {
      expect(tix.quality).toBe(22);
    }

    if (tix2.sellIn <= 5) {
      expect(tix2.quality).toBe(23)
    }

    if (tix3.sellIn < 0) {
      expect(tix3.quality).toBe(0)
    }
  })
})

describe('c', () => {
  it('decreases quality by 2', () => {
    const newConjured = new Conjured("Conjured item", 3, 6);
    items.push(newConjured);

    nextDay();

    expect(newConjured.sellIn).toBe(2);
    expect(newConjured.quality).toBe(4);
  })
})