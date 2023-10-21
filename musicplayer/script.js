let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")



console.log(song_play)

let songs_list = [
       {
        name : 'Paniyonsa',
        Image : 'Images/Paniyonsa.jpeg',
        Song : 'Music/Paniyon Sa (Satyameva Jayate) 320 Kbps.mp3',
        Singer : 'Aatif Aslam, Tulsi Kumar'
    },
    {
        name : 'Malang-Sajna',
        Image : 'Images/Malang-Sajna.jpg',
        Song : 'Music/Malang Sajna_320(PagalWorld.com.se).mp3',
        Singer : 'Sachet & Parampara'
    },
    {
        name : 'Hanuman chalisa',
        Image : 'images/Hanuman-Chalisa.jpg',
        Song : 'music/Hanuman Chalisa(PagalWorld.com.se).mp3',
        Singer : 'Hariharan'
    },
    {
        name : 'Likhe-jo-khat-tuze',
        Image : 'images/Likhe-jo.jpg',
        Song : 'music/Taylor-Swift-Wildest-Dreams.mp3',
        Singer : 'Raj barman'
    },
    {
        name : 'Haniya ve',
        Image : 'images/Haaniya-Ve.jpg',
        Song : 'music/Haaniya Ve_320(PagalWorld.com.se).mp3',
        Singer : 'Jubin nutiyal'
    },
    {
        name : 'Aziyat',
        Image : 'images/Aziyat.jpg',
        Song : 'music/Aziyat Pratyush Dhiman 320 Kbps.mp3',
        Singer : 'Pratyush dhiman'
    },
    {
        name : 'Roohdaariyan',
        Image : 'Images/roohdariyan.jpg',
        Song : 'Music/Roohdaariyan_320(PagalWorld.com.se).mp3',
        Singer : 'Diljit'
    },
]

let i=0;
let flag=false;
// 

function toggleMute() {
    var myAudio = document.getElementById('audio_playo24');
    myAudio.muted = !myAudio.muted;
 }

//  
var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer

song_play.addEventListener("click", function(){

    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    else{
        audio.pause()
        flag=false;
        console.log(flag)
    }
})

song_next.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i+1;
    if(i>=songs_list.length){
        
        i=0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    
})

song_prev.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i-1;
    if(i<=0){
        i=songs_list.length-1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    

    
    
})



