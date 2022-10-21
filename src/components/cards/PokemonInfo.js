import "./styles.css"

const Pokemoninfo =  ({abilities,gender_rate,capture_rate,height,weight})  => {
return (
<div className="container-info d-flex flex-wrap my-4">
<div className="info-item">
<h4>Weight</h4>
<p>{weight/10} kg</p>
</div>
<div className="info-item">
<h4>Height</h4>
<p>{height/10} m</p>
</div>
<div className="info-item">
<h4>Abilites</h4>
<p>{abilities} </p>
</div>
<div className="info-item mb-0">
<h4>Gender Rate</h4>
<p>Female: {(gender_rate * 125) / 10}%</p>
<p>Male: {100 - ((gender_rate * 125) / 10)}%</p>
</div>
<div className="info-item mb-0">
<h4>Capture Rate</h4>
<p>{capture_rate} </p>
</div>
</div>
);


}

export default Pokemoninfo;