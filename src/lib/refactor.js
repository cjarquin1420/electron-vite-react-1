
//Assigning same value to multiple variables
var isFirst = isSecond = isThird = isFourth= true;

export const workingSteps = () => {

//Combine early statemnts and early returns
  if (!isFirst) return "First Step Broken";
  if (!isSecond) return "Second Step Borken";
  if (!isThird) return "Third Step Broken";
  if (!isFourth) return "Fourth Step Broken";
  return "Working Properly"
}
