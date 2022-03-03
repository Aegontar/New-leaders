function changeNavHeight() {
    document.querySelector('ul.dropdown-content').classList.toggle("on");
    };
    
    
    window.onscroll = function changeNavBarColor() { 
    
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector(".desktop-nav").style.backgroundColor  = "rgba(0,0,0, .7)";
          } else {
            document.querySelector(".desktop-nav").style.backgroundColor  = "transparent";
          }
    }
    
    
    
     
      let accordionBtn = document.querySelectorAll('.accordion-btn');
      let singleAccordionBtn = document.querySelector('.accordion-btn');
    
      for (let i = 0; i < accordionBtn.length; i++) {
        accordionBtn[i].addEventListener('click', function(){      
          this.classList.toggle('isOpen');
          let accordionContent = this.nextElementSibling;
          if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
          } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
          }
        });
      }
      
    