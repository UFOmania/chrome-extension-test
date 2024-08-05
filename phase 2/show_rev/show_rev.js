const data  = document.getElementsByClassName('product');

//console.log(data[0].getElementsByClassName('product-title')[0].innerText)
let i = data.length-1;
let elemet = {};
while(i>=0){
    elemet = {
        title : data[i].getElementsByClassName('product-title')[0].innerText,
        price : data[i].getElementsByClassName('product-price')[0].innerText,
        description : data[i].getElementsByClassName('product-description')[0].innerText,
        rating : data[i].getElementsByClassName('product-rating')[0].innerText
    }

    console.log(elemet);
    i--;
}