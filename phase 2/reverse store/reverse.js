
const data = document.body.getElementsByClassName('product');

let i = 0 ;
let j =data.length -1;
while(i < data.length / 2)
{
    let tmp = data[i].innerHTML;
    data[i].innerHTML = data[j].innerHTML;
    data[j].innerHTML = tmp;
    j--;
    i++;
}
console.log(data);