// create a desired time 13 hours 8 hours 12 mins 5 seconds from current time.
const countUntill = new Date();
countUntill.setDate(countUntill.getDate() + 13);
countUntill.setHours(countUntill.getHours() + 8, countUntill.getMinutes() + 12, countUntill.getSeconds() + 5);

function singularPluralUnits(timeUnit, className, singularText, pluralText) {
    if (timeUnit <= 1) {
        document.querySelector(className).innerHTML = singularText;
    }
    else {
        document.querySelector(className).innerHTML = pluralText;
    }
}

function countDownTimer() {
    // timeNow: current time to subtract from.
    const timeNow = new Date().getTime();
    const timeDifference = countUntill - timeNow;
    
    // get time units in milliseconds to do conversions.
    const secInMilli = 1000;
    const minInMilli = secInMilli * 60;
    const hoursInMilli = minInMilli * 60;
    const daysInMilli = hoursInMilli * 24;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(timeDifference / daysInMilli);
    const hours = Math.floor((timeDifference % daysInMilli) / hoursInMilli);
    const minutes = Math.floor((timeDifference % hoursInMilli) / minInMilli);
    const seconds = Math.ceil((timeDifference % minInMilli) / secInMilli);
    const dayPaddedString = String(days).padStart(2, 0);
    const hoursPaddedString = String(hours).padStart(2, 0);
    const minutesPaddedString = String(minutes).padStart(2, 0);
    const secondsPaddedString = String(seconds).padStart(2, 0);
    
    // get day container with spans to add day first digit and second digit
    const daysSpans = document.querySelector(".days").children;
    daysSpans[0].innerHTML = dayPaddedString[0];
    daysSpans[1].innerHTML = dayPaddedString[1];
    
    // get hours container with spans to add hours first digit and second digit
    const hoursSpans = document.querySelector(".hours").children;
    hoursSpans[0].innerHTML = hoursPaddedString[0];
    hoursSpans[1].innerHTML = hoursPaddedString[1];
    
    // get mins container with spans to add mins first digit and second digit
    const minsSpans = document.querySelector(".mins").children;
    minsSpans[0].innerHTML = minutesPaddedString[0];
    minsSpans[1].innerHTML = minutesPaddedString[1];
    
    // get secs container with spans to add secs first digit and second digit
    const secsSpans = document.querySelector(".secs").children;
    secsSpans[0].innerHTML = secondsPaddedString[0];
    secsSpans[1].innerHTML = secondsPaddedString[1];
    
    // change time unit label when value is singular for example 1 day or 1 sec, OR 
    // to make them plural for example 13 days or 3 hours
    singularPluralUnits(days, ".days-label", "DAY", "DAYS");
    singularPluralUnits(hours, ".hours-label", "HOUR", "HOURS");
    singularPluralUnits(minutes, ".mins-label", "MIN", "MINS");
    singularPluralUnits(seconds, ".secs-label", "SEC", "SECS");
    
    // If the count down is finished, clear the interval to stop it.
    if (timeDifference < 0) {
        clearInterval(interval);
    }
}
// Update the count down every 1 second
var interval = setInterval(countDownTimer, 1000); 