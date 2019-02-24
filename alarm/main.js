var alarmSound = new Audio();
var alarmTimer;
alarmSound.src = 'alarm.mp3';
function setAlarm(button) {
var ms = document.getElementById('alarmTime').valueAsNumber;
if(isNaN(ms)){
    alert('Invalid Date');
    return;
}
var alarm = new Date(ms);
var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
var differenceinMS = alarmTime.getTime() - (new Date()).getTime();

if (differenceinMS<0) {
    alert('Specified time has already passed');
    return;
}

alarmTimer = setTimeout(initAlarm, differenceinMS);

button.innerText = 'Cancel Alarm';
button.setAttribute('onclick', 'cancelAlarm(this);');

};

function cancelAlarm(button) {
    button.innerText = 'Set Alarm';
    button.setAttribute('onclick', 'setAlarm(this);');
    clearTimeout(alarmTimer);
};


function initAlarm() {
alarmSound.play();
document.getElementById('alarmOptions').style.display = '';
document.getElementById('image').style.display = '';
document.getElementById('alarmButton').style.display = 'none';
document.getElementById('cancelSnooze').style.display = 'none' 
};

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.getElementById('alarmOptions').style.display = 'none';
    document.getElementById('image').style.display = 'none';
    cancelAlarm(document.getElementById('alarmButton'));
    document.getElementById('alarmButton').style.display = '';
};

var clearSet;

function snooze(){
stopAlarm();
clearSet = setTimeout(initAlarm, 60000);
document.getElementById('alarmButton').style.display = '';
document.getElementById('cancelSnooze').style.display = '';
};

function cancellingSnooze(){
    document.getElementById('cancelSnooze').style.display = 'none'   
    clearTimeout(clearSet);
}