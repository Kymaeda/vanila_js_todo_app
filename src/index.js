import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("input").value;
  document.getElementById("input").value = "";

  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";
  li.appendChild(div);
  console.log(li);

  const p = document.createElement("p");
  p.className = "task-name";
  p.innerHTML = inputText;
  div.appendChild(p);

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "完了";
  const DeleteBtn = document.createElement("button");
  DeleteBtn.innerHTML = "削除";
  div.appendChild(completeBtn);
  div.appendChild(DeleteBtn);

  document.getElementById("incompletion-list").appendChild(li);
};

document.getElementById("add").addEventListener("click", () => onClickAdd());
// document.getElementById("add").addEventListener("click", onClickAdd);
