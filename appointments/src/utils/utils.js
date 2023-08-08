export const validateGridDetails = (gridDetails) => {
  const validationErrors = [];

  for (let i = 0; i < gridDetails.length; i++) {
    const { date, startTime, endTime } = gridDetails[i];

    if (startTime >= endTime) {
      validationErrors.push(
        `Start time should be smaller than end time for row ${i + 1}.`
      );
    }

    for (let j = 0; j < i; j++) {
      const prevGridDetail = gridDetails[j];

      if (date === prevGridDetail.date) {
        if (
          (startTime >= prevGridDetail.startTime &&
            startTime < prevGridDetail.endTime) ||
          (endTime > prevGridDetail.startTime &&
            endTime <= prevGridDetail.endTime)
        ) {
          validationErrors.push(
            `Time conflict for row ${i + 1} with previous row ${j + 1}.`
          );
        }
      }
    }
  }

  return validationErrors;
};

export const convertTo12HourFormat = (time) => {
  const [hours, minutes] = time.split(":");
  const parsedHours = parseInt(hours, 10);
  const suffix = parsedHours >= 12 ? "PM" : "AM";
  const formattedHours = parsedHours % 12 || 12;
  return `${formattedHours}:${minutes} ${suffix}`;
};
