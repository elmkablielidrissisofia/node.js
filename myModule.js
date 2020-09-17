const fs = require('fs')
const fetshFile = ()=>{
    try {
        return JSON.parse(fs.readFileSync('notes.txt','utf-8'))
    }
    catch{
        return []
    }
}
const add=(titre,body)=>{
    let note={
        titre:titre,
        body:body,
    }
    let tab=fetshFile()
    console.log(tab)
    tab.push(note)
    fs.writeFile('notes.txt',JSON.stringify (tab),(er,data)=>{
        if(er){
            console.log(er)
        }else return data
    }) 
}
const list=()=>{
    let tab=fetshFile()
    console.log(JSON.stringify(tab))
}
const Remove=(titre)=>{
    let tab=fetshFile()
    fs.writeFileSync('notes.txt',JSON.stringify(tab.filter(el=>el.titre!==titre)))
}
const fetshdata=(titre)=>{
    let tab=fetshFile()
    console.log(JSON.stringify(tab.find(el=>el.titre===titre)))
}

module.exports={add,list,Remove,fetshdata}