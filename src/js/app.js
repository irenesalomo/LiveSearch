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
    // If an Ajax request is previously sent, it will be aborted because it isn't useful anymore. This might not be necessary since Calling .open() method for an already active request (one for which open() has already been called) is the equivalent of calling abort().
    
    // if(ajax && typeof ajax.abort === "function"){
    //     ajax.abort();
    // }

    if(isLoadMoreMode !== true){
        clearResult();
    }

    ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            try{
                var json = JSON.parse(this.responseText)
            } catch (e){
                noUsers();
                return;
            }

            if(json.length ===0){
                if(isLoadMoreMode){
                    alert("No more to load");
                } else{
                    noUsers();
                }
            }
            else{
                showUsers(json);
            }
        }
    }
    ajax.open('GET', 'search.php?username' + value + '&startFrom=' + loadedUsers , true);
    ajax.send()
}

function showUsers(data){
    
}
