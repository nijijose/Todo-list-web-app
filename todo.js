function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output = "";
            for(var i=0;i<response.length;i++){
                if(response[i].completed==false){
                    output += '<li class="list-group-item"> <input type="checkbox" class="form-check-input checkbox" onchange="validate()">' +'&nbsp'+  response[i].title + "<br>" ;  
                }
                else{
                output += '<li class="list-group-item list-group-item-info"> <input type="checkbox" class="form-check-input" checked disabled>'+ '&nbsp'  + response[i].title + "<br>" ;
                }
            }
            document.getElementById("into").innerHTML = output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

function validate(){
   var get = new Promise(function(resolve,reject){
        var list = document.getElementsByClassName("checkbox");
        var count =0;
        for (var i=0; i<list.length; i++){
            if (list[i].type == "checkbox" && list[i].checked == true){
                count++;
            }
        }
        if(count%5 == 0){
            resolve(`Congrats. ${count} Tasks have been Successfully Completed!!`);
        }
        else{
            reject("5 Tasks are not completed");
        }
    })
    get
    .then(function(a){
        alert(a);
    })
    .catch(function(b){
        console.log(b);
    });
}



