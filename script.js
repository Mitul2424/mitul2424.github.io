document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

const translations = {
    en: {
        "nav-about": "About",
        "nav-experience": "Experience",
        "nav-projects": "Projects",
        "nav-skills": "Skills",
        "nav-education": "Education",
        "nav-certifications": "Certifications",

        "hero-title": "Business Analyst",

        "section-about": "About Me",
        "summary-text": "Business Analyst with 4+ years of experience delivering data-driven solutions in an agile environment. Skilled in requirements elicitation, stakeholder management, data visualization, and process optimization. Bilingual English/French (C1/B2) and open to opportunities across Europe.",

        "section-experience": "Professional Experience",

        "job1-title": "Software Engineer",
        "job1-resp1": "Performed Business Analyst responsibilities: Collaborated with product owners and client SMEs to clarify scope, refine requirements, and manage backlog for insurance platform features",
        "job1-resp2": "Translated Business Requirement Documents (BRDs) into actionable user stories, defined acceptance criteria, and validated deliverables against business needs",
        "job1-resp3": "Managed backlog of 10–15 user stories per sprint with 90% on-time delivery rate",
        "job1-resp4": "Led onboarding and mentored 4 interns/new hires, ensuring smooth integration in team",
        "job1-resp5": "Built a C# automation tool eliminating repetitive tasks, saving 35+ hours/month and reducing cost",

        "job2-title": "Android Developer",
        "job2-resp1": "Developed 10+ Android apps in Java/Kotlin. Collaborated with clients to gather and refine requirements and define acceptance criteria",
        "job2-resp2": "Resolved 80% of client reported issues within 48 hours which boosted client satisfaction",
        "job2-resp3": "Analyzed user feedback and identified performance bottlenecks, leading to 30% improvement in app load time through targeted optimizations",
        "job2-resp4": "Participated in Agile development cycles with daily standups and sprints",

        "job3-title": "Research Intern",
        "job3-resp1": "Built a multi-agent simulation model to analyze the impact of key parameters on crop production and farmer profitability in Beqaa, Lebanon",
        "job3-resp2": "Delivered insights and presented findings to research stakeholders",

        "job4-title": "Research Intern",
        "job4-resp1": "Annotated image dataset and evaluated automatic translation approaches",
        "job4-resp2": "Applied SPLADE model for Amharic information retrieval",
        "job4-resp3": "Documented methodology and reported findings to lab team, enabling next phase experimentation",

        "section-projects": "Key Projects",

        "project1-title": "Digital Non-Conformance Management System - Tayoto",
        "project1-role": "Backend Developer & Business Process Analyst",
        "project1-detail1": "Led development of a digital platform to replace paper-based non-conformance (NC) reporting system, reducing lead time by 50% (from 10 days to 5 days)",
        "project1-detail2": "Created 20 user stories using Planning Poker estimation technique and organized them into 7 sprints over 70 days",
        "project1-detail3": "Designed system architecture following 8D methodology with mandatory Root Cause Analysis (RCA) checkpoint to prevent case closure without completion",
        "project1-detail4": "Implemented bilingual interface (English/French) with automated email notifications to quality managers and cross-functional teams",
        "project1-detail5": "Developed KPI dashboards and analytics tools for tracking NC reports, identifying recurrence patterns, and monitoring corrective action implementation",
        "project1-detail6": "Applied ADKAR change management model to ensure successful user adoption and system integration",
        "project1-detail7": "Created comprehensive project documentation including risk register, Gantt charts, wireframes, and cost-benefit analysis",

        "section-skills": "Skills & Competencies",
        "skill-cat1": "Core BA Competencies",
        "skill-cat1-desc": "Requirements Elicitation, User Stories, MoSCoW Prioritisation, UML, Use Cases, RACI Matrix, BPMN, Process Mapping, SWOT Analysis, Root Cause Analysis, Stakeholder Management",
        "skill-cat2": "Data & Visualization",
        "skill-cat3": "Tools & Platforms",
        "skill-cat4": "Methodologies",
        "skill-cat5": "Technical Skills",
        "skill-cat6": "Soft Skills",
        "skill-cat6-desc": "Analytical Thinking, Adaptability, Communication, Accountability",

        "section-education": "Education",
        "edu1-degree": "Master, Innovative Information Systems (MIAGE)",
        "edu1-course1": "Business Intelligence (16.75/20)",
        "edu1-course2": "Data Analysis (15/20)",
        "edu1-course3": "Project Management (15/20)",
        "edu2-degree": "Bachelor of Engineering in Information Technology",

        "section-certifications": "Certifications",
        "cert1-name": "Critical Thinking for Better Judgment and Decision-Making",
        "cert1-status": "Completed (Nov 2025)",
        "cert2-name": "Requirements Elicitation for Business Analysis: Stakeholder Conversations",
        "cert2-status": "Ongoing (Expected completion Jan 2026)",

        "section-languages": "Languages",
        "lang1": "English",
        "lang2": "French",

        "footer-text": "All rights reserved."
    },

    fr: {
        "nav-about": "À propos",
        "nav-experience": "Expérience",
        "nav-projects": "Projets",
        "nav-skills": "Compétences",
        "nav-education": "Formation",
        "nav-certifications": "Certifications",

        "hero-title": "Analyste d’Affaires",

        "section-about": "À propos de moi",
        "summary-text": "Analyste d’Affaires avec plus de 4 ans d’expérience dans la livraison de solutions basées sur les données en environnement agile. Bilingue anglais/français (C1/B2) et ouvert aux opportunités en Europe.",

        "section-experience": "Expérience Professionnelle",

        "job1-title": "Ingénieur Logiciel",
        "job1-resp1": "Collaboration avec les product owners et experts métiers pour clarifier le périmètre et les exigences",
        "job1-resp2": "Traduction des BRD en user stories avec critères d’acceptation",
        "job1-resp3": "Gestion de 10 à 15 user stories par sprint avec 90 % de livraison à temps",
        "job1-resp4": "Encadrement et mentorat de 4 stagiaires / nouvelles recrues",
        "job1-resp5": "Automatisation C# éliminant les tâches répétitives, économisant plus de 35 heures par mois",

        "job2-title": "Développeur Android",
        "job2-resp1": "Développement de plus de 10 applications Android en Java/Kotlin",
        "job2-resp2": "Résolution de 80 % des incidents clients sous 48 heures",
        "job2-resp3": "Amélioration des performances applicatives de 30 %",
        "job2-resp4": "Participation aux cycles Agile (sprints, stand-ups)",

        "job3-title": "Stagiaire de Recherche",
        "job3-resp1": "Développement d’un modèle de simulation multi-agents pour analyser la production agricole au Liban",
        "job3-resp2": "Présentation des résultats aux parties prenantes de la recherche",

        "job4-title": "Stagiaire de Recherche",
        "job4-resp1": "Annotation de jeux de données d’images et évaluation de traductions automatiques",
        "job4-resp2": "Application du modèle SPLADE pour la recherche d’information en amharique",
        "job4-resp3": "Documentation de la méthodologie et restitution des résultats",

        "section-projects": "Projets Clés",

        "section-skills": "Compétences",
        "skill-cat1": "Compétences BA",
        "skill-cat1-desc": "Élicitation des exigences, user stories, UML, BPMN, gestion des parties prenantes",
        "skill-cat2": "Données & Visualisation",
        "skill-cat3": "Outils & Plateformes",
        "skill-cat4": "Méthodologies",
        "skill-cat5": "Compétences Techniques",
        "skill-cat6": "Compétences Comportementales",
        "skill-cat6-desc": "Analyse, adaptabilité, communication, responsabilité",

        "section-education": "Formation",
        "edu1-degree": "Master, Systèmes d’Information Innovants (MIAGE)",
        "edu1-course1": "Business Intelligence (16,75/20)",
        "edu1-course2": "Analyse de Données (15/20)",
        "edu1-course3": "Gestion de Projet (15/20)",
        "edu2-degree": "Licence d’Ingénierie en Informatique",

        "section-certifications": "Certifications",
        "cert1-name": "Pensée critique et prise de décision",
        "cert1-status": "Terminé (Nov 2025)",
        "cert2-name": "Élicitation des exigences en analyse métier",
        "cert2-status": "En cours (Jan 2026)",

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
        if (translations[lang] && translations[lang][key]) {
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
    