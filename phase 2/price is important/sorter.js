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