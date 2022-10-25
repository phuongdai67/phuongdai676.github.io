import React from 'react'
import { Slide,Caption,Slider } from 'react-materialize'
export default function News() {
    return (
        <div className="news">
            <Slider
  fullscreen={false}
  options={{
    duration: 500,
    height: 400,
    indicators: true,
    interval: 6000
  }}
>
  <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/1"/>}>
    <Caption placement="center">
      <h3>
        News for the movie fan !
      </h3>
      <h5 className="light grey-text text-lighten-3">
        More movies on the way !
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/2"/>}>
    <Caption placement="left">
      <h3>
       News for the movie fan !
      </h3>
      <h5 className="light grey-text text-lighten-3">
       More movies on the way !
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3"/>}>
    <Caption placement="right">
      <h3>
       News for the movie fan !
      </h3>
      <h5 className="light grey-text text-lighten-3">
      More movies on the way !
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
    <Caption placement="center">
      <h3>
        News for the movie fan !
      </h3>
      <h5 className="light grey-text text-lighten-3">
        More movies on the way !
      </h5>
    </Caption>
  </Slide>
</Slider>
        </div>
    )
}