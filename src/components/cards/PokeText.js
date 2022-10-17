import { useState } from "react";
import "./styles.css"

const PokeText = ({sword_flavor_text,shield_flavor_text,flavor_text_default}) =>{
    //get version setter to defualt to sword
    const [version,setVersion] = useState("sword");
return(
    <>
    {sword_flavor_text === "" && shield_flavor_text ===""  ? (
         <h3 className="text-center text-md-left overview">
            {flavor_text_default}
         </h3>
    ):(
        <>
        <h3 className="text-center text-md-left overview">
            {version === "sword" ? sword_flavor_text : shield_flavor_text}
        </h3>
        <div className="container-versions d-flex justify-content-center justify-content-md-start mt-4">
            <button
              className={`${version === "sword" && version} mr-2`}
              onClick={() => setVersion("sword")}
            >
            </button>
            <button
              className={`${version === "shield" && version}`}
              onClick={() => setVersion("shield")}
            >
            </button>
          </div>
        </>
    )}
    </>


);
}

export default PokeText;