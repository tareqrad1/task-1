import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CharacterPage from './pages/CharacterPage'
import DetailsPage from './pages/DetailsPage'
import NotFoundPage from './pages/NotFoundPage'

const App = (): React.JSX.Element => {
  return (
    <>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={<CharacterPage />} />
        <Route path='/details/:id' element={<DetailsPage />} />
      </Routes>
    </>
  )
}

export default App