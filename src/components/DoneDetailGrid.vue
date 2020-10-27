<template>
    <div class="service-grid-item service-grid-item--style2">
        <div class="service-grid-item__content">
            <h3 class="title">
                <div to="/project-details">
                    {{ estData.partner.partner_name }} 
                </div>
            </h3>
            <p class="subtitle">{{ estData.status }}</p>
            <p class="subtitle">{{ estData.total_price }}원</p>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        props: ['estData'],
        data(){
            return {
                modal: false,
                selectEstData: {}
            }
        },
        mounted() {
        }
    };
</script>

<style lang="scss">

</style>