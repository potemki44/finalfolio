var clikonMenu = document.querySelectorAll(".ancors")
const checkBox = document.querySelector(".Checkboxi")
 clikonMenu.forEach(ancor => {
    ancor.addEventListener("click",()=>{
  checkBox.checked = false
    
    })
})
