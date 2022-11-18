const str = 'ННе ттттолльккккко лишшшшььььь всссссе могуттттт сделллллать этттто';
const arr = str.split('');
const set = new Set(arr);
const strNew = Array.from(set).join('');
console.log(strNew);
