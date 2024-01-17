const selecttag = document.querySelectorAll("select");
selecttag.forEach((tag) => {
  for (const country_code in countries) {
    let countryAtCode = countries[country_code]
    let options = `            <option value="hi-IN">${countryAtCode}</option>
  `
    console.log(country_code);
  }
})

