# Automated Chicken Coop Control

## Web Service & Status Page

This is an experimental status and control page for my [Rapsberry Pi Coop Control](https://github.com/isometimescode/coopcontrol) project. You can view a sample version at https://coopcontrol-react.netlify.com.

![screenshot](https://user-images.githubusercontent.com/7094373/36333895-6aa86bc4-132e-11e8-9b9e-fa8f8444728f.png)

### Software
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and uses [React Semantic UI](https://react.semantic-ui.com).

## ENV Variables

Example environment variables are provided in the (public/config.js) file. Without this file we could not change the ENV variables at [runtime](https://github.com/facebook/create-react-app/issues/2353). You will need to set the following variables in your own file before deploying the project:

| name | description | example |
| --- | --- | --- |
| `REACT_APP_LIVE_CAM_URL` | URL for the live video cam | http://via.placeholder.com/600x400 |
| `REACT_APP_API_URL` | URL for making requests to the status API, i.e. your locally hosted url for [RPi Coop Control](https://github.com/isometimescode/coopcontrol) | https://baba1f49-c561-44fa-afdd-855efbf43f34.mock.pstmn.io |


#### Attribution

Icon from [Online Web Fonts](http://www.onlinewebfonts.com/icon) and modified with [RealFaviconGenerator.net](https://realfavicongenerator.net).
