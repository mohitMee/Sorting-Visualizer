async function bubble() {
    console.log("in bubble sort()");
    const ele = document.querySelectorAll(".bar");
    for(let i=0;i<ele.length-1;i++){
        console.log('in ith loop');
        for(let j=0;j<ele.length-1-i;j++){
            console.log("In jth loop");
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j],ele[j+1]);
            }
            ele[j].style.background='cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background='green';
}

//bubble();

const bubSortBtn = document.querySelector(".bubbleSort");
bubSortBtn.addEventListener('click',async function(){
    disableNewArrayBtn();
    disableSizeSlider();
    disableSortingBtn();
    await bubble();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});