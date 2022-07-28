import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GeneralPosts from './components/Posts/index';
import Footer from './components/Footer';
import CategoryPost from './components/Posts/CategoryPost';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:genre" element={<CategoryPost />} />
        <Route exact path="/:genre/:id" element={<GeneralPosts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
