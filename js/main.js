var nameInput =document.getElementById('Name');
var urlInput =document.getElementById('url');
var addbtn =document.getElementById('submitBtn');
var tablebody = document.getElementById('tableContent')

var bookmarks=[];

if(localStorage.getItem("bookmarks")==null){
    bookmarks=[];

}else{
    bookmarks =JSON.parse(localStorage.getItem("bookmarks"));
    displaybook();
}

function addproduct(){
    var product ={
        name:nameInput.value,
        url:urlInput.value,
    }
    
    bookmarks.push(product)
    console.log(bookmarks);
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
    displaybook()
    cleardata()
}

 var nameregax =  /^[A-Za-z_]/
function namevalid(){
    if(nameregax.test(nameInput.vaue)){
        return true;
    }else{
        return false;
    }

}

var urlregax =  /^(https:\/\/)?(www\.)?[A-Za-z0-9-\.]{1,}\.[a-z]{3}$/
function urlvalid(){
    if(urlregax.test(urlInput.value)){
        return true;
    }else{
        return false;
    }

}

nameInput.onkeyup = function(){
    if( namevalid&&urlvalid){
        addbtn.removeAttribute("disabled")
    }else{
        addbtn.disabled ="true;"
    }
}
urlInput.onkeyup = function(){
    if( namevalid&&urlvalid){
        addbtn.removeAttribute("disabled")
    }else{
        addbtn.disabled ="true;"
    }
}
function displaybook(){
    var book =``;
    for(var i=0;i<bookmarks.length;i++){
        book+=`
        <tr>
       
        <td>${bookmarks[i].name}</td>
        <td><a href="${bookmarks[i].url}"><button  class="bg-info" >visit</button></a></td>
         <td> <button onclick="deletebook(${i})" class="bg-danger">delete</button></td>
        </tr>
        `
    }
    tablebody.innerHTML=book;
}
function cleardata(){
    nameInput.value="";
    urlInput.value="";
}
function deletebook(index){
    bookmarks.splice(index,1)
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
    displaybook();
}


