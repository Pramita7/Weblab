import { Outlet } from "react-router-dom"
import Header from './Component/Header'
import Footer from './Component/Footer'



function App() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}