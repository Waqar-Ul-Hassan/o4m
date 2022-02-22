<template>
  <div class="container">
    <a
      href="https://www.paypal.com/donate/?hosted_button_id=NTU697EW88QFW"
      target="_blank"
    >
      <button class="donation-button">Donate</button>
    </a>
  </div>
</template>

<style lang="stylus" scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 23px;
}

.donation-button {
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 0.25rem;
  background-color: #E2E8F0;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #CBD5E0;
}
</style>