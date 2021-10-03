// ==UserScript==
// @name         Aerfaying Evolved
// @namespace    https://github.com/Tim-Fang
// @version      2.6-Fork2-Fork
// @description  Aerfaying Evolved User JS
// @author       TimFang4162
// @match        *://*.aerfaying.com/*
// @match        *://*.gitblock.cn/*
// @match        *://*.3eworld.cn/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @updateURL    https://raw.fastgit.org/Silverteal/Aerfaying-Evolved/master/Tampermonkey/Aerfaying%20Evolved.user.js
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js
// ==/UserScript==

  //================== Global Func =====================
  $("body").prepend(`
<script>function dat_alert(title,name,useTime,markdown) {
        $("body").after(\`
<div class="ReactModalPortal" id="DAT_AlertWindow">
    <div class="ReactModal__Overlay ReactModal__Overlay--after-open modal_modal-overlay_2_Dgx" aria-modal="true">
        <div class="ReactModal__Content ReactModal__Content--after-open modal_modal-content_3brCX" tabindex="-1">
            <div class="box_box_tWy-0" style="flex-direction: column; flex-grow: 1;">
                <div class="modal_header_1dNxf" style="height: 3.125rem;">
                    <div class="modal_header-item_1WbOm modal_header-item-title_1N2BE">\`+title+\`</div>
                    <div class="modal_header-item_1WbOm modal_header-item-close_4akWi">
                        <div aria-label="Close" class="close-button_close-button_t5jqt close-button_large_2cCrv"
                            role="button" tabindex="0" onclick="$('#DAT_AlertWindow').remove();"><img
                                class="close-button_close-icon_ywCI5"
                                src="https://cdn.gitblock.cn/static/images/cb666b99d3528f91b52f985dfb102afa.svg"></div>
                    </div>
                </div>
                <div class="body box_box_tWy-0">
                    <div class="item-attached-thin-modal-body_wrapper_3KdPz">
                        <div>
                            <h1 class="item-attached-thin-modal-body_name_p9cDj">\`+name+\`</h1>
                            <div><span>\`+useTime+\`</span></div>
                        </div>
                    </div>
                    <div class="markdown_body_1wo0f item-isolator-modal_declarationDescp_2g62z">
                        <div class="content">
                            \`+markdown+\`
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>\`);
    }
</script>`);
    //================== View Markdown =====================

  setInterval(() => {
    intervalFunc_ViewMarkdown();
  }, 2500);

  function intervalFunc_ViewMarkdown() {
    dat_alert("请更新您的Aerfaying Evolved!","您当前使用的Aerfaying Evolved是旧版本","旧版本由于命名问题已停止使用","请点击<a href=\"https://raw.fastgit.org/Silverteal/Aerfaying-Evolved/master/Tampermonkey/Aerfaying%20Evolved.user.js\">此处</a>下载新版本的Aerfaying Evolved!")
  };
