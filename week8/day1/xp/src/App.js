import UserFavoriteColors from './UserFavoriteColors';
import Hello from './Hello';
import './App.css';

function App() {
  const user = {
    first_name: 'Bob',
    last_name: 'Dylan',
    fav_animals : ['Horse','Turtle','Elephant','Monkey']
  };
return (
    <div className="App"> 
      <header className="App-header">
        <h1>I do not use JSX</h1> {/* 1 */}
        <Hello/> {/* 2 */}
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3> {/* 3 */}
        {
          user.fav_animals.map((item,i)=>{
            return (
              <UserFavoriteColors key={i} animal={item} /> 
            )
          })
        }

      </header>
    </div>
  );
}

export default App;
