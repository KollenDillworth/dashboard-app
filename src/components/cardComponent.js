'use client'
import Card from 'react-bootstrap/Card';

function CardComponent({name, number, description}){
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{number}</Card.Subtitle>
            <Card.Text>
                {description}
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CardComponent