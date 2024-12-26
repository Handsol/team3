window.onload = function () {
  updateContentCount();
};

function updateContentCount() {
  // 방명록 글 개수 카운트하는 함수
  let contentCount = document.querySelectorAll(".guestbookContent li").length;
  const defaultText = document.querySelector(".defaultText"); // 작성된 글이 없습니다.
  let countForPosts = document.querySelector(".countForPosts");

  // ** '작성된 글이 없습니다' 텍스트 노출 여부 **
  contentCount > 0
    ? defaultText.classList.add("displaynone")
    : defaultText.classList.remove("displaynone");

  // ** 방명록 글 개수 카운트 **
  countForPosts.innerText = contentCount;
}
