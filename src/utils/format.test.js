import {
  buildReportTitle,
  formatCurrencyAmount,
  formatDateDisplay,
  formatMinutesToTime,
  parseMoney,
  parseTimeToMinutes,
} from "./format";

describe("format utilities", () => {
  test("parseTimeToMinutes converts hh:mm to minutes", () => {
    expect(parseTimeToMinutes("01:30")).toBe(90);
    expect(parseTimeToMinutes("")).toBe(0);
  });

  test("formatMinutesToTime pads hours and minutes", () => {
    expect(formatMinutesToTime(90)).toBe("01:30");
    expect(formatMinutesToTime(0)).toBe("00:00");
  });

  test("parseMoney handles comma decimals", () => {
    expect(parseMoney("12,50")).toBe(12.5);
    expect(parseMoney("invalid")).toBe(0);
  });

  test("formatCurrencyAmount uses German locale formatting", () => {
    expect(formatCurrencyAmount(1234.5)).toBe("1.234,50");
  });

  test("formatDateDisplay converts ISO dates", () => {
    expect(formatDateDisplay("2022-12-13")).toBe("13/12/2022");
    expect(formatDateDisplay("13/12/2022")).toBe("13/12/2022");
  });

  test("buildReportTitle joins formatted dates", () => {
    expect(buildReportTitle("2022-12-01", "2022-12-31")).toBe(
      "01/12/2022 - 31/12/2022"
    );
  });
});
