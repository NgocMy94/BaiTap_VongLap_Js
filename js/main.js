/**
 * Bài Tập 1
 */
//For
function exercise_1(){
    var num = document.getElementById("inPut1").value
    var dsSoChan = " "
    var dsSoLe = " "
    for(i = 1 ; i < num ; i++){
        if(i % 2 == 0){
            dsSoChan += i + " "
        }
        else{
            dsSoLe += i + " "
        }
    }
    document.getElementById("txtExercise1").innerHTML = "Số Chẳn : " +dsSoChan + " <br>" + "Số Lẽ : " +dsSoLe
 }
 
 //White
 function exercise_2() {
   var num = document.getElementById("inPut2").value;
   var dsSoChan = "";
   var dsSoLe = "";
   var count = 1;
   while (count < num) {
     
     if (count % 2 == 0) {
       dsSoChan += count + " ";
     } else {
       dsSoLe += count + " ";
     }
     count++;
   }
 
   document.getElementById("txtExercise2").innerHTML =
     "Số Chẳn : " + dsSoChan + " <br>" + "Số Lẽ : " + dsSoLe;
 }
 /**
 * Bài Tập 2
 */
//For
function exercise_3() {
    var num = document.getElementById("inPut3").value;
    var toTal = 0;
    for (i = 1; i <= num; i++) {
      if (i % 3 == 0) {
        toTal = toTal + 1;
      }
    }
    document.getElementById("txtExercise3").innerHTML =
      "Số chia hết cho 3 : " + toTal + " Số";
  }
  
  //White
function exercise_4(){
  var num = document.getElementById("inPut4").value;
  var toTal = 0 
  var count = 1
  while(count <= num){
    if(count % 3 == 0){
      
      toTal = toTal + 1
    }
    count++
    
  }
  
  document.getElementById("txtExercise4").innerHTML =  "Số chia hết cho 3 : " +toTal + " Số";

}
/**
 * Bài Tập 3
 */

//For
function exercise_5(){
    var num = document.getElementById("inPut5").value;
    var sum = 0
    for(i = 0;sum < num ; i++){
      sum = sum + i 
      
    }
    document.getElementById("txtExercise5").innerHTML = "Số  nguyên dương nhỏ nhất: " + i;
  }
//White
function exercise_6() {
  var num = document.getElementById("inPut6").value;
  var sum = 0
  var count = 0
  while(sum < num){
    
    sum = sum + count
    count++
  }
  
  document.getElementById("txtExercise6").innerHTML = "Số Nguyên Dương Nhỏ Nhất : " + count
}
/**
 * Bài Tập 4
 */
//For
function  exercise_7(){
    var x = document.getElementById("inPut7").value
    var n = document.getElementById("inPut8").value
    var lt = 1
    var s = 0
    for(i = 1;i <= n;i++){
        lt = lt * x
        s += lt 
      }
    document.getElementById("txtExercise7").innerHTML = "Tổng là : " + s
  }
  //White
function  exercise_8(){
  var x = document.getElementById("inPut9").value
  var n = document.getElementById("inPut10").value
  var lt = 1
  var s = 0
  var count = 1
  while(count<=n){
    lt = lt * x
    s += lt
    count++
  }
  document.getElementById("txtExercise8").innerHTML = "Tổng là : " + s
}  

/**
 * Bài 5
 * 
 */
//For
function exercise_9(){
    var n = document.getElementById("inPut11").value
    var giaiThua = 1
    for(i = 1;i <= n;i++){
      giaiThua = giaiThua * i
    }
    document.getElementById("txtExercise9").innerHTML = "Giai Thừa Của " +n + " Là :" + giaiThua
  }
//White
  function exercise_10(){
    var n = document.getElementById("inPut12").value
    var giaiThua = 1
    var i = 1
    while (i <= n){
      giaiThua = giaiThua * i
      i++
    }
    document.getElementById("txtExercise10").innerHTML = "Giai Thừa Của " +n + " Là : " + giaiThua
  }
 /**
 * Bài số 6
 */
//For
function exercise_11(){
    var divs = document.getElementsByClassName("For")
    
    for (var i = 0; i < divs.length;i++){
      if((i + 1) % 2 == 0){
        divs[i].style.backgroundColor = "red"
        divs[i].innerHTML = "Div Chẵn"
        divs[i].style.color = "black"
        
      }
      else{
        divs[i].style.backgroundColor = "blue"
        divs[i].innerHTML = "Div Lẽ"
        divs[i].style.color = "white"
      }
    }
  }
  //White
  function exercise_12(){
    var divs = document.getElementsByClassName("White")
    var i = 0
    while(i < divs.length){
      if ((i + 1) % 2 == 0){
        divs[i].style.backgroundColor = "red"
        divs[i].innerHTML = "Div Chẵn"
        divs[i].style.color = "black"
      }
      else{
             divs[i].style.backgroundColor = "blue"
             divs[i].innerHTML = "Div Lẽ"
             divs[i].style.color = "white"
  
           }
           i++
      }
      
  }
   