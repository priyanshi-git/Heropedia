document.getElementById("getApi").addEventListener("click", callAPI);

const apikey = "5856768571066020";

function callAPI() {
  var heroName = document.getElementById("heroName").value;

  let apiUrl = `https://superheroapi.com/api/${apikey}/search/${heroName}`;

  //alert(heroName);
  // alert(apiUrl);

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      let heroImg = data.results[0].image.url;
      let cardName = data.results[0].name;
      document.getElementById("heroImg").src = heroImg;
      document.getElementById("cardName").innerHTML = cardName;
      document.getElementById("output").style.display = "flex";
    });
}
