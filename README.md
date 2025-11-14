# Legado Automotivo (Versão Bootstrap) 🚗💨

Você pode acessar o site online neste link:
**[projeto-legado-automotivo-bootstrap.vercel.app](https://projeto-legado-automotivo-bootstrap.vercel.app)**
 
Esta é a segunda versão do projeto "Legado Automotivo", totalmente refatorada para utilizar o framework **Bootstrap 5**. Este projeto foi desenvolvido para um trabalho acadêmico com o objetivo de demonstrar o domínio sobre componentes de UI/UX, o sistema de Grid responsivo e a personalização de um framework CSS moderno.

> ➡️ **Procurando a versão original?** A primeira versão deste site, construída do zero com CSS puro (Flexbox, CSS Grid) e JavaScript "vanilla", pode ser encontrada [neste repositório](https://github.com/GabrielSSegatto/Projeto-legado-automotivo).

## 💡 O Conceito: Chassi Bootstrap, Pintura Autoral

O maior desafio deste projeto não foi apenas *usar* o Bootstrap, mas *dominá-lo*. Em vez de criar um site com a aparência genérica do Bootstrap, o objetivo foi usá-lo como um "chassi" de engenharia para:

1.  **O Chassi (Bootstrap):** Utilizar seus componentes robustos e testados (Navbar, Carousel, Grid) para garantir uma base 100% responsiva, economizando tempo de desenvolvimento.
2.  **A Pintura (CSS Personalizado):** Aplicar uma camada de estilos personalizados (`style.css`) para sobrescrever (override) as regras padrão do Bootstrap, implementando a identidade visual única do "Legado Automotivo".

---

### Componentes Bootstrap Utilizados

* **Layout e Grid:** O site é totalmente estruturado com o Grid System do Bootstrap (`.container`, `.row`, `.col-lg-4`, `.col-md-6`, etc.), garantindo responsividade mobile-first.
* **Navbar:** Um menu de navegação completo (`.navbar`), responsivo (`.navbar-toggler`) e com um componente `.dropdown` para os modelos.
* **Carousel (x2):**
    1.  Um carrossel de destaque na página inicial (`#hero-carousel`) para o banner principal.
    2.  Um segundo carrossel para a seção de **Depoimentos** (`#carouselDepoimentos`).
* **Accordion (x3):** O componente `.accordion` foi usado na `index.html` para a seção "A Essência do Legado".
* **Cards:** Componentes `.card` padronizados para exibir os carros de forma coesa nas seções de destaque e na página "Modelos".
* **Formulários:** A página de "Contato" utiliza os componentes de formulário do Bootstrap (`.form-control`, `.form-select`, `.form-check`) para um layout limpo e alinhado.

---

### Personalização e Funcionalidades Extras

* **Identidade Visual (Override de CSS):** O `style.css` utiliza **Variáveis CSS (`:root`)** para definir a paleta de cores do projeto (ex: `--cor-destaque`) e sobrescrever as cores e fontes padrão do Bootstrap.
* **Filtro de Busca em Tempo Real:** A página "Modelos" possui um campo de busca que filtra os cartões de carros em tempo real usando JavaScript.
* **Integração de API (Google Maps):** A página "Contato" possui um `<iframe>` do Google Maps responsivo, usando as classes de utilitário `ratio` do Bootstrap.
* **JavaScript Avançado:**
    * **Controle de Carrossel por Teclado:** O carrossel principal pode ser controlado pelas setas do teclado e pelas teclas A/D.
    * **Intersection Observer:** A funcionalidade de teclado acima só é ativada quando o carrossel está visível na tela, otimizando a performance e melhorando a UX.
    * **Aviso Inicial:** Um aviso (toast) aparece na primeira visita da sessão usando `sessionStorage` para "lembrar" que o usuário já o fechou.

---

## 🛠️ Tecnologias Utilizadas
- HTML5 / CSS3
- Bootstrap 5.3
- JavaScript (ES6+)
- Git e GitHub

---

## 🚀 Como Executar o Projeto

1.  Clone este repositório:
    ```bash
    git clone [LINK-PARA-SEU-NOVO-REPOSITORIO]
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd legado-automotivo-bootstrap
    ```
3.  Abra o arquivo `index.html` em seu navegador.
    *(Recomenda-se o uso da extensão "Live Server" no VS Code para uma melhor experiência).*

---

## 👨‍💻 Autor

**Gabriel Segatto**

* **GitHub:** [@GabrielSSegatto](https://github.com/GabrielSSegatto)
* **Email:** gabriels080404@gmail.com
