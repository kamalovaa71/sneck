import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import Header from "../components/Header/Header"
import Modal from "../components/Modal/Modal"

const Root = () => {
    useEffect(() => {
        document.title = "REACT_SNEAKERS"
    }, [])
    return(
        <>
        <Modal/>
        <div className="container">
            <Header/>
            <Outlet/>
        </div>
        </>
    )
}
export default Root