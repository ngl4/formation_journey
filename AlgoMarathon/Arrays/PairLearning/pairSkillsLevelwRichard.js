// Problem

// Given an input dictionary mapping Fellows (as string names) to skill ratings, return true if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.
// Function Signature: 
// function canMatchFellows(input)

// Examples:


// {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5} => true
// {"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5} => false
// {} => false 

function canMatchFellows(input) {
    let fellowsMap = new Set(); 
    for (const fellow in input) {
      let skills = input[fellow];
      if (fellowsMap.has(skills)) { //find matched skill level
        fellowsMap.delete(skills);
      }else { //do not find any 
        fellowsMap.add(skills);  
      }
    }
    return fellowsMap.size === 0;
  }
  
  let test1 = {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5};
  let test2 = {"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5};
  let test3 = {};
  
  console.log(canMatchFellows(test1), true)
  console.log(canMatchFellows(test2), false)
  console.log(canMatchFellows(test3), true)