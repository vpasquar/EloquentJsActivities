// function that compares two objects and returns true
// only if objects share properties

function deepEqual(a, b) {
  if (a === b) return true;
  
  // if one is not an object return false and get out
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  // how many properties in a ?
  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    // if the count of properties is the same call deep equal
    // recursively and check whether the properties are the same
    // if count of properties is off or properties are not same return fals
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }
  //if function hits the end return true.
  return propsInA == propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
