import { Sidebar } from "./Sidebar"
import { Footer } from './Footer'
import { Header } from "./Header"
import { BreadCrumbs } from "./BreadCrumb"
import { Chat } from "./Chat"

export const MainComponent = () => {
    return (
        <>
            <Header />
            <BreadCrumbs />
            <div className="main">
                <Sidebar />
            </div>
            <Chat />
            <Footer />
        </>
    )
}