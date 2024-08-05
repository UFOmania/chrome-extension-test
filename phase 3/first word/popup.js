document.addEventListener("DOMContentLoaded",runFunction);
console.log('DOM is loaded')
function runFunction () {
    const btn = document.getElementById('sendReqeust');
    
    btn.addEventListener('click',() =>{
        chrome.runtime.sendMessage({message : 'get-medox'});
    });
    
}