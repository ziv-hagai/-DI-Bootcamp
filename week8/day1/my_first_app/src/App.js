import Hello from './Hello';
import User from './User';
import './App.css';
import { getDefaultNormalizer } from '@testing-library/react';

function App() {
  const users = [
    {name:'david',username:'dav',email:'dav@gmail.com'},
    {name:'lucas',username:'luc',email:'lucv@gmail.com'},
    {name:'timur',username:'tim',email:'tim@gmail.com'},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Hello name={'john'}/>
        {
          users.map((item,i)=>{
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
