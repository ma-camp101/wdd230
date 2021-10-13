function switchMenu() {
    document.getElementsByClassName("button")[0].classList.toggle("switch");
}

document.getElementsByClassName("button").addEventListener("click", function() {
  if (this.classList.contains("switch")) {this.classList.remove("switch");} 
  else this.classList.add("switch");});