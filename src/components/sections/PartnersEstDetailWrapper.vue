<template>
    <div class="page-wrapper section-space--inner--60">
            <div class="project-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12"> 
                            <div class="project-item-wrapper section-space--bottom--40">
                                <div style="border: 1px solid #d4d4d4; padding: 25px">
                                    <div style="font-size:24px; font-weight:500; margin-bottom:15px">{{ estData.client.client_name}}님의 견적 요청서</div>
                                    <div style="margin-left:15px">연락처: <span style="margin-left:45px">{{ estData.client.phone_num}}</span></div>
                                    <div style="margin-left:15px">상호: <span style="margin-left:45px">{{ estData.client.business_name}}</span></div>
                                    <div style="margin-left:15px">주소: <span style="margin-left:45px">{{ estData.client.address}}</span></div>
                                    <div style="margin-left:15px">평수: <span style="margin-left:45px">{{ estData.client.py}}</span></div>
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

    export default {
        props: ['estData'],
        components: {
            EstimatingGrid
        },
        data() {
            return { 
                modal: null
            }
        },
        methods: {
            
        },
        async mounted() {
            console.log("디테일 뤠퍼 마운티드")
            console.log(this.estData)
        }

    };
</script>

<style lang="scss">

</style>