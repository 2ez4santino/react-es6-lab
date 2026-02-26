import logo from './logo.svg';
import './App.css';
import UserList from './UserList'; // Correctly imported [cite: 173]

function App() {
  const names = ['Alice','Bob','Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  const users = ['Alice','Bob','Charlie']; // Data for the component 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Render the UserList component here  */}
        <h1>User List:</h1>
        <UserList users={users} /> 

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;