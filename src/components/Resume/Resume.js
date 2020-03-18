import React from 'react';

import { PDFExport } from '@progress/kendo-react-pdf';
import './resume.scss';

import profileimg from '../../img/mohit.jpg';
import TechnicalSkills from './TechnicalSkills';
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
        <div className='row dl-r '>
          <a
            href='#move'
            className='col-lg-1 resb offset-lg-5 '
            style={{
              backgroundColor: '#ffc107',
              color: '#fff',
              cursor: 'pointer'
            }}>
            <i class='fa fa-3x fa-arrow-circle-o-down' aria-hidden='true'></i>
          </a>
          <div
            className=' col-lg-3 resb '
            onClick={this.downloadPDF}
            style={{ cursor: 'pointer' }}>
            <i class='fa  fa-file-text-o' aria-hidden='true'></i>
            &nbsp;Download Resume
          </div>
          <div className=' col-lg-3 resb '>
            <i class='fa fa-whatsapp' aria-hidden='true'></i>
            &nbsp;+91-8194997428
          </div>
        </div>
        <div style={{ marginTOp: '-400px' }} className='pullUp'>
          <div
            id='move'
            className='application-form-in-app-preview  mr-lg-5 mb-5 container p-3 pl-md-0 p-sm-5 '>
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
                          Software Developer
                        </h2>
                      </div>
                      {/* <!-- MAIN MENU --> */}
                      <div class='header_menu_container'>
                        <div class='clear'></div>
                        <ul class='header_menu horizontal_list'>
                          <li>
                            <a class='no_border ' href='#'>
                              Competitive coder
                            </a>
                          </li>
                          <li>
                            <a class=' ' href='#'>
                              Full stack developer
                            </a>
                          </li>
                          <li>
                            <a href='#'>UI/UX designer</a>
                          </li>
                          <li>
                            <a href='#'>Creative thinker</a>
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
                        <h2>Personal</h2>

                        {/* <p class='purple mb-0'>Language:</p> */}
                        {/* <p>English , Hindi</p> */}
                      </div>
                      <div class='contact_details_content'>
                        {/* <h2>Contact details</h2> */}
                        <p class='purple'>Mobile No:</p>
                        <p>+81-9008645536</p>
                        <p class='purple'>Email:</p>
                        <p>mohitsin3232@gmail.com</p>
                        <p class='purple mb-0'>Data of birth:</p>
                        <p>21 June 2020</p>
                        {/* <p class='purple'>Adress:</p>
                        <p>Sri durga pg for gents</p>
                        <p>Koramangala I block , Bangaluru</p>
                        <p>Karnataka , 560034</p> */}
                      </div>
                      <h2>Education</h2>
                      <p class='purple'>Lovely professional University</p>
                      <p className='date'>B.tech Cse &nbsp;(2016 - 2020)</p>
                      <p className='date'>CGPA : &nbsp;9.23</p>
                      <h2 id='skills'>Technical Skills</h2>
                      <TechnicalSkills />
                      <div class='get_social_content'>
                        <h2>Profiles</h2>
                        <ul class='profiles_icons '>
                          <li>
                            <p class='purple mb-0'>Leetcode.com</p>
                            <div>/mohit_11615192</div>
                          </li>
                          <li>
                            <p class='purple mb-0'>Codechef.com</p>

                            <div>/users/mohit_11615192</div>
                          </li>
                          <li>
                            <p class='purple mb-0'>Hackerrank.com</p>

                            <div>/mohitsin3232</div>
                          </li>
                          {/* <li>
                            <p class='purple '>Hackerearth.com</p>

                            <div>/@mohit655</div>
                          </li>
                          <li>
                            <p class='purple '>LinkedIn.com</p>

                            <div>/in/mohit-singh-9819a3148</div>
                          </li> */}
                          <li>
                            <p class='purple mb-0'>Github.com</p>

                            <div>/mohitsinghnegi1</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- PROFILE CONTENT --> */}
                    <div id='content_container' style={{ height: '1460px' }}>
                      <div class='block' id='intro'>
                        <h1>About me</h1>
                        <blockquote class='profile_quote'>
                          <p>
                            " I am passionate programmer interested in
                            competitive programming and full stack development .
                            Android app development and UI/UX designing are some
                            other fields that interests me the most . I believe
                            in practical work rather then theoretical. "
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
                      <div class='block' id='experience'>
                        <h2>Experience</h2>
                        <table className='experience gt'>
                          <th></th>
                          <th></th>
                          <tr>
                            <td>
                              <div className='bold'>Software Engineer</div>
                              <div className='date'>June 2019 - Present</div>
                            </td>
                            <td>
                              <div className='bold'>
                                Leadsquared - Marketxpenders
                              </div>
                              <div>
                                worked as a Software developer intern .developed
                                various portals using react framework , Restful
                                API’s and Leadsquared CRM .
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold'>Graphic designer</div>
                              <div className='date'>Jan 2019 - Mar 2019</div>
                            </td>
                            <td>
                              <div className='bold'>Redjee Software labs</div>
                              <div>
                                worked as a graphic designer, created
                                banners,posters logo,infographic images.
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div class='horizontal_line'>
                        <div class='line_left'></div>
                        <div class='left_circle'></div>
                        <div class='central_circle'></div>
                        <div class='right_circle'></div>
                        <div class='line_right'></div>
                      </div>
                      <div class='block' id='projects'>
                        <h2>Projects</h2>
                        <table className='experience gt'>
                          <th></th>
                          <th></th>
                          <tr>
                            <td>
                              <div className='bold'>KIIT University</div>
                              <div className='date'>Jan - 2020- March 2020</div>
                            </td>
                            <td>
                              <div>
                                <span className='bold'>Production link - </span>

                                <a
                                  href='https://international.kiit.ac.in'
                                  className='link'>
                                  International.kiit.ac.in
                                </a>
                              </div>
                              <div>
                                CRM Solution for Educational University which
                                allows student to enroll for various courses and
                                view/search their application history through
                                dashboard . Automated email will be send to the
                                student/ Admin based on activity . An Automated
                                Offer letter gets generated after background
                                verification.
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold'>Referral portal</div>
                              <div className='date'>Nov - 2019 - Jan 2020</div>
                            </td>
                            <td>
                              <div>
                                <span className='bold'>Production link - </span>

                                <a
                                  href='https://lsqestates.lsqportal.com'
                                  className='link'>
                                  Lsqestates.lsqportal.com
                                </a>
                              </div>
                              <div>
                                portal that allows the authentic user to
                                register themselves as an Agent and refer lead
                                for the organisation
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold'>LSQ Money</div>
                              <div className='date'>Oct 2019 - Nov 2020</div>
                            </td>
                            <td>
                              <div>
                                <span className='bold'>Production link - </span>

                                <a
                                  href='https://lendingdemo1.lsqportal.com/'
                                  className='link'>
                                  Lendingdemo1.lsqportal.com
                                </a>
                              </div>
                              <div>
                                LSQ Money is an online platform which connects
                                borrowers and lender for loan. technologies
                                used: reactjs,bootstrap,rest API,CRM
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className='bold'>External Sorting</div>
                              <div className='date'>
                                March 2020 - March 2020
                              </div>
                            </td>
                            <td>
                              <div>
                                Implemnted external sorting using python . This
                                algorithm works when the data to be sorted does
                                not fit into the RAM and instead they resides in
                                the slower external memory.
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div class='horizontal_line'>
                        <div class='line_left'></div>
                        <div class='left_circle'></div>
                        <div class='central_circle'></div>
                        <div class='right_circle'></div>
                        <div class='line_right'></div>
                      </div>
                      <div class='last block'>
                        <h2>Achievements</h2>
                        <table className='experience gt'>
                          <th></th>
                          <th></th>
                          <tr>
                            <td>
                              <div className='bold'>Leadsquared Award</div>
                              <div className='date'>June 2019 - Dec 2019</div>
                            </td>
                            <td>
                              <div>
                                <span className='bold'>
                                  Star of the quater award{' '}
                                </span>
                              </div>
                              <div>
                                Achieved <b>Star of the quater</b> award for a
                                best Performer in Portal Development .
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold'>PI-A-Thon Hackathone</div>
                              <div className='date'>May 2018</div>
                            </td>
                            <td>
                              <div>
                                Participated in this hackathone and Secured
                                first position - Assisted and Collaburated on
                                project crowd analysis .<br />
                                Worked on technolgies such as Python , Bootstrap
                                , Php, mysql
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold'>
                                Competitive programming
                              </div>
                              <div className='date'>Oct 2018 - Present</div>
                            </td>
                            <td>
                              <div>100+ days of continous coding .</div>
                              <div>
                                Solved over 1200 programming questions on
                                various platform .
                              </div>
                              <div>
                                Ranked top 1 among all student of my university
                                in stop stalk
                              </div>
                              <div>4 star coder at codechef .</div>
                              <div>
                                Secured 289 rank in December challenge 2018 and
                                188 rank in October challenge 2019 division 2 in
                                Codechef
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class='clear'></div>
                    {/* <!-- FOOTER --> */}
                    <div id='footer'>
                      {/* <p class='footer_name'>Mohit Singh Negi CV 2020</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </PDFExport>
            <div className='resume'>
              <a
                href='mailto:mohitsin3232@gmail.com'
                class='send_message_button'>
                <span class='cut1'></span>
                <span class='cut2'></span>
                <span class='content'>
                  Send me a message{' '}
                  <span class='fontawesome-double-angle-right'></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
