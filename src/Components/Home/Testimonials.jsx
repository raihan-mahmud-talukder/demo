import { reviews } from "../../data/review"

export const Testimonial = () => {
    return (
        <div className="testimonial">
            <h2>Testimonials</h2><br /><br />
            <section>
                {reviews.map(data => <Reviews item={data} key={data.id} />)}
            </section>

        </div>
    )
}

const Reviews = ({ item }) => {
    return (
        <div className="review">
            <div className="rating">
                <img src={item.img} alt={item.title} />
                <div>
                    <h3>{item.name}</h3>
                    <h4>{item.prof}</h4>
                    <span>Rating: {item.rating}</span>
                </div>
            </div>
            <p>{item.review}</p>
        </div>
    )
}