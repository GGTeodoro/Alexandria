import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/html" />
        <Route exact path="/css"/>
        <Route exact path="/bootstrap"/>
        <Route exact path="/javascript"/>
        <Route exact path="/jquery"/>
        <Route exact path="/cookies" />
        <Route path="/" component={Home} />
        <Route path />
      </Switch>
    </div>
  );
}

export default App;
