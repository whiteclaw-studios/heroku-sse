import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
// import SlickStyles from './slick.css'; /* eslint-disable-line no-unused-vars */

const Wrapper = styled('div')`
  /* Slider */
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    user-select: none;

    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
    width: 100%;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: -100px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 12px;
    height: 12px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;

    background: #e4e4e4;
    border-radius: 50%;
  }
  .slick-dots li.slick-active {
    background: #ada9ad;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 0.6rem;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: 0.25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }
  .slick-current img {
    width: 100%;
  }
`;
/* eslint-disable react/prefer-stateless-function */
export default class ImageSlider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.previous = this.previous.bind(this);
    this.slider = null;

    this.CommonSliderRef = React.createRef();
  }
  previous = () => {
    this.slider.slickPrev();
  };
  next = () => {
    this.slider.slickNext();
  };

  componentDidMount() {
    if (this.props.getRef) this.props.getRef(this.slider);
  }
  render() {
    const { listToPopulate = [], settings } = this.props;

    return (
      <Wrapper>
        <Slider
          {...{ touchThreshold: 20 }}
          ref={(z) => {
            this.slider = z;
            return this.slider;
          }}
          //   lazyLoad="ondemand"
          {...settings}
        >
          {listToPopulate}
        </Slider>
      </Wrapper>
    );
  }
}
ImageSlider.propTypes = {
  settings: PropTypes.object.isRequired,
  listToPopulate: PropTypes.array.isRequired,
  getRef: PropTypes.func,
};
