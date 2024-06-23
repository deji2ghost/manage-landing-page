import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/Header'
import { HeroOne } from './components/HeroOne'
import { HeroTwo } from './components/HeroTwo'
import { Comment } from './components/Comment'
import { FooterOne } from './components/FooterOne'
import { FooterTwo } from './components/FooterTwo'

function App() {

  return (
    <div className="overflow-hidden text-DarkBlue pt-4 bg-[url('images/bg-simplify-section-mobile.svg')] bg-no-repeat bg-cover">
     <Router>
      <Header />
      <HeroOne />
      <HeroTwo />
      <Comment />
      <FooterOne />
      <FooterTwo />
     </Router>
    </div>
  )
}

export default App
