// Converts a URL Query String into an object map
function convertQueryToMap(query) {
    let queryArray = query.split(".");
    console.log(queryArray)
    let queryObj = {}

    if(queryArray.length === 1){
        queryObj = {query};
        queryObj = Object.values(queryObj)
    }

       for( let i = 0; i < queryArray.length; i +=2){
           queryObj[queryArray[i]] = queryArray[(i + 1)]
       }

    console.log(queryObj)
    return queryObj;


}

module.exports = convertQueryToMap;