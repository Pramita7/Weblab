import React from 'react';
import ReactDom from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import customRouter from './Routing';
import './style.css';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={customRouter}/>
);