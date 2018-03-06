        var start = new Date().getTime();
            
            function getRandomColor() {
                var colorlist = ["red", "blue", "yellow", "purple"];
                return colorlist[Math.floor(Math.random() * 4)];
            }
            
            function makeShapeAppear() {
                
                if (Math.random() > 0.5) {
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0%";
                }
              
               document.getElementById("shape").style.backgroundColor = getRandomColor();
               document.getElementById("shape").style.display = "block";
               
               var shapesize = [Math.floor(Math.random() * 100) + 50];
               
               var ran_left = [Math.floor(Math.random() * 500)];
               var ran_right = [Math.floor(Math.random() * 100)];
               var ran_top = [Math.floor(Math.random() * 250)];
               
               document.getElementById("shape").style.width = shapesize;
               document.getElementById("shape").style.height = shapesize;
               
               document.getElementById("shape").style.left = ran_left;
               document.getElementById("shape").style.right = ran_right;
               document.getElementById("shape").style.top = ran_top;
               
               //bunch of stuff here changing the style of the shape
                
               start = new Date().getTime();
            }
            
            function appearAfterDelay(){
                setTimeout(makeShapeAppear, Math.random() * 1000);
            }
            
            appearAfterDelay();
            
            var shapeclick = 0;
            fasttime = 10000 / 1000;
            document.getElementById("shape").onclick = function(){
                
                shapeclick = shapeclick + 1;
                
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                
                var timeTaken = (end - start) / 1000;
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                document.getElementById("shapesclicked").innerHTML = shapeclick;
                
                if (timeTaken < fasttime) {
                  fasttime = timeTaken;
                }
                document.getElementById("fastesttime").innerHTML = fasttime + "s";
                appearAfterDelay();
            };
