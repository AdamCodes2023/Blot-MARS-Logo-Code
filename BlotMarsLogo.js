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
