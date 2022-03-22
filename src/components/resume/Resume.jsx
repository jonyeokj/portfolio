import "./resume.scss";

const About = () => {
  return (
    <div className="resume" id="resume">
      <div className="resume-left">
        <div className="l-wrapper">
          <h1 className="l-title">About Me</h1>
            <p className="l-sub">
              I am an NUS Computing Undergraduate currently pursuing a bachelor's in Business Analytics.
            </p>
            <p className="l-desc">
              I am inquisitive learner with a passion in problem-solving and algorithms. I find programming fun and have a strong desire to strengthen my logical and analytical competencies.
            </p>
        </div>
      </div>
      <div className="resume-right">
        <div className="r-wrapper">
          <h1 className="r-title1">Technical Skills</h1>
            <p className="r-sub1">
            • Program Proficiencies: Java (fluent), Python (fluent), Javascript (proficient), SQL (proficient), R (proficient), MongoDB (basic)
            </p>
            <p className="r-sub2">
            • Design Tools/Web Frameworks: Photoshop, ReactJS, Tableau, MATLAB
            </p>
            <p className="r-sub3">
            • Technical Skills/University Modules: Object-Oriented Programming, Functional Programming, Algorithmic Problem Solving with Programming, Business Concepts and Metrics for Marketing and Financial Analytics, Data Management, Data Visualization and Dashboard Design
            </p>
          <h1 className="r-title2">Work Experience</h1>
            <p className="r-sub4">
              Digital Marketing Intern, IT Surewerks (S) Pte Ltd.
            </p>
            <p className="r-sub5">
            • Curated content and created numerous landing pages for email marketing, promoting the products and services that the company provides
            </p>
            <p className="r-sub6">
            • Assisted the Marketing Manager with the updating of landing pages, ensuring webpages are visually appealing and can engage potential clients
            </p>
            <p className="r-sub7">
            • Facilitated the maintenance of company's website with regular backups, security and HTTPS, establishing a safe and durable environment
            </p>
            <p className="r-sub8">
            • Collaborated with the marketing team to broaden our domain's exposure with SEO
            </p>
        </div>
      </div>
    </div>
  )
};

export default About;


