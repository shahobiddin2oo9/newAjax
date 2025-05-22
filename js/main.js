let cards = document.querySelector(".cards");
let loading = document.querySelector(".loading");

function getCard({ name, username, email, address, id, company }) {
  return `
    <div class="card">
      <div class="content">
        <div class="back">
          <div class="back-content">
            <strong>Hover Me ${id}</strong>
          </div>
        </div>
        <div class="front">
          <div class="img">
            <div class="circle"></div>
            <div class="circle" id="right"></div>
            <div class="circle" id="bottom"></div>
          </div>
          <div class="front-content">
            <div class="carda">
              <div class="name">Name: ${name}</div>
              <div class="Username">Username: ${username}</div>
              <div class="Email">Email: ${email}</div>
              <div class="Address">Address: ${address.city}, ${address.street}</div>
              <div class="comments">
                Comments : ${company.bs}
                <span></span>
              </div>
              <div class="BtnS">
                <a href="../todos.html?userId=${id}"><div class="btn btn1">Todos</div></a>
                <a href="../posts.html?userId=${id}"><div class="btn btn2">Posts</div></a>
                <a href="../coments.html?userId=${id}"><div class="btn btn3">Comments</div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function getURL(url, callback) {
  loading.textContent = "Loading...";
  loading.style.color = "white";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      loading.textContent = "";

      if (xhr.status == 200) {
        let data = JSON.parse(xhr.responseText);
        callback(data);
      } else {
        console.log(xhr.responseText);
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

getURL("https://jsonplaceholder.typicode.com/users", (users) => {
  users.map((user) => {
    cards.innerHTML += getCard(user);
  });
});
