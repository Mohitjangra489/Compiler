let language = document.getElementById("language");
let compile = document.getElementById("compile");
let outputWindow = document.getElementById("outputWindow");

let languageCode = 0;
let code;
let request;


//

var editor = ace.edit("editor");
        console.log(editor.getValue());
        editor.setTheme("ace/theme/dracula");
        editor.session.setMode("ace/mode/c_cpp");
let url = "https://codequotient.com/api/executeCode";
let requestObj = {
    code: "",
    langId: ""
}
compile.addEventListener('click',function(){
    languageCode = language.value;
    code = editor.getValue();
    if(code !== ""){
        requestObj.code = code;
        requestObj.langId = languageCode;
        request = new XMLHttpRequest();
        request.open("POST",url+"/"+JSON.stringify(requestObj));
        request.send();
        request.addEventListener('load',function(response){
            console.log(response);
        });
    }
});
