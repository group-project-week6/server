function urlToFilename(url){

    let array = url.split('/')
    return array[array.length-1]
}

module.exports = urlToFilename