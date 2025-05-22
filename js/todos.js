let postsDiv = document.querySelector(".todos");

let params = new URLSearchParams(window.location.search);
let userId = params.get("userId");

window.onload = function () {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let todos = JSON.parse(xhr.responseText);

      todos.forEach(function (todo) {
        postsDiv.innerHTML += `
          <div class="container" style="color: white; background: #333; padding: 10px; margin-bottom: 15px; border-radius: 8px;">
            <span>ID: ${todo.id}</span>
            <h3>Title: ${todo.title}</h3>
            <p>Completed: ${todo.completed ? "Yes" : "No"}</p>
          </div>
        `;
      });
    }
  };

  xhr.open(
    "GET",
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
  xhr.send();
};
