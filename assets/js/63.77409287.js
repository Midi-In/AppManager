(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{414:function(t,e,a){"use strict";a.r(e);var r=a(25),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"страница-«настроики»"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#страница-«настроики»"}},[t._v("#")]),t._v(" Страница «Настройки»")]),t._v(" "),a("p",[t._v("Настройки можно использовать для настройки поведения приложения.")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Таблица содержания")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#language"}},[t._v("Language")])]),a("li",[a("a",{attrs:{href:"#тема-приложения"}},[t._v("Тема приложения")])]),a("li",[a("a",{attrs:{href:"#mode-of-operation"}},[t._v("Mode of Operation")])]),a("li",[a("a",{attrs:{href:"#доступ-к-использованию"}},[t._v("Доступ к использованию")])]),a("li",[a("a",{attrs:{href:"#apk-signing"}},[t._v("APK Signing")]),a("ul",[a("li",[a("a",{attrs:{href:"#signature-schemes"}},[t._v("Signature schemes")])])])]),a("li",[a("a",{attrs:{href:"#rules"}},[t._v("Rules")]),a("ul",[a("li",[a("a",{attrs:{href:"#глобальная-блокировка-компонентов"}},[t._v("Глобальная блокировка компонентов")])]),a("li",[a("a",{attrs:{href:"#импорт-экспорт-правил-блокировки"}},[t._v("Импорт/экспорт правил блокировки")])]),a("li",[a("a",{attrs:{href:"#remove-all-rules"}},[t._v("Remove all rules")])])])]),a("li",[a("a",{attrs:{href:"#installer"}},[t._v("Installer")]),a("ul",[a("li",[a("a",{attrs:{href:"#show-users-in-installer"}},[t._v("Show users in installer")])]),a("li",[a("a",{attrs:{href:"#sign-apk"}},[t._v("Sign APK")])]),a("li",[a("a",{attrs:{href:"#install-location"}},[t._v("Install location")])]),a("li",[a("a",{attrs:{href:"#installer-app"}},[t._v("Installer App")])])])]),a("li",[a("a",{attrs:{href:"#backup-restore"}},[t._v("Backup/Restore")]),a("ul",[a("li",[a("a",{attrs:{href:"#compression-method"}},[t._v("Compression method")])]),a("li",[a("a",{attrs:{href:"#backup-options"}},[t._v("Backup Options")])]),a("li",[a("a",{attrs:{href:"#backup-apps-with-android-keystore"}},[t._v("Backup apps with Android KeyStore")])]),a("li",[a("a",{attrs:{href:"#encryption"}},[t._v("Encryption")])])])]),a("li",[a("a",{attrs:{href:"#device-info"}},[t._v("Device Info")])])])]),a("p")]),t._v(" "),a("h2",{attrs:{id:"language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[t._v("#")]),t._v(" Language")]),t._v(" "),a("p",[t._v("Configure in-app language. App Manager current supports 12 (twelve) languages.")]),t._v(" "),a("h2",{attrs:{id:"тема-приложения"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#тема-приложения"}},[t._v("#")]),t._v(" Тема приложения")]),t._v(" "),a("p",[t._v("Выбор темы приложения")]),t._v(" "),a("h2",{attrs:{id:"mode-of-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode-of-operation"}},[t._v("#")]),t._v(" Mode of Operation")]),t._v(" "),a("p",[t._v("You can select one of the four options:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Auto.")]),t._v(" Let AM select the suitable option for you. Although this is the default option, it may cause problems in some devices.")]),t._v(" "),a("li",[a("strong",[t._v("Root.")]),t._v(" Select root mode. AM will request for root permission if not already granted. But when selected, AM will run in root mode even if you don't allow root. This may cause crashes, therefore, you shouldn't enable it if you haven't granted root.")]),t._v(" "),a("li",[a("strong",[t._v("ADB over TCP.")]),t._v(" Enable "),a("RouterLink",{attrs:{to:"/ru/guide/adb-over-tcp.html"}},[t._v("ADB over TCP")]),t._v(" mode. AM may hang indefinitely if you haven't enabled ADB over TCP.")],1),t._v(" "),a("li",[a("strong",[t._v("No-root.")]),t._v(" AM runs in no-root mode. AM will perform better if this is enabled but all the root/ADB features will be disabled.")])]),t._v(" "),a("h2",{attrs:{id:"доступ-к-использованию"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#доступ-к-использованию"}},[t._v("#")]),t._v(" Доступ к использованию")]),t._v(" "),a("p",[t._v("Отключение этой опции отключает страницу "),a("strong",[t._v("«Использование приложений»")]),t._v(", а также "),a("em",[t._v("использование данных")]),t._v(" и "),a("em",[t._v("информация о хранилище приложения")]),t._v(" во вкладке "),a("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html#вкладка-«о-приложении»"}},[t._v("«О приложении»")]),t._v(". Если отключить эту опцию, App Manager никогда не будет запрашивать разрешение "),a("em",[t._v("«Доступ к использованию»")])],1),t._v(" "),a("h2",{attrs:{id:"apk-signing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apk-signing"}},[t._v("#")]),t._v(" APK Signing")]),t._v(" "),a("h3",{attrs:{id:"signature-schemes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature-schemes"}},[t._v("#")]),t._v(" Signature schemes")]),t._v(" "),a("p",[t._v("Select the "),a("a",{attrs:{href:"https://source.android.com/security/apksigning",target:"_blank",rel:"noopener noreferrer"}},[t._v("signature schemes"),a("OutboundLink")],1),t._v(" to use. It is recommended that you use at least v1 and v2 signature schemes. Use the "),a("em",[t._v("Reset to Default")]),t._v(" button in case you're confused.")]),t._v(" "),a("h2",{attrs:{id:"rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[t._v("#")]),t._v(" Rules")]),t._v(" "),a("h3",{attrs:{id:"глобальная-блокировка-компонентов"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#глобальная-блокировка-компонентов"}},[t._v("#")]),t._v(" Глобальная блокировка компонентов")]),t._v(" "),a("p",[t._v("Включение глобальной блокировки компонентов. По умолчанию правила блокировки не применяются, если они не применены на странице "),a("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html"}},[t._v("«Сведения о приложении»")]),t._v(" для какого-либо пакета. После включения этой опции, все (старые и новые) правила применяются немедленно для всех приложений без явного включения блокировки для какого-либо приложения.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Предупреждение")]),t._v(" "),a("p",[t._v("Включение этого параметра может иметь некоторые непредвиденные побочные эффекты, например, будут применяться правила, которые не были полностью удалены. Поэтому, соблюдайте осторожность. Эту опцию следует оставить отключенной, если она по каким-либо причинам не требуется.")])]),t._v(" "),a("p",[a("em",[t._v("Смотрите также: "),a("RouterLink",{attrs:{to:"/ru/faq/app-components.html#что-такое-глобальная-блокировка-компонентов"}},[t._v("Что такое глобальная блокировка компонентов?")])],1)]),t._v(" "),a("h3",{attrs:{id:"импорт-экспорт-правил-блокировки"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#импорт-экспорт-правил-блокировки"}},[t._v("#")]),t._v(" Импорт/экспорт правил блокировки")]),t._v(" "),a("p",[t._v("В App Manager можно импортировать или экспортировать правила блокировки для всех приложений. Вы можете экспортировать или импортировать только определенные правила (компоненты, операции приложений или разрешения) вместо их всех. Также можно импортировать правила блокировки из "),a("a",{attrs:{href:"https://github.com/lihenggui/blocker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blocker"),a("OutboundLink")],1),t._v(" и "),a("a",{attrs:{href:"https://github.com/tuyafeng/Watt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watt"),a("OutboundLink")],1),t._v(". Если необходимо экспортировать правила блокировки для одного приложения, используйте соответствующую страницу "),a("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html"}},[t._v("«Сведения о приложении»")]),t._v(" для экспорта правил, или для нескольких приложений используйте "),a("RouterLink",{attrs:{to:"/ru/guide/main-page.html#пакетные-операции"}},[t._v("пакетные операции")]),t._v(".")],1),t._v(" "),a("p",[a("em",[t._v("Смотрите также: "),a("RouterLink",{attrs:{to:"/ru/tech/rules-specification.html"}},[t._v("App Manager: спецификация правил")])],1)]),t._v(" "),a("h4",{attrs:{id:"экспорт"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#экспорт"}},[t._v("#")]),t._v(" Экспорт")]),t._v(" "),a("p",[t._v("Экспортируйте правила блокировки для всех приложений, настроенных в App Manager. Они могут включать в себя "),a("RouterLink",{attrs:{to:"/ru/faq/app-components.html#что-такое-компоненты-приложения"}},[t._v("компоненты приложения")]),t._v(", операции и разрешения приложения на основе того, какие параметры были выбраны в параметрах множественного выбора.")],1),t._v(" "),a("h4",{attrs:{id:"импорт"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#импорт"}},[t._v("#")]),t._v(" Импорт")]),t._v(" "),a("p",[t._v("Импортируйте ранее экспортированные правила блокировки из App Manager. Подобно экспорту, они могут включать в себя "),a("RouterLink",{attrs:{to:"/ru/faq/app-components.html#что-такое-компоненты-приложения"}},[t._v("компоненты приложения")]),t._v(", операции и разрешения приложения на основе того, какие параметры были выбраны в параметрах множественного выбора.")],1),t._v(" "),a("h4",{attrs:{id:"импортирование-существующих-правил"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#импортирование-существующих-правил"}},[t._v("#")]),t._v(" Импортирование существующих правил")]),t._v(" "),a("p",[t._v("Добавляйте компоненты, отключенные другими приложениями, в App Manager. App Manager следит только за компонентами, отключенные с помощью App Manager. Если вы используете другие инструменты для блокировки компонентов приложения, вы можете использовать эти инструменты для импорта этих отключенных компонентов. При нажатии на эту опцию запускается поиск отключенных компонентов и выводится список приложений, компоненты которых отключены пользователем. В целях безопасности, все приложения не выбраны по умолчанию. Вы можете вручную выбрать приложения в списке и повторно применить блокировку через App Manager.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Предупреждение")]),t._v(" "),a("p",[t._v("Будьте осторожны при использовании этого инструмента, так как могут возникнуть негативные последствия. Выбирайте только те приложения, в которых вы уверены.")])]),t._v(" "),a("h4",{attrs:{id:"импорт-из-watt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#импорт-из-watt"}},[t._v("#")]),t._v(" Импорт из Watt")]),t._v(" "),a("p",[t._v("При импорте файлов конфигурации из "),a("a",{attrs:{href:"https://github.com/tuyafeng/Watt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watt"),a("OutboundLink")],1),t._v(", каждый файл содержит правила для одного пакета, а имя файла является именем пакета с расширением "),a("code",[t._v(".xml")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Расположение файлов конфигурации в Watt: "),a("tt",[t._v("/sdcard/Android/data/com.tuyafeng.watt/files/ifw")])],1)]),t._v(" "),a("h4",{attrs:{id:"импорт-из-blocker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#импорт-из-blocker"}},[t._v("#")]),t._v(" Импорт из Blocker")]),t._v(" "),a("p",[t._v("При импорте правил блокировки из "),a("a",{attrs:{href:"https://github.com/lihenggui/blocker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blocker"),a("OutboundLink")],1),t._v(", каждый файл содержит правила для одного пакета. Эти файлы имеют расширение "),a("code",[t._v(".json")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"remove-all-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-all-rules"}},[t._v("#")]),t._v(" Remove all rules")]),t._v(" "),a("p",[t._v("One-click option to remove all rules configured within App Manager. This will enable all blocked components, app ops will be set to their default values and permissions will be granted.")]),t._v(" "),a("h2",{attrs:{id:"installer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installer"}},[t._v("#")]),t._v(" Installer")]),t._v(" "),a("p",[t._v("Installer specific options")]),t._v(" "),a("h3",{attrs:{id:"show-users-in-installer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-users-in-installer"}},[t._v("#")]),t._v(" Show users in installer")]),t._v(" "),a("p",[t._v("For root/ADB users, a list of users will be displayed before installing the app. The app will be installed only for the specified user (or all users if selected).")]),t._v(" "),a("h3",{attrs:{id:"sign-apk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-apk"}},[t._v("#")]),t._v(" Sign APK")]),t._v(" "),a("p",[t._v("Whether to sign the APK files before installing the app. See "),a("a",{attrs:{href:"#apk-signing"}},[t._v("APK signing")]),t._v(" section above to configure signing.")]),t._v(" "),a("h3",{attrs:{id:"install-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-location"}},[t._v("#")]),t._v(" Install location")]),t._v(" "),a("p",[t._v("Choose APK install location. This can be one of "),a("em",[t._v("auto")]),t._v(", "),a("em",[t._v("internal only")]),t._v(" and "),a("em",[t._v("prefer external")]),t._v(". Depending on Android version, the last option may not always install the app in the external storage.")]),t._v(" "),a("h3",{attrs:{id:"installer-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installer-app"}},[t._v("#")]),t._v(" Installer App")]),t._v(" "),a("p",[t._v("Select the installer app, useful for some apps which explicitly checks for installer. This only works for root/ADB users.")]),t._v(" "),a("h2",{attrs:{id:"backup-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-restore"}},[t._v("#")]),t._v(" Backup/Restore")]),t._v(" "),a("p",[t._v("Settings related to "),a("RouterLink",{attrs:{to:"/ru/guide/backup-restore.html"}},[t._v("backup/restore")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"compression-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compression-method"}},[t._v("#")]),t._v(" Compression method")]),t._v(" "),a("p",[t._v("Set which compression method to be used during backups. App Manager supports GZip and BZip2 compression methods, GZip being the default compression method. It doesn't affect the restore of an existing backup.")]),t._v(" "),a("h3",{attrs:{id:"backup-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-options"}},[t._v("#")]),t._v(" Backup Options")]),t._v(" "),a("p",[t._v("Customise the backup/restore dialog.")]),t._v(" "),a("h3",{attrs:{id:"backup-apps-with-android-keystore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-apps-with-android-keystore"}},[t._v("#")]),t._v(" Backup apps with Android KeyStore")]),t._v(" "),a("p",[t._v("Allow backup of apps that has entries in the Android KeyStore (disabled by default). Some apps (such as Signal) may crash if restored. KeyStore backup also doesn't work from Android 9 but still kept as many apps having KeyStore can be restored without problem.")]),t._v(" "),a("h3",{attrs:{id:"encryption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encryption"}},[t._v("#")]),t._v(" Encryption")]),t._v(" "),a("p",[t._v("Set an encryption method for the backups. AM currently supports OpenPGP only.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Caution")]),t._v(" "),a("p",[t._v("In v2.5.16, App Manager doesn't remember key IDs for a particular backup. You have to remember them yourself. This has been fixed in v2.5.18.")])]),t._v(" "),a("h2",{attrs:{id:"device-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#device-info"}},[t._v("#")]),t._v(" Device Info")]),t._v(" "),a("p",[t._v("Display Android version, security, CPU, GPU, battery, memory, screen, languages, user info, etc.")])])}),[],!1,null,null,null);e.default=s.exports}}]);