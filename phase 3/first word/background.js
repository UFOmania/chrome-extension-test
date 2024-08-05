import get_medox from "./api/requests.js"

chrome.runtime.onMessage.addListener((msg,sender,res)=>{
    if(msg.message === 'get-medox'){
       get_medox();
    }
})