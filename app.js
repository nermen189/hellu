//the JS part for the studyFriends part
//collect all the photos of the studyFriends

const studyFriends= document.querySelectorAll(".content li");

//make var for love emoji

let emojiPhoto = String.fromCodePoint(128525);

//make a loop for collect all studyFriends
for(let i =0 ; i<studyFriends.length ; i++){
    studyFriends[i].addEventListener("click",function(){
        let friendStudyName = studyFriends[i].dataset.name;
        alert(`Thank you for choosing me ${emojiPhoto}${emojiPhoto}. I am ${friendStudyName}.We will have nice time togather. `);
    })
}

//the end of this task*/