<template>
  <div
    class="breadcrumb-area bg-img"
    :style="{ backgroundImage: `url(${items.image})` }"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="page-banner text-center">
            <h1>{{ title }}</h1>
            <h3>{{ items.text1 }}</h3>
            <h3>{{ items.text2 }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "title"],
};
</script>
