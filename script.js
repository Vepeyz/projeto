function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#penis img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  }
}
