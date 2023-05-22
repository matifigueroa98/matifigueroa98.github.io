function hover() {
  const hoverOver = document.getElementsByClassName('hoverOverMe');

  for (let i = 0; i < hoverOver.length; i++) {
    /* This handler will be executed only once when the cursor
    moves over the unordered list */
    hoverOver[i].addEventListener('mouseover', function () {
      hoverOver[i].style.color = '#333';
    });
    // reset the color after a short delay
    hoverOver[i].addEventListener('mouseout', function () {
      hoverOver[i].style.color = 'darkgoldenrod';
    });
  }
}

function emailMe() {
  let emailLink = document.getElementById('email-link');
  let emailContent = document.getElementById('email-content');

  emailLink.addEventListener('click', function (event) {
    event.preventDefault(); 
    let emailAddress = emailLink.textContent;

    // Crea el enlace mailto con la dirección de correo electrónico
    let mailtoLink = 'mailto:' + emailAddress + '?subject=I want to contact you&body=Hi there';

    // Abre el cliente de correo electrónico con el enlace mailto
    window.location.href = mailtoLink;
  });
}


