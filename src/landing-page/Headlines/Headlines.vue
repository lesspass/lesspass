<style>
  #hero{
    padding-top: 2em;
  }
</style>
<template>
  <div id="hero">
    <div class="container">
      <h1 id="hero__title">{{{ $t('headlines.title') }}}</h1>
      <p class="lead hidden-xs-down">
        <b>LessPass</b> {{ $t('headlines.subtitle') }}
      </p>
    </div>
  </div>
</template>
