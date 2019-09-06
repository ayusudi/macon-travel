function getSummary(country) {
    $.ajax({
        method: 'GET',
        url: `https://en.wikipedia.org/api/rest_v1/page/summary/${country}`,
    })
        .done(function (data) {
            $('.summary').empty()
            $(".summary").append(`
            <div style="margin-top:5%; margin-bottom:2%">
                <p>${data.extract}</p> 
                <button onclick="showAll()">Show More </button> 
            <br>
            </div>`)
        })
        .fail(err => {
            console.log('Error');
        })
}
function getAll(country) {
    $.ajax({
        method: 'GET',
        url: `http://localhost:3000/wikipedia/all/${country}`
    })
        .done(function ({ extract, title }) {
            $(".country").empty()
            $('.paragraph').empty()
            getSummary(country)
            $(".country").append(`<h1>${title}</h1>`)
            $(".paragraph").append( `
            <div style="margin-top:5%; margin-bottom:2%">
                <button onclick="showLess()">Show Less</button>
            </div>`)
            let array = extract.split('.')
            if (country == 'Japan') {
                for (let i = 4; i < array.length; i++) {
                    if (i < 7) {
                        $(".paragraph").append(`<p>${array[i]}</p>`)
                    }
                    else if (i > 14) {
                        $(".paragraph").append(`<p>${array[i]}</p>`)
                    }
                }
            }
            else if (country == 'America') {
                console.log('test');
                for(let i= 14; i< array.length; i++){
                    $(".paragraph").append(`<p>${array[i]}</p>`)
                }
            }
            else {
                for (let i = 1; i < array.length; i++) {
                    // console.log(array[i]);
                    $(".paragraph").append(`<p>${array[i]}</p>`)
                }
            }
            showLess()
        })
        .fail(err => {
            console.log('Error');
        })
}
// console.log('test');

function showAll(){
    $('.paragraph').show()
    $('.summary').hide()
    console.log('heree');
}

function showLess(){
    $('.paragraph').hide()
    $('.summary').show()
    console.log('heree');
}

// getAll('Indonesia')
// getAll('Korea')
// getAll('Australia')
// getAll('Japan')
// getSummary('Netherland')
