# Minimal gradient image generator

I love beautiful color gradients as backgrounds, as the ones from https://uigradients.com. But, there are two minor issues with this and most websites that provide color combinations and gradients: I cant download them in any resolution I want, and in most of them I can't give them an angle.

So I wrote a small script to do it locally.

### Requisites:

Have npm installed and then just do:  `npm install`

### Usage:

```
node script.js width(px) height(px) color1(hex) color2(hex) angle(º)

Example:

node script.js 1280 800 '#fdbb2d' '#22c1c3' 34`
```

This creates and saves the following image:

![a](example.png)


