// jQuery.noConflict();

// jQuery(($) => {
//     // 코드 블럭 내부에서 $ 기호를 자유롭게 쓸 수 있다.
// });


$(() => {
    const toggleHover = (e) => {
        $(e.target).toggleClass('hover');
    };

    $('#switcher').hover(toggleHover, toggleHover);
});

$(() => {
    $('#switcher-default').addClass('selected');

    $('#switcher').click((e) => {
        if($(e.target).is('button')) {
            const bodyClass = e.target.id.split('-')[1];

            $('body').removeClass().addClass(bodyClass);
            $(e.target).addClass('selected').siblings('button').removeClass('selected');
        
        } else {
            $(e.currentTarget).children('button').toggleClass('hidden');
        }
    });
});
