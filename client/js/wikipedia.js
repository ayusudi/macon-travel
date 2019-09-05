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
function getAll(country){
    $.ajax({
            method: 'GET',
            url: `http://localhost:3000/wikipedia/all/${country}`
        })
        .done(function (data) {
            console.log(data);
        })
        .fail(err => {
            console.log('Error');
        })
}