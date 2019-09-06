$(document).ready(function(){
    // $('#loggedIn').css('filter', 'blur(4px)')
    $('.select-css').change(function(){
        let co = $(this).val()
        $('#listPhotos').empty()
        axios({
            method: 'GET',
            url: `https://api.unsplash.com/search/photos?page=1&query=${$(this).val()}&per_page=8`,
            headers: {
                Authorization: "Client-ID 073e33d75154d2e8f35708865768849f506150898c1a6aade029111eed176768"
            }
        })
        .then(photos =>{
            console.log(photos.data.results)
            getAll($(this).val())
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
            console.log(data)
            $('#weather').empty()
            $('#weather').append(`
            <div class="head-ct mt-3 ml-3">
                <p style="font-size: 30px; color : rgb(135, 135, 135); padding :0; margin: 0;" >${data.location}</p>
                <p style="font-size: 25px; color : rgb(135, 135, 135); padding :0; margin: 0;" >Friday 07:00</p>
                <p style="font-size: 20px; color : rgb(135, 135, 135); padding :0; margin: 0;" >${data.weather.summary}</p>
            </div>
            <div class="body mt-3 ml-3">
                    <p style="color : rgb(33, 33, 33); padding :0; margin: 0; font: 50px arial,helvetica,sans-serif;" >${data.temperature}</p>
            </div>
            `)
        })
        .catch(err => {
            console.log(err)
        })
    })
})