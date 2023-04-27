import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="prev" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
