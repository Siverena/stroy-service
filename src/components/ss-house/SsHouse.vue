<template>
  <SsLoader v-if="loading" />
  <div class="ss-house" v-if="!loading">
    <SsSectionHeader>{{ house.projectName }}</SsSectionHeader>
    <div class="ss-house__info">
      <div class="ss-house__slider">
        <img src="" alt="" />
      </div>
      <div class="ss-house__general general">
        <div class="general__without-finishing">
          <p>Без отделки</p>
          <p>Цены:</p>
          <div class="general__without-finishing-price">
            <p v-for="(price, key) in house.prices.withoutFinishing" :key="key">
              <span> {{ formattedPrice(price.price) }} Р</span> ({{
                sizes[price.sizeId]
              }}
              под усадку)
            </p>
          </div>
          <p>Этажность: 1 этаж + мансарда.</p>
          <p>Жилая площадь: 84 м.кв.</p>
          <p>Срок строительства: 12-14 дней</p>
          <p>Размеры в плане: 7-8 м.</p>
          <p>Доставка до 500 км: 0 руб.</p>
          <p>Оплата: без предоплаты</p>
          <p>Стоимость проекта указана со сборкой!</p>
          <button>Заказать</button>
        </div>
        <div class="general__full-construction">
          <p>Под ключ</p>
          <p>Цены:</p>
          <div class="general__full-construction-price">
            <p v-for="(price, key) in house.prices.fullConstruction" :key="key">
              <span> {{ formattedPrice(price.price) }} Р</span> ({{
                sizes[price.sizeId]
              }}
              под ключ)
            </p>
          </div>

          <p>Этажность: 1 этаж + мансарда.</p>
          <p>Жилая площадь: 84 м.кв.</p>
          <p>Срок строительства: 12-14 дней</p>
          <p>Размеры в плане: 7-8 м.</p>
          <p>Доставка до 500 км: 0 руб.</p>
          <p>Оплата: без предоплаты</p>
          <p>Стоимость проекта указана со сборкой!</p>
          <button>Заказать</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./ss-house.js"></script>
