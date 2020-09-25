<template>
  <div class="item-container" @click="setClient">
      <div class="item-head">
          <div class="head-left">
                <img 
                :src="'http://tmdgud1112.pythonanywhere.com' + source.images[0].image"
                width="150px"
                />
          </div>
          <div class="head-right">
                <div class="head-right-title">
                    상호명
                </div>
                <div class="head-right-item">
                    {{ source.business_name }}
                </div>
                <div class="head-right-title">
                    평수
                </div>
                <div class="head-right-item">
                    {{ source.py}}
                </div>
          </div>
          
      </div>
      <div class="item-address">
            <div class="head-right-title">
                주소
            </div>
            <div>
                {{ source.address}}
            </div>
      </div>
        
        
  </div>
</template>

<script>
  export default {
    name: 'item-component',
    props: {
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      },
    },
    methods: {
          setClient() {
              console.log("클릭함")
              this.$emit('setClientData', this.source)
          }
      }
  }
</script>

<style>
.item-container {
    height: 200px;
    padding: 20px;
    border-bottom: 1px solid #d4d4d4;
}
.item-head {
    display: flex;
}
.head-right {
    margin-left: 15px;
}
.head-right-title {
    font-size: 12px;
    color: gray
}
.item-address {
    margin-top: 10px
}
</style>