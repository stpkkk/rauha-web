export function setLocalHoursToUTCOffset(date?: Date | null) {
  if (!date) return date;
  const offset = new Date().getTimezoneOffset();
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;
  date.setHours(hours, minutes);
  return date;
}
