import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'

import Home from '../screens/Home'
import Pokemon from '../screens/Pokemon'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
