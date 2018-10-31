# StarWarsFanApp

The purpose of this app is to show to the user a quick overview over all the Star Wars resources like people, planets ...

## Requirements for running this project

This project expects you to have installed on your machine [node](https://nodejs.org/en/).

## Installation & Runnig the app
The first step is obviously to clone this repository.
Then you have to install the node_modules by running the command
```
nmp install
```
When it has been installed, you can run the application with the command
```
npm run start
```
This command starts a dev server. Navigate to `http://localhost:4200/` in your browser.

If you have [angular-cli](https://cli.angular.io/) installed on your machine, you can run the app with
```
ng serve
```

## Authentification
This app will require the user to sign in before accessing resources. Only the following credentials will allow you to log in:
 * `username: admin`
 * `password: 1234`

## App features
 * The user opens your app and gets a login screen. He has to login with the credential in the section authentification. After a  successful login he is navigated to the overview page. If the user is logged in, he can refresh the browser and has not to login again. All the routes are protected, this means they can't be accesses without beeing logged.
 * The overview pages displays a search bar and the Star Wars resources. By clicking on the picture of a resource it will display the data. If a research is entered in the search bar, it will display the data that match the research of all the selected resources.
 * Each resource has two display, the card display and the table display which can be changed with the button top right of the list. The card display elements can be hovered to get an overview of the element.
 * Each element of a resource can be clicked to navigate to a details page.
 
## PWA - Progressive Web App
This application has a service-worker used to cache data such as css files, js files and the assets. This service-worker is also caching the api calls, it means that this application is also working offline for the data that has been searched previously.

## Data
This application is consuming the data from the api-endpoint `https://swapi.co/`
**Warning**: this api-endpoint is sometimes down, this is why the application is sometimes not displaying data.

## Online version
https://ndelbiaggio.github.io/StarWarsFanApp/

## Author

Nicolas Delbiaggio
