
# Movie App project group 61

Final project in the course Interaction Programming and the Dynamic Web. 
The goal was to create a webbapplication that is built according to the MVP architecture.
Our application is utilizing one API source to fetch information and firebase to save data
between sessions. 

Our application is called Movie App, the application is intended to be used to find 
info about movies, series and games. The home page of our application is the search page,
here the users can search after whatever they want to. The results are displayed with 
images, titles and year of release. The user can click any searched item to get more
information about the specified item. Also if the user i registered and logged in the
user can choose to save the specified title to an personal watchlist so the user can easily
 find movies, series and games that they like for later use.


## API details 
The application is using the information provided by the OMDb API.
To be able to run our application an API key is needed to be created. 

Head over to: https://www.omdbapi.com/apikey.aspx , there is a free version of the API that we are using. 

In the /src folder of our project simply create a file called `apiConfig.js` 

Add this code: export const API_KEY="`API_KEY`";

Change the `API_KEY` to your unique api key provided from the OMDb api. 

## Firebase configuration

In the firebase.js file follow the instructions to setup the firbase SDK,
it's required to be able to run the application. 

## Get started

The application is created with npm so to be able to run the project on your local
 computer you first need to run the following commands:

```bash
  npm install
```
```bash
  npm install firebase
```

When the installation is completed run this command: 

```bash
  npm start
```

The application should now be visible on the http://localhost:3000/
## Authors

- [@Guttern](https://github.com/Guttern) // Erik Göransson
- [@3kguccisuit](https://github.com/3kguccisuit) // Ludwig Hahn


