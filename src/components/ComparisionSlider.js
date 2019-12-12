import React from 'react';
import ComparisonSlider from 'comparison-slider';
import '../css/slider.css';
class ComparisonSlide extends React.Component {
  componentDidMount() {
    var comparisonSlider = new ComparisonSlider();
  }
  render() {
    return (
      <div class='ComparisonSlider '>
        <div class='ComparisonSlider__Before '>
          <div className='about-me p-4 '>
            <div className='row p-5 noselect '>
              <div></div>
              <div>
                <div className='fl-heading' style={{}}>
                  Mohit Singh Negi
                </div>
                <p className='t-w'>
                  Competative Coder | Full Stack Developer | UI/UX designer
                </p>
                <p className='tc'>Summary</p>
                <p className='c-g'>
                  Pursuing B.Tech in Computer Science from Lovely Professional
                  University, I consider myself to be creative, hard-working and
                  a tech enthusiast. I believe in practical work rather than
                  theoretical. I am quite good at portal development using
                  React. During my internship at Leadsquared, I had been awarded
                  the Star of the quarter award for the best performer in portal
                  development using React framework and Leadsquared CRM. Apart
                  from that ,I have a kneen Interest In Android app development.
                  I can adapt easily and believe me , I am a fast learner.
                </p>
                <p className='tc'>Education</p>
                <p className='c-g'>
                  <table>
                    <tr>
                      <td>University &nbsp;</td>
                      <td>: Lovely Professional University 2016-2020</td>
                    </tr>
                    <tr>
                      <td>Stream </td>
                      <td>: Btech Cse</td>
                    </tr>
                    <tr>
                      <td> School </td>
                      <td>: Kendriya Vidyalaya No-5 Bathinda Cantt</td>
                    </tr>
                  </table>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='ComparisonSlider__After text-dark text-white'>
          <div
            className='about-me p-4 h-100'
            style={{ background: ' #242b36' }}>
            <div className='row p-5 noselect'>
              <div></div>
              <div className='text-white'>
                <div className='fl-heading'>Mohit Singh </div>
                <p>Competitive Coder | Full Stack Developer | UI/UX designer</p>
                <p>Summary</p>
                <p>
                  Pursuing B.Tech in Computer Science from Lovely Professional
                  University, I consider myself to be creative, hard-working and
                  a tech enthusiast. I am an avid coder, graphic designer ,
                  UI/UX, and a Full-stack developer. I am quite good at portal
                  development using React. During my internship at Leadsquared,
                  I had been awarded the Star of the quarter award for the best
                  performer in portal development using React framework and
                  Leadsquared CRM. Apart from that I have a Kneen Interest In
                  Android App development. I can adapt easily and believe that I
                  am a fast learner. I believe in practical work rather than
                  theoretical.
                </p>
                <p>Education</p>
                <p>
                  Nisi dolor commodo laboris mollit excepteur eiusmod consequat
                  laboris labore nulla nulla ex pariatur sint.
                </p>
                <p>Experience</p>
                <p>
                  Nisi dolor commodo laboris mollit excepteur eiusmod consequat
                  laboris labore nulla nulla ex pariatur sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ComparisonSlide;
