<template>
  <section>
    <div
      id="carouselExampleIndicators"
      class="carousel slide padding"
      data-ride="carousel"
      
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="../assets/exampleimg.png"
            alt="First slide"
          />
          <div class="carousel-caption opacity-75  d-none d-md-block">
            <h5>Üdvözlünk!</h5>
            <p><i>Keresel valamilyen édességet mi megtláljuk neked!</i></p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../assets/exampleimg.png"
            alt="Second slide"
          />
          <div class="carousel-caption opacity-75 d-none d-md-block">
            <h5>Fejlesztések</h5>
            <p><i>Folyamatosan fejlesszük a felhasználói élményt!</i></p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../assets/exampleimg.png"
            alt="Third slide"
          />
          <div class="carousel-caption opacity-75 d-none d-md-block">
            <h5>Akciók</h5>
            <p><i>Hamarosan elindul a partner programunk, hol már tudtok akciósan vásárolni!</i></p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
</template>
<script>
</script>
<style lang="css">
.opacity-75{
  background-color: rgba(50, 50, 50, 0.75)
}
.carousel-caption {
  bottom: auto;
  top: 50%;
  transform: translateY(-50%);
}
</style>



