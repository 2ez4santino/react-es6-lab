import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './UserAPI'; // Import the new API component

function App() {
  // --- Step 3: ES6+ Logic ---
  const names = ['Alice', 'Bob', 'Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  // --- Step 4 & 6: Data and Logic ---
  const users = ['Alice', 'Bob', 'Charlie'];
  const isLoggedIn = true;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Step 6: Conditional Rendering */}
        {isLoggedIn ? <h1>Welcome back, {name}!</h1> : <h1>Please log in.</h1>}
        
        {/* Step 5: State & Events */}
        <Counter />
        
        {/* Step 7: API Data Fetching */}
        <UserAPI />

        {/* Step 4: Props & Lists */}
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