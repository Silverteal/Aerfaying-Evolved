// ==UserScript==
// @name         Dark Aerfaying
// @namespace    https://gitee.com/TimFangDev
// @version      1.4
// @description  Dark Aerfaying Theme User JS
// @author       TimFang4162, wrj2009
// @match        *://*.aerfaying.com/*
// @match        *://*.gitblock.cn/*
// @grant        GM_addStyle
// @updateURL    https://gitee.com/wrj2009/DAT/raw/master/Dark%20Aerfaying%20WRJ%20Fix.user.js
// ==/UserScript==

(function () {
  GM_addStyle(`
html {
  background-color: #06090F !important;
}
.menu-bar_topnav_3HgyJ {
  color: #fff !important;
  background-color: #06090FDD !important;
  -webkit-box-shadow: 0 2px 5px rgba(6,9,15, 0.5) !important;
  box-shadow: 0 2px 5px rgba(6,9,15, 0.5) !important;
  backdrop-filter: blur(20px);
}
body {
  background-color: #06090F !important;
  color: #eee !important;
}
.home_bgColor_Ffb4T {
  background-image: none !important;
}
h1 {
  color: #fff !important;
}
h2 {
  color: #fff !important;
}
h3 {
  color: #fff !important;
}
h4 {
  color: #fff !important;
}
h5 {
  color: #fff !important;
}
h6 {
  color: #fff !important;
}
.card_wrapper_2Sod3 {
  background: #0d1117 !important;
}
.project-card_body_3eTGL .project-card_title_2eD4- {
  color: #fff !important;
}
.project-card_footer_284gK {
  border-top: 1px solid #222 !important;
}
.project-card_owner_2Cok9 span:first-child {
  background: none !important;
}
.project-card_owner_2Cok9 img {
  background: none !important;
  border-color: #0d1117 !important;
}
.card_wrapper_2Sod3 .title {
  color: #eee !important;
}
.card_wrapper_2Sod3.card_vertical_1XmvA > a > img,
.card_wrapper_2Sod3.card_vertical_1XmvA > img {
  border-bottom: none !important;
}
.thumb-img_thumb-border_14aaQ {
  border: none !important;
}
.home_userCard_2HTEf {
  background: #0d1117 !important;
}
.user-card-large_card_2wUOq a {
  color: #eee !important;
}
.panel2_panel_1hPqt {
  background-color: #0d1117 !important;
}
.profile-head_wrapper_gzLFY {
  background-color: #0d1117 !important;
}
.profile-head_name_3PNBk {
  color: #fff !important;
}
.attached-items-bar_ItemIcon_2d2qJ {
  background-color: #06090f !important;
}
.profile-head_bitStones_1GFkj,
.profile-head_goldCoins_TxdJM > span {
  color: #eee !important;
}
.panel2_wrapper_3UZFE .panel2_panelHead_1Bn6y h2 {
  color: #fff !important;
}
.project-view_box_1Gq_t {
  background-color: #0d1117 !important;
}
.editable-text_body_2Qad2 .title {
  color: #fff !important;
}
.home_wrapper_2gKE7 {
  margin-top: calc(80px - 4rem) !important;
}
.home_bgUndefpainting_1oUZ1 > div:nth-child(2) > div:nth-child(1) {
  background-image: none !important;
}
.menu-bar_dropdown_1Nb_k {
  background: #06090F !important;
}
.menu-bar_dropdown_1Nb_k {
  box-shadow: none !important;
}
.menu-bar_dropdown_1Nb_k .arrow {
  border-bottom-color: #06090F !important;
}
ul.user-dropdown-menu_wrapper_3RsXx li a > span {
    border-left: none !important;
    border-right: none !important;
}
.comment_name_2ZnFZ {
  color: #eee !important;
}
.forum-post-view_wrapper_s5oGn {
  background: #0d1117 !important;
}
pre {
  color: #eee;
  background-color: #1e2227 !important;
  border: none !important;
}
.markdown_body_1wo0f table td,
.markdown_body_1wo0f table th {
  border: 1px solid #25272d !important;
}
.editable-text_body_2Qad2 .edit-btn {
  background: none !important;
}
.editable-tag-group-submission_add-tags_1M7eK > span,
.editable-tag-group-submission_tipsTags_fO36j > span,
.editable-tag-group-submission_wrapper_90m_g > span {
  border: 1px solid #aaa !important;
  background: none !important;
}
code {
  background-color: #f9f2f411 !important;
}
.forum-post-view_event_Mnv4G i {
  color: #eee !important;
  background-color: #0d1117 !important;
  border: 2px solid #1e2227 !important;
}
.forum-post-view_event_Mnv4G::before {
  background-color: #1e2227 !important;
}
.comment_mask_3MCUB {
  background: linear-gradient(hsla(0, 0%, 100%, 0), #0d1117) !important;
}
.comment-list_comment-list_3QYD4 > li {
  border-top: 1px solid #1e2227 !important;
}
.form-control {
  background-color: #0d1117 !important;
  border: 1px solid #1e2227 !important;
  color: #eee !important;
}
.btn-submit:hover,
.btn-submit:focus,
.btn-submit:active {
  border: 1px solid #1e2227 !important;
  background-color: #1e222744 !important;
}
.btn-submit {
  background: #1e222722 !important;
  border: 1px solid #1e2227 !important;
}
.btn-default {
  background-color: #1e222722 !important;
  border: 1px solid #1e2227 !important;
  color: #fff !important;
}
.btn-default:hover,
.btn-default:focus,
.btn-default:active {
  background-color: #1e222744 !important;
}
.btn-default.active,
.btn-default.focus,
.btn-default:active,
.btn-default:focus,
.btn-default:hover,
.open > .dropdown-toggle.btn-default {
  color: #fff !important;
  border-color: 1px solid #1e2227 !important;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background: #1D2026 !important;
  transition: ease-in 0.2s background;
}
.btn-primary {
  background: #0d1117 !important;
  border: 1px solid #4c97ff11 !important;
}
.forum-post-view_eventLog_1UwJy {
  border-bottom: 1px solid #1e2227 !important;
}
.forum-post-view_postContent_309bd {
  border-bottom: 1px solid #1e2227 !important;
}
.forum-post-view_infoBar_k3IEq {
  border-bottom: 1px solid #1e2227 !important;
}
hr {
  border-top: 1px solid #1e2227 !important;
}
.editable-text_body_2Qad2 .content.eitable:hover {
  border: 1px dashed #555 !important;
}
.form-control {
  color: #fff;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:focus,
.nav-tabs > li.active > a:hover {
  border: none;
  color: #eee;
  background-color: #1e2227;
}
.nav-tabs > li > a:hover {
  border-color: #1e2227;
}
.nav > li > a:focus,
.nav > li > a:hover {
  background-color: #1e2227;
}
.nav-tabs {
  border-bottom: 1px solid #1e2227;
}
.editable-text_body_2Qad2 textarea {
  border: 1px solid #1e2227;
}
.project-view_box_1Gq_t {
  background: #0d1117 !important;
}
.studio-home-forum_studioCard_2nMK5 {
  background-color: #0d1117 !important;
}
.studio-home-forum_topWrapper_2UJZP {
  background: #0d1117 !important;
}
.studio-home-forum_nav_1_STH > .studio-home-forum_navItem_35Wc9 {
  color: #eee !important;
}
.studio-home-forum_card_3tQo7 {
  background: #0d1117 !important;
}
.studio-home-forum_nav_1_STH i {
  background: #0f1319 !important;
}
.studio-home-forum_arrow_3eVAt {
  border-top-color: #0d1117 !important;
}
.forum-post-card_card_3lvWt .title h2 {
  color: #eee !important;
}
.user-info_wrapper_2acbL {
  color: #888888 !important;
}
.tag-group_wrapper_37evO > span {
  background: #0d1117 !important;
}
.panel-top-bar_body_1OptA .search-group > * {
  border-color: #1e2227 !important;
}
.panel-top-bar_body_1OptA .search-group button.btn-search {
  background: #0f1319 !important;
}
.form-control {
  background-color: #0f1319 !important;
}
.forum_forumPosts_nh9dW li + li {
  border-top: 1px solid #1e2227 !important;
}
.user-card-large_showPendantCard_3pa4K {
  background: #0f1319 !important;
}
.store-item-card_wrapper_3Q0XV {
  box-shadow: 0 2px 10px #0f1319 !important;
  background: #0f1319 !important;
}
.project-ads_cardLarge_33fi5 {
    background: #06090F !important;
}
.tabs-primary_wrapper_3aJ2c.tabs-primary_normal_1IYGx {
background: #0F1319 !important;
}
.pagination>li>a,
.pagination>li>span {
 background-color:#0F1319 !important;
 border:1px solid #1E2227 !important;
}
.mission-card-large_wrapper_2-bCL {
  background: #0D1117 !important;
}
.modal_modal-content_3brCX > div > .body {
  background: #0D1117 !important;
}
.modal_header_1dNxf {
  background-color: #1D2026 !important;
}
.modal_modal-content_3brCX {
  border: 4px solid #1D2026 !important;
  color: #eee !important;
}
.modal_modal-overlay_2_Dgx {
  background-color: #06090Fdd !important;
  backdrop-filter: blur(20px);
}
.user-items_bag_3RyCx, .user-items_store_1jCDo {
  background: #0D1117 !important;
}
.user-items_money_2N4pr div {
  border: 1px solid #1E2227 !important;
}
.user-items_money_2N4pr img:first-child {
  border-right: 1px solid #1E2227 !important;
}
.user-items_money_2N4pr img:last-child {
  border-left: 1px solid #1E2227 !important;
}
.bag-item-card_wrapper_OhZLu {
  box-shadow: 0 2px 10px #000 !important;
}
.bag-item-card_wrapper_OhZLu .bag-item-card_count_1v6Et {
  color: #fff !important;
  background-color: #0D1117 !important;
  box-shadow: 0 2px 10px #000 !important;
}
.store-item-card_wrapper_1MpGf {
  box-shadow: 0 2px 10px #000 !important;
}
.popover.bottom > .arrow::after {
border-bottom-color: #000 !important;
}
.popover.bottom > .arrow::after {
  border-bottom-color: #0D1117 !important;
}
.popover {
  background-color: #0D1116 !important;
  border: none !important;
  border: none !important;
  -webkit-box-shadow: 0 5px 10px rgba(0,0,0,1) !important;
  box-shadow: 0 5px 10px rgba(0,0,0,1) !important;
}
.popover-title {
  background-color: #0D1117 !important;
  border-bottom: 1px solid #222 !important;
}
label {
  color: #eee !important;
}
.modal_modal-content_3brCX .footer button {
  background: #0D1117 !important;
}
.robot-digger-modal_mesg_-dSUM {
  color: #ccc !important;
}
.robot-digger-modal_digging-tasks_HZHFi {
  border: none !important;
}
.robot-digger-modal_digging-tasks_HZHFi .robot-digger-modal_finished_1AEs_ {\
  background-color: #1E2227 !important;
}
.robot-digger-modal_digging-tasks_HZHFi .robot-digger-modal_task_3E9p8 {
  border: 1px solid #10141A !important;
  background-color: #0D1117 !important;
}
.robot-digger-modal_digging-tasks_HZHFi .robot-digger-modal_working_bqeHC {
  background-color: #1E2227;
}
.table-striped > tbody > tr:nth-of-type(2n+1) {
  background-color: #1E222733 !important;
}
.card_wrapper_2Sod3 {
  -webkit-box-shadow: 0 0 8px rgb(0, 0, 0,.5) !important;
  box-shadow: 0 0 8px rgba(0,0,0,.5) !important;
}
.home_userCard_2HTEf {
  box-shadow: 0 0 8px rgba(0,0,0,.5) !important;
}
.sidebar-nav_wrapper_1VUBP .sidebar-nav_navigations_1X4Qe {
  background-color: #0D1117 !important;
  box-shadow: 0 0 8px rgba(0,0,0,.5) !important;
}
.user-router_card_3eAOc {
  background: #0D1117 !important;
}
.sidebar-nav_wrapper_1VUBP .sidebar-nav_navigations_1X4Qe {
  background-color: #0D1117 !important;
  box-shadow: 0 0 8px rgba(0,0,0,.5) !important;
}
.user-router_card_3eAOc {
  background: #0D1117 !important;
}
.mission-card-large_wrapper_2-bCL {
  box-shadow: 0 0 8px rgba(0,0,0,.5) !important;
}
.panel-default > .panel-heading {
  background-color: #1D2026 !important;
  border-color: #1D2026 !important;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #1D2026 !important;
}
.panel-group .panel-heading + .panel-collapse > .list-group, .panel-group .panel-heading + .panel-collapse > .panel-body {
  border-top: 1px solid #1D2026 !important;
}
.panel-default {
  border-color: #1D2026 !important;
}
.panel {
  background-color: #0D1117 !important;
}
#collapse0 {
  background: #0D1117 !important;
}
.help_question_2G0NM:focus, .help_question_2G0NM:hover {
  color: #eee !important;
}
.avatar-lib_wrapper_1TxtU .avatar-lib_title_3GO4N {
  box-shadow: none !important;
}
.avatar-lib_wrapper_1TxtU .avatar-lib_title_3GO4N {
  box-shadow: none !important;
}
.card-large_wrapper_3Gi8W {
  background: #0D1117 !important;
  box-shadow: 0 0 8px rgba(0,0,0,.5) !important;
}
.card-large_wrapper_3Gi8W .footer {
  border-top: none !important;
}
.bg-warning {
 background-color:#1E2227 !important;
}
.jumbotron {
  background-color: #1E2227 !important;
}
.bg-danger {
  background-color: #1E2227 !important;
  color: #AA2447 !important;
}
.list-group-item {
  background-color: #1E2227 !important;
  border: 1px solid #2D3035 !important;
}
a.list-group-item {
  color: #eee !important;
}
a.list-group-item:focus, a.list-group-item:hover {
  color: #fff !important;
  background-color: #2D3035 !important;
}
.breadcrumb {
  background-color: #1E2227 !important;
}
.panel2_wrapper_3UZFE.panel-border-bottom .panel2_panelHead_1Bn6y {
  border-bottom: 1px solid #1D2026 !important;
}
.alert-success {
  background-color: #dff0d822 !important;
  border-color: #468847 !important;
}
.alert-info {
  background-color: #d9edf722 !important;
  border-color: #3a87ad !important;
}
.alert {
  background-color: #fcf8e322 !important;
  border: 1px solid #c09853;
}
.alert-danger, .alert-error {
  background-color: #f2dede22 !important;
  border-color: #b94a48 !important;
}
.robot-checkin-modal_progress-bar_Ud1tg {
  background: #2D3035 !important;
}
.user-home_mask_3NwE4 {
 background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(#0D1117)) !important;
 background:-o-linear-gradient(hsla(0,0%,100%,0),#0D1117) !important;
 background:linear-gradient(hsla(0,0%,100%,0),#0D1117) !important;
}
.project-card-side_warpper_as34B .title a {
color: #eee !important;
}
.stage-header_stage-button_4qxON {
  border: 1px solid #2D3035 !important;
  background: #0D1117 !important;
}
.stage-header_stage-header-wrapper-overlay_7uuff {
  background-color: #06090F !important;
}
.stage-wrapper_stage-wrapper_3k56F.stage-wrapper_full-screen_3WIKP {
  background-color: #06090Fdd !important;
}
.stage_green-flag-overlay_219KT {
  background: none !important;
  border: none !important;
}
.stage_green-flag-overlay-wrapper_3bCO- {
  background: #06090Fdd !important;
  backdrop-filter: blur(10px);
}
.monitor_monitor-container_BKHcx {
  background: #0F1319 !important;
  border: none !important;
}
.menu-bar_menu-bar_1gLUp {
  background-color: #06090F !important;
}
.menu-bar_remix-button_22R_5 {
  background-color: #06090F !important;
}
.menu_menu_1rWB9 {
  background-color: #06090F !important;
}
.gui_body-wrapper_1T2l7 {
  background-color: #06090F !important;
}
.gui_tab_3k_DV {
  border: 1px solid #1E2227 !important;
  background-color: #0D1117 !important;
}
.gui_tab_3k_DV.gui_is-selected_3nXL3 {
  background-color: #0D1117 !important;
}
.gui_extension-button-container_sM98M {
  background: #0D1117 !important;
  border: none !important;
}
label {
  color: #fff !important;
}
.react-tabs_react-tabs__tab--selected_2o0LJ {
  background: #0D1117 !important;
}
.blocklySvg {
  background-color: #06090F !important;
}
.blocklyFlyoutBackground {
  fill: #06090F !important;
}
.scratchCategoryMenuItem.categorySelected {
  background: #0D1117 !important;
}
.scratchCategoryMenu {
  background: #0D1117 !important;
}
.sprite-selector_sprite-selector_1s2N2 {
  background-color: #0D1117 !important;
}
.sprite-info_sprite-info_2qOXw {
  background-color: #0D1117 !important;
}
.stage-selector_stage-selector_2gOfn {
  background-color: #0D1117 !important;
}
.stage-selector_header_Q8vgs {
  background-color: #0D1117 !important;
}
.sprite-selector-item_sprite-selector-item_3c9Kl.sprite-selector-item_is-selected_EE4jo {
  background: #0D1117 !important;
}
.sprite-selector-item_sprite-selector-item_3c9Kl:hover {
  background: #0D1117 !important;
}
.input_input-form_2EIqD {
  background: #0D1117 !important;
}
.stage-header_stage-button_4qxON {
  background: #0D1117 !important;
}
.blocklyToolboxDiv {
  background-color: #0D1117 !important;
}
.share-button_share-button_36Wbh {
  background: #05080D !important;
}
.library_library-scroll-grid_7xk1I {
  background: #06090F !important;
}
.library-item_library-item_1nZBu {
  background: #0D1117 !important;
}
.library-item_library-item-inset-image-container_2oGku {
  border: none !important;
}
.library-item_library-item-name_35ftf {
  color: #eee !important;
}
.library-item_featured-description_1hGaH {
  color: #aaa !important;
}
.blocklyFlyoutLabelText {
  fill: #eee !important;
}
.scratchCategoryMenuItem {
  color: #ddd !important;
}
.asset-panel_wrapper_26zMp {
  background: #06090F !important;
}
.selector_wrapper_1v6kq {
  background: #06090F !important;
}
.selector_new-buttons_2iXR0::before {
  background: linear-gradient(rgba(232,237,241, 0),#06090F) !important;
}
.input_input-form_K5SYW {
  border-color: #06090F !important;
  background: #06090F !important;
}
.user_card_14OMg {
  background:#0D1117 !important;
}
.studio-home_studio-card_2Aj3P {
  background-color: #0D1117 !important;
}
.studio-home_handleInfo_3DAit {
  background-color: #0D1117 !important;
}
.Popover-body {
  background: #06090F !important;
  border: 1px solid #0D1117 !important;
}
.user-card-large_friend_MGCqU {
  background-image: url(https://asset.mozhua.org:444/Media?name=21ca34a9e42121fa1d88ed1f25ea5490.svg) !important;
}
.dropdown .dropdown-menu {
  background-color: #0F1319 !important;
}
.dropdown .dropdown-menu li:hover {
  background-color: #1E2227 !important;
}
.dropdown-menu > li > a {
  color: #eee !important;
}
.dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover {
  color: #fff !important;
  background-color: #1E2227 !important;
}
.stat-graph_day-0_idJxi {
  background-color: #282D34 !important;
}
.stat-graph_day-1_3GeeK {
  background-color: #2D3C51 !important;
}
.stat-graph_day-2_WowYZ {
  background-color: #35537D !important;
}
.stat-graph_day-3_36etr {
  background-color: #3C69A8 !important;
}
.stat-graph_day-4_3XS42 {
  background-color: #4C97FF !important;
}
blockquote {
 border-left:5px solid #1D2026 !important;
}
.user-toplist_userRank_qHDsG {
 background:#345365 !important;
}
.editable-tag-group_add-tags_2S1aZ>span,
.editable-tag-group_tips-tags_1g6-f>span,
.editable-tag-group_wrapper_2pRM8>span {
 background:#0D1117 !important;
}
.popover.right > .arrow::after {
  border-right-color: #0D111600 !important;
}
.popover.right > .arrow {
  border-right-color: #0000 !important;
}
.studio-home-forum_userMore_22IKJ {
  background-image: none !important;
}
.question_question-container_26Z9Q {
  border: 1px solid #1E2227 !important;
  background: #0D1117 !important;
}
.question_question-label_1SgY7 {
  color: #fff !important;
}
.input_input-form_2EIqD {
  color: #fff !important;
  border-color: hsla(215, 100%, 65%, 1) !important;
}
.custom-procedures_body_1H7Iq {
  border-color: hsla(215, 100%, 65%, 1) !important;
}
.custom-procedures_option-card_1Gtvt {
  border-color: hsla(215, 100%, 65%, 1) !important;
}
.custom-procedures_button-row_3EJDk button {
  background: #1D2026 !important;
}

.prompt_body_Vgt8G {
  background: #06090F !important;
}
.prompt_button-row_34Zss button {
  background: #1D2026 !important;
}

.prompt_variable-name-text-input_36E65 {
  color: #fff !important;
  background: #1D2026 !important;
}
.comment_deletes_36EkF {
  background: #25272D40 !important;
}
ul.menu-bar_main-nav_97WYO li a:hover {
  background-color: #1E2227 !important;
  transition: background-color 0.15s ease-in !important;
}
.menu-bar_loged-in_Xwduf:hover {
  background: #06080f !important;
}
.menu-bar_loged-in_Xwduf {
  transition: background-color 0.15s ease-in !important;
}
.mission-panel_mission_18h-O {
  background-color: #0d1117 !important;
}
.user-mission-rank {
 background: #e5f0ff10 !important;
}
.crash-message_crash-wrapper_15SLi {
  background-color: #06090FDD !important;
}
.crash-message_reloadButton_35TdL {
  border: 1px solid #aaa !important;
  background: none !important;
  color: #eee !important;
}
.loader_background_1-Rwn {
  background-color: #06090FDD !important;
  backdrop-filter: blur(3px)!important;
}
.crash-message_reloadButton_35TdL:hover {
  background: #fff1 !important;
  transition: ease-in 0.2s background !important;
}
.user-home_wrapper_32MwP .panel-large, .user-home_wrapper_32MwP .panel-large .panel-content {
  background: #06090F !important;
}
.scratchCommentTextarea {
  background-color: #06090f !important;
}
.scratchCommentTopBar {
  fill: #0f1319 !important;
  fill-opacity: 1 !important;
}
.scratchCommentRect {
  fill: #0f1319 !important;
}
.blocklyScrollbarHandle {
  fill: #555 !important;
  fill-opacity: 0.5 !important;
}
.blocks_blocks_2LOZ2 .blocklyFlyout {
  backdrop-filter: blur(10px)!important;
}
.action-menu_button_31je5 {
  background: #06090f !important;
}
.action-menu_main-button_2m3TE {
  box-shadow: 0 0 0 4px #1a1e28bb !important;
}
.action-menu_tooltip_1YpkD::after {
  background-color: #1a1e28 !important;
}
.action-menu_tooltip_1YpkD {
  background-color: #1a1e28 !important;
}
.action-menu_more-buttons-outer_1tVn_ {
  background: #1a1e28 !important;
}
.action-menu_more-button_FdlvY {
  background: #06090f !important;
}
.action-menu_button_31je5:hover {
  background: #1e2227 !important;
}
.action-menu_main-button_2m3TE:hover {
  box-shadow: 0 0 0 6px #06090faa !important;
}
.custom-procedures_body_1H7Iq {
  background: #06090f !important;
}
.custom-procedures_option-card_1Gtvt {
  background: #1d2026 !important;
}
.custom-procedures_option-card_1Gtvt {
  border-color: #1d2026 !important;
}
.blocklyFlyoutButton:hover {
  fill: #0004 !important;
}
.blocklyFlyoutButton .blocklyText {
  fill: #ddd !important;
}
.context-menu_context-menu_3Ahoz {
  background-color: #06090fcc !important;
  backdrop-filter: blur(10px) !important;
}
.context-menu_menu-item_2ReLI:hover {
  background: #4d97ff88 !important;
}
.monitor_list-header_2fGXP {
  background: #06090f !important;
  color: #eee !important;
}
.monitor_list-body_3Yq5K {
  background: #06090f !important;
}
.monitor_list-index_1h6b3 {
  color: #eee !important;
}
.monitor_list-footer_28WLY {
  background: #06090f !important;
  color: #eee !important;
}
.blocklyWidgetDiv .goog-menu {
  background: #06090fcc !important;
  border-color: #06090fcc !important;
  backdrop-filter: blur(10px)!important;
}
.blocklyWidgetDiv .goog-menuitem {
  color: #eee !important;
}
.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel, .blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content, .blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-accel, .blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-content {
  color: #888 !important;
}
.blocklyWidgetDiv .goog-menuitem-highlight,
.blocklyWidgetDiv .goog-menuitem-hover {
  background-color: #4d97ff88 !important;
  border-color: #4d97ff88 !important;
}
.library_filter-bar_8xrjd {
  background-color: #1d2026 !important;
}
.filter_filter_3ERdM {
  background: #0d1117 !important;
}
.filter_filter-input_3aL2D::placeholder {
  color: #eee !important;
}
.filter_filter-input_3aL2D {
  color: #fff !important;
}
div#s3devDDOut.vis {
  background-color: #0d1117cc !important;
  backdrop-filter: blur(10px)!important;
}
#s3devInp {
  background: #0d1117 !important;
}
.menu-bar_loged-in_Xwduf .menu-bar_user-icon_Td5U0 {
  border-radius: 16px !important;
  width: 28px !important;
}
ul.user-dropdown-menu_wrapper_3RsXx li a {
  color: #999 !important;
}
ul.user-dropdown-menu_wrapper_3RsXx li a:hover {
  background: #1f6feb !important;
  color: #fff !important;
}
.menu-bar_topnav_3HgyJ a {
  transition: all 0.03s ease-in !important;
}
ul.user-dropdown-menu_wrapper_3RsXx li.user-dropdown-menu_logout_39YmW {
  border-top: 1px solid #2d333a !important;
}
.menu-bar_message_2hNbY {
  background: #eb5224cc !important;
  box-shadow: 0px 1px 3px #ff0000 !important;
}
.user-level_level-0_3HviE {
  color: #eee !important;
  background-color: #3d4147 !important;
  border: 2px solid #515459 !important;
}
.user-level_level-1_uTxh6 {
  background-color: #324327 !important;
  color: #a1df3d !important;
  border: 2px solid #49642b !important;
}
.user-level_level-2_3b_PK {
  background-color: #293e48 !important;
  color: #80dff4 !important;
  border: 2px solid #324e5a !important;
}
.user-level_level_3d3fz {
  border-radius: 10px !important;
  color: #f3c93b;
  background-color: #403c27;
  border: 2px solid #544b28;
}
.item-info_intor_fELdW {
  color: #ddd !important;
}
.item-info_descp_2jqqW {
  color: #ddd !important;
}
.forum-post-add_wrapper_2IFFJ {
  background: #0d1117 !important;
}
.mission-challenge-ranking_ranking_RSiUj {
  color: #eee !important;
}
.puzzle-pane_puzzle-pane_3yfW7 {
  background-color: #0d1117 !important;
  border-color: #0d1117 !important;
}
.mission-helps-modal_body_1x7fQ {
  background: #0d1117 !important;
}
.mission-panel_prerequired_3heMD {
  background-color: #0d1117 !important;
}
.mission-panel_prerequired_3heMD .mission-panel_content_1-P6J > div a {
  color: #eee !important;
}
.navigation-list_wrapper_1RqLP li:hover {
  background: #1f2228 !important;
  color: #fff !important;
  transition: all 0.1s ease !important;
}
.navigation-list_wrapper_1RqLP li, .navigation-list_wrapper_1RqLP li.navigation-list_disabled_3oHod:focus, .navigation-list_wrapper_1RqLP li.navigation-list_disabled_3oHod:hover {
  background: #1f222833 !important;
  color: #eee !important;
}
.navigation-list_wrapper_1RqLP li .navigation-list_content_2S2K9 .navigation-list_title_SOF67, .navigation-list_wrapper_1RqLP li.navigation-list_disabled_3oHod:hover .navigation-list_content_2S2K9 .navigation-list_title_SOF67 {
  color: #eee !important;
}
.navigation-list_wrapper_1RqLP li i {
  background: #1f2228 !important;
}
.auction-item-card_card_1JVeQ {
  background: #0d1117 !important;
  box-shadow: 0 2px 10px #000 !important;
}
.auction-Item-log_card_1UytO {
  background: #0d1117 !important;
  box-shadow: 0 2px 10px #000 !important;
}
.layout_content_20yil > div:nth-child(2) {
  background: #06090f !important;
}
.studio-home-aisc_card_EPhUw:nth-of-type(2n+1) {
  background: #06090f !important;
}
.studio-home-aisc_card_EPhUw:nth-of-type(2n) {
  background: #06090f !important;
}
.studio-home-aisc_head_1iD9k {
  background: #fcf8e322 !important;
}
.auction-sell-modal_count_2wKUq {
  color: #fff !important;
  background-color: #0D1117 !important;
  -webkit-box-shadow: 0 2px 10px #000 !important;
  box-shadow: 0 2px 10px #000 !important;
}
.warning-message_wrapper_2O2sn {
  background-color: #06090Fdd !important;
  border: none !important;
}
.blocklyDropDownDiv {
  background-color: #0d1117 !important;
  border-color: #1D2026 !important;
}
.menu-bar_navbar_lCik_ {
  box-shadow: none !important;
}
.comment-panel_comment-panel_3pBsc form textarea:focus {
  transition: all cubic-bezier(.86,0,.07,1) 0.15s!important;
}
.comment-panel_comment-panel_3pBsc form textarea {
  transition: all cubic-bezier(.86,0,.07,1) 0.15s!important;
}
.items-guide_card_QYkCd {
  background: #0D1117 !important;
  box-shadow: 0 2px 10px #000 !important;
}
.forum-post-view_mask_2Ct5B {
  background: linear-gradient(hsla(0,0%,100%,0),rgb(13,17,23))!important;
}
img {
  filter: brightness(90%);
}
.user-forum-posts_wrapper_vB-WA {
  background-color: rgb(13,17,23)!important;
}
/* .user-forum-posts_posts_2drSN > not(li:nth-child(1)) {
  border-top: none!important;
} */
.studio-manage_card_2Wh_z {
  background-color: rgb(13,17,23)!important;
}
.dropdown-menu {
  background-color: rgb(13,17,23)!important;
}

`);
  var a = document.getElementsByClassName("stat-graph_day-0_idJxi");
  var imgsrc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAFoEvQfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY/j//z8DAAj8Av6IXwbgAAAAAElFTkSuQmCC";
  for (var b = 0; b < a.length; b++) {
    a[b].src = imgsrc;
  }
  a = document.getElementsByClassName("stat-graph_day-1_3GeeK");
  for (b = 0; b < a.length; b++) {
    a[b].src = imgsrc;
  }
  a = document.getElementsByClassName("stat-graph_day-2_WowYZ");
  for (b = 0; b < a.length; b++) {
    a[b].src = imgsrc;
  }
  a = document.getElementsByClassName("stat-graph_day-3_36etr");
  for (b = 0; b < a.length; b++) {
    a[b].src = imgsrc;
  }
  a = document.getElementsByClassName("stat-graph_day-4_3XS42");
  for (b = 0; b < a.length; b++) {
    a[b].src = imgsrc;
  }
  a = document.getElementsByClassName("");
  for (b = 0; b < a.length; b++) {
    a[b].src = imgsrc;
  }
})();
