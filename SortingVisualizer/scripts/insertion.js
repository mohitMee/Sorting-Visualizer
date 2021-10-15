async function insertionSort() {
    console.log("in insertion sort()");

    const ele = document.querySelectorAll(".bar");

    ele[0].style.background = 'green';

    for(let i=1;i<ele.length;i++){
        
        let j=i-1;
        let key = ele[i].style.height;
        ele[i].style.background='blue';
        await waitforme(delay);

        while(j>=0 && parseInt(ele[j].style.height)>parseInt(key)){
            ele[j].style.background = 'blue';
            ele[j+1].style.height = ele[j].style.height;
            j--;
            await waitforme(delay);
            for(let k=i;k>=0;k--){
                ele[k].style.background='green';
                //await waitforme(delay);
            }

        }
        
        ele[j+1].style.height=key;
        ele[i].style.background='green';
    }


}










const insertionSortBtn = document.querySelector(".insertionSort");

insertionSortBtn.addEventListener('click',async function(){
    disableNewArrayBtn();
    disableSizeSlider();
    disableSortingBtn();
    await insertionSort();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
});