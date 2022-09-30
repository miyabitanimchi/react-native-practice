const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getFormattedDate = (date: Date) => {
  return `${date.getFullYear()}-${MONTHS[date.getMonth()]}-${date.getDate()}`;
};
