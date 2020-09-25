<template>
    <div class="service-grid-item">
        <div class="service-grid-item__image">
            <div class="service-grid-item__image-wrapper" >
                <img
                :src="'http://tmdgud1112.pythonanywhere.com'+ this.client.imageurl"
                height="150px"
                />
            </div>
        </div>
        <div class="service-grid-item__content">
            <h3 class="title">
                <router-link to="/service-details">
                    {{ client.business_name }}
                </router-link>
            </h3>
            <div class="main-client-container">
                <div class="main-client-title">
                    주소
                </div>
                <div class="main-client-content">
                    {{ client.address}}
                </div>
                <div class="main-client-content">
                    {{ client.py}} 평
                </div>
            </div>
            
            <router-link class="see-more-link" style="margin-top: 15px" to="/service-details">자세히 보기</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['client'],
        computed: {
            imageUrl() {
                return 'http://tmdgud1112.pythonanywhere.com' + this.client.imageurl
            },
        },
        mounted() {
            console.log(this.client)
        }
    };
</script>

<style>
.main-client-grid-container {
}
.main-client-title {
    margin-top: 15px;
    font-weight: 600;
}
.main-client-content {
    margin-top: 10px;
    color: rgb(94, 84, 84)
}
</style>