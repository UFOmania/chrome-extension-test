
let customHeader = document.createElement('div');
let btn = document.createElement('button')
btn.innerText = "say my name";
let s = document.createAttribute('style');

customHeader.style= `
    margin = 20px;
    display  = flex;
    background-color: gray;
    padding: 10px;
`;

customHeader.appendChild(btn);
//document.body.appendChild(customHeader);
document.body.insertBefore(customHeader, document.body.firstChild);

btn.addEventListener('click',()=>{
    console.log("my name is ali ")
})
