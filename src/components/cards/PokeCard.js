import "./styles.css"
import { Card,ListGroup } from 'react-bootstrap';
//* so we want the cards to be structured with the
//the card is the color of the type, the name of the pokemon, the id number and the type 
// we want the card to be clickable to route to the details page
//it seems that the proper way to do componets is to have the bootstrap data on the page 
//and the data is prosessed in here
const PokeCard = ({name,type,Img,click,pokemonChosen}) => {
// we want to return all of the proseeced data
    return(
        //card container
        <div className={`DisplayCard`}>
        {!pokemonChosen ? (
        <h1>Please chooose a Pokemon</h1>
        ) : (
          <>
        <Card className = {`PokeCard ${type}`} border ="primary" style={{witdh: '18rem'}}>
          <Card.Header>{name}</Card.Header>
          <Card.Img variant='top' src={Img}/>
          <Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Type: {type}</ListGroup.Item>
        </ListGroup>
        </Card.Body>
        </Card>
        </>
        )}
        </div>
    );
};

export default PokeCard;

