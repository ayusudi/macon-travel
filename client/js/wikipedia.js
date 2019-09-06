function getSummary(country) {
    $.ajax({
        method: 'GET',
        url: `https://en.wikipedia.org/api/rest_v1/page/summary/${country}`,
    })
        .done(function (data) {
            console.log(data);
        })
        .fail(err => {
            console.log('Error');
        })
}
function getAll(country) {
    console.log(country);
    $(".country")
    $.ajax({
        method: 'GET',
        url: `http://localhost:3000/wikipedia/all/${country}`
    })
        .done(function ({ extract, title }) {
            $(".country").empty()
            $(".country").append(`<h1>${title}</h1>`)
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
                for(let i= 1; i< array.length; i++){
                    $(".paragraph").append(`<p>${array[i]}</p>`)
                }
            }
            else {
                for (let i = 1; i < array.length; i++) {
                    console.log(array[i]);
                    $(".paragraph").append(`<p>${array[i]}</p>`)
                }
            }
        })
        .fail(err => {
            console.log('Error');
        })
}
// console.log('test');
// getAll('Indonesia')
// getAll('Korea')
// getAll('Australia')
// getAll('Japan')
// getAll('Netherland')