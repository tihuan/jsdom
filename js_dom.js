window.onload= function(){

//RELEASE 0: Link this script to the js_dom.html file and analyze what this code does.

document.getElementsByTagName("body")[0].style.backgroundColor = "#99ebff";

//RELEASE 1:
  //Add code here to select elements of the DOM

document.getElementById("body").style.backgroundColor = "red";
document.getElementsByTagName("body")[0].style.backgroundColor = "green";
document.querySelector("body").style.backgroundColor = "#99ebff";

//RELEASE 2-4:
  // Add code here to manipulate the DOM.

document.getElementById("hack_btn").addEventListener("click", function() {
  var fakeImg = "<img style=\"display:none\" src=x onerror=alert(\"HTML5_cant_stop_me_from_running_script_using_innerHTML!\")><img src=\"http://i1.ytimg.com/i/p2m0mDErlma05eQugmeCdg/1.jpg\">";
  document.getElementById('hack').innerHTML = fakeImg;
})
document.getElementById("dec_btn").addEventListener("click", function(){
  document.getElementById("decorate").style.border = "solid";
  document.getElementById("decorate").style.backgroundColor = 'gold';
})

document.getElementById("hide_btn").addEventListener("click", function(){
  document.getElementById("hide").style.visibility = "hidden";
})

clock();

}  // end of the window.onload function do not remove or write DOM manipulation below this.

function clock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var now = "" + ((hour > 12) ? hour-12 : hour);
  now += ((minute < 10) ? ":0" : ":") + minute;
  now += ((second < 10) ? ":0" : ":") + second;
  now += (hour > 12) ? " P.M." : " A.M.";
  document.getElementById("clockForm").time.value = now;
  id = setTimeout("clock()", 1000);
}

function compute(f) {
  if (eval(f.math.value) == undefined) {
    f.result.value = "";
  } else {
    f.result.value = eval(f.math.value);
  }
};

var mathInput = document.getElementById("math");

mathInput.addEventListener("click", function(){
    if (mathInput.value == "Math Here") {
      mathInput.value = '';
    }
  })

mathInput.addEventListener("keyup", function() {
  compute(this.form);
})

