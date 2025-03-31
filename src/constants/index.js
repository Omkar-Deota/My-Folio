import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/api.png";
import project3 from "../assets/projects/train-removebg-preview-removebg-preview.png";
export const HERO_CONTENT = "I’m a passionate Software Engineer with a strong problem - solving mindset and expertise in C++, React, and TypeScript.With hands - on experience in full - stack development, I have built scalable applications for leading organizations, including Hawkamah(DIFC Dubai) and Hindalco Industries(Aditya Birla Group). I thrive on building impactful solutions, from optimizing coal management systems with ML to developing marketplace platforms for startups.My work has been recognized at the Smart India Hackathon 2023, where my team won the national - level championship by solving real - world challenges for the Ministry of Coal, Govt.of India. I’m always excited to collaborate, innovate, and push boundaries in software development.Let’s connect and build something amazing! 🚀"

export const EXPERIENCES = [
  {
    year: "Sept 2024 - Present",
    role: "SDE Intern",
    company: "Magure Softwares Private Limited",
    description: "Developed a comprehensive Survey Management Portal for Hawkamah – The Institute for Governance, one of the largest governance institutes in the Middle East in collaboration with DIFC Dubai using MERN stack technologies and leveraging Azure and OAuth services for enhanced security and scalability. Delivered high-quality, while ensuring seamless integration of front-end designs with back-end functionalities with code reviews. Conducted performance analysis to identify and resolve bottlenecks, enhancing system efficiency. Solely managed the frontend development for a data monetization project Xtend by DIFC Dubai, ensuring responsive designs and seamless user experiences across devices with API integration.Worked on Ignyte, a dynamic marketplace platform for startups to register, raise funding, create events, and expand businesses.Enabled students and professionals to launch companies, secure investments, and manage.",
    technologies: ["ReactJs", "Tailwind", "NextUI", "NodeJs", "ExpressJs", "PostgreSQL", "Github", "Auth0", "SDLC", "React Testing", "System Design", "TypeORM", "NeonDB", "Azure"],
    links: [{
      name: 'Hawkamah', link: 'https://www.hawkamah.org/'
    }, {
      name: 'Xtend',
      link: 'https://xtend.ae/home'
    },
    {
      name: 'Ignyte',
      link: 'https://www.ignyte.ae/'
    }]
  },
  {
    year: "July 2024 - August 2024",
    role: "IT Intern",
    company: "Hindalco Industries Ltd., Aditya Birla Group",
    description: "Developed an advanced coal management system to optimize deliveries and ensure quality monitoring using real-time tracking from gate entry to sampling stages. Utilized machine learning models to predict Gross Calorific Value(GCV) and moisture content, enabling accurate quality assessment and automated variance detection.Integrated real - time analytics to streamline operations, minimize inefficiencies, and provide actionable insights for reliable coal inventory management. ",
    technologies: ["ReactJs", "Tailwind", "NextUI", "NodeJs", "ExpressJs", "MySQL", "Python", "Jupyter Notebook", "Machine Learning"],
  },
  {
    year: "Feb 2024 - May 2024 ",
    role: "Full Stack Developer Intern",
    company: "Ionage Private Limited, Bengaluru",
    description: "Worked with a dynamic frontend team using latest technologies such as ReactJs and MaterialUi for developing the features for IONAGE application. Have worked on user management and graphical representation of charging consumption on their platform.",
    technologies: ["React.js", "TypeScript", "Material UI", "ApexCharts", "Github"],
  },
];

export const PROJECTS = [
  {
    title: "Article Lab",
    image: project1,
    description:
      "Developed an automated system to track coal imports, detect weight discrepancies, and predict quality metrics (GCV & moisture) using machine learning, improving efficiency, quality control, and risk management.",
    technologies: ["Reactjs", "Node.js", "MySQL", "Chartjs", "Next UI", "Machine Learning"],
  },
  {
    title: "PropStream",
    image: project2,
    description: 'Created a platform for data monetization for business. The data can be accessed by creating API for the same and usage can be tracked through this application.',
    technologies: ['Reactjs', 'Nodejs', 'PostgreSql', 'TypeORM', 'Auth0', 'NextUI']
  },
  {
    title: 'Railway Rake Scheduling',
    image: project3,
    description: 'Award winning project of SIH 2023 for the largest open hackathon in the world. Led the team of six members and worked as a backend developer to schedule the railway rakes for reducing demurrage charges, integrated Twilio for real - time communication. Our team has developed the most unique solution and achieved the first place at national level hackathon held at Bhopal, addressing the problem faced by Ministry of Coal of the Indian govt, to reduce the Demurrage charges.',
    technologies: ['Reactjs', 'Nodejs', 'MySql', 'Expressjs', 'Twilio']
  }
];

