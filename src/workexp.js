import img from "./myimg/image001.jpg"
import TSkills from "./tskills";

function MyFun(prop){
    return (<li>{prop.desc}</li>);
}
export default function WorkExp(){

    const myobj={
        jobtitle: "IT Intern",
        company: "Bdx Data Centers",
        tenure: "May 2022- Oct 2022",
        department: "IT & Product",
        description:"Revamped soft connect portal in Java to enhance user experience and streamline connectivity resulting in improved performance and efficiency by 30%. Constructed dynamic websites using HTML, CSS, JavaScript, and jQuery to provide engaging user interface and seamless navigation. Designed and implemented APIs to facilitate smooth communication and interactions within the system."
    }
    return(<>
    <div className="container wexp" id="wexp">
        <h2>Internships</h2>
        <div className="work1">
        <img className="float-start" src={img} style={{height:"120px",width:"200px"}} alt="bdx" />
        <p>Company: {myobj.company}</p>
        <p>Title: {myobj.jobtitle}</p>
        <p>Department: {myobj.department}</p>
        <p>{myobj.tenure}</p>
        <ul>{myobj.description.split(". ").map((val)=><MyFun desc={val}/>)}</ul>
        </div>
    </div>
    <TSkills/>
    </>);
}