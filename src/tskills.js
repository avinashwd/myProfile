import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import Education from "./education";
function MyList(props){
return <li className="badge bg-success"><FontAwesomeIcon icon={faAward} style={{color:"gold",paddingRight:"5px"}}/>{props.skills}</li>;
}

export default function TSkills(){
    const myObj = ["Java","Python","Spring Boot","Django","HTML","CSS","JavaScript","JQuery","React","PowerBI","Machine Learning","Data Visualization","Pandas","NumPy","ScikitLearn","Git","GitHub"]

    return(<>
    <div className="container tskill" id="tskill">
        <h2>Technical Skills</h2>
        <ul style={{listStyleType:"none"}}>
            {myObj.map((skill) => <MyList skills={skill}/>)}
        </ul>

    </div>
    <Education/>
     </>)
}