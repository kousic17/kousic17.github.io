/**
 * KOUSIC SRINIVASAN — PORTFOLIO CLIENT LOGIC
 * Authentic brand interactions: Email copy toast, Case Study modal, and Resume sheet
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initProjectFilterTabs();
  initEmailCopy();
  initCaseStudyModal();
  initResumeModal();
});

/* ==========================================================================
   0. SCROLL PROGRESS BAR (Latest Portfolio Trend)
   ========================================================================== */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      bar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

/* ==========================================================================
   0.1 PROJECT FILTER TABS (Latest Portfolio Trend)
   ========================================================================== */
function initProjectFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const projectItems = document.querySelectorAll('.project-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');

      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          item.style.opacity = '0';
          item.style.transform = 'translateY(8px)';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 30);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   1. ONE-CLICK EMAIL COPY WITH ORANGE RECORDING TOAST
   ========================================================================== */
function initEmailCopy() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'kousic.it@gmail.com';

      try {
        await navigator.clipboard.writeText(email);
        triggerToast(`COPIED: ${email}`);
      } catch (err) {
        const el = document.createElement('textarea');
        el.value = email;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        triggerToast(`COPIED: ${email}`);
      }
    });
  });

  function triggerToast(text) {
    if (!toast) return;
    const msg = toast.querySelector('.toast-message');
    if (msg) msg.textContent = text;

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

/* ==========================================================================
   2. CASE STUDY DETAILS MODAL (Exact Resume Text)
   ========================================================================== */
const CASE_STUDIES = {
  suzoki: {
    tag: "Google UX Specialization Course Case Study",
    title: '"SUZOKI" — FOOD CUSTOMIZATION APP',
    duration: "2-Week Design Exercise",
    role: "Lead UX Researcher & UI Designer",
    tools: "Figma, Paper Sketches, Marvel App",
    platform: "Mobile App (iOS/Android)",
    heroImage: "assets/suzoki.png",
    figmaLink: "https://www.figma.com/proto/eXS2PGRh8YV0npNgeKcw3e/Figma-designs?page-id=223%3A184&type=design&node-id=232-195&viewport=351%2C266%2C0.13&t=QSStsCYCo4ysinTH-1&scaling=scale-down&starting-point-node-id=232%3A195&show-proto-sidebar=1&mode=design",
    deckLink: "assets/casestudy1.pdf",
    sections: [
      {
        title: "1. Project Overview & The Problem",
        content: "Users felt overwhelmed by long food delivery menus and got frustrated by hidden ingredient costs at checkout.<br><br><strong>Primary Persona:</strong> Kodama (25), a marketing agent living with roommates in Hiroshima City who wants healthy, customized Japanese meals (Sushi, Udon, Tofu) on a modest budget without spending excessive time navigating complex nested menus."
      },
      {
        title: "2. User Research & Core Pain Points",
        content: "Through discovery interviews and empathy mapping, 4 critical pain points were identified:<br>• <strong>Lack of Customization:</strong> Traditional delivery apps offer rigid pre-set meals with limited ingredient freedom.<br>• <strong>Quality & Freshness Concerns:</strong> Ambiguity regarding meal composition.<br>• <strong>Visual Mismatches:</strong> Delivered meals did not match misleading marketing photos.<br>• <strong>Menu Fatigue:</strong> Users experienced friction scrolling through endless vertical category lists."
      },
      {
        title: "3. Wireframing Goals & Thought Process",
        content: "<strong>Paper Wireframes:</strong> Explored multiple rapid sketches focusing on placing category pills (Sushi, Udon, Tofu, Tempura, Ramen) prominently at the top so users can reach preferred dishes with one tap.<br><br><strong>Digital Wireframes:</strong> Structured the ingredient selection sheet with explicit (+¥100) pricing tags next to each topping button, eliminating pricing ambiguity before users hit checkout."
      },
      {
        title: "4. Usability Study Findings (Round 1 & Round 2)",
        content: "I conducted two rounds of usability testing with 5 participants:<br>• <strong>Round 1:</strong> Participants were uncertain whether toppings were included in base pricing or cost extra, causing hesitation.<br>• <strong>Round 2:</strong> Adding top category filters reduced menu browsing time by over 30%. Introducing explicit live pricing (+¥100) on each button eliminated checkout surprises and enabled users to complete customized orders in under 60 seconds."
      },
      {
        title: "5. Accessibility & Key Takeaways",
        content: "• <strong>Accessibility:</strong> Ensured screen-reader compatibility with descriptive alt labels and high-contrast color hierarchies.<br>• <strong>Impact:</strong> Reminded me that testing with real users uncovers unexpected behavioral friction that designers cannot predict alone."
      }
    ]
  },

  elearning: {
    tag: "Google UX Specialization Course Case Study",
    title: "TEENAGER E-LEARNING PLATFORM",
    duration: "3-Week Design Exercise",
    role: "Information Architect & Lead UX Designer",
    tools: "Adobe XD, Miro, Google Workspace",
    platform: "Web & Tablet Responsive Platform",
    heroImage: "assets/elearning.png",
    figmaLink: "https://xd.adobe.com/view/36b5e057-eb1d-4808-b1ee-b4eb62d27ffa-63e6/",
    deckLink: "assets/casestudy2.pdf",
    sections: [
      {
        title: "1. Project Overview & The Problem",
        content: "High-school teenagers interested in coding workshops often face geographic barriers and high in-person bootcamp fees. However, traditional solo online video courses led to boredom and premature drop-off.<br><br><strong>Primary Persona:</strong> Darren Conner (15), a high school student in Birmingham, USA, who wanted to learn to code while having engaging conversations and collaborative support from friends."
      },
      {
        title: "2. User Research & Core Pain Points",
        content: "70% of participants expressed interest in interactive workshops rather than static lectures. Key pain points included:<br>• <strong>Boring & Isolated Content:</strong> Studying completely alone reduced motivation.<br>• <strong>Unclear Guidance:</strong> Lack of immediate feedback when encountering coding roadblocks.<br>• <strong>Social Recognition:</strong> Desire for a public student profile card to showcase completed milestone projects."
      },
      {
        title: "3. Wireframing Goals & Information Architecture",
        content: "<strong>Paper Wireframes:</strong> Prototyped structured catalog navigation and touch-accessible course grids.<br><br><strong>Digital Wireframes:</strong> Developed a dedicated student profile dashboard displaying enrolled courses and progress badges, alongside a streamlined course catalog with estimated duration badges."
      },
      {
        title: "4. Design Iterations: Dual-Pane Video & Live Chat",
        content: "Based on usability feedback, the screen was redesigned into a synchronized dual-pane layout:<br>• <strong>Left Pane:</strong> Structured video lesson player with closed captioning and progress markers.<br>• <strong>Right Pane:</strong> Real-time live classmate chat and a 1-click community mentor help button for instant query resolution."
      },
      {
        title: "5. Accessibility & Reflections on 'Featuritis'",
        content: "• <strong>Accessibility:</strong> Implemented large legible font sizes, 48px tap targets for tablet screens, and closed captions to keep students focused.<br>• <strong>What I Learned:</strong> Overcame 'featuritis' by prioritizing the core video player and peer chat experience before adding extraneous social bells and whistles."
      }
    ]
  }
};

function initCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = document.getElementById('modal-backdrop');
  const openBtns = document.querySelectorAll('.open-case-study');

  if (!modal || !modalContent) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-project');
      const data = CASE_STUDIES[key];

      if (data) {
        renderModal(data);
        open();
      }
    });
  });

  function renderModal(d) {
    const sectionsHtml = d.sections.map(s => `
      <div style="margin-bottom: 20px;">
        <h4 class="modal-section-title">${s.title}</h4>
        <p class="modal-p">${s.content}</p>
      </div>
    `).join('');

    modalContent.innerHTML = `
      <div class="caption" style="color: var(--orange); margin-bottom: 6px;">${d.tag}</div>
      <h3 class="modal-project-title">${d.title}</h3>

      <div class="modal-meta-grid">
        <div>
          <span class="meta-box-label">Duration</span>
          <div class="meta-box-val">${d.duration}</div>
        </div>
        <div>
          <span class="meta-box-label">Role</span>
          <div class="meta-box-val">${d.role}</div>
        </div>
        <div>
          <span class="meta-box-label">Tools</span>
          <div class="meta-box-val">${d.tools}</div>
        </div>
        <div>
          <span class="meta-box-label">Platform</span>
          <div class="meta-box-val">${d.platform}</div>
        </div>
      </div>

      <img src="${d.heroImage}" alt="${d.title}" class="modal-hero-img">

      <div>
        ${sectionsHtml}
      </div>

      <div class="modal-footer">
        <a href="${d.figmaLink}" target="_blank" rel="noopener noreferrer" class="btn-orange-sm">
          <span>Clickable Prototype</span>
          <span>↗</span>
        </a>
        <a href="${d.deckLink}" target="_blank" rel="noopener noreferrer" class="btn-outline-sm">
          <span>Slide Deck (PDF)</span>
          <span>↗</span>
        </a>
        <button class="btn-outline-sm inner-modal-close" style="margin-left: auto;">Close</button>
      </div>
    `;

    const innerClose = modalContent.querySelector('.inner-modal-close');
    if (innerClose) innerClose.addEventListener('click', close);
  }

  function open() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      close();
    }
  });
}

/* ==========================================================================
   3. RESUME MODAL
   ========================================================================== */
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  const closeBtn = document.getElementById('resume-close-btn');
  const backdrop = document.getElementById('resume-backdrop');
  const triggerBtns = document.querySelectorAll('.resume-trigger-btn');

  if (!modal) return;

  function openResume() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeResume() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResume();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeResume);
  if (backdrop) backdrop.addEventListener('click', closeResume);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeResume();
    }
  });
}
