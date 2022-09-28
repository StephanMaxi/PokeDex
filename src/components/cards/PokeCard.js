import './styles/App.css';

//* so we want the cards to be structured with the
//the card is the color of the type, the name of the pokemon, the id number and the type 
// we want the card to be clickable to route to the details page
//it seems that the proper way to do componets is to have the bootstrap data on the page 
//and the data is prosessed in here
const PokeCard = ({name,id,types,click}) => {
// we want to return all of the proseeced data
    return(
        //card container
        <div className="container-card">
                {/*this will be the text of the pokemon and the number of the pokemon*/}
                <div>
            <div className='text-center'>
                <h2 className='pokeman-name'>{name}</h2>
                    <p className='pokemon-id'>#{id}</p>
            </div>
        </div>
        <figure className='container-card'>
        <image className='portiat' alt={name} title={name}df />
        </figure>
        <div>
            {/*this is used to render mutilple compnets*/}
        {types.map((item, index) => {
            return (
                <div
                    key={index}
                    className={`${item.type.name} type-item ${types.length == 1 && "w-100"}`}>
                    <p className='mb-0 text-uppercase'>{item.type.name}</p>
                    </div>
            )
        })}
        </div>
    </div>
    );
};

export default PokeCard;

8