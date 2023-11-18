import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
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
        lazy: () => import('./layouts/Home.jsx'),
      },
      {
        path: 'games',
        lazy: () => import('./layouts/Games.jsx'),
      },
      {
        path: 'games/:id',
        lazy: () => import('./layouts/Game.jsx'),
      },
      {
        path: 'blog',
        lazy: () => import('./layouts/Blog.jsx'),
      },
      // {
      //   path: 'search',
      //   lazy: () => import('./layout/Search.jsx'),
      // },
      // {
      //   path: 'hero',
      //   lazy: () => import('./layout/Hero.jsx'),
      // },
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
