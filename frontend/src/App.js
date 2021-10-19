import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CalendarPage from "./components/CalendarPage";
import FrontPage from "./components/FrontPage";
import PublicEventsPage from "./components/PublicEventsPage";
import FormPage from "./components/FormPage";

function App() {
  return (
    <Router>
      <div>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/input-form" className="link">
          Form
        </Link>
        <Link to="/calendar" className="link">
          Calendar
        </Link>
        <Link to="/events">Events</Link>
      </div>
      <Switch>
        <Route path="/calendar">
          <CalendarPage />
        </Route>
        <Route path="/input-form">
          <FormPage />
        </Route>
        <Route path="/events">
          <PublicEventsPage />
        </Route>
        <Route exact path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
