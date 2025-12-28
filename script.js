
// Project Add Logic
let projectsDiv = document.querySelector(".projects");
let projects = [];

let addProjects = (projectLink, projectName, projectDuration, projectDescription) => {
  const projectDetails = {
    link: projectLink,
    name: projectName,
    duration: projectDuration,
    description: projectDescription
  };

  projects.push(projectDetails);
};


// Adding Projects
addProjects(
  "https://samitsinghportfolio.vercel.app/",
  "PersonalPortfolio",
  "September, 2025",
  "Minimalist personal website with responsive design"
);

addProjects(
  "https://samitsnakegame.vercel.app/",
  "SnakeGame",
  "December, 2025",
  "Classic Snake game with mobile controls"
);


// Rendering Projects On UI
projects.forEach((project) => {
  let projectDiv = document.createElement("div");
  projectDiv.className = "project";
  projectDiv.onclick = () => {
    window.location.href = project.link;
  };

  projectDiv.innerHTML = `
    <div class="heading">${project.name}</div>
    <div class="durtion">${project.duration}</div>
    <div class="projectDec">${project.description}</div>
  `;

  projectsDiv.appendChild(projectDiv);
});
