import img from "./myimg/images.jfif"
import img1 from "./myimg/1704793474.png"
import "./educert.css"
import Certification from "./certification";
function EduCard(prop){
return(<>
<div className="card col-sm-4" style={{margin: "5px"}}>
<img src={prop.x.image} alt={prop.x.university} className="d-block" style={{width:'100%', height:'100%'}}/>
<ul style={{listStyleType:"none"}}>
<li>{prop.x.degree}</li>
<li>{prop.x.university}</li>
<li>{prop.x.tenure}</li>
<li>{prop.x.gpa}</li>
</ul>
</div>
</>);
}

export default function Education(){
    const myEdu = [{
        degree:"Master of Computer Application",
        university:"Jain University",
        gpa:"CGPA : 8.33",
        tenure:"2023-2025",
        image:img1
    },
{
    degree:"Bachelor Of Science",
    university:"University Of Mumbai",
    gpa:"CGPA: 8.49",
    tenure:"2018-2021",
    image:img
}] 
return(<>
<div className="edu" id="edu">
    <h2>Education</h2>
    <div className="d-flex flex-wrap flex-row justify-content-center">
    {myEdu.map((obj)=><EduCard x={obj}/>)}
    </div>
</div>
<Certification/>
</>);

}