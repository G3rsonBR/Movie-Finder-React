import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import WatchMovie from './Pages/WatchMovies'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Watch-movie" element={<WatchMovie />} />
    </Routes>
  )
}