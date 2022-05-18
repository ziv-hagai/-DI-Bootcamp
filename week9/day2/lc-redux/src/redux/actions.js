export const handleNames = (type,text) =>{
  return {
    type:type,
    payload:text
  }
}

// export const handleFirstName = (text) => {
//   // console.log('FIRST_NAME',text);
//   return {
//     type:'FIRST_NAME',
//     payload: text
//   }
// }
//
// export const handleSecondName = (text) => {
//   return {
//     type:'SECONDE_NAME',
//     payload:text
//   }
// }

export const handleResult = (result_obj) => {
  return {
    type:'RESULTS',
    payload: result_obj
  }
}
