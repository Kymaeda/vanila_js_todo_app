import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("input").value;
  document.getElementById("input").value = "";

  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  li.appendChild(div);

  const p = document.createElement("p");
  p.className = "task-name";
  p.innerHTML = inputText;
  div.appendChild(p);
  addCompleteDeleteBtns(div);
  addTask("incompletion-list", li);
};

const addTask = (id, elem) => {
  document.getElementById(id).appendChild(elem);
};

const removeTask = (id, elem) => {
  document.getElementById(id).removeChild(elem);
};

const moveTask = (from, to, elem) => {
  removeTask(from, elem);
  removeBtns(elem);
  addReturnBtn(elem);
  addTask(to, elem);
};

const addCompleteDeleteBtns = (elem) => {
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "完了";
  addCompleteEvent(completeBtn);
  elem.appendChild(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "削除";
  addDeleteEvent("incompletion-list", deleteBtn);
  elem.appendChild(deleteBtn);
};

const addReturnBtn = (elem) => {
  const returnBtn = document.createElement("button");
  returnBtn.innerHTML = "戻す";
  elem.querySelector(".list-row").appendChild(returnBtn);
  addReturnEvent(returnBtn);
};

const removeBtns = (elem) => {
  Array.prototype.forEach.call(elem.querySelectorAll("button"), (btn) =>
    btn.remove()
  );
};

const addCompleteEvent = (btn) => {
  btn.addEventListener("click", (e) => {
    const moveLi = e.currentTarget.closest("li");
    moveTask("incompletion-list", "completed-list", moveLi);
  });
};

const addDeleteEvent = (id, btn) => {
  btn.addEventListener("click", (e) => {
    removeTask(id, e.currentTarget.closest("li"));
  });
};

const addReturnEvent = (btn) => {
  btn.addEventListener("click", (e) => {
    const moveLi = e.currentTarget.closest("li");
    moveTask("completed-list", "incompletion-list", moveLi);
  });
};

document.getElementById("add").addEventListener("click", () => onClickAdd());
// document.getElementById("add").addEventListener("click", onClickAdd);
