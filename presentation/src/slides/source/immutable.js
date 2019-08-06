const obj = {
  a: 1,
  b: 2
};

function addOne(input) {
  return {
    a: input.a + 1,
    b: input.b + 1
  };
}

const newObj = addOne(obj);
