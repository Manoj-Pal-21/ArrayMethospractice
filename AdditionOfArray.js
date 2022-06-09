// sum of array addition

const tAdd = (arr) => {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);
  };
  
  tAdd([1, 2, 3, 4, 5]);
  
  // addition of array
  
  const array = [1, 2, 3, 4, 5];
  
  const add = array.map((val, idx) => {
      if(idx > 0) {
        return val + array[idx - 1]
      } else {
        return val
      };
    });
  
  console.log(add);
  
  
  