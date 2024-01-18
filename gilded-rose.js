// Real file

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    // Checks item class
    if (item instanceof Conjured) {
      conjuredQuality(item);
    } else {
      if (
        item.name === 'Aged Brie' ||
        item.name === 'Backstage passes to a TAFKAL80ETC concert' ||
        item.name === 'Sulfuras, Hand of Ragnaros'
      ) {
        switch (item.name) {
          case 'Aged Brie':
            // increases in `quality` the older it gets
            item.quality += 1;
            item.sellIn -= 1;
            break;
          case 'Backstage passes to a TAFKAL80ETC concert':
            if (item.sellIn < 0) {
              item.quality = 0;
              item.sellIn -= 1;
            } else if (item.sellIn <= 5) {
              item.quality += 3;
              item.sellIn -= 1;
            } else if (item.sellIn <= 10 && item.sellIn > 5) {
              item.quality += 2;
              item.sellIn -= 1;
            }
            break;
          case 'Sulfuras, Hand of Ragnaros':
            // never has to be sold nor does it decrease in `quality`
            item.sellIn = 0;
            item.quality = 80;
            break;
        }
      } else {
        regularItem(item);
      }
    }
  }
};

function regularItem(item) {
  if (item.quality !== 0 && item.sellIn >= 0) {
    // Normal Degrade
    item.quality -= 1;
    item.sellIn -= 1;
  } else if (item.quality === 0) {
    // Don't decrease quality past 0
    item.sellIn -= 1;
  } else if (item.sellIn < 0 && item.quality >= 2) {
    // Degrades quality twice as fast if sellIn is less than 0
    item.quality -= 2;
    item.sellIn -= 1;
  }
}



function conjuredQuality(item) {
  if (item.quality !== 0 && item.quality !== 1) {
    item.quality -= 2;
    item.sellIn -= 1;
  } else {
    item.quality = 0;
  }
}
