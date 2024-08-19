

var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("Weight");
var male = document.getElementById("male");
var female = document.getElementById("female");
let resultArea = document.querySelector(".comment");



function calculate(){
  
    var bmi =weight.value/(height.value/100*height.value/100);
        
    var result = '';
    if(bmi<18.5){
      result = 'Underweight';
       }else if(18.5<=bmi&&bmi<=24.9){
      result = 'Healthy';
       }else if(25<=bmi&&bmi<=29.9){
      result = 'Overweight';
       }else if(30<=bmi&&bmi<=34.9){
      result = 'Obese';
       }else if(35<=bmi){
      result = 'Extremely obese';
       }
  
  
  
  resultArea.style.display = "block";
  document.querySelector(".comment").innerHTML =` You are${result};`
  document.querySelector("#result").innerHTML = bmi;

  
  
  }
  function speakResult(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}






// function countBmi(){
//     var p= [age.value,height.value,weight.value];
//     if(male.checked){
//         p.push("male");
//     }else if(female.checked){
//         p.push("female");
//     }
//     }


//     var bmi= Number(p[2]/(Number(p[1])/100*Number(p[1])/100));

//     var result ='';
//     if(bmi<18.5){
//         result='underweight';

//     }else if(18.5<=bmi&&bmi<=24.9){
//         result ='healthy';
//     }else if(25<=bmi&&bmi<=34.9){
//         result ='overweight'
//     }else if(30<=bmi&&bmi<=34.9){
//         result='obese';
//     }else if(35<=bmi){
//         result='extremely obese'
//     }
    
    
