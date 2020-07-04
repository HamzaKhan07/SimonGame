function ready()
{
    var arr_e=[];
    var arr_u=[];
    var level=1;
    var win=-1;
    var boxes=document.querySelectorAll(".box");
    var boxRed=document.querySelector(".red");
    var boxYellow=document.querySelector(".yellow");
    var boxGreen=document.querySelector(".green");
    var boxBlue=document.querySelector(".blue");
    var Score=document.querySelector(".score");
    document.querySelector(".start").addEventListener("click",startGame);

    for(var i=0; i<boxes.length; i++)
    {
        var box=boxes[i];
        box.addEventListener("mousedown",down);
        box.addEventListener("mouseup",up);
        box.addEventListener("click",clicked); 
    }
    function down(event)
    {
        curr_box=event.target;
        console.log(curr_box.style.background);
        curr_box.style.background="gray";
    }
    function up(event)
    {
        curr_box=event.target;
        if(curr_box.classList.contains("red"))
        {
            curr_box.style.background="red";
        }
        else if(curr_box.classList.contains("green"))
        {
            curr_box.style.background="green";
        }
        else if(curr_box.classList.contains("yellow"))
        {
            curr_box.style.background="yellow";
        }
        else if(curr_box.classList.contains("blue"))
        {
            curr_box.style.background="blue";
        }
    }
    function startGame()
    {
        intro_con=document.querySelector(".intro");
        main_con=document.querySelector(".container");

        intro_con.classList.add("fadeOut");
        main_con.classList.add("fadeIn");

        setTimeout(function(){
            play();
        },2000);
    }
    function play()
    {
        var select=getColor(1,4);
        
        if(select==1)
        {
            arr_e.push("red");
            boxRed.style.animation="fade 2s ease";
            boxRed.addEventListener('animationend',function(){
                this.style.animation='';
            });
        } 
        else if(select==2)
        {
            arr_e.push("yellow");
            boxYellow.style.animation="fade 2s ease";
            boxYellow.addEventListener('animationend',function(){
                this.style.animation='';
            });
        }
        else if(select==3)
        {
            arr_e.push("green");
            boxGreen.style.animation="fade 2s ease";
            boxGreen.addEventListener('animationend',function(){
                this.style.animation='';
            });
        }
        else if(select==4)
        {
            arr_e.push("blue");
            boxBlue.style.animation="fade 2s ease";
            boxBlue.addEventListener('animationend',function(){
                this.style.animation='';
            });
        }
        console.log("array e="+arr_e);
    }
    function getColor(min,max)
    {
        var num=Math.floor(Math.random()*(max-min+1)+min);
        return num;
    }
    function clicked(event)
    {
        var item=event.target;
        if(item.classList.contains("red"))
        {
            arr_u.push("red");
            console.log(arr_u);
            checkwin();
        }
        else if(item.classList.contains("yellow"))
        {
            arr_u.push("yellow");
            console.log(arr_u);
            checkwin();
        }
        else if(item.classList.contains("green"))
        {
            arr_u.push("green");
            console.log(arr_u);
            checkwin();
        }
        else if(item.classList.contains("blue"))
        {
            arr_u.push("blue");
            console.log(arr_u);
            checkwin();
        }
    }
    //function to check win
    function checkwin()
    {
        if(arr_u.length==level)
        {
            for(var m=0; m<level; m++)
            {
                if(arr_u[m]==arr_e[m])
                {
                    win=1;
                }
                else
                {
                    win=0;
                }
            }
            if(win==1)
            {
                console.log("play again");
                //empty arr_u
                while(arr_u.length!=0)
                {
                    arr_u.pop();
                }
                win=-1;
                level++;
                Score.innerText=level;
                play();
            }
            else
            {
                while(arr_e.length!=0)
                {
                    arr_e.pop();
                }
                while(arr_u.length!=0)
                {
                    arr_u.pop();
                }
                level=1;
                win=-1;
                Score.innerText=level;
                alert("You missed the sequence");
                setTimeout(function(){
                    play();
                },2000);
            }
        }
        
        
    }
}
ready();