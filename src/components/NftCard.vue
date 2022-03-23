
<template>
    <div>
        <div class="row my-5">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div class="card">
                    <div>
                        <div class="card-img">
                            <router-link :class="isPath('/detail')?'nav-link':''" :to="{ name: 'detail'}"> 
                                <img src="@/assets/image/nft/nft2.jpg" alt="" class="img-thumbnail img-fluid"/>
                            </router-link>
                        </div>
                        <div class="card-content">
                            <div class="card-content-header">
                               <a href="#"><h5>Nobly NFT #2</h5></a>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="row author">
                                            <div class="content-text-tip content-left"> Creator </div>
                                            <div class="content-text content-text-bold content-left"> <a href="#">SalvadorDail </a></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="content-text-tip content-right">Current Bid</div>
                                    <div class="content-text content-text-bold content-right">4.89ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div class="card">
                    <div>
                        <div class="card-img">
                            <router-link :class="isPath('/detail')?'nav-link':''" :to="{ name: 'detail'}"> 
                                <img src="@/assets/image/nft/nft3.jpg" alt="" class="img-thumbnail img-fluid"/>
                            </router-link>
                        </div>
                        <div class="card-content">
                            <div class="card-content-header">
                               <a href="#"><h5>Nobly NFT #2</h5></a>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="row author">
                                            <div class="content-text-tip content-left"> Creator </div>
                                            <div class="content-text content-text-bold content-left"> <a href="#">SalvadorDail </a></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="content-text-tip content-right">Current Bid</div>
                                    <div class="content-text content-text-bold content-right">4.89ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div class="card">
                    <div>
                        <div class="card-img">
                            <router-link :class="isPath('/detail')?'nav-link':''" :to="{ name: 'detail'}"> 
                                <img src="@/assets/image/nft/nft4.png" alt="" class="img-thumbnail img-fluid"/>
                            </router-link>
                        </div>
                        <div class="card-content">
                            <div class="card-content-header">
                               <a href="#"><h5>Nobly NFT #3</h5></a>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="row author">
                                            <div class="content-text-tip content-left"> Creator </div>
                                            <div class="content-text content-text-bold content-left"> <a href="#">SalvadorDail </a></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="content-text-tip content-right">Current Bid</div>
                                    <div class="content-text content-text-bold content-right">4.89ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div class="card">
                    <div>
                        <div class="card-img">
                            <router-link :class="isPath('/detail')?'nav-link':''" :to="{ name: 'detail'}"> 
                                <img src="@/assets/image/nft/nft5.jpg" alt="" class="img-thumbnail img-fluid"/>
                            </router-link>
                        </div>
                        <div class="card-content">
                            <div class="card-content-header">
                               <a href="#"><h5>Nobly NFT #2</h5></a>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="row author">
                                            <div class="content-text-tip content-left"> Creator </div>
                                            <div class="content-text content-text-bold content-left"> <a href="#">SalvadorDail </a></div>
                                    </div>
                                </div>
                                <div class="col-6">
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

<script>
    import { mapState } from 'vuex';
    export default {
        computed: mapState([
            'isModalOpen',
            'account',
            'wrongChainId',
            'totalSupply',
            'minting',
        ]),
        methods: {
            isPath (par) {
                if (this.$router.history.current.path === par) {
                    return true
                } else {
                    return false
                }
            },
        }
    }
</script>

<style lang="scss">
    .card {
        border: none;
    }

    
    
</style>