import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'swiper/css';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        lazy: () => import('./layouts/home/Home.jsx'),
      },
      {
        path: 'games',
        lazy: () => import('./layouts/games/GamesMain.jsx'),
      },
      {
        path: 'games/:id',
        lazy: () => import('./layouts/games/Game.jsx'),
      },
      {
        path: '/favourites',
        lazy: () => import('./layouts/MyList.jsx')
      },
      {
        path: '/search',
        lazy: () => import('./layouts/Search.jsx')
      },
<<<<<<< HEAD
=======
      // {
      //   path: 'events',
      //   lazy: () => import('./layouts/Events.jsx'),
      // },
      // {
      //   path: 'blog',
      //   lazy: () => import('./layouts/Blog.jsx'),
      // },
      // {
      //   path: 'hero',
      //   lazy: () => import('./layout/Hero.jsx'),
      // },
>>>>>>> eae3fb0 (roll back and fixed genres, search, gameList)
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
