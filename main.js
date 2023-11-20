const btToggleMenu = document.querySelector(".menu-hamburger")

btToggleMenu.addEventListener("click", () => {
  document.body.classList.toggle("open-nav")
})

 const passeDialog = document.querySelector(".passe")
 const estrela = document.querySelector(".estrela")
 const salveDialog = document.querySelector(".salve")
 const avisoDialog = document.querySelector(".aviso")

 estrela.addEventListener('click', () => passeDialog.showModal())
 salve_mundo.addEventListener('click', () => salveDialog.showModal())
 botao_jogar.addEventListener('click', () => avisoDialog.showModal())

  document.querySelectorAll("dialog .fechar").forEach(
    bt => bt.addEventListener("click", () => passeDialog.close()
    )
  )

  document.querySelectorAll("dialog .fechar").forEach(
    bt => bt.addEventListener("click", () => salveDialog.close()
    )
  )

  document.querySelectorAll("dialog .fechar").forEach(
    bt => bt.addEventListener("click", () => avisoDialog.close()
    )
  ) 

  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var topBtn = document.getElementById("botaotopo");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
  } else {
      topBtn.style.display = "none";
  }
}