AOS.init()

//  Work experience cards

const experiencecards = document.querySelector('.experience-cards')
const exp = [
  {
    title: 'Business Intelligence Manager',
    cardImage: 'assets/images/experience-page/AXA.png',
    place: 'AXA XL',
    time: '(Sep, 2012 - present)',
    desp: '<li>Leading the Onshore (US) and India team for data to insight strategy. We cater to both Insurance & Reinsurance segment of AXAXL.</li> <li>Responsible for project management activities such as leading data analytics reports deliveries in Qlik View, Qlik Sense, Power BI.</li> <li>Creating complex solutions through queries and procedures in Python, MS SQL Server and Oracle SQL.</li>',
  },
  {
    title: 'Senior Analyst',
    cardImage: 'assets/images/experience-page/WNS.png',
    place: 'WNS',
    time: '(Aug, 2010 - Sep, 2012)',
    desp: '<li>I was responsible for development & maintenance of financial software solutions for clients within the BFSI & Retail space.</li><li>I was providing key analytical insights and providing MS Excel & Business Objects based financial reports.</li>',
  },
  {
    title: 'Benefits Administrator',
    cardImage: 'assets/images/experience-page/Hewitt.png',
    place: 'Hewitt Associates',
    time: '(Sep, 2008 - Aug, 2010)',
    desp: '<li> I closely worked with Pension Actuaries to analyze the Defined Benefit plans that were managed by Hewitt.</li><li>Creation of spreadsheets applications in Excel through VBA, MS Access used for advance calculations to calculate retirement Benefits.</li>',
  },
]

const showCards2 = () => {
  let output = ''
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  )
  experiencecards.innerHTML = output
}
document.addEventListener('DOMContentLoaded', showCards2)

// Volunteership Cards

const volunteership = document.querySelector('.volunteership')
const volunteershipcards = [
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    cardImage: 'assets/images/experience-page/AI.jfif',
    description:
      'Foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services',
  },
  {
    title: 'Microsoft Certified: Azure Data Fundamentals',
    cardImage: 'assets/images/experience-page/Data.jfif',
    description:
      'Foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    cardImage: 'assets/images/experience-page/Azure.png',
    description:
      'Foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.',
  },
  {
    title: 'Microsoft Certified: Power Platform Fundamentals',
    cardImage: 'assets/images/experience-page/PP.jpg',
    description:
      'Improve productivity by automating business processes, analyzing data to produce business insights.',
  },
]

const showCards = () => {
  let output = ''
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  )
  volunteership.innerHTML = output
}
document.addEventListener('DOMContentLoaded', showCards)

// Hackathon Section

const hackathonsection = document.querySelector('.hackathon-section')
const mentor = [
  {
    title: 'Power BI',
    subtitle: 'Data Visualization',
    image: 'assets/images/experience-page/PowerBI.jfif',
    desp: 'Power BI is a business analytics service by Microsoft. It aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.',
  },
  {
    title: 'Qlik Sense',
    subtitle: 'Data Visualization',
    image: 'assets/images/experience-page/ulhacks.png',
    desp: 'Qlik Sense is a complete data analytics platform that sets the benchmark for a new generation of analytics. With its one-of-a-kind associative analytics engine, sophisticated AI, and high performance cloud platform, you can empower everyone in your organization to make better decisions daily and take action creating a truly data-driven enterprise.',
  },
  {
    title: 'Python',
    subtitle: 'Automation, Web Developemnt',
    image: 'assets/images/experience-page/wafflehacks.png',
    desp: 'WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.',
  },
  {
    title: 'HTML, CSS',
    subtitle: 'Web Developemn',
    image: 'assets/images/experience-page/elevate.png',
    desp: 'HTML and CSS are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.',
  },
  {
    title: 'Excel VBA',
    subtitle: 'Automation, Financial Reporting',
    image: 'assets/images/experience-page/VBA.jfif',
    desp: "Visual Basic for Applications is an implementation of Microsoft's event-driven programming language Visual Basic 6, which was declared legacy in 2008, and is an associated integrated development environment.",
  },
  {
    title: 'SQL Server',
    subtitle: 'Databases',
    image: 'assets/images/experience-page/hackasolution.png',
    desp: 'Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network.',
  },
  {
    title: 'MS Access',
    subtitle: 'Databases, Automation',
    image: 'assets/images/experience-page/uniglobe.png',
    desp: 'Microsoft Access is a database management system from Microsoft that combines the relational Microsoft Jet Database Engine with a graphical user interface and software-development tools. It is a member of the Microsoft 365 suite of applications, included in the Professional and higher editions or sold separately.',
  },
  {
    title: 'Power Apps',
    subtitle: 'App Development',
    image: 'assets/images/experience-page/atlas.png',
    desp: 'AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.',
  },
  {
    title: 'Power Automate',
    subtitle: 'Automation',
    image: 'assets/images/experience-page/neo.png',
    desp: 'NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.',
  },
  {
    title: 'PMicrosoft Azure',
    subtitle: 'Cloud Computing',
    image: 'assets/images/experience-page/neo.png',
    desp: 'NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.',
  },
]

const showCards3 = () => {
  let output = ''
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  )
  hackathonsection.innerHTML = output
}
document.addEventListener('DOMContentLoaded', showCards3)
