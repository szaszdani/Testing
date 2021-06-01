let book_array = []
let writer_array = []
let publisher_array = []

const exists = document.cookie.indexOf('book_array=');
if(exists < 0)
	{
		save_booklist();
	}

function get_booklist() {
	let json_book_array = getCookie('book_array');
	let json_writer_array = getCookie('writer_array');
	let json_publisher_array = getCookie('publisher_array');
	
	book_array = JSON.parse(json_book_array);
	writer_array = JSON.parse(json_writer_array);
	publisher_array = JSON.parse(json_publisher_array);
}

function save_booklist() {
	let json_book_array = JSON.stringify(book_array);
	let json_writer_array = JSON.stringify(writer_array);
	let json_publisher_array = JSON.stringify(publisher_array);
	
	createCookie('book_array', json_book_array);
	createCookie('writer_array', json_writer_array);
	createCookie('publisher_array', json_publisher_array);
}

function load_rows() {
	get_booklist();
	load_thead();
	
	let table = document.getElementById("booklist_table");
	let i;
	for (i = 1; i <= book_array.length; i++) {
		let row = table.insertRow(i);
		
		let cell0 = row.insertCell(0);
		let cell1 = row.insertCell(1);
		let cell2 = row.insertCell(2);
		let cell3 = row.insertCell(3);
		let cell4 = row.insertCell(4);
		
		cell0.innerHTML = i;
		cell1.innerHTML = book_array[i-1];
		cell1.classList.add("cim_col");
		cell2.innerHTML = writer_array[i-1]; 
		cell2.classList.add("szerzo_col");
		cell3.innerHTML = publisher_array[i-1]; 
		cell3.classList.add("kiado_col");
        cell4.innerHTML = '<a href="#" onclick="delete_row('+(i-1)+')">Törlés</a>';
	} 
}
function load_thead()
{
	let table_thead = document.getElementById("booklist_table_tbody");
	table_thead.innerHTML = `<tr>
                <th scope="col">#</th>
                <th id="cim_col_head" scope="col">Könyv címe</th>
                <th id="szerzo_col_head" scope="col">Író</th>
                <th id="kiado_col_head" scope="col">Kiadó</th>
                <th scope="col"></th>
            </tr>`;
}


function delete_row(row_num) {
	alert('deleted: '+ book_array[row_num]);
	document.getElementById("booklist_table").deleteRow(row_num+1); 
	removeItemOnce(book_array, book_array[row_num]);
	removeItemOnce(writer_array, writer_array[row_num]);
	removeItemOnce(publisher_array, publisher_array[row_num]);
	save_booklist();
	reload_table();
}

function add_book() {
	
	let book = document.getElementById("book_input").value;
	let writer = document.getElementById("writer_input").value;
	let publisher = document.getElementById("publisher_input").value;
	
	book_array.push(book); 
	writer_array.push(writer); 
	publisher_array.push(publisher); 
	
		let table = document.getElementById("booklist_table");
	
	let count = book_array.length;
	let row = table.insertRow(count);
		
	let cell0 = row.insertCell(0);
	let cell1 = row.insertCell(1);
	let cell2 = row.insertCell(2);
	let cell3 = row.insertCell(3);
	let cell4 = row.insertCell(4);
	
	cell0.innerHTML = count;
	cell1.innerHTML = book;
	cell1.classList.add("cim_col");
	cell2.innerHTML = writer; 
	cell2.classList.add("szerzo_col");
	cell3.innerHTML = publisher; 
	cell3.classList.add("kiado_col");
	cell4.innerHTML = '<a href="#" onclick="delete_row('+(count-1)+')">Törlés</a>';
	
	save_booklist();
}

function removeItemOnce(arr, value) {
  let index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function reload_table() {
	
	let table_thead = document.getElementById("booklist_table_tbody");
	table_thead.innerHTML = ``;
	load_rows();
	
}



function createCookie(name, value, days) {
    let expires;
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}