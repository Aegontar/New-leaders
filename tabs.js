/* get all the tabs */

const tabs = document.querySelectorAll(".tab")
const tabsArray = Object.values(tabs);

/* function to change between tabs */

const changeTab = (e) => {
    const targetTab = e.target
    const classList = targetTab.classList
    const activeTab = classList[2]
    console.log(activeTab) 

    tabs.forEach(tab => {
         tab.classList.remove("active-tab");
    });

 
     targetTab.classList.add("active-tab");     
  
}

/* clicking a tab to show certain texts */

const showPhysicalText = (e) => {
/* make other text invisible first */
const allTextContent =  document.querySelectorAll(".tab-text") 

  allTextContent.forEach(text => {
         text.style.opacity = "0";
    });
      
    document.querySelector(".physical-text").style.opacity = "1";
}

const showTechnicalText = (e) => {
     /* make other text invisible first */
     const allTextContent =  document.querySelectorAll(".tab-text") 
     
       allTextContent.forEach(text => {
              text.style.opacity = "0";
         });
           
         document.querySelector(".technical-text").style.opacity = "1";
     }

     const showTacticalText = (e) => {
          /* make other text invisible first */
          const allTextContent =  document.querySelectorAll(".tab-text") 
          
            allTextContent.forEach(text => {
                   text.style.opacity = "0";
              });
                
              document.querySelector(".tactical-text").style.opacity = "1";
          }


      const showMentalText = (e) => {
               /* make other text invisible first */
               const allTextContent =  document.querySelectorAll(".tab-text") 
               
                 allTextContent.forEach(text => {
                        text.style.opacity = "0";
                   });
                     
                   document.querySelector(".mental-text").style.opacity = "1";
           }
           
       const showaAaptabilityText= (e) => {
               /* make other text invisible first */
               const allTextContent =  document.querySelectorAll(".tab-text") 
               
                 allTextContent.forEach(text => {
                        text.style.opacity = "0";
                   });
                     
                   document.querySelector(".adaptability-text").style.opacity = "1";
           }     
      

/* select specefic tab button */
const physical = document.querySelector(".physical")
const technical = document.querySelector(".technical")
const tactical = document.querySelector(".tactical")
const mental = document.querySelector(".mental")
const adaptability = document.querySelector(".adaptability")



/* add function to specefic tab */
physical.addEventListener("click", showPhysicalText);
technical.addEventListener("click", showTechnicalText);
tactical.addEventListener("click", showTacticalText);
mental.addEventListener("click", showMentalText);
adaptability.addEventListener("click", showaAaptabilityText);

/* runs function on clicking the tabs */
tabsArray.forEach(tab => {
     tab.addEventListener("click", changeTab);
});








 

