// function proverit(){
//     pr_otv_zadachi_1 = ('z_1');
//     pr_otv_zadachi_2 = "ага";
//     pr_otv_zadachi_3 = "точно";
//     otv_uch_1 = document.getElementById('z_1').value;
//     otv_uch_2 = document.getElementById('z_2').value;
//     otv_uch_3 = document.getElementById('z_3').value;
//     ball = 0;
//     if(otv_uch_1 == pr_otv_zadachi_1){
//     ball +=1;
//     }
//     if(otv_uch_2 == pr_otv_zadachi_2){
//     ball +=1;
//     }
//     if(otv_uch_3 == pr_otv_zadachi_3){
//     ball +=1;
//     }
//     vsego_zadach = 3;
//     document.getElementById('rezultat').innerHTML = "Правильно выполнено "+ball+"/"+vsego_zadach+" задач.";
//     }

// test
function modul() {
    var count = document.getElementsByClassName('question').length; //Количество вопросов
    var answers = document.querySelectorAll('.question'); //Все элементы div с вопросами (???)
    var score = 0; //Количество верных ответов
    var rightAnswers = ["a_2","a_2","a_3","a_3","a_4","a_3","a_2","a_4","a_2","a_1","a_4","a_1","a_3","a_1","a_2","a_1","a_1","a_1","a_2","a_4","a_1","a_3"] //Список верных ответов
  
    for (var i = 0; i < count; i++) {
      var chosenAnswer = answers[i].querySelector("input[type='radio']:checked"); //Из массива вопросов выбираем элемент радио, который выбрал пользователь
      if (chosenAnswer && chosenAnswer.id == rightAnswers[i]) //Думал что будет работать если будет свреять по html разметке, но зря
      {
        score++;
      }
      // console.log("Выбранный ответ: " + chosenAnswer && chosenAnswer.parentNode.textContent);
      // console.log("Правильный ответ: " + rightAnswers[i]);
      // console.log("Очки: " + score);
      document.getElementById('rezultat').innerHTML = "Правильно выполнено "+'<br>'+score+"/"+count+'<br>'+" задач";
    }
  }


//timer 

  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 30,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};




// popap
$(document).ready(function(){
  $('.btn-block').click(function(event){
      $('.btn-block,.popap__body').toggleClass('active');
  })
})
// popap close
$(document).ready(function(){
  $('.cencel').click(function(event){
      $('.cencel,.popap__body').toggleClass('close');
  })
})