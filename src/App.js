import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout';
import Projects from './Pages/Projects';



function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Projects' element={<Projects/>}></Route>
        <Route exact path='/About' element={<About/>}></Route>
        <Route exact path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
