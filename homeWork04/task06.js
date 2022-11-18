const text = 'Мама мыла раму, рама мыла мыло, мыло… кхм, дальше не помню';
const newText = text.replace('Мама', 'Маша');
const newNewText = newText.replace(/мыла/g, 'ела');
const result = newNewText.replace(/мыло/g, 'кошку');
console.log(result);
