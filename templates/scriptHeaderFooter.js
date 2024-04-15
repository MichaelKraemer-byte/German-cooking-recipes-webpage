async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = 'Page not found';
    }
  }
}

function toggleMenu() {
  var menu = document.getElementById('myLinks');
  var logo = document.getElementById('bigLogo');
  var button = document.getElementById('bMButton');
  menu.classList.toggle('navMobile');
  logo.classList.toggle('logoMobile');
  button.classList.toggle('showIcon');
}

function fullMenu() {
  document.getElementById('myLinks').innerHTML = ` <a class="a" href="../../indexlanding/index/index.html">Start</a>
  <a class="navHead" href="../../recipes/french-croissants/french-croissants.html">Rezept des
      Tages</a>
  <a class="a" href="../../impressum-datenschutz-contact/contact/contact.html">Kontakt</a>
  <a class="a" href="../../impressum-datenschutz-contact/impressum/indexImpressum.html">Impressum</a>
  <a class="a" href="../../impressum-datenschutz-contact/Datenschutz/indexDatenschutz.html">Datenschutz</a>
  `;
}