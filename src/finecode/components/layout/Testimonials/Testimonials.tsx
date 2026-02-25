// components/Testimonials/Testimonials.tsx

import Testimonial from "../Testimonial/Testimonial"
import './Testimonials.css'

function Testimonials() {
    return (
        <div className="Testimonials-container">
            <div className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonials-list">
                    <Testimonial id={0} key={0} />
                    <Testimonial id={1} key={1} />
                    <Testimonial id={2} key={2} />
                    <Testimonial id={3} key={3} />
                    <Testimonial id={4} key={4} />    
                    <Testimonial id={5} key={5} />
                </div>
            </div>
        </div>
    );
}

export default Testimonials