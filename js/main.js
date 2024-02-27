let numberOfSeries=prompt("Nechta serial ko'rdingiz") // 15
console.log(numberOfSeries)

seriesDB={
    count: numberOfSeries,//5
    series:{},
    actors:{},
    genres:[],
    privat:false
}




for(let d=1; d<=2; d++){
    let a = prompt("Oxirgi ko'rgan serialingiz!") // null
    let b = prompt("Nechi baxo berasiz!") // null

    if(a!=null && b!=null && a!="" && b!=""){
        seriesDB["series"][a]=b
    }else{
        d--
    } 
}
                             
if (seriesDB.count<5 && seriesDB.count>=0){
    console.log("kam kino kuribsiz")
}else if(seriesDB.count>5 && seriesDB.count<10){
    console.log("siz classic muxlis ekansiz")
}else if (seriesDB.count>=10){
    console.log("siz serialchi zvezda ekansiz" )
}
else{
    console.log("son kiriting!!!!!!")
}



console.log(seriesDB)

// console.log(seriesDB="series[a,b]")


