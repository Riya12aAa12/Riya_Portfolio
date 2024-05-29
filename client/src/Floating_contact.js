import ReactTooltip from "react-tooltip"
import swal from "sweetalert"; //for alert box

import './css/floating_contact.css'

import './js/floating_contact_anim.js'

// import float_cont_img from './imgs/floating_contact.png'


function Float_contact()
{

    function contact_alert2() {
        swal({
            title: "ATTENTION !!",
            text: "Thank you for showing interest !! (^‿^) \n \n I will not be able to get your message from the following contact form because of limitations of open source free domain hoisting and it's limitation to host a dynamic website. However you can contact me using any of the attached social link, mail or contact number. You can access the source code of the dynamic components of this very website on my GitHub account. \n \n THANK YOU!! (❛‿❛)",
            icon: "warning",})
    }

    return(
        <>
            <div className="float_con_2 p-0 text-end" id="float_contact" style={{"overflowX":"hidden"}}>
                <a href="#" data-bs-toggle="modal" data-bs-target="#contactModal">
                    {/* <img src={ float_cont_img } alt="" className="float_cont_img_size"  data-tip="Get in Touch !!" type="button" onClick={contact_alert2} /> */}
                    <ReactTooltip place="top" type="light" effect="float"/>
                </a>    
            </div>
        </>
    )
}

export default Float_contact;