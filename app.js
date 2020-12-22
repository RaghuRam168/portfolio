function changeImg(img_name,link)
{
    document.getElementById(img_name).src=link;
}
function replaceImg(img_name,link)
{
    document.getElementById(img_name).src=link;
    document.getElementById(img_name).classList.remove("skill_bar");

}
function hoin(x,wid)
{
    document.getElementById(x).setInterval(() => {
        document.getElementById(x).classList.add("skill_bar");
    },100);  
   
}

function hoout(x,wid)
{
    document.getElementById(x).classList.remove("skill_bar");
}