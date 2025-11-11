// components/Testimonials/Testimonials.tsx

import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const TESTIMONIAL_COUNT = 6;

function Testimonials() {
	return (
		<div className="Testimonials-container">
			<div className="testimonials">
				<h2>Testimonials</h2>
				<div className="testimonials-list">
					{Array.from({ length: TESTIMONIAL_COUNT }, (_, i) => (
						<Testimonial id={i} key={i} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
