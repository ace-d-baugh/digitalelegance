// components/Card/Card.tsx

import Button from '../Button/Button';
import Photo from '../Photo/Photo'
import './Card.css'

function Card({ id, title, imageUrl, alt, description }: { id: number, title: string, imageUrl: string, alt: string, description: string }) {
    return (
        <div className="Card">
            <h3 className='title'>{title}</h3>
            <Photo src={imageUrl} width={200} height={200} alt={alt} />
            <p className='description'>{description}</p>
            <Button text="View Project" link={`/project/${id}`} />
        </div>
    );
}

export default Card