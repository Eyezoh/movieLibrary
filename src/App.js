
import './App.css';
import {Switch, Route } from 'react-router-dom'
import {Home} from './components/Home.jsx'

function App() {
  return (
    <div className="App">
      <h1>My Music Player</h1>
        <main>
        <Switch>
          <Route path ='/' component={Home} exact />
        </Switch>

        </main>
      
    </div>
  );
}

export default App;
