import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Counter} from "./Counter"

function CardBasica() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Producto 1</Card.Title>
        <Card.Text>
      aca va la descripcion del producto 1
        </Card.Text>
        <Counter/>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBasica;