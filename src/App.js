import './App.css';
import Homepage from './page-components/homepage.jsx';
import { Route, Routes } from 'react-router-dom';
import HatsPage from './pages/hats-page/hats-page';
import ShopPage from './pages/shop-page/shop-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
