const dictionary=(word)=>{
  const options={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fc7251a86fmsh4d905d178f8fcc9p1e5eadjsnf1cade85bae7',
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };

  fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+ word,options)
          .then(response=>response.json())
          .then((response) =>{
            console.log(response);
            wordheading.innerHTML = "Meaning: " + response.word;
            definition.innerHTML = response.definition.replace("2.","<br>2.").replace("3.","<br>3.".replace("4.","<br>4."));
          })
          .catch(err =>console.log(err));
}

searchbtn.addEventListener("click",(e)=>{
  e.preventDefault();
  dictionary(searchinput.value)
})