function checkWindowWidthForReturn() {
            const width = window.innerWidth;
            const MINIMUM_WIDTH = 1250; 

        if (width >= MINIMUM_WIDTH) {
               
            window.location.href = "../../../index.html"; 
        }
}

 window.onload = checkWindowWidthForReturn;
 window.addEventListener("resize", checkWindowWidthForReturn);
