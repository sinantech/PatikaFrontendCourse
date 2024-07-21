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
    }
  }
  
  // Toast mesajlarını göstermek için fonksiyon
  function showToast(type) {
    var toast = document.getElementById("liveToast");
    var toastBody = toast.querySelector(".toast-body");
  
    if (type === 'success') {
      toast.className = "toast success show";
      toastBody.textContent = "Listeye eklendi.";
    } else if (type === 'error') {
      toast.className = "toast error show";
      toastBody.textContent = "Listeye boş ekleme yapamazsınız!";
    }
  
    setTimeout(function() {
      toast.className = toast.className.replace("show", "");
    }, 4000);
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
    }
  }
  
  // Liste elemanlarını işaretlemek için olay dinleyici
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  