//When the user opens the page they will have the option to type in the search box. Once they submit their answer it will run a function to check users response. If user response is a city then it will  

var localStorage = window.localStorage
var localStorageUserInputs = []
var currentDay = moment().format("L")
currentDate = document.getElementById('currentday').innerText= `(${currentDay})`

//On page load we want to first check local storage and then push any values from local storage into our localStorageUserInputs
function onPageLoad (){
    console.log(localStorage.getItem('Cities'))
    localStorageUserInputs = localStorage.getItem('Cities')
    
}

var searchBtn = document.getElementById('searchbtn').addEventListener('click',function getUserResponse(event){
    event.preventDefault()
})

function getUserResponse(){
    var userLocationInput = document.getElementById('userLocationInput').value
    if(userLocationInput) {
        console.log(userLocationInput)
        retrieveData(userLocationInput)
    }
}


function retrieveData (userLocationInput){
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + userLocationInput + "&units=imperial&appid=18c94be380dd6c1b79b8d296cad1794d"
    fetch(url)
    .then(function (response) {
        if (response.ok){
            localStorageUserInputs.push(userLocationInput)
            localStorage.setItem('Cities', JSON.stringify(localStorageUserInputs))
            return response.json();
        }
        else {
            alert('Please insert a valid City Name')
        }
    })
    .then(function (data) {
        console.log(data)
        updateHTMLPage(data)
    })
}
function updateHTMLPage(data) {
    
    // Search Results should use div class 
    //<div class="d-grid gap-2 mt-3"></div>
}