<template>
  <div>
    <WalletModal v-show="isModalOpen" />
    <navbar />
    <section>
        <div class="index nobly market-section">
            <div class="container">
                <div class="index-header market-header">
                    <h3>NoblyWorld Market</h3>
                </div>
                <div class="col-md-12" style="margin: 60px 0px 100px 0px;">
                  <div class="market-bg container">
                    <div class="market-filters row">
                        <div class="market-filter">
                            <vue-dropdown @setSelectedOption="setNewSelectedOption($event,'sortBy','sort')" :config="sortBy"></vue-dropdown>
                        </div>
                        <div class="market-filter">
                            <vue-dropdown @setSelectedOption="setNewSelectedOption($event,'Body','trait')" :config="Body"></vue-dropdown>
                        </div>
                        <div class="market-filter">
                            <vue-dropdown @setSelectedOption="setNewSelectedOption($event,'Head','trait')" :config="Head"></vue-dropdown>
                        </div>
                        <div class="market-filter">
                            <vue-dropdown @setSelectedOption="setNewSelectedOption($event,'Eyes','trait')" :config="Eyes"></vue-dropdown>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <!-- <dino-card :market="false" /> -->
                <nft-card />
                <nft-card />
            </div>
        </div>
    </section>
    <Footer />
    <!-- Dino Modal -->
    <dino-modal :market="true" />
  </div>
</template>

<script>
import VueDropdown from 'vue-dynamic-dropdown'
import { mapState } from 'vuex'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import DinoModal from './DinoModal.vue'
import DinoCard from '../components/DinoCard.vue'
import WalletModal from '../components/WalletModal/index.vue'
import NftCard from '../components/NftCard.vue'
export default {
  computed: mapState([
    'isModalOpen',
    'account',
    'wrongChainId',
    'totalSupply',
    'minting'
  ]),
  components: { Navbar, DinoCard, DinoModal, WalletModal, VueDropdown, NftCard, Footer },
  methods: {
    setNewSelectedOption (selectedOption, element, type) {
      this[element].placeholder = selectedOption.value
      this.$store.commit('SET_FILTER', { filter: 'sortBy', value: selectedOption.value, type: type })
    }
  },
  data: function () {
    return {
      sortBy: {
        options: [
           {
            value: 'test'
          },
          {
            value: 'test'
          },
          {
            value: 'test'
          }
        ],
        prefix: 'Sort1',
        backgroundColor: '#fff'
      },
      Body: {
        options: [
          {
            value: 'test'
          },
          {
            value: 'test'
          },
          {
            value: 'test'
          }
        ],
        prefix: 'Sort2',
        backgroundColor: '#fff'
      },
      Head: {
        options: [
          {
            value: 'test'
          },
          {
            value: 'test'
          },
          {
            value: 'test'
          }
        ],
        prefix: 'Sort3',
        backgroundColor: '#fff'
      },
      Eyes: {
        options: [
          {
            value: 'test'
          },
          {
            value: 'test'
          },
          {
            value: 'test'
          }
        ],
        prefix: 'Sort4',
        backgroundColor: '#fff'
      },
      Color: {
        options: [
          {
            value: 'test'
          },
          {
            value: 'test'
          },
          {
            value: 'test'
          }
        ],
        prefix: 'Color',
        backgroundColor: '#fff'
      },
      Mouth: {
        options: [
          {
            value: 'test'
          },
          {
            value: 'test'
          },
          {
            value: 'test'
          }
        ],
        prefix: 'Mouth',
        backgroundColor: '#fff'
      }
    }
  }
}
</script>

<style>


html {
  min-height: 100% !important;
    height: 100%;
}


</style>
