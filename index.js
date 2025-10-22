// 1. Reverse a String
function reverseString() {
  var str = document.getElementById("txt").value;

  var strrev = "";
  for (var i = str.length -1; i>=0; i--){
    strrev += str.charAt(i);
  }
  document.getElementById("Results").innerHTML = "The reversed string is: "+strrev;

 
}

// 2. Check Palindrome
function checkPalindrome() {
  var input = document.getElementById("pal").value.trim();

  if(input === ""){
    document.getElementById("palindrome").innerHTML = "Enter word or number"
    return;
  }
  var normalized = input.toLowerCase();

  var reversed = "";
  for(var i = normalized.length-1; i >= 0; i--){
    reversed += normalized.charAt(i);
  }
  if(normalized === reversed){
    document.getElementById("palindrome").innerHTML = input+ " is a palindrome";
  } else{
    document.getElementById("palindrome").innerHTML = input +" is not a palindrome";
  }

}

// 3. Tip Calculator

const totalSpan = document.getElementById("total");
function calculateTotal() {
  const billValue = document.getElementById("subtotal").value;
  const tipValue = document.getElementById("tip").value;
  const totalValue = billValue * (1 + tipValue/100);
  totalSpan.innerText = totalValue.toFixed(2);
  


  }

  


