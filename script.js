let btn = document.getElementById('btn')
let Output = document.getElementById('output');


let number = [Math.floor(Math.random() * 100)]
console.log(number);

Try = 0

    
    function rejouer(){
        Output.innerHTML= ""
        Try = 0;
        document.getElementById('Try').textContent = "Essai:" + "" + Try;



    }
    
    function game (){
        
        let input = document.getElementById('userInput').value;
        input = Number(input)
        
        console.log(input);
        if(input == number){
            Try++
            document.getElementById('Try').textContent = "Essai:" + "" + Try;

            Output.innerHTML= "GG Vous avez trouvé le nombre mystère"
            
        } else if(input< number){
            Try++
            console.log(Try);
            document.getElementById('Try').textContent = "Essai:" + "" + Try;
            Output.innerHTML= "Plus Grand"
        }
        if (input > number){
        Try++
        document.getElementById('Try').textContent = "Essai:" + "" + Try;

        Output.innerHTML= "Plus Petit"
        
    } else if (input < 0 || input >100){
        Output.innerHTML= "Error Entré un nombre valide"
    }else if(isNaN(input)){
        Output.innerHTML= "Error Entré un nombre valide"
    }else if (input == ""){
        Output.innerHTML= "Error Entré un nombre valide"
        
    }
}