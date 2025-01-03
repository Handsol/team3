class CustomHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
    this.afterLogic();
  }
  render() {
    this.innerHTML = `
      <link rel="stylesheet" href="layout/header/header.css" />
      <header class="header">
        <div class="headerTop">
            <h1>
                <a href="./index.html"><img src="./public/logo.png" class="headerLogo"></a>
            </h1>
        </div>
        <div class="headerBottom">
            <ul class="nav">
                <li><a href="./index.html">내배캠 방범대</a></li>
                <li><a href="./member.html">방범대원 소개</a></li>
                <li><a href="./guestbook.html">방범 일지</a></li>
            </ul>
            <audio class="audio" controls loop src="./public/bgm.mp3">
        </div>
      </header>
    `;
  }
  afterLogic() {
    const currentPage = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll(".nav li a");

    menuItems.forEach((item) => {
      const menuPage = item.getAttribute("href").split("/").pop();

      if (menuPage === currentPage) {
        item.classList.add("underline");
      } else {
        item.classList.remove("underline");
      }
    });
  }
}
customElements.define("custom-header", CustomHeader);
