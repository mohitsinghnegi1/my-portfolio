import React from 'react';
import ComparisonSlider from 'comparison-slider';

class ComparisonSlide extends React.Component {
  componentDidMount() {
    var comparisonSlider = new ComparisonSlider();
  }
  render() {
    return (
      <div class='ComparisonSlider'>
        <div class='ComparisonSlider__Before text-dark'>Mohit</div>
        <div class='ComparisonSlider__After text-dark'>Singh</div>
      </div>
    );
  }
}
export default ComparisonSlide;
