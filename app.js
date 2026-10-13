const PROJECTS = [
  {
    id: "atlas",
    title: "Atlas Analysis",
    eyebrow: "Multi-agent data team",
    image: "./public/assets/atlas-analysis-cover.png",
    href: "https://github.com/JimmyDrew/Atlas_Analytics",
    description:
      "A Python and SQL analytics pipeline that coordinates five specialized AI-agent roles across retail, transportation, and energy datasets—with quality checks and a human-readable reporting gate.",
    stats: ["5 agents", "3 domains", "Python + SQL"],
    tags: ["Python", "Pandas", "SQLite", "OpenAI API", "Codex"],
    accent: "#9adf00",
  },
  {
    id: "cs2",
    title: "CSGO Analytics",
    eyebrow: "Esports intelligence dashboard",
    image: "./public/assets/csgo-analytics-cover.png",
    href: "https://github.com/JimmyDrew/CSGO_Dashboard",
    description:
      "An end-to-end analytics stack collecting thousands of professional match and map records, then turning them into player comparisons, rankings, map trends, upset rates, and interactive Power BI views.",
    stats: ["2,795 matches", "6,412 maps", "REST → Power BI"],
    tags: ["PostgreSQL", "Pandas", "Power BI", "DAX", "REST API"],
    accent: "#00bbec",
  },
];

const EXPERIENCE = [
  {
    period: "Jun — Aug 2025",
    role: "Front End Developer Intern",
    company: "Value Health",
    copy: "Created a patient portal and shipped application features across weekly Agile sprints using React, HTML, CSS, Java, and PostgreSQL-backed data. Coordinated sprint work and helped keep delivery on schedule.",
  },
  {
    period: "May 2023 — Jun 2026",
    role: "UX Study Abroad Program",
    company: "Newcastle University",
    copy: "Researched emerging artificial-intelligence capabilities and their potential applications in education. Collaborated with a team of UX design students to create scenario cards based on real-world situations encountered by educators.",
  },
  {
    period: "2024 — 2025",
    role: "Research Assistant Intern",
    company: "JM Drew, LLC",
    copy: "Built a Python and spaCy workflow that translated invoice information into structured Excel data, while researching specialty-drug distribution and complex SOP agreements.",
  },
  {
    period: "2017 — 2023",
    role: "Customer Service + Sales",
    company: "Sullivan’s Hardware and Garden",
    copy: "Solved customer problems across the sales floor and call center, supported store promotions, and became a trusted hands-on assembler for complex merchandise.",
  },
];

const ROUTES = [
  { id: "home", label: "home" },
  { id: "projects", label: "projects" },
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
];

const app = document.querySelector("#app");
const navItems = [...document.querySelectorAll(".nav__item")];
const shellRouteItems = [...document.querySelectorAll(".topbar [data-route]")];
const edgeButtons = [...document.querySelectorAll("[data-page-edge]")];
let currentRoute = "home";
let activeProject = 0;
let featuredProject = 0;

const icons = {
  grid: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  document: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></svg>`,
  code: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 3l-4 18"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
};

function homeView() {
  const featured = PROJECTS[featuredProject];
  return `
    <section class="screen home-screen" aria-label="Dashboard">
      <div class="tile-grid">
        <button class="tile tile--project tile--tall focusable" data-route="projects" data-featured-project="${featuredProject}" aria-label="Open featured project ${featured.title}">
          <span class="featured-cover" style="--featured-cover: url('${featured.image}')">
            <img class="featured-cover__art" src="${featured.image}" alt="Cover art for ${featured.title}" />
          </span>
          <span class="tile__shade"></span>
          <span class="tile__label"><small>Featured build</small><strong>${featured.title}</strong></span>
        </button>

        <button class="tile tile--hero focusable" data-route="about" aria-label="View James Drew's professional profile">
          <span class="hero-portrait"><img src="./public/assets/james-drew.jpg" alt="Portrait of James Drew" /></span>
          <span class="hero-copy">
            <small>Professional profile</small>
            <strong>James Drew</strong>
            <em>Front-end developer. Data builder. Game-design thinker.</em>
            <span>Learn more ${icons.arrow}</span>
          </span>
        </button>

        <button class="tile tile--green tile--projects focusable" data-route="projects">
          ${icons.grid}
          <span class="tile__label"><small>Library</small><strong>Projects</strong></span>
          <span class="tile__count">${String(PROJECTS.length).padStart(2, "0")}</span>
        </button>

        <a class="tile tile--resume focusable" href="./public/assets/JamesDrew_Resume2026.pdf" target="_blank" rel="noreferrer">
          <img class="resume-preview" src="./public/assets/resume-preview.png" alt="Preview of James Drew's resume" />
          <span class="tile__shade tile__shade--resume"></span>
          <span class="tile__label"><small>PDF</small><strong>Resume</strong></span>
        </a>

        <a class="tile tile--photo tile--colts focusable" href="https://www.colts.com/team/history/" target="_blank" rel="noreferrer">
          <img src="./public/assets/colts-game-day.jpg" alt="Indianapolis Colts game day at Lucas Oil Stadium" />
          <span class="tile__shade"></span>
          <span class="tile__label"><small>Indianapolis</small><strong>Colts history</strong></span>
        </a>

        <a class="tile tile--photo tile--iu focusable" href="https://www.myiu.org/stories/behind-the-gates.html" target="_blank" rel="noreferrer">
          <img src="./public/assets/sample-gates.jpg" alt="Sample Gates at Indiana University Bloomington" />
          <span class="tile__shade"></span>
          <span class="tile__label"><small>Indiana University</small><strong>Behind the gates</strong></span>
        </a>

      </div>
      <p class="photo-credit">
        Stadium photo: <a href="https://www.visitindy.com/things-to-do/sports/indianapolis-colts/" target="_blank" rel="noreferrer">Visit Indy</a>
      </p>
    </section>`;
}

function projectView() {
  const cards = PROJECTS.map((project, index) => `
    <article class="project-card ${index === activeProject ? "is-active" : ""}" data-index="${index}" style="--accent:${project.accent}">
      <button class="project-card__select focusable" data-project-index="${index}" aria-label="Select ${project.title}">
        <img src="${project.image}" alt="Arcade-inspired cover art for ${project.title}" />
        <span class="project-card__overlay"></span>
        <span class="project-card__number">0${index + 1}</span>
        <span class="project-card__title"><small>${project.eyebrow}</small><strong>${project.title}</strong></span>
      </button>
    </article>
  `).join("");

  const project = PROJECTS[activeProject];
  return `
    <section class="screen projects-screen" aria-labelledby="projects-title">
      <div class="screen-heading">
        <h1 id="projects-title">Projects</h1>
      </div>

      <div class="carousel-shell">
        <button class="carousel-arrow carousel-arrow--left focusable" data-carousel="prev" aria-label="Previous project"><span aria-hidden="true">‹</span></button>
        <div class="project-carousel" style="--active:${activeProject}; --drag:0" aria-label="Draggable project carousel">${cards}</div>
        <button class="carousel-arrow carousel-arrow--right focusable" data-carousel="next" aria-label="Next project"><span aria-hidden="true">›</span></button>
      </div>

      <div class="project-detail" style="--accent:${project.accent}">
        <div>
          <p>${project.eyebrow}</p>
          <h2>${project.title}</h2>
          <div class="tag-row">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
        <p class="project-detail__copy">${project.description}</p>
        <div class="stat-row">${project.stats.map((stat) => `<span>${stat}</span>`).join("")}</div>
        <a class="launch-button focusable" href="${project.href}" target="_blank" rel="noreferrer">
          Open project on GitHub ${icons.arrow}
        </a>
      </div>
      <p class="carousel-count"><span>Drag or swipe to browse</span>${activeProject + 1} of ${PROJECTS.length}</p>
    </section>`;
}

function aboutView() {
  return `
    <section class="screen about-screen" aria-labelledby="about-title">
      <div class="about-portrait">
        <div class="about-portrait__frame"><img src="./public/assets/james-drew.jpg" alt="James Drew" /></div>
        <span>James Drew</span>
      </div>
      <div class="about-copy">
        <p class="kicker">About James Drew</p>
        <h1 id="about-title">I build at the intersection of <em>interfaces</em>, <em>data</em>, and <em>play.</em></h1>
        <p class="about-copy__lead">I’m James Drew, an Informatics student at Indiana University with minors in Web Design and Game Design. I like turning complicated systems into experiences people can understand and enjoy.</p>
        <div class="about-facts">
          <div><span>Home base</span><strong>Indianapolis, IN</strong></div>
          <div><span>Current quest</span><strong>B.S. Informatics</strong></div>
          <div><span>Favorite tools</span><strong>React · Python · SQL</strong></div>
          <div><span>Side interests</span><strong>Games · UX · Sports</strong></div>
        </div>
        <div class="about-actions">
          <a class="launch-button focusable" href="https://mail.google.com/mail/?view=cm&fs=1&to=jimmydrew.sf@gmail.com" target="_blank" rel="noreferrer">Start a conversation ${icons.arrow}</a>
          <a class="text-link focusable" href="https://www.linkedin.com/in/JamesWDrew" target="_blank" rel="noreferrer">LinkedIn</a>
          <a class="text-link focusable" href="https://github.com/JimmyDrew" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>`;
}

function experienceView() {
  return `
    <section class="screen experience-screen" aria-labelledby="experience-title">
      <div class="screen-heading">
        <h1 id="experience-title">Experience + skills</h1>
      </div>
      <div class="experience-layout">
        <div class="timeline">
          ${EXPERIENCE.map((item, index) => `
            <article class="timeline-item">
              <span class="timeline-item__number">0${index + 1}</span>
              <div><p>${item.period}</p><h2>${item.role}</h2><h3>${item.company}</h3><span>${item.copy}</span></div>
            </article>
          `).join("")}
        </div>
        <aside class="loadout">
          <p>Current loadout</p>
          <h2>Technical skills</h2>
          <div class="skill-group"><span>Languages</span><p>Python · JavaScript · Java · C# · SQL · HTML · CSS</p></div>
          <div class="skill-group"><span>Frameworks</span><p>React · Pandas · spaCy</p></div>
          <div class="skill-group"><span>Data</span><p>PostgreSQL · SQLite · Power BI · DAX · Excel · ETL</p></div>
          <div class="skill-group"><span>Workflow</span><p>Git · GitHub · CI/CD · Agile · REST APIs · Agentic AI</p></div>
          <a class="launch-button focusable" href="./public/assets/JamesDrew_Resume2026.pdf" target="_blank" rel="noreferrer">View full resume ${icons.arrow}</a>
        </aside>
      </div>
    </section>`;
}

const views = { home: homeView, projects: projectView, about: aboutView, experience: experienceView };

function bindViewEvents() {
  app.querySelectorAll("[data-route]").forEach((item) => {
    item.addEventListener("click", () => {
      if (item.hasAttribute("data-featured-project")) {
        activeProject = Number(item.dataset.featuredProject);
      }
      navigate(item.dataset.route);
    });
  });
  document.querySelectorAll("[data-project-index]").forEach((item) => {
    item.addEventListener("click", () => setActiveProject(Number(item.dataset.projectIndex)));
  });
  document.querySelectorAll("[data-carousel]").forEach((item) => {
    item.addEventListener("click", () => {
      const delta = item.dataset.carousel === "next" ? 1 : -1;
      setActiveProject((activeProject + delta + PROJECTS.length) % PROJECTS.length);
    });
  });

  const carousel = document.querySelector(".project-carousel");
  if (carousel) bindCarouselDrag(carousel);
}

function cycleFeaturedProject() {
  if (currentRoute !== "home") return;
  const tile = app.querySelector("[data-featured-project]");
  if (!tile) return;

  const nextIndex = (featuredProject + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextIndex];
  tile.classList.add("is-swapping");

  window.setTimeout(() => {
    if (!tile.isConnected || currentRoute !== "home") return;
    featuredProject = nextIndex;
    tile.dataset.featuredProject = String(nextIndex);
    tile.setAttribute("aria-label", `Open featured project ${nextProject.title}`);
    const cover = tile.querySelector(".featured-cover");
    const image = cover.querySelector("img");
    cover.style.setProperty("--featured-cover", `url("${nextProject.image}")`);
    image.src = nextProject.image;
    image.alt = `Cover art for ${nextProject.title}`;
    tile.querySelector(".tile__label strong").textContent = nextProject.title;
    window.requestAnimationFrame(() => tile.classList.remove("is-swapping"));
  }, 260);
}

function adjacentRoute(delta) {
  const currentIndex = ROUTES.findIndex((route) => route.id === currentRoute);
  return ROUTES[(currentIndex + delta + ROUTES.length) % ROUTES.length];
}

function updatePageEdges() {
  edgeButtons.forEach((button) => {
    const route = adjacentRoute(button.dataset.pageEdge === "next" ? 1 : -1);
    button.querySelector(".edge-page__label").textContent = route.label;
    button.setAttribute("aria-label", `${button.dataset.pageEdge === "next" ? "Next" : "Previous"} page: ${route.label}`);
  });
}

function bindPageSwipe() {
  let pointerId = null;
  let startX = 0;
  let dragX = 0;
  let suppressClick = false;

  const reset = () => {
    pointerId = null;
    app.classList.remove("is-page-dragging");
    app.style.setProperty("--page-drag", "0");
  };

  app.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || event.target.closest(".project-carousel")) return;
    pointerId = event.pointerId;
    startX = event.clientX;
    dragX = 0;
    suppressClick = false;
  });

  app.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerId) return;
    dragX = Math.max(-170, Math.min(170, event.clientX - startX));
    if (Math.abs(dragX) < 6) return;
    if (!app.hasPointerCapture(pointerId)) app.setPointerCapture(pointerId);
    suppressClick = true;
    app.classList.add("is-page-dragging");
    app.style.setProperty("--page-drag", dragX.toFixed(1));
  });

  const finish = (event) => {
    if (event.pointerId !== pointerId) return;
    const routeDelta = dragX < 0 ? 1 : -1;
    const shouldNavigate = Math.abs(dragX) >= 72;
    if (app.hasPointerCapture(pointerId)) app.releasePointerCapture(pointerId);
    reset();
    if (shouldNavigate) navigate(adjacentRoute(routeDelta).id);
  };

  app.addEventListener("pointerup", finish);
  app.addEventListener("pointercancel", finish);
  app.addEventListener("click", (event) => {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick = false;
  }, true);
}

function bindCarouselDrag(carousel) {
  let startX = 0;
  let dragX = 0;
  let dragging = false;
  let dragged = false;

  const resetDrag = () => {
    carousel.classList.remove("is-dragging");
    carousel.style.setProperty("--drag", "0");
  };

  carousel.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    startX = event.clientX;
    dragX = 0;
    dragging = true;
    dragged = false;
    carousel.classList.add("is-dragging");
  });

  carousel.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    dragX = Math.max(-150, Math.min(150, event.clientX - startX));
    dragged = dragged || Math.abs(dragX) > 6;
    if (dragged && !carousel.hasPointerCapture(event.pointerId)) carousel.setPointerCapture(event.pointerId);
    carousel.style.setProperty("--drag", dragX.toFixed(1));
  });

  const finishDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    if (carousel.hasPointerCapture(event.pointerId)) carousel.releasePointerCapture(event.pointerId);

    if (Math.abs(dragX) >= 48) {
      const delta = dragX < 0 ? 1 : -1;
      setActiveProject((activeProject + delta + PROJECTS.length) % PROJECTS.length);
    } else {
      resetDrag();
    }
  };

  carousel.addEventListener("pointerup", finishDrag);
  carousel.addEventListener("pointercancel", finishDrag);
  carousel.addEventListener("click", (event) => {
    if (!dragged) return;
    event.preventDefault();
    event.stopPropagation();
    dragged = false;
  }, true);
}

function render({ focus = false } = {}) {
  app.classList.add("is-changing");
  window.setTimeout(() => {
    app.innerHTML = views[currentRoute]();
    app.classList.remove("is-changing");
    navItems.forEach((item) => item.classList.toggle("is-active", item.dataset.route === currentRoute));
    updatePageEdges();
    bindViewEvents();
    if (focus) app.focus({ preventScroll: true });
  }, 130);
}

function navigate(route, { push = true } = {}) {
  if (!views[route]) return;
  currentRoute = route;
  if (push) history.pushState({ route }, "", route === "home" ? "#home" : `#${route}`);
  render({ focus: true });
}

function setActiveProject(index) {
  activeProject = index;
  render();
}

function syncRouteFromLocation() {
  const route = location.hash.replace("#", "") || "home";
  if (route !== currentRoute) navigate(route, { push: false });
}

window.addEventListener("popstate", syncRouteFromLocation);
window.addEventListener("hashchange", syncRouteFromLocation);

shellRouteItems.forEach((item) => item.addEventListener("click", () => navigate(item.dataset.route)));
edgeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navigate(adjacentRoute(button.dataset.pageEdge === "next" ? 1 : -1).id);
  });
});
bindPageSwipe();
PROJECTS.forEach((project) => {
  const image = new Image();
  image.src = project.image;
});
window.setInterval(cycleFeaturedProject, 5000);

window.addEventListener("keydown", (event) => {
  if (currentRoute === "projects" && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    setActiveProject((activeProject + delta + PROJECTS.length) % PROJECTS.length);
  }
  if (event.key === "Escape" || event.key.toLowerCase() === "b") navigate("home");
});

const initialRoute = location.hash.replace("#", "");
if (views[initialRoute]) currentRoute = initialRoute;
render();
