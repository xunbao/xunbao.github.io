$(function(){

    function fbLogoutUser() {
        localStorage.clear();
        document.location.href="index.html";
        
    }
    $('#logout').click(function(e){
        e.preventDefault();
        fbLogoutUser()
        //location.href="index.html";
    }); 


}) ;     