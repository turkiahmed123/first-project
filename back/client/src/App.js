import { Switch, Route } from "react-router-dom";
import "./App.css";
import navbar from "./component/Dashbord/navbar/navbar";
import signup from "./component//signup/Signup";

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={navbar} />
        <Route exact path="/signup" component={signup} />
      </Switch>
    </div>
  );
}

export default App;
