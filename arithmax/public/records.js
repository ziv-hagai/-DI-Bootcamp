let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

const score = { player_name: localStorage.name, record: localStorage.score, record_date: today };

if (localStorage.name) {
  add()
} else {
  display()
};

function add() {
  fetch('/db', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(score)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data, 'records');
      display()
    })
    .catch(err => {
      console.log(err);
    });
};

function display() {
  fetch('/records', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    }
  })
    // fetch('/records')
    .then(res => res.json())
    .then(top => {
      console.log(top)
      top.forEach((item, i) => {
        const td = document.querySelector('tbody').children[i].children;
        td[1].innerText = item.player_name;
        td[2].innerText = item.record;
        td[3].innerText = item.record_date.slice(0, 10);
      });
    })
    .catch(err => {
      console.log(err);
    })
}
