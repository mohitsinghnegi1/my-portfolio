import React from 'react';
import $ from 'jquery';
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
        <div className='menu-container ' ref={this.menucontainer}>
          <ul>
            <li className='menu-item'>
              <a href='#' className='heading'>
                INTRO
              </a>
            </li>
            <li className='menu-item'>
              <a href='#' className='heading'>
                SKILLS
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='#'>
                    Officia quis amet non commodo magna occaecat .{' '}
                  </a>
                </li>
                <li>
                  <a href='#'>
                    {' '}
                    Excepteur id qui magna et nisi nisi ea proident .
                  </a>
                </li>
                <li>
                  <a href='#'>Sit ut voluptate esse laboris irure non ut .</a>
                </li>
                <li>
                  <a href='#'>
                    Magna minim ut minim mollit voluptate cupidatat .
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
                  <a href='#'>
                    Nulla non ut cillum enim magna id labore reprehenderit.
                  </a>
                </li>
                <li>
                  <a href='#'>
                    Velit proident sint mollit voluptate ad eiusmod ullamco et
                    elit.
                  </a>
                </li>
                <li>
                  <a href='#'>Amet dolor qui ullamco nostrud sunt eu dolore.</a>
                </li>
                <li>
                  <a href='#'>
                    Incididunt aliquip cupidatat adipisicing cupidatat eiusmod
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-item'>
              <a href='#' className='heading'>
                WORK EXPERIENCE
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='#'>
                    Dolore sunt nulla et ullamco laboris amet sint consectetur
                    nisi est commodo officia eu culpa.
                  </a>
                </li>
                <li>
                  <a href='#'>Et enim velit aliquip officia nulla.</a>
                </li>
                <li>
                  <a href='#'>
                    Deserunt voluptate ex duis nulla.Velit occaecat nulla mollit
                    amet ad cillum occaecat.
                  </a>
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
