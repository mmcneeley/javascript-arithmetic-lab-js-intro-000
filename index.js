function add(a, b) {
  return a+b;
}

function subtract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  return a/b;
}

function inc(n) {
  n += 1
  return n;
}

function dec(n) {
  n -= 1
  return n;
}

function makeInt(n) {
  if (isNaN(n)) {
    return NaN
  }
  else {return parseInt(n, 10);}
}

function preserveDecimal(n) {
  if (isNaN(n)) {
    return NaN
  }
  else {return parseFloat(n);}
}
