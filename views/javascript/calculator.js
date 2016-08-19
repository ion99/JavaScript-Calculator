$(document).ready(function(){
  let testNumLength = function(number) {
    if (number.length > 9) {
      return number.substr(0, 9);
    }
    return number;  
  };
  
  let result;
  let number = "";
  let operator = "";
  let totalResult = [];
  let options = ["+", "−", "×", "÷", "%"];
  let total = $("#total");
  total.text("0");
  $(".numbers > a").not("#clear,#clearall,#button1,#equals").click(function(){

    number += $(this).text();
    console.log("111111111", number);
    total.text(testNumLength(number)); 
    
  });

  $(".numbers > span").click(function(){
    operator = $(this).text();

    if (totalResult.length === 0){
      if (number !== "") totalResult.push(number);
      total.text(testNumLength(number));
      totalResult.push(operator);
      number = "";
    } else if (totalResult.length >= 2){
       if (number !== "") { totalResult.push(number);}
       if (total.text(testNumLength(number)) !== ""){ total.text(testNumLength(number));
       }
       if (totalResult[totalResult.length-1] === [...options]){ total.text(totalResult[totalResult.length-2]);
    } else {
       total.text(totalResult[totalResult.length-1]); 
    }
       totalResult.push(operator);
       number = "";
    } else {
      if (totalResult.length === 1) { total.text(totalResult[0]); 
      } else { total.text(testNumLength(result + ""));}
      //total.text(testNumLength(result + ""));
      console.log("ecran", number);
      console.log("result11111", totalResult);
      totalResult.push(operator);
      console.log("result222222", totalResult);
      number = "";
      }
  });
  $("#clearall").click(function(){
    number = "";
    operator = "";
    console.log("c,ac, num",number);
    result = 0;
    console.log("result ac,c", result);
    totalResult = [];
    console.log("c,ac, tot", totalResult);
    total.text("0");
  });
  $("#clear").click(function(){
    console.log("aici", totalResult);
    totalResult.pop();
    console.log("aiciaaaaaaa", totalResult);
    if (totalResult.length === 0){
      total.text("0");
      result = 0;
      number = "";
    }
    //total.text("0");
    total.text(totalResult[totalResult.length-1] || totalResult[0]);
    number = "";
    console.log("heiheihei", totalResult);
    if (options.indexOf(totalResult[totalResult.length-1]) === -1 && totalResult.length >= 2){
      console.log("heiheihei", totalResult);
        total.text(totalResult[totalResult.length-1]);
        number = "";
    };
    if (options.indexOf(totalResult[totalResult.length-1]) !== -1 && totalResult.length >= 2){
      console.log("heiheihei", totalResult);
        total.text(totalResult[totalResult.length-2]);
        number = "";
    } else {
      console.log("heiheihei", totalResult);
      total.text(totalResult[totalResult.length-1]);
      number = "";
    }
    
    
  })
  
  $(".percent").click(function(){
    if (number !== "") totalResult.push(number);
    console.log(totalResult);
    let percent = totalResult.map(function(val){
      if (parseFloat(val)){
        return parseFloat(val);
      } else if (val === "+"){
        return "+";
      } else if (val === "−"){
        return "-";
      } else if (val === "×"){
        return "*";
      } else if (val === "÷"){
        return "/";
      }
    })
    result = eval(percent.join(""))/100;
    total.text(testNumLength(result + ""));
    totalResult = [];
    totalResult.push(result);
  })
  $("#equals").click(function(){
    total.text(testNumLength(result + ""));
    if (number !== "") totalResult.push(number);
    console.log(totalResult);
    result = eval(totalResult.map(function(val){
      if (parseFloat(val)){
        return parseFloat(val);
      } else if (val === "+"){
        return "+";
      } else if (val === "−"){
        return "-";
      } else if (val === "×"){
        return "*";
      } else if (val === "÷"){
        return "/";
      } 
    }).join(""));
    // result = eval(answer.join(""));
    // console.log("answer", answer);
    // console.log("answer-eval", eval(answer.join("")));
    console.log("result", result)
    total.text(testNumLength(result + ""));
    totalResult = [];
    totalResult.push(result);

    })
});