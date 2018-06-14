# React Weather App Front End

## Installation

This app was built using two separate repositories. This completely separates the front and back end concerns and prevents the need for two package.json and node_modules files. This repository contains the front end concerns only and requires a set API key to authenticate with the back end service. 

This application was built using create-react-app. React requires all set environment variables to be prefixed with REACT_APP_ so in order to pass in a proper key it must be defined as REACT_APP_API_KEY.

To install the front end open the terminal and clone this repository by typing:

``` git clone https://github.com/JSitter/...```

``` cd weather-app
    npm install --save
 ```

Before running the project you need to create a .env file at the root of the project directory.

``` touch .env ```

The .env file needs to have REACT_APP_API_KEY set.

Add the following line but replace "YOUR API KEY" with the actual api key for the API server.

```REACT_APP_API_KEY="YOUR API KEY"```

## Future Features
* Add chance of rain forcast
* Add additional CSS Styling to improve look
* Use environment variable to store back end api location.

## Issues
* Page scrolls when it should not
* 
