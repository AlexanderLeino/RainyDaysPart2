Getting Started:

I will need to use fetch to get data from the openweather API.
How to write the fetch Request

fetch(url)
    .then (result => result.json())
    .then (data => console.log(data))

To fetch successfully we will have to format our url as 
api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}