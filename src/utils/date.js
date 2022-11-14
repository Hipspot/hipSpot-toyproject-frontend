export const dateToLocalString = (dateString) => {
  const date = new Date(dateString);
  return (
    date.getFullYear() +
    "년 " +
    (date.getMonth() + 1) +
    "월 " +
    date.getDate() +
    "일"
  );
};
