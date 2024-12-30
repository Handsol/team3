const characters = document.querySelectorAll(".character");
const container = document.querySelector("#modalContainer");
const closeButton = document.querySelector(".closeBtn");
const modalContent = document.getElementById("modalContent");
const blogLinks = document.querySelector(".blogLink");
const velogLinks = document.querySelector(".velogLink");
const profileImg = document.querySelector(".profileImg");

const memberinfos = [
  {
    name: "김지윤",
    mbti: "ESTP",
    hobby: "게임",
    spec: "스몰톡",
    like: "개구리",
    color: "#FFF1CE 옅은 노란색",
    Img: "./public/profile/profileJiyoon.png",
    velog: "https://velog.io/@jiyunk/posts",
    github: "https://github.com/jiyxxn",
  },
  {
    name: "이다은",
    mbti: "INFP",
    hobby: "게임-Stardew Valley",
    spec: "멍 때리기",
    like: "고양이",
    color: "#64B5F6-하늘색과 파란색의 중간 톤",
    Img: "./public/profile/profileDaeun.jpg",
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
    Img: "./public/profile/profileSumin.jpg",
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
    Img: "./public/profile/profileHansol.jpg",
    velog: "https://sol09-29.tistory.com/",
    github: "https://github.com/Handsol",
  },
];

characters.forEach(function (button, i) {
  button.addEventListener("click", function () {
    container.classList.remove("displaynone");

    modalContent.innerHTML = `안녕하세요! 저는 <span class="bigSize highlight">${memberinfos[i].name}</span>입니다.<br />
        저의 MBTI는 <span class="bigSize">${memberinfos[i].mbti}</span> 입니다.<br />
        저의 취미는 <span class="bigSize">${memberinfos[i].hobby}</span>이고, 특기는 <span class="bigSize">${memberinfos[i].spec}</span> 입니다.<br />
        <span class="bigSize">${memberinfos[i].like}</span>를 좋아하고, 좋아하는 색깔은 <span class="bigSize">${memberinfos[i].color}</span>입니다.`;

    blogLinks.href = memberinfos[i].github || "#";
    velogLinks.href = memberinfos[i].velog || "#";
    profileImg.src = memberinfos[i].Img || "#";
  });
});

closeButton.addEventListener("click", function () {
  container.classList.add("displaynone");
});
