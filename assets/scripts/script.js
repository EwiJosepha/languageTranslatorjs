import { countries } from "./countries";
const selecttag = document.querySelectorAll("select"); 
selecttag.forEach((tag)=>{
 for(const keys of Object.keys(countries)){
  console.log(keys);
 }
})
console.log("hey");
