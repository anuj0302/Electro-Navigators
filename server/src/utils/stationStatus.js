export const getStationStatus = (
  availableSlots,
  totalSlots
) => {
  const ratio = availableSlots / totalSlots;

  if (ratio === 0) return "busy";

  if (ratio <= 0.3) return "limited";

  return "available";
};  