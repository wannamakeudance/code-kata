import { Item } from "@/item";

describe("Base Item Testing", () => {
  it("should display the correct name as the first parameter in Item", () => {
    const item = new Item("foo", 0, 0);
    expect(item.name).toBe("foo");
  });

  it("should display the correct sellIn time as the second parameter in Item", () => {
    const item = new Item("foo", 2, 0);
    expect(item.sellIn).toBe(2);
  });

  it("should display the correct quality as the third parameter in Item", () => {
    const item = new Item("foo", 2, 30);
    expect(item.quality).toBe(30);
  });
});
