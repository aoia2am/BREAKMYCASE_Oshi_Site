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
// =========================
// SCHEDULE DELETE
// =========================

const scheduleDeleteButton = document.getElementById(
  "scheduleDeleteButton"
);

const scheduleCancelButton = document.getElementById(
  "scheduleCancelButton"
);

const scheduleList = document.querySelector(".schedule-list");

const scheduleDeleteModal = document.getElementById(
  "scheduleDeleteModal"
);

const scheduleDeleteModalOverlay = document.getElementById(
  "scheduleDeleteModalOverlay"
);

const scheduleDeleteMessage = document.getElementById(
  "scheduleDeleteMessage"
);

const deleteConfirmYes = document.getElementById(
  "deleteConfirmYes"
);

const deleteConfirmNo = document.getElementById(
  "deleteConfirmNo"
);

let targetDeleteItem = null;

// Deleteボタンを押したら削除モードにする
if (
  scheduleDeleteButton &&
  scheduleCancelButton &&
  scheduleUpdateButton
) {
  scheduleDeleteButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Updateパネルが開いていたら閉じる
    if (scheduleUpdatePanel) {
      scheduleUpdatePanel.classList.remove("active");
    }

    if (schedulePanelOverlay) {
      schedulePanelOverlay.classList.remove("active");
    }

    document.body.classList.remove("update-panel-open");

    // 一覧の×ボタンを表示
    document.body.classList.add("delete-mode");

    // UpdateとDeleteを非表示
    scheduleUpdateButton.hidden = true;
    scheduleDeleteButton.hidden = true;

    // Cancelを表示
    scheduleCancelButton.hidden = false;
  });
}


// Cancelボタンを押したら削除モードを解除する
if (
  scheduleCancelButton &&
  scheduleDeleteButton &&
  scheduleUpdateButton
) {
  scheduleCancelButton.addEventListener("click", () => {
    // 一覧の×ボタンを非表示
    document.body.classList.remove("delete-mode");

    // Cancelを非表示
    scheduleCancelButton.hidden = true;

    // UpdateとDeleteを再表示
    scheduleUpdateButton.hidden = false;
    scheduleDeleteButton.hidden = false;

    // 削除確認モーダルも閉じる
    closeDeleteModal();
  });
}


// 一覧の×ボタンを押したとき
if (scheduleList) {
  scheduleList.addEventListener("click", (e) => {
    const deleteButton = e.target.closest(
      ".schedule-delete-item"
    );

    if (!deleteButton) {
      return;
    }

    targetDeleteItem = deleteButton.closest("li");

    const date = targetDeleteItem
      .querySelector(".schedule-date")
      ?.textContent
      .trim();

    const title = targetDeleteItem
      .querySelector(".schedule-title")
      ?.textContent
      .trim();

    if (scheduleDeleteMessage) {
      scheduleDeleteMessage.innerHTML =
        `「${date}　${title}」を<br>削除しますか？`;
    }

    scheduleDeleteModalOverlay?.classList.add("active");
    scheduleDeleteModal?.classList.add("active");
  });
}


// 削除確認モーダルを閉じる
function closeDeleteModal() {
  scheduleDeleteModalOverlay?.classList.remove("active");
  scheduleDeleteModal?.classList.remove("active");

  targetDeleteItem = null;
}


// 「いいえ」を押したとき
if (deleteConfirmNo) {
  deleteConfirmNo.addEventListener(
    "click",
    closeDeleteModal
  );
}


// モーダルの外側を押したとき
if (scheduleDeleteModalOverlay) {
  scheduleDeleteModalOverlay.addEventListener(
    "click",
    closeDeleteModal
  );
}


// 「はい」を押したとき
if (deleteConfirmYes) {
  deleteConfirmYes.addEventListener("click", () => {
    if (targetDeleteItem) {
      targetDeleteItem.remove();
    }

    closeDeleteModal();
  });
}

// =========================
// MEMO PAGE
// =========================

const memoListArea = document.getElementById("memoListArea");
const memoUpdateArea = document.getElementById("memoUpdateArea");

const memoUpdateButton = document.getElementById(
  "memoUpdateButton"
);

const memoDeleteButton = document.getElementById(
  "memoDeleteButton"
);

const memoCancelButton = document.getElementById(
  "memoCancelButton"
);


// =========================
// MEMO UPDATE MODE
// =========================

if (
  memoUpdateButton &&
  memoDeleteButton &&
  memoCancelButton &&
  memoListArea &&
  memoUpdateArea
) {
  memoUpdateButton.addEventListener("click", () => {

    // 一覧を隠す
    memoListArea.hidden = true;

    // 入力フォームを表示
    memoUpdateArea.hidden = false;

    // Update / Deleteを隠す
    memoUpdateButton.hidden = true;
    memoDeleteButton.hidden = true;

    // Cancelを表示
    memoCancelButton.hidden = false;

    // 削除モードは解除
    document.body.classList.remove("memo-delete-mode");
  });
}


// =========================
// MEMO DELETE MODE
// =========================

if (
  memoDeleteButton &&
  memoUpdateButton &&
  memoCancelButton
) {
  memoDeleteButton.addEventListener("click", () => {

    // 削除用の×を表示
    document.body.classList.add("memo-delete-mode");

    // Update / Deleteを隠す
    memoUpdateButton.hidden = true;
    memoDeleteButton.hidden = true;

    // Cancelを表示
    memoCancelButton.hidden = false;
  });
}


// =========================
// MEMO CANCEL
// =========================

if (
  memoCancelButton &&
  memoUpdateButton &&
  memoDeleteButton &&
  memoListArea &&
  memoUpdateArea
) {
  memoCancelButton.addEventListener("click", () => {

    // Updateフォームを非表示
    memoUpdateArea.hidden = true;

    // 一覧を表示
    memoListArea.hidden = false;

    // 削除モード解除
    document.body.classList.remove("memo-delete-mode");

    // Cancelを非表示
    memoCancelButton.hidden = true;

    // 通常ボタンを再表示
    memoUpdateButton.hidden = false;
    memoDeleteButton.hidden = false;
  });
}


// =========================
// MEMO 仮削除
// =========================

const memoDeleteItems = document.querySelectorAll(
  ".memo-delete-item"
);

memoDeleteItems.forEach((deleteButton) => {
  deleteButton.addEventListener("click", () => {
    const memoCard = deleteButton.closest(".memo-card");

    if (memoCard) {
      memoCard.remove();
    }
  });
});