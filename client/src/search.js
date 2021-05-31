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