const time = document.getElementById('time');
let vallla, stop=false;
let ringtone=new Audio('ring2-mp3-6551.mp3')
function updateTimeDisplay() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let amOrPm = "AM";
  if (hr == 0) {
    hr = 12;
  } else if (hr > 12) {
    hr = hr - 12;
    amOrPm = "PM";
  }


  const formattedHour = hr < 10 ? '0' + hr : hr;
  const formattedMinute = min < 10 ? '0' + min : min;
  const formattedSecond = sec < 10 ? '0' + sec : sec;

  time.innerHTML = `${formattedHour} : ${formattedMinute} : ${formattedSecond}&nbsp ${amOrPm} `;
  if (vallla === `${formattedHour}:${formattedMinute}:${amOrPm}`) {
    ringtone.play();
    ringtone.loop = true;
  } 
}

updateTimeDisplay();

const opt1 = document.getElementById('fir');
const opt2 = document.getElementById('sec');
const opt3 = document.getElementById('thi');
setInterval(updateTimeDisplay, 1000);



function getOptions() {
  for (let i = 12; i > 0; i--) {
    let ii = i < 10 ? '0' + i : i;
    opt1.innerHTML += `<option class='hour-option' value='${ii}'>${ii}</option>`;
  }

  for (let i = 0; i <= 60; i++) {
    let jj = i < 10 ? '0' + i : i;
    opt2.innerHTML += `<option class='minute-option' value='${jj}'>${jj}</option>`;
  }

  for (let i = 2; i > 0; i--) {
    let kk = i === 1 ? 'AM' : 'PM';
    opt3.innerHTML += `<option class='am-pm-option' value='${kk}'>${kk}</option>`;
  }

 
}

getOptions();


const set = document.getElementById('btn');
function setAlarm() {
  
  console.log(`${opt1.value}:${opt2.value}:${opt3.value}`);

   vallla=`${opt1.value}:${opt2.value}:${opt3.value}`
  if (opt1.value === 'Hour' || opt2.value === 'Minute' || opt3.value === 'AM/PM') {
    alert('Please set an alarm clock');
    return;
  }

  opt1.classList.add('disable');
  opt2.classList.add('disable');
  opt3.classList.add('disable');
  
  hidebtn();
}

function hidebtn() {
  set.disabled = true;
  set.classList.add('disablebtn');
}

set.addEventListener('click', setAlarm);

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  opt1.classList.remove('disable');
  opt2.classList.remove('disable');
  opt3.classList.remove('disable');

  opt1.value = 'Hour';
  opt2.value = 'Minute';
  opt3.value = 'AM/PM';
  set.disabled = false;
  set.classList.remove('disablebtn');
  stop = true;

  vallla = '';
  ringtone.pause();
  ringtone.currentTime = 0;
});