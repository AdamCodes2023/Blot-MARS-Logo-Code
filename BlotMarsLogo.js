// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

//Define Document Dimensions
const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

// create a polyline for the first four numeral
const firstFour = [
  [30, 90],
  [35, 90],
  [35, 75],
  [40, 75],
  [40, 90],
  [45, 90],
  [45, 60],
  [40, 60],
  [40, 68],
  [30, 68],
  [30, 90]
];

// add the first four numeral to the final lines
finalLines.push(firstFour);

// transform the first four numeral
bt.scale(finalLines, 0.75)
bt.translate(finalLines, [37, height / 2], bt.bounds(finalLines).cc)

// draw the first four numeral
drawLines(finalLines);
finalLines.pop();

// create the first zero numeral
const firstZero = bt.catmullRom([
  [55, 60],
  [48, 62],
  [45, 75],
  [48, 88],
  [55, 90],
  [62, 88],
  [65, 75],
  [62, 62],
  [55, 60]
]);

// add the first zero numeral to the final lines
finalLines.push(firstZero);

// transform the first zero numeral
bt.scale(finalLines, 0.75)
bt.translate(finalLines, [53.333, height / 2], bt.bounds(finalLines).cc)

// draw the first zero numeral
drawLines(finalLines)
finalLines.pop();

// create the inner part of the first zero numeral
const firstZeroInner = bt.catmullRom([
  [55, 60],
  [48, 62],
  [45, 75],
  [48, 88],
  [55, 90],
  [62, 88],
  [65, 75],
  [62, 62],
  [55, 60]
]);

// add the inner part of the first zero numeral to the final lines
finalLines.push(firstZeroInner);

// transform the inner part of the first zero numeral
bt.scale(finalLines, 0.35)
bt.translate(finalLines, [53.333, height / 2], bt.bounds(finalLines).cc)

// draw the inner part of the first zero numeral
drawLines(finalLines)
finalLines.pop();

// create the second zero numeral
const secondZero = bt.catmullRom([
  [55, 60],
  [48, 62],
  [45, 75],
  [48, 88],
  [55, 90],
  [62, 88],
  [65, 75],
  [62, 62],
  [55, 60]
]);

// add the second zero numeral to the final lines
finalLines.push(secondZero);

// transform the second zero numeral
bt.scale(finalLines, 0.75)
bt.translate(finalLines, [71.666, height / 2], bt.bounds(finalLines).cc)

// draw the second zero numeral
drawLines(finalLines)
finalLines.pop();

// create the inner part of the second zero numeral
const secondZeroInner = bt.catmullRom([
  [55, 60],
  [48, 62],
  [45, 75],
  [48, 88],
  [55, 90],
  [62, 88],
  [65, 75],
  [62, 62],
  [55, 60]
]);

// add the inner part of the second zero numeral to the final lines
finalLines.push(secondZeroInner);

// transform the inner part of the second zero numeral
bt.scale(finalLines, 0.35)
bt.translate(finalLines, [71.666, height / 2], bt.bounds(finalLines).cc)

// draw the inner part of the second zero numeral
drawLines(finalLines)
finalLines.pop();

// create the second four numeral
const secondFour = [
  [30, 90],
  [35, 90],
  [35, 75],
  [40, 75],
  [40, 90],
  [45, 90],
  [45, 60],
  [40, 60],
  [40, 68],
  [30, 68],
  [30, 90]
];

// add the second four numeral to the final lines
finalLines.push(secondFour);

// transform the second four numeral
bt.scale(finalLines, 0.75)
bt.translate(finalLines, [88, height / 2], bt.bounds(finalLines).cc)

// draw the second four numeral
drawLines(finalLines);
finalLines.pop();

// create the Mars Planet outline
const MarsPlanet = bt.nurbs(
  [
    [width / 2, 5],
    [5, height / 2],
    [width / 2, 120],
    [120, height / 2],
    [width / 2, 5]
  ],
  { steps: 100, degree: 3 });

// add the Mars Planet outline to the final lines
finalLines.push(MarsPlanet);

// draw the Mars Planet outline
drawLines(finalLines)
finalLines.pop();
