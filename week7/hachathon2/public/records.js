let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

//top 5 example
// const topFive = [{player_name: 'a', record: '10', record_date: '2022-05-07'},{player_name: 'b', record: '20', record_date: '2022-05-07'},{player_name: 'c', record: '30', record_date: '2022-05-07'},{player_name: 'd', record: '40', record_date: '2022-05-07'},{player_name: 'e', record: '50', record_date: '2022-05-07'}];

//new record example
const score = {player_name:'test', record:11, record_date:today};
// const score = {player_name:localStorage.name, record:localStorage.score, record_date:today};

(function add(){
    const score = {player_name:'test', record:11, record_date:today};
    fetch('http://localhost:7000/records',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(score)
    })
    .then(res => res.json())
    .then(top=>{
      top.forEach((item,i)=>{
        const td = document.querySelector('tbody').children[i].children;
        td[1].innerText=item.player_name;
        td[2].innerText=item.record;
        td[3].innerText=item.record_date.slice(0,10);
    });
    })
    .catch(err=>{
      console.log(err);
    })
  })()

