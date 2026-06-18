import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useMobile }    from './hooks/useMobile'
import Cursor           from './components/ui/Cursor'
import HomePage         from './pages/HomePage'
import PhotosGallery    from './pages/PhotosGallery'
import MobileBlock      from './pages/MobileBlock'

export default function App() {
  const mobile = useMobile()

  return (
    <BrowserRouter>
      {!mobile && <Cursor />}
      <Routes>
        <Route path="/"               element={mobile ? <HomePage /> : <HomePage />} />
        <Route path="/photos-gallery" element={<PhotosGallery />} />
      </Routes>
    </BrowserRouter>
  )
}
