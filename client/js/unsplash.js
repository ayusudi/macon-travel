$(document).ready(function(){
    // $('#loggedIn').css('filter', 'blur(4px)')
    $('.select-css').change(function(){
        let co = $(this).val()
        $('.main').hide()
       
        getAll($(this).val())
        $('#listPhotos').empty()
        axios({
            method: 'GET',
            url: `https://api.unsplash.com/search/photos?page=1&query=${$(this).val()}&per_page=8`,
            headers: {
                Authorization: "Client-ID 073e33d75154d2e8f35708865768849f506150898c1a6aade029111eed176768"
            }
        })
        .then(photos =>{
            $.each(photos.data.results, function(index, value){
                $('#listPhotos').append(
                    `
                    <img src="${value.urls.small}" style="margin: 10px 10px 10px 10px" alt="pictures of country">
                    `
                )
            })
            return axios({
                method : 'GET',
                url : `http://localhost:3000/weather?country=${co}`
            })
        })
        .then(({data}) =>{
            if (data.status !=404){
                $('#weather').empty()
                $('#weather').append(`
                <div class="head-ct mt-3 ml-3">
                    <p style="font-size: 30px; color : rgb(135, 135, 135); padding :0; margin: 0;" >${data.location}</p>
                    <p style="font-size: 25px; color : rgb(135, 135, 135); padding :0; margin: 0;" >${getday()}</p>
                    <p style="font-size: 20px; color : rgb(135, 135, 135); padding :0; margin: 0;" >${data.weather.summary}</p>
                </div>
                <div class="body mt-3 ml-3">
                        <p style="color : rgb(33, 33, 33); padding :0; margin: 0; font: 50px arial,helvetica,sans-serif;" >${data.temperature} C</p>
                </div>
                `)
            }
            else {
                $('#weather').empty()
                $('#weather').append(
                    `
                    <div>
                        <p>Weather Location is not available</p>
                    </div>
                    `
                )
            }
        })
        .catch(err => {
            console.log(err)
        })
    })
})
function getday(){
    console.log(new Date().getDay())
    switch(new Date().getDay()){
        
        case 1:{
            return "Monday"        
        }
        case 2:{
            return "Tuesday"
        }
        case 3:{
            return "Wednesday"
        }
        case 4:{
            return "Thursday"
        }
        case 5:{
            return "Friday"
        }
        case 6:{
            return "Saturday"
        }
        case 7:{
            return "Sunday"
        }
    }
}