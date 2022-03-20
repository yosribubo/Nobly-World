<template>
  <div>
    <DinoModal :market="false" />
    <WalletModal v-show="isModalOpen" />
    <navbar />
    <section>
        <div class="index nobly">
            <div class="container">
                <div class="index-header">
                    <h3>MY DINOS</h3>
                </div>
                <div class="row item-details">
                  <div class="col-md-12 col-xl-6 item-details-left">
                      <div class="content-left item-img">
                        <img src="@/assets/image/baby.svg" alt=""/>
                      </div>
                  </div>
                  <div class="col-md-12 col-xl- item-details-right">
                    <div class="content-right item-contents">
                      <div class="row item-title">
                        <div class="col-12">
                          <h2> “The Fantasy Flower illustration ” </h2>
                        </div>
                      </div>
                      <div class="item-infor">
                        <div class="row item-owner mb-3">
                          <div class="col-md-6 col-xl-6">
                            <div class="meta-info">
                              <div class="author">
                                  <div class="avatar" style="width: 44px; height: 44px;">
                                      <img src="../assets/image/avatar/avt-8.jpg" alt="">
                                  </div>
                                  <div class="info">
                                      <span>Owned By</span>
                                      <h6> <a href="author02.html">Ralph Garraway</a> </h6>
                                  </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-xl-6">
                            <div class="meta-info">
                              <div class="author">
                                  <div class="avatar" style="width: 44px; height: 44px;">
                                      <img src="../assets/image/avatar/avt-8.jpg" alt="">
                                  </div>
                                  <div class="info">
                                      <span>Create By</span>
                                      <h6> <a href="author02.html">Freddie Carpenter</a> </h6>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row item-desc mb-3">
                          <p style="color: white;"> Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget.
                                        Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada.
                                        Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget.
                                        Facilisi lobortisal morbi fringilla urna amet sed ipsum</p>
                        </div>
                        <div class="row item-price mb-3">
                          <div class="col-md-6 col-xl-6">
                            <div class="meta-info">
                              <div class="price">
                                <div class="heading">Current Buy</div>
                                <div class="price-box">
                                  <h5>4.9ETH</h5>
                                  <span>&nbsp;=&nbsp;$12.246</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-xl-6">
                            <div class="meta-info">
                              <div class="count-down">
                                <div class="heading">Countdown</div>
                                <span>4:15:02</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <a href="#" class="nobly-button">Place a Buy</a>
                        </div>
                        <div class="row item-attr">
                          <div class="header py-1">
                            <span class="heading">
                              Attribute
                            </span>
                          </div>
                          <div class="row item-option">
                            <div class="col-3">
                              TIER
                            </div>
                            <div class="col-9">
                              COMMON
                            </div>
                          </div>
                          <div class="row item-option">
                            <div class="col-3">
                              COLOR
                            </div>
                            <div class="col-9">
                              GREEN AND YELLOW
                            </div>
                          </div>
                          <div class="row item-option">
                            <div class="col-3">
                              EYES
                            </div>
                            <div class="col-9">
                              ORIGINAL
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>                
            </div>
        </div>
    </section>
    <section>
      <div class="item-relations container" style="color: white;">
        <div class="row index-header">
          <h3>Relation NFTs</h3>
        </div>
        <nft-card />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { shortenAddress } from '../utils'
// import DinoCard from '../components/DinoCard.vue'
import Navbar from '../components/Navbar.vue'
import DinoModal from './DinoModal.vue'
import WalletModal from '../components/WalletModal/index.vue'
import NftCard from '../components/NftCard.vue'

export default {
  computed: mapState([
    'isModalOpen',
    'account',
    'wrongChainId',
    'totalSupply',
    'minting',
    'myDinos'
  ]),
  components: { Navbar, DinoModal, WalletModal, NftCard },
  methods: {
    ...mapActions(['connectWallet', 'connectNetwork']),
    ...mapMutations(['openWalletModal', 'setMinting', 'AddTransaction']),
    ...mapGetters(['useMintContract']),
    shortenAddress
  }
}
</script>

<style>

.item-details {
  .item-contents {

  }
}

.item-details .content-right {
}
.item-details .content-left {
 }

.item-details .item-img {

}

. .item-infor {
  
}

.item-details .item-title {
  font-size: 1.2rem;
}

.card-content .tag-list-item {
  padding:7px 5px
}

.no-data {
  color:#fff;
  text-align: center;
  font-size: 30px;
  line-height: 60px;
}

html {
  min-height: 100% !important;
    height: 100%;
}
</style>
