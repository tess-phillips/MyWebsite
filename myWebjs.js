const Ids = ["T","E","S","S2","P","H","I","L","L2","I2","P2","S3"]
const paraId2 = ["Tpara","Epara","Spara","S2para","Ppara","Hpara","Ipara","Lpara","L2para","I2para","P2para","S3para"]
var j=0;

function closeAll(){
    paraId2.forEach(element => {
        document.getElementById(element).style.display ="none";
    });
}

function toggleKey(){
    closeAll()
    document.getElementById(paraId2[j]).style.display ="block";
    j+=1;
    if (j==12){j=0}
}
 
document.addEventListener("keydown",()=>toggleKey());

function toggle(paraIdClicked){
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