(function () {
  'use strict';
  let birthDate = '12/12/2001';
  let procentNextAge = 0;
  let myAge = (calculateAge(birthDate));
  window.addEventListener('load', () => {
    
    document.getElementsByClassName('age')[0].innerHTML = Math.floor(myAge);
    document.getElementsByClassName('nextage')[0].innerHTML = Math.floor(myAge) + 1;

  });



  function calculateAge(birthDate) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    let now = new Date(today);
    let birth = new Date(birthDate);

    const myAge = (now - birth) / 31557600000 /* from ms to year */ ;

    procentNextAge = `${(myAge - Math.floor(myAge)) * 100}%`;
    console.log(procentNextAge);
    document.getElementById('myBar').style.width = procentNextAge;

    return myAge;
  }
  document.addEventListener('mouseover', hoverProgressBar);
  function hoverProgressBar(e) {
    let tooltip = document.getElementsByClassName('tooltip')[0];
    let element = e.target;
    let x = e.clientX;
    let y = e.clientY;


    if(element.id == 'myAgeProgress' || element.id == 'myBar'){
      tooltip.style.top = y - 20 + window.scrollY + 'px';
      tooltip.style.left = x + 15 + 'px';
      tooltip.innerHTML = round(procentNextAge.replace('%',''), 2) + '%';
      tooltip.style.opacity = '100';
    }
    else{
      tooltip.style.opacity = '0';
    }


    

  }

  function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }  
})();