import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LineFloatButton from './components/LineFloatButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Story from './pages/Story'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Branches from './pages/Branches'
import Wholesale from './pages/Wholesale'
import Contact from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:catId/:itemId" element={<ProductDetail />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <LineFloatButton />
        <AnimatedRoutes />
        <Footer />
      </HashRouter>
    </LanguageProvider>
  )
}
