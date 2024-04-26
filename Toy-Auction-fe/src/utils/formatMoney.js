function formatCurrency(number) {
  // Number formatting with commas and Vietnamese đồng symbol
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const formattedString = formatter.format(number);

  // Replace '.' with ',' for thousands separation
  return formattedString.replace(/\./g, ",");
}
export default formatCurrency;
