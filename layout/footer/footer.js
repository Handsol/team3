class CustomFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <link rel="stylesheet" href="layout/footer/footer.css" />
        <footer>
            <div class="footerTop">
                <img src="./public/logo.png" class="footerLogo">
                <div class="link">
                    <a href="https://github.com/Handsol/team3.git"><img src="../../public/Vector.png"></a>
                    <a href="https://sugar-lamprey-c14.notion.site/03-3-165d2bdba92980cc9099e3a39d0d799f?pvs=4"><img src="../../public/notion-icon 1.png"></a>
                </div>
            </div>
            <div class="footerBottom">
                <ul>
                    <li>멤버: 김승민 / 김지윤 / 이다은 / 이수민 / 이한솔</li>
                    <li>작업기간: 2024. 12. 23 ~ 2024. 12. 26</li>
                </ul>
            </div>
        </footer>
      `;
  }
}
customElements.define("custom-footer", CustomFooter);
