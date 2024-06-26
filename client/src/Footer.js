import './css/footer.css'




function Footer()
{
    return(
        <>
            <div className="container-fluid footer_bg" style={{"overflowX":"hidden"}}>
                
                <div className="row pt-4 mb-4">
                    <div className="col-md-2 mx-auto justify-content-center text-center">
                        {/* <img src={ footer_logo } alt="" className="footer_logo_size" id="footer_img" /> */}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-5 footer_text d-flex flex-wrap justify-content-around mx-auto text-center" id="footer_text">
                        <div className='mx-auto'> <i class="fa-solid fa-envelope"></i> rk9709236856@gmail.com</div>
                        <div className='mx-auto'> <i className="fa-solid fa-phone me-1"></i> +91 9771122510</div>
                    </div>
                </div>

                <div className="row pb-4">
                    <div className="col-md-3 d-flex justify-content-around footer_social mx-auto ">
                        
                        <div> <a href="https://github.com/Riya12aAa12" target="_blank"><i title="GitHub" className="fa-brands fa-github"></i></a> </div>
                        
                        <div> <a href="	https://www.linkedin.com/in/riya-kumari-202930221" target="_blank"><i title="Linkedin" className="fa-brands fa-linkedin"></i></a> </div>
                        
                        <div> <a href="mailto: rk9709236856@gmail.com"><i title="G-Mail" className="fa-solid fa-envelope-open"></i></a> </div>
                        
                        <div> <a href="tel: 9911598285" target="_blank"><i title="Call" className="fa-solid fa-phone"></i></a> </div>
                        
                        <div> <a href="https://wa.me/919771122510" target="_blank"><i title="What's App" className="fa-brands fa-whatsapp"></i></a> </div>
                    
                    </div>
                </div>
            </div>

            <div className="contaier-fluid footer2_bg py-1" style={{"overflowX":"hidden"}}>
                <div className="row text-center"><h6 style={{"color": "#7b7f92"}}> Designed & Developed by Riya Kumari <i className="fa-regular fa-hand-peace"></i>. </h6></div>
            </div>

        </>
    )
}

export default Footer;