import React from 'react'
import HeaderPart from "./HeaderPart"
import Contact from './Contact'
import BookTable from './BookTable'
import { Route, Routes } from 'react-router-dom'
import LandPage from './LandPage'
const App = () => {
  return (
    <div>
      <HeaderPart />

      <Routes>

        <Route path="/BookTable" element={<BookTable />} />

        <Route path="/Contact" element={<Contact />} />


      </Routes>
      <LandPage />
      <div className="footer">
        <p>Copyright © Restaurant Name.
          All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default App
