<template>
  <agile
    :navButtons="false"
    :autoplay="false"
    :autoplaySpeed="8000"
    :speed="2000"
    v-if="!loading"
  >
    <div class="slide slide-action">
      <div class="slide-action__get">
        <img
          src="../../assets/img/ss-slider/coins_coin_money_cash_icon_185964.png"
          alt=""
        />
        <p>
          Действующие <br />
          <span>акции</span>
        </p>
      </div>
      <div class="slide-action__text">
        Уважаемый Клиент компании "Строй Сервис"! Проект можно изменять в
        соответствии с Вашими требованиями – изменение габаритных размеров, тип
        крыши, перемещение перегородок, окон, дверей и лестницы. Мы внимательно
        выслушаем Вас и вместе с Вами воплотим в реальность вашу мечту!
      </div>
      <div class="slide-action__items">
        <div
          class="slide-action__item"
          v-for="(random, key) in randomHouses"
          :key="key"
        >
          <img :src="random.images[0]" alt="" />
          <div class="slide-action__item-percent">
            -{{ getPercent(random.promoID) }}%
          </div>
          <div class="slide-action__item-bottom">
            Проект дома {{ random.projectName }}
          </div>
        </div>
      </div>
    </div>
    <div class="slide">
      <a href="javascript:">
        <img src="@/assets/img/ss-slider/slide2.jpg" />
      </a>
    </div>
    <div class="slide">
      <a href="javascript:">
        <img src="@/assets/img/ss-slider/_P0vZ-yOH14.jpg" />
      </a>
    </div>
    <div class="slide">
      <a href="javascript:">
        <img src="@/assets/img/ss-slider/slide2.jpg" />
      </a>
    </div>
  </agile>
</template>
<script src="./ss-slider"></script>
