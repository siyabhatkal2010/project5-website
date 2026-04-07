document.addEventListener("DOMContentLoaded", () => {

  function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    if (!timeElement) return; 
    timeElement.textContent = now.toLocaleTimeString();
  }

  updateTime();
  setInterval(updateTime, 1000);

  const style1 = document.getElementById("style1");
  const style2 = document.getElementById("style2");
  const toggleBtn = document.getElementById("toggle-theme");

  if (!style1 || !style2 || !toggleBtn) return;

 
  const savedStyle = localStorage.getItem("stylesheet");

  if (savedStyle === "style1") {

    style1.disabled = false;
    style2.disabled = true;
  } else if (savedStyle === "style2") {

    style1.disabled = true;
    style2.disabled = false;
  } else {
 
    style1.disabled = false;
    style2.disabled = true;
    localStorage.setItem("stylesheet", "style1");
  }


  toggleBtn.addEventListener("click", () => {
    if (style1.disabled) {
  
      style1.disabled = false;
      style2.disabled = true;
      localStorage.setItem("stylesheet", "style1");
    } else {
   
      style1.disabled = true;
      style2.disabled = false;
      localStorage.setItem("stylesheet", "style2");
    }
  });

});
