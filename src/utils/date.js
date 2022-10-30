export const dateToLocalString = (dateString) => {
  console.log(dateString);
  console.log(new Date(dateString));
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
