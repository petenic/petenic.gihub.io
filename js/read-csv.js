//csv file loader code below found at: https://github.com/MounirMesselmeni/html-fileapi
function handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader not supported in this browser.');
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
}

function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);             
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
    }
    console.log(lines);
    drawOutput(lines);
}

function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Cannot read file!");
    }
}

function drawOutput(lines){
    //Clear previous data
    
    document.getElementById("output").innerHTML = "";
    /*var myArray = document.getElementByIdcreateElement("table");
    for (var i = 0; i < lines.length; i++) {
        var row = table.insertRow(-1);
        for (var j = 0; j < lines[i].length; j++) {
            var firstNameCell = row.insertCell(-1);
            firstNameCell.appendChild(document.createTextNode(lines[i][j]));
        }
    }
    document.getElementById("output").appendChild(table);*/
    
    
    /*document.getElementById("output").innerHTML = "";
    var table = document.createElement("table");
    for (var i = 0; i < lines.length; i++) {
        var row = table.insertRow(-1);
        for (var j = 0; j < lines[i].length; j++) {
            var firstNameCell = row.insertCell(-1);
            firstNameCell.appendChild(document.createTextNode(lines[i][j]));
        }
    }
    document.getElementById("output").appendChild(table);  */
}

//csv file loader code above found at: https://github.com/MounirMesselmeni/html-fileapi
        //var i=0;
        // alt + : 0196=ƒ 0228=‰; 0203=À 0235=Î; 0214=÷ 0246=ˆ ; 0220=‹ 0252=¸; 0223=ﬂ; 0209=— 0241=Ò
        var words = [];
        words [0] = ["Hypertext-Uebertragungsprotokoll", "HTTP", "HTML", "ABCD", "BYOB", "Das"];
        words [1] = ["Festung","fortress","barbican","gate","moat","Die"];
        words [2] = ["Verraeter","traitor","tailor","sailor","moonraker", "Der"];
        words [3] = ["aushalten","endure","ensure","enclave","cul de sac","--"];
        words [4] = ["Spott","ridicule","praise","function","means", "Der"];
        words [5] = ["hartnaeckig","tenacious","actual","factual","irrelevant","--"];
        words [6] = ["Alleinherrscher","autocrat","theocrat","plutocrat","democrat","der"];
        words [7] = ["allerdings","certainly","silently","absurdly","not","--"];
        words [8] = ["Axt","axe","axiomatic","armpit","ask","die"];
        words [9] = ["Defizit","deficit","legit","illicit","transit","das"];
        words [10] = ["gewiss","certainly","provided","unsure","new","--"];
        words [11] = ["grauenvoll","gruesome","relaxed","short","honest","--"];
        words [12] = ["Heuchler","hypocrite","hypochondriac","hippopotamus","hack","der"];
        words [13] = ["Oelmessstab","dipstick","idiot","fool","nit-wit","--"];
        words [14] = ["prekaer","precarious","predate","precious","precook","--"];
        words [15] = ["schliesslich","finally","nonsensically","lately","originally","--"];
        words [16] = ["Ungeheuer","monstrosity","relative","fugue","delight","das"];
        words [17] = ["unwillkuerlich","involuntary","cautiously","admitted","gingerly","--"];
        words [18] = ["zart","tender","hard","free","rough","--"];
        words [19] = ["Fuellhorn","cornucopia","shortage","paucity","lack","das"];
        words [20] = ["Delikt","offense","defense","argue","delectability","das"];
        words [21] = ["Wirrwarr","imbroglio","whirl","windward","without","der/das"];
        words [22] = ["Kluft","chasm","charm","chaste","champion","die"];
        words [23] = ["Kerker","dungeon","dragon","cave","spelunker","der"];
        
        var temp = [];
        var rand_int = [];
        rand_int[0] = getRandomInt();
       // var pct = 

function getRandomInt() {
    return Math.floor(Math.random() * 4) + 1;
    //getRandomInt();
}
function retRandomInt() {
     do{ rand_int[1] = getRandomInt();} while (rand_int[1] === rand_int[0]);
     do{ rand_int[2] = getRandomInt();} while (rand_int[2] === rand_int[0] || rand_int[2] === rand_int[1]);
     do{ rand_int[3] = getRandomInt();} while (rand_int[3] === rand_int[0] || rand_int[3] === rand_int[1] || rand_int[3] === rand_int[2]);
}

function msg(x){  
    if(x==0) {
        // Start Quiz
        enable_radio();
        stat();
        if(stat.counter >= words.length){
            document.getElementById("result").style.backgroundColor = '#1E90FF';
            document.getElementById("result").value = "Quiz over. Thanks for playing. Restart Quiz.";
            document.getElementById("next").disabled = true;
            document.getElementById("check").disabled = true;  
        }
        temp = words[stat.counter];
        retRandomInt();
        
        document.getElementById("show_word").value = temp[0]; //"Test";
        document.getElementById("answerA").value = temp[rand_int[3]];//temp[1];
        document.getElementById("answerB").value = temp[rand_int[0]];//temp[2];
        document.getElementById("answerC").value = temp[rand_int[2]];//temp[3];
        document.getElementById("answerD").value = temp[rand_int[1]];//temp[4];
        document.getElementById("article").value = temp[5];
        
        document.getElementById("show_word").style.backgroundColor = '#ffffff';
        document.getElementById("answerA").style.backgroundColor = '#ffffff';
        document.getElementById("answerB").style.backgroundColor = '#ffffff';
        document.getElementById("answerC").style.backgroundColor = '#ffffff';
        document.getElementById("answerD").style.backgroundColor = '#ffffff';
        document.getElementById("result").style.backgroundColor = '#d2d2d2';
        
        document.getElementById("result").value = ""
        document.getElementById("sq").disabled = true;
        document.getElementById("next").disabled = false;
        document.getElementById("check").disabled = false;
        radbut = document.getElementById("radA");
        radbut.checked = true;
        
       
        
    }
    if(x==1) {
        // Clear Quiz

        document.getElementById("article").value = "";
        document.getElementById("show_word").value = "";
        document.getElementById("answerA").value = "";
        document.getElementById("answerB").value = "";
        document.getElementById("answerC").value = "";
        document.getElementById("answerD").value = "";
        document.getElementById("result").value = "";
        document.getElementById("score").value = "";
        document.getElementById("rightans").value = "";
        document.getElementById("wrongans").value = "";
        
        document.getElementById("show_word").style.backgroundColor = '#ffffff';
        document.getElementById("answerA").style.backgroundColor = '#ffffff';
        document.getElementById("answerB").style.backgroundColor = '#ffffff';
        document.getElementById("answerC").style.backgroundColor = '#ffffff';
        document.getElementById("answerD").style.backgroundColor = '#ffffff';
        document.getElementById("result").style.backgroundColor = '#d2d2d2';       
    } 

    if(x==2) {
        //Next button 
       if(document.getElementById("radA").disabled == true) {
           msg(0);
       } else {
           checkans();
       }
    }
    if(x==3) {
        //Restart button
        location.reload();
    }
        
}

 function checkans() {
    document.getElementById("check").disabled = true;
    if(document.getElementById("show_word").value == "" && document.getElementById("sq").disabled == true) {
        msg('2');
    }
     
    if(document.getElementById("radA").checked == true) {
        var radA_text = document.getElementById("answerA").value;
        //document.getElementById("article").value = radA_text;
        if(radA_text == temp[1]){
        document.getElementById("result").style.backgroundColor = 'lightgreen';
        document.getElementById("result").value = "Correct! Please press the 'Next' button.";
        disable_radio();
        test_right();
        test_score();
        } else {
            document.getElementById("result").style.backgroundColor = 'red';
            document.getElementById("result").value = "Wrong answer.  Please press the 'Next' button.";
            disable_radio();
            correct_answer();
            test_wrong();
            test_score();
        }
    }
    
     if(document.getElementById("radB").checked == true) {
        var radA_text = document.getElementById("answerB").value;
        //document.getElementById("article").value = radA_text;
        if(radA_text == temp[1]){
        document.getElementById("result").style.backgroundColor = 'lightgreen';
        document.getElementById("result").value = "Correct! Please press the 'Next' button.";
        disable_radio();
        test_right();
        test_score();
        } else {
            document.getElementById("result").style.backgroundColor = 'red';
            document.getElementById("result").value = "Wrong answer.  Please press the 'Next' button.";
            disable_radio();
            correct_answer();
            test_wrong();
            test_score();
        }
    }
     
    if(document.getElementById("radC").checked == true) {
        var radA_text = document.getElementById("answerC").value;
        //document.getElementById("article").value = radA_text;
        if(radA_text == temp[1]){
        document.getElementById("result").style.backgroundColor = 'lightgreen';
        document.getElementById("result").value = "Correct! Please press the 'Next' button.";
        disable_radio();
        test_right();
        test_score();
        } else {
            document.getElementById("result").style.backgroundColor = 'red';
            document.getElementById("result").value = "Wrong answer.  Please press the 'Next' button."; disable_radio();
            correct_answer();
            test_wrong();
            test_score();
        }
    }
     
    if(document.getElementById("radD").checked == true) {
        var radA_text = document.getElementById("answerD").value;
        //document.getElementById("article").value = radA_text;
        if(radA_text == temp[1]){
        document.getElementById("result").style.backgroundColor = 'lightgreen';
        document.getElementById("result").value = "Correct! Please press the 'Next' button.";
        disable_radio();
        test_right();
        test_score();
        } else {
            document.getElementById("result").style.backgroundColor = 'red';
            document.getElementById("result").value = "Wrong answer.  Please press the 'Next' button.";
            disable_radio();
            correct_answer();
            test_wrong();
            test_score();
        }
    }
    
}

function correct_answer() {
    if(document.getElementById("answerA").value == temp[1]) {document.getElementById("answerA").style.backgroundColor = 'lightgreen';}
    if(document.getElementById("answerB").value == temp[1]) {document.getElementById("answerB").style.backgroundColor = 'lightgreen';}
    if(document.getElementById("answerC").value == temp[1]) {document.getElementById("answerC").style.backgroundColor = 'lightgreen';}
    if(document.getElementById("answerD").value == temp[1]) {document.getElementById("answerD").style.backgroundColor = 'lightgreen';}    
}

function disable_clear_quiz() {
     document.getElementById("cq").disabled = true;
}

function disable_csv_file() {
    document.getElementById("csv-file").disabled = true;
    document.getElementById("csvFileInput").disabled = true;
}

function disable_radio() {
    document.getElementById("radA").disabled = true;
    document.getElementById("radB").disabled = true;
    document.getElementById("radC").disabled = true;
    document.getElementById("radD").disabled = true;
}

function enable_radio() {
    document.getElementById("radA").disabled = false;
    document.getElementById("radB").disabled = false;
    document.getElementById("radC").disabled = false;
    document.getElementById("radD").disabled = false;
}
/*function myGlobalStr(sendAns) {
    var correct_answer = sendAns;
}*/
function makegrey() {
    document.getElementById("result").style.backgroundColor = '#d2d2d2';
    document.getElementById("result").value = ""
}
function notnext() {
    document.getElementById("next").disabled = true;
}
function stat() {

    if( typeof stat.counter == 'undefined' ) {
        stat.counter = -1;
    }
    stat.counter++;
    //document.write(stat.counter+"<br />");
}
function test_right() {
    if( typeof test_right.counter == 'undefined' ) {
        test_right.counter = 0;
    }
    test_right.counter++;
    //document.write(stat.counter+"<br />");
}
function test_score() {
    if(test_right.counter >= 1 && test_wrong.counter == 0){
        document.getElementById("rightans").value = test_right.counter;
        document.getElementById("score").value = "100";
    }   
    if(test_right.counter >= 1) {
        document.getElementById("score").value = String(Math.round(test_right.counter/(test_right.counter + test_wrong.counter)*100))
        document.getElementById("rightans").value = test_right.counter;
        document.getElementById("wrongans").value = test_wrong.counter;
    }  else {
        document.getElementById("wrongans").value = test_wrong.counter; 
    } 
    
}
function test_wrong() {
    if( typeof test_wrong.counter == 'undefined' ) {
        test_wrong.counter = 0;
    }
    test_wrong.counter++;
    //document.write(stat.counter+"<br />");
}