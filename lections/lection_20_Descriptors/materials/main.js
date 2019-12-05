window.onload = function(){


    console.log('Lection_20');

    // const data = {
    //     x: 10,
    //     y: 'hello'
    // };

    // const info = Object.create(data);

    // info.h = 'asdjnaskld';
    // info.age = 20;

    // data.x = 1000;
    // delete data.x;

    // console.log(info);

    // let list = [3,4,45,45,6,6];
    // list.lng = 20;
    // for(let key in list){
    //     console.log(key);
    // }


    // descriptor

    // let info = {
    //     name: 'Vasya',
    //     age: 23
    // };

    // Object.defineProperty(info, 'city', {
    //     value: 600,
    //     enumerable: false,
    //     writeable: false,
    //     configurable: false
    // });

    // console.log(info);



    // get/set


    // pattern getter and setter


    class Parent {
        constructor(name, fgj) {
            this.name = name;
            this._age = fgj;

            Object.defineProperty(this, 'rows', {
                writable: true,
                enumerable: false,
                value: [
                    this.getHeadTable(this),
                    // this.getHeadTableString(this),
                    this.getTableRow(this)
                ]
            });
        }

        set age(newAge){
            if(!newAge || newAge < 0) {
                return console.error('age error'); 
            }
            this._age = newAge;
        }

        get age(){
            if(!this._age || this._age < 0) {
                return console.error('age error');
            }
            return this._age;
        }

        getHeadTable(source){
            let tr = document.createElement('tr');
            let td;
            for(let key in source) {
                td = document.createElement('th');  
                td.innerHTML = key
                tr.appendChild(td);
            }
            return tr;
        }

        getHeadTableString(source){
            
            // let content = '';

            // for(let key in source) {
            //    content += '<th>'+key+'</th>' 
            // }

            // return "<tr>" + content + "</tr>";

            let keys = Object.keys(source);
            return "<tr><th>" + keys.join('</th><th>') + "</th></tr>";
        }

        getTableRow(source){
            let tr = document.createElement('tr');
            let td;
            for(let key in source) {
                td = document.createElement('td');  
                td.innerHTML = source[key];
                td.addEventListener('click', function(){})
                tr.appendChild(td);
            }
            return tr;
        }

        getTableRowString(source){
            // let content = '';

            // for(let key in source) {
            //    content += '<td>'+source[key]+'</td>' 
            // }

            // return "<tr>" + content + "</tr>"

            let values = Object.values(source);
            return "<tr><td>" + values.join('</td><td>') + "</td></tr>";
        }

        getTrItems() {
            return this.rows;
        }

        set row(row) {
            this.rows.push(row);
        }

        renderTable(target) {
            var table = document.createElement('table');
            table.border = "2";

            this.getTrItems().forEach(function(tr){
                table.appendChild(tr);
            })

            target.appendChild(table);
        }

        renderTableString(target){
            let list = [
                this.getHeadTableString(this),
                this.getTableRowString(this)
            ]
            target.innerHTML += '<table border="1">' + list.join('') + '</table>';
        }
    };

    user = new Parent('Vasya', 25);

    user.renderTable(document.body);
    user.renderTableString(document.body);

    // user2 = new Parent('Katya', 18);


    // user2.row = document.createElement('tr');
    // user2.renderTable(document.body);
}



// ---------------------------------------------


// get/set - function
var info = {
    city: 'Kyiv',
    country: 'Ukraine',
    get address() {
        this.additional();
        return this.city + ' ' + this.country;
    },
    set address(value) {
        var splitted = value.split(' ');
        this.city = splitted[0];
        this.country = splitted[1];
    },
    additional() {
        // console.log('something')
    }
}

// console.log( info.city ); // getter
// var x = info.city + ' Ukraine!'// getter

// info.city = 'Kharkiv'; // setter

// console.log(info.address); // getter
info.city = 'Kharkiv'; 
console.log(info.address); 
info.address = 'Paris France'; // setter
console.log(info.address); 
console.log(info);

