const selecttag = document.querySelectorAll("select");
const audioicon = document.querySelectorAll(".row i");
const fromText = document.querySelector(".from-text");
const textto = document.querySelector(".to-text");
const exchangeIcone = document.querySelector(".exchange");
const translationbtn = document.querySelector('button')
selecttag.forEach((tag, id) => {
  for (const country_code in countries) {
    //selecting english as language from and hindi as language to by default
    let selected;
    if(id ==0 && country_code == "en-US"){
      selected = "selected"
    }else if (id == 1 && country_code == "hi-IN" ){
      selected = "selected"
    }
    let countryAtCode = countries[country_code]
    let options = `<option value=${country_code} ${selected}>${countryAtCode}</option> 
  ` //populating option tag
  tag.insertAdjacentHTML("beforeend", options)
  
  }
})

exchangeIcone.addEventListener('click', ()=>{ 
  //exchanging text areas and select tags
  let temptextt = fromText.value
  fromText.value = textto.value
  textto.value = temptextt
  templang = selecttag[0].value
  selecttag[0].value = selecttag[1].value
  selecttag[1].value = templang
})

translationbtn.addEventListener("click", ()=>{
let text = fromText.value
let translatefrom = selecttag[0].value //getting from select tag
let translateto = selecttag[1].value //getting to select tag value
if(!text)return textto.setAttribute("placeholder", "Translating...")
let apiurl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translatefrom}|${translateto}`;

fetch(apiurl).then(res=>
  res.json()
).then(data=>{
  textto.value = data.responseData.translatedText;
  textto.setAttribute("placeholder", "Translating...");
})

})

audioicon.forEach(icon =>{
  icon.addEventListener('click', ({target})=>{
if(target.classList.contains('fa-copy')){
 if(target.id === "from"){
  navigator.clipboard.writeText(fromText.value)
 }else{
  navigator.clipboard.writeText(textto.value)
 }
}else{
  let utterance;
  if(target.id === "from"){
    utterance = new SpeechSynthesisUtterance(fromText.value)
    utterance.lang = selecttag[0].value
   }else{
    utterance = new SpeechSynthesisUtterance(textto.value)}
    utterance.lang = selecttag[1].value

  speechSynthesis.speak(utterance)
}
  })
})

