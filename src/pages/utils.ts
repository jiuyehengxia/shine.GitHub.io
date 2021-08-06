export const generatePosByWidth = (widthValue: number): number =>
  Math.floor(Math.random() * widthValue);

export const generateNewValue = (basicVlaue: number = -50): number =>
  Math.floor(Math.random() * basicVlaue);

export const generateValueBetween = (
  smallVlaue: number,
  largeValue: number
): number => {
  const diff = largeValue - smallVlaue;

  if (diff <= 1) {
    return Math.floor(Math.random() * diff * 100) / 100 + smallVlaue;
  }

  return Math.floor(Math.random() * diff) + smallVlaue;
};

const getSixteenValue = () => {
  return generateValueBetween(0, 188).toString(16);
};
export const generateColorString = () => {
  const redValue = getSixteenValue();
  const greenValue = getSixteenValue();
  const blueValue = getSixteenValue();

  return `#${redValue}${greenValue}${blueValue}`;
};

export const getStarRate = (): number =>
  Number(generateValueBetween(0.08, 0.25).toFixed(2));
