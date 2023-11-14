import { Item } from "@/item";
import { GildedRose } from "@/gilded-rose";

describe("Gilded Rose App Testing", () => {
  it("should decrease sellIn and Quality both by 1 when update normal item", () => {
    const gildedRose = new GildedRose([new Item("item1", 10, 30)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[0].quality).toBe(29);
  });

  it("should keep item quality value always non-negative", () => {
    const gildedRose = new GildedRose([new Item("item1", 10, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });

  it("should increase quality by 1 when calling updateQuality to item Aged Brie", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(1);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(2);
  });

  it("should keep item quality value always no more than 50", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 49)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(50);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(50);
  });

  it("should never has to be sold and quality is always 80 when the name of item is Sulfuras", () => {
    const gildedRose = new GildedRose([new Item("Sulfuras", 10, 30)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(10);
    expect(gildedRose.items[0].quality).toBe(80);
  });

  it("should increase quality by 2 when there are 10 days or less in the item named Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[0].quality).toBe(32);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(8);
    expect(gildedRose.items[0].quality).toBe(34);
  });

  it("should increase quality by 3 when there are no more than 5 days in the item named Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(4);
    expect(gildedRose.items[0].quality).toBe(33);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(3);
    expect(gildedRose.items[0].quality).toBe(36);
  });

  it("should drop quality to 0 after the concert in the item named Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30),
    ]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });

  it("should degrade in Quality twice as fast as normal item when item named Conjured", () => {
    const gildedRose = new GildedRose([new Item("Conjured", 10, 40)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(38);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(36);
  });
});
