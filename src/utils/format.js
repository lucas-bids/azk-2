export const parseMoney = (value) => Number(String(value).replace(",", ".")) || 0;

export const parseTimeToMinutes = (value) => {
  if (!value) {
    return 0;
  }

  const [hours = "0", minutes = "0"] = value.split(":");
  return Number(hours) * 60 + Number(minutes);
};

export const formatMinutesToTime = (minutes) => {
  const safeMinutes = Math.max(0, Math.round(minutes));
  const hours = String(Math.floor(safeMinutes / 60)).padStart(2, "0");
  const remainingMinutes = String(safeMinutes % 60).padStart(2, "0");
  return `${hours}:${remainingMinutes}`;
};

export const formatHoursDecimal = (minutes) => {
  const hours = minutes / 60;
  return `${Number(hours.toFixed(1))}`;
};

export const formatCurrencyAmount = (value) => {
  return Number(value).toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatDateDisplay = (value) => {
  if (!value) {
    return "";
  }

  if (value.includes("/")) {
    return value;
  }

  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
};

export const formatDateShort = (value) => {
  const full = formatDateDisplay(value);
  const [day, month, year] = full.split("/");
  return `${day}/${month}/${year.slice(-2)}`;
};

export const buildReportTitle = (startDate, endDate) =>
  `${formatDateDisplay(startDate)} - ${formatDateDisplay(endDate)}`;
