const axios=require('axios')
const fs=require('fs')

const imgHttpsUrlToBase64=async url=>{
    var result
    try{
        var response=await axios.get(url,{
            responseType: "text",
            responseEncoding: "base64",
        })
        var base64=response.data
        var urlParts=url.split('.')
        var extension=urlParts[urlParts.length-1]
        result=`data:image/${extension};base64, ${base64}`
    }catch(e){
        result=''
    }
    return result
}

const test=async ()=>{
    var src=await imgHttpsUrlToBase64(`https://recruitment.buet.ac.bd/auto_uploads/1675405797554e20780c4-221d-49dd-96c8-a3769551cb4a.jpg`)
    fs.writeFileSync('index.html',`<img src="${src}">`)
}

test()
