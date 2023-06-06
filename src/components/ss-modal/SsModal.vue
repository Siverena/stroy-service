<template>
  <div class="overlay" @click.self="this.$store.commit('closeModal')">
    <div class="modal">
      <header class="modal__header">Оформление заказа</header>
      <p class="modal__item-name">
        Проект дома <a href="#" class="modal__item-link">R-13467</a>
      </p>
      <label for="fio" class="modal__label">ФИО<span> *</span></label>
      <input
        type="text"
        name="fio"
        id="fio"
        placeholder="Как к Вам обращаться?"
        class="modal__input"
        required
      />
      <label for="email" class="modal__label">Ваш Email<span> *</span></label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Что бы мы могли прислать Вам расчет"
        class="modal__input"
        required
      />
      <label for="phone" class="modal__label"
        >Ваш номер телефона<span> *</span></label
      >
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Чтобы мы могли быстро уточнить детали"
        class="modal__input"
        required
      />
      <label class="modal__label" for="comment">Комментарий к заявке</label>
      <textarea
        name="comment"
        id="comment"
        placeholder="Укажите интересующий проект или описание к собственному проект"
        class="modal__input modal__input--textarea"
      ></textarea>
      <SsBtn @click="submit" class="modal__send-btn">Отправить заявку</SsBtn>
      <SsBtn class="ss-btn--grey" @click="this.$store.commit('closeModal')"
        >Назад</SsBtn
      >
    </div>
  </div>
</template>
<script src="./ss-modal.js"></script>
