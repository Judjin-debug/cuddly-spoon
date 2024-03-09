# React GET request app

This little React app fetches and displays user, comment and post data from jsonplaceholder.typicode.com in form of a table. 

There are three buttons to fetch each kind of data individually. Each of the buttons triggers useEffect hook to make a fetch request, which uses the trigger string data to mutate the request link. Then, by using React jsx components, the fetched JSON data is displayed in form of a table below the button bar. Each table cell gets a unique hash ID using uuid package.