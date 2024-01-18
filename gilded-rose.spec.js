import { expect, describe, it } from "vitest";
import { Item, items, updateQuality, Conjured } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(2);
  });
});

describe("double degrade", () => {
  it('reduces quality twice as fast', () => {
    const test2 = new Item("noSellIn", -1, 10);
    items.push(test2);

    updateQuality();

    expect(test2.sellIn).toBe(-2);
    expect(test2.quality).toBe(8);
  })
})


describe('never negative quality', () => {
  it('quality never goes below 0', () => {
    const test3 = new Item('', 0, 0);
    items.push(test3);

    updateQuality();

    expect(test3.sellIn).toBe(-1);
    expect(test3.quality).toBe(0);
  })
});

describe('Aged Brie increases in quality', () => {
  it('increase quality instead of decrease', () => {
    const agedBrie = new Item('Aged Brie', 2, 0)
    items.push(agedBrie);

    updateQuality();


    expect(agedBrie.quality).toBe(1);
  });
});

describe('Quality never goes above 50', () => {
  it('Stops at 50', () => {
    const concertTix = new Item('Backstage passes to a TAFKAL80ETC concert', 12, 50);
    items.push(concertTix);
    updateQuality();
    expect(concertTix.quality).toBe(50);
  });
});

describe('Sulfuras, Hand of Ragnaros', () => {
  it('Never has to be sold and never decreases in quality', () => {
    const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80)
    items.push(sulfuras);

    updateQuality()

    expect(sulfuras.sellIn).toBe(0);
    expect(sulfuras.quality).toBe(80);
  })
})

describe('Backstage passes to a TAFKAL80ETC concert', () => {
  it('tests quality increments', () => {
    const tix = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
    const tix2 = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
    const tix3 = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 20);
    items.push(tix);
    items.push(tix2);
    items.push(tix3);

    updateQuality();

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

    updateQuality();

    expect(newConjured.sellIn).toBe(2);
    expect(newConjured.quality).toBe(4);
  })
})