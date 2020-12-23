import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import JSBasics from './pages/javascript/JSBasics';
import JSHof from './pages/javascript/JSHof';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/html" />
        <Route exact path="/css" />
        <Route exact path="/bootstrap" />
        <Route exact path="/javascript" component={JSBasics} />
        <Route exact path="/javascript/hofs" component={JSHof} />
        <Route exact path="/jquery" />
        <Route exact path="/cookies" />
        <Route path="/" component={Home} />
        <Route path />
      </Switch>
    </div>
  );
}

export default App;
