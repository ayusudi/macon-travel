$(document).ready(function(){
<<<<<<< HEAD:client/js/unsplash.js
    // $('#loggedIn').css('filter', 'blur(4px)')
=======
    $('#loggedIn').css('filter', 'blur(4px)')
>>>>>>> 91512ba3f34b8e21489e1a40b9cf397b1d00b6c3:client/js/js.js
    $('.select-css').change(function(){
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
            $.each(photos.data.results, function(index, value){
                $('#listPhotos').append(
                    `
                    <img src="${value.urls.small}" style="margin: 10px 10px 10px 10px" alt="pictures of country">
                    `
                )
                
            })

        })
        .catch(err => {
            console.log(err)
        })
    })
})