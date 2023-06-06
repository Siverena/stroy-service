<template>
  <div class="ss-header">
    <div class="container ss-header__container">
      <div class="ss-header__top">
        <div class="ss-header__social">
          <p class="ss-header__social-sub">
            Подписывайся на нас <br />
            <span> в соцсетях</span>
          </p>
          <ssSocial />
        </div>
        <div class="ss-header__trust">
          <img
            src="../../assets/img/ss-header/shield_icon_185994.png"
            alt=""
            class="ss-header__trust-image"
          />
          <p>
            Нам доверяют <br />
            <span>гарантия качества</span>
          </p>
        </div>
        <div class="ss-header__call-back">
          <img
            src="../../assets/img/ss-header/megafon.png"
            alt=""
            class="ss-header__call-back-image"
          />
          <div class="ss-header__call-back-cont">
            <a href="tel:+77777777777" class="ss-header__call-back-tel"
              >+7 777 777 77 77</a
            >
            <a href="" class="ss-header__call-back-ring">Заказать звонок</a>
          </div>
        </div>
      </div>
      <div class="ss-header__middle">
        <div class="ss-header__logo-cont">
          <router-link to="/">
            <img
              src="../../assets/img/ss-header/logo.svg"
              alt=""
              class="ss-header__logo"
            />
          </router-link>
          <SsBtn class="ss-header__add-task">Оставить заявку</SsBtn>
        </div>
        <div class="ss-header__quality">
          <img
            src="../../assets/img/ss-header/key.png"
            alt=""
            class="ss-header__quality-img"
          />
          <p class="ss-header__quality-text">
            Строительсто деревянных <br />
            домов под ключ
          </p>
        </div>
        <div class="ss-header__quality">
          <img
            src="../../assets/img/ss-header/cup.png"
            alt=""
            class="ss-header__quality-img"
          />
          <p class="ss-header__quality-text">
            Большой опыт <br />
            успешной работы
          </p>
        </div>
      </div>
      <div class="ss-header__bottom">
        <div class="ss-header__advantages">
          <img
            src="../../assets/img/ss-header/lightning_thunderbolt_thunder_icon_185978.png"
            alt=""
            class="ss-header__advantages-image"
          />
          <p class="ss-header__advantages-text">Собственное производство</p>
        </div>
        <div class="ss-header__advantages">
          <img
            src="../../assets/img/ss-header/pins_placeholders_location_map_markers_geolocation_address_icon_185988.png"
            alt=""
            class="ss-header__advantages-image"
          />
          <p class="ss-header__advantages-text">Работаем по всей России</p>
        </div>
        <div class="ss-header__advantages">
          <img
            src="../../assets/img/ss-header/seal_stamp_inkpad_icon_185993.png"
            alt=""
            class="ss-header__advantages-image"
          />
          <p class="ss-header__advantages-text">
            Квалифицированные специалисты
          </p>
        </div>
        <div class="ss-header__advantages">
          <img
            src="../../assets/img/ss-header/hand_like_thumbs_up_icon_185975.png"
            alt=""
            class="ss-header__advantages-image"
          />
          <p class="ss-header__advantages-text">
            Гарантия <br />
            на все!
          </p>
        </div>
        <div class="ss-header__advantages">
          <img
            src="../../assets/img/ss-header/lock_padlock_security_icon_185979.png"
            alt=""
            class="ss-header__advantages-image"
          />
          <p class="ss-header__advantages-text">Максимальная комплектация</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./ss-header.js"></script>
