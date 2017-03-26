$( document ).ready(function(){
 if(localStorage.xunbao_id){
  var loadModel=document.getElementById('loadModel');
  var responseModel=document.getElementById('responseModel');
   window.onclick = function(event) {
      if (event.target == responseModel) {
          responseModel.style.display = "none";
         
      }
  }
  loadModel.style.display="block";

	 $.ajax({
                      url: "http://xunbao.herokuapp.com/api/home/",
                  type:'POST',
                  data:{name:localStorage.xunbao_name,fb_id:localStorage.xunbao_id,email_id:localStorage.xunbao_email},

                success: function(result){
                   //alert(JSON.stringify(result));
                   $('#level').text("level "+result.level);
                   $('#que-div').html(result.description);
                   if (result.level==15) {
                    $('#level').text("Congrats !!")
                    $('#answer').css({"display":"none"});
                    $('#submit-button').css({"display":"none"});
                   };
                   loadModel.style.display="none";
                },
              error:function(){
                  loadModel.style.display="none";
                $('#response').html("Some Error has occured");
                responseModel.style.display="block";
              }
              });

   $('#close-span').click(function(){
      responseModel.style.display="none";
  });
}
else{
  //alert("user doesnot exist")
  window.location.href="index.html"
}
});
