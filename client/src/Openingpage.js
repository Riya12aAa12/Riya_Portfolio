import './css/openingpage.css'
import Navbar from './Navbar';


function Openingpage()
{
    return(
        <>
            <div className="container-fluid opening_page mt-2 pb-0" style={{"overflowX":"hidden"}}>

                <Navbar></Navbar>
                
                <div className="row mt-5 mb-1 pt-5 ">

                <div className="col-lg-5 offset-md-1 intro mb-2 mx-auto text-center">
                    Hi, <br /> I'm Riya,
                    <div class="morph_cont">
                        <div class="morph_word">Full Stack Developer</div>
                        <div class="morph_word">Front End Developer</div>
                        
                        <div class="morph_word">Graphic Designer </div>
                    </div>
                    <p>I build interactive websites that run <br /> across platforms & devices.</p>
                </div>

                <div className="col-lg-5 text-center intro_img mb-5 text-center offset-md-1 mx-auto">
                    RJ.
                </div>

                </div>

                 {/* wave start */}

                <div className="row">

                <div className="wave_anim" style={{"height": 250}}>
                    <div className="wave wave1"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                    <div className="wave wave4"></div>
                </div>

                </div>

                {/* wave end */}

            </div>

        </>
    )
}    

export default Openingpage;