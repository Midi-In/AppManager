(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{413:function(t,v,_){"use strict";_.r(v);var s=_(25),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"резервное-копирование-восстановление"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#резервное-копирование-восстановление"}},[t._v("#")]),t._v(" Резервное копирование/восстановление")]),t._v(" "),_("p",[t._v("App Manager имеет современную, продвинутую и простую в использовании систему резервного копирования/восстановления, реализованную с нуля. Вероятно, это единственное приложение, в котором есть возможность не только восстановить данные приложения, но и разрешения и правила, которые вы настроили в App Manager. Вы также можете сделать резервную копию приложения несколько раз (с настраиваемыми именами) или для всех пользователей.")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("Подсказка")]),t._v(" "),_("p",[t._v("Резервное копирование/Восстановление полностью отличается от "),_("strong",[t._v("Резервного копирования APK")]),t._v(", которое также является частью пакетных операций.")])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("Таблица содержания")]),t._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#местоположение"}},[t._v("Местоположение")])]),_("li",[_("a",{attrs:{href:"#параметры-резервного-копирования"}},[t._v("Параметры резервного копирования")])]),_("li",[_("a",{attrs:{href:"#резервное-копирование"}},[t._v("Резервное копирование")])]),_("li",[_("a",{attrs:{href:"#восстановление"}},[t._v("Восстановление")])]),_("li",[_("a",{attrs:{href:"#удаление-резервнои-копии"}},[t._v("Удаление резервной копии")])]),_("li",[_("a",{attrs:{href:"#шифрование"}},[t._v("Шифрование")])])])]),_("p")]),t._v(" "),_("h2",{attrs:{id:"местоположение"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#местоположение"}},[t._v("#")]),t._v(" Местоположение")]),t._v(" "),_("p",[t._v("Резервное копирование/восстановление является частью "),_("RouterLink",{attrs:{to:"/ru/guide/main-page.html#пакетные-операции"}},[t._v("пакетных операций")]),t._v(". Также он находится в меню параметров "),_("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html#меню-опции"}}),t._v(" в вкладке "),_("RouterLink",{attrs:{to:"/ru/guide/app-details-page.html#вкладка-«о-приложении»"}},[t._v("Сведения о приложении")]),t._v(". Нажатие на "),_("strong",[t._v("Резервное копирование/восстановление")]),t._v(" открывает "),_("strong",[t._v("Параметры резервного копирования")]),t._v(". Резервные копии в настоящее время находятся в "),_("tt",[t._v("/sdcard/AppManager")]),t._v(".")],1),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("Подсказка")]),t._v(" "),_("p",[t._v("Если одна или несколько выбранных приложений не имеют резервной копии, параметры "),_("strong",[t._v("Восстановление")]),t._v(" и "),_("strong",[t._v("Удалить Резервную Копию")]),t._v(" не будут отображаться.")])]),t._v(" "),_("h2",{attrs:{id:"параметры-резервного-копирования"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#параметры-резервного-копирования"}},[t._v("#")]),t._v(" Параметры резервного копирования")]),t._v(" "),_("p",[t._v("Параметры резервного копирования (известные как флаги резервного копирования) позволяют настраивать резервные копии на лету. Тем не менее, настройки не будут запоминаться для будущих резервных копий. Если вы хотите настроить этот диалог, используйте "),_("RouterLink",{attrs:{to:"/ru/guide/settings-page.html#backup-options"}},[t._v("Резервное копирование параметров")]),t._v(" на странице "),_("RouterLink",{attrs:{to:"/ru/guide/settings-page.html"}},[t._v("Настройки")]),t._v(".")],1),t._v(" "),_("p",[t._v("Полное описание вариантов резервного копирования приводится ниже:")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Источник.")]),t._v(" Резервное копирование или восстановление всей исходной директории. Когда вы устанавливаете приложение, APK файлы хранятся внутри "),_("tt",[t._v("/data/app/")]),t._v(" вместе с любыми собственными библиотеками, а также другими файлами, такими как файлы ODEX и VDEX. Этот каталог называется "),_("strong",[t._v("исходный каталог")]),t._v(" или "),_("strong",[t._v("код пути")]),t._v(". Вы можете дополнительно изменить это, используя опцию "),_("strong",[t._v("только APK")]),t._v(".")],1),t._v(" "),_("li",[_("strong",[t._v("Только APK.")]),t._v(" При включении параметра "),_("strong",[t._v("Источник")]),t._v(" будет произведено резервное копирование или восстановление всей исходной директории. Включение этой функции вместе с пунктом"),_("strong",[t._v("Источник")]),t._v(" позволит сделать резервную копию или восстановление APK файлов и пропустить резервное копирование нативных библиотек или файлов ODEX и VDEX.")]),t._v(" "),_("li",[_("strong",[t._v("Данные.")]),t._v(" Следует ли создавать резервную копию внутренних каталогов данных. Эти каталоги находятся в "),_("tt",[t._v("/data/user/<user_id>")]),t._v(" и (для Android N или выше) "),_("tt",[t._v("/data/user_de/<user_id>")]),t._v(".")],1),t._v(" "),_("li",[_("strong",[t._v("Внешние данные.")]),t._v(" Резервное копирование директорий данных, расположенных во внутренней памяти и SD-карте (если есть). Внешние каталоги данных часто содержат ненужные данные приложения или медиафайлы (вместо использования выделенной медиа папки) и могут увеличить размер резервной копии. Но для некоторых приложений эти данные могут быть очень важными. Хотя этот пункт не отмечен по умолчанию (так как он может резко увеличить размер резервных копий), рекомендуем проверить его, чтобы обеспечить плавное восстановление ваших резервных копий.")]),t._v(" "),_("li",[_("strong",[t._v("OBB и медиа.")]),t._v(" Резервное копирование или восстановление OBB и каталогов мультимедиа, расположенных во внешнем хранилище или на SD-карте. Это полезно для игр и некоторых графических программ, которые на самом деле используют эти папки.")]),t._v(" "),_("li",[_("strong",[t._v("Исключить кэш.")]),t._v(" В Android приложениях есть несколько кэш-директорий, расположенных в каждой папке данных (как внутренней, так и внешней). Существует два типа кэша: "),_("strong",[t._v("кэш")]),t._v(" и "),_("strong",[t._v("кэш кода")]),t._v(". Включение этой опции исключает оба каталога кэша из всех каталогов данных. Обычно рекомендуется исключать каталоги кеша, поскольку большинство приложений не очищают кеш (по какой-то причине единственный способ, которым приложение может очистить свой кеш, - это удалить весь каталог кеша) и обычно это делается самой ОС. Такие приложения, как Telegram, могут использовать очень большой кеш (в зависимости от объема хранилища), что может значительно увеличить размер вашей резервной копии. Когда эта опция включена, AM также игнорирует резервное копирование из каталогов "),_("strong",[t._v("no_backup")]),t._v(".")]),t._v(" "),_("li",[_("strong",[t._v("Дополнительно.")]),t._v(" Резервное копирование или восстановление разрешений приложений, включено по умолчанию. Обратите внимание, что правила блокировки применяются "),_("em",[t._v("после")]),t._v(" применения разрешений. Таким образом, если разрешение также доступно в правилах блокировки, оно будет перезаписано (то есть будет использовано разрешение из правил блокировки).")]),t._v(" "),_("li",[_("strong",[t._v("Правила.")]),t._v(" Этот параметр позволяет создавать резервные копии правил блокировки, настроенных в диспетчере приложений. Это может пригодиться, если у вас настроены разрешения или заблокированы некоторые компоненты с помощью App Manager, поскольку они также будут скопированы или восстановлены при включении этой опции.")]),t._v(" "),_("li",[_("strong",[t._v("Создание нескольких резервных копий.")]),t._v(" По умолчанию резервные копии сохраняются с использованием идентификатора пользователя. Включение этой опции позволяет создавать дополнительные резервные копии. Эти резервные копии используют текущую дату и время в качестве имени резервной копии по умолчанию, но вы также можете указать пользовательское имя резервного копирования, используя поле ввода, отображаемое при нажатии на кнопку "),_("strong",[t._v("Резервное копирование(Бекап)")]),t._v(".")]),t._v(" "),_("li",[_("strong",[t._v("Все пользователи.")]),t._v(" Резервное копирование или восстановление для всех пользователей, а не только для текущего пользователя. "),_("em",[t._v("Эта опция устарела и будет заменена более подходящим вариантом в будущем.")])]),t._v(" "),_("li",[_("strong",[t._v("Пропустить проверку подписи.")]),t._v(" При создании резервной копии, контрольная сумма каждого файла (так же как и сертификат(ы) подписи базового APK файла) создается и хранится в виде файла "),_("code",[t._v("checksums.txt")]),t._v(". При восстановлении резервной копии контрольные суммы сгенерируются снова и будут совпадать с контрольными суммами, хранящимися в указанном файле. Включение этой опции отключит проверку подписи. Эта опция применяется только при восстановлении резервной копии. Во время резервного копирования контрольные суммы создаются независимо от этого параметра."),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("Предупреждение")]),t._v(" "),_("p",[t._v("Вы всегда должны отключить эту опцию, чтобы убедиться, что ваши резервные копии не были изменены сторонними приложениями. Верификация контрольных сумм работает только при включении шифрования.")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("Примечание")]),t._v(" "),_("p",[t._v("App Manager пока не поддерживает восстановление правилStorage-Access-Framework (SAF). Вы должны включить их вручную после восстановления резервной копии.")])])])]),t._v(" "),_("h2",{attrs:{id:"резервное-копирование"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#резервное-копирование"}},[t._v("#")]),t._v(" Резервное копирование")]),t._v(" "),_("p",[t._v("Резервное копирование учитывает все параметры резервного копирования, кроме "),_("strong",[t._v("пропуска проверки подписи")]),t._v(". Если базовые резервные копии (т.е. резервные копии, которые не имеют опции "),_("strong",[t._v("Создание нескольких резервных копий")]),t._v("), уже существуют, вы получите предупреждение, так как резервные копии будут перезаписаны. Если активирована опция "),_("strong",[t._v("Создание нескольких резервных копий")]),t._v(", у вас есть возможность ввести имя резервной копии. Или вы можете оставить его пустым, чтобы использовать текущую дату.")]),t._v(" "),_("h2",{attrs:{id:"восстановление"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#восстановление"}},[t._v("#")]),t._v(" Восстановление")]),t._v(" "),_("p",[t._v("При восстановлении учитываются все параметры резервного копирования и его не удастся выполнить, если установлен параметр "),_("strong",[t._v("Источник")]),t._v(", но резервная копия не содержит исходных резервных копий, или в других случаях, если приложение не установлено. При восстановлении резервных копий для нескольких пакетов, вы можете только восстановить базовые резервные копии (см. раздел "),_("a",{attrs:{href:"#%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%B2%D0%BD%D0%BE%D0%B5-%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"}},[t._v("Резервное копирование")]),t._v(" для объяснения). Однако, при восстановлении резервных копий для одного пакета, у вас есть возможность выбрать резервную копию для восстановления. Если выбраны опция "),_("strong",[t._v("Все пользователи")]),t._v(" AM восстановит выбранную резервную копию для всех пользователей в последнем случае, но в первом случае он восстановит базовые резервные копии для соответствующих пользователей.")]),t._v(" "),_("h2",{attrs:{id:"удаление-резервнои-копии"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#удаление-резервнои-копии"}},[t._v("#")]),t._v(" Удаление резервной копии")]),t._v(" "),_("p",[t._v("При удалении резервной копии учитывается только параметр "),_("strong",[t._v("Все пользователи")]),t._v(", и когда он выбран, с запросом будут удалены только базовые резервные копии для всех пользователей. При удалении резервных копий для одного пакета будет показан еще один диалог, в котором вы можете выбрать резервную копию для удаления.")]),t._v(" "),_("h2",{attrs:{id:"шифрование"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#шифрование"}},[t._v("#")]),t._v(" Шифрование")]),t._v(" "),_("p",[t._v("App Manager в настоящее время поддерживает шифрование OpenPGP. Чтобы включить его, вам необходимо установить поставщика OpenPGP, например "),_("a",{attrs:{href:"https://openkeychain.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenKeychain"),_("OutboundLink")],1),t._v(". Для настройки поставщика OpenPGP, перейдите на "),_("RouterLink",{attrs:{to:"/ru/guide/settings-page.html"}},[t._v("страницу настроек")]),t._v(".")],1)])}),[],!1,null,null,null);v.default=a.exports}}]);