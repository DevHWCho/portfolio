import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import AboutMe from 'routes/AboutMe';
import Project from 'routes/Project';
import Other from 'routes/Other';
import 'styles/App.css';
import Cover from 'routes/Cover';
import { useState } from 'react';
import Davich from 'components/Davich';
import SamsungEm from 'components/SamsungEm';
import Cjone from 'components/Cjone';
import Messenger from 'components/Messenger';
import MovieApp from 'components/MovieApp';

function App() {
  const [isVisibleNav, setIsVisibleNav] = useState(false);

  const visibleNav = () => {
    setIsVisibleNav(true);
  }

  const inVisibleNav = () => {
    setIsVisibleNav(false);
  }

  return (
    <>
      <Header visibleNav={visibleNav} inVisibleNav={inVisibleNav}  />
      {isVisibleNav && (
        <Navigation />
      )}

      <Routes>
        <>
          <Route path='/portfolio' element={<Cover />} />
          <Route path='/about_me' element={<AboutMe visibleNav={visibleNav} />} />
          <Route path='/project/*' element={<Project visibleNav={visibleNav} />}>
            <Route path='davich' element={<Davich />} />
            <Route path='sem' element={<SamsungEm />} />
            <Route path='cjone' element={<Cjone />} />
            <Route path='messenger' element={<Messenger />} />
            <Route path='movie' element={<MovieApp />} />
          </Route>
          <Route path='/other' element={<Other visibleNav={visibleNav} />} />
          <Route path='davich' element={<Davich />} />
        </>
      </Routes>
    </>
  );
}

export default App;
