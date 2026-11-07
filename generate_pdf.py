import subprocess

ps_content = """%!PS-Adobe-3.0
%%Title: Resume - Kousic Srinivasan
%%Creator: Antigravity IDE
%%Pages: 1
%%BoundingBox: 0 0 612 792
%%DocumentData: Clean7Bit
%%Orientation: Portrait
%%EndComments

/Times-Bold findfont 17 scalefont setfont
306 746 moveto
(KOUSIC SRINIVASAN) dup stringwidth pop 2 div neg 0 rmoveto show

/Helvetica findfont 8 scalefont setfont
306 732 moveto
(Thanjavur, Tamil Nadu   |   +91-7540054426   |   kousic.it@gmail.com   |   linkedin.com/in/kousic-srinivas-b6876477   |   github.com/kousic17) dup stringwidth pop 2 div neg 0 rmoveto show

% Section function
/draw_section {
    /title exch def
    /y exch def
    
    0.93 0.93 0.93 setgray
    54 y 13 sub 504 15 rectfill
    
    0.2 0.2 0.2 setgray
    54 y 13 sub 504 15 rectstroke
    
    /Helvetica-Bold findfont 9 scalefont setfont
    0 setgray
    58 y 2 sub moveto
    title show
} def

% Draw sections
715 (PROFESSIONAL SUMMARY) draw_section

/Helvetica findfont 8.5 scalefont setfont
54 689 moveto (IT engineering graduate (B.Tech IT) transitioning into UX/UI Design. Combines a solid understanding of front-end web layouts (HTML,) show
54 678 moveto (CSS, JavaScript) with practical experience in Software Testing (QA) and Business Operations. Skilled at identifying interface bugs,) show
54 667 moveto (mapping out clear user steps, and applying user-centered design frameworks from the Google UX Design Certificate to build clean,) show
54 656 moveto (functional digital products.) show

640 (SKILLS) draw_section
/Helvetica-Bold findfont 8.5 scalefont setfont
54 615 moveto (UX/UI Design: ) show
/Helvetica findfont 8.5 scalefont setfont
(Wireframing, High-Fidelity Mockups, Prototyping, User Flow Design, Usability Testing, User Research.) show
54 602 moveto 
/Helvetica-Bold findfont 8.5 scalefont setfont
(Tools & Code: ) show
/Helvetica findfont 8.5 scalefont setfont
(Figma, JIRA Bug Tracking, HTML5, CSS3, JavaScript.) show

585 (WORK EXPERIENCE) draw_section

% Hamly
54 559 moveto
/Helvetica-Bold findfont 8.5 scalefont setfont
(HAMLY BUSINESS SOLUTIONS | Process Associate) show
558 559 moveto
(Mar 2024 - Dec 2025) dup stringwidth pop neg 0 rmoveto show

/Helvetica findfont 8.5 scalefont setfont
62 546 moveto (-  Managed and checked large amounts of medical billing data to ensure all records were accurate and complete.) show
62 535 moveto (-  Mapped out clear, step-by-step instructions for internal software workflows to make processing faster for the team.) show
62 524 moveto (-  Found layout issues and slow points in our internal tools and shared feedback to improve the system's usability.) show

% Ubisoft
54 507 moveto
/Helvetica-Bold findfont 8.5 scalefont setfont
(UBISOFT INDIA | Junior Game Tester (QA)) show
558 507 moveto
(Nov 2020 - Nov 2021) dup stringwidth pop neg 0 rmoveto show

/Helvetica findfont 8.5 scalefont setfont
62 494 moveto (-  Tested menus, screens, and settings to find layout mistakes, broken buttons, and confusing navigation loops.) show
62 483 moveto (-  Wrote detailed bug reports in JIRA to show developers exactly where the interface was breaking and how to fix it.) show
62 472 moveto (-  Reviewed first-time user tutorials and onboarding screens to suggest ways to make choices clearer and faster for players.) show

% Fusion Practices
54 455 moveto
/Helvetica-Bold findfont 8.5 scalefont setfont
(FUSION PRACTICES | Software Development Trainee) show
558 455 moveto
(Sep 2018 - Apr 2019) dup stringwidth pop neg 0 rmoveto show

/Helvetica findfont 8.5 scalefont setfont
62 442 moveto (-  Designed wireframes and interactive mockups for internal employee dashboards to simplify company workflows.) show
62 431 moveto (-  Created clean user interface layouts, icons, and visual branding assets for a variety of corporate client projects.) show
62 420 moveto (-  Built responsive web layouts focusing on simple navigation and highly intuitive user experiences.) show

403 (PROJECTS (Google UX Specialization Course Case Studies)) draw_section

% Suzoki
54 378 moveto
/Helvetica-Bold findfont 8.5 scalefont setfont
("Suzoki" - Food Customization App) show
558 378 moveto
(2-Week Design Exercise) dup stringwidth pop neg 0 rmoveto show

/Helvetica-Bold findfont 8.5 scalefont setfont
62 365 moveto (-  The Problem: ) show
/Helvetica findfont 8.5 scalefont setfont
(Users felt overwhelmed by long food delivery menus and got frustrated by hidden ingredient costs at checkout.) show

/Helvetica-Bold findfont 8.5 scalefont setfont
62 354 moveto (-  The Fix: ) show
/Helvetica findfont 8.5 scalefont setfont
(Built a clean top navigation bar to switch categories instantly and added clear pricing (+Y100) next to button.) show

/Helvetica-Bold findfont 8.5 scalefont setfont
62 343 moveto (-  What I Made: ) show
/Helvetica findfont 8.5 scalefont setfont
(Created paper sketches, digital layouts, and a clickable interactive prototype in Figma.) show

% Teenager E-Learning
54 326 moveto
/Helvetica-Bold findfont 8.5 scalefont setfont
(Teenager E-Learning Platform) show
558 326 moveto
(3-Week Design Exercise) dup stringwidth pop neg 0 rmoveto show

/Helvetica-Bold findfont 8.5 scalefont setfont
62 313 moveto (-  The Problem: ) show
/Helvetica findfont 8.5 scalefont setfont
(Students learning to code online got bored quickly and quit the platform when studying completely by themselves.) show

/Helvetica-Bold findfont 8.5 scalefont setfont
62 302 moveto (-  The Fix: ) show
/Helvetica findfont 8.5 scalefont setfont
(Redesigned the screen to show the video lesson on one side and a live chat window with classmates on the other side.) show

/Helvetica-Bold findfont 8.5 scalefont setfont
62 291 moveto (-  What I Learned: ) show
/Helvetica findfont 8.5 scalefont setfont
(Kept the project simple by focus-building the main video player first before adding extra social features.) show

274 (EDUCATION & CREDENTIALS) draw_section

54 249 moveto
/Helvetica-Bold findfont 8.5 scalefont setfont
(Google UX Design Professional Certificate | Coursera) show
558 249 moveto
(Sep 2023) dup stringwidth pop neg 0 rmoveto show

54 235 moveto
/Helvetica-Bold findfont 8.5 scalefont setfont
(B.Tech in Information Technology | SASTRA Deemed University, Thanjavur) show
558 235 moveto
(2014 - 2018) dup stringwidth pop neg 0 rmoveto show

showpage
%%EOF
"""

with open("resume.ps", "w") as f:
    f.write(ps_content)

subprocess.run(["ps2pdf", "resume.ps", "assets/resume.pdf"], check=True)
print("Updated assets/resume.pdf cleanly!")
