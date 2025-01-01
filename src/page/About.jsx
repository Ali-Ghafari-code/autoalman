import "./About.css"
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
function About(){
    let massage =` Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, odit ipsam quam atque nemo ipsa unde, distinctio commodi,\n ex magni enim! Et fuga ducimus facilis recusandae earum, doloremque quasi provident!`
    return(
        <section className="section-white mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center divAb2">
                                <h2 className="section-title">
                                    درباره ما
                                </h2>
                                <hr />
                                <p className="section-subtitle">
                                    {massage}
                                </p>
                        </div>

                                <div className="col-md-4 divAB">
                                        <div className="team-item">
                                            <img src="" alt="pic" className="team-img" />   
                                            <h3>محصولات ما</h3>
                                            <hr />
                                            <div className="team-info">
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet eaque magnam non atque! Quae velit possimus ad qui voluptatibus, sunt nam ducimus id cupiditate impedit. Eos voluptas provident voluptates.
                                                </p>


                                                <ul className="team-icon">
                                                    <li><a href="#" className="instagram">
                                                        <FaInstagram/>    
                                                    </a></li>
                                                    <li><a href="#" className="telegram">
                                                        <FaTelegramPlane/>   
                                                    </a></li>
                                                    <li><a href="#" className="whatsapp">
                                                        <FaWhatsapp/>  
                                                    </a></li>
                                                </ul>
                                                </div> 
                                         </div>
                                </div>


                                <div className="col-sm-6 col-md-4">
                                        <div className="team-item">
                                            <img src="" alt="pic" className="team-img" />   
                                            <h3>خدمات </h3>
                                            <hr />
                                            <div className="team-info">
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet eaque magnam non atque! Quae velit possimus ad qui voluptatibus, sunt nam ducimus id cupiditate impedit. Eos voluptas provident voluptates.
                                                </p>


                                                <ul className="team-icon">
                                                    <li><a href="#" className="instagram">
                                                        <FaInstagram/>    
                                                    </a></li>
                                                    <li><a href="#" className="telegram">
                                                        <FaTelegramPlane/>   
                                                    </a></li><li><a href="#" className="whatsapp">
                                                        <FaWhatsapp/>  
                                                    </a></li>
                                                </ul>
                                                </div> 
                                         </div>
                                </div>
                                <div className="col-sm-6 col-md-4" >
                                        <div className="team-item">
                                            <img src="" alt="pic" className="team-img" />   
                                            <h3>خرید حضوری</h3>
                                            <hr />
                                            <div className="team-info">
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet eaque magnam non atque! Quae velit possimus ad qui voluptatibus, sunt nam ducimus id cupiditate impedit. Eos voluptas provident voluptates.
                                                </p>


                                                <ul className="team-icon">
                                                    <li><a href="#" className="instagram">
                                                        <FaInstagram/>    
                                                    </a></li>
                                                    <li><a href="#" className="telegram">
                                                        <FaTelegramPlane/>   
                                                    </a></li>
                                                    <li><a href="#" className="whatsapp">
                                                        <FaWhatsapp/>  
                                                    </a></li>
                                                </ul>
                                                </div> 
                                         </div>
                                </div>
                                

                    </div>
                </div>
        </section>
    )
}
export default About;