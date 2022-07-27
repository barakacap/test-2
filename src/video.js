const video = document.getElementById("video")
function runVideo () {
   if (document.getElementById("video-container").classList.contains("has-video")){
    closeVideo();   
   }else {
       document.getElementById("video").currentTime = 0;
       document.getElementById("video").play();
    document.getElementById("video-container").classList.add("has-video");
    document.getElementById("video-container").getElementsByTagName("video")[0].muted = false;
   }
   
}
function runVideo2 () {
    if (document.getElementById("video2-container").classList.contains("has-video")){
     closeVideo2();   
    }else {
        document.getElementById("video2").currentTime = 0;
        document.getElementById("video2").play();
     document.getElementById("video2-container").classList.add("has-video");
     document.getElementById("video2-container").getElementsByTagName("video")[0].muted = false;
    }
    
 }
function closeVideo () {
    document.getElementById("video-container").getElementsByTagName("video")[0].muted = true;
    document.getElementById("video-container").classList.remove("has-video");
}
function closeVideo2 () {
    document.getElementById("video2-container").getElementsByTagName("video")[0].muted = true;
    document.getElementById("video2-container").classList.remove("has-video");
}
//toggle("has-video");