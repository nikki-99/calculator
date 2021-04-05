


function getPrevious(){
    return document.querySelector('.prev').innerText;
}

function printResult(num){
    document.querySelector('.prev').innerText = num;
}

function getOutput(){
    return document.querySelector('.now').innerText;
}

function printOutput(num){
    if(num==""){
        document.querySelector('.now').innerText = num;

    }
    else{
    document.querySelector('.now').innerText = getFormatNumber(num);
    }
}


function getFormatNumber(num){
    if(num == '-'){
        return '';
    }
    var res = Number(num);
    var value = res.toLocaleString('en');
    return value;

}


function notFormattedNumber(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.querySelectorAll('.operators');

for(let i=0; i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(operator[i].id === 'clear'){
            printOutput('');
            printResult('');
        }
        if(operator[i].id === 'alternate' ){
            var output = notFormattedNumber(getOutput()).toString();
            if(output){
                output = output.substring(0, output.length -1);
                printOutput(output);

            }

        }
        else{
            var output = getOutput();
            var previous = getPrevious();
            // alert(output);
 
            if(output!= ""){
                output = notFormattedNumber(output);
                // alert(output);
                previous = previous + output;
 
                if(operator[i].id === 'equal'){
                    var result = eval(previous);
                    printOutput(result);
                    printResult('');

                }
                else{
                    previous = previous + operator[i].id;
                    printResult(previous);
                    printOutput('');
                }


                
            }
        }
       

    });

}

var number = document.querySelectorAll('.numbers');

for(let i=0; i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output = notFormattedNumber(getOutput());
        if(output!=NaN){
            output = output + number[i].id;
            printOutput(output);
        }


    });

}

