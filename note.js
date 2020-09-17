const note=require('./myModule')
const yargs=require('yargs')
let titre=yargs.argv.titre
let body=yargs.argv.body
let cmd=yargs.argv._[0]
if(cmd==="add"){
    note.add(titre,body)
}else if(cmd==='list'){
    note.list()
}else if(cmd==='find'){
    note.fetshdata(titre)
}
else if(cmd==='Remove'){
    note.Remove(titre)
}
else{
    console.log('wrong cmd')
}
//console.log(yargs.argv)
//console.log(process.argv)