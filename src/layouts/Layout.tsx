import { Poppins } from 'next/font/google'

import { Footer } from '../components/Footer/Footer'
import NavBar from '../components/Navbar/Navbar'

const roboto = Poppins({
  weight: '400',
  subsets: ['latin'],
})

function Layout({ children }) {
  return (
    <div className={roboto.className}>
      <div className="container" id="container">
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Layout
