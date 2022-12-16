const url = "http://localhost:3000/films"

function fetchData(){
    fetch(url)
    .then((Response)=>Response.json())
    .then((data)=>appendFirstMovie(data.films));

}
fetchData();

//append first movie when the page loads

function appendFirstMovie(data) {
    let first = data[0];
    let butonn = document.getElementById("button");
    butonn.innerHTML = "";
    let image = document.getElementById("pic");
    let title = document.getElementById("title");
    let runtime = document.getElementById("runtime");
    let showtime = document.getElementById("showtime");
    let tickets = document.getElementById("tickets");
    let description = document.getElementById("description");
    let button = document.createElement("button");
    button.id = "btn";
    button.textContent = "Buy Ticket";
    let total = first.capacity - first.tickets.sold;
    button.addEventListener("click", () => {
      if (total > 0) {
        total -= 1;
        document.getElementById("tickets").innerHTML = total;
      } else if (total < 1) {
        document.getElementById("tickets").innerHTML = "*No tickets availabl!*";
      }
    });
    title.textContent = first.title;
    runtime.textContent = first.runtime;
    showtime.textContent = first.showtime;
    tickets.textContent = first.capacity - first.tickets_sold;
    description.textContent = first.description;
    image.src = `
      ${first.poster}
      `;
    butonn.appendChild(button);
  }
  //fetches list of movies in the menu section
  function appendMenu() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => menuTitles(data.films));
  }
  appendMenu();