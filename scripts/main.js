// Sounds:
var vacuumSound = new Audio('sounds/vacuum.mp3');
var neuronSound = new Audio('sounds/neuronBloop.mp3');
var tweetOKSound = new Audio('sounds/tweetOK.mp3');
var alarmSound = new Audio('sounds/alarm.mp3');
var coinSound1 = new Audio('sounds/coin.mp3');
var coinSound2 = new Audio('sounds/coin.mp3');
var coinSound3 = new Audio('sounds/coin.mp3');
var textSound = new Audio('sounds/click.mp3'); // https://www.zapsplat.com/sound-effect-category/consoles-and-computers/ --> Science fiction, ui, user interface, hud, click, beep
var tweetSound = new Audio('sounds/tweet.mp3'); // https://www.zapsplat.com/sound-effect-category/birds/page/12/ --> Single bird chirping, multiple 2
var pushpinSound = new Audio('sounds/nail.mp3'); // https://www.zapsplat.com/sound-effect-category/nails-and-screws-etc/ --> Small metal screw or nail set down on metal workbench 2
var tadaSound = new Audio('sounds/tada.mp3');
var tapSound = new Audio('sounds/tap.mp3'); // https://www.zapsplat.com/sound-effect-category/button-clicks/ --> Multimedia plastic style button click 3
// ToolTip instances:
var ttFunnelIn;
var ttTwitter;
var ttAbortionHammerReply;
var ttProChoiceCommmunity;
// Animation parts:
var twitter = document.getElementById("twitter");
var machine = document.getElementById("machine");
var neutralTweet1 = document.getElementById("neutralTweet1");
var neutralTweet2 = document.getElementById("neutralTweet2");
var proLifeTweet = document.getElementById("proLifeTweet");
var tweetOK = document.getElementById("tweetOK");
var neuralNetwork = document.getElementById("neuralNetwork");
var funnelIn = document.getElementById("funnelIn");
var activatedNeuron1 = document.getElementById("activatedNeuron1");
var activatedNeuron2 = document.getElementById("activatedNeuron2");
var activatedNeuron3 = document.getElementById("activatedNeuron3");
var activatedNeuron4 = document.getElementById("activatedNeuron4");
var machineScreen = document.getElementById("machineScreen");
var pushpin = document.getElementById("pushpin");
var proChoiceCommunity = document.getElementById("proChoiceCommunity");
var cancelCoin1 = document.getElementById("cancelCoin1");
var cancelCoin2 = document.getElementById("cancelCoin2");
var cancelCoin3 = document.getElementById("cancelCoin3");
var abortionHammerReply = document.getElementById("abortionHammerReply");
var contribution000 = document.getElementById("contribution000");
var contribution010 = document.getElementById("contribution010");
var contribution110 = document.getElementById("contribution110");
var retweet = document.getElementById("retweet");
var comment = document.getElementById("comment");
var rtIcon = document.getElementById("rtIcon");
var commentIcon = document.getElementById("commentIcon");
var funnelOut = document.getElementById("funnelOut");
var tweets = [neutralTweet1, neutralTweet2, proLifeTweet];
// Animation parts coordinates:
var twitterCoords = { x:0, y:110 };
var machineCoords = { x:1100, y:20 };
var tweetOKCoords = { x:machineCoords.x+135, y:machineCoords.y+5 };
var neuralNetworkCoords = { x:machineCoords.x+130, y:machineCoords.y+110 };
var activatedNeuron1Coords = { x:neuralNetworkCoords.x, y:neuralNetworkCoords.y+30 };
var activatedNeuron2Coords = { x:neuralNetworkCoords.x, y:neuralNetworkCoords.y+30 };
var activatedNeuron3Coords = { x:neuralNetworkCoords.x, y:neuralNetworkCoords.y+88 };
var activatedNeuron4Coords = { x:neuralNetworkCoords.x, y:neuralNetworkCoords.y+88 };
var funnelInCoords = { x:machineCoords.x-99, y:machineCoords.y+136 };
var neutralTweet1Coords = { x:twitterCoords.x+200, y:twitterCoords.y+40 };
var neutralTweet2Coords = { x:twitterCoords.x+200, y:twitterCoords.y+40 };
var proLifeTweetCoords = { x:twitterCoords.x+200, y:twitterCoords.y+40 };
var machineScreenCoords = { x:machineCoords.x+70, y:machineCoords.y+15 };
var pushpinCoords = { x:funnelInCoords.x+5, y:funnelInCoords.y+30 };
var proChoiceCommunityCoords = { x:machineCoords.x-50, y:machineCoords.y+425 };
var cancelCoin1Coords = { x:proChoiceCommunityCoords.x+240, y:machineCoords.y+180 };
var cancelCoin2Coords = { x:proChoiceCommunityCoords.x+180, y:machineCoords.y+135 };
var cancelCoin3Coords = { x:proChoiceCommunityCoords.x+200, y:machineCoords.y+220 };
var abortionHammerReplyCoords = { x:proLifeTweetCoords.x, y:proLifeTweetCoords.y+131 };
var contributionCoords = { x:proLifeTweetCoords.x+75, y:proLifeTweetCoords.y+90 };
var retweetCoords = { x:abortionHammerReplyCoords.x, y:abortionHammerReplyCoords.y+148.5 };
var commentCoords = { x:retweetCoords.x, y:retweetCoords.y+33 };
var rtIconCoords = { x:contributionCoords.x+97, y:contributionCoords.y };
var commentIconCoords = { x:contributionCoords.x, y:contributionCoords.y };
var funnelOutCoords = { x:machineCoords.x+150, y:machineCoords.y+270 };
// Texts:
var scenarioText1 = "We created a bot that aims to discourage anti-choice content on Twitter.";
var scenarioText2 = "It regularly checks Twitter in order to find <b>anti-choice tweets</b>.";
var scenarioText3 = "To identify anti-choice tweets, the program relies on <b>NLP (natural language processing)</b>, which is a domain of <b>artificial intelligence</b>.";
var scenarioText4 = "There was nothing special with the 2 tweets you just saw. So the program just ignored them. Let's now see how it reacts when it detects an anti-choice tweet...";
var scenarioText5 = "When the program detects an anti-choice tweet, it tags it and replies with a tweet notifying that any further contribution to this tweet will lead to <b>automatic donations to abortion funds</b>.";
var scenarioText6 = "A contribution to the tweet can be a retweet, a like or a comment.";
var scenarioText7 = "<table><tr><td><img src='images/thumbsup.png' /></td><td>Congratulations! Your retweet just triggered a donation to a pro-choice fund!</td></tr></table>";
var scenarioText8 = "The donations are made using a brand new cryptocurrency created for our purpose: the <b>Cancelcoin</b>.";
var scenarioText9 = "Let us tell you more about it!";
var invitationToActionText1 = "Click on the Twitter logo to see how it works!";
var invitationToActionText2 = "Click here to generate an anti-choice tweet!";
var invitationToActionText3 = "Click on the retweet icon!";
var invitationToActionText4 = "Click on the comment icon to generate a comment!";
var machineScreenTweetOKText = "TWEET OK";
var machineScreenAntiChoiceDetectedText = "ANTI-CHOICE DETECTED";
var machineScreenRetweetDetectedText = "RETWEET DETECTED";
var machineScreenCommentDetectedText = "COMMENT DETECTED";
// Misc. variables:
var nextTweetIndex = 0;
var proChoiceCommunityReady = false;
var continueButtonHtml = "<button type='button'>Continue</button>";

// Interesting sounds:
// Mario coin sound effect source : http://www.orangefreesounds.com/mario-coin-sound/
// --> The sound effect is permitted for non-commercial use under license “Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)” 
// https://www.zapsplat.com/sound-effect-category/alerts-and-prompts/page/17/ --> Alert, prompt, notification beep
// https://www.zapsplat.com/sound-effect-category/alerts-and-prompts/page/18/ --> Notification tone, synth dreamy mallet 16
// https://www.zapsplat.com/sound-effect-category/sirens-and-alarms/ --> Emergency, alarm, siren, loop

function initAnimationPartFade(image, coords, opacity=1, delay=0, duration=1, callback=function(){}){
    TweenMax.to(image, 0, {x:coords.x, y:coords.y, opacity:0, delay:delay});
    TweenMax.to(image, duration, {opacity:opacity, x:coords.x, y:coords.y, delay:delay, onComplete:callback});
}

function initAnimationPart(image, coords, opacity=1, delay=0){
    var vars = Object.assign({}, coords, { opacity:opacity, delay:delay });
    TweenMax.to(image, 0, vars);
}

function showTextBubble(ttInstance, text, onHide, withContinueButton=false, placement="top"){
    textSound.play();
    ttInstance[0].set({
        content: text + (withContinueButton ? " " + continueButtonHtml : ""),
        arrow: true,
        placement: placement,
        trigger: 'manual',  
        animation: 'scale',      
        onHide: onHide
    });
    ttInstance[0].show();
}

function generateNextTweetFromEvent(){
    generateSpecificTweetFromEvent(tweets[nextTweetIndex]);
    nextTweetIndex++;
    if (nextTweetIndex > tweets.length - 1)
        nextTweetIndex = 0;
}

function generateSpecificTweetFromEvent(tweet){
    generateTweet(tweet, 0);
}

function generateTweet(tweet, delay){
    tweetSound.play();
    tweet.style.opacity = 1;
    TweenMax.to(twitter, 0.1, {
        rotation: '+=10',
        yoyo: true,
        repeat: 5,
        delay: delay
    });
    TweenMax.from(tweet, 0.5, {
        x: -1000,
        opacity: 0,
        delay: delay,
        onComplete: tweetGenerated(tweet)
    });
}

function tweetGenerated(tweet){
    setTimeout(function(){
        animateMachineWhileSucking(0.5);
        suckTweet(tweet, 2.5); 
    }, 500);
}

function suckTweet(tweet, delay){
    TweenMax.to(tweet, 0.5, {
        scale: 0,
        x: '+=500',
        delay: delay,
        onComplete: tweetSucked(tweet)
    });
}

function tweetSucked(tweet){
    if (tweet.id == "proLifeTweet"){
        spitTweetBackAndNailIt(tweet, 7, function(){
            notifyProLifeUser(0.5);
        });
        showTextOnMachineScreen(machineScreenAntiChoiceDetectedText, "#fc5185", 0.3, 5, 5, alarmSound, function(){});
    } else {
        showTextOnMachineScreen(machineScreenTweetOKText, "#0f0", 0.3, 5, 5, tweetOKSound, function(){
            if (nextTweetIndex < 2) {               
                showTextBubble(ttFunnelIn, scenarioText3, generateNextTweetFromEvent, true, "left");
            } else {
                showTextBubble(ttFunnelIn, scenarioText4, function(){
                    $("#twitter").one("click", generateNextTweetFromEvent);
                    showTextBubble(ttTwitter, invitationToActionText2, function(){});
                    TweenMax.to(twitter, 0.3, {
                        scale: 1.1,
                        yoyo: true,
                        repeat: 5
                    });
                }, true, "left");
            }
        });
    }
    animateNeuralNetwork(3); 
}

function spitTweetBackAndNailIt(tweet, delay, onComplete){
    var destX = proLifeTweetCoords.x;
    var destY = proLifeTweetCoords.y;
    TweenMax.to(tweet, 0.5, {
        x: destX,
        y: destY,
        scale: 1,
        delay: delay
    });
    var tweetRect = tweet.getBoundingClientRect();
    TweenMax.to(pushpin, 0, {
        opacity: 1,
        scale: 1.5,
        delay: delay + 0.5
    });
    TweenMax.to(pushpin, 0.1, {
        x: destX + tweetRect.width - 30,
        y: destY - 35,
        rotation: 360,
        scale: 1,
        delay: delay + 0.5,
        onStart: function(){
            pushpinSound.play();
        },
        onComplete: onComplete
    });
}

function notifyProLifeUser(delay){
    initAnimationPart(abortionHammerReply, abortionHammerReplyCoords, 1, 0);
    TweenMax.from(abortionHammerReply, 0.5, {
        opacity: 0,
        y: '-=100',
        delay: delay,
        onComplete: function(){
            ttAbortionHammerReply = tippy("#abortionHammerReply");
            showTextBubble(ttAbortionHammerReply, scenarioText5, function(){
                setTimeout(function(){
                    showTextBubble(ttAbortionHammerReply, scenarioText6, showcaseProLifeTweetContributions, true, "bottom");  
                }, 500);
            }, true, "left");
        }
    });
}

function showcaseProLifeTweetContributions(){
    initAnimationPartFade(contribution000, contributionCoords, 1, 0, 1, function(){
        var ttRetweet = tippy("#rtIcon");
        showTextBubble(ttRetweet, invitationToActionText3, function(){}, false, "left");
        TweenMax.to(rtIcon, 0.3, {
            scale: 1.5,
            opacity: 1,
            yoyo: true,
            repeat: 5
        });
        $("#rtIcon").one("click", function(){
            // Retweet:
            tapSound.play();
            initAnimationPart(rtIcon, rtIconCoords, 0.5, 0);
            TweenMax.to(rtIcon, 2, {
                opacity: 0,
                rotation: 360,
                scale: 10
            });
            initAnimationPartFade(contribution010, contributionCoords);
            initAnimationPart(retweet, retweetCoords, 1, 0);   
            TweenMax.from(retweet, 0.5, {
                opacity: 0,
                y: '-=100',
                delay: 0.2,
                onComplete: function(){
                    showTextOnMachineScreen(machineScreenRetweetDetectedText, "#fc5185", 0.3, 5, 0.2, alarmSound, function(){
                        makeDonationToProChoiceCommunity(0.8, function(){
                            tadaSound.play();
                            ttProChoiceCommmunity = tippy("#proChoiceCommunity");
                            showTextBubble(ttProChoiceCommmunity, scenarioText7, function(){
                                var ttComment = tippy("#commentIcon");
                                showTextBubble(ttComment, invitationToActionText4, function(){}, false, "left");
                                TweenMax.to(commentIcon, 0.3, {
                                    scale: 1.5,
                                    opacity: 1,
                                    yoyo: true,
                                    repeat: 5
                                });
                                $("#commentIcon").one("click", function(){
                                    // Comment:
                                    tapSound.play();
                                    initAnimationPart(commentIcon, commentIconCoords, 0.5, 0.2);
                                    TweenMax.to(commentIcon, 2, {
                                        opacity: 0,
                                        scale: 10,
                                        delay: 0.2
                                    });
                                    initAnimationPartFade(contribution110, contributionCoords);
                                    initAnimationPart(comment, commentCoords, 1, 0);
                                    TweenMax.from(comment, 0.5, {
                                        opacity: 0,
                                        y: '-=100',
                                        delay: 0.2,
                                        onComplete: function(){
                                            showTextOnMachineScreen(machineScreenCommentDetectedText, "#fc5185", 0.3, 5, 0.2, alarmSound, function(){
                                                makeDonationToProChoiceCommunity(0.8, function(){
                                                    setTimeout(function(){
                                                        showTextBubble(ttProChoiceCommmunity, scenarioText8, function(){
                                                            setTimeout(function(){
                                                                showTextBubble(ttProChoiceCommmunity, scenarioText9, function(){
                                                                    document.location.href = "cancelcoin.html";
                                                                }, true, "left");
                                                            }, 500);
                                                        }, true, "left");
                                                    }, 1000);
                                                });
                                            });
                                        }
                                    });
                                });                                
                            }, true, "left");
                        });
                    });
                }
            });
        });
    });
}

function makeDonationToProChoiceCommunity(durationCoinAnimation, callback){
    if (!proChoiceCommunityReady){
        proChoiceCommunityReady = true;
        initAnimationPartFade(proChoiceCommunity, proChoiceCommunityCoords, 1, 0, 2);
        initAnimationPart(funnelOut, funnelOutCoords);
        TweenMax.from(funnelOut, 0.5, {
            y: '-=100',
            onComplete: function(){
                spitCoinsToProChoiceCommunity(durationCoinAnimation, callback, durationCoinAnimation);
            }
        });
    } else {
        spitCoinsToProChoiceCommunity(durationCoinAnimation, callback);
    }
}

function spitCoinsToProChoiceCommunity(duration, callback){
    TweenMax.to(proChoiceCommunity, 0.3, {
        scale: 1.1,
        yoyo: true,
        repeat: 5,
        delay: 0.6
    });
    throwCancelCoin(cancelCoin1, cancelCoin1Coords, coinSound1, duration, 0, function(){});
    throwCancelCoin(cancelCoin2, cancelCoin2Coords, coinSound2, duration, 0.3, function(){});
    throwCancelCoin(cancelCoin3, cancelCoin3Coords, coinSound3, duration, 0.6, callback);
}

function throwCancelCoin(cancelCoin, coords, coinSound, duration, delay, callback){
    TweenMax.to(cancelCoin, 0, { opacity: 1, x:coords.x, y:coords.y, scale:1 });
    TweenMax.to(cancelCoin, duration, {
        y: '+=350',
        scale: 0.5,
        opacity: 0.5,
        delay: delay,
        onStart: function(){
            setTimeout(function(){
                coinSound.play();                
            }, 500);
        },
        onComplete: function(){
            callback();
            TweenMax.to(cancelCoin, 0.3, {
                opacity: 0
            });
        }
    });
}

function animateMachineWhileSucking(delay){
    // Vacuum sound:
    vacuumSound.play();

    TweenMax.to(funnelIn, 0.3, {
        width: '+=0',
        height: '+=20',
        y: '-=10',
        yoyo: true,
        repeat: 9,
        delay:delay
    });
    TweenMax.to([machine, neuralNetwork], 0.6, {
        width: '+=0',
        height: '+=5',
        y: '-=5',
        yoyo: true,
        repeat: 5,
        delay:delay
    });   
}

function animateNeuralNetwork(delay){
    activatedNeuron1.style.opacity = 1;
    activatedNeuron2.style.opacity = 1;
    activatedNeuron3.style.opacity = 1;
    activatedNeuron4.style.opacity = 1;

    // --------- ALL NEURONS ---------
    // scale up
    TweenMax.from([activatedNeuron1, activatedNeuron2, activatedNeuron3, activatedNeuron4], 0.2, {
        scale: 0,
        delay: delay,
        onComplete: function(){ neuronSound.play(); }
    });

    // --------- FIRST NEURON ---------
    // scale down
    TweenMax.to(activatedNeuron1, 0.1, {
        scale: 0.2,
        delay: delay + 0.3
    })
    // move to 2nd layer
    TweenMax.to(activatedNeuron1, 0.5, {
        x: '+=61',
        y: '-=25',
        delay: delay + 0.4,
        onComplete: function(){ neuronSound.play(); }
    });
    // scale up
    TweenMax.to(activatedNeuron1, 0.5, {
        scale: 1,
        delay: delay + 0.6,
    });
    // scale down
    TweenMax.to(activatedNeuron1, 0.1, {
        scale: 0.2,
        delay: delay + 1.1
    }) 
    // move to 3rd layer
    TweenMax.to(activatedNeuron1, 0.5, {
        x: '+=62',
        y: '+=55',
        delay: delay + 1.2,
        onComplete: function(){ neuronSound.play(); }
    }); 
    // scale up
    TweenMax.to(activatedNeuron1, 0.5, {
        scale: 1,
        delay: delay + 1.4,
    }); 

    // --------- SECOND NEURON ---------
    // scale down
    TweenMax.to(activatedNeuron2, 0.1, {
        scale: 0.2,
        delay: delay + 0.3
    })
    // move to 2nd layer
    TweenMax.to(activatedNeuron2, 0.5, {
        x: '+=61',
        y: '+=11',
        delay: delay + 0.4,
    });
    // scale up
    TweenMax.to(activatedNeuron2, 0.5, {
        scale: 1,
        delay: delay + 0.6,
    });
    // scale down
    TweenMax.to(activatedNeuron2, 0.1, {
        scale: 0.2,
        delay: delay + 1.1
    }) 
    // move to 3rd layer
    TweenMax.to(activatedNeuron2, 0.5, {
        x: '+=62',
        y: '+=18',
        delay: delay + 1.2,
    }); 
    // scale up
    TweenMax.to(activatedNeuron2, 0.5, {
        scale: 1,
        delay: delay + 1.4,
    });
    
    // --------- THIRD NEURON ---------
    // scale down
    TweenMax.to(activatedNeuron3, 0.1, {
        scale: 0.2,
        delay: delay + 0.3
    })
    // move to 2nd layer
    TweenMax.to(activatedNeuron3, 0.5, {
        x: '+=61',
        y: '-=10',
        delay: delay + 0.4,
    });
    // scale up
    TweenMax.to(activatedNeuron3, 0.5, {
        scale: 1,
        delay: delay + 0.6,
    });
    // scale down
    TweenMax.to(activatedNeuron3, 0.1, {
        scale: 0.2,
        delay: delay + 1.1
    }) 
    // move to 3rd layer
    TweenMax.to(activatedNeuron3, 0.5, {
        x: '+=62',
        y: '-=19',
        delay: delay + 1.2,
    }); 
    // scale up
    TweenMax.to(activatedNeuron3, 0.5, {
        scale: 1,
        delay: delay + 1.4,
    });  
    
    // --------- FOURTH NEURON ---------
    // scale down
    TweenMax.to(activatedNeuron4, 0.1, {
        scale: 0.2,
        delay: delay + 0.3
    })
    // move to 2nd layer
    TweenMax.to(activatedNeuron4, 0.5, {
        x: '+=61',
        y: '+=26',
        delay: delay + 0.4,
    });
    // scale up
    TweenMax.to(activatedNeuron4, 0.5, {
        scale: 1,
        delay: delay + 0.6,
    });
    // scale down
    TweenMax.to(activatedNeuron4, 0.1, {
        scale: 0.2,
        delay: delay + 1.1
    }) 
    // move to 3rd layer
    TweenMax.to(activatedNeuron4, 0.5, {
        x: '+=62',
        y: '-=55',
        delay: delay + 1.2,
    }); 
    // scale up
    TweenMax.to(activatedNeuron4, 0.5, {
        scale: 1,
        delay: delay + 1.4,
    }); 

    // --------- ALL NEURONS --------
    // scale down
    TweenMax.to([activatedNeuron1, activatedNeuron2, activatedNeuron3, activatedNeuron4], 0.1, {
        scale: 0,
        delay: delay + 1.6
    });   

    // RESTORE X, Y
    TweenMax.to(activatedNeuron1, 0, {
        scale: 1,
        x: activatedNeuron1Coords.x,
        y: activatedNeuron1Coords.y,
        opacity:0,
        delay: delay + 1.7
    });
    TweenMax.to(activatedNeuron2, 0, {
        scale: 1,
        x: activatedNeuron2Coords.x,
        y: activatedNeuron2Coords.y,
        opacity:0,
        delay: delay + 1.7
    });
    TweenMax.to(activatedNeuron3, 0, {
        scale: 1,
        x: activatedNeuron3Coords.x,
        y: activatedNeuron3Coords.y,
        opacity:0,
        delay: delay + 1.7
    });
    TweenMax.to(activatedNeuron4, 0, {
        scale: 1,
        x: activatedNeuron4Coords.x,
        y: activatedNeuron4Coords.y,
        opacity:0,
        delay: delay + 1.7
    });            
}

function showTextOnMachineScreen(text, color, duration, repeat, delay, sound, callback){
    machineScreen.innerHTML = text;
    machineScreen.style.color = color;
    TweenMax.to(machineScreen, duration, {
        opacity: 1,
        yoyo: true,
        repeat: repeat,
        delay: delay,
        onStart: function(){ sound.play() },
        onComplete: callback
    });   
}

$(document).ready(function(){
    $("#btnStart").click(function(){
        $("#containerBtnStart").hide();

        // Initialize and display the different animation parts:
        initAnimationPartFade(twitter, twitterCoords);
        initAnimationPartFade(machine, machineCoords);
        initAnimationPartFade(neuralNetwork, neuralNetworkCoords);
        initAnimationPartFade(funnelIn, funnelInCoords);
        initAnimationPart(activatedNeuron1, activatedNeuron1Coords, 0, 0);
        initAnimationPart(activatedNeuron2, activatedNeuron2Coords, 0, 0);
        initAnimationPart(activatedNeuron3, activatedNeuron3Coords, 0, 0);
        initAnimationPart(activatedNeuron4, activatedNeuron4Coords, 0, 0);
        initAnimationPart(neutralTweet1, neutralTweet1Coords, 0, 0);
        initAnimationPart(neutralTweet2, neutralTweet1Coords, 0, 0);
        initAnimationPart(proLifeTweet, neutralTweet1Coords, 0, 0);
        initAnimationPart(machineScreen, machineScreenCoords, 0, 0);
        initAnimationPart(cancelCoin1, cancelCoin1Coords, 0, 0);
        initAnimationPart(cancelCoin2, cancelCoin2Coords, 0, 0);
        initAnimationPart(cancelCoin3, cancelCoin3Coords, 0, 0);
        initAnimationPart(pushpin, pushpinCoords, 0, 0);
        initAnimationPart(rtIcon, rtIconCoords, 0, 0);
        initAnimationPart(commentIcon, commentIconCoords, 0, 0);

        ttTwitter = tippy("#twitter");
        ttFunnelIn = tippy("#funnelIn");
        showTextBubble(ttFunnelIn, scenarioText1, function(){
            showTextBubble(ttTwitter, scenarioText2, function(){
                setTimeout(function(){
                    $("#twitter").one("click", generateNextTweetFromEvent);
                    showTextBubble(ttTwitter, invitationToActionText1, function(){});
                    TweenMax.to(twitter, 0.3, {
                        scale: 1.1,
                        yoyo: true,
                        repeat: 5
                    });
                }, 500);
            }, true, "right");
        }, true, "left");
    });
});
