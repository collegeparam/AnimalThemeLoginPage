let btn = document.querySelector(".btn");
let container = document.querySelector(".container");
let message = document.querySelector(".message");
let video = document.querySelector(".ranbir");
let body = document.body;
let clickcount = 0;
let source = undefined;

btn.addEventListener("click", function () {
    clickcount++;
    let pic = undefined;

    switch (clickcount) {
        case 1:
            pic = "pic/man-standing.png";
            body.style.background = `url(${pic}) center center/cover`;
            break;
        case 2:
            source = document.createElement("source");
            source.setAttribute("src", "pic/video.mp4");
            source.setAttribute("type", "video/mp4");

            // Pause the video before changing the source
            video.pause();

            // Remove existing sources
            while (video.firstChild) {
                video.removeChild(video.firstChild);
            }

            video.appendChild(source);
            video.load(); 
            video.play();
            container.style.backdropFilter = "blur(0px)";
            container.style.transition = ".15s";

            setTimeout(function () {
                container.style.backdropFilter = "";
                container.style.transition = "1s";
            }, 2000);
            break;
        case 3:
            source = document.createElement("source");
            source.setAttribute("src", "pic/vid/222.mp4");
            source.setAttribute("type", "video/mp4");

    
            video.pause();

         
            while (video.firstChild) {
                video.removeChild(video.firstChild);
            }

            video.appendChild(source);
            video.load(); 
            video.play();
            container.style.backdropFilter = "blur(0px)";
            container.style.transition = ".15s";
            setTimeout(() => {
                while(body.firstChild){
                    body.removeChild(body.firstChild);
                }
                
            }, 5700);
            pic="pic/wasted.png";
            body.style.background=`url(${pic})center center/cover`;
            break;
        default:
            break;
    }

    message.textContent = "Retry";
    message.style.fontSize = "20px";
    message.style.transition = ".5s";
    message.style.color = "red";

    setTimeout(function () {
        message.style.fontSize = "";
    }, 1000);
});
