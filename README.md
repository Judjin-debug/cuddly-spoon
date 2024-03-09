# React GET request app

This little React app is supposed to fetch user, comment and post data from jsonplaceholder.typicode.com. There are three buttons to fetch each kind of data individually. Each of the buttons triggers useEffect hook to fetch data, which uses the trigger string data to mutate the request link. Then the fetched data in form of an array is stored in a different state, which gets splitted by components into unordered list items for display below the buttons. The only obvious issue I see is lack of cache/local storage functionality.

It also displays the extracted JSON data in form of a table, each table cell gets a unique hash ID using uuid package, which gets fetched to React.