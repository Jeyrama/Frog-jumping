/*
Help the frog to find a way to freedom.
You have an array of integers and have a frog at the first position.

[Frog, int, int, int, ..., int]
The integer itself may tell you the length and the direction of the jump.

For instance:
  2 = jump two indices to the right.
  -3 = jump three indices to the left.
  0 = stay at the same position.

Your objective is to find how many jumps are needed to jump out of the array.
Return -1 if Frog can't jump out of the array.

Example:
  array = [1, 2, 1, 5]; 
  jumps = 3  (1 -> 2 -> 5 -> <jump out>)
*/


// Solutions

function solution(a) {
	let c = 0, i = 0;

	while (typeof a[i] !== 'undefined') {
    c++;
    i += a[i];
    
    if (c > a.length) {
    	return -1;
    }
  }

  return a.length ? c : -1;
}

// or

function solution(a) {
  let steps = 0;
  let visited = [];

  let i = 0;
  while (true) {
    steps++;
    
    // Check for escape
    if (i + a[i] > a.length - 1 || i + a[i] < 0) {
      break;
    }
    // Check for revisited stone or no stones at all
    else if (visited.indexOf(i) >= 0 || a.length == 0) {
      steps = -1;
      break;
    }
    // otherwise jump!
    else {
      // Keep track of the stones the frog
      // has been to, so if it revists one, 
      // we know it's stuck.
      visited.push(i);
      
      // Then move to the new stone
      i += a[i];
    }
  }
  return steps;
}