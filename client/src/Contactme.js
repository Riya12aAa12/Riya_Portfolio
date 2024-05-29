// CONTACT ME FORM

import React, { useState } from "react";
import swal from "sweetalert"; //for alert box

import "./css/contactme.css";

function Contactme() 
{

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });


  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user)
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, number, message } = user;

    const res = await fetch("http://localhost:4000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        number,
        message,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Please try again");
    } 
    
    else 
    {
      swal({
        title: "Message Send",
        text: "Thank you !! (^‿^) \n I will get in touch with you soon. (❛‿❛)",
        icon: "success",
      });
    }
  };

  return (
    <>
      <div className="modal fade" id="contactModal" >
        <div className="modal-dialog modal-dialog-centered modal-xl" >
          <div className="modal-content" id="nam">
            <div className="modal-body p-0">
              <div className="container-fluid overflow-hidden p-0">
                <div className="row p-0 ">
                  <div className="col-md-12 mdl2 px-5 pt-4 ">
                    <h2 className="position-absolute end-0 me-4">
                      <i
                        data-bs-dismiss="modal"
                        className="fa fa-close"
                      ></i>
                    </h2>
                    <br />
                    <h2>Let's Talk !!</h2>
                    <h5 className="mb-5">
                      <b>Full time job opportunity</b>, freelance opportunity or
                      even a coffee. <br /> However, if you have any other
                      request or question, dont't hesitate to contact me using
                      this form.
                    </h5>

{/* main form start-------------------------------------- */}

                    <form method="post" >

                      <div className="mb-3">
                        <label className="form-label form_ip_anim1">
                          NAME *
                        </label>
                        <input
                          type="text"
                          className="form-control form_css form_ip_anim1"
                          placeholder="enter your name"
                          name="name"
                          value={user.name}
                          onChange={handleInputs}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label form_ip_anim2">
                          E-MAIL *
                        </label>
                        <input
                          type="email"
                          className="form-control form_css form_ip_anim2"
                          placeholder="enter your e-mail id"
                          name="email"
                          value={user.email}
                          onChange={handleInputs}
                        />
                      </div>

                      <div className="mb-3 form_ip_anim1">
                        <label className="form-label">CONTACT NUMBER *</label>
                        <input
                          type="text"
                          className="form-control form_css form_ip_anim1"
                          placeholder="enter contact number"
                          name="number"
                          value={user.number}
                          onChange={handleInputs}
                        />
                      </div>

                      <div className="mb-3 form_ip_anim2">
                        <label className="form-label">MESSAGE *</label>
                        <textarea
                          className="form-control form_css form_ip_anim2"
                          placeholder="enter your message"
                          name="message"
                          value={user.message}
                          onChange={handleInputs}
                        ></textarea>
                      </div>

                      <button id="submit" type="submit" className="mt-1 form_ip_anim3 pushable" onClick={postData}>
                        <span className="front">SUBMIT <i className="fa-solid fa-paper-plane"></i> </span>
                      </button>
                    </form>

{/* main form end-------------------------------------- */}

                    {/* SOCIAL CONNECT ICONS */}
                    <center>
                      <a
                        href="https://www.linkedin.com/in/riya-kumari-202930221"
                        target="_blank"
                      >
                        <i
                          title="Linkedin"
                          className="fa-brands fa-linkedin-in mdl_1_icon form_ip_anim3"
                        ></i>
                      </a>

                      <a
                        href="https://github.com/Riya12aAa12"
                        target="_blank"
                      >
                        <i
                          title="GitHub"
                          className="fa-brands fa-github mdl_1_icon form_ip_anim3"
                        ></i>
                      </a>

                      <a href="https://wa.me/919771122510" target="_blank">
                        <i
                          title="What's App"
                          className="fa-brands fa-whatsapp mdl_1_icon form_ip_anim3"
                        ></i>
                      </a>

                      <a href="mailto: rk9709236856@gmail.com">
                        <i
                          title="G-Mail"
                          className="fa fa-envelope mdl_1_icon form_ip_anim3"
                        ></i>
                      </a>

                      <a href="tel: 9911598285" target="_blank">
                        <i
                          title="Phone"
                          className="fa fa-phone mdl_1_icon form_ip_anim3"
                        ></i>
                      </a>
                    </center>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactme;