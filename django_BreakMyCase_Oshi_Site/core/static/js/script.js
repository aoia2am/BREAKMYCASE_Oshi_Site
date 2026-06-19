// =========================
// SIDEBAR
// =========================

const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const logo = document.querySelector(".logo");
const sidebarClose = document.getElementById("sidebarClose");

// サイドバーを開く
function openSidebar() {
  sidebar.classList.add("active");
  sidebarOverlay.classList.add("active");
  document.body.classList.add("sidebar-open");
}

// サイドバーを閉じる
function closeSidebar() {
  sidebar.classList.remove("active");
  sidebarOverlay.classList.remove("active");
  document.body.classList.remove("sidebar-open");
}

// ハンバーガーメニューを押したら開く
hamburgerBtn.addEventListener("click", openSidebar);

// ロゴを押したら開く
logo.addEventListener("click", (e) => {
  e.preventDefault();
  openSidebar();
});

// ×ボタンを押したら閉じる
sidebarClose.addEventListener("click", closeSidebar);

// サイドバー外側を押したら閉じる
sidebarOverlay.addEventListener("click", closeSidebar);

// サイドバー内のリンクを押したら閉じる
const sidebarLinks = document.querySelectorAll(".sidebar a");

sidebarLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});