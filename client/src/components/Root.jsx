import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Root() {
  return (
    <>
      <Navbar />
      <div className='footer'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
