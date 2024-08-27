// code your solution here
function superbowlWin(record) {
  // Find the first record where the result is "W"
  const win = record.find((entry) => entry.result === "W");

  // If a win is found, return the year, otherwise return undefined
  return win ? win.year : undefined;
}
