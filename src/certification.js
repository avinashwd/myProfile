import web from "./myimg/WebDevelopmentCertificate.jpg"
import ds from "./myimg/DataScienceCertification.jpg"
import Footer from "./footer";
export default function Certification(){
    return(<>
    <div className="cert" id="cert">
        <h2>Certification</h2>
        <div className="d-flex flex-wrap justify-content-center">
         <img className="pdf" src={web} alt="web development certificate" height="400px" width="400px"/>
        <img className="pdf" src={ds} alt="data science certificate" height="400px" width="400px"/></div>

    </div>
    <Footer/>
    </>);
}