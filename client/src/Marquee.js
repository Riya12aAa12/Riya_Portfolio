import './css/marquee.css'

 import m1 from './imgs/java.png'; 
 import m2 from './imgs/html.png';
 import m3 from './imgs/css.png';
 import m4 from './imgs/js.png';
 import m5 from './imgs/mongo.png';
 import m6 from './imgs/react.png';
 import m7 from './imgs/node.png';
 import m8 from './imgs/git.png';
 import m9 from './imgs/g.jpg';
 import m10 from './imgs/npm.png';
 import m11 from './imgs/web.jpg';
 import m12 from './imgs/java.png';
 import m13 from './imgs/react.png';
 


function Marquee()
{
    return(
        <>
            <div className="container-fluid" style={{"overflowX":"hidden"}}>
                <div className="row mq_cont py-4">
                    
                    <div className="col-md-10 mx-auto marquee_bg">
                        
                        <marquee className="pt-4" scrollamount="15" behavior="alternate">
                        
                        <img src={m1} alt="" className="m_size_1 mx-5" />
                        <img src={m2} alt="" className="m_size_2 mx-5" />
                        <img src={m3} alt="" className="m_size_3 mx-5" />
                        <img src={m4} alt="" className="m_size_1 mx-5" />
                        <img src={m5} alt="" className="m_size_1 mx-5" />
                        <img src={m6} alt="" className="m_size_1 mx-5" />
                        <img src={m7} alt="" className="m_size_1 mx-5" />
                        <img src={m8} alt="" className="m_size_6 mx-5" />
                        <img src={m9} alt="" className="m_size_1 mx-5" />
                        <img src={m10} alt="" className="m_size_5 mx-5" />
                        <img src={m11} alt="" className="m_size_1 mx-5" />
                        <img src={m12} alt="" className="m_size_1 mx-5" />
                        <img src={m13} alt="" className="m_size_6 mx-5" />
                        
                    </marquee>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Marquee;