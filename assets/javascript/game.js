

var ptFlavors = ["strawberry", "Smores", "Peanut Butter", "Cherry"];

var wins = 0;
var losses = 0;
var counter = 0;
var total = 0;


var myNumber = Math.floor(Math.random() * 101) + 19;
$(".myNumber").html(myNumber);

var oneNumber = Math.floor(Math.random() * 12) + 1;
var twoNumber = Math.floor(Math.random() * 12) + 1;
var threeNumber = Math.floor(Math.random() * 12) + 1;
var fourNumber = Math.floor(Math.random() * 12) + 1;


$(document).ready(function() {

            $("#strawberry").on("click", function() {
                total = total + oneNumber;
                $(".yourTotal").html(total);
                winning();
                

            });

            $("#smores").on("click", function() {
                total = total + twoNumber;
                $(".yourTotal").html(total);
                winning();
                

            });

            $("#peanutbutter").on("click", function() {
                total = total + threeNumber;
                $(".yourTotal").html(total);
                winning();
                

            });

            $("#cherry").on("click", function() {
                total = total + fourNumber;
                $(".yourTotal").html(total);
                winning();

            });

            function winning() {
            	if (total == myNumber){
            		wins++;
            		$("#wins").html(wins);
            		alert("You win!");


            	} else if(total > myNumber){
            		losses++;
            		$("#losses").html(losses);
            		alert("You Lost!");
            	}
            }

            function reset () {}
            randomNumber = Math.floor(Math.random() * 101) + 19;
            

        });

/*function userSum (crystalNumber) {
      totalPoints += crystalNumber;

      $("#pointDisplay").html(totalPoints);

      if (totalPoints>randomNumber){

          alert(":(");
          losses++;
          $('#losses').html(losses);

          reset();

      } else if (totalPoints == randomNumber)
      {

          alert("You Win!!");
          wins++;
          $('#wins').html(wins);

          reset();
      }


  } */

location.reload
