console.log($());

console.log("TESTER");

console.log($);


$(() => {
    $('#selected-plays > li')
        .addClass('horizontal');
    $('#selected-plays li:not(.horizontal)')
        .addClass('sub-level');
});

$(() => {
    $('#selected-plays > li').addClass('big-letter');

    $('#selected-plays li.horizontal').addClass('big-letter');

    $('#selected-plays li:not(.sub-level)').addClass('big-letter'); /* 이 선택자는 의미를 단번에 이해하기 어렵고 비효율적이며 DOM 구조도 제대로 반영하지 못하고 있다 */
});

$(() => {
    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href$=".pdf"]').addClass('pdflink');
    $('a[href^="http"][href*="henry"]').addClass('henrylink');
});

/* 커스텀 선택자 */
// 테이블 행에 스타일 적용하기
$(() => {
    // 0 기반이라 실제로 odd가 짝수로 작동한다.
    // $('tr:even').addClass('alt');
    
    // css 선택자  nth-child의 경우 1기반 이라  홀수를 표현할 경우 odd가 사용된다.
    $('tr:nth-child(odd)').addClass('alt');
});


// 텍스트 내용에 따라 요소 선택하기
// 선택자는 대소 문자를 구별한다. contain()함수는 성능이 엄청나게 좋지 않다!!
$(() => {
    // $('td:contains(Henry)').addClass('highlight').css('color', 'crimson');
});

$(() => {
    
    $('a').filter((i, a) => {a.hostname && a.hostname !== location.hostname; console.log(i); console.log(a.hostname); console.log(a); console.log("location.hostname = " + location.hostname);}).addClass('external');
    
    /* 
        <a> 요소 집합을 다음과 같은 두 가지 그룹으로 정렬한다.

        1. href 속성 및 도메인 이름(a.hostname)을 지녀야 한다. 이 과정에서 mailto 링크와 같은 것을 배제할 수 있다
        2. 도메인 이름(a.hostname)이 가리키는 페이지는 현재 페이지(location.hostname)가 아니어야 한다.

        .filter() 메소드는 단 한번의 함수 호출로 선택 조건과 일치하는 요소를 반복적으로 가져오며, 반환된 결과를 테스트한다.
        이때 결괏값이 false인 경우 해당 요소는 선택 집합에서 제외되고, 결괏값이 true인 경우 해당 요소는 선택 집합에 그대로 있게 된다.
    */
});

$(() => {
    // $('td:contains(Henry)').nextAll().addBack().addClass('highlight');

    /*
        next(), nextAll(), prev(), prevAll(), siblings(), addBack()    

    */

    $('td:contains(Henry)').parent().children().addClass('highlight');

    /*
        형재 요소를 순회하는 대신에 부모 요소(.parent())로 올라가서 다시 그 자식들(.children()) 전체를 선택하는 방식
    */
});


/*제이쿼리 객체의 반복 생성 */

$(() => {
    const eachText = [];

    console.log($('td'));

    $('td').each((i, td) => {
        if(td.textContent.startsWith('H')) {
            eachText.push(td.textContent);
        }
    });

    console.log('each', eachText);
});

/* each() 함수를 이용해 상수로 정의한 eachText 배열에 'H'가 포함됨 문자열을 반복적으로 추가한다. 이런 방식으로 우리가 원하는 결과를 얻을 수는 있지만
   비교적 간단한 작업에 이와 같은 콜백 함수를 쓰는 것은 지나친 면이 있다
*/

$(() => {
    const forText = [];
    const tds = $('td');

    console.dir(tds);

    for(let td of tds) {
        if(td.textContent.startsWith('H')) {
            forText.push(td.textContent);
        }
    }

    console.log('for', forText);
});

// DOM 요소에
$(() => {
    const tds = $('td');

    console.log(tds.length)

    console.log(tds);

    // for(td of tds) {
    //     console.log(td);
    //     console.log(td.tagName);

    //     // let tagName = td[0].tagName;
    //     // console.log(tagName);
    // }

    for(let i = 0; i < tds.length; i++) {
        // console.log(tds[i].tagName);
        console.log(tds.get(i).tagName);
    }

    // $('#my-element').get(0).tagName;
    console.log($('#selected-plays').get(0).tagName);

    // $('#selected-plays')[0].tagName;
    console.log($('#selected-plays')[0].tagName);
});


