$("#arrow").click(function(){$('html,body').animate({scrollTop:$("#part2").offset().top},1200);});$("#homeLink").click(function(){$('html,body').animate({scrollTop:$("#home").offset().top},1200);});$("#aboutLink").click(function(){$('html,body').animate({scrollTop:$("#part2").offset().top},1200);});$("#projectLink").click(function(){$('html,body').animate({scrollTop:$("#part3").offset().top},1200);});$("#contactLink").click(function(){$('html,body').animate({scrollTop:$("#part4").offset().top},1200);});$(document).ready(function(){$(".cross").hide();$(".menu").hide();$(".hamburger").click(function(){$(".menu").slideToggle("slow",function(){$(".hamburger").hide();$(".cross").show();});});$(".cross").click(function(){$(".menu").slideToggle("slow",function(){$(".cross").hide();$(".hamburger").show();});});});var words=['computer engineering student.', 'University of Waterloo student.', 'software developer.','problem solver.','tech enthusiast.','creative thinker.'],currentStep=0,textEl=document.querySelector('.change-text'),oldWord='';setTimeout(changeWord,1000);function changeWord(){oldWord=textEl.innerHTML;if(oldWord.length<1){if(currentStep!==words.length-1){currentStep++;}else{currentStep=0;}addNextWord();}else{setTimeout(deleteWord,800);}};function deleteWord(){var WordLength=oldWord.length,currentWord=textEl.innerHTML,currentLength=currentWord.length;if(currentLength<1){changeWord();return;}textEl.innerHTML=currentWord.substring(0,currentLength-1);setTimeout(deleteWord,200);}function addNextWord(){var currentWord=textEl.innerHTML,currentLength=currentWord.length,nextWord=words[currentStep],nextWordLength=nextWord.length;if(currentLength===nextWordLength){changeWord();return;}textEl.innerHTML=nextWord.substring(0,currentLength+1);setTimeout(addNextWord,200);}