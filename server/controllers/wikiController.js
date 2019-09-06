const axios = require('axios')

class WikiController{
  static getAll(req, res){
    let idSearch
    // res.send('hei')
   axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext=&redirects=1&titles=${req.params.country}`)
   .then(response =>{
    for (let k in response.data.query.pages){
      idSearch = Number(k)
    }
     res.status(200).json(response.data.query.pages[idSearch])
   })
   .catch(err => {
    res.status(500).json({
      message: 'Error Internal Server'
    })
  })
  }

}
module.exports = WikiController