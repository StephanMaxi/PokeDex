import React from "react";

const PokemonStats = ({stats, types}) => {

return(
    //container div
<div className="container-bar">
<h4 className="w-100 mb-4 section-title">Stats</h4>
{/*this is taking in all of the types and using a map to populate the div with bats*/}
{stats.map((item,index) => {
    return(
        //takes the index as the div
        <div key={index} className="bar-item">
            {/*bar div*/}
                <div className="bar">
                    <div
                        style={{height : item.base_stat}}
                        className={`bar-active ${types[0].type.name}`}
                    /><div className="container-label">
                        
                        <p className="value">{item.base_stat}</p>
                        </div>
                </div>
                <p className="mb-0 mt-2 text-center label limit-text">
                    {item.stat.name}
                </p>
        </div>
    );
})}
</div>
);
};



export default PokemonStats