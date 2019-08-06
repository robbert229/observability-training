function notPureAdd(a, b) {
  return a + new Date().getMilliseconds();
}

function pureAdd(a, b) {
  return a + b;
}
