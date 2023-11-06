import { useState } from "react"
import { Link } from "react-router-dom"

export const Item = ({ item }) => {
    const [open, setOpen] = useState(false)
    if (item.childrens) {
        return (
            <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
                <div className="sidebar-title">
                    <span>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title}
                    </span> 
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <Item key={index} item={child} />)}
                </div>
            </div>
        )
    }
    else {
        return (
            <Link to={item.path || "#"} className="sidebar-item plain">
                {item.icon && <i className={item.icon}></i>}
                {item.title}
            </Link>
        )
    }
}