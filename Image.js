Webcam.set({
    width:350, 
    height:300,
    image_format:'png',
    png_quality:90
});

camera= document.getElementById("camera");

webcam.attach("#camera");

function capture_img(){
    webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_img" src='+data_uri+'"/>';

    });
}

console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SN0m1C37o/',modelLoaded)