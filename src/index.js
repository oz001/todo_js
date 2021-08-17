import "./styles.css";

// 完了ボタン押下処理
let onClickComplete = (e) => {
  let taskName = e.target.previousSibling.innerText;
  let li = createLi();
  li.append(createDiv(taskName));
  li.append(createReturnBtn("戻す", "btn-task-back"));
  let ul = document.getElementById("complete-list");
  ul.append(li);
  e.target.parentNode.remove();
};

// 未実行タスク一覧に追加
let addIncompleteList = (taskName = "") => {
  if (typeof taskName === "object") {
    let textElement = document.getElementById("input-text");
    taskName = textElement.value;
    textElement.value = "";
  }

  let li = createLi();
  li.append(createDiv(taskName));
  li.append(createCompleteBtn("完了", "btn-task-complete"));
  li.append(createDeleteBtn("削除", "btn-task-delete"));
  let ul = document.getElementById("incomplete-list");
  ul.append(li);
};

let createDiv = (textContent) => {
  let div = document.createElement("div");
  div.innerText = textContent;
  return div;
};

let createLi = () => {
  let li = document.createElement("li");
  li.className = "task-row";
  return li;
};

let createBtn = (label, className) => {
  let btn = document.createElement("button");
  btn.className = className;
  btn.innerText = label;
  return btn;
};

let createCompleteBtn = (label, className) => {
  let btn = createBtn(label, className);
  btn.addEventListener("click", onClickComplete, false);
  return btn;
};

let createDeleteBtn = (label, className) => {
  let btn = createBtn(label, className);
  btn.addEventListener("click", onClickDelete, false);
  return btn;
};

let createReturnBtn = (label, className) => {
  let btn = createBtn(label, className);
  btn.addEventListener("click", onClickReturn, false);
  return btn;
};

let onClickDelete = (e) => {
  e.target.parentNode.remove();
};

let onClickReturn = (e) => {
  const taskName = e.target.previousSibling.innerText;
  e.target.parentNode.remove();
  addIncompleteList(taskName);
};

document
  .getElementById("btn-task-new")
  .addEventListener("click", addIncompleteList);
