// import axios from "axios";
// import { Axios } from "axios";

import axios from "axios";

function Axioxs(){
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (respose){
        console.log({respose});
    })
    .catch(function (err){
        console.log({err});
    })





    return <div>  
                <h1>Axios</h1>
    </div>
}

export default Axioxs;