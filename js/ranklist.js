$( document ).ready(function(){
  if(localStorage.xunbao_id){
    $('#lilo').html('<h5 id="logout">Log out</h5>');
  }
  else{
    $('#lilo').html('<h5 id="loginBtn">Login</h5>');
  }
  var loadModel=document.getElementById('loadModel');
  var responseModel=document.getElementById('responseModel');
   window.onclick = function(event) {
      if (event.target == responseModel) {
          responseModel.style.display = "none";
         
      }
  }
  loadModel.style.display="block";
	 $.ajax({
                      url: "http://xunbao.herokuapp.com/api/ranklist/",
                  type:'GET',

                success: function(result){
                   var i=1;
                   var html='<table style="width: 100%;border: 2px solid rgba(255, 255, 255, 0.50)"><tbody><tr><td>Rank</td><td>Name</td><td>Level</td></tr>'
                   $.each(result, function(key, value) {
                   html +='<tr> <td>'+i+'</td><td>'+value.name +'</td><td>' +value.level +'</td></tr>'
                   i+=1;
                 });
                   html+='</tbody></table>'
                   $('#ranklist').html(html);
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
});