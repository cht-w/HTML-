window.onload = function () {
    let adsBox = document.getElementById("ads_wrapper");
    let close = document.getElementById("close_btn");

    load();

    function load () {
        close.addEventListener("click" , show);
    }

    // 顶部广告栏目点击隐藏
    function show() {
        adsBox.style.display = "none";
    }








}