// jQuery.noConflict();

// jQuery(($) => {
//     // 코드 블럭 내부에서 $ 기호를 자유롭게 쓸 수 있다.
// });


$(() => {
    $('#switcher').click((e) => {
        $(e.currentTarget).children('button').toggleClass('hidden');
    });    
});

$(() => {


    $('#switcher-default').addClass('selected');

    $('#switcher button').click((e) => {
        const bodyClass = e.target.id.split('-')[1];

        $('body').removeClass().addClass(bodyClass);

        $(e.target).addClass('selected').siblings('button').removeClass('selected');

        e.stopPropagation();
    });

});
