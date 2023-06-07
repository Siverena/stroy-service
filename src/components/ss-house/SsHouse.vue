<template>
  <SsLoader v-if="loading" />
  <div class="ss-house" v-if="!loading">
    <SsSectionHeader>{{ house.projectName }}</SsSectionHeader>
    <div class="ss-house__info">
      <div class="ss-house__slider">
        <img
          src="../../assets/img/ss-house/house.png"
          alt=""
          class="ss-house__slider-image"
        />
      </div>
      <div class="ss-house__general general">
        <div class="general__infoblock">
          <p class="general__header">Без отделки</p>
          <p>Цены:</p>
          <div class="general__prices">
            <p v-for="(price, key) in house.prices.withoutFinishing" :key="key">
              <span> {{ formattedPrice(price.price) }} Р</span> ({{
                sizes[price.sizeId]
              }}
              под усадку)
            </p>
          </div>
          <p class="general__floor">
            Этажность: {{ house.floor }} этаж
            <span v-if="house.mansarda">+ мансарда</span>.
          </p>
          <p class="general__s">Жилая площадь: {{ house.s }} м<sup>2</sup></p>
          <p>Срок строительства: {{ house.constructionPeriod }}</p>
          <p>Размеры в плане: {{ house.sizeOnPlan }}</p>
          <p>Доставка до 500 км: 0 руб.</p>
          <p>Оплата: без предоплаты</p>
          <p class="general__info">Стоимость проекта указана со сборкой!</p>
          <SsBtn class="general__btn ss-btn--grey">Заказать</SsBtn>
        </div>
        <div class="general__infoblock">
          <p class="general__header">Под ключ</p>
          <p>Цены:</p>
          <div class="general__prices">
            <p v-for="(price, key) in house.prices.fullConstruction" :key="key">
              <span> {{ formattedPrice(price.price) }} Р</span> ({{
                sizes[price.sizeId]
              }}
              под ключ)
            </p>
          </div>
          <p class="general__item general__floor">
            Этажность: {{ house.floor }} этаж
            <span v-if="house.mansarda">+ мансарда</span>.
          </p>
          <p class="general__item general__s">
            Жилая площадь: {{ house.s }} м<sup>2</sup>
          </p>
          <p class="general__item general__constructionPeriod">
            Срок строительства: {{ house.constructionPeriod }}
          </p>
          <p class="general__item general__sizeOnPlan">
            Размеры в плане: {{ house.sizeOnPlan }}
          </p>
          <p>Доставка до 500 км: 0 руб.</p>
          <p>Оплата: без предоплаты</p>
          <p class="general__info">Стоимость проекта указана со сборкой!</p>
          <SsBtn class="general__btn ss-btn--green">Заказать</SsBtn>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./ss-house.js"></script>
