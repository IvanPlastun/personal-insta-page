$(document).ready(function() {


    var sliderIndex = 0;

    function showPhotos() {
        var i;
        var slides = $("#instafeed a");
        //Цикл скрывающий все изображения
        for(i = 0; i < slides.length; i++) {
            $(slides[i]).hide();
        }
        //Увеличение счетчика, который отображает активное изображение
        sliderIndex++;
        //Сброс счетчика, если он превышает количество изображений выборки
        if(sliderIndex > slides.length) 
            sliderIndex = 1;
        //Отображение активного изображения
        $(slides[sliderIndex - 1]).show();
        setTimeout(showPhotos, 500);
    }
    showPhotos();
});