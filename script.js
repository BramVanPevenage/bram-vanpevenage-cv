(function () {
  'use strict';
  window.addEventListener('load' , () => {
    let birthDate = '12/12/2001';
    
    document.getElementsByClassName('age')[0].innerHTML = calculateAge(birthDate);
  });



  function calculateAge(birthDate){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    let now  = new Date(today);
    let birth = new Date(birthDate);

    const myAge = (now - birth) / 31688764600 /* from ms to year */ ;

    return myAge;
  }
})();

  
