import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContext from './hooks/AppContext'
import { router } from './router'
import './App.css'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContext>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AppContext>
  </React.StrictMode>,
)
