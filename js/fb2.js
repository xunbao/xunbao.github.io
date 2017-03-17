
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
        version    : 'v2.8',
        cookie  : true,
    });

};   
function fbLogoutUser() {

        FB.getLoginStatus(function(response) {
            //console.log(response);
            FB.logout(function(response) {
                //console.log("User is loged off");
                //console.log(response);   
                localStorage.clear();
                document.location.href="index.html";
            }); 
    });
    
}    
$(function(){

    $('#logout').click(function(e){
        e.preventDefault();
        fbLogoutUser()
        //location.href="index.html";
    });
}) ;     