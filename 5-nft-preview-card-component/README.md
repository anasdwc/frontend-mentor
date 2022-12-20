# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Frontend Mentor | NFT Preview Card Component with CSS Flex coding challenge solution](https://www.frontendmentor.io/solutions/nft-preview-card-component-CwDpX-eaHP)
- Live Site URL: [Frontend Mentor | NFT preview card component](https://fm-beginner-nft-card.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Tipe file svg bisa dibuat jadi `content` di pseudo selector CSS.

Buat bikin overlay warna di atas gambar bisa bikin `div` baru setelah `img`. Nanti parent nya dibuat `relative` terus _overlay_-nya dibuat `absolute` dengan _height_ dan _width_ 100%

```scss
%overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.nft-img {
  position: relative;
  width: 100%;
  display: flex;

  .overlay-bg {
    background-color: $primary-cyan;
    @extend %overlay;
    opacity: 0;
  }

  &:hover .overlay-bg {
    opacity: 0.5;
    border-radius: 1rem;
  }
}
```

## Author

- Frontend Mentor - [@anasdwc](https://www.frontendmentor.io/profile/anasdwc)
- Twitter - [@anasdwc](https://www.twitter.com/anasdwc)
