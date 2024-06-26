const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

header.innerHTML = `<nav class="header__container__navs">
        <ul>
            <li><a href="./app.html">Inicio</a></li>
            <li><a href="./calculo.html">Cálculo</a></li>
            <li><a href="./videos.html">Videos</a></li>
            <li><a href="./ferramentas.html">Ferramentas didáticas</a></li>
            <li><a href="./sobre.html">Sobre</a></li>
        </ul>
        </nav>`;

footer.innerHTML = `<span>©2024 por Levi Pereira da Silva e Leonardo Lucena de Santiago.</span>
        <ul class="footer__container__logos">
            <li class="footer__container__logos__logo">
              <a href="http://www.fateccarapicuiba.edu.br/" target="_blank"
                ><img src="logoFatec.png" alt="Fatec de Carapicuíba"
              /></a>
            </li>
            <li class="footer__container__logos__logo">
              <a
                href="http://www.fateccarapicuiba.edu.br/analise-e-desenvolvimento-de-sistemas/"
                target="_blank"
                ><img
                  src="logoADS.png"
                  alt="Curso de Analise e Desenvolvimentos da Fatec Carapicuíba."
              /></a>
            </li>
            <li class="footer__container__logos__logo">
              <a href="https://www.cps.sp.gov.br/ " target="_blank"
                ><img src="logoCPS.png" alt="Centro Paula Souza."
              /></a>
            </li>
          </ul>`;
