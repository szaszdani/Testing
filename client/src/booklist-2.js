class Konyv {
    constructor(cim, iro, kiado) {
      this.cim = cim;
      this.iro = iro;
      this.kiado = kiado;
    }
  }
  
  class Interface {
    static dispK() {
      const konyvek = Adat.getK();
      konyvek.forEach((konyv) => Interface.Listara(konyv));
    }
    static Listara(konyv) {
      const list = document.querySelector('#lista');
      const row = document.createElement('tr');
      row.innerHTML = `<td>${konyv.cim}</td><td>${konyv.iro}</td><td>${konyv.kiado}</td><td><a href="#"class="btn btn-danger btn-sm delete">Törlés</a></td>`;
      list.appendChild(row);
    }
  
    static delK(el) {
      if(el.classList.contains('delete')) {el.parentElement.parentElement.remove();}
    }
  
    static ping(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form');
      container.insertBefore(div, form);
      setTimeout(() => document.querySelector('.alert').remove(), 1500);
    }
  
    static clear() {
      document.querySelector('#cim').value = '';
      document.querySelector('#iro').value = '';
      document.querySelector('#kiado').value = '';
    }
  }
  
  class Adat {
    static getK() {
      let konyvek;
      if(localStorage.getItem('konyvek') === null) {
        konyvek = [];
      } else {
        konyvek = JSON.parse(localStorage.getItem('konyvek'));
      }
  
      return konyvek;
    }
  
    static Hozzaad(konyv) {
      const konyvek = Adat.getK();
      konyvek.push(konyv);
      localStorage.setItem('konyvek', JSON.stringify(konyvek));
    }
  
    static remK(kiado) {
      const konyvek = Adat.getK();
  
      konyvek.forEach((konyv, index) => {
        if(konyv.kiado === kiado) {
          konyvek.splice(index, 1);
        }
      });
      localStorage.setItem('konyvek', JSON.stringify(konyvek));
    }
  }
  
  document.addEventListener('DOMContentLoaded', Interface.dispK);
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const cim = document.querySelector('#cim').value;
    const iro = document.querySelector('#iro').value;
    const kiado = document.querySelector('#kiado').value;
    if(cim === '' || iro === '' || kiado === '') { Interface.ping('Töltsön ki minden mezőt', 'danger');} 
    else {
      const konyv = new Konyv(cim, iro, kiado);
      Interface.Listara(konyv);
      Adat.Hozzaad(konyv);
      Interface.ping('Hozzáadva', 'success');
      Interface.clear();
    }
  });
  
  document.querySelector('#lista').addEventListener('click', (e) => {
    Interface.delK(e.target);
  
    Adat.remK(e.target.parentElement.previousElementSibling.textContent);
  
    Interface.ping('Eltávolítva', 'success');
  });