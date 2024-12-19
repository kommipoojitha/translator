const btn=document.getElementById('btn')
const input=document.getElementById('inputbox')
const output=document.getElementById('outputbox')
const img=document.getElementById('img')
btn.addEventListener('click',()=>
{
    const translatetext=input.value
fetch("https://api.funtranslations.com/translate/pig-latin.json?text="+translatetext)
.then((res)=>{
    return (res.json());
})
.then((data)=>{
   output.value=data.contents.translated;
})
.catch((error)=>{
 console.log(window.location.replace('./error.html'));
 })
})
