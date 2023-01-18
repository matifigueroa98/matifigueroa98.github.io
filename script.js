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

function scrollToTheTop() {
  const goTopButton = document.getElementById('goTopButton');

  goTopButton.addEventListener('click', function () {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function emailMe() {
  let emailLink = document.getElementById('email-link');
  let emailContent = document.getElementById('email-content');

  emailLink.addEventListener('click', function () {
    /* If the display property is set to "none", it means the div is hidden and it will update the inner HTML 
    with the mailto link and change the display to "block" to make it visible*/
    if (emailContent.style.display === 'none') {
      emailContent.innerHTML =
        "<a href='mailto:matiasnfigueroa98@gmail.com?subject=Hello&body=Hi there'>" +
        'matiasnfigueroa98@gmail.com</a>';
      emailContent.style.display = 'block';
      emailContent.style.color = '#fff';
      emailContent.style.marginBottom = '10px';
    } else {
      emailContent.style.display = 'none';
    }
  });
}

