import { coupons30, coupons130, coupons15 } from "./_coupons.js"
$(function () {
  

  $(".partners").css('display', 'flex')

  $('#open').on('click', () => {
    $('.mob').animate({ right: '0' })
    $('.mob').css({ display: 'block' })
  })

  $('#close').on('click', () => {
    $('.mob').animate({ right: '-300px' }, () => $('.mob').css({ display: 'none' }))
  })

  

  $('#footer-form').on('submit', function(e){
    e.preventDefault();
    var fd = new FormData( this );
    $.ajax({
      url: './php/send.php',
      type: 'POST',
      contentType: false, 
      processData: false, 
      data: fd,
      success: function(msg){
        if(msg == 'ok') {
        } else {
        }
      }
    });
    window.location.href = "./thanks.html";
    $("#footer-form input[type='email']").val("");
  });

  $('#sale-form').on('submit', function(e){
    e.preventDefault();
    var fd = new FormData( this );
    $.ajax({
      url: './php/send-sale.php',
      type: 'POST',
      contentType: false, 
      processData: false, 
      data: fd,
      success: function(msg){
        if(msg == 'ok') {
        } else {
        }
      }
      
    });
    window.location.href = "./thankssale.html";
    
    $("#sale-form input[type='email']").val("");
    $("#sale-form input[type='text']").val("");
  });


  
  
  $('.menu-tab').fadeOut(1, () => $(".open").css('display', 'block'))

  $('.nav-menu__btn').on('click', function (e) {
    
    $('#' + $('.open').attr('data-tab')).fadeOut(0, () => {
      $('#' + $(this).attr('data-tab')).fadeIn(0)
      $("#menu-1 .menu-cards").slick('unslick')
      $("#menu-1 .menu-cards").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '#menu-1 .prev',
        nextArrow: '#menu-1 .next',
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      })
      $("#menu-2 .menu-cards").slick('unslick')
      $("#menu-2 .menu-cards").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '#menu-2 .prev',
        nextArrow: '#menu-2 .next',
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      })
      $("#menu-3 .menu-cards").slick('unslick')
      $("#menu-3 .menu-cards").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '#menu-3 .prev',
        nextArrow: '#menu-3 .next'
      })
    })
    $('.open').removeClass('open')
    $(this).addClass('open')
  })
  
  $("#cart").on('click', () => {
    $(".cart").css('display', 'flex')
  })

  new Vue({
    el: '#menu',
    data: {
      products1: [
        {
          title: "Салат 1",
          imgsrc: "./img/menu.png",
          description: "Здесь какое-то небольшое описание блюда, состав, 150 гр",
          price: 250,
          id: 1,
          link1: '#',
          link2: '#'
        },
        {
          title: "Салат 2",
          imgsrc: "./img/menu.png",
          description: "Здесь какое-то небольшое описание блюда, состав, 150 гр",
          price: 250,
          id: 2,
          link1: '#',
          link2: '#'
        },
        {
          title: "Салат 3",
          imgsrc: "./img/menu.png",
          description: "Здесь какое-то небольшое описание блюда, состав, 150 гр",
          price: 250,
          id: 3,
          link1: '#',
          link2: '#'
        },
        {
          title: "Салат 4",
          imgsrc: "./img/menu.png",
          description: "Здесь какое-то небольшое описание блюда, состав, 150 гр",
          price: 250,
          id: 4,
          link1: '#',
          link2: '#'
        },
        {
          title: "Салат 5",
          imgsrc: "./img/menu.png",
          description: "Здесь какое-то небольшое описание блюда, состав, 150 гр",
          price: 250,
          id: 5,
          link1: '#',
          link2: '#'
        },
        {
          title: "Салат 6",
          imgsrc: "./img/menu.png",
          description: "Здесь какое-то небольшое описание блюда, состав, 150 гр",
          price: 250,
          id: 6,
          link1: '#',
          link2: '#'
        }
      ],
      products2: [
        {
          title: "Салат 1",
          imgsrc: "./img/menu.png",
          description: "Здесь какое-то небольшое описание блюда, состав, 150 гр",
          price: 250,
          id: 1,
          inCart: 0
        },
        {
          title: "Салат 2",
          imgsrc: "./img/menu.png",
          description: "Здесь какое-то небольшое описание блюда, состав, 150 гр",
          price: 250,
          id: 2,
          inCart: 0
        },
        {
          title: "Салат 3",
          imgsrc: "./img/menu.png",
          description: "Здесь какое-то небольшое описание блюда, состав, 150 гр",
          price: 250,
          id: 3,
          inCart: 0
        },
        {
          title: "Салат 4",
          imgsrc: "./img/menu.png",
          description: "Здесь какое-то небольшое описание блюда, состав, 150 гр",
          price: 250,
          id: 4,
          inCart: 0
        },
        {
          title: "Салат 5",
          imgsrc: "./img/menu.png",
          description: "Здесь какое-то небольшое описание блюда, состав, 150 гр",
          price: 250,
          id: 5,
          inCart: 0
        },
        {
          title: "Салат 6",
          imgsrc: "./img/menu.png",
          description: "Здесь какое-то небольшое описание блюда, состав, 150 гр",
          price: 250,
          id: 6,
          inCart: 0
        }
      ],
      cartExtra: [
        {
          title: 'Соль',
          price: 0,
          inCart: false
        },
        {
          title: 'Перец',
          price: 0,
          inCart: false
        },
        {
          title: 'Посуда одноразовая',
          price: 0,
          inCart: false
        },
        {
          title: 'Стеклянная тара для супа (возвратная)',
          price: 20,
          inCart: false
        },
        {
          title: 'Стеклянная тара для горячего или салата (возвратная)',
          price: 120,
          inCart: false
        },
        {
          title: 'Салфетки',
          price: -5,
          inCart: false
        },
        {
          title: 'Приборы',
          price: -10,
          inCart: false
        }
      ],
      cart: [],
      couponsArr30: coupons30.split('\n  '),
      couponsArr130: coupons130.split('\n'),
      couponsArr15: coupons15.split('\n'),
      code: '',
      sale: 0,
      dostType: 'Самовывоз',
      tare: 'Пластиковая',
      partnersOpen: false,
      deliveryLink: '',
      yandexLink: '',
      receipt: [],
      clientForm: {
        name: '', 
        address: '',
        phone: '',
        email: ''
      },
      cartStep: 1,
    },
    mounted: function () {
      
      $("#sale-phone").inputmask('+7 (999) 999-99-99')
      
      
      $("#pay-form").on('submit', function (e) {
        e.preventDefault()
      })
      $(".cart-close").on('click', () => {
        $(".cart").fadeOut(200)
      })

      $(".cart").on('click', function(e) {
        if(e.target.classList == 'cart') {
          $('.cart-close').click()
        }
      })

      $("#menu-1 .menu-cards").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '#menu-1 .prev',
        nextArrow: '#menu-1 .next',
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      })
      $("#menu-2 .menu-cards").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '#menu-2 .prev',
        nextArrow: '#menu-2 .next',
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      })
      $("#menu-3 .menu-cards").slick({
        infinite: false,
        slidesToShow: 41,
        slidesToScroll: 1,
        prevArrow: '#menu-3 .prev',
        nextArrow: '#menu-3 .next'
      })
    },
    computed: {
      cartTotal() {
        let total = 0
        this.cart.forEach(product => {
          total += product.price * product.inCart
        });
        this.cartExtra.forEach(product => {
          if (product.inCart) {
            if(product.title != "Салфетки" && product.title !="Приборы")
            total += product.price
          }
        })

        if(!this.cartExtra[5].inCart) {
          total -= 5
        }
        if(!this.cartExtra[6].inCart) {
          total -= 10
        }
        
        if (this.dostType == "Доставка") {
          let dostavka = 0
          if (total <= 300) {
            dostavka += 99
          } else if (total >= 301 && total <= 700) {
            dostavka += 49
          }
          total+=dostavka
        }

        total += this.sale

        if (total < 0) {
          total = 0
        }
        return total
      },
      dostCost() {
        let cost = 0
        if (this.cartTotal <= 300) {
          cost = 99
        } else if (this.cartTotal >= 301 && this.cartTotal <= 700) {
          cost = 49
        }
        return cost;
      }
    },
    methods: {
      toCart(product) {
        document.querySelector('.header-cart__count').textContent = Number(document.querySelector('.header-cart__count').textContent) + 1
        product.inCart = 1
        this.cart.push(product)
      },
      plusToCart(id) {
        document.querySelector('.header-cart__count').textContent = Number(document.querySelector('.header-cart__count').textContent) + 1
        this.cart.forEach(el => {
          if (el.id == id) {
            el.inCart++
          }
        });
      },
      minusToCart(id) {
        document.querySelector('.header-cart__count').textContent = Number(document.querySelector('.header-cart__count').textContent) - 1
        this.cart.forEach((el, i) => {
          if (el.id == id) {
            el.inCart--
            if (el.inCart == 0) {
              this.cart.splice(i, i + 1)
            }
          }
        });
      },
      openPartners(link1, link2) {
        this.deliveryLink = link1
        this.yandexLink = link2
        this.partnersOpen = true

      },
      createReceipt() {
        this.cartStep ++
        this.receipt = []
        this.cart.forEach(product => {
          this.receipt.push(`${product.title}: ${product.price} руб. x ${product.inCart}`)
        });
        if (this.dostType == "Доставка") {
          this.receipt.push(`Доставка: ${this.dostCost} руб.`)
        } else {
          this.receipt.push('Самовывоз: 0 руб.')
        }
        this.cartExtra.forEach(product => {
          if (product.inCart) {
            this.receipt.push(product.title)
          }
        })
        this.receipt.push(`Итого: ${this.cartTotal} руб.`)
        // $("#cart-phone").inputmask('+7 (999) 999-99-99')
        var element = document.getElementById('cart-phone');
        var maskOptions = {
          mask: '+{7} (000) 000-00-00'
        };
        var mask = IMask(element, maskOptions);
      },
      sendPay() {
        $.ajax({
          data: jQuery.param( {value: this.cartTotal}) ,
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          url: './php/pay.php',
          type: 'POST',
          processData: false, 
          success: function(msg){
            console.log(this.clientForm)
            let response = msg.split(' ')
            localStorage.setItem('id', response[1])
            window.location.href = response[0];
          },
          complete: this.setOrder()
        });
      },
      setOrder(){
        var order = { 'receipt': this.receipt, 'clientName': this.clientForm.name, 'clientAddress': this.clientForm.address,  'clientEmail': this.clientForm.email, 'clientPhone': this.clientForm.phone,};
        localStorage.setItem('order', JSON.stringify(order));
      },
      promo() {
        if (this.couponsArr30.includes(this.code)) {
          if (this.cartTotal > 30) {
            this.sale = -30;
            alert("Промокод на 30 рублей успешно применен!")
          } else {
            alert("Сумма промокода больше суммы заказа :(")
          }
        } else if (this.couponsArr130.includes(this.code)) {
          if (this.cartTotal > 130) {
            this.sale = -130;
            alert("Промокод на 130 рублей успешно применен!")
          } else {
            alert("Сумма промокода больше суммы заказа :(")
          }
        } else {
          alert("Код недействительный")
        }
      }
      
    }
  })
})