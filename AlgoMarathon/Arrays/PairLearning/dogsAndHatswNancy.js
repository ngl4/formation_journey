/*
One of the most common uses of a queue is to keep a list of "work to be done". Just like doing housework, often new things get added to the TODO list while doing some other task. New jobs get added to the end of the queue, and when one is complete, the next one is taken from the top of the list.
Oliver is missing his favorite hat and is asking his friends at the dog park if they've seen it. Each dog either has seen it or suggests a list of other dogs to ask. Return the name of the dog who has seen the hat. Oliver starts out by asking his best friend. This function will take two parameters. The first is a map of dogs to a list of their friends. The second is Oliver's best friend, who Oliver will ask first.

Function Signature: 
function findHat(dogs, bestFriend)

Target runtime and space complexity:
 O(n)

Examples:
const dogs = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
};

console.log(findHat(dogs, 'Loki')); // returns 'Ivy'
*/


/*

Questions: 
what if no one sees Ivy!! (we need to ask for clarification)
what if no one sees the Hat!! (throw an error)
Should the order of the seen dogs matter? 


approach: 
- queue: order of dogs to ask 
- set: dogs that we have asked 

*/


function findHat(dogs, bestFriend) {
    let queue =[bestFriend]; 
    let askedDogs = new Set(); 
    while (queue.length > 0) {
      let currentDog = queue.pop();
  
      if (dogs[currentDog][0] === 'HAT') return currentDog;
  
      dogs[currentDog].forEach(dog => {
        if (!askedDogs.has(dog)) askedDogs.add(dog)
      })
  
  
      // let dog = queue.pop(); //or shift() 
      // if(!askedDogs.has(dog)) { //if we have not asked the dog
      //   askedDogs.add(dog);
      //   queue = [...queue, ...dogs[dog]]; 
      // }
      // if(dogs[dog][0] === 'HAT') {
      //   return dog; 
      // }
    }
    return "No Hat Found!"; 
  }
  /*
          Loki
            |
         Snoopy
            |
          Pepper
  
  
          W
        e.  h
      t.       a
                 t.
  
                 
  
  */
  
  //Test cases
  const dogs = {
    'Carter': ['Fido', 'Ivy'],
    'Ivy': ["HAT"], // Ivy has seen the hat
    'Loki': ['Snoopy'],
    'Pepper': ['Carter', 'loki'],
    'Snoopy': ['Pepper'],
    'Fido': []
  };
  const dogs2 = { //edge case that does not taken into consideration in this problem, we have assumed all the dogs at least know other dogs in the list 
    'Carter': ['Fido'],
    'Ivy': ['HAT'],
    'Loki': ['Snoopy'],
    'Pepper': ['Carter'],
    'Snoopy': ['Pepper'],
    'Fido': []
  };
  
  
  console.log(findHat(dogs, 'Loki')); // returns 'Ivy'
  console.log(findHat(dogs2, 'Loki')); // return 'no hat found' 
  
  
  
  
  
  