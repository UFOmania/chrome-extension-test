let customHeader = document.createElement('div');

customHeader.innerHTML = `
<h1>r4</h1>
<h1>c15</h1>
<h1>206</h1>
<h1>190</h1>
<h1>r6</h1>
`;
customHeader.style = `
    display: flex;
    margin : 20px;
    justify-content: space-around;
    background-color: red;
`

document.body.insertBefore(customHeader , document.body.firstChild);