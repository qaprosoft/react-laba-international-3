// const testInfinity = 1 / 0;
// console.log(testInfinity);

// const testNan = 'Mike' / 2;
// console.log(testNan);

// console.log(!!{});
// if (false) {ʼ
//   console.log('here');
// }

// testDeclation();

// function testDeclation() {
//   console.log("function declaration");
// }

// const testExpression = function () {
//   console.log("funtion expression");
// };

// testExpression();

const user1 = {
  address: {
    street: 'Main street',
  },
  contactInformation: {
    phone: '099 224 9932',
  },
};

const user2 = user1;
const user3 = user2;

// user2.address.street = 'Second street';
user3.address.street = 'Third street';
console.log(user1);
console.log(user2);
console.log(user3);

const number1 = 1;
let number2 = number1;

number2 = 2;
console.log(number1);
console.log(number2);

// const infinityTest = 1 / 0;
// console.log(infinityTest);

// const nanTest = 'test' / 2;
// console.log(nanTest);

// if ('false') {
//   console.log(true);
// }

function scopeVarTest() {
  // var name = undefined;
  console.log(name);

  if (false) {
    var name = 'Misha';
  }

  console.log(name);
}
scopeVarTest();

function scopeConstTest() {
  const name = 'Messi';

  if (true) {
    const name = 'Misha';
    console.log(name);
  }

  console.log(name);
}
scopeConstTest();
