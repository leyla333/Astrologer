let imageAnim = document.getElementById("image-animate");

let imageArray = [
  "https://stellarium.bold-themes.com/dark/wp-content/uploads/sites/3/2018/04/post_06.jpg",
  "https://stellarium.bold-themes.com/dark/wp-content/uploads/sites/3/2017/11/post_05.jpg",
  "https://stellarium.bold-themes.com/dark/wp-content/uploads/sites/3/2017/11/post_04.jpg",
  
]

let imageIndex = 0;

const startImage = () =>{
  imageAnim.setAttribute("src",imageArray[imageIndex]);
  imageIndex++;
  if(imageIndex >= imageArray.length){
    imageIndex = 0;
  }
}

setInterval(startImage,800);

//getting zodaic sign from user
function cardclick(zodaicsign){
    getzodaicdetails(zodaicsign);
    changeimage(zodaicsign);
}

// fetching details from aztro's API
function getzodaicdetails(zodaicsign){
      const URL="https://aztro.sameerkumar.website/";
      fetch(`${URL}?sign=${zodaicsign}&day=today`,{
          method: 'POST'
      })
      .then(response => response.json())
      .then(showzodaicdetails);
}

//Showing zodaic sign details on screen
function showzodaicdetails(response,zodaicsign){
    let current_date = document.getElementById('current_date');
    let today = new Date().toString().split(' ').splice(1,3).join(' ');
    current_date.innerText = today;

    let lucky_time = document.getElementById('lucky_time');
    lucky_time.innerText= `${response.lucky_time}`;

    let lucky_number = document.getElementById('lucky_number');
    lucky_number.innerText = `${response.lucky_number}`;
    
    let color = document.getElementById('color');
    color.innerText = `${response.color}`;

    let mood = document.getElementById('mood');
    mood.innerText = `${response.mood}`;

    let description = document.getElementById('description');
    description.innerText = `${response.description}`;
}

//Changing Zodaic image according to click
function changeimage(zodaicsign){
    let zodaicimage = document.getElementById('zodaicimg'); 
    
    if (zodaicsign=='aries'){
      zodaicimage.setAttribute("src",`./assets/img/aries.jpg - Ярлык.lnk`);
    }
    else if(zodaicsign=='taurus'){
          zodaicimage.setAttribute("src",`./assets/img/taurus.jpg - Ярлык.lnk`);
    }
    else if(zodaicsign=='gemini'){
          zodaicimage.setAttribute("src",`./assets/img/gemini.jpg - Ярлык.lnk`);
    }
    else if(zodaicsign=='cancer'){
          zodaicimage.setAttribute("src",`./assets/img/cancer.jpg - Ярлык.lnk`);
    }
    else if(zodaicsign=='leo'){
          zodaicimage.setAttribute("src",`./assets/img/leo.jpg - Ярлык.lnk`);
    }
    else if(zodaicsign=='virgo'){
          zodaicimage.setAttribute("src",`./assets/img/virgo.jpg - Ярлык.lnk`);
    }
    else if(zodaicsign=='libra'){
          zodaicimage.setAttribute("src",`./assets/img/libra.jpg - Ярлык.lnk`);
    }
    else if(zodaicsign=='scorpio'){
          zodaicimage.setAttribute("src",`./assets/img/scorpio.jpg - Ярлык.lnk`);
    }
    else if(zodaicsign=='sagittarius'){
          zodaicimage.setAttribute("src",`./assets/img/sagittarius.jpg - Ярлык.lnk`);
    }
    else if(zodaicsign=='capricorn'){
          zodaicimage.setAttribute("src",`./assets/img/capricorn.jpg - Ярлык.lnk`);
    }
    else if(zodaicsign=='aquarius'){
          zodaicimage.setAttribute("src",`./assets/img/aquarius.jpg - Ярлык.lnk`);
    }
    else {
          zodaicimage.setAttribute("src",`./assets/img/pisces.jpg - Ярлык.lnk`);
    }
}
let imageSekil = document.getElementById("sekil-animates");

let imageQrup = [
  "https://stellarium.bold-themes.com/dark/wp-content/uploads/sites/3/2018/05/post_07.jpg",
  "https://stellarium.bold-themes.com/dark/wp-content/uploads/sites/3/2018/05/post_08.jpg",
  "https://stellarium.bold-themes.com/dark/wp-content/uploads/sites/3/2017/11/post_10.jpg"

  
]

let imageAsagi = 0;

const baslaSekil = () =>{
  imageSekil.setAttribute("src",imageQrup[imageAsagi]);
  imageAsagi++;
  if(imageAsagi >= imageQrup.length){
    imageAsagi = 0;
  }
}

setInterval(baslaSekil,800);


ScrollReveal().reveal('#main', {
      delay: 375,
      duration: 500,
      reset: true
  });
ScrollReveal().reveal('.homes', {
      delay: 375,
      duration: 500,
      reset: true
  });

ScrollReveal().reveal('.abouts', {
      delay: 375,
      duration: 500,
      reset: true
  });

ScrollReveal().reveal('.abouts1', {
      delay: 375,
      duration: 500,
      reset: true
  });

ScrollReveal().reveal('.abouts2', {
      delay: 375,
      duration: 500,
      reset: true
  });
ScrollReveal().reveal('.blogs', {
      delay: 375,
      duration: 500,
      reset: true
  });
ScrollReveal().reveal('.left', {
      delay: 375,
      duration: 500,
      reset: true
  });

ScrollReveal().reveal('.iyirmi', {
      delay: 375,
      duration: 500,
      reset: true
  });

ScrollReveal().reveal('.cevir', {
      delay: 375,
      duration: 500,
      reset: true
  });
ScrollReveal().reveal('.iyirmis', {
      delay: 375,
      duration: 500,
      reset: true
  });
  ScrollReveal().reveal('.contacts', {
      delay: 375,
      duration: 500,
      reset: true
  });
  ScrollReveal().reveal('.location', {
      delay: 375,
      duration: 500,
      reset: true
  });

