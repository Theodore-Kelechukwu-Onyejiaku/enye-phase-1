const {confirmQueryRequest}  = require("./helpers/confirmQueryRequest");
const axios = require("axios");

exports.queryRoute= (req, res, next)=>{

          console.log(Object.keys(req.query).length)

        //Check if there is any query on the route
        if(Object.keys(req.query).length <= 0 && req.query.constructor === Object) {
            console.log("route is empty");
        } 
        //If No query in parameter
        else {
            console.log("route is not empty!");

            console.log(typeof req.query)
            //Check if the query is the accepted query
           if(confirmQueryRequest(req.query)){
                console.log("Query requests match");
                console.log(req.query);
                let base = req.query.base;
                let currency = req.query.currency;
                console.log(typeof(base), typeof(currency));
               
                req.ourQuery = {base, currency};
                next()
           }else{
                console.log("Query requests do not match");
                next();
           }
        }       
}


