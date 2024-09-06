import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Adwa from './pages/Adwa';
import AiAssistance from './pages/AiAssistance';
import Awardsachievements from './pages/Awardsachievements';
import ChapterFivePage from './pages/ChapterFivePage';
import ChapterFourPage from './pages/ChapterFourPage';
import ChapterOnePage from './pages/ChapterOnePage';
import ChapterSixPage from './pages/ChapterSixPage';
import ChapterThreePage from './pages/ChapterThreePage';
import ChapterTwoPage from './pages/ChapterTwoPage';
import CheckpointFourPage from './pages/CheckpointFourPage';
import CheckpointOnePage from './pages/CheckpointOnePage';
import CheckpointSixPage from './pages/CheckpointSixPage';
import CheckpointThreePage from './pages/CheckpointThreePage';
import CheckpointTwoPage from './pages/CheckpointTwoPage';
import CheckpoointFivePage from './pages/CheckpoointFivePage';
import Completed from './pages/Completed';
import ContactDetails from './pages/ContactDetails';
import DestinationsPage from './pages/DestinationsPage';
import Entoto from './pages/Entoto';
import HomePage from './pages/HomePage';
import Kilo from './pages/Kilo';
import LogIn from './pages/LogIn';
import PaymentDetails from './pages/PaymentDetails';
import Place from './pages/Place';
import Preferences from './pages/Preferences';
import RedTerrorMartyrsMemorial from './pages/RedTerrorMartyrsMemorial';
import ReviewPage from './pages/ReviewPage';
import Roadmap from './pages/Roadmap';
import SignUp from './pages/SignUp';
import Time from './pages/Time';
import TourGuide from './pages/TourGuide';
import TripType from './pages/TripType';
import UserProfile from './pages/UserProfile';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Adwa', element: <Adwa /> },
{ path: '/AiAssistance', element: <AiAssistance /> },
{ path: '/Awardsachievements', element: <Awardsachievements /> },
{ path: '/ChapterFivePage', element: <ChapterFivePage /> },
{ path: '/ChapterFourPage', element: <ChapterFourPage /> },
{ path: '/ChapterOnePage', element: <ChapterOnePage /> },
{ path: '/ChapterSixPage', element: <ChapterSixPage /> },
{ path: '/ChapterThreePage', element: <ChapterThreePage /> },
{ path: '/ChapterTwoPage', element: <ChapterTwoPage /> },
{ path: '/CheckpointFourPage', element: <CheckpointFourPage /> },
{ path: '/CheckpointOnePage', element: <CheckpointOnePage /> },
{ path: '/CheckpointSixPage', element: <CheckpointSixPage /> },
{ path: '/CheckpointThreePage', element: <CheckpointThreePage /> },
{ path: '/CheckpointTwoPage', element: <CheckpointTwoPage /> },
{ path: '/CheckpoointFivePage', element: <CheckpoointFivePage /> },
{ path: '/Completed', element: <Completed /> },
{ path: '/ContactDetails', element: <ContactDetails /> },
{ path: '/DestinationsPage', element: <DestinationsPage /> },
{ path: '/Entoto', element: <Entoto /> },
{ path: '/HomePage', element: <HomePage /> },
{ path: '/Kilo', element: <Kilo /> },
{ path: '/LogIn', element: <LogIn /> },
{ path: '/PaymentDetails', element: <PaymentDetails /> },
{ path: '/Place', element: <Place /> },
{ path: '/Preferences', element: <Preferences /> },
{ path: '/RedTerrorMartyrsMemorial', element: <RedTerrorMartyrsMemorial /> },
{ path: '/ReviewPage', element: <ReviewPage /> },
{ path: '/Roadmap', element: <Roadmap /> },
{ path: '/SignUp', element: <SignUp /> },
{ path: '/Time', element: <Time /> },
{ path: '/TourGuide', element: <TourGuide /> },
{ path: '/TripType', element: <TripType /> },
{ path: '/UserProfile', element: <UserProfile /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}