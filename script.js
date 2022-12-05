let getBio = new XMLHttpRequest();

getBio.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let infoObject = JSON.parse(this.responseText);

        document.getElementById("name").innerHTML = infoObject.name;
        document.getElementById("birthday").innerHTML = infoObject.birthday;
    }
};

getBio.open("GET", "einstein.json", true);
getBio.send();

function showBio(){
    let getBioFull = new XMLHttpRequest();

getBioFull.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let infoObj = JSON.parse(this.responseText);
    document.getElementById("bio").innerHTML = infoObj.biography    }
};

getBioFull.open("GET", "einstein.json", true);
getBioFull.send();

};