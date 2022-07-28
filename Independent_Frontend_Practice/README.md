# Frontend Practice 

## Fetching API + Displaying Data on the DOM 
- [Draft 1](https://codesandbox.io/s/weatherapi-cindylam-firstdraft-3irmqh) (07-27-22)
I have practiced the Weather API exercise and tried to complete it within the 2 hours time limit. 

Here are some initial takeaways based on my practice: 
- using `async function` to fetch data + using `await` method to wait for the fetch data to process completely and then using `then` method to reformat the response into json format. 
- Once data is fetched, set the data state within the fetch data function and not outside. Why? - you will get a promise returning instead of the actual data being fetched, if you are setting the state outside of the fetch data function 
- Using `isFetched` bool variable to use it as an indicator to fetch and to clear out at the end of the useEffect function 
- Set up a `isLoading` state to make sure to display certain elements only once we have received fetched data 
