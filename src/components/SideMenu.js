import React from 'react';
import $ from 'jquery';
import hackerrank from '../img/hackerrank.png';
import hackerearth from '../img/hackerearth.png';
import leetcode from '../img/leetcode.PNG';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import codechef from '../img/codechef.png';
class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.menucontainer = React.createRef();
    this.showmenu = this.showmenu.bind(this);
  }
  componentDidMount() {
    $('.menu-container').toggleClass('width-0');
  }
  showmenu = () => {
    $('.menu-container').toggleClass('width-0');
    $('#side-pagination-hamburger').toggleClass('arrow');
  };
  render() {
    return (
      <div className='sidemenu-container'>
        <div
          onClick={this.showmenu}
          class='hr__hamburger hr__hamburger--arrow hr__hamburger--is-active'
          id='side-pagination-hamburger'>
          <div class='hr__hamburger__box'>
            <span class='hr__hamburger__inner'></span>
          </div>
        </div>
        <div className='menu-container pr-5 ' ref={this.menucontainer}>
          <ul>
            <li className='menu-item'>
              <a href='#' className='heading'>
                INTRO
              </a>
              <ul className='sub-menu pr-5'>
                <li>
                  <a href='#'>
                    I am a Competitive coder and a Software developer with more
                    than 1 years of experience in full stack developement using
                    latest technologies like reactjs ,redux ,context api
                    ,bootstrap ,python. I'm motivated, result-focused and
                    seeking a successful team-oriented company with opportunity
                    to grow.{' '}
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-item'>
              <a href='#' className='heading'>
                {' '}
                PROJECTS
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='https://kiit.lsqportal.com/'>
                    <i class='fa fa-link'></i>&nbsp;Kalinga Institute of
                    Technology.
                  </a>
                </li>
                <li>
                  <a href='http://lendingdemo1.lsqportal.com/'>
                    <i class='fa fa-link'></i>&nbsp;LSQ Money
                  </a>
                </li>
                <li>
                  <a href='http://lsqestates.lsqportal.com/'>
                    <i class='fa fa-link'></i>&nbsp;LSQ Estates
                  </a>
                </li>
                <li>
                  <a href='https://edudemo4.lsqportal.com/'>
                    <i class='fa fa-link'></i>&nbsp;LSQ University
                  </a>
                </li>
                <li>
                  <a href='https://edudemo2.lsqportal.com/'>
                    <i class='fa fa-link'></i>&nbsp;Flame University
                  </a>
                </li>
                <li>
                  <a href='http://edudemo1.lsqportal.com/'>
                    <i class='fa fa-link'></i>&nbsp;LSQ University
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-item'>
              <a href='#' className='heading'>
                Profiles
              </a>
              <ul className='sub-menu d-flex justify-content-between profiles w-75'>
                <li>
                  <img
                    src={hackerrank}
                    style={{ height: '46px', width: '46px' }}
                    alt='hackerrank'
                  />
                </li>
                <li>
                  <img
                    src={hackerearth}
                    style={{
                      height: '46px',
                      width: '46px',
                      borderRadius: '50%'
                    }}
                    alt='hackerrank'
                  />
                </li>
                <li>
                  <img
                    src={leetcode}
                    style={{ height: '46px' }}
                    alt='leetcode'
                  />
                </li>
                <li>
                  <img
                    src={codechef}
                    style={{
                      height: '46px',
                      background: '#fff',
                      borderRadius: '50%'
                    }}
                    alt='codechef'
                  />
                </li>
                <li>
                  <img
                    src={github}
                    style={{ height: '46px', width: '46px' }}
                    alt='github'
                  />
                </li>
                <li>
                  <img
                    src={linkedin}
                    style={{
                      height: '46px',
                      width: '46px',
                      borderRadius: '50%'
                    }}
                    alt='linkedin'
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id='sidemenu'>
          <div>
            <ul className='menu mt-5'>
              <li>
                <a href='#'>INTRO</a>
              </li>
              <li>
                <a href='#'>Skills</a>
              </li>
              <li>
                <a href='#'>Projects</a>
              </li>
              <li>
                <a href='#'>Experience</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default SideMenu;
