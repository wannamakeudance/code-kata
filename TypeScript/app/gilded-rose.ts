import { Item } from "./item";

const NORMAL_ITEM_MAX_QUALITY = 50;
const MIN_QUALITY = 0;
const LEGENDARY_QUALITY = 80;
const BACKSTAGE_PASS_THRESHOLD_1 = 11;
const BACKSTAGE_PASS_THRESHOLD_2 = 6;

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateItemQuality(item);
    }

    return this.items;
  }

  private updateItemQuality(item: Item) {
    const { name } = item;

    switch (name) {
      case "Sulfuras":
        item.quality = LEGENDARY_QUALITY;
        break;

      case "Aged Brie":
        this.updateAgedBrie(item);
        break;

      case "Backstage passes to a TAFKAL80ETC concert":
        this.updateBackstagePass(item);
        break;

      default:
        this.updateNormalItem(item);
    }
  }

  private updateNormalItem(item: Item) {
    if (item.quality > MIN_QUALITY) {
      item.quality--;
    }
    item.sellIn--;
  }

  private updateAgedBrie(item: Item) {
    if (item.quality < NORMAL_ITEM_MAX_QUALITY) {
      item.quality++;
    }
    item.sellIn--;
  }

  private updateBackstagePass(item: Item) {
    if (item.sellIn < BACKSTAGE_PASS_THRESHOLD_2) {
      item.quality += 3;
    } else if (item.sellIn < BACKSTAGE_PASS_THRESHOLD_1) {
      item.quality += 2;
    } else {
      item.quality++;
    }

    item.sellIn--;

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }
}
