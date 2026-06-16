// Smooth scroll — allow external links to pass through
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const href = anchor.getAttribute('href');
        if (!href.startsWith('#')) return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });
});

// Scroll-triggered fade-in
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll(
        '.experience-item, .project-item, .skill-category, .education-item, .cert-item'
    ).forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const translations = {
    en: {
        "nav-about":          "About",
        "nav-projects":       "Projects",
        "nav-experience":     "Experience",
        "nav-skills":         "Skills",
        "nav-education":      "Education",
        "nav-certifications": "Certifications",
        "nav-portfolio":      "Portfolio",

        "hero-title":   "Business Analyst",
        "hero-tagline": "MOA · AMOA | Agile Delivery | BPMN",

        "section-about":   "About Me",
        "summary-text": "Business Analyst transitioning from 4+ years in software engineering (insurance, e-commerce), with a master's in Innovative Information Systems. Skilled in requirements elicitation, process mapping, stakeholder management, gap analysis and data visualisation. Experienced in agile environments with strong analytical skills. Bilingual English/French (C2/B2) and open to opportunities across Europe.",

        "section-projects": "Key Projects",

        "badge-portfolio": "Portfolio Project",

        "project-brso-title": "BRSO: Loan Approval Process Digitisation",
        "project-brso-role":  "Business Analyst - MOA Simulation | 2026",
        "project-brso-d1": "Produced a full BA documentation suite for a simulated banking digitisation mandate: Problem Statement, Stakeholder Map, 3 RACI matrices (As-Is, Project, To-Be), BRD, Gap Analysis, As-Is and To-Be BPMN process models, and FRD",
        "project-brso-d2": "Identified 11 capability gaps mapped to 14 business requirements across 2 delivery sprints using MoSCoW prioritisation",
        "project-brso-d3": "Modelled process improvement: 15-day manual approval time reduced to <4 days; 23% data entry error rate eliminated through automated loan file creation",
        "project-brso-d4": "Applied full MOA methodology: stakeholder mapping (Power/Interest grid), requirements elicitation, BRD → Gap Analysis → Functional Specification → Sprint Planning.",
        "project-brso-link": "<i class=\"fas fa-external-link-alt\"></i> View full project documentation",
        "metric-approval": "Approval time",
        "metric-error":    "Error rate",
        "metric-gaps":     "Gaps identified",

        "project-auto-title": "Internal Automation Tool",
        "project-auto-role":  "Project Lead & Developer - LTIMindtree",
        "project-auto-date":  "4–5 months",
        "project-auto-d1": "Identified a repetitive manual process consuming significant team effort and initiated the idea to automate it",
        "project-auto-d2": "Mapped the As-Is and future-state processes using Bizagi (BPMN), drafted a formal proposal, and pitched it to the Team Leader and Project Manager",
        "project-auto-d3": "Formed and managed a team of 4 to develop the tool; broke the project into user stories with story points and acceptance criteria",
        "project-auto-d4": "Conducted thorough testing before deployment - result: 35+ hours/month saved, with measurable cost reduction",

        "project1-title":   "Digital Non-Conformance Management System - Tayoto",
        "project1-role":    "Backend Developer & Business Process Analyst",
        "project1-detail1": "Led development of a digital platform to replace a paper-based non-conformance (NC) reporting system, reducing lead time by 50% (from 10 days to 5 days)",
        "project1-detail2": "Created 20 user stories using Planning Poker estimation and organised them into 7 sprints over 70 days",
        "project1-detail3": "Designed system architecture following the 8D methodology with a mandatory Root Cause Analysis (RCA) checkpoint",
        "project1-detail6": "Applied ADKAR change management model to ensure successful user adoption and system integration",
        "project1-detail7": "Created comprehensive project documentation: risk register, Gantt charts, wireframes, and cost-benefit analysis",

        "section-experience": "Professional Experience",

        "job1-title": "Software Engineer",
        "job1-resp1": "Translated Business Requirement Documents (BRDs) into actionable user stories, defined acceptance criteria, and validated deliverables against business needs",
        "job1-resp4": "Participated in agile ceremonies, such as Sprint planning, Backlog refinement, and Risk management.",
        "job1-resp2": "Managed backlog of 10–15 user stories per sprint with 90% on-time delivery rate",
        "job1-resp3": "Proposed and built a C# automation tool eliminating repetitive tasks, saving 35+ hours/month and reducing cost",
        "job1-resp5": "Led onboarding and mentored 4 interns/new hires, ensuring smooth integration into the team",

        "job2-title": "Android Developer",
        "job2-resp1": "Developed 10+ Android apps in Java/Kotlin; collaborated with clients to gather and refine requirements and define acceptance criteria",
        "job2-resp2": "Resolved 80% of client-reported issues within 48 hours, boosting client satisfaction",
        "job2-resp3": "Analysed user feedback and identified performance bottlenecks, leading to 30% improvement in app load time through targeted optimisations",
        "job2-resp4": "Integrated REST APIs to exchange data between application and backend servers",
        "job2-resp5": "Used class diagrams to define application structure before development and sequence diagrams to map event flows",

        "job3-title": "Research Intern",
        "job3-resp1": "Built a multi-agent simulation model to analyse the impact of key parameters on crop production and farmer profitability in Beqaa, Lebanon",
        "job3-resp2": "Used flowcharts, class diagrams, and use case diagrams to define model structure and actor interactions",
        "job3-resp3": "Delivered insights and presented findings to research stakeholders",

        "job4-title": "Research Intern",
        "job4-resp1": "Annotated image dataset and evaluated automatic translation approaches",
        "job4-resp2": "Applied SPLADE model for Amharic information retrieval",
        "job4-resp3": "Documented methodology and reported findings to lab team, enabling next phase experimentation",

        "section-skills":  "Skills & Competencies",
        "skill-cat1":      "Core BA Competencies",
        "skill-cat1-desc": "Requirements Elicitation, User Stories, MoSCoW Prioritisation, UML (Class, Sequence, Use Case), BPMN, Process Mapping, RACI Matrix, Stakeholder Management, Root Cause Analysis, ADKAR, SWOT Analysis",
        "skill-cat2":      "Data & Visualisation",
        "skill-cat3":      "Tools & Platforms",
        "skill-cat4":      "Methodologies",
        "skill-cat5":      "Technical Skills",
        "skill-cat6":      "Soft Skills",
        "skill-cat6-desc": "Analytical Thinking, Adaptability, Communication, Accountability",

        "section-education": "Education",
        "edu1-degree":   "Master, Innovative Information Systems (MIAGE)",
        "edu1-course1":  "Business Intelligence (16.75/20)",
        "edu1-course2":  "Data Analysis (15/20)",
        "edu1-course3":  "Project Management (15/20)",
        "edu2-degree":   "Bachelor of Engineering in Information Technology",

        "section-certifications": "Certifications",
        "cert1-name":   "Critical Thinking for Better Judgment and Decision-Making",
        "cert1-status": "Completed - Nov 2025",
        "cert2-name":   "Generative AI for Business Analysts (IIBA)",
        "cert2-status": "Completed - May 2026",
        "cert3-name":   "Agentic AI for Business Analysis",
        "cert3-status": "Completed - June 2026",

        "section-languages": "Languages",
        "lang1": "English",
        "lang2": "French",

        "footer-text": "All rights reserved."
    },

    fr: {
        "nav-about":          "À propos",
        "nav-projects":       "Projets",
        "nav-experience":     "Expérience",
        "nav-skills":         "Compétences",
        "nav-education":      "Formation",
        "nav-certifications": "Certifications",
        "nav-portfolio":      "Portfolio",

        "hero-title":   "Analyste Métier",
        "hero-tagline": "MOA · AMOA | Delivery Agile | BPMN",

        "section-about": "À propos de moi",
        "summary-text": "Analyste Métier en transition depuis 4+ ans d'expérience en développement logiciel (assurance, e-commerce), titulaire d'un master en Systèmes d'Information Innovants. Compétent en recueil des besoins, documentation des flux fonctionnels, conception de solutions et gestion des parties prenantes. Expérience en environnements agiles et multiculturels. Bilingue anglais/français (C2/B2).",

        "section-projects": "Projets Clés",

        "badge-portfolio": "Projet de Portfolio",

        "project-brso-title": "BRSO : Digitisation du Processus d'Octroi de Crédit",
        "project-brso-role":  "Analyste Métier — Simulation MOA | 2026",
        "project-brso-d1": "Production d'une suite complète de livrables BA pour un mandat de digitisation bancaire simulé : énoncé du problème, cartographie des parties prenantes, 3 matrices RACI (As-Is, Projet, To-Be), BRD, analyse des écarts, modèles BPMN As-Is et To-Be, et DFE",
        "project-brso-d2": "Identification de 11 écarts de capacité mappés à 14 exigences métier répartis sur 2 sprints selon la priorisation MoSCoW",
        "project-brso-d3": "Modélisation d'une amélioration de processus : délai d'approbation de 15 jours réduit à <4 jours ; taux d'erreur de saisie de 23 % éliminé grâce à la création automatisée du dossier de prêt",
        "project-brso-d4": "Application de la méthodologie MOA complète : cartographie des parties prenantes (grille Pouvoir/Intérêt), recueil des exigences, chaîne de traçabilité BRD → Analyse des écarts → DFE",
        "project-brso-link": "<i class=\"fas fa-external-link-alt\"></i> Voir la documentation complète du projet",
        "metric-approval": "Délai d'approbation",
        "metric-error":    "Taux d'erreur",
        "metric-gaps":     "Écarts identifiés",

        "project-auto-title": "Outil d'Automatisation Interne",
        "project-auto-role":  "Chef de Projet & Développeur — LTIMindtree",
        "project-auto-date":  "4–5 mois",
        "project-auto-d1": "Identification d'un processus manuel répétitif consommant un effort d'équipe significatif et initiation de l'idée d'automatisation",
        "project-auto-d2": "Cartographie des processus As-Is et futurs avec Bizagi (BPMN), rédaction d'une proposition formelle et présentation au Responsable d'Équipe et au Chef de Projet",
        "project-auto-d3": "Constitution et management d'une équipe de 4 personnes ; découpage en user stories avec points de story et critères d'acceptation",
        "project-auto-d4": "Tests approfondis avant déploiement — résultat : 35+ heures/mois économisées, avec réduction de coûts mesurable",

        "project1-title":   "Système de Gestion des Non-Conformités — Tayoto",
        "project1-role":    "Développeur Backend & Analyste de Processus Métier",
        "project1-detail1": "Pilotage du développement d'une plateforme digitale remplaçant un système papier, réduisant le délai de 50 % (10 → 5 jours)",
        "project1-detail2": "Création de 20 user stories par Planning Poker, organisées en 7 sprints sur 70 jours",
        "project1-detail3": "Conception de l'architecture système selon la méthodologie 8D avec point de contrôle RCA obligatoire",
        "project1-detail4": "Interface bilingue (anglais/français) avec notifications e-mail automatisées aux responsables qualité",
        "project1-detail5": "Tableaux de bord KPI pour le suivi des NC, identification des récurrences et surveillance des actions correctives",
        "project1-detail6": "Application du modèle ADKAR pour assurer l'adoption par les utilisateurs",
        "project1-detail7": "Documentation projet complète : registre des risques, diagrammes de Gantt, maquettes, analyse coût-bénéfice",

        "section-experience": "Expérience Professionnelle",

        "job1-title": "Ingénieur Logiciel",
        "job1-resp1": "Transformation des BRD en user stories actionnables, définition des critères d'acceptation et validation des livrables",
        "job1-resp2": "Gestion d'un backlog de 10 à 15 user stories par sprint avec 90 % de livraison dans les délais",
        "job1-resp3": "Proposition et développement d'un outil C# éliminant les tâches répétitives — économie de 35+ heures/mois",
        "job1-resp4": "Responsabilités d'Analyste Métier : collaboration avec product owners et experts métier pour clarifier le périmètre et gérer le backlog d'une plateforme d'assurance",
        "job1-resp5": "Encadrement et mentorat de 4 stagiaires/nouvelles recrues",

        "job2-title": "Développeur Android",
        "job2-resp1": "Développement de 10+ applications Android en Java/Kotlin ; recueil et affinement des exigences clients",
        "job2-resp2": "Résolution de 80 % des incidents clients sous 48 heures",
        "job2-resp3": "Amélioration de 30 % du temps de chargement via optimisations ciblées",
        "job2-resp4": "Intégration d'API REST pour l'échange de données entre application et serveurs backend",
        "job2-resp5": "Diagrammes de classes pour la structure applicative, diagrammes de séquence pour les flux d'événements",

        "job3-title": "Stagiaire Chercheur",
        "job3-resp1": "Développement d'un modèle de simulation multi-agents pour analyser l'impact de paramètres clés sur la production agricole dans la Bekaa, Liban",
        "job3-resp2": "Diagrammes de flux, de classes et de cas d'utilisation pour définir la structure du modèle",
        "job3-resp3": "Présentation des résultats aux parties prenantes de la recherche",

        "job4-title": "Stagiaire Chercheur",
        "job4-resp1": "Annotation d'un jeu de données d'images et évaluation d'approches de traduction automatique",
        "job4-resp2": "Application du modèle SPLADE pour la recherche d'informations en amharique",
        "job4-resp3": "Documentation de la méthodologie et présentation des résultats à l'équipe de laboratoire",

        "section-skills":  "Compétences",
        "skill-cat1":      "Compétences Clés AM",
        "skill-cat1-desc": "Recueil des besoins, User Stories, Priorisation MoSCoW, UML (Classe, Séquence, Use Case), BPMN, Cartographie de processus, Matrice RACI, Gestion des parties prenantes, Analyse des causes racines, ADKAR, Analyse SWOT",
        "skill-cat2":      "Données & Visualisation",
        "skill-cat3":      "Outils & Plateformes",
        "skill-cat4":      "Méthodologies",
        "skill-cat5":      "Compétences Techniques",
        "skill-cat6":      "Savoir-être",
        "skill-cat6-desc": "Pensée analytique, Adaptabilité, Communication, Rigueur",

        "section-education": "Formation",
        "edu1-degree":   "Master, Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE) — Systèmes d'Information Innovants",
        "edu1-course1":  "Business Intelligence (16,75/20)",
        "edu1-course2":  "Analyse de données (15/20)",
        "edu1-course3":  "Gestion de projet (15/20)",
        "edu2-degree":   "Licence en Ingénierie des Technologies de l'Information",

        "section-certifications": "Certifications",
        "cert1-name":   "Pensée critique et prise de décision",
        "cert1-status": "Terminé - Nov 2025",

        "section-languages": "Langues",
        "lang1": "Anglais",
        "lang2": "Français",

        "footer-text": "Tous droits réservés."
    }
};

let currentLang = "en";

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.dataset.translate;
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang;
}

document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => changeLanguage(btn.dataset.lang));
});

document.addEventListener("DOMContentLoaded", () => {
    changeLanguage(currentLang);
});