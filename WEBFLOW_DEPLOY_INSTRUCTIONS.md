# How to Apply Localhost Changes to https://k5-portfolio.webflow.io/

Webflow does not allow direct file uploads (like FTP or Git push) to `.webflow.io` domains because it is a closed visual builder. To bring your new localhost portfolio to `https://k5-portfolio.webflow.io/`, use one of the two methods below:

---

## Method 1: Update Native Elements in Webflow Designer (Recommended for Webflow)

Since your existing Webflow site already has your core visual elements (Bebas Neue fonts, 50/50 layout, navbar), you can apply the revamp directly in Webflow Designer in under 5 minutes:

### 1. Hero Section Headline
- Change the main heading text to:
  **`SOLVING USER FRICTION. SHAPING HIGH-IMPACT PRODUCT INTERFACES.`**
- Update the subtitle below it:
  `UI/UX Designer & Front-End Developer with a background in Software QA. Crafting friction-free digital products backed by user research and structured design systems.`

### 2. Remove Philosophy Delay
- Delete or move the philosophy quote block from directly below the hero down to the **About** section at the bottom.
- This allows recruiters to immediately see your case studies without scrolling through textbook quotes.

### 3. Add Custom CSS (Pulse Dot + Scroll Bar)
In Webflow:
1. Go to **Project Settings** > **Custom Code**.
2. In the **Head Code** field, paste:
```html
<style>
  /* Signature Pulse Dot */
  .dot.pulse {
    width: 10px;
    height: 10px;
    background: #e65c00;
    border-radius: 50%;
    display: inline-block;
    box-shadow: 0 0 0 0 rgba(230, 92, 0, 0.7);
    animation: pulse-orange 1.8s infinite;
  }
  @keyframes pulse-orange {
    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(230, 92, 0, 0.7); }
    70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(230, 92, 0, 0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(230, 92, 0, 0); }
  }

  /* Top Scroll Progress Bar */
  #scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: #e65c00;
    z-index: 9999;
    transition: width 0.1s linear;
  }
</style>
```

### 4. Update Work Experience Section (From Latest Resume)
Update your timeline blocks with your latest roles:

- **HAMLY BUSINESS SOLUTIONS** | *Process Associate* (Mar 2024 – Dec 2025)
  - Managed customer operations and verified digital documentation workflows with 99%+ accuracy.
  - Mapped software friction points and provided usability feedback to technical teams.
  - Collaborated across internal departments to streamline day-to-day operations.

- **UBISOFT INDIA** | *Junior Game Tester (QA)* (Nov 2020 – Nov 2021)
  - Executed structured black-box and exploratory testing on AAA titles.
  - Documented over 250+ UI, visual, and logic defects using JIRA.
  - Evaluated player onboarding and HUD clarity to reduce cognitive friction.

- **FUSION PRACTICES** | *Software Development Trainee* (Sep 2018 – Apr 2019)
  - Designed wireframes and high-fidelity mockups for internal web tools using Figma.
  - Translated approved wireframes into responsive front-end pages using HTML5, CSS3, and JavaScript.

- **EDUCATION & CERTIFICATIONS**
  - Google UX Design Professional Certificate (Sep 2023)
  - B.Tech in Information Technology — SASTRA Deemed University (2014 – 2018)

### 5. Update Project Case Studies
- **Suzoki Food Customization App**:
  - Add Figma link: [Figma Prototype](https://www.figma.com/proto/eXS2PGRh8YV0npNgeKcw3e/Figma-designs?embed_host=share&kind=&node-id=232-195&page-id=223%3A184&scaling=scale-down&starting-point-node-id=232%3A195&t=ma0XHmAlpeKYIJDC-1&type=design&viewport=297%2C132%2C0.13)
- **Teenager E-Learning Platform**:
  - Add Adobe XD link: [Adobe XD Prototype](https://xd.adobe.com/view/36b5e057-eb1d-4808-b1ee-b4eb62d27ffa-63e6/)

---

## Method 2: Full Custom Code Embed into Webflow

If you prefer to load the entire localhost page directly inside Webflow:
1. Open your Webflow Project Designer.
2. In the left panel, add an **Embed** element (under Components/Advanced).
3. Paste the contents of `index.html` (with styles and scripts inlined).
4. Set the embed element width to `100%` and publish.

---

## Alternative: Free Instant Public URL (Netlify / GitHub Pages)

If you need a live link immediately to share with recruiters while you update Webflow:
- You can deploy this exact directory to **Netlify** (free) with drag-and-drop at [app.netlify.com/drop](https://app.netlify.com/drop) or using the Netlify CLI.
- It will give you an instant live URL like `https://kousic-portfolio.netlify.app` with all interactive slide decks, resume downloads, and working prototype links.
