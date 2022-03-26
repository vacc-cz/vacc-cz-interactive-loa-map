/**
 * It flips y-axis coordinate as SVG coordinate system has coordinate origin in left top corner,
 * not in left bottom corner as in cartesian system.
 *
 * @param y
 * @param graphOuterHeight
 * @returns {number}
 */
export const getTransformedYValue = (
  y,
  graphOuterHeight,
) => graphOuterHeight - y;
