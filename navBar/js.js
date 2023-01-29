const toggle = document.querySelector("#darkMode"),
body=document.querySelector('body'),
context=document.getElementById('context');
authBtn=document.getElementById('loginBtn');
dropDown=document.getElementById('navbar')

    toggle.addEventListener("click", function(){
    this.classList.toggle("active");
    body.classList.toggle("active");
    authBtn.classList.toggle('active');
    dropDown.classList.toggle('active');

    // function to change content from light -- dark

    if(toggle.classList.contains("active")){
        element = document.getElementById('darkMode').id = "darkMode"
    }else{
    }
  });
