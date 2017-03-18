$( document ).ready(function(){
	if(localStorage.xunbao_id){

  $('#ansForm').submit(function(e){

        e.preventDefault();
        var loadModel=document.getElementById('loadModel');
        var responseModel=document.getElementById('responseModel');
         window.onclick = function(event) {
            if (event.target == responseModel) {
                responseModel.style.display = "none";
                window.location.href="questions.html"
               
            }
        }
        loadModel.style.display="block";
      
        var userId=localStorage.xunbao_id;
        var ans=$('#answer').val().trim();
        var name=localStorage.xunbao_name;
        if(ans==''){
          $('#answer').addClass('warning');
        }
        else{
                //alert("yes"+ ans);
                $.ajax({
                      url: "http://xunbao1.herokuapp.com/api/checking/",
                  type:'POST',
                  data:{name:localStorage.xunbao_name,fb_id:localStorage.xunbao_id,answer:ans},
                  
                success: function(result){
                    loadModel.style.display="none";
                    if(result.message=="success"){
                      $('#response').html('<img width="100%" height="100%" alt="" src="https://media.makeameme.org/created/you-my-friend-ue34kt.jpg">')
                    }
                    else{
                     $('#response').html('<img width="100%" height="100%" alt="" src="https://www.mememaker.net/static/images/memes/4374652.jpg">')
                    }
                    responseModel.style.display="block";
                },
              error:function(){
                  loadModel.style.display="none";
                  $('#response').html("Some Error has occured");
                  responseModel.style.display="block";
                  window.location.href="questions.html"
              }
              });
        }
        
      $('#close-span').click(function(){
      responseModel.style.display="none";
      window.location.href="questions.html"
  });
      });

}
  else{
  //alert("user doesnot exist")
  window.location.href="index.html"
}
	
});