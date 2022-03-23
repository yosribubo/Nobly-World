<template>
    <div id="footer" class="footer-light-style clearfix">
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
        }
    }
</script>