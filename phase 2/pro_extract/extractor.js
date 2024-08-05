const data = document.getElementsByClassName("product");


for(let i = 0;i<data.length;i++){

    const title = data[i].getElementsByClassName('product-title')[0].innerText;
    const price = data[i].getElementsByClassName('product-price')[0].innerText;
    

    console.log(`title : ${title}\nprice : ${price}`);
}