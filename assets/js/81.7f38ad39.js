(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{435:function(e,t,a){"use strict";a.r(t);var s=a(25),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"主界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主界面"}},[e._v("#")]),e._v(" 主界面")]),e._v(" "),a("p",[e._v("主界面列出了所有已安装的应用（或任何第三方应用程序提供的应用列表）以及已有备份的应用。 单击任何已安装的应用项目打开相应的 "),a("RouterLink",{attrs:{to:"/zh-CN/guide/app-details-page.html"}},[e._v("应用详情")]),e._v(" 页面。 使用菜单中的 "),a("a",{attrs:{href:"#%E6%8E%92%E5%BA%8F"}},[e._v("排序")]),e._v(" 选项，可用多种方式排序。排序方式在关闭应用后仍然保存。 还可以根据您的需要，使用菜单中的 "),a("a",{attrs:{href:"#%E7%AD%9B%E9%80%89"}},[e._v("过滤")]),e._v(" 选项筛选项目。 你可以使用多个条件进行过滤。 还可以使用搜索按钮，通过应用名称或包名过滤应用。")],1),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("目录")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#批量操作"}},[e._v("批量操作")])]),a("li",[a("a",{attrs:{href:"#颜色代码含义"}},[e._v("颜色代码含义")])]),a("li",[a("a",{attrs:{href:"#应用类型"}},[e._v("应用类型")])]),a("li",[a("a",{attrs:{href:"#版本信息"}},[e._v("版本信息")])]),a("li",[a("a",{attrs:{href:"#选项菜单"}},[e._v("选项菜单")]),a("ul",[a("li",[a("a",{attrs:{href:"#排序"}},[e._v("排序")])]),a("li",[a("a",{attrs:{href:"#筛选"}},[e._v("筛选")])]),a("li",[a("a",{attrs:{href:"#一键操作"}},[e._v("一键操作")])]),a("li",[a("a",{attrs:{href:"#应用使用情况"}},[e._v("应用使用情况")])]),a("li",[a("a",{attrs:{href:"#正在运行的应用"}},[e._v("正在运行的应用")])]),a("li",[a("a",{attrs:{href:"#apk-updater"}},[e._v("APK Updater")])]),a("li",[a("a",{attrs:{href:"#termux"}},[e._v("Termux")])]),a("li",[a("a",{attrs:{href:"#设置"}},[e._v("设置")])])])])])]),a("p")]),e._v(" "),a("h2",{attrs:{id:"批量操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#批量操作"}},[e._v("#")]),e._v(" 批量操作")]),e._v(" "),a("p",[e._v("批量操作在主界面也可用（这些操作大多数需要 root 或 "),a("RouterLink",{attrs:{to:"/zh-CN/guide/adb-over-tcp.html"}},[e._v("ADB over TCP")]),e._v(" ）。 要启动多选模式，请点击任何应用图标或长按任何应用。 之后你可以使用常规点击操作来继续选择更多应用。 这些操作包括：")],1),e._v(" "),a("ul",[a("li",[e._v("备份 apk 文件（无需 root）")]),e._v(" "),a("li",[e._v("备份/恢复/删除应用数据 (apk、dex、应用数据等)")]),e._v(" "),a("li",[e._v("清除应用数据")]),e._v(" "),a("li",[e._v("禁用/卸载/强行停止应用")]),e._v(" "),a("li",[e._v("禁止应用在后台运行，拦截广告和追踪器")]),e._v(" "),a("li",[e._v("导出规则")])]),e._v(" "),a("h2",{attrs:{id:"颜色代码含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#颜色代码含义"}},[e._v("#")]),e._v(" 颜色代码含义")]),e._v(" "),a("p",[e._v("Here's a list of colors used in this page and their meaning:")]),e._v(" "),a("ul",[a("li",[e._v("多选模式下被选中的应用："),a("code",{staticStyle:{"background-color":"#FCEED1",color:"#000"}},[e._v("浅灰橙（亮色模式下）")]),e._v("或"),a("code",{staticStyle:{"background-color":"#091F36",color:"#FFF"}},[e._v("深蓝（暗色模式下）")])]),e._v(" "),a("li",[e._v("停用的应用："),a("code",{staticStyle:{"background-color":"#FF8A80",color:"#000"}},[e._v("浅红（亮色模式下）")]),e._v("或"),a("code",{staticStyle:{"background-color":"#4F1C14",color:"#FFF"}},[e._v("深红（暗色模式下）")])]),e._v(" "),a("li",[e._v("debug 模式下的应用："),a("code",{staticStyle:{"background-color":"yellow",color:"#000"}},[e._v("黄色星标")])]),e._v(" "),a("li",[e._v("应用可读取日志（已授权）："),a("code",{staticStyle:{color:"#E05915"}},[e._v("橙色的日期")])]),e._v(" "),a("li",[e._v("用户 ID 在应用间被共享："),a("code",{staticStyle:{color:"#E05915FF"}},[e._v("橙色的UID")])]),e._v(" "),a("li",[e._v("使用明文网络通信（如 HTTP）："),a("code",{staticStyle:{color:"#E05915FF"}},[e._v("橙色的 SDK/Size")])]),e._v(" "),a("li",[e._v("应用禁止清除数据："),a("code",{staticStyle:{color:"red"}},[e._v("红色")])]),e._v(" "),a("li",[e._v("已（强行）停止运行的应用："),a("code",{staticStyle:{color:"#09868BFF"}},[e._v("深蓝绿色的包名")])]),e._v(" "),a("li",[e._v("不活跃的应用："),a("code",{staticStyle:{color:"#09868BFF"}},[e._v("深蓝绿色的版本号")])]),e._v(" "),a("li",[e._v("常驻应用（如一直运行的应用）："),a("code",{staticStyle:{color:"magenta"}},[e._v("紫红")])])]),e._v(" "),a("h2",{attrs:{id:"应用类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用类型"}},[e._v("#")]),e._v(" 应用类型")]),e._v(" "),a("p",[a("strong",[e._v("用户程序")]),e._v("或"),a("strong",[e._v("系统程序")]),e._v("遵循以下代码规则：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("X")]),e._v(" - 应用支持多种架构，如32位，64位等。")]),e._v(" "),a("li",[a("code",[e._v("0")]),e._v(" - 应用不含代码")]),e._v(" "),a("li",[a("code",[e._v("°")]),e._v(" - 应用处于休眠状态")]),e._v(" "),a("li",[a("code",[e._v("#")]),e._v(" - 应用已请求大量内存")]),e._v(" "),a("li",[a("code",[e._v("?")]),e._v(" - 应用已请求安全模式下的 VM")])]),e._v(" "),a("h2",{attrs:{id:"版本信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本信息"}},[e._v("#")]),e._v(" 版本信息")]),e._v(" "),a("p",[e._v("版本名后跟以下前缀：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("_")]),e._v(" - 无硬件加速")]),e._v(" "),a("li",[a("code",[e._v("~")]),e._v(" - 仅测试模式")]),e._v(" "),a("li",[a("code",[e._v("debug")]),e._v(" - Debuggable 应用")])]),e._v(" "),a("h2",{attrs:{id:"选项菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项菜单"}},[e._v("#")]),e._v(" 选项菜单")]),e._v(" "),a("p",[e._v("Options menu has several options which can be used to sort, filter the listed apps as well as navigate to different pages.")]),e._v(" "),a("h3",{attrs:{id:"排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[e._v("#")]),e._v(" 排序")]),e._v(" "),a("p",[e._v("Apps listed on the main page can be sorted in different ways. The sorting preference is preserved which means the apps will be sorted the same way that was sorted in the previous launch. Regardless of your sorting preference, however, the apps are first sorted alphabetically to prevent random results.")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("User app first")]),e._v(" - User apps will appear first")]),e._v(" "),a("li",[a("em",[e._v("App label")]),e._v(" - Sort in ascending order based on the app labels (also known as app name). This is the default sorting preference")]),e._v(" "),a("li",[a("em",[e._v("Package name")]),e._v(" - Sort in ascending order based on package names")]),e._v(" "),a("li",[a("em",[e._v("Last update")]),e._v(" - Sort in descending order based on the package update date (or install date if it is a newly installed package)")]),e._v(" "),a("li",[a("em",[e._v("Shared user ID")]),e._v(" - Sort in descending order based on kernel user id")]),e._v(" "),a("li",[a("em",[e._v("App size/sdk")]),e._v(" - Sort in ascending order based on app sdk (sorting by app size in not currently available)")]),e._v(" "),a("li",[a("em",[e._v("Signature")]),e._v(" - Sort in ascending order based on app's signing info")]),e._v(" "),a("li",[a("em",[e._v("Disabled first")]),e._v(" - List disabled apps first")]),e._v(" "),a("li",[a("em",[e._v("Blocked first")]),e._v(" - Sort in descending order based on the number of blocked components")])]),e._v(" "),a("h3",{attrs:{id:"筛选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#筛选"}},[e._v("#")]),e._v(" 筛选")]),e._v(" "),a("p",[e._v("Apps listed on the main page can be filtered in a number of ways. Like sorting, filtering preferences are stored as well and retained after a relaunch.")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("User apps")]),e._v(" - List only user apps")]),e._v(" "),a("li",[a("em",[e._v("System apps")]),e._v(" - List only system apps")]),e._v(" "),a("li",[a("em",[e._v("Disabled apps")]),e._v(" - List only disabled apps")]),e._v(" "),a("li",[a("em",[e._v("Apps with rules")]),e._v(" - List only apps with blocking rules")])]),e._v(" "),a("p",[e._v("Unlike sorting, you can filter using more than one option. For example, you can list all disabled user apps by filtering app lists using "),a("em",[e._v("User apps")]),e._v(" and "),a("em",[e._v("Disabled apps")]),e._v(". This is also useful for batch operations where you can filter all users apps to carry out certain operation.")]),e._v(" "),a("h3",{attrs:{id:"一键操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一键操作"}},[e._v("#")]),e._v(" 一键操作")]),e._v(" "),a("p",[a("strong",[e._v("1-Click Ops")]),e._v(" stands for "),a("strong",[e._v("One-Click Operations")]),e._v(". You can directly open the corresponding page by clicking on this option.")]),e._v(" "),a("p",[a("em",[e._v("See also: "),a("RouterLink",{attrs:{to:"/zh-CN/guide/one-click-ops-page.html"}},[e._v("1-Click Ops Page")])],1)]),e._v(" "),a("h3",{attrs:{id:"应用使用情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用使用情况"}},[e._v("#")]),e._v(" 应用使用情况")]),e._v(" "),a("p",[e._v("App usage statistics such as "),a("em",[e._v("screen time")]),e._v(", "),a("em",[e._v("data usage")]),e._v(" (both mobile and Wifi), "),a("em",[e._v("number of times an app was opened")]),e._v(" can be accessed by clicking on the "),a("strong",[e._v("App Usage")]),e._v(" option in the menu (requires "),a("em",[e._v("Usage Access")]),e._v(" permission).")]),e._v(" "),a("h3",{attrs:{id:"正在运行的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正在运行的应用"}},[e._v("#")]),e._v(" 正在运行的应用")]),e._v(" "),a("p",[e._v("A list of running apps or processes can be viewed by clicking on the "),a("strong",[e._v("Running Apps")]),e._v(" option in the menu (requires root or "),a("RouterLink",{attrs:{to:"/zh-CN/guide/adb-over-tcp.html"}},[e._v("ADB")]),e._v("). Running apps or processes can also be force-closed or killed within the resultant page.")],1),e._v(" "),a("h3",{attrs:{id:"apk-updater"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apk-updater"}},[e._v("#")]),e._v(" APK Updater")]),e._v(" "),a("p",[e._v("If you have the app "),a("a",{attrs:{href:"https://github.com/rumboalla/apkupdater",target:"_blank",rel:"noopener noreferrer"}},[e._v("APK Updater"),a("OutboundLink")],1),e._v(" installed, you can use the corresponding option in the menu to open the app directly. The option is hidden if you do not have it installed.")]),e._v(" "),a("h3",{attrs:{id:"termux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#termux"}},[e._v("#")]),e._v(" Termux")]),e._v(" "),a("p",[e._v("If you have "),a("a",{attrs:{href:"https://github.com/termux/termux-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("Termux"),a("OutboundLink")],1),e._v(" installed, you can directly go to the running session or open a new session using the "),a("strong",[e._v("Termux")]),e._v(" option in the menu.")]),e._v(" "),a("h3",{attrs:{id:"设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[e._v("#")]),e._v(" 设置")]),e._v(" "),a("p",[e._v("You can go to in-app "),a("RouterLink",{attrs:{to:"/zh-CN/guide/settings-page.html"}},[e._v("Settings")]),e._v(" by clicking on the corresponding option.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);