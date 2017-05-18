var eng_to_jap_set = [];
var randomizedKeyArray = [];
var html = "";

// /**DAYS OF THE MONTH**/
// eng_to_jap_set['Day 1'] = 'tsuitachi';
// eng_to_jap_set['Day 2'] = 'futsuka';
// eng_to_jap_set['Day 3'] = 'mikka';
// eng_to_jap_set['Day 4'] = 'yokka';
// eng_to_jap_set['Day 5'] = 'itsuka';
// eng_to_jap_set['Day 6'] = 'muika';
// eng_to_jap_set['Day 7'] = 'nanoka';
// eng_to_jap_set['Day 8'] = 'youka';
// eng_to_jap_set['Day 9'] = 'kokonoka';
// eng_to_jap_set['Day 10'] = 'touka';


// /**Heinrich's Notes**/
// eng_to_jap_set['breakfast '] = 'choshoku';
// eng_to_jap_set['lunch'] = 'ranchi';
// eng_to_jap_set['dinner'] = 'yushoku';
// eng_to_jap_set['coffee'] = 'kohi';
// eng_to_jap_set['fish'] = 'sakana';
// eng_to_jap_set['milk'] = 'gyunyu';
// eng_to_jap_set['onion'] = 'tamanegi';
// eng_to_jap_set['salad'] = 'sarada';
// eng_to_jap_set['beverage'] = 'inryo';
// eng_to_jap_set['tea'] = 'cha';
// eng_to_jap_set['cake'] = 'keki';
// eng_to_jap_set['sausage'] = 'soseji';
// eng_to_jap_set['cheese'] = 'chizu';
// eng_to_jap_set['toilet'] = 'toire';
// eng_to_jap_set['bathroom'] = 'tearai';
// eng_to_jap_set['help'] = 'tasukete';
// eng_to_jap_set['stop it'] = 'yamete';
// eng_to_jap_set['clothes'] = 'fuku';
// eng_to_jap_set['police'] = 'keisatsu';
// eng_to_jap_set["seems like im dying"] = 'shinisou';
// eng_to_jap_set["dangerous"] = 'abunai';
// eng_to_jap_set["peril, hazard"] = 'kiken';

// /**DAYS OF THE WEEK**/
// eng_to_jap_set["Monday"] = 'getsuyobi';
// eng_to_jap_set["Tuesday"] = 'kayobi';
// eng_to_jap_set["Wednesday"] = 'suiyobi';
// eng_to_jap_set["Thursday"] = 'mokuyobi';
// eng_to_jap_set["Friday"] = 'kinyobi';
// eng_to_jap_set["Saturday"] = 'doyobi';
// eng_to_jap_set["Sunday"] = 'nichiyobi';

/**JLPT N5**/
eng_to_jap_set["Ah!"] = 'ah';
eng_to_jap_set["to meet"] = 'au';
eng_to_jap_set["blue"] = 'aoi';
eng_to_jap_set["red"] = 'akai';
eng_to_jap_set["light, bright"] = 'akarui';
eng_to_jap_set["autmn, fall"] = 'aki';
eng_to_jap_set["open"] = 'aku';
eng_to_jap_set["to open"] = 'akeru';
eng_to_jap_set["to give"] = 'ageru';
eng_to_jap_set["morning"] = 'asa';


//TODO: Comment if don't want to randomize
for (var eng in eng_to_jap_set) {
	randomizedKeyArray.push(eng);
}
shuffleArray(randomizedKeyArray);
//End of Randomize

for(var ndx=0; ndx<randomizedKeyArray.length; ndx++){
  	html += "<div class='container'>";
  	html += "<div class='row'>";

  	html += "<div class='col-sm-3'>";
  	html += "<b>"+(ndx+1)+".</b> "+randomizedKeyArray[ndx];
  	html += "</div>";

  	html +=  "<div class='col-sm-3'>";


  	html += "<input type='text' id='ans"+ndx+"' class='ans' onkeypress='handleKeyPress(event, "+ndx+")' />";

  	/**TODO: Uncomment for answers**/
  	// html += "<input type='text' id='ans"+ndx+"' class='ans' onkeypress='handleKeyPress(event, "+ndx+")' value='"+eng_to_jap_set[randomizedKeyArray[ndx]]+"'/>";


  	html += "</div>";

  	html +=  "<div class='col-sm-3'>";
  	html += "<button id='checkBtn"+ndx+"'class='ans_btn' onclick=\"checkItem("+ndx+",'"+randomizedKeyArray[ndx]+"')\" tabindex='-1'>Check</button>";
  	html += "</div>";

  	html +=  "<div class='col-sm-3'>";
  	html += "<img id='result"+ndx+"' class='resultImg'/>";
  	html += "</div>";


  	html += "</div>";
  	html += "</div>";
}

$('.container').html(html);

function checkItem(ansNo, key){
	var ans = $("#ans"+ansNo).val();
	var img = "img/";
	if(ans == eng_to_jap_set[key]){
		img += "check.png";
		$("#ans"+(ansNo+1)).focus();
		//Set image here so it will be counted by isAllAnswered()
		$("#result"+ansNo).attr('src',img);
		isAllAnswered();
	}else{
		img += "ex.png";
	}
	$("#result"+ansNo).attr('src',img);
}

function isAllAnswered(){
	var totalItems = $('.resultImg').length;
	var correctItems = 0;
	$('.resultImg').each(function(){
		if($(this).attr('src')=="img/check.png"){
			correctItems++;
		}
	});
	if(totalItems == correctItems){
		$.APP.pauseTimer();
		alert("Congratulations!!!");
	}
}

function checkAll(){
	$(".ans_btn").each(function () {
        $(this).trigger('click');
    });
}

function handleKeyPress(e, ansNo){
 	var key=e.keyCode || e.which; 
  	if (key==13){//Enter
     	$("#checkBtn"+ansNo).trigger('click');
 	}
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}