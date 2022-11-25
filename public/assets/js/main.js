/*
Theme Name:       JobX - Bootstrap HTML5 Job Portal Template
Author:           UIdeck
Author URI:       http://uideck.com
Text Domain:      UIdeck
Domain Path:      /languages/

JS INDEX
================================================
1. preloader js
2. scroll to top js
3. slick menu js
4. sticky menu js
5. counter js
6. Testimonial owl carousel
7. New Products owl carouse
================================================*/

(function($) {

  "use strict";

    var $main_window = $(window);
    
    /*====================================
    preloader js
    ======================================*/
    $main_window.on("load", function() {
        $("#preloader").fadeOut("slow");
    });

    /*====================================
    scroll to top js
    ======================================*/
    $main_window.on("scroll", function() {
      if ($(this).scrollTop() > 250) {
        $(".back-to-top").fadeIn(200);
      } else {
        $(".back-to-top").fadeOut(200);
      }
    });
    $(".back-to-top").on("click", function() {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        "slow"
      );
      return false;
    });

    /*====================================
    slick menu js
    ======================================*/
    var logo_path=$('.mobile-menu').data('logo');
    $('#main-navbar').slicknav({
        appendTo:'.mobile-menu',
        removeClasses:false,
        label:'',
        closedSymbol:'<i class="lni-chevron-right"><i/>',
        openedSymbol:'<i class="lni-chevron-down"><i/>',
        brand:'<a href="index.html"><img src="'+logo_path+'" class="img-responsive" alt="logo"></a>'
    });
      
    /*====================================
    sticky menu js
    ======================================*/
    $main_window.on('scroll', function () {  
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
          $(".scrolling-navbar").addClass("top-nav-collapse");
      } else {
          $(".scrolling-navbar").removeClass("top-nav-collapse");
      }
    });

    /*=======================================
    counter
    ======================================= */
    if ($(".fact-count").length > 0) {
      $(".counter").counterUp({
        delay: 10,
        time: 500
      });
    }


    /*====================================
    Testimonials Carousel 
    ======================================*/
    var testiOwl = $("#testimonials");
    testiOwl.owlCarousel({
        autoplay:true,
        margin:30,
        dots:true,
        autoplayHoverPause:true,
        nav:false,
        loop:true,
        responsiveClass:true,
        responsive:{
            0: {
                items:1,
            },
            991:{
                items:1
          }
        }
    });

    /*====================================
    New Products Owl Carousel
    ======================================*/
    var newproducts = $("#new-products");
      newproducts.owlCarousel({
        autoplay: true,
        nav: true,
        autoplayHoverPause:true,
        smartSpeed: 350,
        dots: false,
        margin:30,
        loop: true,
        navText: [
          '<i class="lni-chevron-left"></i>',
          '<i class="lni-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            991: {
                items: 3,
            }
          }
      });


      























      const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
    
      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        if (all) {
          select(el, all).forEach(e => e.addEventListener(type, listener))
        } else {
          select(el, all).addEventListener(type, listener)
        }
      }
    
      /**
       * Easy on scroll event listener 
       */
      const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }
    
      /**
       * Sidebar toggle
       */
      if (select('.toggle-sidebar-btn')) {
        on('click', '.toggle-sidebar-btn', function(e) {
          select('body').classList.toggle('toggle-sidebar')
        })
      }
    
      /**
       * Search bar toggle
       */
      if (select('.search-bar-toggle')) {
        on('click', '.search-bar-toggle', function(e) {
          select('.search-bar').classList.toggle('search-bar-show')
        })
      }
    
      /**
       * Navbar links active state on scroll
       */
      let navbarlinks = select('#navbar .scrollto', true)
      const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
          if (!navbarlink.hash) return
          let section = select(navbarlink.hash)
          if (!section) return
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
          } else {
            navbarlink.classList.remove('active')
          }
        })
      }
      window.addEventListener('load', navbarlinksActive)
      onscroll(document, navbarlinksActive)
    
      /**
       * Toggle .header-scrolled class to #header when page is scrolled
       */
      let selectHeader = select('#header')
      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
          } else {
            selectHeader.classList.remove('header-scrolled')
          }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
      }
    
      /**
       * Back to top button
       */
      let backtotop = select('.back-to-top')
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add('active')
          } else {
            backtotop.classList.remove('active')
          }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
      }
    
      /**
       * Initiate tooltips
       */
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })
    
      /**
       * Initiate quill editors
       */
      if (select('.quill-editor-default')) {
        new Quill('.quill-editor-default', {
          theme: 'snow'
        });
      }
    
      if (select('.quill-editor-bubble')) {
        new Quill('.quill-editor-bubble', {
          theme: 'bubble'
        });
      }
    
      if (select('.quill-editor-full')) {
        new Quill(".quill-editor-full", {
          modules: {
            toolbar: [
              [{
                font: []
              }, {
                size: []
              }],
              ["bold", "italic", "underline", "strike"],
              [{
                  color: []
                },
                {
                  background: []
                }
              ],
              [{
                  script: "super"
                },
                {
                  script: "sub"
                }
              ],
              [{
                  list: "ordered"
                },
                {
                  list: "bullet"
                },
                {
                  indent: "-1"
                },
                {
                  indent: "+1"
                }
              ],
              ["direction", {
                align: []
              }],
              ["link", "image", "video"],
              ["clean"]
            ]
          },
          theme: "snow"
        });
      }
    
      /**
       * Initiate TinyMCE Editor
       */
    
      var useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
      tinymce.init({
        selector: 'textarea.tinymce-editor',
        plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
        imagetools_cors_hosts: ['picsum.photos'],
        menubar: 'file edit view insert format tools table help',
        toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
        toolbar_sticky: true,
        autosave_ask_before_unload: true,
        autosave_interval: '30s',
        autosave_prefix: '{path}{query}-{id}-',
        autosave_restore_when_empty: false,
        autosave_retention: '2m',
        image_advtab: true,
        link_list: [{
            title: 'My page 1',
            value: 'https://www.tiny.cloud'
          },
          {
            title: 'My page 2',
            value: 'http://www.moxiecode.com'
          }
        ],
        image_list: [{
            title: 'My page 1',
            value: 'https://www.tiny.cloud'
          },
          {
            title: 'My page 2',
            value: 'http://www.moxiecode.com'
          }
        ],
        image_class_list: [{
            title: 'None',
            value: ''
          },
          {
            title: 'Some class',
            value: 'class-name'
          }
        ],
        importcss_append: true,
        file_picker_callback: function(callback, value, meta) {
          /* Provide file and text for the link dialog */
          if (meta.filetype === 'file') {
            callback('https://www.google.com/logos/google.jpg', {
              text: 'My text'
            });
          }
    
          /* Provide image and alt text for the image dialog */
          if (meta.filetype === 'image') {
            callback('https://www.google.com/logos/google.jpg', {
              alt: 'My alt text'
            });
          }
    
          /* Provide alternative source and posted for the media dialog */
          if (meta.filetype === 'media') {
            callback('movie.mp4', {
              source2: 'alt.ogg',
              poster: 'https://www.google.com/logos/google.jpg'
            });
          }
        },
        templates: [{
            title: 'New Table',
            description: 'creates a new table',
            content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
          },
          {
            title: 'Starting my story',
            description: 'A cure for writers block',
            content: 'Once upon a time...'
          },
          {
            title: 'New list with dates',
            description: 'New List with dates',
            content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
          }
        ],
        template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
        template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
        height: 600,
        image_caption: true,
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        noneditable_noneditable_class: 'mceNonEditable',
        toolbar_mode: 'sliding',
        contextmenu: 'link image imagetools table',
        skin: useDarkMode ? 'oxide-dark' : 'oxide',
        content_css: useDarkMode ? 'dark' : 'default',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      });
    
      /**
       * Initiate Bootstrap validation check
       */
      var needsValidation = document.querySelectorAll('.needs-validation')
    
      Array.prototype.slice.call(needsValidation)
        .forEach(function(form) {
          form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
    
            form.classList.add('was-validated')
          }, false)
        })
    
      /**
       * Initiate Datatables
       */
      const datatables = select('.datatable', true)
      datatables.forEach(datatable => {
        new simpleDatatables.DataTable(datatable);
      })
    
      /**
       * Autoresize echart charts
       */
      const mainContainer = select('#main');
      if (mainContainer) {
        setTimeout(() => {
          new ResizeObserver(function() {
            select('.echart', true).forEach(getEchart => {
              echarts.getInstanceByDom(getEchart).resize();
            })
          }).observe(mainContainer);
        }, 200);
      }








 




      

  })(jQuery);
