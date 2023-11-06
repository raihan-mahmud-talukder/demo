import { Carousel } from "./Home/Carousel"
import { Links } from "./Home/Links"
import { Testimonial } from "./Home/Testimonials"

export const Home = () => {
    document.title = 'Rongdhonu'
    return (
        <>
        <div className="container">
                <h1>Institution Project</h1>
                <Carousel />
            <Testimonial />    
            <Links />
        </div>
        </>
    )
}