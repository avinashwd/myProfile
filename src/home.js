import myphoto from "./myimg/DSC_2353a.jpg"
import About from "./about";

export default function Home(){
    return(<>

    <div className="header">
        <nav >
            <ul className="d-flex flex-wrap justify-content-around" style={{listStyleType:"none"}}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#wexp">Internship</a></li>
                <li><a href="#tskill">Technical Skills</a></li>
                <li><a href='#edu'>Education</a></li>
                <li><a href="#cert">Certifications</a></li>
            </ul>
        </nav>
    </div>
    
    <div className="home container" id="home">
    <h2 className="text-center">Avinash Arun Waghmode</h2>
    <img className="rounded-circle mx-auto d-block" src={myphoto} alt="myimg" style={{height:'200px',width:'200px'}}/>
    <p className="text-center mx-auto">I'm a passionate <span className="text-primary">Data Scientist </span>
     and <span className="text-success">Full-Stack Developer</span>.</p>
     <p className="text-center mx-auto">Currently pursuing my Master of Computer Applications  with a specialization in Data Science.
         With six months of hands-on experience from a Java full-stack internship.I have developed a solid foundation in both front-end and back-end technologies.
          I thrive on solving complex problems and creating innovative solutions that make a difference.</p>
    </div>
    <About/>
    </>);
}