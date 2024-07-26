function addingEventListener() {
    const button = document.getElementById("button");
  
    button.addEventListener("click", function() {
      button.value = "I was clicked";
    });
  }
  