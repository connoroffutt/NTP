$(document).ready(function() {
  
  $('.email-button').on('click', function() {
    $('.panel').toggleClass('slide-out');
  $('.close-quote-button').on('click', function() {
    $('.panel').toggleClass('slide-out');
  });
  });

  $('.thumb').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
  });

  $('.thumb.2').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal2').modal({show:true});
  });

  $('#next-btn').click(function() {
    var link = $('.modal-body a');
    var number = parseInt(link.attr('title').match(/\S+$/));
    number++;
    if(number === 32) {
    number = 1;
    }
    $('.modal-body').html($('#img-container').find('a[title="Image ' + number + '"]').parent('div').html());
    $('.modal-title').text('Image ' + number);
  });

  $('#next-btn2').click(function() {
    var link = $('.modal-body a');
    var number = parseInt(link.attr('title').match(/\S+$/));
    number++;
    if(number === 18) {
    number = 1;
    }
    $('.modal-body').html($('#img-container').find('a[title="Image ' + number + '"]').parent('div').html());
    $('.modal-title').text('Image ' + number);
  });

  $('#prev-btn').click(function() {
    var link = $('.modal-body a');
    var number = parseInt(link.attr('title').match(/\S+$/));
    number--;
    if(number === 0) {
    number = 31;
    }
  $('.modal-body').html($('#img-container').find('a[title="Image ' + number + '"]').parent('div').html());
  $('.modal-title').text('Image ' + number);
  });

  $('#prev-btn2').click(function() {
    var link = $('.modal-body a');
    var number = parseInt(link.attr('title').match(/\S+$/));
    number--;
    if(number === 0) {
    number = 17;
    }
  $('.modal-body').html($('#img-container').find('a[title="Image ' + number + '"]').parent('div').html());
  $('.modal-title').text('Image ' + number);
  });

});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
    $('nav.navbar').css("height", "70px");
    $('.navli').addClass('shrink');
    $('.email-button').addClass('shrink');
    $('.nav-brand').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
    $('nav.navbar').css("height", "140px");
    $('.navli').removeClass('shrink');
    $('.email-button').removeClass('shrink');
    $('.nav-brand').removeClass('shrink');
  }
});






// var x = document.getElementById("panel");
// var createform = document.createElement('form');
// createform.setAttribute("action", "");
// createform.setAttribute("method", "post");
// x.appendChild(createform);

// var heading = document.createElement('h2');
// heading.innerHTML = "Get A Quote ";
// createform.appendChild(heading);

// var line = document.createElement('hr');
// createform.appendChild(line);

// var linebreak = document.createElement('br');
// createform.appendChild(linebreak);

// var namelabel = document.createElement('label');
// namelabel.innerHTML = "Your Name : ";
// createform.appendChild(namelabel);

// var inputelement = document.createElement('input');
// inputelement.setAttribute("type", "text");
// inputelement.setAttribute("name", "dname");
// createform.appendChild(inputelement);

// var linebreak = document.createElement('br');
// createform.appendChild(linebreak);

// var emaillabel = document.createElement('label'); 
// emaillabel.innerHTML = "Your Email : ";
// createform.appendChild(emaillabel);

// var emailelement = document.createElement('input');
// emailelement.setAttribute("type", "text");
// emailelement.setAttribute("name", "demail");
// createform.appendChild(emailelement);

// var emailbreak = document.createElement('br');
// createform.appendChild(emailbreak);

// var messagelabel = document.createElement('label');
// messagelabel.innerHTML = "Your Message : ";
// createform.appendChild(messagelabel);

// var texareaelement = document.createElement('textarea');
// texareaelement.setAttribute("name", "dmessage");
// createform.appendChild(texareaelement);

// var messagebreak = document.createElement('br');
// createform.appendChild(messagebreak);

// var submitelement = document.createElement('input');
// submitelement.setAttribute("type", "submit");
// submitelement.setAttribute("name", "dsubmit");
// submitelement.setAttribute("value", "Submit");
// createform.appendChild(submitelement);
