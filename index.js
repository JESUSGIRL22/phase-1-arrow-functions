function foo() {
    return 'bar';
  }
  
  const sum = 1 + 1;
  const difference = 10 - 1;
  
  const fooFunc = function() {
    return 'bar';
  };
  
  const add = (parameter1, parameter2) => parameter1 + parameter2;
  add(2,3); //=> 5
  
  // Parameter list ^^^^^   // Function Body ^^^^^^^^
  
  const twoAdder = x => x + 2;
  // is the same as
  // const twoAdder = (x) => x + 2;
  
  const divide = function() {
    return 2000 / 100;
  };
  
  const square = (num) => num * num;
  
  const sumFunc = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1} and ${parameter2}`);
    return parameter1 + parameter2;
  };
  sumFunc(1,2); //=> 3
  
  const nums = [1,2,3];
  const squares = nums.map(x => x ** 2); 
  squares; //=> [1,4,9]
  nums; //=> [1,2,3]
  
  const finishedItems = overdueTodoItems.map(item => {
    item.className = "complete";
    return item;
  });
  header.innerText = `You finished ${finishedItems.length} items!`;