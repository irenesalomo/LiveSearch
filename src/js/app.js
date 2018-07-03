var textBox = document.getElementById("keyword");
var result = document.getElementById("result");
var ajax = null;
var loadedUsers = 0;

textBox.onkeyup = function(){
    var val = this.value;
    val = val.replace(/^\s|\s+$/, "")
}
