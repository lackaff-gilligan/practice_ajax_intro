$(document).ready(readyNow);

function readyNow() {
    //DOM is loaded
    console.log('dom is ready');
    // event listeners
    $('#getBigCats').on('click', getBigCats);


}

function getBigCats(){
    console.log('getting big cats from server');
   
 // make a GET request
 $.ajax({
     method: 'GET',
     url: '/bigCats'
 })
 //success
 .done(function(response){
     console.log('successful response: ', response);
     appendBigCats(response);
 })
 //error
 .fail(function(msg, status) {
     console.log('error response: ', msg, status);
 });
    
}

function appendBigCats(cats) {
    $('#bigCats').empty();
    for(var i = 0; i < cats.length; i++) {
        $('#bigCats').append('<p>' + cats[i].species + '</p>');
    }
}