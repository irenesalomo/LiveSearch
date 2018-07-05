var textBox = document.getElementById("keyword");
var result = document.getElementById("result");
var ajax = null;
var loadedUsers = 0;

textBox.onkeyup = function(){
    var val = this.value;
    val = val.replace(/^\s+|\s+$/, ""); //This has better browser support than String.prototype.trim()

    if (val != ""){
        searchForData(val);
    }
    else{
        clearResult();
    }
    // searchForData(val);
}

function searchForData(value, isLoadMoreMode){
    // If an Ajax request is previously sent, it will be aborted because it isn't useful anymore.
    if(ajax && typeof ajax.abort === "function"){
        ajax.abort();
    }

    if(isLoadMoreMode !== true){
        clearResult();
    }

    ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        
    }


}
