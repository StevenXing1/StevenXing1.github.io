/**
 * GitHub Profile README Generator for Haiyi Xing
 * Usage:
 *   - Node (write README.md):    node profile.js write
 *   - Node (print to console):   node profile.js
 *   - Browser (inject <pre>):    include this file and call renderToPage()
 */

const resumeData = {
  name: "Haiyi Xing",
  contact: {
    phone: "(+1) 626-241-0056",
    email: "haiyicareer@gmail.com",
    email2: "haxing@ucsd.edu",
  },
  resume: "resume.pdf",
  headline: "M.S. CS&E @ UC San Diego · AI/ML Research & Engineering",
  summary: [
    "Applied AI/ML researcher and engineer with experience spanning LLM prompting & evaluation, agents, fine-tuning/LoRA, and real-time systems.",
    "Strong track record in model evaluation, reasoning pipelines, and edge/real-time deployments."
  ],
  skills: {
    "LLM & Agents": ["Prompt Engineering & A/B Evaluation", "RAG", "LangChain", "MCP", "Hermes", "Dify", "LLM Benchmarking & Eval Harnesses", "Steering Vectors / Hidden-State Intervention"],
    "Training & Fine-Tuning": ["LoRA", "P-Tuning v2", "Reinforcement Learning", "DeepSpeed", "OpenCompass evaluation"],
    "Model Architectures": ["Transformers (BERT, GPT, Llama, ChatGLM)", "MoE", "Hyena (long-context)", "CNNs", "RNN/LSTM"],
    "Frameworks": ["PyTorch", "TensorFlow", "React", "Node.js", "Spring Boot"],
    "Programming": ["Python", "C++17", "Java", "Go", "JavaScript (ES6+)", "SQL (MySQL, PostgreSQL)", "HTML/CSS"],
    "Data & Databases": ["MySQL (schema design, query optimization)", "PostgreSQL", "Milvus (vector DB)"],
    "Workflow & Tooling": ["Git", "Docker", "Linux", "AWS", "OpenTelemetry", "WebAssembly"]
  },
  education: [
    {
      school: "University of California, San Diego",
      degree: "M.S. in Computer Science & Engineering",
      time: "Sep 2024 – June 2026",
      gpa: "GPA: 3.8/4.0",
      coursework: [
        "Deep Learning", "Machine Learning Algorithms", "Computer Vision", "Natural Language Processing",
        "Recommender System & Web Mining", "Convex Optimization Algorithms"
      ]
    },
    {
      school: "University of California, Irvine",
      degree: "B.S. in Computer Science & Engineering; Minor in Mathematics",
      time: "2020 – 2024",
      gpa: "GPA: 3.84/4.0",
      coursework: [
        "Artificial Intelligence", "Neural Networks & Deep Learning", "Data Mining",
        "Design & Analysis of Algorithms", "Principles of Operating Systems",
        "Linear Algebra", "Probability & Statistics", "Probabilistic Graphical Models"
      ]
    }
  ],
  experience: [
    {
      title: "Real-Time Neuro-Feedback Pipeline — Alzheimer's Edge Project",
      time: "02/2025 – 04/2026",
      github: "https://github.com/StevenXing1/NFB_artefact_removal",
      bullets: [
        "Re-engineered MATLAB EEG-feedback suite in C++17 → latency 270ms → 38ms (−86%).",
        "WebAssembly demo streaming 256Hz multi-channel EEG at 60fps under 5MB heap.",
        "CNN-UNet for artifact detection (F1 0.92) → +18dB SNR; reconstruction RMSE reduced to 0.06."
      ]
    },
    {
      title: "Yuanjing LLM Instruction-Prompting Intern — China Unicom",
      time: "07/2024 – 09/2024",
      bullets: [
        "A/B-tested 150+ prompts → +17% answer relevance, −12% hallucinations.",
        "Curated/labeled ~2.3M telecom QA pairs → perplexity 4.8 → 4.1 (−15%) after retraining.",
        "Built a Python/LangChain eval harness adopted across 3 model-ops teams."
      ]
    },
    {
      title: "Software Development Engineer Intern — Lenovo",
      time: "08/2023 – 10/2023",
      bullets: [
        "AI Customer Service (BERT retrieval + ChatGLM + LangChain) covering ~80% device issues.",
        "Intent engine (LogReg + Gradient Boosting) → top-1 F1 78% → 92%.",
        "Led an ML-in-Production workshop for 30+ engineers; materials adopted into the onboarding curriculum."
      ]
    },
    {
      title: "Alibaba Global Dreamer Fellow — Alibaba",
      time: "07/2023 – 08/2023",
      bullets: [
        "Selected ~50 fellows; shadowed Taobao/Tmall/Cainiao/AliCloud.",
        "Threat-model brief (personalization vs fraud) adopted by platform-security.",
        "Gave 'Future of AI in Commerce' talk to 200+; top-3 speaker."
      ]
    },
    {
      title: "Full-Stack Engineering Intern — Yotop Software Tech",
      time: "06/2020 – 09/2020",
      bullets: [
        "Interactive heat-map dashboard for public-opinion monitoring.",
        "Back-end to Spring Boot + MyBatis → latency 380ms → 120ms (−68%).",
        "Rebuilt Vue 3 SPA → better UX & load time."
      ]
    },
    {
      title: "Learning Assistant — UC Irvine (ICS 6D: Discrete Mathematics for Computer Science)",
      time: "09/2021 – 12/2021",
      bullets: [
        "Led weekly discussion sections covering Boolean algebra, logic, and discrete math concepts.",
        "Held regular office hours to provide one-on-one academic support and guidance.",
        "Assisted students with problem-solving strategies and exam preparation."
      ]
    }
  ],
  research: [
    {
      title: "AWS Cloud-Native Movie Search Engine",
      time: "06/2026 – 07/2026",
      github: "https://github.com/StevenXing1/movie_search_engine",
      bullets: [
        "Architected and deployed a serverless AWS movie discovery platform using OpenSearch, Lambda, API Gateway, and Bedrock, indexing 5,000+ movie records with custom search analyzers.",
        "Secure AWS4Auth-based backend APIs, sub-60ms retrieval, and AI-generated contextual plot summaries powered by Claude."
      ]
    },
    {
      title: "Conductor App — Full-Stack Software Engineer",
      time: "09/2025 – 01/2026",
      github: "https://github.com/StevenXing1/conductor_react",
      bullets: [
        "Built and shipped core attendance tracking and meeting management features for a multi-role academic coordination platform used by students, TAs, and instructors.",
        "Designed and optimized PostgreSQL relational schemas and queries, ensuring data consistency, granular role-based access control (RBAC), and long-term scalability.",
        "Led end-to-end testing (E2E + integration) and validated system robustness under realistic academic usage scenarios.",
        "Instrumented production monitoring using OpenTelemetry with SigNoz, tracking latency, errors, and service-level metrics to support debugging and performance analysis."
      ]
    },
    {
      title: "Xpenz: Expense Tracker",
      time: "09/2025 – 12/2025",
      github: "https://github.com/StevenXing1/xpenz-expense-tracker",
      bullets: [
        "Built full-stack expense tracker with React, Node.js, Express, and PostgreSQL featuring user authentication, budget management, and real-time transaction monitoring with interactive data visualizations.",
        "Architected RESTful API with JWT authentication and designed normalized database schema with 5+ tables, implementing CRUD operations and secure data persistence."
      ]
    },
    {
      title: "Latent Reasoning Steering for LLMs",
      time: "12/2024 – 12/2025",
      github: "https://github.com/StevenXing1/Soft-thinking-and-fractional-reasoning",
      bullets: [
        "Designed a latent-space reasoning control method: computed steering vectors (h_soft − h_normal) and applied layer-level hidden-state interventions with scaling coefficients to modulate reasoning depth at inference time.",
        "Evaluated the approach on AIME 2024/2025 and GSM-style math benchmarks, analyzing accuracy trade-offs across soft-thinking, no-thinking, and steered inference modes.",
        "Built an evaluation and ablation pipeline to compare pass@1 accuracy, log-likelihood trends, and sampling effects across reasoning strategies."
      ]
    },
    {
      title: "Catastrophic-Forgetting Study in Colab with Google",
      time: "12/2024 – 12/2025",
      bullets: [
        "LoRA-tuned Llama & Mistral: ≤4pp drop vs −12pp with full training.",
        "Benchmarked Qwen/Llama/Mistral on OpenCompass; scaling insights (70B retains 95%+, 7B loses up to 8% F1)."
      ]
    },
    {
      title: "NAPLEX LLM Benchmark — Pierre Baldi Lab",
      time: "09/2023 – 12/2023",
      bullets: [
        "Benchmarked GPT-4/3.5, Llama-2 (7B–70B), Mistral-7B on 225 official NAPLEX Qs.",
        "GPT-4 hit 87% accuracy (only model above 75% licensure bar).",
        "Quantified chat fine-tuning and scale effects (Llama-2-70B-chat 48% vs. 33% base; accuracy 12% → 48% from 7B → 70B).",
        "Co-authored bioRxiv preprint; informs pharmacy-AI curriculum."
      ]
    },
    {
      title: "Genomic-Sequence Health-Risk Modeling — Jing Zhang Lab (UCI)",
      time: "03/2023 – 10/2023",
      bullets: [
        "Pipelines from chromosomal sequences to health-risk scores.",
        "ResNet + Transformer hybrids → ~+5pp ROC-AUC; −30% inference time.",
        "Hyena long-sequence models → −40% GPU mem; 2× batch size."
      ]
    },
    {
      title: "Lathe-Monitoring System Team Lead — Pierre Baldi Lab",
      time: "09/2022 – 04/2023",
      github: "https://github.com/StevenXing1/Manual-Lathe-monitoring-system",
      bullets: [
        "Raspberry Pi + PyTorch for real-time operator safety.",
        "Lightweight CNNs; fused vibration/torque → 95% alert precision <100ms.",
        "Interactive teach-and-warn UI adopted in machining safety course."
      ]
    }
  ],
  openSource: [
    {
      name: "Plot → Animated Video Agent",
      url: "https://github.com/StevenXing1/Video-agent",
      tech: "Python · LLM Agents · Manim",
      desc: "Turns a novel-style story plot into a narrated Manim explainer video: parses the plot into structured story beats, generates a storyboard and Manim script, and stitches the final MP4."
    },
    {
      name: "AI Customer Service Platform",
      url: "https://github.com/StevenXing1/AI-agent",
      tech: "Python · FastAPI · Sentence Transformers",
      desc: "Fully runnable MVP customer-service system: semantic-search Q&A over a knowledge base, encoder fine-tuning scripts, StackExchange data import, and a chat UI."
    },
    {
      name: "Smart Ride-Hailing Dynamic Pricing",
      url: "https://github.com/StevenXing1/Smart-Ride-Hailing-Dynamic-Pricing-System",
      tech: "Python · Reinforcement Learning",
      desc: "Real-time dynamic pricing system simulating Uber/Didi strategies — RL-optimized pricing from supply-demand, time, weather, and location, with demand heatmaps and a scenario simulator."
    },
    {
      name: "LLM Medical Transcription",
      url: "https://github.com/StevenXing1/LLM-Medical-transcription",
      tech: "Python · LLMs",
      desc: "LLM pipeline for processing and analyzing medical transcriptions."
    },
    {
      name: "OpenCompass LLM Testing",
      url: "https://github.com/StevenXing1/opencompass_LLM_testing",
      tech: "Python · OpenCompass",
      desc: "LLM evaluation experiments and benchmarking harnesses built on OpenCompass."
    },
    {
      name: "EEG Artifact Removal (NFB)",
      url: "https://github.com/StevenXing1/NFB_artefact_removal",
      tech: "Python · Deep Learning · EEG",
      desc: "Muscle-artifact removal for EEG: predicts ICA-cleaned channels from 30-channel artefact-laden input, targeting gamma-band inter-hemispheric coherence."
    }
  ],
  publications: [
    'Xing, H.* et al. "AI and Veterinary Medicine: Evaluating Large Language Models on the North American Veterinary Licensing Examination." FLLM 2023. IEEE. DOI: 10.1109/FLLM.2023.10375414.',
    'Xing, H.* et al. "Large Language Models on the NAPLEX: A Comparative Benchmark." Pharmacy Practice (in press, 2024). Preprint: bioRxiv 10.1101/2023.12.06.570434.'
  ],
  social: {
    github: "https://github.com/StevenXing1",
    linkedin: "https://www.linkedin.com/in/haiyi-xing-76a36b220",
    email: "haxing@ucsd.edu"
  }
};

// --------- Modern Website Rendering Functions ----------

// Render content to the website
function renderWebsite() {
  // Update hero section
  document.getElementById('name').textContent = resumeData.name;
  document.getElementById('headline').textContent = resumeData.headline;
  document.getElementById('summary').textContent = resumeData.summary.join(' ');
  
  // Render social links
  renderSocialLinks();
  
  // Render skills
  renderSkillsSection();
  
  // Render education
  renderEducationSection();
  
  // Render experience
  renderExperienceSection();
  
  // Render research
  renderResearchSection();

  // Render open-source projects
  renderOpenSourceSection();

  // Render publications
  renderPublicationsSection();
  
  // Render contact
  renderContactSection();
  
  // Add scroll effect to navbar
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function renderSocialLinks() {
  const container = document.getElementById('social-links');
  const links = [];
  
  if (resumeData.social.github) {
    links.push(`<a href="${resumeData.social.github}" target="_blank" rel="noopener" title="GitHub"><i class="fab fa-github"></i></a>`);
  }
  if (resumeData.social.linkedin) {
    links.push(`<a href="${resumeData.social.linkedin}" target="_blank" rel="noopener" title="LinkedIn"><i class="fab fa-linkedin"></i></a>`);
  }
  if (resumeData.contact.email) {
    links.push(`<a href="mailto:${resumeData.contact.email}" title="Email"><i class="fas fa-envelope"></i></a>`);
  }
  if (resumeData.resume) {
    links.push(`<a href="${resumeData.resume}" target="_blank" rel="noopener" class="resume-btn"><i class="fas fa-file-arrow-down"></i> Resume</a>`);
  }

  container.innerHTML = links.join('');
}

function renderSkillsSection() {
  const container = document.getElementById('skills-container');
  const skillsHTML = Object.entries(resumeData.skills).map(([category, skills]) => `
    <div class="skill-category">
      <h3>${category}</h3>
      <div class="skill-tags">
        ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
  
  container.innerHTML = skillsHTML;
}

function renderEducationSection() {
  const container = document.getElementById('education-container');
  const educationHTML = resumeData.education.map(edu => `
    <div class="education-item">
      <div class="education-header">
        <div class="education-school">${edu.school}</div>
        <div class="education-degree">${edu.degree}</div>
        <div class="education-info">
          <span><i class="far fa-calendar"></i> ${edu.time}</span>
          ${edu.gpa ? `<span><i class="fas fa-award"></i> ${edu.gpa}</span>` : ''}
        </div>
      </div>
      ${edu.coursework && edu.coursework.length ? `
        <div class="education-coursework">
          <strong>Relevant Coursework:</strong>
          <span>${edu.coursework.join(', ')}</span>
        </div>
      ` : ''}
    </div>
  `).join('');
  
  container.innerHTML = educationHTML;
}

function renderExperienceSection() {
  const container = document.getElementById('experience-container');
  
  // Define which experiences have detail pages
  const detailPages = {
    "Real-Time Neuro-Feedback Pipeline — Alzheimer's Edge Project": "experience-neuro-feedback.html",
    "Yuanjing LLM Instruction-Prompting Intern — China Unicom": "experience-china-unicom.html",
    "Software Development Engineer Intern — Lenovo": "experience-lenovo.html",
    "Alibaba Global Dreamer Fellow — Alibaba": "experience-alibaba.html",
    "Full-Stack Engineering Intern — Yotop Software Tech": "experience-yotop.html"
  };
  
  const experienceHTML = resumeData.experience.map(exp => {
    const hasDetailPage = detailPages[exp.title];
    const titleHTML = hasDetailPage 
      ? `<a href="${hasDetailPage}" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
           ${exp.title}
           <i class="fas fa-external-link-alt" style="font-size: 0.875rem; color: var(--primary-color);"></i>
         </a>`
      : exp.title;

    const githubHTML = exp.github ? `
        <a href="${exp.github}" target="_blank" rel="noopener" title="View on GitHub" style="margin-left: 0.5rem; color: var(--primary-color); font-size: 0.9rem; text-decoration: none;">
          <i class="fab fa-github"></i>
        </a>` : '';

    return `
      <div class="timeline-item">
        <div class="timeline-title">${titleHTML}${githubHTML}</div>
        <div class="timeline-date">
          <i class="far fa-calendar"></i>
          ${exp.time}
        </div>
        <div class="timeline-content">
          <ul>
            ${exp.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
          </ul>
          ${hasDetailPage ? `
            <div style="margin-top: 1rem;">
              <a href="${hasDetailPage}" style="color: var(--primary-color); text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 0.5rem;">
                <span>View Detailed Project Information</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
  
  container.innerHTML = experienceHTML;
}

function renderResearchSection() {
  const container = document.getElementById('research-container');
  const researchHTML = resumeData.research.map(research => `
    <div class="timeline-item">
      <div class="timeline-title">${research.title}${research.github ? `
        <a href="${research.github}" target="_blank" rel="noopener" title="View on GitHub" style="margin-left: 0.5rem; color: var(--primary-color); font-size: 0.9rem; text-decoration: none;">
          <i class="fab fa-github"></i>
        </a>` : ''}</div>
      <div class="timeline-date">
        <i class="far fa-calendar"></i>
        ${research.time}
      </div>
      <div class="timeline-content">
        <ul>
          ${research.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
  
  container.innerHTML = researchHTML;
}

function renderOpenSourceSection() {
  const container = document.getElementById('opensource-container');
  if (!container || !resumeData.openSource) return;
  const projectsHTML = resumeData.openSource.map(project => `
    <div class="skill-category">
      <h3>
        <a href="${project.url}" target="_blank" rel="noopener" style="color: inherit; text-decoration: none;">
          ${project.name} <i class="fab fa-github" style="font-size: 0.9rem;"></i>
        </a>
      </h3>
      <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.75rem;">${project.desc}</p>
      <div class="skill-tags">
        ${project.tech.split(' · ').map(t => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
  container.innerHTML = projectsHTML;
}

function renderPublicationsSection() {
  const container = document.getElementById('publications-container');
  const publicationsHTML = resumeData.publications.map(pub => `
    <li class="publication-item">
      <p>${pub}</p>
    </li>
  `).join('');
  
  container.innerHTML = publicationsHTML;
}

function renderContactSection() {
  const container = document.getElementById('contact-container');
  const contactItems = [];
  
  if (resumeData.contact.email) {
    contactItems.push(`
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <h3>Email</h3>
        <a href="mailto:${resumeData.contact.email}">${resumeData.contact.email}</a>
        ${resumeData.contact.email2 ? `<br><a href="mailto:${resumeData.contact.email2}">${resumeData.contact.email2}</a>` : ''}
      </div>
    `);
  }

  if (resumeData.contact.phone) {
    contactItems.push(`
      <div class="contact-item">
        <i class="fas fa-phone"></i>
        <h3>Phone</h3>
        <a href="tel:${resumeData.contact.phone}">${resumeData.contact.phone}</a>
      </div>
    `);
  }
  
  if (resumeData.social.github) {
    contactItems.push(`
      <div class="contact-item">
        <i class="fab fa-github"></i>
        <h3>GitHub</h3>
        <a href="${resumeData.social.github}" target="_blank" rel="noopener">View Profile</a>
      </div>
    `);
  }
  
  if (resumeData.social.linkedin) {
    contactItems.push(`
      <div class="contact-item">
        <i class="fab fa-linkedin"></i>
        <h3>LinkedIn</h3>
        <a href="${resumeData.social.linkedin}" target="_blank" rel="noopener">Connect</a>
      </div>
    `);
  }
  
  container.innerHTML = contactItems.join('');
}

// Initialize the website when DOM is loaded (browser only)
if (typeof document !== "undefined") {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderWebsite);
  } else {
    renderWebsite();
  }
}

// --------- Legacy Markdown Generation (for README) ----------

const esc = (s) => String(s || "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const badge = (label, message) =>
  `![${label}](https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(message)}-informational?style=flat)`;

const codeBadge = (name) => `\`${name}\``;

function renderSkills(skills) {
  const lines = [];
  for (const [k, arr] of Object.entries(skills)) {
    // show compact chips
    const chips = arr.map(codeBadge).join(" • ");
    lines.push(`- **${k}:** ${chips}`);
  }
  return lines.join("\n");
}

function renderBullets(items) {
  return items.map((b) => `  - ${b}`).join("\n");
}

function renderTimeline(items) {
  return items.map((it) => `**${it.title}**  \n*${it.time}*\n${renderBullets(it.bullets)}\n`).join("\n");
}

function renderEducation(edu) {
  return edu.map((e) =>
    `**${e.school}** — ${e.degree}  \n*${e.time}*  \n${e.gpa ? `${e.gpa}  \n` : ""}` +
    (e.coursework?.length ? `**Relevant Coursework:** ${e.coursework.join(", ")}` : "")
  ).join("\n\n");
}

function renderHeader() {
  const nameLine = `# ${resumeData.name}`;
  const headline = resumeData.headline ? `\n**${resumeData.headline}**\n` : "\n";
  const contacts = [
    resumeData.contact.email ? `[Email](mailto:${resumeData.contact.email})` : null,
    resumeData.social.github ? `[GitHub](${resumeData.social.github})` : null,
    resumeData.social.linkedin ? `[LinkedIn](${resumeData.social.linkedin})` : null,
    resumeData.social.scholar ? `[Google Scholar](${resumeData.social.scholar})` : null
  ].filter(Boolean).join(" • ");

  const techBadges = [
    badge("Python", "PyTorch"),
    badge("LLMs", "LoRA"),
    badge("Eval", "OpenCompass"),
    badge("Framework", "TensorFlow"),
    badge("Runtime", "DeepSpeed"),
    badge("DB", "MySQL"),
    badge("Vector", "Milvus")
  ].join(" ");

  return `${nameLine}\n${headline}\n${contacts}\n\n${techBadges}\n`;
}

function renderSummary() {
  if (!resumeData.summary?.length) return "";
  return `### About Me\n${resumeData.summary.map((s) => `- ${s}`).join("\n")}\n`;
}

function renderPublications() {
  if (!resumeData.publications?.length) return "";
  return `### Publications\n${resumeData.publications.map((p) => `- ${p}`).join("\n")}\n`;
}

function renderFooter() {
  return [
    "\n---",
    "<sub>Last updated from resume. For opportunities or collaboration, feel free to reach out.</sub>"
  ].join("\n");
}

function generateMarkdown() {
  return [
    renderHeader(),
    "### Skills",
    renderSkills(resumeData.skills),
    "\n### Education",
    renderEducation(resumeData.education),
    "\n### Experience (Selected)",
    renderTimeline(resumeData.experience),
    "\n### Research (Selected)",
    renderTimeline(resumeData.research),
    renderPublications(),
    "\n### Contact",
    `- Email: ${resumeData.contact.email}`,
    resumeData.contact.phone ? `- Phone: ${resumeData.contact.phone}` : "",
    renderFooter()
  ].filter(Boolean).join("\n");
}

// --------- Node / Browser Entrypoints ----------
function writeReadmeIfNode() {
  if (typeof process !== "undefined" && process?.argv) {
    const action = process.argv[2] || "print";
    const md = generateMarkdown();
    if (action === "write") {
      try {
        const fs = require("fs");
        fs.writeFileSync("README.md", md, "utf8");
        console.log("README.md written successfully.");
      } catch (e) {
        console.error("Failed to write README.md:", e.message);
      }
    } else {
      console.log(md);
    }
  }
}
writeReadmeIfNode();

// For browser usage (e.g., drop into a GitHub Pages index.html for preview)
function renderToPage(containerId = null) {
  const md = generateMarkdown();
  const pre = document.createElement("pre");
  pre.style.whiteSpace = "pre-wrap";
  pre.textContent = md;
  if (containerId && document.getElementById(containerId)) {
    document.getElementById(containerId).appendChild(pre);
  } else {
    document.body.appendChild(pre);
  }
}

// Export for flexibility
if (typeof module !== "undefined") {
  module.exports = { resumeData, generateMarkdown, renderToPage };
}
