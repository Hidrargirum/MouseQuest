$(document).ready(function(){
	var hintArr = ["hint1", "hint2", "hint3"]; 
	var hintOrder = 0;

  $("#submit").on('click', function(){
    var dataAttrValue = $(".active .question").attr("data-value");
    var inputValue = $(".active .question").val().toLowerCase();

    if(inputValue === dataAttrValue) {
      var next = $(".active").next();
      $(".question-block").removeClass('active');
      next.addClass("active");
      hintOrder++;
    }

    else {
    	$('#wrong-sound').get(0).play();
    		
      	$(".wrong-answer").addClass('wrong');
      	setTimeout(function () {
      		$(".wrong-answer").removeClass('wrong');
		}, 1500);
    }
    
    if($(".question-block").last().hasClass("active")){
      $('#submit').css('display','none');
      $('.overlay').css('display','block');
    }
  });

  $(".wrong-answer").on('click',function(){
  	$('.hide-block p').text(hintArr[hintOrder]);
  	$('.hide-block').slideDown();
  });
  $('.custom-btn').on('click',function(){
  	$('.hide-block').slideUp();
  });

  $('.present').on('click',function(){
  	$('.overlay').fadeOut();
  });


  $(document).on('click', '.map-btn>.custom-btn', function(){
		$('.map-block').addClass('active').animate({
            left: '0'
        }, 400);
  	});
  $(document).on('click', '.map-block.active>.map-btn>.custom-btn', function(){
		$('.map-block').removeClass('active').animate({
            left: '-80%'
        }, 500);
  	});

});