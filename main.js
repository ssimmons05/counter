let sum = document.getElementById("display").innerHTML;

function lowerCount() {
    sum--;
    document.getElementById("display").innerHTML = sum;
    if (sum < 0) {
        document.getElementById("display").style.color = "red";
    } else if (sum === 0) {
        document.getElementById("display").style.color = "white";
    }
    return sum;
  }


  function addCount() {
    sum++;
    document.getElementById("display").innerHTML = sum;
    if (sum > 0) {
        document.getElementById("display").style.color = "green";
    } else if (sum === 0) {
        document.getElementById("display").style.color = "white";   
    }
    return sum;
  }


  function reset() {
      sum = document.getElementById("display").innerHTML = 0;
      document.getElementById("display").style.color = "white";
      return sum;
  }
