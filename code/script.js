// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.



for (i = 1; i <= 3; i++) {
  const sectionEl = document.getElementById(`section${i}`)
  sectionEl.addEventListener("click", toggle)
}

const accordionEL = document.getElementById("accordion");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const filteredData = data.filter((posts) => posts.userId === 2);

    filteredData.forEach((posts) => {

      const titleEl = document.createElement("div");
      const bodyEl = document.createElement("div");
      const pEl = document.createElement("p");
      const textNode = document.createTextNode(posts.body);


      titleEl.setAttribute("class", "title");
      titleEl.setAttribute("id", `section${posts.id}`)
      bodyEl.setAttribute("class", "description");


      titleEl.innerHTML = `${posts.title}`;

      accordionEL.appendChild(titleEl);
      pEl.appendChild(textNode)
      bodyEl.appendChild(pEl);
      accordionEL.appendChild(bodyEl)

      const sectionElement = document.getElementById(`section${posts.id}`)
      sectionElement.addEventListener("click", toggle)

      console.log(sectionElement)
    })


  });

