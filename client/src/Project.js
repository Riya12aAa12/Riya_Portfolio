import swal from "sweetalert"; //for alert box

import './css/project.css'

 import p_img1 from './imgs/m.jpg';
 import p_img2 from './imgs/port.jpg';
 import p_img3 from './imgs/e.jpg';


function Project()
{

    function message()
    {
        swal({
            title: "Hey !! ",
            text: 'You are already on this project.',
            icon: "warning",
        })
    } 

    return(
        <>
            <div className="container-fluid project_container" id="riya" style={{"overflowX":"hidden"}}>

                {/* project heading */}
                <div className="row project_hding ">
                    <h4 className="mt-5" id="project"> CASE STUDIES </h4> <br />
                    <h1><b> Project Work </b></h1>
                </div>

                <div className="row py-5">

                    {/* project 1 */}
                    <div className="col-md-3 py-3 mt-3 project_card mx-auto" id="project3">
                        
                        <div className="project_img text-center ">
                             <img src= {p_img3} alt="" className="project_img_size" />    
                        </div>

                        <div className="project_intro mt-4">
                            <h3>EdUnity</h3> 
                            <h4>Mern Stack Based On Eduvation Platform</h4>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>

                        <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                
                            </h6>       

                        </h5>

                        <h6 className='project_tech_hd'>Technology Used</h6>
                        <h3 className='mb-2 text-light'>
                            <i class="fa-brands fa-html5 mx-2"></i>
                            <i class="fa-brands fa-css3-alt mx-2"></i>
                            <i class="fa-brands fa-js-square mx-2"></i>
                            <i class="fa-brands fa-bootstrap mx-2"></i>
                            <i class="fa-brands fa-react mx-2"></i>
                            <i class="fa-brands fa-node mx-2"></i>
                            <i class="fa-brands fa-npm mx-2"></i>
                            <i class="fa-brands fa-git-alt mx-2"></i>
                            <i class="fa-brands fa-envira mx-2"></i>
                        </h3>

                        

                        <center><button className="btn btn_effect me-4 p-2 my-1 project_links"  style={{"float":"right"}}>
                            <a href='https://github.com/Riya12aAa12/MoviesStore' target="_blank">
                               Source Code <i className="fa-solid fa-arrow-right-long ms-1"></i>
                            </a>   
                         </button></center>
                            

                    </div>

                    {/* project 2 */}
                    <div className="col-md-3 p-2 mt-3 project_card mx-auto" id="project2">
                        
                        <div className="project_img text-center ">
                            <img src= {p_img2} alt="" className="project_img_size" /> 
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>PORTFOLIO WEBSITE</h2>
                            <h3>React Based Portfolio Website</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                        <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                
                            </h6>       

                        </h5>

                        <h6 className='project_tech_hd'>Technology Used</h6>
                        <h3 className='mb-2 text-light'>
                            <i class="fa-brands fa-html5 mx-2"></i>
                            <i class="fa-brands fa-css3-alt mx-2"></i>
                            <i class="fa-brands fa-js-square mx-2"></i>
                            <i class="fa-brands fa-bootstrap mx-2"></i>
                            <i class="fa-brands fa-react mx-2"></i>
                            <i class="fa-brands fa-node mx-2"></i>
                            <i class="fa-brands fa-git-alt mx-2"></i>
                            <i class="fa-brands fa-npm mx-2"></i>
                            <i class="fa-brands fa-envira mx-2"></i>
                        </h3>

                        <center><button className="btn btn_effect my-1 ms-4 p-2 project_links" onClick={message} style={{"float":"left"}}>
                            Live Preview 
                        <i class="fa-solid fa-arrow-right-long ms-1"></i> 
                        </button></center>
                        
                        <center><button className="btn btn_effect me-4 p-2 my-1 project_links"  style={{"float":"right"}}>
                            <a href='https://github.com/Riya12aAa12' target="_blank">
                                Source Code <i className="fa-solid fa-arrow-right-long ms-1"></i>
                            </a>     
                        </button></center>

                    </div>

                    {/* project 3  */}
                    <div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                             <img src= {p_img1} alt="" className="project_img_size" /> 
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>Moviex</h2>
                            <h3>Front End Based Application</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Key Features</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technology Used</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-bootstrap mx-2"></i>
                        <i class="fa-brands fa-github-alt mx-2"></i>
                        </h3>

                             

                            <center><button className="btn btn_effect my-1 me-4 p-2 project_links" style={{"float":"right"}}> 
                                <a href="https://github.com/Riya12aAa12/MoviesStore" target="_blank"> Source Code  <i className="fa-solid fa-arrow-right-long ms-1"></i> 
                                </a> 
                            </button></center>

                    </div>

                    <h4 className='mt-4 pe-4 text-end andmore'>
                        <a href='https://github.com/Riya12aAa12' target='_blank'>
                             and More...
                        </a>
                    </h4>

                </div>

            </div>

        </>
    )
}

export default Project;