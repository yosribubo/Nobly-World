
<template>
  <header id="navBar" class="sticky-top header-fixed" :class="toggleNavClass()">
    <nav class="navbar navbar-expand-lg navbar-dark" v-bind:class=" { 'navbarOpen': show }">
      <div  id="nav_1" class="container pt-1 px-5">
        <a class="navbar-brand" href="/">LOGO of SITE</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                    <router-link :class="isPath('/')?'nav-link':''" :to="{ name: 'home'}"> Mint </router-link>
                </li>
                <li class="nav-item">
                  <router-link :class="isPath('/details')?'nav-link':''" :to="{ name: 'details'}"> About </router-link>
                </li>                
                <li class="nav-item">
                  <router-link :class="isPath('/market')?'nav-link':''" :to="{ name: 'market'}"> Market </router-link>
                </li>
                <li class="nav-item">
                  <router-link :class="isPath('/my-dinos')?'nav-link':''" :to="{ name: 'my-dinos'}"> My Dinos </router-link>
                </li>
            </ul>
            <div class="actions mr-auto">
              <div class="connect-box disconnected" :class="account?'connected':'not'">
                  <button @click="openWalletModal">
                    {{
                        wrongChainId
                        ? 'Wrong Network'
                        : account
                        ? shortenAddress(account)
                        : 'Connect Wallet'
                    }}
                  </button>
              </div>
            </div>
        </div>
      </div>        
    </nav>
  </header>
    
</template>

<script>

import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { shortenAddress } from '../utils'
import { ethers } from 'ethers'

export default {
  computed: mapState([
    'isModalOpen',
    'account',
    'wrongChainId',
    'totalSupply',
    'minting'
  ]),
  data () {
    return {
      dino: 1,
      headerFix: false,
      show: true
    }
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
    isPath (par) {
      if (this.$router.history.current.path === par) {
        return true
      } else {
        return false
      }
    },
    isHome () {
      if (this.$router.history.current.path !== '/') {
        document.body.classList.add('body-pad')
      } else {
        document.body.classList.remove('body-pad')
      }
    },
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
        this.setMinting(true)
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
    },
    toggleNavbar() {
      this.show = !this.show
    },
    toggleNavClass() {
      if (this.headerFix == false) {
        return 'fixed-nav';
      } else {
        return 'sticky-nav';
      }
    }
  },
  mounted() {
    window.document.onscroll = () => {
      let navBar = window.document.getElementById('navBar');
      if (window.scrollY > navBar.offsetTop + 20) {
        this.headerFix = true;
      } else {
        this.headerFix = false;
      }
    }
  }
}
</script>

<style>

#navBar {
  background-color: unset;
  border-bottom: 1px solid rgba(235, 235, 235, 0.2);
}

#navBar.fixed-nav {
  transition: 500ms;
}

#navBar.sticky-nav {
  border: 0;
  background-color: #14141f;
  box-shadow: 0px 3px 15px -5px rgb(121 121 120 / 88%);
  transition: 800ms;
  padding: 0 5px;
}

.disabled {
    opacity: 0.5;
    pointer-events: none;
}

.disabled2 {
    pointer-events: none;
}

.menuActive {
  color:#fff!important;
}

.connect-box button {
  font-family: $font;
}

.connected button::after {
  background-color:#46d794!important
}

</style>
