import { NavLink, useLocation } from "react-router-dom";

export const BreadCrumbs = () => {
    const location = useLocation()
    const { pathname } = location
    const segments = pathname.split('/')
    let url = `${window.location.protocol}//${window.location.host}`
    const breadCrumbsLink = segments.map((segment, i) => {
        if (segments[1] === '') return null
        if (i === 0) url = `${segment}`
        else url += `/${segment}`
        console.log(`${window.location.protocol}//${window.location.host}`)
        return (
            <NavLink key={i} to={`${url}`}>
                {segment === '' ? 'Home' : `> ${segment}`}
            </NavLink>
        )
    })

    return <div className="breadcrumbs">{breadCrumbsLink}</div>
}