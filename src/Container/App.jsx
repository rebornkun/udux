import { useState } from 'react'
import './App.css'
import AsideNav from '../Components/AsideNav/AsideNav'
import Home from '../Pages/Home/Home'
import Searchbar from '../Components/Searchbar/Searchbar'

function App() {

  return (
    <div className="App">
      <div className='app_container'>
        <header>
          <Searchbar />
        </header>
        <nav>
          <AsideNav />
        </nav>
        <section>
          <Home />
        </section>
      </div>
    </div>
  )
}

export default App
