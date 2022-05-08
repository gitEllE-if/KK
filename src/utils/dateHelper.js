const DAY = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

export function getDayName(timeUnix) {
  const newDate = new Date(timeUnix);
  return DAY[newDate.getDay()];
}

export function getFormattedDate(timeUnix) {
  let newDate = new Date(timeUnix);
  return newDate.toISOString().substring(0, 10).split("-").reverse().join(".");
}
