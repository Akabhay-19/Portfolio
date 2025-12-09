import { Experience, Project, SkillCategory, Education, Leadership } from './types';
import { 
  Code, 
  Database, 
  Terminal, 
  Cpu, 
  Activity, 
  BarChart3, 
  ShieldCheck, 
  Users 
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Abhay Kumar",
  title: "Data Scientist & AI Engineer",
  email: "akabhay.official@gmail.com",
  phone: "+91 7807701961",
  linkedin: "linkedin.com/in/akabhayofficial",
  github: "github.com/Akabhay-19",
  summary: "Data Science graduate with practical experience building machine learning models, adaptive learning systems, automation workflows, and AI-powered web applications. Skilled in Python, data processing, graph databases, and engineering fast end-to-end prototypes using AI-assisted development tools such as Gemini, Codex, Antigravity, Flowise, Replit, and other vibe-coding environments. I thrive in creative, fast-iteration environments where AI is used as a core development partner."
};

export const EDUCATION: Education = {
  institution: "Indian Institute of Science Education and Research (IISER)",
  location: "Bhopal, MP",
  degree: "B.S., Data Science & Engineering",
  period: "2019 – 2024"
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Gyan AI",
    role: "AI Webapp Developer (Vibe Coding)",
    period: "Nov 2025 – Present",
    type: "Startup",
    description: [
      "Developing Gyan AI, a SaaS platform that helps schools and students identify learning gaps and receive personalized AI-generated guidance.",
      "Using Gemini LLM, Google AI Studio, Antigravity, Supabase and vibe-coding tools to rapidly prototype features and iterate at high velocity.",
      "Building adaptive learning flows that diagnose weaknesses and generate tailored explanations, exercises, and skill-repair sequences.",
      "Engineering end-to-end components including UI, backend logic, prompt pipelines, and real-time AI response systems.",
      "Designing a scalable multi-student architecture that supports progress tracking, dynamic difficulty adjustment, and automated content generation."
    ]
  },
  {
    company: "Click Automate",
    role: "AI Engineer & Partner",
    period: "Sep 2025 – Nov 2025",
    type: "Agency",
    description: [
      "Built advanced n8n automations to streamline marketing workflows, integrate third-party tools, and deliver hands-free operational systems for clients.",
      "Developed and shipped websites and AI-powered features using modern 'vibe coding' tools (AI-assisted code generation, rapid prototyping frameworks).",
      "Acted as a partner responsible for bringing in new clients, pitching automation solutions, and closing deals that aligned with agency offerings.",
      "Collaborated directly with clients to understand business needs and translate them into scalable automation and AI-driven solutions."
    ]
  },
  {
    company: "Vyas Edification (Bharat Brainz)",
    role: "Admission Partner & Data Analyst",
    period: "Jan 2025 – May 2025",
    type: "Startup",
    description: [
      "Analyzed student application and engagement metrics to identify high-potential leads and improve admission conversion strategies.",
      "Conducted product demos and onboarding for AI-driven educational platforms, translating technical features for non-technical audiences.",
      "Used feedback and analytics to refine learning content and outreach, driving higher engagement.",
      "Collaborated with product and academic teams to align admissions strategy with growth goals."
    ]
  },
  {
    company: "BudBlooms Consultancy Pvt. Ltd.",
    role: "Data Analyst Intern",
    period: "May 2021 – Jul 2021",
    type: "Internship",
    description: [
      "Monitored and analyzed real-time cryptocurrency market data to generate actionable insights.",
      "Developed predictive models using time-series techniques and machine learning for short-term trend forecasting.",
      "Cleaned and processed large datasets from exchange APIs using Python (Pandas, NumPy).",
      "Built interactive visualizations to communicate trends to stakeholders."
    ]
  },
  {
    company: "Amar Traders",
    role: "Chief Operations & Strategy Officer",
    period: "Apr 2020 – Mar 2021",
    type: "Corporate",
    description: [
      "Directed operations and market strategy, achieving a 30% increase in profitability during pandemic disruptions.",
      "Analysed sales data to optimize resource allocation and improve sales strategies.",
      "Managed vendor negotiations and supply chain logistics to maintain business continuity."
    ]
  },
  {
    company: "Self-Employed",
    role: "Insurance Advisor (PoSP)",
    period: "Jan 2018 – Dec 2024",
    type: "Self-Employed",
    description: [
      "Advised 200+ clients on tailored insurance solutions; improved retention via data-informed recommendations.",
      "Maintained structured client datasets and renewal workflows to streamline follow-ups."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Knowledge Graphs for Biomedical Research",
    subtitle: "BS Thesis | IISER Bhopal",
    period: "Jan 2024 – Apr 2024",
    tech: ["Neo4j", "Cypher", "Python", "Graph Embeddings", "ML"],
    points: [
      "Designed and implemented a knowledge-graph system integrating biomedical datasets to surface relationships between genes, proteins, and diseases.",
      "Used Neo4j and Cypher to construct and visualize graphs; built graph-embedding-based ML models to predict novel associations.",
      "Compared graph-based approaches to relational baselines; improved query efficiency and interpretability for researchers."
    ]
  },
  {
    title: "ML / Analytics Prototypes",
    subtitle: "Various Prototypes",
    period: "2021 - Present",
    tech: ["Python", "Flowise", "Replit", "Lovable", "RAG"],
    points: [
      "Built time-series forecasting models and dashboards for crypto market monitoring (BudBlooms).",
      "Rapid prototypes using AI-assisted coding tools to test LLM prompt flows and simple RAG setups (Flowise, Replit, Lovable)."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "AI-Assisted & Vibe Coding",
    skills: ["Gemini AI Studio", "Antigravity", "OpenAI Codex", "GitHub Copilot", "Flowise", "Replit", "N8n", "Supabase", "Lovable", "ChatGPT/Claude"],
    level: 95
  },
  {
    name: "Languages & Frameworks",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "FastAPI", "React"],
    level: 90
  },
  {
    name: "Datastores & Tools",
    skills: ["SQL", "Neo4j (Cypher)", "Git", "GitHub", "Jupyter", "VS Code"],
    level: 85
  },
  {
    name: "AI / ML Core",
    skills: ["Prompt Engineering", "RAG Basics", "Model Evaluation", "Time-series", "Graph Embeddings", "NLP"],
    level: 88
  },
  {
    name: "Business & Viz",
    skills: ["Matplotlib", "Seaborn", "Excel", "Google Workflow", "Stakeholder Comm", "Strategy Planning"],
    level: 80
  }
];

export const LEADERSHIP: Leadership[] = [
  {
    role: "Convenor & Team Lead",
    organization: "ENTHUZIA - IISER Bhopal Cultural Fest",
    period: "2022–2024",
    description: [
      "Led 80+ volunteers; managed budgeting, logistics, and events."
    ]
  },
  {
    role: "Tournament Director",
    organization: "Armageddon Gaming Tournament",
    period: "2024",
    description: [
      "End-to-end organization and execution."
    ]
  },
  {
    role: "Team Member",
    organization: "Research Symposium (DSE IISER Bhopal)",
    period: "2023",
    description: [
      "Contributed to organization and execution of the research symposium."
    ]
  }
];

export const NAV_LINKS = [
  { name: 'SYSTEM_STATUS', href: '#hero', icon: Activity },
  { name: 'DATA_LOGS', href: '#experience', icon: Terminal },
  { name: 'MODULES', href: '#projects', icon: Code },
  { name: 'CORE_SPECS', href: '#skills', icon: Cpu },
  { name: 'UPLINK', href: '#contact', icon: Users },
];