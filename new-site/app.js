const title = document.querySelector('title');
title.textContent = "Best Brooklyn Nightlife"

const newSection = document.createElement('section');
const body = document.querySelector('body');
body.append(newSection);

body.style.backgroundColor = "#e8d8c3"

const newHeader = document.createElement('h1');
newHeader.textContent = "Best Brooklyn Nightlife";
newHeader.style.fontFamily = "Arial"
newHeader.style.textAlign = "center"
const section = document.querySelector('section');
section.append(newHeader);
newHeader.style.marginBottom = "25px"

const childSection = document.createElement('section');
section.append(childSection);
childSection.style.marginBottom = "10px";

const childSection2 = document.createElement('section');
section.append(childSection2);

childSection.style.display = "flex";
childSection.style.flexDirection = "row";
childSection.style.justifyContent = "space-around";

childSection2.style.display = "flex";
childSection2.style.flexDirection = "row";
childSection2.style.justifyContent = "space-around";

const venues = ["Good Room", "http://www.goodroombk.com/", "Nowadays", "nowadays.nyc", "Trans-Pecos","https://www.thetranspecos.com/", "Public Records", "https://publicrecords.nyc/"]

for (i = 0; i<venues.length; i+=2){
    let venue = venues[i];
    const newLink = document.createElement('a');
    newLink.textContent = venue;
    childSection.appendChild(newLink);
    // newLink.href = venues[i+1];
    newLink.style.display = "inline-block"
    newLink.style.marginBottom = "5px";
    newLink.style.textAlign = "center"
    newLink.style.color = "black"
}

const images = ["https://eventective-media.azureedge.net/1748095_lg.jpg", "https://goop-img.com/wp-content/uploads/2018/04/Nowadays-5_preview.jpeg", "https://cdn4.pitchfork.com/longform/318/IMG_4057.jpg", "https://static.dezeen.com/uploads/2019/10/public-records-interiors-renovation-bar-restaurant-club-brooklyn-new-york-usa_dezeen_2364_col_7-852x568.jpg"]

for (i = 0; i<venues.length; i+=1){
    let image = images[i];
    const newImage = document.createElement('img');
    newImage.src = image;
    childSection2.appendChild(newImage);
    newImage.style.marginBottom = "25px";
    newImage.style.width = "300px";
    newImage.style.alignItems = "center";
    // newDiv.style.display = "inline-block"
}