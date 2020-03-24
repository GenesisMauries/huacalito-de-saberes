const articleContainer = document.getElementById('biography')
let text = document.getElementById("text").innerHTML;
let textArr = text.split("");
let newText = textArr[0];
for (let i = 0; i < textArr.length; i++) {
    (function(i) {setTimeout(function() { document.getElementById("text").innerHTML = newText;newText = newText + textArr[i+1];}, 300 * i);})(i);
}
// Zapata
const fetchData = () => {
    fetch("https://raw.githubusercontent.com/GenesisMauries/huacalito-de-saberes/master/js/sponsor.json")
    
    .then((response) => response.json())
    .then(datos => drawButton(datos))
    .catch(error => console.log(`Tienes este problemita: ${error.message}`))
}

const drawButton = (datos)=>{
    for(data of datos){
      document.getElementById("buttons").innerHTML += `<section class="col-lg-2 col-xl-2 col-md-3 col-sm-4 col-xs-4">
      <input class="rounded article" type="image" src="${data.photo}" id="${data.id}" alt="Submit" width="85%" />
        </section>`
    }
    const articles = document.getElementsByClassName('article')
    Array.from(articles).forEach(element => element.addEventListener('click', () => {showVideo(element.id, datos)}))
}
const showVideo = (id, data) => {
    console.log(id, data)
    articleContainer.innerHTML = ''
    const article = data.find(element => element.id === id)
    console.log(article)
    document.getElementById("biography").innerHTML = `<h4>${article.name}</h4>
    <h5 class="font-weight-bold" >${article.title}</h5>
    <p class="font-weight-light">Transmitido en vivo el ${article.date}</p>
    <p class="text-justify" >${article.bio}</p>`
    document.getElementById("videoConf").innerHTML = `<div class="col-10 offset-1">
    <div class="embed-responsive embed-responsive-16by9" >
        <iframe  class="embed-responsive-item" src="${article.video}" style="width: 1000px; height: 80%;"></iframe>
    </div>
</div>`
    window.location.href = '#videoConf'
  }
window.onload = fetchData();