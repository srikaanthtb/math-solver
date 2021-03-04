function solver(math){
    const numbers = math.split(' + ')
   const numArr = numbers.map(num => +num);
   let numResult = 0
   const result = numArr.reduce((acc, no) => acc + no, numResult);
   return result
}