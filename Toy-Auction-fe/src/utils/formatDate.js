function formatDate(dateString) {
  // Create a Date object from the ISO 8601 string
  const dateObject = new Date(dateString);

  // Use toLocaleDateString() with options to format as dd/mm/yyyy
  const formattedDate = dateObject.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return formattedDate;
}
export default formatDate;
