import { stringToUrls } from "../src/js/whitebording";

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
