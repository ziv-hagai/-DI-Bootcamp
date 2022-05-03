const fs = require('fs');

fs.readFile('./RightLeft.txt', (err, data)=>{
  if(err){
    console.log(err);
  }
  else {
    let arr = data.toString().split('');
    let right = arr.filter(i => i=='>').length;
    let left = arr.filter(i => i=='<').length;
    if (right > left) {
      console.log(`${right - left} steps to the right`);
    } else {
      console.log(`${left - right} steps to the left`);
    }

    let position = 0;
    let minusOne = arr.map((e) => {
      if (e =='>') {
    position +=1;
  } else {
    position -= 1;
  }
    return position;  
})
console.log(`first time on the left side at step #${minusOne.indexOf(-1)+1}`);
  
// let position = 0;
// let index = 0
// while (position !== -1) {
//   for (let j of arr) {
//       if (j=='>') {
//         position += 1;
//         index += 1;
//       } else {
//         position -= 1;
//         index += 1;
//       }
//   } //for     
// } //while
// console.log(index)
}
})
