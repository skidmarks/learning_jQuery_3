// jQuery.noConflict();

// jQuery(($) => {
//     // 코드 블럭 내부에서 $ 기호를 자유롭게 쓸 수 있다.
// });


$(() => {
    // $('body').addClass('large');

    $('#switcher-default').addClass('selected').on('click', () => {
        $('body').removeClass('narrow').removeClass('large');
    });

    $('#switcher-narrow').on('click', () => {
        $('body').addClass('narrow').removeClass('large');
    });

    $('#switcher-large').on('click', () => {
        $('body').addClass('large');
    });

    $('#switcher button').on('click', function() {
        $('#switcher button').removeClass('selected');
        $(this).addClass('selected');
    });


    /*
        화살표 함수와 this 객체의 문제!!

        화살표 함수로 선언한 함수에는 this가 없다.

        function으로 선언한 함수가 메소드로 호출되냐, 함수 자체로 호출되냐에 따라 동적으로 this가 바인딩되는 반면,
        화살표 함수는 선언될 시점에서의 "상위 스코프"가 this로 바인딩된다.

        화살표 함수를 써서는 안되는 경우:
        1. 메소드

        const cat = {
            name: 'meow';
            callName: () => console.log(this.name);
        }

        cat.callName(); // undefined


        2. 생성자 함수

        const Foo = () => {};
        const foo = new Foo() // TypeError: Foo is not a constructor


        3. addEventListener()의 콜백함수

        const button = document.getElementById('myButton');

        button.addEventListener('click', () => {
            console.log(this); // window
            this.innerHTML = 'clicked';
        });

        button.addEventListener('click', function() {
            console.log(this); // button Element
            this.innerHTML = 'clicked';
        });


        이벤트 핸들러 함수가  this 키워드를 이용해 맥락 정보를 참조할 때는 $(() => {}) 함수를 쓸 수 없다.
        이는 이들 함수가 사전식 맥락(lexical context)에서 작동하기 때문이며, $(() => {}) 함수에서는 
        제이쿼리가 이벤트에 의해 촉발된 요소를 맥락 정보로 설정할 수 없다.
    */


    
});
