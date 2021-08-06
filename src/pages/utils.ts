export const generatePosByWidth = (widthValue: number): number =>
  Math.floor(Math.random() * widthValue);

export const generateNewValue = (basicVlaue: number = -50): number =>
  Math.floor(Math.random() * basicVlaue);

export const generateValueBetween = (
  smallVlaue: number,
  largeValue: number
): number => Math.floor(Math.random() * (largeValue - smallVlaue)) + smallVlaue;

const getSixteenValue = () => {
  return generateValueBetween(0, 188).toString(16);
};
export const generateColorString = () => {
  const redValue = getSixteenValue();
  const greenValue = getSixteenValue();
  const blueValue = getSixteenValue();

  return `#${redValue}${greenValue}${blueValue}`;
};
