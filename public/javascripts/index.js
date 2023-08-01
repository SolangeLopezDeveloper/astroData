console.log('Vinculado con éxito!');
let container = document.getElementById('root')

const titleElement = document.createElement("h1");
  titleElement.textContent = "Bienvenido a AstrosWeb";
  container.appendChild(titleElement);
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = "Explora el fascinante mundo del universo, cosmos y planetas.";
  container.appendChild(paragraphElement);
  const listElement = document.createElement("ul");
  const sections = ["Astros", "Cosmos", "Planetas", "Constelaciones"];
  sections.forEach((section) => {
    const listItemElement = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.href = "#" + section.toLowerCase();
    linkElement.textContent = section;
    listItemElement.appendChild(linkElement);
    listElement.appendChild(listItemElement);
  });
  container.appendChild(listElement);
  window.onload = function () {
    createUI();
  };