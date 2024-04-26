const { default: formatDate } = require("./formatDate");

function checkDate(dateString) {
  // Format the date using the provided function

  // Convert the formatted date string to a Date object
  const dateObject = new Date(dateString);

  // Get the current date
  const currentDate = new Date();
  console.log({ dateObject }, { currentDate });
  // Check if the formatted date is in the past
  if (dateObject < currentDate) {
    return "Hết thời gian";
  } else {
    return formatDate(dateString);
  }
}
export default checkDate;
