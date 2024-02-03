export default function picTimer(dateString) {
  return new Date(dateString).toLocaleString(undefined, {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Display in 12-hour format with AM/PM
    timeZone: "UTC", // Adjust the time zone as needed
  });
}
