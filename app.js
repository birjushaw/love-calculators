// function checklovePercentage(){
//     let randomNum = Math.random() * 100
//     randomNum = Math.floor(randomNum);
//     document.getElementById("lovevalue").value = randomNum + "%"
// }

function checklovePercentage(){
    let yname= document.querySelector("#yname").value;
    let lname= document.querySelector("#lname").value;
    
    if(yname == ""){
        alert("empty value not allowed")
    }else if(yname <=2){
        alert("Please enter min 3 character")
    }else if(!isNaN(yname)){
        alert("Number not allow")
    }

    if(lname == ""){
        alert("empty value not allowed")
    }else if(lname <=2){
        alert("Please enter min 3 character")
    }else if(!isNaN(lname)){
        alert("Number not allow")
    }
    else{
        let randomNum = Math.random() * 100;
        randomNum = Math.floor(randomNum)
        document.getElementById("lovevalue").value = randomNum + "%"
    }
    }




  