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

// ハンバーガーメニュー
if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", openSidebar);
}

// ロゴクリック
if (logo) {
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    openSidebar();
  });
}

// ×ボタン
if (sidebarClose) {
  sidebarClose.addEventListener("click", closeSidebar);
}

// オーバーレイ
if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeSidebar);
}

// サイドバー内リンク
const sidebarLinks = document.querySelectorAll(".sidebar a");

sidebarLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});


// =========================
// HOME LOADING TEXT
// =========================

const homeLoading = document.getElementById("homeLoading");

if (homeLoading) {

  setTimeout(() => {
    homeLoading.textContent =
      "my database...connected_";
  }, 2500);

  setTimeout(() => {
    homeLoading.textContent =
      "my database...ready_";
  }, 4500);

}

console.log("script.js loaded");


console.log(homeLoading);

if (homeLoading) {
  setTimeout(() => {
    console.log("connectedに変更");
    homeLoading.textContent = "my database...connected_";
  }, 2500);

  setTimeout(() => {
    console.log("readyに変更");
    homeLoading.textContent = "my database...ready_";
  }, 4500);
}
// =========================
// SCHEDULE UPDATE PANEL
// =========================

const scheduleUpdateButton = document.querySelector(
  ".schedule-action-button.update"
);

const scheduleUpdatePanel = document.getElementById(
  "scheduleUpdatePanel"
);

const schedulePanelOverlay = document.getElementById(
  "schedulePanelOverlay"
);

if (
  scheduleUpdateButton &&
  scheduleUpdatePanel &&
  schedulePanelOverlay
) {
  scheduleUpdateButton.addEventListener("click", (e) => {
    e.preventDefault();

    scheduleUpdatePanel.classList.add("active");
    schedulePanelOverlay.classList.add("active");

    document.body.classList.add("update-panel-open");
  });

  schedulePanelOverlay.addEventListener("click", () => {
    scheduleUpdatePanel.classList.remove("active");
    schedulePanelOverlay.classList.remove("active");

    document.body.classList.remove("update-panel-open");
  });
}

// =========================
// SCHEDULE TIME SELECT
// =========================

const timeTypeInputs = document.querySelectorAll(
  'input[name="time_type"]'
);

const scheduleTimeRow = document.getElementById("scheduleTimeRow");
const scheduleCategory = document.querySelector(".schedule-category");

if (timeTypeInputs.length > 0 && scheduleTimeRow) {
  timeTypeInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.value === "time" && input.checked) {
        scheduleTimeRow.classList.add("active");

        if (scheduleCategory) {
          scheduleCategory.classList.add("compact");
        }
      }

      if (input.value === "all_day" && input.checked) {
        scheduleTimeRow.classList.remove("active");

        if (scheduleCategory) {
          scheduleCategory.classList.remove("compact");
        }
      }
    });
  });
}

// =========================
// SIDEBAR UPDATE
// =========================

const sidebarUpdateButton = document.getElementById(
  "sidebarUpdateButton"
);

if (
  sidebarUpdateButton &&
  scheduleUpdatePanel &&
  schedulePanelOverlay
) {

  sidebarUpdateButton.addEventListener("click", (e) => {

    e.preventDefault();

    // サイドバーを閉じる
    sidebar.classList.remove("active");
    overlay.classList.remove("active");

    // 編集フォームを開く
    scheduleUpdatePanel.classList.add("active");
    schedulePanelOverlay.classList.add("active");

    document.body.classList.add("update-panel-open");

  });

}

// =========================
// OPEN SCHEDULE PANEL BY URL
// =========================

const urlParams = new URLSearchParams(window.location.search);
const panelParam = urlParams.get("panel");

if (
  panelParam === "update" &&
  scheduleUpdatePanel &&
  schedulePanelOverlay
) {
  scheduleUpdatePanel.classList.add("active");
  schedulePanelOverlay.classList.add("active");
  document.body.classList.add("update-panel-open");
}