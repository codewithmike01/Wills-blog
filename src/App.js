import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EntertainmentPosts from './components/Posts/EntertainmentPosts';
import TechPosts from './components/Posts/TechPosts';
import PoliticsPosts from './components/Posts/PoliticsPosts';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="entertainment" element={<EntertainmentPosts />} />
        <Route path="technology" element={<TechPosts />} />
        <Route path="politics" element={<PoliticsPosts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
