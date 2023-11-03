import dataResults from '../data.json' assert { type: 'json' };
let sum = 0;
for (let i = 0; i < dataResults.length; i++) {
  sum += dataResults[i].score;
}
sum = Math.floor(sum/4);
if (sum >= 90){
    document.getElementById('results__opinion').innerHTML='Excellent';
    document.getElementById('results__range').innerHTML='87'
}else if (sum >= 70 && sum < 90){
    document.getElementById('results__opinion').innerHTML='Great';
    document.getElementById('results__range').innerHTML='65'
}else if (sum >= 40 && sum < 70){
    document.getElementById('results__opinion').innerHTML='Good';
    document.getElementById('results__range').innerHTML='40'
}else if (sum >= 20 && sum < 40){
    document.getElementById('results__opinion').innerHTML='Poor';
    document.getElementById('results__range').innerHTML='21'
}else{
    document.getElementById('results__opinion').innerHTML='Bad';
    document.getElementById('results__range').innerHTML='7'
};
document.getElementById('results__score').innerHTML=sum;
document.getElementById('resultsReaction').innerHTML=dataResults[0].category;
document.getElementById('resultsReactionNum').innerHTML=dataResults[0].score;
document.getElementById('reactionIcon').src=dataResults[0].icon;
document.getElementById('resultsMemory').innerHTML=dataResults[1].category;
document.getElementById('resultsMemoryNum').innerHTML=dataResults[1].score;
document.getElementById('memoryIcon').src=dataResults[1].icon;
document.getElementById('resultsVerbal').innerHTML=dataResults[2].category;
document.getElementById('resultsVerbalNum').innerHTML=dataResults[2].score;
document.getElementById('verbalIcon').src=dataResults[2].icon;
document.getElementById('resultsVisual').innerHTML=dataResults[3].category;
document.getElementById('resultsVisualNum').innerHTML=dataResults[3].score;
document.getElementById('visualIcon').src=dataResults[3].icon;
