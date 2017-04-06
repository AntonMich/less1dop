$(document).ready(function () {
	$(".textdiv").mouseenter(function (){
    	$('#textid').css('font-weight', 'bold');
    	i=1
    })
    $(".textdiv").mouseleave(function (){
    	$('#textid').css('font-weight', 'normal');
    	if (i=1){
    		var textin=document.getElementById('textid');
        	var text=textin.value;
        	var check=document.getElementById('checkid').checked;
        	 if(check) { 
        		 $.ajax({
        	            type: "post",
        	            url: "text", // this is my servlet
        	            data: { 
        	                'input': text,
        	                'check': true
        	              },
        	              success: function(msg){      
        	                    // alert(msg);
        	                    textin.value=msg;
        	              }
        	              });
        		 }else {
            	 $.ajax({
     	            type: "post",
     	            url: "text", // this is my servlet
     	            data: { 
     	                'input': text,
     	                'check': false
     	              },
     	             success: function(msg){      
                         // alert(msg);
                         textin.value=msg;
     		 }
                
                });
        		 }
    	}
    	i=0;
    })
	});