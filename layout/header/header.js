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
                <img src="../../public/logo.png" class="headerLogo">
                <audio controls loop src="../../public/짱구.mp3">
            </h1>
        </div>
        <div class="headerBottom">
            <ul class="nav">
                <li><a href="../../index.html">내배캠 방범대</a></li>
                <li><a href="../../member/member.html">방범대원 소개</a></li>
                <li><a href="../../guestbook/guestbook.html">방범 일지</a></li>
            </ul>
        </div>
      </header>
    `;
  }
  afterLogic() {
    //이한솔
    const currentPage = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll(".nav li a");

    menuItems.forEach((item) => {
      const menuPage = item.getAttribute("href").split("/").pop();
      console.log(menuPage);

      if (menuPage === currentPage) {
        item.classList.add("underline");
      } else {
        item.classList.remove("underline");
      }
    });
  }
}
customElements.define("custom-header", CustomHeader);
