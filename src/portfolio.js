/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Lucas Maciel",
  logo_name: "LucasMaciel",
  nickname: "",
  subTitle:
    "Hi, I'm Lucas, a passionate Bioinformatician that wants to change the world through science.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/Lucas-Maciel",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/lucas-Maciel/",
  // linkedin: "https://www.linkedin.com/in/lucas-maciel/",
  // gmail: "lucasmacielbiotec@gmail.com",
  // twitter: "https://twitter.com/msc_lucas",
  // instagram: "https://www.instagram.com/lucas_maciel7/"

  {
    name: "Github",
    link: "https://github.com/lucas-Maciel/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lucas-maciel/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:lucasmacielbiotec@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/msc_lucas",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/lucas_maciel7/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Bioinformatics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Development of pipelines and scripts to integrate omic data analyses;",
        "⚡ Execution of projects involving analyses of (meta)genomics, transcriptomics, and epigenomics data;",
        "⚡ Development of shiny apps in R;",
      ],
      softwareSkills: [
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Publications",
      fileName: "FullStackImg",
      skills: [
        "▶ Step-by-Step Bioinformatics Analysis of Schistosoma mansoni long non-coding RNA Sequences. Methods in Molecular Biology, 2020.",
        // "Maciel L.F.; Verjovski-Almeida S. In: Schistosoma mansoni. Methods in Molecular Biology, vol 2151. Humana, New York, NY, 2020.",
        "▶ Dynamic Expression of Long Non-Coding RNAs Throughout Parasite Sexual and Neural Maturation in Schistosoma Japonicum. Non-Coding RNA, 2020",
        // "Maciel L.F.; Morales-Vicente D.A.; Verjovski-Almeida S. Non-Coding RNA, 2020.",
        "▶ Weighted Gene Co-Expression Analyses Point to Long Non-Coding RNA Hub Genes at Different Schistosoma mansoni Life-Cycle Stages.Frontiers in Genetics, 2019.",
        // "Maciel L.F.; Morales-Vicente D.A.; Silveira G.O.; Ribeiro R.O.; Olberg G.G.O.; Pires D.S.; Amaral M.S.; Verjovski-Almeida S. Frontiers in Genetics, 2019.",
        "▶ De novo Assembly and Annotation of the Antarctic Alga Prasiola crispa Transcriptome. Frontiers in Molecular Bioscience, 2018.",
        // "Carvalho E.L.; Maciel L.F.; Macedo P.E.; Dezordi F.Z.; Abreu M.E.T.; Victória F.C.; Pereira A.B.; Boldo J.T.; Wallau G.L.; Pinto P.M. Frontiers in Molecular Bioscience, 2018.",
        "▶ Jack bean urease modulates neurotransmitter release at insect neuromuscular junctions. Pesticide Biochemistry and Physiology, 2018",
        // "Carrazoni T.; Nguyen. C.; Maciel L.F.; Delgado-Cañedo A.; Stewart B.A.; Lange A.B.; Dal Belo C.A. Carlini C.R.; Orchard I. Pesticide Biochemistry and Physiology, 2018"
      ],
      softwareSkills: [
        {
          skillName: "",
          fontAwesomeClassname: "simple-icons:microsoftacademic",
          style: {
            backgroundColor: "",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Universidade de São Paulo (USP)",
      subtitle: "MSc in Bioinformatics",
      logo_path: "usp.png",
      alt_name: "USP",
      duration: "2018 - 2019",
      descriptions: [
        "⚡ Dissertation title: Long non-coding RNAs identification and annotation in Schistosoma mansoni and Schistosoma japonicum.",
      ],
      website_link: "https://www5.usp.br/",
    },{
      title: "Universidade Federal do Pampa (Unipampa)",
      subtitle: "BSc in Biotechnology",
      logo_path: "unipampa.png",
      alt_name: "Unipampa",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ Final project: Trancriptome assembly and annotation of an Antarctic alga with Biotechnological potential.",
      ],
      website_link: "https://unipampa.edu.br/portal/",
    },
  ]
};

const certifications = {
  certifications: [
    {
      title: "Advanced R Programming",
      subtitle: "",
      logo_path: "john_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/VANJEQKSX3YV",
      alt_name: "Johns Hopkins University",
      color_code: "#1f386b",
    },
    {
      title: "Industrial Biotechnology",
      subtitle: "",
      logo_path: "manchester.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/2KE3Z4FPPD2R",
      alt_name: "University of Manchester",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have hands-on experience in a wide variety of omic analyses. I also have experience in the development of integrative pipelines for private companies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Bioinformatician",
          company: "Centro Nacional de Pesquisa em Energia e Materiais (CNPEM)",
          company_url: "https://cnpem.br/",
          logo_path: "CNPEM.png",
          duration: "Feb 2020 - PRESENT",
          location: "Campinas, Brazil",
          description:
            "Bioinformatics and integrative omics (metagenomes, metatranscriptomes,RNA-Seq , proteomes and metabolomes) applied to metabolic pathways, genes and enzyme discovery",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Publications",
  description:
    "List of publications in the areas of Bioinformatics, Parasitology and Biotechnology",
  avatar_image_path: "projects_image.svg",
};


export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
};
