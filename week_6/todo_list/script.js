// Sayfa yüklendiğinde mevcut görevleri yükle
document.addEventListener('DOMContentLoaded', (event) => {
  loadTasks();
});

// Yeni bir yapılacaklar listesi elemanı eklemek için fonksiyon
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    showToast('error');
  } else {
    document.getElementById("list").appendChild(li);
    showToast('success');
    saveTask(inputValue);
  }

  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    removeTask(inputValue);
  }
}

// Toast mesajlarını göstermek için fonksiyon
function showToast(type) {
  var toast;
  if (type === 'success') {
    toast = document.querySelector('.toast.success');
  } else if (type === 'error') {
    toast = document.querySelector('.toast.error');
  }

  if (toast) {
    toast.classList.add('show');
    setTimeout(function() {
      toast.classList.remove('show');
    }, 4000);
  }
}

// Var olan liste elemanlarına kapatma düğmesi ekleme
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    removeTask(div.textContent.slice(0, -1));  // Close button text'i (\u00D7) kaldır
  }
}

// Liste elemanlarını işaretlemek için olay dinleyici
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Görevleri kaydetmek için fonksiyon
function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Görevleri silmek için fonksiyon
function removeTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Mevcut görevleri yüklemek için fonksiyon
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    var li = document.createElement("li");
    var t = document.createTextNode(task);
    li.appendChild(t);
    document.getElementById("list").appendChild(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      removeTask(task);
    }
  });
}
