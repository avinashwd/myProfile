import "./mycss.css"
import WorkExp from "./workexp";

export default function About(){
    return(<>
    <div className="about container" id="about">
        <h2>About Me</h2> 
        <p>
        I am currently pursuing a Master of Computer Applications with a specialization in Data Science, 
        which has fueled my passion for analyzing complex datasets and developing innovative solutions.
         With six months of hands-on experience in a Java full-stack internship, 
         I have honed my skills in both front-end and back-end development.
        </p>
        <p>During my internship, I worked on various projects that required me to design, develop, and deploy web applications using technologies like Java, 
Spring Boot, HTML, CSS and JavaScript. This experience not only enhanced my technical skills but also taught me the importance of teamwork, problem-solving,
 and efficient project management.</p>
 <p>
 I am a proactive learner and continuously seek opportunities to expand my knowledge and skills. In addition to my technical abilities,
  I am also keen on improving my soft skills, such as communication, collaboration, and leadership, which I believe are essential in the tech 
  industry.I am excited to apply my skills and knowledge to real-world challenges and am actively seeking opportunities where I can contribute to 
  meaningful projects and grow as a professional.
 </p>
    </div>
    <WorkExp/>
    </>);
}