import Hello from './Hello';
import User from './User';
import './App.css';

function App() {
  const users = [
    {name:'David',username:'davi',email:'david@gmail.com',id:1},
    {name:'Lucas',username:'luca',email:'luca@gmail.com',id:2},
    {name:'Timur',username:'timu',email:'timu@gmail.com',id:5},
    {name:'aaa',username:'aaa',email:'aaa@gmail.com',id:59},
    {name:'bbb',username:'bbb',email:'bbb@gmail.com',id:65},
    {name:'ccc',username:'ccc',email:'ccc@gmail.com',id:111},
  ]

  return (
    <div className="App">
      <header className="App-header">
        Hello Class - My first react App
        {/*
          comment inside this
        */}
        <Hello name={'John'} />
        {
            users.map((item, i) => {
              return (
                <User key={i} name={item.name} username={item.username} email={item.email} />
              )
            })
        }
      </header>
    </div>
  );
}

export default App;
