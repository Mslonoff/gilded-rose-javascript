import { items } from './items.js';


export function nextDay() {
  for (let item of items) {
    item.updateQuality();
  }
}