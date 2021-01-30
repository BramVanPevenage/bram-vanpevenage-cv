(function () {
  'use strict';
  //global variabelen
  let birthDate = '12/12/2001';
  let procentNextAge = 0;
  let myAge = (calculateAge(birthDate));
  let allBoxes = null;

  // Event listeners
  window.addEventListener('load', () => {

    document.getElementsByClassName('age')[0].innerHTML = Math.floor(myAge);
    document.getElementsByClassName('nextage')[0].innerHTML = Math.floor(myAge) + 1;
    aanmakenExitBtn();

    //box clickListeners
    document.getElementsByClassName('persoonlijk')[0].addEventListener('click', () => {
      selectBox(document.getElementsByClassName('persoonlijk')[0]);
    });
    document.getElementsByClassName('ervaring')[0].addEventListener('click', () => {
      selectBox(document.getElementsByClassName('ervaring')[0]);
    });
    document.getElementsByClassName('projecten')[0].addEventListener('click', () => {
      selectBox(document.getElementsByClassName('projecten')[0]);
    });
    document.getElementsByClassName('opleiding')[0].addEventListener('click', () => {
      selectBox(document.getElementsByClassName('opleiding')[0]);
    });
    document.getElementsByClassName('hobbys')[0].addEventListener('click', () => {
      selectBox(document.getElementsByClassName('hobbys')[0]);
    });
    document.getElementsByClassName('taal')[0].addEventListener('click', () => {
      selectBox(document.getElementsByClassName('taal')[0]);
    });
    document.getElementsByClassName('progervaring ')[0].addEventListener('click', () => {
      selectBox(document.getElementsByClassName('progervaring ')[0]);
    });
    document.getElementsByClassName('btnExit')[0].addEventListener('click', () => {
      BackToHomeScreen();
      document.getElementsByClassName('btnExit ')[0].style.display = 'none';
    });
    document.addEventListener('mouseover', hoverProgressBar);

  });
  




  //functies

  //verwijderen van alle boxes tonen van inhoud van geselecteerde box, exit button aanmaken

  function selectBox(selectedBox) {
    selectedBox.style.backgroundColor = 'blue';
    selectedBox.style.margin = '0';
    selectedBox.style.animation = 'none';
    selectedBox.style.width = '100vw';
    selectedBox.style.height = '100vh';
    selectedBox.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)';

    allBoxes = document.getElementsByClassName('box');

    for (let index = 0; index < allBoxes.length; index++) {
      if (allBoxes[index] != selectedBox) {
        allBoxes[index].style.display = 'none';
      } else {
        for (let i = 0; i < allBoxes[index].children.length; i++) {
          allBoxes[index].children[i].style.display = 'block';
          
        }
      }

    }

    //zichtbaar maken bntExit
    zichtbaarBtnExit();
  }


  //terug naar homeScreen
  function BackToHomeScreen() {
    for (let index = 0; index < allBoxes.length; index++) {
      if (allBoxes[index].style.width != '12rem') {
        allBoxes[index].style.backgroundColor = 'black';
        allBoxes[index].style.marginTop = '40vh';
        allBoxes[index].style.marginLeft = 'auto';
        allBoxes[index].style.marginRight = 'auto';
        allBoxes[index].style.animation = 'animate 7s infinite';
        allBoxes[index].style.width = '12rem';
        allBoxes[index].style.height = '17rem';
        allBoxes[index].style.transform = 'perspective(1000px) rotateX(35deg) rotateY(4deg) rotateZ(-30deg)';

      }
      allBoxes[index].style.display = 'flex';

      for (let i = 0; i < allBoxes[index].children.length; i++) {
        if (allBoxes[index].children[i].className.includes('content')) {
          allBoxes[index].children[i].style.display = 'none';
        }
        
      }
    }
  }

  //aanmaken exit button
  function aanmakenExitBtn() {
    let imgExit = document.createElement('img');
    imgExit.src = 'images/closeIcon.png';
    let btnExit = document.createElement('div');
    imgExit.style.padding = '0.8rem';
    
    btnExit.className = 'btnExit button';
    imgExit.style.width = '3.5rem';
    imgExit.style.height = '3.5rem';
    btnExit.style.display = 'none';
    btnExit.style.border = '1px solid black';
    btnExit.style.borderRadius = '50rem';
    btnExit.style.position = 'absolute';
    btnExit.style.top = '90vh';
    btnExit.style.right = '5vh';
    btnExit.style.zIndex = '10';
    btnExit.style.cursor = 'pointer';
    btnExit.appendChild(imgExit);
    document.getElementsByTagName('main')[0].appendChild(btnExit);

  }

  function zichtbaarBtnExit() {
    document.getElementsByClassName('btnExit ')[0].style.display = 'block';
  }

  //bereken van leeftijd op een doorgegeven datum
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

  function hoverProgressBar(e) {
    let tooltip = document.getElementsByClassName('tooltip')[0];
    let element = e.target;
    let x = e.clientX;
    let y = e.clientY;


    if (element.id == 'myAgeProgress' || element.id == 'myBar') {
      tooltip.style.top = y - 20 + window.scrollY + 'px';
      tooltip.style.left = x + 15 + 'px';
      tooltip.innerHTML = round(procentNextAge.replace('%', ''), 2) + '%';
      tooltip.style.opacity = '100';
    } else if (element.id !== 'myAgeProgress' || element.id !== 'myBar') {
      tooltip.style.opacity = '0';
    }
    //als je een box hoverd keine animatie dat het echt lijkt dat je hem selecteerd
    /*if (element.className.includes('box') || element.parentElement.className.includes('box')) {
      if (element.className.includes('box')) {
        let coordinaten = element.getBoundingClientRect();
        //element.style.position = 'absolute';
        element.offsetLeft -= 5;
      }
      if (element.parentElement.className.includes('box')) {
        let coordinaten = element.parentElement.getBoundingClientRect();
        element.parentElement.style.position = 'absolute';
        element.parentElement.style.top = coordinaten.x - 1 + 'px';
        //element.parentElement.offsetLeft -= 5;
      }
    }*/


  }

  function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }
})();