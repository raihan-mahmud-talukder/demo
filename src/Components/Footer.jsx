import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer>
            <p>RONGDHONU is a private & non-profit learning institute.</p>
            <p>
                <Link to="/statement">Non-Descrimination Statement</Link> &nbsp; | &nbsp;
                <Link to="/policy">Privacy Policy</Link> &nbsp; | &nbsp;
                <Link to="">Terms & Condition</Link>
            </p>
            <p>Copyright &copy; 2023. All rights are reserved by RONGDHONU & its associates.</p>
        </footer>
    )
}