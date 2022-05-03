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
    let minusOne = arr.map((e) => position += (e=='>') ? 1 : -1 )
    console.log(`first time on the left: step #${minusOne.indexOf(-1)+1}`);
  }
})
