<style>
  #footer {
    background-color: #323232;
    color: #F5F5F5;
    font-size: 0.8em;
  }

  #footer a {
    color: inherit;
  }
</style>
<template>
  <div id="footer">
    <div class="container p-t-1">
      <div class="row">
        <div class="col-lg-12 text-xs-center">
          <p>
            &copy; LessPass
            - {{ $t('footer.created_by') }} <a href="mailto:guillaume@oslab.fr">Guillaume Vincent</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
