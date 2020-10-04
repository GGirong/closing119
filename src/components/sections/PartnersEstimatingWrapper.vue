<template>
    <div class="page-wrapper section-space--inner--120">
            <div class="project-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="project-item-wrapper">
                                <div class="row">
                                    <div class="col-lg-12 col-sm-12 col-12 section-space--bottom--30" v-for="est in estData.slice().reverse()" :key="est.id">
                                        <EstimatingGrid 
                                        :estData="est"
                                        @go-detail="goDetail"
                                        />
                                    </div>
                                    <div class="col-lg-4 col-sm-6 col-12 section-space--bottom--30" v-if="emptyEsting" style="margin: 0 auto; text-align: center">
                                        진행 중인 견적이 없습니다.
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
    import EstimatingGrid from '../EstimatingGrid'
    import EventBus from '../../main.js'

    import axios from 'axios'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            EstimatingGrid
        },
        data() {
            return {
                estData: null,
                emptyEsting: false
            }
        },
        methods: {
            goDetail (estId) {
                console.log("디테일로 떠납니다.")
                console.log(estId)
                this.$router.push({name: 'EstimatingDetail', params: {estId: estId}})
            }
        },
        computed: mapGetters([
            'getPartner',
        ]),
        async mounted() {
            console.log("래퍼 마운티드")
            console.log(this.id)
            await axios.get('https://new-api.closing119.com/api/estimating/', {params: {partner: this.getPartner}}).then(res=>{
                console.log(res.data)
                this.estData = res.data
                if(res.data.length == 0) {
                    this.emptyEsting = true
                }
            })
        }

    };
</script>

<style lang="scss">

</style>