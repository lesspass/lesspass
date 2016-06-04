<style>
  #testimonials {
    background-color: #424242;
    color: #f5f5f5;
  }

  #testimonials .thumbnail {
    width: 42px;
  }
</style>
<template>
  <div id="testimonials">
    <div class="container p-y-3">
      <div class="row m-y-3">
        <div class="col-lg-10 col-lg-offset-1">
          <div class="media">
            <a class="media-left" href="#">
              <img src="el.jpg" alt="Edouard Lopez" class="img-circle thumbnail">
            </a>
            <div class="media-body">
              <h5 class="media-heading">{{{ $t('testimonial.feedback1') }}}</h5>
              <p>{{{ $t('testimonial.feedback1Author') }}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-y-3">
        <div class="col-lg-10 col-lg-offset-1">
          <div class="media">
            <div class="media-body text-xs-right">
              <h5 class="media-heading">{{{ $t('testimonial.feedback2') }}}</h5>
              <p>{{{ $t('testimonial.feedback2Author') }}}</p>
            </div>
            <a class="media-right" href="#">
              <img src="gv.jpg" alt="guillaume vincent" class="img-circle thumbnail">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
