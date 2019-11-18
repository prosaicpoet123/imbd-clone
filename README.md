# imbd-clone
A quick test repo to practice async requests and advanced react features

# Get Started

- Clone the repo
- cd imdb_clone
- npm install
- npm run dev
- the app will be available on localhost:3000

# Environment variables

In order to request data from the API, you will need to create your own .env file in the root of the project. There is an example .env file which shows the format. You will also have to generate your own API Key, which you can do here http://www.omdbapi.com/apikey.aspx

# What is this?

A quick app that fetches data from the ombd api. Built using Next JS as a starter. Data is passed using the React context api. At the moment there's not much to look at from a UI perspective, just a search field and submit button. Entering a search term and submitting the form will send a request to the omdb API via an internal endpoint (api/getFilms) which will return some data. If valid, the name of the returned film will be displayed.

One thing I challenged myself to do in this mini-project is implement the new React context API. In the past I have been fairly reliant on Redux as a means of passing data around my apps, and while its OK, the context API can work just as well with fewer added dependencies. 

In this case the Search component receives the data back from the omdb api call. It then needs to somehow pass this data to the List component, which doesn't exist in the same "tree" as the Search component (more of a peer). By wrapping the Layout in a Provider component I am able to give a function to the Search component that passes data up to the provider which in term becomes accessible to the List component. 
