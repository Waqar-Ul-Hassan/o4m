<template>
  <div class="container">
    <!-- <p class="demo">
      {{ msg }}
    </p> -->
    <button class="donation-button">Donate</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello this is <demo-1>",
    };
  },
};
</script>


<style lang="stylus" scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-block: 16px;
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