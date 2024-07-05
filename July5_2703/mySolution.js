var argumentsLength = function (...args) {
  //1
  // let argsArr = [...args];
  // return argsArr.length;

  //1
  //return [...args].length;

  //3
  args.length;
};
argumentsLength(1, 2, 3);
