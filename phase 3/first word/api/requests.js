const url = "http://localhost:2121/about";

export default function get_medox(){
    fetch(url)
    .then((res)=>res.json())
    .then(data => console.log(data))
    .catch(err=>console.log(err));
    
}