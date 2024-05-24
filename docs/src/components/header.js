let isMobileNavActive = false;

function carregarEstilo(arquivo) {
  const link = document.createElement('link');
  link.href = arquivo;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  document.head.appendChild(link);
}

function criarHeader() {
  carregarEstilo('src/components/header.css');
  carregarEstilo('src/styles/mobile.css');

  const headerHTML = `
  <header id="header">
  <img class="logo"
    src="https://raw.githubusercontent.com/gustavo19k/assets-SouKick/main/1o-projeto-web/Evangelion-logo.png"
    alt="Logo Evangelion" />
  <div class="navigation">
    <ul class="navigation__links">
      <li>
        <a href="index.html" class="navigation__link">Home</a>
      </li>
      <li>
        <a href="wallpapers.html" class="navigation__link">Papéis de parede</a>
      </li>
      <li>
        <a href="index.html#app-sub" class="navigation__link">Story</a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=9Vr9PxiuH6w" target="_blank" class="navigation__link">Trailer</a>
      </li>
    </ul>
    <div class="navigation__social">
      <a href="https://github.com/gustavo19k/1o-projeto-web" title="Link do repositório deste projeto">
        <img id="github-logo"
          src="https://raw.githubusercontent.com/gustavo19k/assets-SouKick/main/1o-projeto-web/github.svg"
          alt="GitHub">
      </a>
      <a href="https://instagram.com/gustavo19.dev"
        target="_blank" title="Link do meu perfil Instagram. ">
        <img src="public/images/instagram.svg" alt="Instagram">
      </a>


      <a href="https://www.figma.com/design/zihjoBwL6gKZkchwUgvsbi/Prototipo-Figma?node-id=0-1&t=Lf1mAOkv5mC4atb9-0" target="_blank">
        <img src="public/images/figma.svg" alt="Link do figma" title="Link do projeto no Figma deste site.">
      </a>
    </div>
  </div>
  <button type="button" id="button" class="button__mobile">
    <span></span>
    <span></span>
    <span></span>
  </button>
</header>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  const button = document.getElementById('button');
  const navigation = document.querySelector('.navigation');
  const navLinks = document.querySelectorAll('.navigation__link');
  const carousel1 = document.getElementById('carouselMobile'); // Primeiro carrossel


  function handleClick() {
    console.log("Button clicked");
    button.classList.toggle('active');
    navigation.classList.toggle('active');
    carousel1.classList.toggle('hide');

  }

  button.addEventListener('click', handleClick);
  navLinks.forEach(link => {
    link.addEventListener('click', handleClick);
  });


}

export { criarHeader };
