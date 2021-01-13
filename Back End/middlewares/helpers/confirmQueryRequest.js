exports.confirmQueryRequest = (obj) =>{
    if(Object.keys(obj).length > 2){
        console.log(Object.keys(obj).length, obj)
       console.log("more than two queries");
    }else{
        let hasBase = obj.hasOwnProperty("base");
        let hasCurrency = obj.hasOwnProperty("currency");
        console.log(hasBase, hasCurrency)
            if(hasBase && hasCurrency){
                return true
            }else{
                return false
            }
    }
}