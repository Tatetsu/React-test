import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  li.className = "list-row";

  //div生成
  const div = document.createElement("div");
  div.className = "list-inner";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //divタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  console.log(li);

  //未完了のリストに追加
  document.getElementById("list-row").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
