function login(){
  const name = document.getElementById("name").value;

  if(name === ""){
    alert("Enter details");
    return;
  }

  localStorage.setItem("volunteer", name);

  window.location.href = "dashboard.html";
}
