const axios = require('axios');

exports.getRates = (req, res, next)=>{
    if(req.ourQuery){
        axios.get('https://api.exchangeratesapi.io/latest?base='+req.ourQuery.base)
        .then(function (response) {
            // console.log(response.data)
            var reqCurrencies = new Array(req.ourQuery.currency);
            var responseNeeded = {};
            responseNeeded.date = response.data.date;
            responseNeeded.base = req.ourQuery.base;
            responseNeeded.rates = {};
            for(currency in response.data.rates){
                console.log(currency)
                if(reqCurrencies.includes(currency)){
                    console.log("incl")
                    responseNeeded.rates[currency] = response.data.rates[currency]
                }
            }
            console.log(responseNeeded);
            res.status(200).json({"result": responseNeeded})
        })
        .catch(function (error) {
            res.status(400).json(error.message)
        })  
    }else{
        axios.get('https://api.exchangeratesapi.io/latest')
        .then(function (response) {
            res.status(200).json({results: response.data})
        })
        .catch(function (error) {
            res.status(400).json(error.message)
        })
    }   
    
}