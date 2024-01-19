import { BaseItem, Conjured, QualityIncrease, backstagePass, Legendary } from './classes.js'

export let items = [];

items.push(new BaseItem("+5 Dexterity Vest", 10, 20));
items.push(new QualityIncrease("Aged Brie", 2, 0));
items.push(new BaseItem("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new backstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));