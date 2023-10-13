const all_time_sec = ((((1 * 60) + 1) * 60) + 5);
const sec_hour = Math.floor(all_time_sec / 3600);
const min = Math.floor((all_time_sec - 3600) / 60);
const sec = all_time_sec - 3600 - 60;
console.log('Время: ' + sec_hour + ' ч ' + min + ' мин ' + sec + ' сек');