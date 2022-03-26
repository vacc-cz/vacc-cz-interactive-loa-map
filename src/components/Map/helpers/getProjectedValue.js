/**
 * Function accept specific value (x or y), minimum and maximum values of specific axis (x or y) and its size in pixels.
 * Based on those arguments, value is projected to the canvas and value recalculated into pixels is returned.
 * If returned value is out of range, its value is set to range boundaries and `isValueOutOfRange` is set to true.
 *
 * @param value
 * @param axisMinValue
 * @param axisMaxValue
 * @param axisSize
 * @returns {{isValueOutOfRange: boolean, value: number}}
 */
export const getProjectedValue = (value, axisMinValue, axisMaxValue, axisSize) => {
  // Note: Check whether axisMinValue is not greater than axisMaxValue is omitted due to performance as this function
  // is called for every single element drawn in canvas.

  const range = axisMaxValue - axisMinValue;
  const percentageValue = (value - axisMinValue) / range;

  let projectedValue = Math.round(axisSize * percentageValue);
  let isValueOutOfRange = false;

  if (value < axisMinValue) {
    isValueOutOfRange = true;
    projectedValue = 0;
  } else if (value > axisMaxValue) {
    isValueOutOfRange = true;
    projectedValue = axisSize;
  }

  return {
    isValueOutOfRange,
    value: projectedValue,
  };
};
