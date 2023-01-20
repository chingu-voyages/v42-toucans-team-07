const toggle = document.querySelector(".toggle-item"),
      body=document.querySelector('body'),
      context=document.getElementById('context');


      toggle.addEventListener("click", function(){
        this.classList.toggle("active");
        body.classList.toggle("active");

        // function to change content from light -- dark

        if(toggle.classList.contains("active")){
            context.innerHTML="Light Mode";
            context.style.color="#D3D3D3";
        }else{
            context.innerHTML="Dark Mode";
            context.style.color= "#212529";
        }
      });