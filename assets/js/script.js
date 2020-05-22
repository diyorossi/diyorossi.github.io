$('.halaman').on('click', function(e){

	//ambil isi href atau link
	var tujuan = $(this).attr('href');
	//tangkap elemen yg bersangkutan
	var elemenTujuan = $(tujuan);
	//
	//console.log($('body').scrollTop());
	//console.log(elemenTujuan.offset().top);


	//pindah scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 102 //jarak buat atas dari masing2 fitur
	},900, "easeInOutElastic"); //satuan milisecond
	e.preventDefault();

     $('.top-link a').removeClass('active-top-link');
        $(this).addClass('active-top-link');

});

// Filter isotope
 var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
      });


  $('.filter button').on("click", function () {
        var value = $(this).attr('data-name');
          $grid.isotope({
            filter: value
          });
        $('.filter button').removeClass('active');
        $(this).addClass('active');
        // console.log(value);
      })