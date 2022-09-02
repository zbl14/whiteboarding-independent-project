import {
  stringToUrls,
  arrDedupe,
  arrDedupeWithSet,
  compressingStr,
  checkingForUniqueness,
} from "../src/js/whitebording";

describe("stringToUrls", () => {
  test("should return empty string if the input is an empty string", () => {
    const input = "";
    const result = stringToUrls(input);
    expect(result).toEqual("");
  });

  test("should replace space with %20", () => {
    const input = "Jasmine Ann Jones";
    const result = stringToUrls(input);
    expect(result).toEqual("Jasmine%20Ann%20Jones");
  });

  test("should remove space before and/or after", () => {
    const input = "   Jasmine Ann Jones   ";
    const result = stringToUrls(input);
    expect(result).toEqual("Jasmine%20Ann%20Jones");
  });
});

describe("arrDedupe", () => {
  test("should return empty array if the input is an empty array", () => {
    const input = [];
    const result = arrDedupe(input);
    expect(result).toEqual([]);
  });

  test("should return the array if the input array contain only one element", () => {
    const input = [1];
    const result = arrDedupe(input);
    expect(result).toEqual([1]);
  });

  test("should return deduped array", () => {
    const input = [7, 9, "hi", 12, "hi", 7, 53];
    const result = arrDedupe(input);
    expect(result).toEqual([7, 9, "hi", 12, 53]);
  });
});

describe("arrDedupeWithSet", () => {
  test("should return empty array if the input is an empty array", () => {
    const input = [];
    const result = arrDedupeWithSet(input);
    expect(result).toEqual([]);
  });

  test("should return the array if the input array contain only one element", () => {
    const input = [1];
    const result = arrDedupeWithSet(input);
    expect(result).toEqual([1]);
  });

  test("should return deduped array", () => {
    const input = [7, 9, "hi", 12, "hi", 7, 53];
    const result = arrDedupeWithSet(input);
    expect(result).toEqual([7, 9, "hi", 12, 53]);
  });
});

describe("compressingStr", () => {
  test("return empty string if the input is an empty string", () => {
    const input = "";
    const result = compressingStr(input);
    expect(result).toEqual("");
  });

  test("should return aaa", () => {
    const input = "aaa";
    const result = compressingStr(input);
    expect(result).toEqual("3a");
  });

  // test("should return 3ab2c4da", () => {
  //   const input = "aaabccdddda";
  //   const result = compressingStr(input);
  //   expect(result).toEqual("3ab2c4da");
  // });
});

describe("checkingForUniqueness", () => {
  test("should return false when input is hello", () => {
    const input = "hello";
    const result = checkingForUniqueness(input);
    expect(result).toEqual(false);
  });

  test("should return true when input is copyright", () => {
    const input = "copyright";
    const result = checkingForUniqueness(input);
    expect(result).toEqual(true);
  });
});
