import Router from "./Router";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import env from './service/env';

// import MainLayout from './layout/MainLayout';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
      <Router />
      {/* <BrowserRouter>
        <Routes>
          <Route path={env('VITE_SITE_URL')} element={<PrivateRoute Component={MainLayout} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App