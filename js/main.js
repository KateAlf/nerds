      var link = document.querySelector(".content-email");
      var popup = document.querySelector(".modal-content");
      var close = document.querySelector(".modal-content-close");
      var cancel = document.querySelector(".cancel");
      var form = popup.querySelector("form");
      var login = popup.querySelector("[name=login]");
      var password = popup.querySelector("[name=email]");
      var storage = localStorage.getItem("login");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        if (storage) {
          login.value = storage;
          email.focus();
        } else {
          login.focus();
        }
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
      });
 	
	cancel.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
      });

      form.addEventListener("submit", function(event) {
        if (!(login.value && email.value)) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.classList.add("modal-error");
        } else {
          localStorage.setItem("login", login.value);
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
          }
        }
      });

    ymaps.ready(function () {
      var myMap = new ymaps.Map("map", {
          center: [59.939460, 30.32048], //���������� �����
          zoom: 16 //����������� �����
        }),
        myPlacemark = new ymaps.Placemark([59.938554, 30.32248], {
          hintContent: 'N�rds'
        }, {
          iconLayout: "default#image",
          iconImageHref: "img/logo_map.png", //  ���� �� ��������
          iconImageSize: [231, 190], //������ ��������
          iconImageOffset: [-25, -205] //�������� ����� ������ ������������ ������ �������� ����. 
        });


      myMap.geoObjects.add(myPlacemark);
    });