const selecttag = document.querySelectorAll("select");
const fromText = document.querySelector(".from-text");

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
  `
  tag.insertAdjacentHTML("beforeend", options)
  
  }
})

translationbtn.addEventListener("click", ()=>{
let text = fromText.value
let translatefrom = selecttag[0].value
let translateto = selecttag[1].value
console.log(translatefrom);
console.log(translateto);
})

