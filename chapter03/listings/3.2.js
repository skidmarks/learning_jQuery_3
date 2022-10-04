// jQuery.noConflict();

// jQuery(($) => {
//     // 코드 블럭 내부에서 $ 기호를 자유롭게 쓸 수 있다.
// });


$(() => {


    // 이벤트 구성의 순서가 중요하다.
    /* .removeClass()의 호출은 .addClass() 실행보다 앞서야 하며, 우리는 제이쿼리가 이벤트 핸들러의 등록 순서에 따라 실행된다는 점에 착안해 코드를 수정하면 된다. */


    $('#switcher-default').addClass('selected');

    $('#switcher button').on('click', function() {
        const bodyClass = this.id.split('-')[1];
        $('body').removeClass().addClass(bodyClass);
        $('#switcher button').removeClass('selected');
        $(this).addClass('selected');
    });


    $('#switcher h3').click(function() {
        $(this).siblings('button').toggleClass('hidden');
    });

    $('#switcher h3').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
});
