<style>
  #features {
    background-color: #025aa5;
    color: #F5F5F5;
  }

  #features a {
    color: inherit;
    text-decoration: underline;
  }

  #features .features__card {
    background-color: transparent;
    border: none;
    border-radius: 0 !important;
    margin: 1em;
  }

  #features .features__card img {
    height: 120px;
  }

  .p-y-6 {
    padding-top: 6rem !important;
    padding-bottom: 6rem !important;
  }

  @media (min-width: 768px) {

    #features .features__card {
      width: 25%
    }
  }
</style>
<template>
  <div id="features">
    <div class="container p-y-6">
      <div id="features__cards" class="row text-xs-center">
        <div class="card-deck-wrapper">
          <div class="card-deck">
            <div class="card features__card p-t-2">
              <img class="card-img-top" src="responsive.png" alt="Card image cap">
              <div class="card-block">
                <h4 class="card-title">{{{ $t('features.responsiveTitle') }}}</h4>
                <p class="card-text">{{{ $t('features.responsive') }}}</p>
              </div>
            </div>
            <div class="card features__card p-t-2">
              <img class="card-img-top" src="no-cloud.png" alt="Card image cap">
              <div class="card-block">
                <h4 class="card-title">{{{ $t('features.noCloudTitle') }}}</h4>
                <p class="card-text">{{{ $t('features.noCloud') }}}</p>
              </div>
            </div>
            <div class="card features__card p-t-2">
              <img class="card-img-top" src="open-source.png" alt="Card image cap">
              <div class="card-block">
                <h4 class="card-title">{{{ $t('features.openSourceTitle') }}}</h4>
                <p class="card-text">{{{ $t('features.openSource') }}}</p>
              </div>
            </div>
            <div class="card features__card p-t-2">
              <img class="card-img-top" src="free.png" alt="Card image cap">
              <div class="card-block">
                <h4 class="card-title">{{{ $t('features.freeTitle') }}}</h4>
                <p class="card-text">{{{ $t('features.free') }}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
