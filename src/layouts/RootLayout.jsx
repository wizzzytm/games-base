import {Form,  Link, NavLink, Outlet } from "react-router-dom"
import {useState, useEffect} from "react"
import Icon from "../components/Icon"
import Search from  "../components/Search"
export default function RootLayout(props) {

    const [formData, setFormData] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        return false
    }

    /*----- Zczytywanie danych z formularza -----*/
            // przekazywanie danych do App.jsx
    // ----------------------------------
    return (
        <>
            <div className="header">
                <div className="homepage">
                    <Link to="/">
                        <Icon />
                        <div className="header-search"></div>
                    </Link>
                </div>
                    
                    <Form onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} method="get">
                    <input 
                        type="text" 
                        value={props.query}
                        onChange={e => props.setQuery(e.target.value)}
                        name="search"
                        placeholder="Search..."
                        id="field"
                        onSubmit={handleSubmit}
                    /></Form>
            </div>
            <div className="main">
                <Outlet />
            </div>
        </>
    )
}