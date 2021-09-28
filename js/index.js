
window.onload = function () {
    // 轮播图背景颜色
    var bg = document.getElementById("bg");
    var left = document.getElementById("left-control");
    var  right = document.getElementById("right-control");
    var img = document.getElementsByClassName("img")[0];
    var imgArr = ["radial-gradient(#1f311b,#5fc054)", "radial-gradient(#060A14,#293842)",
                  "radial-gradient(#FFF802,#C4BF02)", "radial-gradient(#686C7C,#B5B2BF)",
                  "radial-gradient(#54392E,#7C4E37)", "radial-gradient(#8DB9CC,#E9AEB0)",
                  "radial-gradient(#414382,#4F5473)", "radial-gradient(#008B32,#025200)",
                  "radial-gradient(#171528,#525774)", "radial-gradient(#2C2326,#805229)"];
    var index = 0;
    left.onclick = function(){
        index--;
        if(index < 0){
			index = imgArr.length - 1;
		}
        bg.style.backgroundImage = imgArr[index];
    }
    right.onclick = function(){
        index++;
        if(index > imgArr.length - 1){
            index = 0;
        }
        bg.style.backgroundImage = imgArr[index];
    }

}







