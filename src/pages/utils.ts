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
  const resValue = generateValueBetween(0, 255);

  if (resValue <= 16 && resValue !== 10) {
    return `0${resValue.toString(16)}`;
  }

  return resValue.toString(16);
};
export const generateColorString = () => {
  const redValue = getSixteenValue();
  const greenValue = getSixteenValue();
  const blueValue = getSixteenValue();

  return `#${redValue}${greenValue}${blueValue}`;
};

export const getStarRate = (): number =>
  Number(generateValueBetween(0.08, 0.2).toFixed(2));
