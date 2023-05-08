import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Main from 'routes/Main';
import AboutMe from 'routes/AboutMe';
import Project from 'routes/Project';
import Other from 'routes/Other';
import 'styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <>
          <Route path='/' element={<Main />} />
          <Route path='/about_me' element={<AboutMe />} />
          <Route path='/project' element={<Project />} />
          <Route path='/other' element={<Other />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
