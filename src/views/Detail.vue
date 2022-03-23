<template>
  <div>
    <DinoModal :market="false" />
    <WalletModal v-show="isModalOpen" />
    <navbar />
    <section>
        <div class="index nobly">
            <div class="container">
                <div class="index-header">
                    <h3>NFT Details</h3>
                </div>
                <div class="row item-details">
                  <div class="col-md-12 col-xl-6">
                      <div class="content-left item-img">
                        <img src="@/assets/image/nft/nft1.jpg" alt=""/>
                      </div>
                  </div>
                  <div class="col-md-12 col-xl-6">
                    <div class="content-right item-contents">
                      <div class="row item-title">
                        <div class="col-12">
                          <h2> The Nobly iPhone NFT </h2>
                        </div>
                      </div>
                      <!-- <div class="row">
                        <div class="col-6 d-flex">
                          <div class="me-auto"><i class="fa fa-eye" aria-hidden="true"></i>225</div>
                          <div class=""></div>
                        </div>
                        <div class="col-6 d-flex">
                          right
                        </div>
                      </div> -->
                      <div class="item-infor">
                        <div class="row item-owner">
                          <div class="ol-sm-12 col-md-6">
                            <div class="meta-info">
                              <div class="author">
                                  <!-- <div class="avatar" style="width: 44px; height: 44px;">
                                      <img src="../assets/image/avatar/avt-8.jpg" alt="">
                                  </div> -->
                                  <div class="info">
                                      <span>Owned By</span>
                                      <h6> <a href="#">Ralph Garraway</a> </h6>
                                  </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm- 12 col-md-6">
                            <div class="meta-info">
                              <div class="author">
                                  <!-- <div class="avatar" style="width: 44px; height: 44px;">
                                      <img src="../assets/image/avatar/avt-8.jpg" alt="">
                                  </div> -->
                                  <div class="info">
                                      <span>Create By</span>
                                      <h6> <a href="#">Freddie Carpenter</a> </h6>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row item-desc">
                        <div> Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget.
                                      Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada t sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget.
                                      Facilisi lobortisal morbi fringilla urna amet .
                                     </div>
                      </div>
                      <div class="row item-price">
                        <div class="col-sm-12 col-md-7">
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
                        <div class="col-sm-12 col-md-5">
                          <div class="meta-info">
                            <div class="count-down">
                              <div class="heading">Countdown</div>
                              <span>4:15:02</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row item-button">
                        <a href="#" class="nobly-button">Place a Buy</a>
                      </div>
                      <div class="row item-attr">
                        <div class="header py-1">
                          <span class="heading">
                            Attribute
                          </span>
                        </div>
                        <div class="row item-option">
                          <div class="col-2">
                            <div class="attr-title">
                              ATTR-1
                            </div>                            
                          </div>
                          <div class="col-10">
                              <div class="attr-content">
                                Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget icitudin faucibus cursus le.
                              </div>
                          </div>
                        </div>
                        <div class="row item-option">
                          <div class="col-2">
                            <div class="attr-title">
                              ATTR-2
                            </div>                            
                          </div>
                          <div class="col-10">
                              <div class="attr-content">
                                Abitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget.
                                      Facilisi lobortisal morbi fr icitudin faucibus cur.
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>                
            </div>
        </div>
        <div class="index detail">          
          <div class="container">
            <div class="index-header">
                <h3>Related NFTs</h3>
            </div>
            <div class="row">
              <nft-card />
            </div>
            
          </div>
        </div>
        
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { shortenAddress } from '../utils'
// import DinoCard from '../components/DinoCard.vue'
import NftCard from '../components/NftCard.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import DinoModal from './DinoModal.vue'
import WalletModal from '../components/WalletModal/index.vue'
export default {
  computed: mapState([
    'isModalOpen',
    'account',
    'wrongChainId',
    'totalSupply',
    'minting',
    'myDinos'
  ]),
  components: { Navbar, NftCard, DinoModal, WalletModal, Footer },
  methods: {
    ...mapActions(['connectWallet', 'connectNetwork']),
    ...mapMutations(['openWalletModal', 'setMinting', 'AddTransaction']),
    ...mapGetters(['useMintContract']),
    shortenAddress
  }
}
</script>

<style>

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

.detail.index {
  padding-top: 30px!important;
  padding-bottom: 30px!important;
}
</style>
