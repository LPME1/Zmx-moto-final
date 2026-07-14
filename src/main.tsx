import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ParkPage from './pages/ParkPage';
import FuturePage from './pages/FuturePage';
import RentPage from './pages/RentPage';
import EventPage from './pages/EventPage';

const path = window.location.pathname;

let CurrentPage = App;
if (path === '/park') CurrentPage = ParkPage;
else if (path === '/future') CurrentPage = FuturePage;
else if (path === '/rent') CurrentPage = RentPage;
else if (path === '/event') CurrentPage = EventPage;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CurrentPage />
  </StrictMode>
);
