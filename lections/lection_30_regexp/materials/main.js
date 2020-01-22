console.log('lection_30');


var pattern = /asdasso23me/;

// search
// str = `so23me9860 пsOMEивет  шаблон прШабsomeлоноек8 8тированияшабЛон`;
// console.log(str.search(pattern));

str = `Hello world! 199WoRld 97756 8world! 2019 world!asd helloWo 2013`;
// match
var result = str.match(/world/);
// console.log(result);

// //match /g
// result = str.match(/\d\d\d\d/ig);
// result = str.match(/ world! /ig);
// console.log(result);

// split
// console.log( '5343-12-34-56_89::98::23'.split(/-|::|_/) );
// console.log( '5343-12-34-56_89::98::23'.split(/[-_]|::/) );
// console.log( '5343-12-34-56_89::98::23'.split(/[-_:]{1,2}/) );
// console.log( 'teaxtAteaxtAteaxt'.split(/A/g) );

// // split examples
// console.log('132sd{template}kf12{}3|123a|lfknadsk|ljfn|123'.split(/{\w+}/));
// console.log('132sd{template}kf12{}3|123a|lfknadsk|ljfn|123'.split(/{\w*}/));

/*
        \w === a-zA-Z
        \w+ === {1,}
        \w* === {0,}
*/

// console.log(
//     '132sd{templatfklgjmflkgjmlkfmjlkgflkjfmkljgme}kf12{}3|123a|lfknadsk|ljfn|123'
//         .split(/{\w{2,5}}/)
//     );


//replace
// console.log('12- 34- 56'.replace( /- /g, "-" ));
// -----------------

/*
 - классы и спецсимволы
 - диапазоны и наборы
 - квантификаторы +, *, ? и {n}
 - Альтернация
*/

var str = "1988 год Как дела? 2357.123 Что wor12ds? Когда нет ничего в 18 лет."
// var result = str.match(/\b\d{4}\b/g);
// var result = str.match(/\d{1,}\.?\d{1,}/gi);
// var result = str.match(/\d+(\.\d+)?/gi);
// var result = str.match(/\w/gi);
// var result = str.match(/[A-Za-zА-Яа-яіІїЇґҐ]{5}/gi);
str ="aslknaslkd hw  A1234 odas howoudasd as,dmas.,m asmd.,asm das./d /.as,d.? asd"
// var result = str.match(/(wod|woud)/gi);
// var result = str.replace(/(wod|woud)/gi, '*');
var result = str.match(/A(?=\d{4})/gi);
console.log(result)


// -----------------
// . ? [ ] { } & ^ \ / |
// \. \? \/ \& \| \\
// var str = `How are \\ \\ //\\\\ | yo hello.foo u \n \t \s \f [123] [123}`;
// var result = str.match(/\[\d{3}\]/gi);
// var result = str.match(/\/\/\\\\/g);
// var result = str.match(/https?:\/\/[a-zA-Z-0-9]+\.com/g);
// var result = str.match(/hello\.foo/g);
// console.log(result)

// ----------------------------

// var str = "Hello Pet+a! Petтa Hello Petia! Pet^a Hello Petra!";
// var result = str.match(/Pet[a-zA-Zа-яА-Я]a/gi);
// var result = str.match(/Pet[^i+0-9^]a/gi);
// console.log(result);



// ----------------------------

// var str = "Hello Ivan! Hello Ivan Hello Ivan?";
// var result = str.match(/Hello Ivan[!.]?/gi);
// console.log(result);

// ----------------------------

// var str = "s12344236523 helo5 s s123 !hello s12.5 rhello 2018 2 rrhello 23 rrrhelllllllloooo";
// // var result = str.match(/s\d*/gi);
// var result = str.match(/hell?o/gi);
// console.log(result);

// ----------------------------

// var str = "homahomahoma123 homa123";
// var result = str.match(/[0-9.]+/gi);
// var result = str.match(/(homa){2}[\w\d]+\b/gi);
// var result = str.replace(/(homahoma)(.+)\b/g,"$2");
// console.log(result);

// ----------------------------

// var reg = /^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/

// var reg2 = /<a\s+(?:[^>]*)href=\"((?:https|http):\/\/\w{0,3}.youtube+\.\w{2,3}\/watch\?v=[\w-]{11})"([\w= '"]*)?>(?:.*?)<\/a>/

// `
// <a></a>
// <a href="http://www.youtube.com/watch" id="123"></a>


// `