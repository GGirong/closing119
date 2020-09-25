<template>
    <div class="service-grid-item service-grid-item--style2">
        <div class="service-grid-item__content">
            <h3 class="title">
                <router-link to="/project-details">
                    {{ estData.client.client_name }}
                </router-link>
            </h3>
            <p class="subtitle">{{ estData.client.address }}</p>
            <p class="subtitle">{{ estData.status}}</p>
            <div class="see-more-link" @click="$emit('go-detail', estData.client.id)">자세히 보기</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['estData'],
        components: {
        },
        data(){
            return {
                modal: false
            }
        },
    };
</script>

<style lang="scss">

</style>