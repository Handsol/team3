const openButton = document.querySelectorAll(".character");
const container = document.querySelector("#modalContainer");
const closeButton = document.querySelector(".closeBtn");
const modalContent = document.getElementById("modalContent");
const blogLinks = document.getElementById("blogLink");
const velogLinks = document.getElementById("velogLink");
const profileImg = document.getElementById("profileImg");

// const characters = [];

/*자바스크립트 if문을 활용해 특정 캐릭터 버튼을 누르면 특정
캐릭터의 div class="profileInfo"안의 내용을 출력하는 function
만들기?*/

// openButton.addEventListener('hover', () => {
//     .character
// })
const infos = [
  {
    name: "김지윤",
    mbti: "ESTP",
    hobby: "게임",
    spec: "스몰톡",
    like: "개구리",
    color: "#FFF1CE 옅은 노랑색",
    Img: "../public/profileJiyoon.png",
    velog: "https://velog.io/@jiyunk/posts",
    github: "https://github.com/jiyxxn",
  },
  {
    name: "이다은",
    mbti: "INFP",
    hobby: "게임-Stardew Valley",
    spec: "멍 때리기",
    like: "고양이",
    color: "#64B5F6-하늘색과 파랑색의 중간 톤",
    Img: "../public/profileDaeun.jpg",
    velog: "https://llddang-blog.tistory.com/",
    github: "https://github.com/llddang",
  },
  {
    name: "이수민",
    mbti: "ENFP",
    hobby: "만화 보기",
    spec: "밤새기",
    like: "병아리",
    color: "노란색",
    Img: "../public/profileSumin.jpg",
    velog: "https://velog.io/@suminlee0409/series",
    github: "https://github.com/Sumin-Lee12/username.github.io",
  },
  {
    name: "이한솔",
    mbti: "ISTP",
    hobby: "잠자기",
    spec: "잠자기",
    like: "해파리",
    color: "검정색",
    Img: "../public/profileHansol.jpg",
    velog: "https://sol09-29.tistory.com/",
    github: "https://github.com/Handsol",
  },
];

openButton.forEach(function (button, i) {
  button.addEventListener("click", function () {
    container.classList.remove("displaynone");
    closeButton.classList.remove("displaynone");

    modalContent.innerHTML = `안녕하세요! 저는 <span class="bigSize" id="highlight">${infos[i].name}</span>입니다.<br />
        저의 MBTI는 <span class="bigSize">${infos[i].mbti}</span> 입니다.<br />
        저의 취미는 <span class="bigSize">${infos[i].hobby}</span>이고, 특기는 <span class="bigSize">${infos[i].spec}</span> 입니다.<br />
        <span class="bigSize">${infos[i].like}</span>을(를) 좋아하고, 좋아하는 색깔은 <span class="bigSize">${infos[i].color}</span>입니다.`;

    blogLink.href = infos[i].github || "#";
    velogLinks.href = infos[i].velog || "#";
    profileImg.src = infos[i].Img || "#";
  });
});

closeButton.addEventListener("click", function () {
  closeButton.classList.add("displaynone");
  container.classList.add("displaynone");
});
