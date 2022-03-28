const nextButton = document.getElementById('nextPage');
const firstModal = document.getElementById('firstModal');
const secondPage = document.getElementById('secondPage');
const resultModal = document.getElementById('resultPage');
let hoursWanted = document.getElementById('hoursInputW');
let totalSleepHours;

const nextPage = () => {
  const monday = parseInt(document.forms["Form"]["monday"].value);
  const tuesday = parseInt(document.forms["Form"]["tuesday"].value);
  const wednesday = parseInt(document.forms["Form"]["wednesday"].value);
  const thursday = parseInt(document.forms["Form"]["thursday"].value);
  const friday = parseInt(document.forms["Form"]["friday"].value);
  const saturday = parseInt(document.forms["Form"]["saturday"].value);
  const sunday = parseInt(document.forms["Form"]["sunday"].value);
  if (monday == null || monday == "",
      tuesday == null || tuesday == "",
      wednesday == null || wednesday == "",
      thursday == null || thursday == "",
      friday == null || friday == "",
      saturday == null || saturday == "",
      sunday == null || sunday == "") {
    alert("Please Fill All Required Field")
  } else {
    firstModal.style.display = 'none';
    secondPage.style.display = 'block';
    totalSleepHours = monday + tuesday + wednesday + thursday + friday + saturday + sunday;
    
  }
}

const calculateSleepDebt = () => {
  const hoursWanted = parseInt(document.forms["formHours"]["hoursInputW"].value)
  const moreSleep = totalSleepHours - hoursWanted
  const lessSleep = hoursWanted - totalSleepHours
  if (totalSleepHours === hoursWanted) {
    document.getElementById('recommend').innerHTML = 'You Slept exactly the desired amount of hours this week';
  } else if (totalSleepHours > hoursWanted) {
   document.getElementById('recommend').innerHTML = `You slept more with  ${moreSleep}  hours than needed this week`;
  } else {
   document.getElementById('recommend').innerHTML = `You slept less with ${lessSleep} hours that the ideal hours of sleep ! Get some rest !`;
  }
}

const resultPage = () => {
  if(hoursWanted.value == null || hoursWanted.value == '' || hoursWanted.value < 48 ) {
    document.getElementsByClassName('sleepHoursWantedValidation')[0].style.display = 'block';
  } else {
    calculateSleepDebt();
    secondPage.style.display = 'none';
    document.getElementById('hoursSleept').innerHTML = `${totalSleepHours} hours`
  }
}

