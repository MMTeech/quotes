let searchCategory = document.getElementById('search-category')
let searchBtn = document.getElementById('search-btn')
let apiKey = 'fMKieiXFfUfTlDiCndL2Hw==xsThPatX1TFRE2cc'

let validCategories = [
    'age',
    'alone',
    'amazing',
    'anger',
    'architecture',
    'art',
    'attitude',
    'beauty',
    'best',
    'birthday',
    'business',
    'car',
    'change',
    'communication',
    'computers',
    'cool',
    'courage',
    'dad',
    'dating',
    'death',
    'design',
    'dreams',
    'education',
    'environmental',
    'equality',
    'experience',
    'failure',
    'faith',
    'family',
    'famous',
    'fear',
    'fitness',
    'food',
    'forgiveness',
    'freedom',
    'friendship',
    'funny',
    'future',
    'god',
    'good',
    'government',
    'graduation',
    'great',
    'happiness',
    'health',
    'history',
    'home',
    'hope',
    'humor',
    'imagination',
    'inspirational',
    'intelligence',
    'jealousy',
    'knowledge',
    'leadership',
    'learning',
    'legal',
    'life',
    'love',
    'marriage',
    'medical',
    'men',
    'mom',
    'money',
    'morning',
    'movies',
    'success'
]

searchBtn.addEventListener('click', () => {
    let category = searchCategory.value.toLowerCase();
    if (validCategories.includes(category)) {
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
            headers: { 'X-Api-Key': apiKey },
            contentType: 'application/json',
            success: function(result) {
                displayQuotes(result);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    } else {
        alert('Invalid category entered');
    }

})





function displayQuotes(quotes) {
    let blockQuote = document.querySelector('blockquote p');
    let citeElement = document.querySelector('blockquote footer cite');

    // Clear previous content
    blockQuote.textContent = '';
    citeElement.textContent = '';

    // Display each quote in the result container
    quotes.forEach(quote => {
        // Concatenate quotes with line breaks
        blockQuote.textContent += '“' + quote.quote + '”\n';
        citeElement.textContent += '— ' + quote.author + '\n';
    });
}