var userInput=document.querySelector("#user-input");
var btnClick=document.querySelector("#btn-Click");
var outputMessage=document.querySelector("#outputMessage");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function clickHandler() {
    var inputText = userInput.value; 

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputMessage.innerText = translatedText; })
        .catch(errorHandler)
};



function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

btnClick.addEventListener("click", clickHandler)


