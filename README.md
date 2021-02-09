# React simple Slider Carousel component

Simple, responsive and customizable carousel component for your React app.

## Install

```
$ npm install --lapsa-slider
```

## Features

- Works for mobile and desktop devices
- Supports swipes
- Animated
- Interacts with any HTML element (requires its own styling)
- Finger-following swipes
- Supports multiple carousels on the screen
- Supports infinite option
- Supports scrolling to a selected slide

## Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import Slider from "lapsa-slider";

function SliderExample() {
  return (
    <Slider height={600} width={1000}>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          alt=""
        />
        <div>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            dicta iusto quas eveniet ipsum? Et quasi dolores libero iste hic!
            Veritatis inventore ex repellat, sint cumque veniam consequuntur
            consequatur impedit!
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80"
          alt=""
        />
        <div>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            dicta iusto quas eveniet ipsum? Et quasi dolores libero iste hic!
            Veritatis inventore ex repellat, sint cumque veniam consequuntur
            consequatur impedit!
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80"
          alt=""
        />
        <div>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            dicta iusto quas eveniet ipsum? Et quasi dolores libero iste hic!
            Veritatis inventore ex repellat, sint cumque veniam consequuntur
            consequatur impedit!
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80"
          alt=""
        />
        <div>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            dicta iusto quas eveniet ipsum? Et quasi dolores libero iste hic!
            Veritatis inventore ex repellat, sint cumque veniam consequuntur
            consequatur impedit!
          </p>
        </div>
      </div>
    </Slider>
  );
}
```

## Slider API

`<Slider>` takes a limited subset of options:

```js
{
  width: number ,       //Required
  height: number,       //Required
  showDots: boolean,    //Default true
  showArrows: boolean   //Default true
}
```

## DEMO

https://lapsa09.github.io/carrousel-for-scandiweb/
