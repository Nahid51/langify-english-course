import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import TeacherDetail from './components/TeacherDetail/TeacherDetail';
import Teachers from './components/Teachers/Teachers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/about/'>
            <About></About>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route exact path='/teachers'>
            <Teachers></Teachers>
          </Route>
          <Route exact path='/courseDetails/:courseId'>
            <CourseDetails></CourseDetails>
          </Route>
          <Route exact path='/teacherDetails/:teacherId'>
            <TeacherDetail></TeacherDetail>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
