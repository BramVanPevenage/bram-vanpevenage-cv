(function () {
  "use strict";
  //global variabelen
  let birthDate = "12/12/2001";
  let procentNextAge = 0;
  let myAge = calculateAge(birthDate);
  let allBoxes = null;

  // Event listeners
  window.addEventListener("load", () => {
    document.getElementsByClassName("age")[0].innerHTML = Math.floor(myAge);
    document.getElementsByClassName("nextage")[0].innerHTML = Math.floor(myAge) + 1;
    aanmakenExitBtn();
    document.getElementsByClassName("btnExit")[0].addEventListener("click", () => {
      BackToHomeScreen();
      document.getElementsByClassName("btnExit ")[0].style.display = "none";
    });
    document.addEventListener("mouseover", hoverProgressBar);

    //box clickListeners
    for (const box of document.getElementsByClassName('box')) {
      box.addEventListener("click", () => {
        selectBox(box);
      });
    }
  });

  function selectBox(selectedBox) {
    selectedBox.style.backgroundColor = "blue";
    selectedBox.style.margin = "0";
    selectedBox.style.animation = "none";
    selectedBox.style.width = "100vw";
    selectedBox.style.height = "100vh";
    selectedBox.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";

    allBoxes = document.getElementsByClassName("box");

    for (let index = 0; index < allBoxes.length; index++) {
      if (allBoxes[index] != selectedBox) {
        allBoxes[index].style.display = "none";
      } else {
        for (let i = 0; i < allBoxes[index].children.length; i++) {
          allBoxes[index].children[i].style.display = "block";
          if (allBoxes[index].children[i].tagName == "H2") {
            allBoxes[index].children[i].style.fontSize = "2.5rem";

            if (allBoxes[index].className.includes("persoonlijk__box")) {
              allBoxes[index].children[i].style.fontSize = "18rem";
            }
            if (allBoxes[index].className.includes("taal__box")) {
              allBoxes[index].children[i].style.fontSize = "40rem";
            }
            if (allBoxes[index].className.includes("ervaring__box")) {
              allBoxes[index].children[i].style.fontSize = "24rem";
            }
            if (allBoxes[index].className.includes("progervaring__box__box")) {
              allBoxes[index].children[i].style.fontSize = "21rem";
            }
            if (allBoxes[index].className.includes("projecten__box")) {
              allBoxes[index].children[i].style.fontSize = "22rem";
            }
            if (allBoxes[index].className.includes("opleiding")) {
              allBoxes[index].children[i].style.fontSize = "20rem";
            }
            if (allBoxes[index].className.includes("hobbys__box")) {
              allBoxes[index].children[i].style.fontSize = "25rem";
            }
            allBoxes[index].children[i].style.opacity = "20%";
            allBoxes[index].children[i].style.position = "absolute";
          }
        }
      }
    }

    //zichtbaar maken bntExit => telkens als er een box geselecteerd wordt
    zichtbaarBtnExit();
  }

  //terug naar homeScreen TODO: er is iets mis met de animatie, deze moet nog gefixt worden.
  function BackToHomeScreen() {
    for (let index = 0; index < allBoxes.length; index++) {
      if (allBoxes[index].style.width != "12rem") {
        allBoxes[index].style.backgroundColor = "black";
        allBoxes[index].style.marginTop = "40vh";
        allBoxes[index].style.marginLeft = "auto";
        allBoxes[index].style.marginRight = "auto";
        allBoxes[index].style.animation = "animate 7s infinite";
        allBoxes[index].style.width = "12rem";
        allBoxes[index].style.height = "17rem";
        allBoxes[index].style.transform =
          "perspective(1000px) rotateX(35deg) rotateY(4deg) rotateZ(-30deg)";
      }
      allBoxes[index].style.display = "flex";

      for (let i = 0; i < allBoxes[index].children.length; i++) {
        if (allBoxes[index].children[i].className.includes("content")) {
          allBoxes[index].children[i].style.display = "none";
        }
        if (allBoxes[index].children[i].tagName == "H2") {
          allBoxes[index].children[i].style.fontSize = "1.7rem";
          allBoxes[index].children[i].style.opacity = "100%";
        }
      }
    }
  }

  /**
   * Creating the exit button for the different boxes.
   */
  function aanmakenExitBtn() {
    let imgExit = document.createElement("img");
    imgExit.src = "images/closeIcon.png";
    imgExit.className = "imgExit";

    let btnExit = document.createElement("div");
    btnExit.className = "btnExit button";

    btnExit.appendChild(imgExit);
    document.getElementsByTagName("main")[0].appendChild(btnExit);
  }

  function zichtbaarBtnExit() {
    document.getElementsByClassName("btnExit ")[0].style.display = "block";
  }

  /**
   * Calculate the percentage of the age of myself. based on the date of birth and the date of today.
   * @param {*} birthDate date of birth
   * @returns percentage of the age of myself between the current and the next age of myself.
   */
  function calculateAge(birthDate) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    let now = new Date(today);
    let birth = new Date(birthDate);

    const myAge = (now - birth) / 31557600000; /* from ms to year */

    procentNextAge = `${(myAge - Math.floor(myAge)) * 100}%`;
    console.log(procentNextAge);
    document.getElementById("myBar").style.width = procentNextAge;

    return myAge;
  }

  function hoverProgressBar(e) {
    let tooltip = document.getElementsByClassName("tooltip")[0];
    let element = e.target;
    let x = e.clientX;
    let y = e.clientY;

    if (element.className == "myAgeProgress" || element.id == "myBar") {
      tooltip.style.top = y - 20 + window.scrollY + "px";
      tooltip.style.left = x + 15 + "px";
      tooltip.innerHTML = round(procentNextAge.replace("%", ""), 2) + "%";
      tooltip.style.opacity = "80";
    } else if (element.id !== "myAgeProgress" || element.id !== "myBar") {
      tooltip.style.opacity = "0";
    }
  }
/**
 * Function to round a specifique number to a certain decimal.
 * @param {number} value the value to round
 * @param {number} decimals round to this many decimals
 * @returns the rounded value
 */
  function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  }
})();
