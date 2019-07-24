function task1(x, y)  {
  return (
    console.log('task1', (Math.pow(x, 2)- 4 / Math.pow(y, 2) + 2) + Math.pow(2, Math.sin(Math.sqrt(Math.pow(x,2) + 1 ) ) )  )
  )
}
task1(4,5);

function task2(x, y) {
  console.log('task2',Math.log((Math.exp(1) + 1)) + Math.cbrt(Math.pow(x, 2) + 4))
}
task2(5,6)


function task3(x, y) {
  console.log('task3',Math.atan((3 * x + 4) / (Math.pow(y,2) + 4)) + Math.sqrt(Math.pow((Math.pow(x, 2) + 3), 3)))
}
task3(2,3);


function task4(x, y) {
  console.log('task4', Math.pow(Math.pow(x, 2) + Math.cbrt(Math.pow(y,2) + 4), 1/4) + Math.pow(Math.abs(x) + Math.abs(y), 10))
}
task4(2,3);

function task5(x, y) {
  console.log('task5',Math.sin(Math.PI/12 + x) * Math.cos((y + Math.pow(Math.sin(Math.cos(x + y) + 1),2))
    / Math.PI + Math.pow(Math.sin(Math.cos(x + y) + 1),2)) + Math.pow(Math.E, Math.pow(Math.sin(Math.cos(x + y) + 1),2) + 4))
}
task5(2,3);

function task6(x, a) {
   if (-5 <= x && x <= 5) {
     console.log('task6',Math.pow((1 + Math.pow(a,2)),6))
   } else if (x > 5) {
       console.log('task6',Math.cos(Math.pow(Math.log(Math.abs(x)),2)) + Math.pow(x,8));
    }  else {
         console.log('task6', a)
   }
}
task6(-8,5)


function task7(a, b) {
   if (a + b < 3) {
     console.log('task7', Math.pow(Math.atan(a + b),4))
   } else if (a + b > 5) {
       console.log('task7', Math.pow(Math.log(a + b) / Math.log(8),2));
    }  else {
         console.log('task7', Math.pow(a,-10))
   }
}
task7(5,5);

function task8(a, x) {
  if (Math.abs(a) < 3) {
    console.log('task8', Math.pow(Math.sin(Math.abs(x + a)),2) + Math.pow(Math.cos(Math.pow(x, 2)),2))
  } else {
    console.log('task8', Math.pow(Math.pow(a,2) + Math.pow(x,2),1/4) + Math.log2(Math.pow(a,2) + Math.pow(x, 4)));
  }
}
task8(2,5);

function task9(z, x) {
  if (1 <= x && x <= 7) {
    console.log('task9', Math.pow(Math.abs(x) + 2 * Math.abs(z),1/4) + Math.pow(Math.E, Math.abs(x+1)))
  } else {
    console.log('task9', Math.pow(Math.atan(Math.pow(x + z,7)),2));
  }
}
task9(2,8);

function task10(a, x, b) {
  if (a < 3) {
    console.log('task10', Math.pow(Math.E, Math.cos(a + b + x)) * Math.atan(a + Math.pow(b,2)))
  } else {
    console.log('task10', Math.log(4 + Math.pow(a,2) + Math.pow(b,2)) / Math.log(3));
  }
}
task10(5,8,4);


function task11(a, x, b) {
  console.log('task11', Math.max(a, x, b));
}
task11(5,8,4);

function task12(a, x, b) {
  console.log('task12', Math.min(a, x, b));
}
task12(5,8,4);

function task13(a, x, b) {
  console.log('task9', (a === 1 || x === 1 || b === 1))
}
task13(4,1,4);

function task14(a, c, b) {
  console.log('task14', (a === 2 && b === 2) || (a === 2 && c === 2) || (b === 2 && c === 2))
}
task14(7,2,2);

function task15(a, c, b) {
  console.log('task15', (a + b > c ) && (a + c > b) && (c + b > a))
}
task15(2,6,2);

function task16(a, c, b) {
  (a + b > c ) && (a + c > b) && (c + b > a) ? console.log('task16',  'y = 1')  : console.log('task16',  'y = 2')

}
task16(2,6,2);

function task17(a, c, b) {
  let max = Math.max(a,b,c);
  let min = Math.min(a,b,c);
  console.log("task17", (max - a === a - min) || (max - b === b - min) || (max - c === c - min))
}
task17(2,3,4);

function task18(a, c, b) {
  let arr = [];
  arr.push(a,b,c);
  console.log('task18', arr.sort((a, b) =>  a - b))
}
task18(20, 6, 2);

function task19(a, c, b) {
  let arr = [];
  arr.push(a,b,c);
  console.log('task19', arr.filter(a =>  a !== 20))
}
task19(20, 6, 2);

function task20(a, b, c, d) {
  console.log('task20', (a === 1 || c === 1 || b === 1 || d === 1))
}
task20(20, 6, 2, 1);

function task21(a, b, c, d) {
  console.log('task21', ((a + b === c + d) || (a + c === b + d) || (a + d === b + c)))
}
task21(20, 6, 2, 1);

function task22(a, b, c, d) {
  let arr = [];
  let count = 0;
  arr.push(a,b,c,d);
  arr.some(num => {
    if (num % 2 !== 0) {
      count++;
      console.log('task22', count)
      return count === 2;
    }

  });
}
task22(7, 5, 9, 1);


function task23(a, b, c, d) {
  let arr = [];
  arr.push(a,b,c,d);
  let newArray = arr.filter(num => num % 2 !== 0);
  if (newArray.length === 2) {
    console.log('task23', 1)
  } else {
    console.log('task23', 2)
  }
}
task23(2, 8, 10, 1);

function task24(a, b, c, d) {
  let arr = [];
  arr.push(a,b,c,d);
  let newArray = arr.sort((a, b) =>  a - b);
  let initial = newArray[0] / newArray[1];
  for (let i = 1; i <= newArray.length - 2; i++) {
    if (newArray[i] / newArray[i + 1] !== initial) {
      console.log('task24', false)
    } else {
      console.log('task24', true)
    }
  }
}
task24(1,2, 7, 10 );

function task25(x, y) {
  if (Math.pow(x,2) + Math.pow(y,2) > 1 && x + y < 2 && x > 0 && y > 0) {
    console.log('task25', x + Math.pow(x, 2))
  } else {
    console.log('task25', 5 * x)
  }
}
task25(2,2);

function task26(x, y) {
  if (y < 3 * x / 4 && Math.pow(x,2) + Math.pow(y, 2)) {
    console.log('task26', x + Math.pow(x, 2) + 4)
  } else {
    console.log('task26', 5 * x)
  }
}
task26(5,2);

function task27(x, y) {
  if (y < -x && y > x && Math.pow(x, 2) + Math.pow(y,2) < 1) {
    console.log('task27', 5 * Math.pow(x,2) + 2 * y)
  } else {
    console.log('task27', -7)
  }
}
task27(5,2);

function task28(x, y) {
  if (y < x +1 && y < -x/2 + 1 && x > 0) {
    console.log('task28', 5 * Math.atan(x))
  } else {
    console.log('task28', Math.cos(x))
  }
}
task28(5,2);


// function task30(n) {
//   let x = 1;
//   let sum = x;
//   while (x <= n) {
//     x = 0.5 * Math.abs(x-4);
//     sum += Math.pow(x, 2);
//   }
//   console.log('task30', sum);
// }
// task30(5);

function task31(n) {
  let x = 100;
  let sum = 0;
  while (x <= n) {
    x++;
    if (x % 5 === 0) {
      sum += x;
    }
  }
  console.log('task31', sum)
}

task31(130);

function task32(n) {
  let x = 1;
  let sum = 0;
  while (x <= n) {
    sum += (Math.pow(Math.log(3), n) / (n-1) * n) * Math.pow(x, n);
    x++;
  }
  console.log('task32', sum);
}
task32(5);


function task33(n) {
  let x = 999;
  while (n <= x) {
    let num = parseInt(Math.pow(n * 16, 1/2).toFixed());
    if (Math.pow(num,2) === n * 16) {
      console.log('task33', n);
      break;
    }
    n++;
  }
}
task33(100);

function task34(n) {
  let x = 1000;
  while (n >= x) {
    let num = parseInt(Math.pow(n * 14, 1/2).toFixed());
    if (Math.pow(num,2) === n * 14) {
      console.log('task34', n);
      break;
    }
    n++;
  }
}
task34(9999);

function task35(n) {
  let i = 100;
  let j = 999;
  while (i <= j) {
    if (Math.pow(i, 1/2) > n) {
      console.log('task35', i);
      break;
    }
    i++;
  }
}
task35(15);

function task36(n) {
  let mn = 0;
  do {
    mn= n % 3;
    n = n / 3;
  }
  while ( mn === 0 && n > 1 );
  if (mn === 0 && n === 1) {
    console.log('task36',true)
  } else {
    console.log('task36',false)
  }
}
task36(58);

function task37(n) {
  let num = 1;
  let division;
  do {
    num++;
    division = n % num;
  } while ( division !== 0 && num <= Math.pow(n,1/2));
  if (division !== 0) {
    console.log('task37',true)
  } else {
    console.log('task37',false)
  }
}

task37(19);

function task38(x, y) {
  let num = 1;
  let division;
  do {
    num++;
    division = (x + y) % num;
  } while ( division !== 0 && num <= Math.pow(x + y,1/2));
  if (division !== 0) {
    console.log('task38',true)
  } else {
    console.log('task38',false)
  }
}

task38(10,13);

function task39(n) {
  let i = 1, fact;
  fact = 1;
  do {
    fact = fact * i;
    i++;
  } while(i <= n);
  console.log('task39', fact)

}
task39(5);

function task40(n, a, b) {
  let sum = 0;
  let length = b - a / n;
  do {
    sum++;
    console.log('task40', a, a + length * sum, b)
  } while (sum !== b)
}

task40(5, 4,15);

function task41(n) {
  let x = 1;
  let k = 1;
  do {
    k++;
    x++;
    console.log('task41', (x + 1) / k)
  } while (k !== n)
}

task41(15);

function task42(n) {
  let x = 1, current;
  let y = 2;
  let k = 2;
  do {
    current = (x + 2 * y) / 3;
    x = y;
    y = current;
    k++;
    console.log('task42', (x - 1  + 2 * x) / 3)
  } while (k !== n)
}

task42(15);

function task43(n) {
  let k = 1;
  do {
    k++;
  } while (Math.pow(k,2) <= n)
  k--;
  console.log(k)
}

task43(25);

function task44(n) {
  let k = n;
  do {
    k--;
  } while (Math.pow(3, k) > n);
  console.log('task44', k)
}

task44(40);

task43(25);

function task45(n, p) {
  let initial = 30000;
  let count = 0;
  do {
    count++;
    initial = initial + initial * p / 100;
  } while (initial < 100000);
  console.log('task45', initial, count)
}

task45(40,2);

function task47(n) {
  let x = 0, fib;
  let y = 1;
  do {
    fib = x + y;
    x = y;
    y = fib;
  } while (y !== n && y < n);
  if (y === n) {
    console.log('task47', true)
  }
}

task47(13);

function task211() {
  let sum = 0;
  let count = 0;
  let arr = [87,5,2,6,4,-8,-9];
  arr.forEach(num => {
    if (num > 0) {
      count++;
      sum += num;
    }
  });
  console.log('task211', sum / count)
}

task211();

function task49(k) {
  let count = 0;
  let arr = [87,5,2,6,4,-8,-9];
  arr.forEach((num, index)=> {
    if (index % k === 0) {
      count++;
    }
  });
  console.log('task49', count)
}

task49(4);

function task50(k) {
  let arr = [87,5,2,6,4,-8,-9];
  console.log('task50', arr.filter(num => Math.abs(num) < k).length)
}

task50(58);

function task51(k) {
  let sum = 0;
  let count = 0;
  let arr = [87,5,2,6,4,-8,-9];
  let newArr = arr.filter((num, index) => index % k === 0);

  newArr.forEach(num => {
    count++;
    sum += num;
  });

  console.log('task51', sum/count)
}

task51(4);

function task52() {
  let sum = 1;
  let arr = [87,5,2,6,4,-8,-9];
  arr.forEach((num,index) => {
    if (num - index > 0) {
      sum *= num;
    }
  });

  console.log('task52', sum)
}
task52();

function task53() {
  let sum = 1;
  let arr = [87,5,2,6,4,-8,-9];
  arr.forEach((num,index) => {
    if (num - index > 0) {
      sum *= num;
    }
  });

  console.log('task53', sum)
}

task53(4);

function task54() {
  let sum = 0;
  let arr = [87,5,2,6,4,-8,-9];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      sum += Math.pow(num,2);
    }
  });
  console.log('task54', sum)
}
task54();

function task55() {
  let sum = 0;
  let arr = [87,5,2,6,4,-8,-9];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      sum += Math.pow(num,2);
    }
  });
  console.log('task55', sum)
}

task55();

function task56() {
  let arr = [87,5,2,6,4,-8,-9];
  console.log('task56', Math.max(...arr) )
}

task56();

function task255() {
  let sum = 0;
  let arr = [5,87,2,6,4,-8,-9];
  let max = Math.max(...arr);
  arr.forEach((num,index) => {
    if (num === max) {
      sum = max + index;
    }
  });
  console.log('task255', sum)
}

task255();

function task58() {
  let arr = [5,2,6,87,-8,-9,100];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      console.log(max);
    }
  }
}
task58();

function task191(n, x) {
  let sum = 0;
 for (let i=0; i <= n; i++) {
   sum += Math.pow(x, i);
 }
  console.log('task191', sum)
}
task191(2,2);

function task192(n, x) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += Math.pow(-1, i) * Math.pow(x, i)
  }
  console.log('task192', sum)
}
task192(3,2);

function task193(n) {
  let fact = 1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
    sum += fact;
  }
  console.log('task193', sum)
}
task193(4);

function task194(n) {
  let fact = 1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    fact = 1 / fact * i;
    sum += fact;
  }
  console.log('task194', sum)
}
task194(4);

function task195(n, x) {
  let fact = 1;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      fact = Math.pow(x, i);
    } else {
      fact = Math.pow(x, i) / fact * i;
    }
    sum += fact;
  }
  console.log('task195', sum)
}

task195(4, 3);

function task196(n, x) {
  let fact = 1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
      fact = fact * (2*i) * (2 * i +1)
      sum += Math.pow(-1, i) * Math.pow(x, 2 * i + 1) / fact;
  }
  console.log('task196', sum)
}

task196(4, 3);

function task197(n, x) {
  let fact = 1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    fact = fact * (2 * i + 1) * (2 * i);
    sum += Math.pow(-1, i) * Math.pow(x, 2 * i) / fact;
  }
  console.log('task197', sum)
}

task197(4, 3);

function task199(n, x) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(-1, i) * Math.pow(x, 2 * i + 1) / 2 * i + 1;
  }
  console.log('task199', sum)
}

task199(4, 0.1);

function task245() {
  let arr = [5, 2, 6, 87, -8, -9, 100];
  let count = 0;
  let sum = 0;
  arr.forEach((num, index) => {
    if (Math.pow(index, 2) > 0 && Math.pow(index, 2) % 2 === 0) {
      sum += num;
      count++;
    }
  });
  console.log('task245', sum / count)
}
task245();

function task257() {
  let arr = [5, 2, 6, 87, -8, -9, 100];
  let max = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      console.log('task257', i);
    }
  }
}
task257();

function task258() {
  let arr = [5, 2, 6, 87, -8, -9, 100];
  let arr1 = [1, 47, 8, 68, 54, 59, 35];
  const arrSum = arr.reduce((a, b) => a + b) / arr.length;
  const arrSum1 = arr1.reduce((a, b) => a + b) / arr1.length;
  console.log('task258', arrSum * arrSum1);
}
task258();

function task259() {
  let arr = [5, 2, 6, 87, -8, -9, 100];
  let arr1 = [1, 47, 8, 68, 54, 59, 35];
  const arrSum = Math.pow(arr.reduce((a, b) => Math.pow(a, 2)+ Math.pow(b, 2)) / arr.length, 1/2);
  const arrSum1 =  Math.pow(arr1.reduce((a, b) => Math.pow(a, 2)+ Math.pow(b, 2)) / arr1.length, 1/2);
  console.log('task259', arrSum * arrSum1);
}
task259();

function task263() {
  let arr = [5, 2, 6, 87, -8, -9, 100];
  let arr1 = [1, 47, 8, 68, 54, 59, 35];
  let arrLength = arr.filter(num => num > 0).length;
  let arrLength1 = arr1.filter(num => num > 0).length;
  console.log('task263', arrLength + arrLength1);
}
task263();

function task265() {
  let arr = [5, 2, 6, 87, -8, -9, 100];
  let arr1 = [1, 47, 8, 68, 54, 59, 35];
  const arrSum = arr.reduce((a, b) => a + b);
  const arrMult = arr1.reduce((a, b) => a * b);
  console.log('task258', arrSum - arrMult);
}

task265();

function task266() {
  let arr = [5, 2, 6, 87, -8, -9, 100];
  let arr1 = [1, 47, 8, 68, 54, 59, 35];
  const newArray = arr.filter(a => a % 2 !== 0);
  const newArray1 = arr1.filter(a => a % 2 === 0);
  const arrSum = newArray.reduce((a, b) => a + b);
  const arrMult = newArray1.reduce((a, b) => a * b);
  console.log('task266', arrSum - arrMult);
}
task266();

function task271() {
  let arr = [5, 2, 6, 87, 'a',true,false,'a', 'b'];
  console.log('task271', arr.filter(symb => symb === 'a').length);
}
task271();

function task272(n) {
  let t = true;
  let arr = [5, 2, 6, 87, 'a',true,false,'a', 'b', 'k'];
  if (n / 2 >=  arr.filter(symb => symb === 'b').length) {
    console.log('task272', t)
  } else {
    console.log('task272', false)
  }
}
task272(1);

function task275() {
  let arr = [5, 2, 6, 87, 'a', true,false, 'a', 'b','f', 'k'];
  console.log('task275', arr.filter(symb => symb < 'k').length)
}
task275();

function task278() {
  let arr = [5, 2, 6, 87, 'a','f', true,false, 'a', 'b','f', 'k'];
  let newArr = [];
  arr.forEach(num => {
    newArr.push(num);
    if (num === 'f') {
      newArr.push('f');
    }
  });
  console.log('task278', newArr)
}
task278();
