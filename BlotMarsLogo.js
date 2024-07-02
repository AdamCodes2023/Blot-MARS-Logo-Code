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

// create the First Mars Crater outline
const UpperMarsCrater1 = bt.nurbs(
  [
    [width / 2, 5],
    [5, height / 2],
    [width / 2, 120],
    [120, height / 2],
    [width / 2, 5]
  ],
  { steps: 100, degree: 3 });

// add the Mars Crater outline to the final lines
finalLines.push(UpperMarsCrater1);

// transform the Mars Crater outline
bt.scale(finalLines, 0.15)

// draw random craters in the Mars Planet outline
bt.translate(finalLines, [bt.randIntInRange(45, 54), bt.randIntInRange(81, 88)], bt.bounds(finalLines).cc)

// draw the Mars Crater outline
drawLines(finalLines)
finalLines.pop();

// create the Second Mars Crater outline
const UpperMarsCrater2 = bt.nurbs(
  [
    [width / 2, 5],
    [5, height / 2],
    [width / 2, 120],
    [120, height / 2],
    [width / 2, 5]
  ],
  { steps: 100, degree: 3 });

// add the Mars Crater outline to the final lines
finalLines.push(UpperMarsCrater2);

// transform the Mars Crater outline
bt.scale(finalLines, 0.15)

// draw random craters in the Mars Planet outline
bt.translate(finalLines, [bt.randIntInRange(65, 78), bt.randIntInRange(81, 88)], bt.bounds(finalLines).cc)

// draw the Mars Crater outline
drawLines(finalLines)
finalLines.pop();

// create the Third Mars Crater outline
const LowerMarsCrater1 = bt.nurbs(
  [
    [width / 2, 5],
    [5, height / 2],
    [width / 2, 120],
    [120, height / 2],
    [width / 2, 5]
  ],
  { steps: 100, degree: 3 });

// add the Mars Crater outline to the final lines
finalLines.push(LowerMarsCrater1);

// transform the Mars Crater outline
bt.scale(finalLines, 0.15)

// draw random craters in the Mars Planet outline
bt.translate(finalLines, [bt.randIntInRange(45, 54), bt.randIntInRange(36, 43)], bt.bounds(finalLines).cc)

// draw the Mars Crater outline
drawLines(finalLines)
finalLines.pop();

// create the Fourth Mars Crater outline
const LowerMarsCrater2 = bt.nurbs(
  [
    [width / 2, 5],
    [5, height / 2],
    [width / 2, 120],
    [120, height / 2],
    [width / 2, 5]
  ],
  { steps: 100, degree: 3 });

// add the Mars Crater outline to the final lines
finalLines.push(LowerMarsCrater2);

// transform the Mars Crater outline
bt.scale(finalLines, 0.15)

// draw random craters in the Mars Planet outline
bt.translate(finalLines, [bt.randIntInRange(65, 78), bt.randIntInRange(37, 44)], bt.bounds(finalLines).cc)

// draw the Mars Crater outline
drawLines(finalLines)
finalLines.pop();

// create the letter "M"
const letterM = [
  [50, 90],
  [51, 92],
  [52, 90],
  [53, 92],
  [54, 90]
];

// add the letter "M" to the final lines
finalLines.push(letterM);

// transform the letter "M"
bt.scale(finalLines, 1.6)
bt.translate(finalLines, [53, 96.5], bt.bounds(finalLines).cc)

// draw the letter "M"
drawLines(finalLines);
finalLines.pop();

// create the letter "A"
const letterA = [
  [50, 90],
  [51, 92],
  [52, 90],
  [51.5, 91],
  [50.5, 91]
];

// add the letter "A" to the final lines
finalLines.push(letterA);

// transform the letter "A"
bt.scale(finalLines, 1.7)
bt.translate(finalLines, [59.5, 96.5], bt.bounds(finalLines).cc)

// draw the letter "A"
drawLines(finalLines);
finalLines.pop();

// create the letter "R"
const letterR = [
  [50, 90],
  [50, 92],
  [51, 92],
  [51, 91],
  [50, 91],
  [51, 90]
];

// add the letter "R" to the final lines
finalLines.push(letterR);

// transform the letter "R"
bt.scale(finalLines, 1.7)
bt.translate(finalLines, [64.5, 96.5], bt.bounds(finalLines).cc)

// draw the letter "R"
drawLines(finalLines);
finalLines.pop();

// create the letter "S"
const letterS = [
  [52, 92],
  [50, 92],
  [50, 91],
  [52, 91],
  [52, 90],
  [50, 90]
];

// add the letter "S" to the final lines
finalLines.push(letterS);

// transform the letter "S"
bt.scale(finalLines, 1.5)
bt.translate(finalLines, [70, 96.5], bt.bounds(finalLines).cc)

// draw the letter "S"
drawLines(finalLines);
finalLines.pop();

// create the letter "M" in the lower part of the planet
const letterMLower = [
  [50, 90],
  [51, 92],
  [52, 90],
  [53, 92],
  [54, 90]
];

// add the letter "M" to the final lines
finalLines.push(letterMLower);

// transform the letter "M"
bt.scale(finalLines, 1.6)
bt.translate(finalLines, [53.5, 29], bt.bounds(finalLines).cc)

// draw the letter "M"
drawLines(finalLines);
finalLines.pop();

// create the letter "A" in the lower part of the planet
const letterALower = [
  [50, 90],
  [51, 92],
  [52, 90],
  [51.5, 91],
  [50.5, 91]
];

// add the letter "A" to the final lines
finalLines.push(letterALower);

// transform the letter "A"
bt.scale(finalLines, 1.7)
bt.translate(finalLines, [60, 29], bt.bounds(finalLines).cc)

// draw the letter "A"
drawLines(finalLines);
finalLines.pop();

// create the letter "R" in the lower part of the planet
const letterRLower = [
  [50, 90],
  [50, 92],
  [51, 92],
  [51, 91],
  [50, 91],
  [51, 90]
];

// add the letter "R" to the final lines
finalLines.push(letterRLower);

// transform the letter "R"
bt.scale(finalLines, 1.7)
bt.translate(finalLines, [64.75, 29], bt.bounds(finalLines).cc)

// draw the letter "R"
drawLines(finalLines);
finalLines.pop();

// create the letter "S" in the lower part of the planet
const letterSLower = [
  [52, 92],
  [50, 92],
  [50, 91],
  [52, 91],
  [52, 90],
  [50, 90]
];

// add the letter "S" to the final lines
finalLines.push(letterSLower);

// transform the letter "S"
bt.scale(finalLines, 1.5)
bt.translate(finalLines, [70, 29], bt.bounds(finalLines).cc)

// draw the letter "S"
drawLines(finalLines);
finalLines.pop();
