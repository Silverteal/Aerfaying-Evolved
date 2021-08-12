$(".menu-bar_topnav_3HgyJ.navbar-fixed-top").append(`<div class="container" id="dat_dashbroad"></div>`);
var dat_progressbar_value = $(".progress_progress_Gm5t-")[0].style.width;
$("body").prepend(`<script>var dat_getLoggedInUser={};</script>`);
$("#dat_dashbroad").html(`
<style>
.dat_dashbroad_container {
    padding-top: 20px;
    padding-bottom: 20px;
}
.dat_dashbroad {
    display: inline-block;
    height: 200px;
    width: 250px;
    background-color: #181a2052;
    border-radius: 15px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 15px;
    border: 2px solid #181a2052;
    transition: border 0.5s ease;
}
.dat_dashbroad:hover{
    border: 2px solid #1F6FEB;
    transition: border 0.5s ease;
}
.dat_progressbar_container {
    height: 8px;
    width: 200px;
    background-color: #2D3C51;
    border-radius: 4px;
}
.dat_progressber {
    height:8px;
    background-color: #1F6FEB;
    border-radius: 4px;
    box-shadow: 1px 1px 6px #4C97FF;
}
}
</style>
<div class="dat_dashbroad_container">
    <p>Dashbroad - Dark Aerfaying</p>
    <table border="0">
        <tr>
            <td>
                <span class="dat_dashbroad">
                    <p>能量条 ` + dat_progressbar_value + `</p>
                    <div class="dat_progressbar_container">
                        <div class="dat_progressber" style="width:` + dat_progressbar_value + `;">
                        </div>
                    </div>
                </span>
            </td>
            <td>
                &nbsp;&nbsp;&nbsp;
            </td>
            <td>
                <span class="dat_dashbroad">
                    <p>
                        <strong>粉丝</strong> 1000k</br>
                        <strong>关注</strong> 1000k</br>
                        </br>
                        <strong>金币</strong> 1000k</br>
                        <strong>比特石</strong> 1000k
                    </p>
                </span>
            </td>
            <td>
                &nbsp;&nbsp;&nbsp;
            </td>
            <td>
                <span class="dat_dashbroad">
                    <p>未读消息</p>
                    <a class="btn btn-primary" href="javascript:displayUnreadMsg();" one-link-mark="yes"><i class="see-community"></i>点击获取</a>
                </span>
            </td>
        </tr>
    </table>
    <p>Copyright 2021 TimFang4162. This UserScript has Super Cow Powers.</p>
</div>
`);
var LoggedInUser = JSON.parse(GM_getValue("DAT_LoggedInUser"))
var uid = LoggedInUser.loggedInUser.id;
//console.log(uid);
$("body").prepend(`
<script>
var dat_messages=[];
function displayUnreadMsg() {
    var dat_messageUrl="/WebApi/Users/"+uid+"/GetPagedMessages";
    $.ajax({
      type: "POST",
      url: dat_messageUrl,
      data: "pageIndex=1&pageSize=8",
      success: function (result) {
        dat_messages = result.pagedMessages.items;
      }
    });
    for (each in dat_messages){
      console.log(each);
    }
}
displayUnreadMsg()
</script>
`);
setInterval(() => {
    GetLoggedInUser();
}, 10 * 1000);

function GetLoggedInUser() {
    var getLoggedInUrl = "/WebApi/Users/GetLoggedInUser";
    $.ajax({
        type: "POST",
        url: getLoggedInUrl,
        success: function (result) {
            //console.log(result);
            GM_setValue("DAT_LoggedInUser", JSON.stringify(result));
        }
    });
}