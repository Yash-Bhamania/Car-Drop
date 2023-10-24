// var typed = new Typed('#element', {
//     strings: ['<i>Physics', '<i>Chemistry.','&amp;<i> Mathematics.'],
//     typeSpeed: 50,
//     loop:true
//   });

// const header = document.querySelector('header');

function toggleParagraph(id) {
  var paragraph = document.getElementById(id);
  if (paragraph.style.display === "none" || paragraph.style.display === "") {
      paragraph.style.display = "block";
  } else {
      paragraph.style.display = "none";
  }
}

function headerScroll(){
  document.getElementById('header').style.width = "100%"
  // document.getElementById('header').style.backgroundColor = "red"
  document.getElementById('nav').style.marginTop = "0"
  document.getElementById('nav').style.borderRadius = "0"
}
function headerScrollMinus(){
  document.getElementById('header').style.width = "90%"
  document.getElementById('nav').style.marginTop = "27px"
  document.getElementById('nav').style.borderRadius = "10px"
}


window.addEventListener('scroll' , () =>{
if(window.scrollY >= 50){
  headerScroll()
}else{
headerScrollMinus()
}

})

