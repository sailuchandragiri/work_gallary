import React from 'react';
import "./landing_page.css";
import Friendssinging from "../assets/friends_singing.png";
import Share from "../assets/share.png";
import Upload from "../assets/upload.png";
import Hifi from "../assets/hifi.png";
import Connect from "../assets/connect.png";
import PortfolioImg from "../assets/portfoliogroup.png";
import WorkAi_1 from "../assets/work_ai_1.png";
import WorkAi_2 from "../assets/work_ai_2.png";
import WorkAILoading from "../assets/work_ai_loading.png";
import NetworkUpload from "../assets/networkUpload.png";
import Shareframe from "../assets/ShareFrame.png";
import Copyframe from "../assets/CopyFrame.png";
import SearchImg from "../assets/Search.png";
import Instagram from "../assets/instagram.png";
import Cancle from "../assets/x-logo.png";

function LandingPage(){
    return(
       <>
       <div className='connect_container'>
        <header className='heading'>theworkgallary</header>
        <div className='connect'>
          <div className='left_container'>
            <div>
            <img src={Friendssinging} alt="friends-singing"/>
            </div>
            <div>
            <img src={Share} alt="friends-singing"/>
            </div>
          </div>
          <div className='connect_content'>
              <div>
                <img src={Connect} alt="connect"/>
              </div>
              <div className='connect_subcontent'>
              Craft Your Profile with WorkGallery, Elevate Your Presence, and <br/> Connect with Like-minded Creatives
              </div>
              <div className='connect_button'>
                <button className='btn_connect'>Join the waitlist</button>
              </div>
          </div>
          <div className='right_container'>
            <div>
            <img src={Upload} alt="friends-singing"/>
            </div>
            <div>
            <img src={Hifi} alt="friends-singing"/>
            </div>
          </div>
        </div>
       </div>
       <div className='portfolio_container'>
          <div className='portfolio_heading'>Say <strong className='portfolio_style'>Goodbye to the Old Style </strong>of <br/>Editing Portfolio</div>
          <div className='portfolio_subcontainer'>Choose from 1000s of themes based on your profession</div>
          <div className='portfolio_subdivider'>
                <button className='portfolio_button'>
                  <div>Feasible</div>
                  <div>|</div>
                  <div>Scalable</div>
                  <div>|</div>
                  <div>Optimized</div>
                  </button>
              </div>
          <div className='portfolio_image'>
            <img src={PortfolioImg} alt="portfolio"/>
          </div>
       </div>
       <div className='work_ai'>
        <div className='work_ai_title'>
          <strong className='work_ai_style'>Workgallery AI:</strong> Your Secret <br/> Weapon for a Portfolio that Wows
        </div>
        <div className='work_ai_subtitle'>
        Power up your workflow: Extensions & pipelines meet editing nirvana.
        </div>
        <div className='work_ai_container'>
          <div>
            <img src={WorkAi_1} alt="work_ai_1"/>
          </div>
          <div>
            <img src={WorkAILoading} alt="work_ai_loading"/>
          </div>
          <div>
            <img src={WorkAi_2} alt="work_ai_2"/>
          </div>
        </div>
       </div>
      <div className='networking_container'>
        <div className='cards_container'>
          <div className='card_container'>
            <div><img src={NetworkUpload} alt="network upload"/></div>
            <div className='network_title'>Upload any type of documents</div>
            <div className='network_subtitle'>Effortlessly upload any document, any <br/> format, any time.</div>
          </div>
          <div className='card_container'>
            <div><img src={Shareframe} alt="network upload"/></div>
            <div className='network_title'>Upload any type of documents</div>
            <div className='network_subtitle'>Effortlessly upload any document, any <br/> format, any time.</div>
          </div>
          <div className='card_container'>
            <div><img src={Copyframe} alt="network upload"/></div>
            <div className='network_title'>Upload any type of documents</div>
            <div className='network_subtitle'>Effortlessly upload any document, any <br/> format, any time.</div>
          </div>
        </div>
        <div className='net_title'>
          <strong className='net_title_style'>Networking Just Got Better</strong> with<br/> The Work Gallery
        </div>
        <div className='net_subtitle'>Power up your workflow: Extensions & pipelines meet editing nirvana.</div>
        <div className='search_img'>
          <img src={SearchImg} alt="search_image"/>
        </div>
      </div>
      <div className='create_container'>
          <div className='create_title'>Connect Create Elevate</div>
          <div className='create_button'>
                <button className='btn_connect'>Join the waitlist</button>
              </div>
      </div>
      <footer className='footer_container'>
          <div className='footer_logos'>
            <div>
              <img src={Instagram} alt="Instagram"/>
            </div>
            <div>
              <img src={Cancle} alt="Cancel"/>
            </div>
          </div>
          <div  className='footer_text'>
            <div>Blogs</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Careers</div>
            <div>Technologies</div>
          </div>
          <div><hr/></div>
          <div className='copy_right'>Copyright Text</div>
      </footer>
       </>
    );
}
export default LandingPage;