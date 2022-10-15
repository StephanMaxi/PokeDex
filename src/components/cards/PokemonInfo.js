import "./styles.css"

const Pokemoninfo =  ({abilities,gender_rate,capture_rate,height,weight})  => {
return (
<div className="containter-info">
<div className="info-item">
<h4>Weight</h4>
<p>{weight/10} kg</p>
</div>
<div className="into-item">
<h4>Height</h4>
<p>{height/10} m</p>
</div>
<div className="into-item">
<h4>abilites</h4>
<p>{abilities} </p>
</div>
<div className="into-item">
<h4>gender rate</h4>
<p>Female: {(gender_rate * 125) / 10} %</p>
<p>Male: {100 - ((gender_rate * 125) / 10)} %</p>
</div>
<div className="into-item">
<h4>capture rate</h4>
<p>{capture_rate} </p>
</div>
</div>
);


}

export default Pokemoninfo;