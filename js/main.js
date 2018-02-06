$( document ).ready(function() {
    $('.camera_wrap').camera({ //here I declared some settings, the height and the presence of the thumbnails
    height: '768px',
    pagination: false,
    playPause: false,
    loader: 'none'
  });

    // Fixed header: Change the background color of the header when the user starts scrolling
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $('.top-header.fade-menu').addClass('solid-dark');
        $('.top-header.fade-menu .dark-logo').toggleClass("dark-logo light-logo");
      }
      else {
        $('.top-header.fade-menu').removeClass('solid-dark');
        $('.top-header.fade-menu .light-logo').toggleClass("light-logo dark-logo");
      }
    });
    
    // Responsive: Display the menu when the hamburger button is clicked
    $('#hamburger-btn').click(function(e){
        e.preventDefault();
        $('#top-header').toggleClass('sidebar-active');
    });
    
    $('.toggle-sidebar').click(function(){
        $('#top-header').removeClass('sidebar-active');
    });
    
    // Portfolio: Filter effect on the portfolio items
    $('.portfolio-filter').click(function(e){
        e.preventDefault();
        var portfolioCategory = $(this).attr('id');
        
        function showAll() {
            $('.portfolio-hide').removeClass('portfolio-hide');
        }
        function hideAll() {
            $('.project-image').addClass('portfolio-hide');
        }
        function showFilter(filter) {
            $('.portfolio .portfolio-filter-' + filter).removeClass('portfolio-hide');
        }
        
        if(portfolioCategory == "all") {
            showAll();
        }
        else {
            hideAll();
            showFilter(portfolioCategory);
        }
    });
    
});
