function getMonth(): string {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const monthIndex = currentDate.getMonth(); // getMonth() returns 0-11
  return monthNames[monthIndex];
}
export default getMonth;
