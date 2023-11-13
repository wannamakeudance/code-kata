import { Item } from "./item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const { name, sellIn, quality } = this.items[i];

      if (
        name != "Aged Brie" &&
        name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (quality > 0) {
          if (name != "Sulfuras") {
            this.items[i].quality--;
          }
        }
      } else {
        if (quality < 50) {
          this.items[i].quality++;
          if (name == "Backstage passes to a TAFKAL80ETC concert") {
            if (sellIn < 11) {
              if (quality < 50) {
                this.items[i].quality++;
              }
            }
            if (sellIn < 6) {
              if (quality < 50) {
                this.items[i].quality++;
              }
            }
          }
        }
      }
      if (name != "Sulfuras") {
        this.items[i].sellIn--;
      }
      if (this.items[i].sellIn < 0) {
        if (name != "Aged Brie") {
          if (name != "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].quality > 0) {
              if (name != "Sulfuras") {
                this.items[i].quality--;
              }
            }
          } else {
            this.items[i].quality = 0;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality++;
          }
        }
      }
    }

    return this.items;
  }
}
