const evenFib = n => {
  let a = 1;
  let b = 2;
  let c = a + b;

  let sum = b;

  while (c < n) {
    if (c % 2 === 0) sum += c;
    a = b;
    b = c;
    c = a + b;
  }

  return sum;
};

console.log(evenFib(4000000));
