<template>
  <div class="hatter">
    <div class="container mt-4">
      <h1>Rólunk</h1>
      <p>Köszönjük hogy felkeresett minket!</p>
      <h2>Csapatunk: </h2>
  
      <div class="row my-5">
        <div class="col-md-6">
          <ul class="list-group adatokgirl">
            <li class="list-group-item">Név: Tokaji Eszter</li>
            <li class="list-group-item">Email: tokajie@kkszki.hu</li>
            <li class="list-group-item">Telefon: (36) 10-1111-111</li>
            <li class="list-group-item">Cím: 3525 Miskolc, Palóczi László utca 3.</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="../assets/PFP2.png" alt="Placeholder Image" class="img-fluid" style="height:200px; width:300px">
        </div>
      </div>
  
      <div class="row my-5">
        <div class="col-md-6">
          <ul class="list-group adatokboy">
            <li class="list-group-item">Név: Dienes Dániel Norbert</li>
            <li class="list-group-item">Email: dienesd@kkszki.hu</li>
            <li class="list-group-item">Telefon: (36) 10-1111-111</li>
            <li class="list-group-item">Cím: 3525 Miskolc, Palóczi László utca 3.</li>
          </ul>
        </div>

        

        

        <div class="col-md-6">
          <img src="../assets/PFP1.png" alt="Placeholder Image" class="img-fluid" style="height:200px; width:300px">
        </div>
      </div>
    </div>
    <div class="container mt-4">
        <h2>Céginfó:</h2>
        <div class="row my-5">
        <div class="col-md-6">
          <ul class="list-group adatok">
            <li class="list-group-item">Pindur Candy</li>
            <li class="list-group-item">Email: pindurcandy@gmail.com</li>
            <li class="list-group-item">Cím: 3525 Miskolc, Palóczi László utca 3.</li>
            <li class="list-group-item">Alapításunk dátuma: 2023</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="../assets/RPF1.png" alt="Placeholder Image" class="img-fluid rounded" style="height:200px; width:300px">
        </div>
      </div>
    </div>
  </div>
    
    <footer class="bg-dark text-center text-white mt-4 py-2">
        <img src="../assets/logo.png" style="width: 20%; padding-bottom:3rem; padding-top:1rem">
      <p>&copy; 2023 My Website. All rights reserved.</p>
    </footer>
    
  </template>
  
  <script>
  
  </script>
  <style>
  body {
  margin: 0;
  padding: 0;
}
.container:first-child {
  margin-top: 0;
}
.hatter{
  background: url('../assets/aboutbg.jpg') no-repeat center center;
  background-size: cover;
  text-align: center;
  font-family: arial;
  opacity: 1;
}

</style>
<style lang="scss">
.adatokgirl li{
  background: rgba(5, 5, 5, 0.5);

  color: #e8e8e8;
  text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #BF0094, 0 0 30px #BF0094, 0 0 40px #BF0094, 0 0 55px #BF0094, 0 0 75px #BF0094, 2px 2px 2px rgba(12,232,255,0);}


.adatokboy li{
  background: rgba(5, 5, 5, 0.5);

  color: #e8e8e8;
  text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #54f4ff, 0 0 30px #54f4ff, 0 0 40px #54f4ff, 0 0 55px #54f4ff, 0 0 75px #54f4ff, 2px 2px 2px rgba(12,232,255,0);}

.adatok li{
  background: rgba(5, 5, 5, 0.5);

  color: #e8e8e8;
  text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #BF0094, 0 0 30px #54f4ff, 0 0 40px #BF0094, 0 0 55px #54f4ff, 0 0 75px #BF0094, 2px 2px 2px rgba(12,232,255,0);

}
</style>