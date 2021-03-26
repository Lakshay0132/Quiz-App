var i = 0,j=0,c=1;



// to get the data from the file


function get_data() {
  fetch("./easydata.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data.questions[i]);
      console.log(data.options[j]);
      var a = data.options[i];
      for(j = 0; j < 4; j++) {
         
        document.getElementById("options").innerHTML += `<p class="opt"  >${a[j]}</p>`;       //to get the options from the file
      }
      document.getElementById("question").innerHTML = ` Q${c}. ${data.questions[i]} `;        //to get the questions ferom the file
    });
}
//function to make the next button working
function Next() {
    c++;
  if (i < 4) {
    i++;
  } else {
    document.getElementById("easy_body").innerHTML =
      `<h1 class="report" > Quiz Report : your Knowledge is <span>Good</span></h1>`;
  }

  console.log(i);
  get_data();
  document.getElementById("options").innerHTML ="";
}
get_data();

//to set the timer while giving the test
var m=31
setInterval( function(){
  m--;
  if (m>=0){
    document.getElementById('timer').innerHTML=`${m}`
  }
  if(m===0){
    document.getElementById("easy_body").innerHTML =
    `<h1 class="report" > Quiz Report : your Knowledge is <span>Good</span></h1>`;
  }
},1100)

