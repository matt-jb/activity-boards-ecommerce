import {
  getShortDescription,
  filterSearchResults,
  getGrandTotal,
  getItemsNumber,
  getProductIndex,
  getTotalForItem,
} from "./utils";
import { longString, shortString, cartMock } from "./testUtils";

describe(`getShortDescription`, () => {
  it(`Returns a string of the correct length`, () => {
    const expectedString =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...";
    expect(getShortDescription(longString)).toMatch(expectedString);
    expect(getShortDescription(shortString)).toMatch(shortString);
  });
});

describe(`getItemsNumber`, () => {
  it(`Returns the correct number of total items`, () => {
    expect(getItemsNumber(cartMock)).toBe(4);
  });
});

describe(`getTotalForItem`, () => {
  it(`Returns the correct total for a single item`, () => {
    expect(getTotalForItem(cartMock[0])).toBe(477);
    expect(getTotalForItem(cartMock[1])).toBe(159);
  });
});

describe(`getGrandTotal`, () => {
  it(`Returns the correct grand total for all items`, () => {
    expect(getGrandTotal(cartMock)).toBe(636);
  });
});

describe(`getProductIndex`, () => {
  it(`Finds the product index correctly`, () => {
    const firstItem = cartMock[0].item;
    const secondItem = cartMock[1].item;

    expect(getProductIndex(firstItem, cartMock)).toBe(0);
    expect(getProductIndex(secondItem, cartMock)).toBe(1);
  });
});

describe(`filterSearchResults`, () => {
  it(`Returns an empty array if no products are provided`, () => {
    expect(filterSearchResults("tab")).toStrictEqual([]);
  });
});
