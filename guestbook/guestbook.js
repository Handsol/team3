// guestbook.js
import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./../config/firebaseConfig.js";

// guestbook 데이터를 실시간으로 불러오는 함수
export function loadGuestbookPosts() {
  // Firestore에서 데이터를 실시간으로 불러오기
  const guestbookQuery = query(
    collection(db, "guestbooks"),
    orderBy("createdAt", "desc")
  );

  // 데이터를 실시간으로 불러오고 화면에 표시
  onSnapshot(guestbookQuery, (snapshot) => {
    $(".guestbookContent").empty();

    snapshot.forEach((doc) => {
      const contText = doc.data().contText;
      const createdAt = doc.data().createdAt?.toDate(); // Firestore Timestamp를 JavaScript Date로 변환

      const postElement = document.createElement("guestbook-post");
      postElement.setAttribute("id", doc.id);
      postElement.setAttribute("class", "post");
      postElement.setAttribute("cont-text", contText);
      postElement.setAttribute("created-at", createdAt);

      document.querySelector(".guestbookContent").appendChild(postElement);
    });

    // 업데이트된 데이터 갯수 확인
    updateContentCount();
  });
}

// ** 방명록 글 개수 카운트하는 함수
export function updateContentCount() {
  let contentCount = document.querySelectorAll(
    ".guestbookContent .post"
  ).length;
  const defaultText = document.querySelector(".defaultText"); // 작성된 글이 없습니다.
  let countForPosts = document.querySelector(".countForPosts");

  // ** '작성된 글이 없습니다' 텍스트 노출 여부 **
  contentCount > 0
    ? defaultText.classList.add("displaynone")
    : defaultText.classList.remove("displaynone");

  // ** 방명록 글 개수 카운트 **
  countForPosts.innerText = contentCount;
}

window.onload = function () {
  updateContentCount();
};
