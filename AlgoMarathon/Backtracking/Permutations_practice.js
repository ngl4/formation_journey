function permutations(letters) {
    function dfs(path, used, res) {
        if (path.length == letters.length) {
          const strPath = path.join('');
          res.push(strPath); 
          return; 
        }
        for (let i = 0; i < letters.length; i++) {
            // skip used letters
            if (used[i]) continue; //skip
            // add letter to permutation, mark letter as used
            path.push(letters[i]);
            used[i] = true; 
            dfs(path, used, res); 
            // remove letter from permutation, mark letter as unused
            path.pop();
            used[i] = false;
        }
    }
    const res = [];
    letters = [...letters];
    dfs([], new Array(letters.length).fill(false), res);
    return res;
  }
  
  // console.log(permutations("abc"));
  
  const KEYBOARD = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };
  
  function letterCombinationsOfPhoneNumber(digits) {
      let res = [];
      function dfs(digits, path, res) {
        if (path.length === digits.length) {
            console.log("path (push to res):", path);
            res.push(path.join(''));
            console.log(res); 
            return;
        }
        console.log("path(begining of recursion):", path);
        let next_number = digits.charAt(path.length);
        console.log(next_number); //6
        for (let letter of KEYBOARD[next_number]) { //l
            console.log(letter);
            path.push(letter);
            dfs(digits, path, res);
            path.pop();
            console.log("path(right after pop):", path); 
        }
      }  
      dfs(digits, [], res);
      return res;
  }
  
  console.log(letterCombinationsOfPhoneNumber('56'))
  
  
  