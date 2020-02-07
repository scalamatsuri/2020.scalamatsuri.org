<i18n>
  en:
    title: "checkin code"
    description: "Please enter your checkin code"
  ja:
    title: "チェックインコード"
    description: "チケット購入時に発行されたチェックインコードを入力してください。"
</i18n>

<template>
  <div class="dialog__backdrop">
    <div class="dialog">
      <span class="dialog__title">
        チェックインコード
      </span>

      <span class="dialog__description">
        チケット購入時に発行されたチェックインコードを入力してください。
      </span>

      <form class="dialog__form">
        <input type="text" class="form__input" placeholder="チェックインコードを入力">
        <button type="submit" class="form__submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dialog__backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
}

</style>
