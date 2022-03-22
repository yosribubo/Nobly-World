<template>

  <div>
    <WalletModal v-show="isModalOpen" />
<transition name="fade" mode="out-in">
    <section>
        <navbar />
        <div class="banner">
            <div class="container">
                <div class="row justify-content-center">                  
                    <!-- <div class="col-lg-7"> -->
                      <div class="container">
                        <div class="row banner-content">
                          <div class="shape item-w-16"></div>
                          <div class="shape item-w-22"></div>
                          <div class="shape item-w-32"></div>
                          <div class="shape item-w-48"></div>
                          <div class="shape style2 item-w-51"></div>
                          <div class="shape style2 item-w-51 position2"></div>
                            <div class="content-top" style="z-index: 2;">
                                <div class="banner-mark">
                                  Nobly World
                                </div>
                                <div class="banner-desc">
                                  Unique Nobly World NFTs
                                </div>
                            </div>
                            <div class="element" style="z-index: 2;">
                                <div class="element-image">
                                    <img src="@/assets/image/nobly-world.gif" alt="">
                                </div>
                                <div class="element-box align-self-center">
                                    <div class="element-box-inner">
                                        <div class="element-box-inner-header">
                                            <a href="#" @click.prevent="decrease()">-</a>
                                            <span> {{ dino }}</span>
                                            <a href="#" @click.prevent="increase()">+</a>
                                        </div>
                                        <button @click="mint" :disabled="minting">Mint!</button>
                                    </div>
                                   <p class="force-white">
                                    {{ totalSupply }}/4,999 MINTED<br />
                                    1 AVAX EACH
                                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
          <footer id="footer" class="footer-light-style clearfix">
            <div class="themesflat-container" style="color:white;">
                <div class="row">
                    <div class="col-lg-3 col-md-12 col-12">
                        <div class="widget widget-logo">
                            <div class="logo-footer" id="logo-footer">
                                <a href="#">
                                    <img id="logo_footer" src="../assets/image/mark-blood-icon.png" alt="nft-gaming" width="56" height="56">
                                </a>
                                <span class="font-effect-fire">NoblyWorld</span>
                            </div>
                            <p class="sub-widget-logo">Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-5 col-5">
                        <div class="widget widget-menu style-1">
                            <h5 class="title-widget">My Account</h5>
                            <ul>
                                <li><a href="#">Authors</a></li>
                                <li><a href="#">Collection</a></li>
                                <li><a href="#">Author Profile</a></li>
                                <li><a href="#">Create Item</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-7 col-7">
                        <div class="widget widget-menu style-2">
                            <h5 class="title-widget">Resources</h5>
                            <ul>
                                <li><a href="#">Help & Support</a></li>
                                <li><a href="#">Live Auctions</a></li>
                                <li><a href="#">Item Details</a></li>
                                <li><a href="#">Activity</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-5 col-5">
                        <div class="widget widget-menu fl-st-3">
                            <h5 class="title-widget">Company</h5>
                            <ul>
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Our Blog</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-7 col-12">
                        <div class="widget widget-subcribe">
                            <div class="widget-social style-1 mg-t32">
                                <ul>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                    
                                    <li class="style-2"><a href="#"><i class="fab fa-telegram-plane"></i></a></li>
                                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                    <li class="mgr-none"><a href="#"><i class="fab fa-tiktok"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </footer><!-- /#footer -->
        </div>
    </section>

</transition>
     <router-view/>
    <!-- Dino Modal -->
    <dino-modal />

  </div>

</template>

<script>
import DinoModal from './DinoModal.vue'
import Navbar from '../components/Navbar.vue'

import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import WalletModal from '../components/WalletModal/index.vue'
import { shortenAddress } from '../utils'
import { ethers } from 'ethers'
import { connectors } from '../connectors'

export default {
  components: {
    Navbar,
    DinoModal,
    WalletModal
  },
  computed: mapState([
    'isModalOpen',
    'account',
    'wrongChainId',
    'totalSupply',
    'minting',
    'claim',
    'myDinos'
  ]),
  data () {
    return {
      dino: 1,
      headerFix: true
    }
  },
  mounted () {
    this.connectNetwork()
    this.connectWallet(connectors[0])
  },
  watch: {
    $route: {
      immediate: true,
      handler (to, from) {
        document.title = to.meta.title || 'Nobly World'
      }
    }
  },
  methods: {
    ...mapActions(['connectWallet', 'connectNetwork']),
    ...mapMutations(['openWalletModal', 'setMinting', 'AddTransaction']),
    ...mapGetters(['useMintContract']),
    shortenAddress,
    calculateGasMargin (value) {
      return value
        .mul(ethers.BigNumber.from(10000).add(ethers.BigNumber.from(1000)))
        .div(ethers.BigNumber.from(10000))
    },
    mint () {
      const contract = this.useMintContract()
      if (contract) {
        contract.estimateGas
          .mintNFT(this.dino, {
            value: ethers.utils.parseEther((this.dino * 1.5).toString())
          })
          .then((estimatedGas) => {
            contract
              .mintNFT(this.dino, {
                value: ethers.utils.parseEther((this.dino * 1.5).toString()),
                gasLimit: this.calculateGasMargin(estimatedGas)
              })
              .then((res) => {
                if (res.hash) {
                  this.AddTransaction({
                    hash: res.hash,
                    summery: `Minted ${this.dino} Dinos`
                  })
                  this.dino = 1
                  this.setMinting(false)
                  this.$toast.open('Transaction Confirmed !!')
                }
              })
              .catch((error) => {
                this.setMinting(false)
                console.error(error)
              })
          })
          .catch((error) => {
            this.setMinting(false)
            this.$toast.error(error.message)
            console.error(error)
          })
      } else {
        this.$toast.error('Please Connect Your Wallet')
      }
    },
    increase () {
      if (this.dino < 5) {
        this.dino += 1
      }
    },
    decrease () {
      if (this.dino > 1) {
        this.dino -= 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/transitions/fade/fade';
  @import '../styles/transitions/fade/fade-in-down';
  @import '../styles/transitions/fade/fade-in-right';
  @import '../styles/transitions/fade/fade-in-up';
  @import '../styles/transitions/fade/fade-in-left';

  p.force-white {
    color: #fff!important;
    text-shadow: 0px 3px 1px #000!important;
  }


  .banner {
    background-position: inherit!important;
  }

   .banner-content {
    padding-bottom  : 0;
    justify-content : space-evenly!important
  }

  .banner .content-top {
    padding-top :50px;
  }

  .banner .banner-mark {
    font-family   : Georgia, serif;
    font-size     : 80px;
    color         : #ea5736;
    font-style    : italic;
    font-weight   : 600;
    text-shadow   : 5px 5px 5px #ff8;
    margin-bottom : 30px;
  }

  .banner .banner-desc {
    font-family   : cursive;
    font-size     : 40px;
    color         : gray;
    text-shadow   : 1px 1px 0px #fff;
    text-transform: uppercase;
    margin-bottom : 20px;

  }

  body {
    background-size :cover;
  }

.fade-enter-active,
.fade-leave-active {
  transition-duration       : 0.3s;
  transition-property       : opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.shape{
    border-radius : 50%;
    z-index       : 1;
    position      : absolute;
    background    : linear-gradient(
                        216.56deg,#E250E5 5.32%,#4B50E6 94.32%);
}

.shape.style2 {
  background  : none;
  border      : 2px solid #E250E5;
}

.shape.item-w-16 {
    top       : 17.8%;
    right     : 51.8%;
    width     : 17px;
    height    : 17px;
    animation : move5 10s infinite linear;
}

.shape.item-w-22 {
    top: 73.3%;
    left: 30.6%;
    width: 22px;
    height: 22px;
    animation: move4 10s infinite linear;
}

.shape.item-w-32 {
    top: 68.7%;
    right: 26.1%;
    width: 32px;
    height: 32px;
    animation: move4 10s infinite linear;
}

.shape.item-w-48 {
    top: 50.8%;
    right: 47.7%;
    width: 48px;
    height: 48px;
    animation: move3 10s infinite linear;
}

.shape.item-w-51 {
    top: 15.5%;
    right: 33.4%;
    width: 51px;
    height: 51px;
    animation: move3 10s infinite linear;
}

.shape.item-w-51.position2 {
    top: 33.8%;
    left: 29.8%;
}

@keyframes move3 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  50% {
    -webkit-transform: translate(30px);
    transform: translate(30px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
@keyframes move4 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  50% {
    -webkit-transform: translate(-30px);
    transform: translate(-30px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
@keyframes move5 {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .shape {
    display: none !important;
  }
}
</style>
