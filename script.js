//css javascript
if ($(window).width() < 768) {
  $("#4").removeClass("w-100 flex-grow-1");
  $("#5").addClass("flex-column");
}
$(window).resize(function () {
  if ($(window).width() < 768) {
    $("#4").removeClass("w-100 flex-grow-1");
    $("#5").addClass("flex-column");
  }
  else if ($(window).width() > 512) {
    $("#4").addClass("w-100 flex-grow-1");
    $("#5").removeClass("flex-column");
  }
});


//navbar buttons
$(".add").click(function () {
  current();
  document.querySelector(".add").classList.add("active");
  reAssign('+');
  $("#operator").text('+');
  assign('+');

});
$(".subtract").click(function () {
  current();
  document.querySelector(".subtract").classList.add("active");
  reAssign('-');
  $("#operator").text('-');
  assign('-');
});
$(".multiply").click(function () {
  current();
  document.querySelector(".multiply").classList.add("active");
  reAssign('X');
  $("#operator").text('X');
  assign('*');
});
$(".divide").click(function () {
  current();
  document.querySelector(".divide").classList.add("active");
  reAssign('/');
  $("#operator").text('/');
  assign('/');
});





//global answer variable
var answer;
var operator;


function random() {
  $('.number').each(function () {
    $(this).html(Math.floor(Math.random() * 100));
  }
  );
  $('.operands').each(function () {
    $(this).html(Math.floor(Math.random() * 10000));
  });
}

function assign(operation) {
    random();//calling random
    operator = operation;
    var innerHTML2 = document.getElementById("num1").innerHTML;
    var innerHTML3 = document.getElementById("num2").innerHTML;
    var randomDiv = Math.floor(Math.random() * 3) + 1;
    answer = Math.floor((eval(innerHTML2 + operation + innerHTML3)));
    document.getElementById(randomDiv).innerHTML = answer;
    
}


function reAssign(operation){
  if(operation==='*'){
      $('#operator').html('✖');
  }
  else {
    $('#operator').html(operation);
  }
  $("#que").html("?");
  $("#equal").html("=");
  $("#correct").html('');
}



  $(".operands").click(function () {
    if(this.innerText==answer)
    {
    $(".change").html('');
    $("#wrong").html('');
    $("#correct").html("well done 🎉🎉");
    setTimeout(function(){
    reAssign(operator);
    assign(operator);
  },300);
    }
    else
    {
      $("#wrong").html("<br>try again ❌");
    }
  });

  //default run of site
  {
  reAssign('+');
  $("#operator").text('+');
  assign('+');
  }

  //function for active class
  function current(){
    for(var i=0;i<4;i++)
    document.querySelectorAll(".nav-link")[i].classList.remove("active");
  }
