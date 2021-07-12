import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./containers/Home";
import CreateTask from "./containers/CreateTask";
import ListTask from "./containers/ListTask";
import Layout from "./containers/Layout";
import EditTask from "./containers/EditTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-task" component={CreateTask}/>
            <Route exact path="/list-task" component={ListTask}/>
            <Route exact path="/edit-task/:idTask" component={EditTask}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
