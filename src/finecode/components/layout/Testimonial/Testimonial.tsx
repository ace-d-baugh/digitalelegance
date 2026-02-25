// components/Testimonial/Testimonial.tsx

import Testimonials from '../../../assets/data/testimonials.json'
import './Testimonial.css'

function Testimonial({ id }: { id: number }) {
    return (
        <div className="Testimonial">
            <div className="testimonial">
                <p className='testimonial-quote'>{Testimonials[id].quote}</p>
                <h3 className='testimonial-name'>~{Testimonials[id].name}</h3>
                <img className='testimonial-image' src={Testimonials[id].imageUrl} alt={Testimonials[id].name} />
            </div>
        </div>
    );
}

export default Testimonial