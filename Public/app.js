// pre loader   

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display = "none";
})


// data from sheet 

/*

let sheet_id = '1fLTVqeSDk86HjoxtnlqPVS0n04168W5Gd0VSPtq04eE'
let sheet_title = 'deposits';
let sheet_range = 'A1:M408'
let full_url = ('https://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title +'&range=' + sheet_range);


//async function SheetConnect() {
//    const response = await fetch(full_url);
//    const rep = await res.rep();}








fetch(full_url)
.then(res => res.text())
.then(rep => {
let data = JSON.parse(rep.substr(47).slice(0,-2)); 
//console.log(data.table.rows[0].c[2].v),
console.log(data.table.rows[406].c)
//console.log(data.table.cols)
})



//.catch(error=> {
  //  console.log('error!');
  //  console.error(error);

//});



//




/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {  
  nav.dataset.transitionable = "true";
  
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};

