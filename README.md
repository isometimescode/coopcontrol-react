# Automated Chicken Coop Control

## Web Service & Status Page

This is an experimental status and control page for my [Rapsberry Pi Coop Control](https://github.com/isometimescode/coopcontrol) project. You can view a sample version at https://coopcontrol-react.netlify.com.

![screenshot](https://user-images.githubusercontent.com/7094373/36333895-6aa86bc4-132e-11e8-9b9e-fa8f8444728f.png)

### Software
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and uses [React Semantic UI](https://react.semantic-ui.com).

## ENV Variables

You will need to set the following variables in [`.env.local`](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env):

| name | description | example |
| --- | --- | --- |
| `REACT_APP_LIVE_CAM_URL` | URL for the live video cam | http://via.placeholder.com/600x400 |
| `REACT_APP_API_URL` | URL for making requests to the status API | https://baba1f49-c561-44fa-afdd-855efbf43f34.mock.pstmn.io |
