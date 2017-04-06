$(document).ready(function() {
    $('#myid1').click(function ()
    {
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
        	 
       });
    });