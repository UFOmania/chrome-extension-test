//inject header
const customHeader = document.createElement('div');
customHeader.style = `
    display : flex;
    margin : 20px 0px;
    padding : 50px 5px;
    background-color : gray;
    justify-content : spaceBetween;
`; 

const sort1 = document.createElement('button');
const sort2 = document.createElement('button');
const sort3 = document.createElement('button');
sort1.innerText = 'up sort';
sort2.innerText = 'price down'
sort3.innerText = 'rating'
customHeader.appendChild(sort1);
customHeader.appendChild(sort2);
customHeader.appendChild(sort3);



sort1.addEventListener('click',()=>{
    const data  = document.body.getElementsByClassName('product');
    
    let i = 0;
    let j ;
    
    while(i < data.length){
        j = i+1;
        while(j < data.length){
            const a = data[i].getElementsByClassName('product-price')[0].textContent;
            const b = data[j].getElementsByClassName('product-price')[0].textContent;
            if(a-'0' > b-'0'){
                const tmp = data[i].innerHTML;
                data[i].innerHTML = data[j].innerHTML;
                data[j].innerHTML = tmp
            }
            j++;
        }
        i++;
    }
});

sort2.addEventListener('click',()=>{
    const data  = document.body.getElementsByClassName('product');
    
    let i = 0;
    let j ;
    
    while(i < data.length){
        j = i+1;
        while(j < data.length){
            const a = data[i].getElementsByClassName('product-price')[0].textContent;
            const b = data[j].getElementsByClassName('product-price')[0].textContent;
            if(a-'0' < b-'0'){
                const tmp = data[i].innerHTML;
                data[i].innerHTML = data[j].innerHTML;
                data[j].innerHTML = tmp
            }
            j++;
        }
        i++;
    }
});

sort3.addEventListener('click',()=>{
    const data  = document.body.getElementsByClassName('product');
    
    let i = 0;
    let j ;
    
    while(i < data.length){
        j = i+1;
        while(j < data.length){
            const a = data[i].getElementsByClassName('product-rating')[0].textContent;
            const b = data[j].getElementsByClassName('product-rating')[0].textContent;
            if(a-'0' < b-'0'){
                const tmp = data[i].innerHTML;
                data[i].innerHTML = data[j].innerHTML;
                data[j].innerHTML = tmp
            }
            j++;
        }
        i++;
    }
});
document.body.insertBefore(customHeader , document.body.firstChild);