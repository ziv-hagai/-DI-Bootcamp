//1
const fs = require('fs');

fs.readFile('./file.txt', (err, data)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log(data.toString());
    }
})

//2
fs.writeFile('./new_file.txt', ('new text'), (err)=>{
    if(err){
      console.log(err);
    }
    else{
    console.log('done writing');
}
  })

  fs.appendFile('./new_file.txt', ' Buy orange juice', err =>{
  if(err){
    console.log(err);
  }
  else{
    console.log('done appending');
}
})

fs.unlink('./new_file.txt', err =>{
    if(err){
      console.log(err);
    }
    else{
      console.log('done deleting');
  }
  })
  