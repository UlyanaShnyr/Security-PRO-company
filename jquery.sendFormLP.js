(function($){

	jQuery.fn.sendFormLP = function(options){
	  
		options = $.extend({
		  toEmail: 'baner_work@ukr.net',
		  fromEmail: 'UlyanaShnyr@security-pro.zzz.com.ua',
		  interval : 5000
	  }, options);

	  var make = function(){
		
		  $(this).submit(function(e){
			  $('#cube-loader').show();
			  e.preventDefault();

			  var $this = $(this);

			  var i = true;
			  var toEmail = options.toEmail;
			  var fromEmail = options.fromEmail;
			  var them = $this.data('them');
			  var $items = $this.find('[name]');
			  var $required = $this.find('[data-required]');
			  var objShow = $this.data('show')
			  var objHide = $this.data('hide')

			  $items.removeClass('error');

			  $required.each(function(){
				  if($(this).val() == ''){
					  i = false
					  $(this).addClass('error');
				  }
			  });

			  if(i == true){
				  var arr = [];
				  var m_action = $this.attr('action');

				  $items.each(function(){
					  var nam = $(this).data('name');
					  var val = $(this).val();
					  arr.push(nam+val);
				  });

				  var m_data = '';

				  for(q=0; q <= arr.length-1; q++){
					  m_data = m_data+arr[q]+'\n';
				  }
				  
				  $.ajax({
					  type: 'POST',
					  url: m_action,
					  data: {
						  m_data:m_data,
						  toEmail:toEmail,
						  fromEmail:fromEmail,
						  them:them
					  },
					  success: function(result){
						  $('#cube-loader').hide();		
						   $('.formContactBiggest')[0].reset();							
						  $('#myModalBiggerWindow').modal('show');						
						  
						  $items.val('');
						  $(objShow).fadeIn();
						  $(objHide).hide();						

						  


						  setInterval(function(){
							  $(objShow).fadeOut();
							  $('#myModalBiggerWindow').modal('hide');
						  }, options.interval);
						  
						  
					  }
				  });

			  
			  }
		  });

	  };
   
	  return this.each(make); 

	};

})(jQuery);

$(function(){

  
  $('form').sendFormLP({
	  
	  toEmail: 'baner_work@ukr.net',
	  fromEmail: 'UlyanaShnyr@security-pro.zzz.com.ua',
	  interval: 1000
  });

});
/////////////////////////////////////////////////             FOR MOBILE             //////////////////////////////////////////////////


(function($){

  jQuery.fn.sendFormLPMobile = function(options){
	
	  options = $.extend({
		toEmail: 'baner_work@ukr.net',
		fromEmail: 'UlyanaShnyr@security-pro.zzz.com.ua',
		interval : 5000
	}, options);

	var make = function(){
	  
		$(this).submit(function(e){
			$('#cube-loader').show();
			e.preventDefault();

			var $this = $(this);

			var i = true;
			var toEmail = options.toEmail;
			var fromEmail = options.fromEmail;
			var them = $this.data('them');
			var $items = $this.find('[name]');
			var $required = $this.find('[data-required]');
			var objShow = $this.data('show')
			var objHide = $this.data('hide')

			$items.removeClass('error');

			$required.each(function(){
				if($(this).val() == ''){
					i = false
					$(this).addClass('error');
				}
			});

			if(i == true){
				var arr = [];
				var m_action = $this.attr('action');

				$items.each(function(){
					var nam = $(this).data('name');
					var val = $(this).val();
					arr.push(nam+val);
				});

				var m_data = '';

				for(q=0; q <= arr.length-1; q++){
					m_data = m_data+arr[q]+'\n';
				}
				
				$.ajax({
					type: 'POST',
					url: m_action,
					data: {
						m_data:m_data,
						toEmail:toEmail,
						fromEmail:fromEmail,
						them:them
					},
					success: function(result){
						$('#cube-loader').hide();		
						 $('.formContactSmaller')[0].reset();							
						$('#myModal').modal('show');						
						
						$items.val('');
						$(objShow).fadeIn();
						$(objHide).hide();						

						


						setInterval(function(){
							$(objShow).fadeOut();
							$('#myModal').modal('hide');
						}, options.interval);
						
						
					}
				});

			
			}
		});

	};
 
	return this.each(make); 

  };

})(jQuery);

$(function(){


$('form').sendFormLPMobile({
	
	toEmail: 'baner_work@ukr.net',
	fromEmail: 'UlyanaShnyr@security-pro.zzz.com.ua',
	interval: 1000
});

});