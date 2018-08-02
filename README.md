# D3-FC switcher

Lightweight implementation of html class switcher (toggling class)

Useful for fast prototyping, when you need fast toggle classes on dom elements

## Demo

##[Try it out ->](https://d3-fc.github.io/#/switcher)

![demo](https://d3-fc.github.io/img/-08-03_00-45-57.bc7377d0.gif)

## Install

* **npm**: `npm install d3-fc-switcher` 
* **yarn**: `yarn add d3-fc-switcher`

## Usage

In your main js file
```javascript
import { Switcher } from 'd3-fc-switche'

Switcher.makeDefault()
```
Then you can use in your html template

```html
<div data-switchable="switchable1" data-switchable-class="active"></div>

<button data-switcher="switchable1">switcher</button>
```

When button is clicked script will add '.active' class to your switchable `div`.
When button is clicked second time script will remove '.active' from `div`