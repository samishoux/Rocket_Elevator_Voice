const axios = require('axios');
// pull in the required packages.
var sdk = require("microsoft-cognitiveservices-speech-sdk");
var fs = require("fs");
// replace with your own subscription key,
// service region (e.g., "westus"), and
// the name of the file you want to run
// through the speech recognizer.
var subscriptionKey = "55afa428bef1466e99eaceb920b018b8";
var serviceRegion = "westus"; // e.g., "westus"
var filename = "2020-09-09 11-08-48(1).wav"; // 16000 Hz, Mono



// axios({
//     method: "post",
//     url: "https://westus.api.cognitive.microsoft.com/spid/v1.0/identify?identificationProfileIds=6089290b-a1f1-40fa-b521-b21ab96126fb,a21551af-ed11-4544-b528-3a4aeeaa8738&shortAudio=true",
//     headers: {"Ocp-Apim-Subscription-Key":"55afa428bef1466e99eaceb920b018b8", "Content-Type":"application/octet-stream"},
//     formData: {
//         voice:fs.createReadStream("Sam_Identification16.wav")
//     }
// })
// .then((res) => {
//     console.log(res.data)
// })
// .catch((err) => {
//     console.log(err)
// });




// text to speech
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
(function() {
    // <code>
    "use strict";
    
    // create the push stream we need for the speech sdk.
    var pushStream = sdk.AudioInputStream.createPushStream();
    
    // open the file and push it to the push stream.
    fs.createReadStream(filename).on('data', function(arrayBuffer) {
      pushStream.write(arrayBuffer.slice());
    }).on('end', function() {
      pushStream.close();
    });
    
    // we are done with the setup
    console.log("Now recognizing from: " + filename);
    
    // now create the audio-config pointing to our stream and
    // the speech config specifying the language.
    var audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
    var speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
    
    // setting the recognition language to English.
    speechConfig.speechRecognitionLanguage = "en-US";
    
    // create the speech recognizer.
    var recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
    
    // start the recognizer and wait for a result.
    recognizer.recognizeOnceAsync(
      function (result) {
        console.log(result.privText);
    
        recognizer.close();
        recognizer = undefined;
      },
      function (err) {
        console.trace("err - " + err);
    
        recognizer.close();
        recognizer = undefined;
      });
    // </code>
    
  }());
    