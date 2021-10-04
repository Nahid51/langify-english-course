import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/courseDetails/:courseId'>
            <CourseDetails></CourseDetails>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
