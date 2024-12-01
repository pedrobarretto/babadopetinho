import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home/Home';
import { Navbar } from '@/components';

export function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
