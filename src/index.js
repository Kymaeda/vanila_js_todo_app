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

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "完了";
  addCompleteEvent(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "削除";
  addRemoveEvent(deleteBtn);

  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  document.getElementById("incompletion-list").appendChild(li);
};

const removeTask = (elem) => {
  document.getElementById("incompletion-list").removeChild(elem);
};

const addCompleteEvent = (btn) => {
  btn.addEventListener("click", (e) => {
    const moveLi = e.currentTarget.closest("li");
    removeTask(moveLi);

    Array.prototype.forEach.call(moveLi.querySelectorAll("button"), (btn) =>
      btn.remove()
    );
    const returnBtn = document.createElement("button");
    returnBtn.innerHTML = "戻す";
    moveLi.querySelector(".list-row").appendChild(returnBtn);
    document.getElementById("completed-list").appendChild(moveLi);
  });
};

const addRemoveEvent = (btn) => {
  btn.addEventListener("click", (e) => {
    removeTask(e.currentTarget.closest("li"));
  });
};

document.getElementById("add").addEventListener("click", () => onClickAdd());
// document.getElementById("add").addEventListener("click", onClickAdd);
