<template>
  <header id="navBar" class="sticky-top header-fixed" :class="toggleNavClass()">
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="/"><img src="../assets/image/mark-blood-icon.png"  width="56" height="56"/><span class="font-effect-fire">NoblyWorld</span> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :class="isPath('/')?'nav-link':''" :to="{ name: 'home'}"> Mint </router-link>
            </li>
            <li class="nav-item">
              <router-link :class="isPath('/about')?'nav-link':''" :to="{ name: 'about'}"> About </router-link>
            </li>
            <li class="nav-item">
              <router-link :class="isPath('/market')?'nav-link':''" :to="{ name: 'market'}"> Market </router-link>
            </li>    
          </ul>
          <div class="actions ms-auto">
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
    toggleNavbr() {
      var toggler = document.getElementById('navbar');
      alert('togglenab');
    },
    toggleNavClass() {
      return this.headerFix;
    }
  }
}
</script>

<style>
/* 
#navBar {
  background-color: #14141f;
  border-bottom: 1px solid rgba(235, 235, 235, 0.2);
}

#navBar.fixed-nav {
  transition: 300ms;
}

#navBar.sticky-nav {
  border: 0;
  background-color: #14141f;
  box-shadow: 0px 3px 15px -5px rgb(121 121 120 / 88%);
  transition: 300ms;
  padding: 0 5px;
}

.navbar-brand {
  font-family: Hurricane;
  font-size: 30px;
} */

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
  font-family: 'Helvetica';
}

.connected button::after {
  background-color:#46d794!important
}

</style>
