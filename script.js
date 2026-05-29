// Data
const projects = [
  {
    n: "01", title: "Suzoki", tag: "Food ordering · iOS concept", year: "2023",
    role: "Research · UI · Prototype",
    problem: "People with allergies kept giving up on the order screen. The customise option was three taps deep and easy to miss.",
    approach: "I interviewed six diners, mapped where they got stuck, and rebuilt the flow so ingredients are the first thing you see.",
    outcome: "In a small moderated test (8 people), 6 finished without help. Before the change, only 2 did. Not a launch — a class project — but the pattern held.",
    metrics: [{v:"8",l:"Testers"},{v:"6/8",l:"Finished unaided"},{v:"2",l:"Iterations"}],
    accent: "a1",
    proto: "https://www.figma.com/proto/eXS2PGRh8YV0npNgeKcw3e/Figma-designs",
    study: "https://cdn.prod.website-files.com/650da1d651dc28a8d593ee43/650fade7a5833eb29f9265be_Google%20UX%20Design%20Certificate%20-%20Portfolio%20Project%201%20-%20Case%20study%20slide%20deck%20%5BTemplate%5D.pdf",
  },
  {
    n: "02", title: "Lumen", tag: "Workshop discovery · Web + Mobile", year: "2023",
    role: "UI · Small component set",
    problem: "Teens browsing a local workshops site couldn't tell which sessions were nearby or still open. The list looked the same whether a class had two seats or fifty.",
    approach: "Cut the card down to title, distance, time and seats left. Built one component, used it everywhere. Tested the tree with five people.",
    outcome: "Everyone found the right workshop on the second pass. On the first pass, 2 of 5 picked one that was already full — that caught a real labelling bug in the original copy.",
    metrics: [{v:"5",l:"Tree-test users"},{v:"5/5",l:"Found target"},{v:"12",l:"Components"}],
    accent: "a2",
    proto: "https://xd.adobe.com/view/36b5e057-eb1d-4808-b1ee-b4eb62d27ffa-63e6/",
    study: "https://cdn.prod.website-files.com/650da1d651dc28a8d593ee43/650fddc538e964525a7532d3_Google%20UX%20Design%20Certificate%20-%20Portfolio%20Project%202%20-%20Case%20study%20slide%20deck%20%5BTemplate%5D.pdf",
  },
];

const labProjects = [
  { title:"LinkedIn Recreation", stack:"React", desc:"Clone of the LinkedIn web app with a focused subset of features.", href:"https://linkedin-recreation.netlify.app/" },
  { title:"Accordion", stack:"React", desc:"Accordion component for common FAQ patterns.", href:"https://relaxed-rabanadas-47a890.netlify.app/" },
  { title:"Space News API", stack:"React · Fetch", desc:"Article list that updates as new posts are published.", href:"https://profound-cajeta-9758f0.netlify.app/" },
  { title:"Tours App", stack:"React · API", desc:"Fetched tours with dismiss and read-more interactions.", href:"https://leafy-taffy-03c9f1.netlify.app/" },
  { title:"Birthday Reminder", stack:"React · State", desc:"Reminder list with a clear-all reset action.", href:"https://stately-speculoos-667d0e.netlify.app/" },
  { title:"Restaurant Menu", stack:"React · Filter", desc:"Menu UI with a category filter.", href:"https://curious-youtiao-a084ed.netlify.app/" },
];

const services = [
  { k:"Research", v:"Short user interviews, usability tests, written notes" },
  { k:"Interaction", v:"Flows, wireframes, Figma prototypes" },
  { k:"Visual", v:"Type, colour, layout, reusable components" },
  { k:"Front-end", v:"HTML, CSS, some React — enough to talk to engineers" },
];

const processSteps = [
  { k:"Listen", v:"Talk to a few real users before sketching anything.", icon:"●" },
  { k:"Frame", v:"Write the problem in one sentence. If I can't, I don't understand it yet.", icon:"◆" },
  { k:"Make", v:"Low-fi first. Test with 3–5 people before adding colour.", icon:"▲" },
  { k:"Check", v:"Pick one thing to measure. Note what changed and what didn't.", icon:"■" },
];

const changelog = [
  { v:"2026.05", date:"May 2026", note:"Refreshed the case study write-ups." },
  { v:"2026.02", date:"Feb 2026", note:"Updated the visual system and typography." },
  { v:"2025.11", date:"Nov 2025", note:"Added six React side projects to the lab." },
  { v:"2023.08", date:"Aug 2023", note:"First version of the site." },
];

const marqueeWords = ["Research","Strategy","Wireframes","Prototyping","Visual Design","Systems","Motion"];

// Render
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

document.getElementById("workList").innerHTML = projects.map((p,i)=>`
  <article class="work-card reveal">
    <div class="cover ${p.accent}">
      <div class="cover-title">${esc(p.title)}</div>
      <div class="cover-tag">${esc(p.tag)}</div>
      <div class="cover-metrics">
        ${p.metrics.map(m=>`<div class="metric"><div class="v">${esc(m.v)}</div><div class="l">${esc(m.l)}</div></div>`).join("")}
      </div>
    </div>
    <div class="work-body">
      <div>
        <div class="work-meta"><span>${p.n}</span><span class="line"></span><span>${p.year}</span></div>
        <h3 class="work-title">${esc(p.title)}</h3>
        <div class="work-role">${esc(p.role)}</div>
        <dl class="story">
          <div><dt><span class="pip"></span>Problem</dt><dd>${esc(p.problem)}</dd></div>
          <div><dt><span class="pip"></span>Approach</dt><dd>${esc(p.approach)}</dd></div>
          <div><dt><span class="pip"></span>Outcome</dt><dd class="hi">${esc(p.outcome)}</dd></div>
        </dl>
      </div>
      <div class="story-actions">
        <a href="${p.proto}" target="_blank" rel="noreferrer" class="btn btn-primary btn-pill">Prototype <span class="arr">↗</span></a>
        <a href="${p.study}" target="_blank" rel="noreferrer" class="btn btn-outline btn-pill">Case Study</a>
      </div>
    </div>
  </article>
`).join("");

document.getElementById("labGrid").innerHTML = labProjects.map((p,i)=>`
  <a href="${p.href}" target="_blank" rel="noreferrer" class="lab-card reveal">
    <div class="lab-top">
      <span class="lab-num">${String(i+1).padStart(2,"0")} · ${esc(p.stack)}</span>
      <span class="arr">↗</span>
    </div>
    <div>
      <h3 class="lab-title">${esc(p.title)}</h3>
      <p class="lab-desc">${esc(p.desc)}</p>
    </div>
  </a>
`).join("");

document.getElementById("processGrid").innerHTML = processSteps.map((s,i)=>`
  <div class="proc-card reveal">
    <div class="proc-top"><span class="proc-icon">${s.icon}</span><span class="proc-num">0${i+1} / 04</span></div>
    <div class="proc-title">${esc(s.k)}</div>
    <p class="proc-desc">${esc(s.v)}</p>
  </div>
`).join("");

document.getElementById("servicesList").innerHTML = services.map((s,i)=>`
  <li>
    <div class="svc-num">0${i+1}</div>
    <div class="svc-title">${esc(s.k)}</div>
    <div class="svc-desc">${esc(s.v)}</div>
    <div class="svc-arr">↗</div>
  </li>
`).join("");

document.getElementById("timeline").innerHTML = changelog.map(c=>`
  <li class="reveal">
    <div class="tl-head"><span class="tl-v">${esc(c.v)}</span><span class="tl-date">${esc(c.date)}</span></div>
    <p class="tl-note">${esc(c.note)}</p>
  </li>
`).join("");

// Marquee (duplicated)
const mLoop = [...marqueeWords,...marqueeWords,...marqueeWords,...marqueeWords];
document.getElementById("marquee").innerHTML = mLoop.map(w=>`<span>${esc(w)} <span class="star">★</span></span>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

// Scroll progress
const bar = document.getElementById("scrollBar");
const onScroll = () => {
  const h = document.documentElement;
  const total = h.scrollHeight - h.clientHeight;
  bar.style.width = (total > 0 ? (h.scrollTop / total) * 100 : 0) + "%";
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
  });
},{threshold:0.15});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
