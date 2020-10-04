<template>
    <div class="page-wrapper section-space--inner--120">
            <div class="project-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="project-item-wrapper">
                                <div class="row"> 
                                    <div class="col-12 section-space--bottom--30" v-for="est in estData.Estimate" :key="est.id">
                                        <EstimateGrid  
                                        :estData="est"
                                        :clientId = "estData.client.id"
                                        @setclientstatus ="setClientData"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import data from '../../data/project.json'
    import EstimateGrid from '../EstimateGrid'
    import EventBus from '../../main.js'

    export default {
        props: ['estData'],
        components: {
            EstimateGrid
        },
        data() {
            return {
                data,
                eventbt: '1234'
            }
        },
        methods: {
            setClientData(code) {
                this.$emit('setstatus', code)
            }
        },
    };
</script>

<style lang="scss">

</style>