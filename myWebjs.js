function toggle(paraIdClicked){
    const Ids = ["T","E","S","S2","P","H","I","L","L2","I2","P2","S3"]
    if (document.getElementById(paraIdClicked).style.display =="block"){
        document.getElementById(paraIdClicked).style.display ="none"
    }
    else {
        for (let i = 0; i < Ids.length; i++) {
            const paraId = [Ids[i],"para"].join("")
            if(paraId == paraIdClicked){
                document.getElementById(paraIdClicked).style.display ="block"
            }
            else {document.getElementById(paraId).style.display ="none"}
        }
    }
}