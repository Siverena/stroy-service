<template>
  <div class="ss-modal-overlay" @click.self="this.$store.commit('closeModal')">
    <div class="ss-modal">
      <header class="ss-modal__header">Оформление заказа</header>
      <p class="ss-modal__item-name">
        Проект дома <a href="#" class="ss-modal__item-link">R-13467</a>
      </p>
      <label for="fio" class="ss-modal__label">ФИО<span> *</span></label>
      <input
        type="text"
        name="fio"
        id="fio"
        placeholder="Как к Вам обращаться?"
        class="ss-modal__input"
        required
      />
      <label for="email" class="ss-modal__label"
        >Ваш Email<span> *</span></label
      >
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Что бы мы могли прислать Вам расчет"
        class="ss-modal__input"
        required
      />
      <label for="phone" class="ss-modal__label"
        >Ваш номер телефона<span> *</span></label
      >
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Чтобы мы могли быстро уточнить детали"
        class="ss-modal__input"
        required
      />
      <label class="ss-modal__label" for="comment">Комментарий к заявке</label>
      <textarea
        name="comment"
        id="comment"
        placeholder="Укажите интересующий проект или описание к собственному проект"
        class="ss-modal__input ss-modal__input--textarea"
      ></textarea>
      <SsBtn @click="submit" class="ss-btn--green ss-modal__send-btn"
        >Отправить заявку</SsBtn
      >
      <SsBtn class="ss-btn--grey" @click="this.$store.commit('closeModal')"
        >Назад</SsBtn
      >
    </div>
  </div>
</template>
<script src="./ss-modal.js"></script>
