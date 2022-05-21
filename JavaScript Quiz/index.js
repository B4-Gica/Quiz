/**
 * hides intro and show question 1
 */
 function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
  }
  
  /**
   * hides question 1 shows question2
   * and the if condition help for validation
   */
  function question2() {
    if(document.querySelector(`input[name="quest1"]:checked`) == null){
      alert("You have to select a option");
      return false;
      }else
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "inline-block";
  }
  
   /**
   * hides question 2 shows question3
   * and the if condition help for validation
   */
  
  function question3() {
    if(document.querySelector(`input[name="quest2"]:checked`) == null){
      alert("You have to select a option");
      return false;
      }else
        document.getElementById("question2").style.display = "none";
       document.getElementById("question3").style.display = "inline-block";
  }
   /**
   * hides question 3 shows question4
   * and the if condition help for validation
   */

  function question4() {
    if(document.querySelector(`input[name="quest3"]:checked`) == null){
      alert("You have to select a option");
      return false;
      }else
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "inline-block";
  }
   /**
   * hides question 4 shows question5
   * and the if condition help for validation
   */
  function question5() {
    if(document.querySelector(`input[name="quest4"]:checked`) == null){
      alert("You have to select a option");
      return false;
      }else
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "inline-block";
  }
  
  /**
   * hides question 5 shows results
   * and the if condition help for validation
   */
  function results() {
    calculateResults()
    if(document.querySelector(`input[name="quest5"]:checked`) == null){
      alert("You have to select a option");
      return false;
      }else
        document.getElementById("question5").style.display = "none";
        document.getElementById("results").style.display = "inline-block";
  }
  
  
  /**
   * calculates and displays the results
   */
  function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="quest1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }
    
    const radios2 = document.querySelectorAll('input[name="quest2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }

    const radios3 = document.querySelectorAll('input[name="quest3"]');
    let q3Value;
    for (const rb of radios3) {
        if (rb.checked) {
            q3Value = rb.value;
            break;
        }
    }

    const radios4 = document.querySelectorAll('input[name="quest4"]');
    let q4Value;
    for (const rb of radios4) {
        if (rb.checked) {
            q4Value = rb.value;
            break;
        }
    }
  
    const radios5 = document.querySelectorAll('input[name="quest5"]');
    let q5Value;
    for (const rb of radios5) {
        if (rb.checked) {
            q5Value = rb.value;
            break;
        }
    }
    let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value);
    let result = total / 5;

    // This is de rezult but does not apply in all situations need improvment
    if (result <= 1.8) {
      msg = "You like a more active night life so I recommend to visit Bucharest";
    }
    else if (result >= 2 && result <= 2.4) {
      msg = "You like adventure and wild life, we recommend to visit Bucovina";
    }
    else if (result > 2.4) {
      msg = "You like a more relaxed style, I recommend to visit Iasi the city of cultures";
    }

    /* If steatment without validation
    if (result != 0 && result <= 1.8) {
      msg = "You answered mostly A,";
    }
    else if (result >= 2 && result <= 2.4) {
      msg = "You answered mostly B, ";
    }
    else if (result > 2.4) {
      msg = "You answered mostly C, ";
    }
    else{
      msg ="you didn't choose any answers! Please click to refres the quiz again and click on the circle to give an answer";
    }
  */
    document.getElementById("result").innerHTML = msg
  
  }
  