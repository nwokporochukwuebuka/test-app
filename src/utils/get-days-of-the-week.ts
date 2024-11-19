function getWeekDays(): { day: string; date: string; active: boolean }[] {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

  // Get the current week's Sunday
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  // Create an array of week days with day names, dates, and active status
  const weekDays = Array.from({ length: 7 }, (_, index) => {
    const currentDay = new Date(sunday);
    currentDay.setDate(sunday.getDate() + index);

    // Check if the current day matches today's date
    const isActive = currentDay.toDateString() === today.toDateString();

    return {
      day: daysOfWeek[currentDay.getDay()],
      date: currentDay.getDate().toString(),
      active: isActive,
    };
  });

  return weekDays;
}
export default getWeekDays;
