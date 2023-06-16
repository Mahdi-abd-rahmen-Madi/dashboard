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


// ==================================================== Inforgraphics ==================================================

// chart 0 

const ctx0 = document.getElementById('chart0');

new Chart(ctx0, {
type: 'bar',
data: {
labels: ['barite', 'fluorite', 'gaz', 'iron','petrol','phosphate','plomb-zinc'],
datasets: [{
label: 'Deposits count by type',
data: [ 30,27, 17, 25, 20, 43, 191],
backgroundColor: [
  'rgba(96,197,76,1.0)',  // br sr                #3
  'rgba(128,255,1,1.0)', // fluorite              #4
  'rgba(210,210,210,1.0)', // gaz                 #7
  'rgba(254,81,78,1.0)',  // iron                 #5
  'rgba(226,184,230,1.0)',  // petrol             #6
  'rgba(49,155,13,1.0)',   // phosphate           # 2
  'rgba(107,146,219,1.0)', // pb zn               # 1


],
borderWidth: 1
}]
},
options: {
scales: {
y: {
  beginAtZero: true
      }
    }
  }
});







// chart1

     
const ctx = document.getElementById('chart1');

new Chart(ctx, {
type: 'bar',
data: {
labels: ['antimony-aresenic', 'barite-strontianite', 'copper', 'fluorite', 'gaz', 'iron','lignite', 'manganese','mercury','petrol','phosphate','plomb-zinc','uranium','vanadium'],
datasets: [{
label: 'Deposits count by type',
data: [3, 30, 17, 27, 17, 25, 14, 8, 6, 20, 43, 191, 4, 2],
backgroundColor: [
  'rgba(255,95,218,1.0)',
  'rgba(96,197,76,1.0)',
  'rgba(255,237,170,1.0)',
  'rgba(128,255,1,1.0)',
  'rgba(210,210,210,1.0)',
  'rgba(254,81,78,1.0)',
  'rgba(144,142,142,1.0)',
  'rgba(193,61,107,1.0)',
  'rgba(235,91,101,1.0)',
  'rgba(226,184,230,1.0)',
  'rgba(49,155,13,1.0)',
  'rgba(107,146,219,1.0)',
  'rgba(255,217,246,1.0)',
  'rgba(255,188,87,1.0)',


],
borderWidth: 1
}]
},
options: {
scales: {
y: {
  beginAtZero: true
      }
    }
  }
});

// pie 0 

const pie0 = document.getElementById('pie0');

new Chart(pie0, {
type: 'pie',
data: {
color: 'f8f8f8',
labels: ['barite', 'fluorite', 'gaz', 'iron','petrol','phosphate','plomb-zinc'],
datasets: [{
label: 'Deposits count by type',
data: [30,27, 17, 25, 20, 43, 191],
backgroundColor: [
  'rgba(96,197,76,1.0)',  // br sr                #3
  'rgba(128,255,1,1.0)', // fluorite              #4
  'rgba(210,210,210,1.0)', // gaz                 #7
  'rgba(254,81,78,1.0)',  // iron                 #5
  'rgba(226,184,230,1.0)',  // petrol             #6
  'rgba(49,155,13,1.0)',   // phosphate           # 2
  'rgba(107,146,219,1.0)', // pb zn               # 1


],
hoverOffset: 4,
borderWidth: 1
}]
},
});


// pie 1

const pie = document.getElementById('pie1');

new Chart(pie, {
type: 'pie',
data: {
color: 'f8f8f8',
labels: ['antimony-aresenic', 'barite-strontianite', 'copper', 'fluorite', 'gaz', 'iron','lignite', 'manganese','mercury','petrol','phosphate','plomb-zinc','uranium','vanadium'],
datasets: [{
label: 'count',
data: [3, 30, 17, 27, 17, 25, 14, 8, 6, 20, 43, 191, 4, 2],
backgroundColor: [
  'rgba(255,95,218,1.0)',
  'rgba(96,197,76,1.0)',
  'rgba(255,237,170,1.0)',
  'rgba(128,255,1,1.0)',
  'rgba(210,210,210,1.0)',
  'rgba(254,81,78,1.0)',
  'rgba(144,142,142,1.0)',
  'rgba(193,61,107,1.0)',
  'rgba(235,91,101,1.0)',
  'rgba(226,184,230,1.0)',
  'rgba(49,155,13,1.0)',
  'rgba(107,146,219,1.0)',
  'rgba(255,217,246,1.0)',
  'rgba(255,188,87,1.0)',


],
hoverOffset: 4,
borderWidth: 1
}]
},
});









