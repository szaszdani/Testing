function search_books() {
    let input, kereses, table, sor, td, i, ValueofKereses, th;
    input = document.getElementById("searchbar");
    kereses = input.value.toLowerCase();
    table = document.getElementById("booklist_table");
    sor = table.getElementsByTagName("tr"); 
    th = table.getElementsByTagName("th")

    for (i = 0; i < sor.length; i++) {
      sor[0].style.display = ""  
      td = sor[i]
        if (td) {
            ValueofKereses = td.textContent || td.innerText;
            if (ValueofKereses.toLowerCase().indexOf(kereses) > -1) {
            sor[i].style.display = "";
            } else {
            sor[i].style.display = "none";
            }
        
        }
      
    }
  
}

function hide_table(oszlop_nev)
{
    var checkbox=document.getElementById(oszlop_nev).value;
    if(checkbox=="hide")
    {
        var osszes_oszlop=document.getElementsByClassName(oszlop_nev);
        for(var i=0;i<osszes_oszlop.length;i++)
        {
        osszes_oszlop[i].style.display="none";
        }
        document.getElementById(oszlop_nev+"_head").style.display="none";
        document.getElementById(oszlop_nev).value="show";
    }
        
    else
    {
        var osszes_oszlop=document.getElementsByClassName(oszlop_nev);
        for(var i=0;i<osszes_oszlop.length;i++)
        {
        osszes_oszlop[i].style.display="table-cell";
        }
        document.getElementById(oszlop_nev+"_head").style.display="table-cell";
        document.getElementById(oszlop_nev).value="hide";
    }

}


const getCellValue = (tr, index) => tr.children[index].innerText || tr.children[index].textContent;

const comparer = (index, asc) => (a, b) => ((elso, masodik) => 
    elso !== '' && masodik !== '' && !isNaN(elso) && !isNaN(masodik) ? elso - masodik : elso.toString().localeCompare(masodik)
    )(getCellValue(asc ? a : b, index), getCellValue(asc ? b : a, index));

document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('#Books');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));
