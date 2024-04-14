import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { DURATION } from './mock/const';
dayjs.extend(duration);
dayjs.extend(relativeTime);

const MSECOND_IN_SECOND = 1000;
const SECOND_IN_MINUTE = 60;
const MINUTE_IN_HOUR = 60;
const HOUR_IN_DAY = 24;
const MSECOND_IN_HOUR = MINUTE_IN_HOUR * SECOND_IN_MINUTE * MSECOND_IN_SECOND;
const MSECOND_IN_DAY = HOUR_IN_DAY * MSECOND_IN_HOUR;


const isEscape = (event) => event.key === 'Escape';


function formatStringToDateToTime(date){
  return dayjs(date).format('YYYY-MM-DDTHH:mm');
}


function formatToShortDate(date){
  return dayjs(date).format('MMM DD');
}

function formatToTime(date){
  return dayjs(date).format('HH:MM');
}

function getPointDuration(point){


  const timeDifferense = dayjs(point.dateTo).diff(dayjs(point.dateFrom));


  let pointDuration = 0;


  switch(true){

    case(timeDifferense >= MSECOND_IN_DAY):
      pointDuration = dayjs.duration(timeDifferense).format('DD[D] HH[H] mm[M]');
      break;


    case(timeDifferense >= MSECOND_IN_HOUR):
      pointDuration = dayjs.duration(timeDifferense).format('HH[H] mm[M]');
      break;


    case(timeDifferense < MSECOND_IN_HOUR):
      pointDuration = dayjs.duration(timeDifferense).format('mm[M]');
      break;
  }

  return pointDuration;
}


function getSheduleDate(date){
  return dayjs(date).format('DD/MM/YY HH:mm');
}


function getRandomInteger(a = 0, b = 1){
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}


function getRandomValue(items){
  return items[getRandomInteger(0,items.length - 1)];
}


let dateToGet = dayjs().subtract(getRandomInteger(0,DURATION.DAY),'day').toDate();

//текущая дата + к ней дату которая передается
function getDate({next}){
  const minutesGap = getRandomInteger(0,DURATION.MIN);
  const hoursGap = getRandomInteger(1,DURATION.HOUR);
  const daysGap = getRandomInteger(0,DURATION.DAY);

  if (next){
    dateToGet = dayjs(dateToGet).add(minutesGap,'minute').add(hoursGap,'hour').add(daysGap,'day').toDate();
  }
  return dateToGet;
}

export{
  formatStringToDateToTime,formatToShortDate,formatToTime,getPointDuration,getSheduleDate,getRandomInteger,getRandomValue,getDate, isEscape
};
