import {
  updateDoc,
  serverTimestamp,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "../config/firebaseConfig.js";

class GuestbookPost extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.afterLogic();
  }

  render() {
    const id = this.getAttribute("id") || "";
    const contText = this.getAttribute("cont-text") || "기본 내용";
    const createdAt = this.getAttribute("created-at");

    const yyyy = new Date(createdAt).getFullYear();
    const mm = String(new Date(createdAt).getMonth() + 1).padStart(2, "0");
    const dd = String(new Date(createdAt).getDate()).padStart(2, "0");
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    this.innerHTML = `
      <li class="post" data-id="${id}">
        <div class="contTop">
          <div class="profile"></div>
          <div class="contTopBox">
            <p class="postInfo">
              <span class="userName">익명의 방문자</span>
              <span class="postDate">${formattedDate}</span>
            </p>
            <div>
              <button type="button" class="btnEdit">수정</button>
              <button type="button" class="btnDelete">삭제</button>
            </div>
          </div>
        </div>
        <div class="contBottom">
          <p class="postText">${contText}</p>
        </div>
      </li>
    `;
  }

  afterLogic() {
    // 데이터 삭제
    $(".btnDelete").click(async function (event) {
      const postId = $(this).closest("li").data("id"); // 삭제하려는 게시물의 ID 가져오기
      if (!postId) {
        console.error("postId is undefined or not set.");
        return; // postId가 없으면 삭제하지 않음
      }
      // 삭제 전에 확인 창 띄우기
      const isConfirmed = confirm("해당 게시글을 삭제하시겠습니까?");
      if (isConfirmed) {
        const docRef = doc(db, "guestbooks", postId); // 해당 문서 참조 가져오기
        try {
          await deleteDoc(docRef); // Firestore에서 해당 문서 삭제
          alert("삭제가 완료되었습니다.");
          window.location.reload();
        } catch (e) {
          console.error("Error deleting document: ", e);
        }
      }
    });

    $(".btnEdit").click(async function () {
      const postId = $(this).closest("li").data("id");
      const postText = $(this).closest("li").find(".postText"); // `.postText`를 `li` 내에서 찾음
      const originalText = postText.text(); // 기존 텍스트 가져오기
      postText.html(`<textarea class="editText">${originalText}</textarea>`); // 텍스트박스로 변경
      // 수정 버튼을 저장 버튼으로 변경
      const editBtn = $(this);
      editBtn.text("저장").removeClass("btnEdit").addClass("btnSave");
      // 저장 버튼 클릭 시 수정 처리
      editBtn.off("click").on("click", async function () {
        const updatedText = $(this).closest("li").find(".editText").val(); // 수정된 텍스트 가져오기
        try {
          const docRef = doc(db, "guestbooks", postId); // 해당 문서 참조 가져오기
          await updateDoc(docRef, {
            contText: updatedText, // 내용 업데이트
            createdAt: serverTimestamp(), // 수정 시간 갱신
          });
          alert("수정이 완료되었습니다.");
          window.location.reload(); // 페이지 새로고침
        } catch (e) {
          console.error("Error updating document: ", e);
        }
      });
    });
  }
}

// 커스텀 태그 등록
customElements.define("guestbook-post", GuestbookPost);
