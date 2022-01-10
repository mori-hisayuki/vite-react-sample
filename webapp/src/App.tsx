import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="text-center my-8 flex justify-center">
      <div className="px-8 py-6 rounded-2xl bg-gray-600 text-gray-100">
        <p>
          <a
            rel="noreferrer"
            href="https://github.com/suzukey/vite_windi_sample"
            target="_blank"
          >
            Vite + React + WindiCSS
          </a>
        </p>
        <p>
          <em className="text-sm opacity-75">Soooo Fast!</em>
        </p>
      </div>
    </div>
  )
}

export default App
