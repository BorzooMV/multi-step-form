export function convertToTitleCase(str: string): string {
  if (!str) {
    return "";
  }
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}

export function convertToUSDollars(
  price: number,
  suffix?: "mo" | "yr"
): string {
  const priceInUSDollars = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price || 0);

  return `${priceInUSDollars}${!!suffix ? "/" + suffix : ""}`;
}
