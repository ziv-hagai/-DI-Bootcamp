let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

const topFive = [{player_name: 'a', record: '10', record_date: '2022-05-07'},{player_name: 'b', record: '20', record_date: '2022-05-07'},{player_name: 'c', record: '30', record_date: '2022-05-07'},{player_name: 'd', record: '40', record_date: '2022-05-07'},{player_name: 'e', record: '50', record_date: '2022-05-07'}];

// const score = {player_name:localStorage.name, record:localStorage.score, record_date:today};
module.export = {topFive:topFive};
// console.log(score)

// module.exports = {
//     score
// }
// let body = document.querySelector('tbody').children;

// for (let i=0; i<5; i++){
//     let td = body[i].children;
//     td[1].innerHTML=topFive[i].player_name
//     td[2].innerHTML=topFive[i].record
//     td[3].innerHTML=topFive[i].record_date
// }

