import './App.css';
import { Route} from 'react-router-dom';
import Home from './Views/Home/Home';

function App() {
  return (
  
      <div className="App">
      
            <Route exact path="/" component={Home} />
      
      </div>
    
  );
}

export default App;
