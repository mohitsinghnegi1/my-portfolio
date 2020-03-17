import React from 'react';

import { PDFExport } from '@progress/kendo-react-pdf';
import './resume.scss';

import profileimg from '../../img/mohit.jpg';
class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.downloadPDF = this.downloadPDF.bind(this);
  }

  componentDidMount() {
    //Get Lead Details by LeadId
  }

  downloadPDF() {
    this.pdfExportComponent.save();
  }

  render() {
    return (
      <div className='container-fluid p-0'>
        <div style={{ marginTOp: '-400px' }} className='pullUp'>
          <div className='application-form-in-app-preview  mr-lg-4 mb-5 container p-3 pl-md-4 p-sm-5 '>
            <div className='app-form-preview-header row pl-0 pr-3'>
              <div
                onClick={this.downloadPDF}
                className='apply-fbtn'
                style={{ cursor: 'pointer' }}>
                Download PDF
              </div>
            </div>
            <PDFExport
              forcePageBreak='.page-break'
              ref={(component) => (this.pdfExportComponent = component)}
              paperSize='A4'
              scale={0.5}
              margin='0.1cm'
              fileName='mohitsinghnegi'>
              <div id='main_container' className=' mt-4   p-3 container resume'>
                <div>
                  <div>
                    {/* <!-- HEADER --> */}
                    <div id='header'>
                      {/* <!-- LOGOTYPE/NAME --> */}
                      <div class='header_logotype_container'>
                        <h1 class='logotype_name'>
                          Mohit&nbsp; <span class='purple'>Singh </span>
                        </h1>
                        <h2 class='logotype_occupation pl-1'>
                          FullStack Web Developer
                        </h2>
                      </div>
                      {/* <!-- MAIN MENU --> */}
                      <div class='header_menu_container'>
                        <div class='clear'></div>
                        <ul class='header_menu horizontal_list'>
                          <li>
                            <a class='no_border ' href='#'>
                              Competitive Coder
                            </a>
                          </li>
                          <li>
                            <a href='#'>Creative Thinker</a>
                          </li>
                          <li>
                            <a href='#'>Responsible</a>
                          </li>
                          <li>
                            <a href='#'>Dedicated</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- LEFT COL --> */}
                    <div id='left_col'>
                      <div class='profile_frame'>
                        <div class='profile_picture'>
                          <img
                            src={profileimg}
                            style={{ height: '100%', width: '100%' }}
                            alt='profile picture'
                          />
                        </div>
                      </div>
                      <div class='hello_content'>
                        <h2>Hello!</h2>
                        <p>
                          I'm passionate about technology and human behavior,
                          hardworker and a fast-learner with experience in
                          around 10 different countries studying, working and
                          volunteering.
                        </p>
                      </div>
                      <div class='contact_details_content'>
                        <h2>Contact details</h2>
                        <p class='purple'>Phone:</p>
                        <p>+34 123 456 789</p>
                        <p class='purple'>Email:</p>
                        <p>jlalovi@gmail.com</p>
                        <p class='purple'>Adress:</p>
                        <p>Someplace, 5</p>
                        <p>Jaén, Spain</p>
                        <p>23001</p>
                      </div>
                      <a
                        href='mailto:jlalovi@gmail.com'
                        class='send_message_button'>
                        <span class='cut1'></span>
                        <span class='cut2'></span>
                        <span class='content'>
                          Send me a message{' '}
                          <span class='fontawesome-double-angle-right'></span>
                        </span>
                      </a>
                      <div class='get_social_content'>
                        <h2>Get social</h2>
                        <ul class='social_icons horizontal_list'>
                          <li>
                            <a
                              class='facebook'
                              href='https://www.facebook.com/jlalovi'>
                              <span class='entypo-facebook-circled'></span>
                              <span class='invisible'>Facebook</span>
                            </a>
                          </li>
                          <li>
                            <a
                              class='twitter'
                              href='https://twitter.com/jlalovi'>
                              <span class='entypo-twitter-circled'></span>
                              <span class='invisible'>Twitter</span>
                            </a>
                          </li>
                          <li>
                            <a
                              class='linkedin'
                              href='https://www.linkedin.com/in/jlalovi/en'>
                              <span class='entypo-linkedin-circled'></span>
                              <span class='invisible'>LinkedIn</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- PROFILE CONTENT --> */}
                    <div id='content_container'>
                      <div class='block'>
                        <h1>Profile</h1>
                        <blockquote class='profile_quote'>
                          <p>
                            "I am passionate programmer interested in
                            competitive programming and full stack developmnet
                            .Android app development and UI/UX designing are
                            some other fields that interests me the most . I
                            believe in practical work rather then theoretical."
                            <i
                              class='fa fa-quote-right fa-3x'
                              style={{
                                position: 'absolute',
                                right: '40px',
                                top: '25px',
                                color: '#3d3a41'
                              }}
                              aria-hidden='true'></i>
                          </p>
                          {/* <span class='entypo-quote'></span> */}
                        </blockquote>
                      </div>
                      <div class='block'>
                        <h2>A few words about me</h2>
                        <p>
                          Until now, in my life, I change from active moments
                          with a lot of variety, challenges and improvisations,
                          to moments of tranquility and stability, being
                          difficult to stay in a place during a long time. I
                          consider myself a tolerant and respectful person with
                          open mind and quite honest. I really like to listen
                          people stories and backgrounds and their different
                          experiences around the world.
                        </p>
                      </div>
                      <div class='horizontal_line'>
                        <div class='line_left'></div>
                        <div class='left_circle'></div>
                        <div class='central_circle'></div>
                        <div class='right_circle'></div>
                        <div class='line_right'></div>
                      </div>
                      <div class='block'>
                        <h2>Philosophy</h2>
                        <p>
                          I belive in ethic and moral not in imposed rules that
                          you "have to" do or follow.
                        </p>
                        <div class='philosophy_content'>
                          <p>
                            I believe life is made from different shades of
                            grey, not from black and white. Furthermore, as a
                            human being with rationality, I think it is our duty
                            to take care of the world and treat others as one
                            would like others to treat oneself. This way of
                            perceiving reality affects my beliefs and my way of
                            behaving. Summarizing on several points:
                          </p>
                          <ul>
                            <li>Pragmatic</li>
                            <li>Honest</li>
                            <li>Respectful</li>
                            <li>Open-minded</li>
                            <li>Coherent</li>
                          </ul>
                          <div class='clear'></div>
                        </div>
                      </div>
                      <div class='horizontal_line'>
                        <div class='line_left'></div>
                        <div class='left_circle'></div>
                        <div class='central_circle'></div>
                        <div class='right_circle'></div>
                        <div class='line_right'></div>
                      </div>
                      <div class='last block'>
                        <h2>Interests & Hobbies</h2>
                        <p>
                          I'm passionate about technology and human behavior,
                          both determine almost all my interests and hobbies:
                        </p>
                        <ul>
                          <li>Visiting new places</li>
                          <li>Meeting people</li>
                          <li>Having new experiences</li>
                          <li>Hiking and Biking</li>
                          <li>Web Developing</li>
                          <li>Computer Gamming</li>
                          <li>Manga and Anime</li>
                        </ul>
                      </div>
                    </div>
                    <div class='clear'></div>
                    {/* <!-- FOOTER --> */}
                    <div id='footer'>
                      <p class='footer_name'>Mohit Singh Negi CV 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </PDFExport>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
