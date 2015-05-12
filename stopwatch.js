/**
 * Created by emddutton on 4/8/2015.
 */
var interval = null;
var seconds = 0;
var minutes = 0;
var hours = 0;
var number;
var position;

$(document).ready(function(){

    $(".digits > div").addClass("num-0");

    $("#start").on('click', function(){

        function stopWatch(){
            seconds++;
                if(seconds > 59){
                    seconds = 0;
                    minutes++;
                }
                if(minutes > 59) {
                    minutes = 0;
                    hours++;
                }

            function padNum(n) {
                return (n < 10) ? ("0" + n) : n;
            }
            var sec = padNum(seconds);
            var min = padNum(minutes);
            var hour = padNum(hours);

            var time = [hour, min, sec];
            console.log(time);
            var string = time.join('');
            console.log(string);

            for(var i= 0;i < string.length;i++){
                number = string[i];
                position = i + 1;
                console.log(number);
                console.log(position);
                var currentNumber = ("num-" + number);
                var currentDigit = ("#digit-" + position);
                $(currentDigit).removeClass().addClass(currentNumber);
            }
        }
        interval = setInterval(stopWatch, 1000);
        });

    $("#stop").on('click', function(){
        clearInterval(interval);
    });

    $("#reset").on('click', function(){
        clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        $(".digits > div").removeClass().addClass("num-0");
    })
});