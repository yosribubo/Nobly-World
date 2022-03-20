
<template>
    <div>
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div class="card">
                    <div>
                        <div class="card-img">
                            <img src="@/assets/image/baby.svg" alt=""/>
                        </div>
                        <div class="card-content">
                            <div class="card-content-header">
                                <h5>Nobly NFT #1</h5>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-xl-8">
                                    <div class="row author">
                                        <div class="col-md-12 col-xl-4 avatar">
                                            <img src="../assets/image/avatar/wall-e.png" alt="" style="border: 1px solid;"/>
                                        </div>
                                        <div class="col-md-12 col-xl-8">
                                            <div class="content-text-tip content-left"> Creator </div>
                                            <div class="content-text content-text-bold content-left"> SalvadorDail </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-xl-4">
                                    <div class="content-text-tip content-right">Current Bid</div>
                                    <div class="content-text content-text-bold content-right">4.89ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div class="card">
                    <div>
                        <div class="card-img">
                            <img src="@/assets/image/baby.svg" alt=""/>
                        </div>
                        <div class="card-content">
                            <div class="card-content-header">
                                <h5>Nobly NFT #2</h5>
                            </div>
                            <div class="row">
                                <div class="col-8">
                                    <div class="row author">
                                        <div class="col-4 avatar">
                                            <img src="../assets/image/avatar/wall-e.png" alt="" style="border: 1px solid;"/>
                                        </div>
                                        <div class="col-8">
                                            <div class="content-text-tip content-left"> Creator </div>
                                            <div class="content-text content-text-bold content-left"> SalvadorDail </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="content-text-tip content-right">Current Bid</div>
                                    <div class="content-text content-text-bold content-right">4.89ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div class="card">
                    <div>
                        <div class="card-img">
                            <img src="@/assets/image/baby.svg" alt=""/>
                        </div>
                        <div class="card-content">
                            <div class="card-content-header">
                                <h5>Nobly NFT #3</h5>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-xl-8">
                                    <div class="row author">
                                        <div class="col-md-12 col-xl-4 avatar">
                                            <img src="../assets/image/avatar/avt-11.jpg" alt="" style="border: 1px solid;"/>
                                        </div>
                                        <div class="col-md-12 col-xl-8">
                                            <div class="content-text-tip content-left"> Creator </div>
                                            <div class="content-text content-text-bold content-left"> SalvadorDail </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-xl-4">
                                    <div class="content-text-tip content-right">Current Bid</div>
                                    <div class="content-text content-text-bold content-right">4.89ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div class="card">
                    <div>
                        <div class="card-img">
                            <img src="@/assets/image/baby.svg" alt=""/>
                        </div>
                        <div class="card-content">
                            <div class="card-content-header">
                                <h5>Nobly NFT #4</h5>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-xl-8">
                                    <div class="row author">
                                        <div class="col-md-12 col-xl-4 avatar">
                                            <img src="../assets/image/avatar/avt-11.jpg" alt="" style="border: 1px solid;"/>
                                        </div>
                                        <div class="col-md-12 col-xl-8">
                                            <div class="content-text-tip content-left"> Creator </div>
                                            <div class="content-text content-text-bold content-left"> SalvadorDail </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-xl-4">
                                    <div class="content-text-tip content-right">Current Bid</div>
                                    <div class="content-text content-text-bold content-right">4.89ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

import { mapState } from 'vuex'
export default {
    computed: mapState([
    'isModalOpen',
    'account',
    'wrongChainId',
    'totalSupply',
    'minting',
    'myDinos',
    'marketPlaceItems'
  ])
}

<style lang="scss">
    .card {
        border: none;
    }
    
</style>