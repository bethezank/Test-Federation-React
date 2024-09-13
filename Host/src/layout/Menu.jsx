import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// remote apps menu
import reworkMenu from "Rework/ReworkMenu"

const Menu = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        setMenu([
            ...reworkMenu
        ])
    }, [])


    return (
        <ul>
            {
                menu.map((item, index) => {
                    return <li key={index}><Link to={item.path}>{item.label}</Link></li>
                })
            }
        </ul>
    )
}

export default Menu