 
 
 function getUserData() {
            var loadModel=document.getElementById('loadModel');
              var responseModel=document.getElementById('responseModel');
               window.onclick = function(event) {
                  if (event.target == responseModel) {
                      responseModel.style.display = "none";
                     
                  }
              }
              loadModel.style.display="block";
            FB.api('/me',"GET",{"fields":"name,email"}, function(response) {
                //alert(response);
                if(response&& !response.error){
                    //loadQuestion(response.name,response.email,response.id);
                    localStorage.xunbao_id=response.id
                    localStorage.xunbao_name = response.name
                    localStorage.xunbao_email = response.email
                    //console.log(JSON.stringify(response));
                    FB.api("/"+response.id+"/picture?type=large",function (response) {
                        if (response && !response.error) {
                            /* handle the result */
                            //console.log(JSON.stringify(response));
                            //alert(JSON.stringify(response));
                            localStorage.xunbao_profilepic = response.data.url;

                        }
                        loadQuestion();
                    });
                //loadQuestion()
                }else{
                    loadModel.style.display="none";
                    $('#response').html("Some Error has occured");
                    responseModel.style.display="block";
                }
                

                
            });
         $('#close-span').click(function(){
              responseModel.style.display="none";
          });
        }
         function loadQuestion(){
               loadModel.style.display="none";
               window.location.href="questions.html"
          }
        function logUserOut(){
            FB.logout(function(response) {
                //console.log('logged out');
            });
        }

 //load the JavaScript SDK
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.com/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
window.fbAsyncInit = function() {
    //SDK loaded, initialize it
    FB.init({
        appId      : '1572211359712500',
        xfbml      : true,
        version    : 'v2.8'
    });
    
    document.getElementById("loginBtn").onclick=function() {
    //do the login
    FB.login(function(response) {
       //console.log('login status'+JSON.stringify(response));

        if (response.authResponse) {
            //user just authorized your app
          //



           // document.getElementById('loginBtn').style.display = 'none';
            getUserData();
        }
    }, {scope: 'email,public_profile,publish_actions', return_scopes: true});
 
};

};       