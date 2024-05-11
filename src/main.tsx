import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Axioxs from './Component/Axios.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Axioxs />
  </React.StrictMode>,
)
