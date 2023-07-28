function toggleMode() {
  const img = document.querySelector("#profile img")
  const html = document.documentElement
    html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Imagem de perfil clara")
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Imagem de perfil escura")
  }
}



