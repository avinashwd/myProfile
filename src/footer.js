import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faGoogle,faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer(){
    return(<>
    <div className="footer">
        <ul style={{listStyleType:"none"}} className="d-flex flex-wrap justify-content-between">
            <li><a href="https://www.linkedin.com/in/avinashwaghmode/"><FontAwesomeIcon icon={faLinkedin}/>www.linkedin.com/in/avinashwaghmode</a></li>
            <li><a href="https://github.com/avinashwd"><FontAwesomeIcon icon={faGithub} />github.com/avinashwd</a></li>
            <li><a href="mailto:avinash.waghmode56@gmail.com"><FontAwesomeIcon icon={faGoogle}/>avinash.waghmode56@gmail.com</a></li>
        </ul>
    </div>
    </>);
}