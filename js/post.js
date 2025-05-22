let postsDiv = document.querySelector(".posts");

let params = new URLSearchParams(window.location.search);
let userId = params.get("userId");
window.onload = function () {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let posts = JSON.parse(xhr.responseText);

      posts.forEach(function (post) {
        postsDiv.innerHTML += `
          <div class="container" style="color: white; background: #333; padding: 10px; margin-bottom: 15px; border-radius: 8px;">
            <span>${post.id}</span>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
      });
    }
  };

  xhr.open(
    "GET",
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  xhr.send();
};
