async function handleSubmit(event) {
    event.preventDefault();

    // get user input and save it into a variable
    let formInput = document.getElementById("name").value;

    // post form input to server
    // Client.postData('/form', {formInput: formInput});

    // API call
    let apiResponse = await Client.apiCall('localhost:8081/sentiment-analysis');
    console.log('huhuhahahoho', apiResponse);

    // check if input is a url
    if (Client.checkInput(formInput)) {
        
        //if input == url, update ui to content analysis
        console.log('input == URL');
        Client.updateUi(await Client.markupAnalyzeContent(formInput, apiResponse));
    }
    
    else {
        // else update ui to render that input must be an url
        console.log('input != url');
        Client.updateUi(await Client.markupInvalidInput());
    }
}

export { handleSubmit }