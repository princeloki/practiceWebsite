var secDiv = document.getElementById("services").querySelectorAll("div");
var x = window.matchMedia("(max-width: 1000px)");

if(x.matches){
  secDiv.forEach(item =>{
    item.addEventListener("mouseover", event =>{
      item.style.height = "130px";
      item.querySelector("h2").style.opacity = "0";
      item.querySelector("Button").style.opacity = "1"
    })
  })
  secDiv.forEach(item =>{
    item.addEventListener("mouseout", event =>{
      item.style.height = "200px";
      item.querySelector("h2").style.opacity = "1";
      item.querySelector("Button").style.opacity = "0";
    })
  })


} else{
  secDiv.forEach(item =>{
    item.addEventListener("mouseover", event =>{
      item.style.height = "180px";
      item.querySelector("h2").style.opacity = "0";
      item.querySelector("Button").style.opacity = "1";
    })
  })
  secDiv.forEach(item =>{
    item.addEventListener("mouseout", event =>{
      item.style.height = "300px";
      item.querySelector("h2").style.opacity = "1";
      item.querySelector("Button").style.opacity = "0";
    })
  })

}
