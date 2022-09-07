import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GeneralPosts from './components/Posts/index';
import Footer from './components/Footer';
import CategoryPost from './components/Posts/CategoryPost';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:genre" element={<CategoryPost />} />
        <Route exact path="/:genre/:id" element={<GeneralPosts />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
