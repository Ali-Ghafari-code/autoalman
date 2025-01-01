import "./contact.css";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";

function Contact(){
    return(
            <div className="container-fluid form">
                <div className="row">
                    <div className="col-md-6">
                    <div className="contact-box">
                            <div className="contact-meta">
                                <h1 className="text">فرم تماس</h1>
                                <div className="input-box">
                                    <input type="text" className="contact name" placeholder="نام و نام خانوادگی"/>
                                    <input type="text" className="contact number" placeholder="شماره تماس"/>
                                    <input type="text" className="contact email" placeholder="ایمیل"/>
                                    <textarea name="message" id="message" placeholder="پیام شما"></textarea>
                                    <button type="submit" className="send">ارسال پیام</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 color-sec">
                        <h1>راه های ارتباطی</h1>
                        <address className="mt-5">
                            <strong><HiOutlineMailOpen /> ایمیل : developer@javascript.com</strong>
                            <br />
                            <br />
                            <p className="mt-2">
                                <strong><FaPhoneVolume /> شماره تماس : 09197769005 </strong>
                            </p>
                            <p className="mt-4"><CiLocationOn /> <strong>آدرس : </strong>تهران - ایالات متحده افسریه</p>
                        </address>
                    </div>
                </div>
            </div>
        
    )
}
export default Contact;