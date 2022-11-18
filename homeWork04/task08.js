const str = 'страшно, очень страшно, мы не знаем что это такое, если бы мы знали, что это такое, но мы не знаем, что это такое';
const arr = str.split(' ');
const count = {};
for (element of arr.flat()){
  if(count[element]){
    count[element]+= 1;
  } else {
    count[element] = 1;
  }
};
console.log(count);

