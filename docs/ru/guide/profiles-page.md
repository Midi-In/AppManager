---
sidebarDepth: 2
---

# Страница профилей
Страница профилей доступна из меню опций на главной странице. На ней отображен список настроенных профилей. Профили можно добавить с помощью кнопки _плюс_ в правом нижнем углу, импортировать через опцию импорт, создать из одной из предустановок или даже продублировать из уже существующего профиля. Нажатие на любой профиль открывает страницу [профили][profile].

::: details Таблица содержания
[[toc]]
:::

## Меню опций
На этой странице есть два варианта меню. Меню трех точек в правом верхнем углу предлагает две опции, _предустановки_ и _импорт_.
- **Предустановки** включает в себя несколько встроенных профилей, которые можно использовать в качестве отправной точки. Профили создаются из проекта [Universal Android Debloater][uad].

  _Смотрите также также: [Что такое bloatware и как их удалить?][faq_bloatware]_
- **Импорт.** Эта опция может быть использована для импорта существующего профиля.

Еще одно меню опций появляется при долгом нажатии на любой профиль. У них есть такие варианты, как
- **Применить сейчас….** Эта опция может быть использована для непосредственного применения профиля. При нажатии появится диалоговое окно, в котором вы можете выбрать [состояние профиля][profile_state]. При выборе одной из опций профиль будет применен немедленно.
- **Удалить.** Нажатие на удаление удалит профиль немедленно и без предупреждения.
- **Дублировать.** Эта опция может быть использована для дублирования профиля. При нажатии отображается поле ввода, в котором можно указать имя профиля. При нажатии на кнопку "OK" будет создан новый профиль и будет загружена страница [профиля][profile]. Профиль не будет сохранён до тех пор, пока вы не сохраните его вручную.
- **Экспорт.** Экспорт профиля во внешнее хранилище. Профиль, который экспортирован таким образом, можно импортировать с помощью параметра _Импорт_ в меню трех точек.
- **Создать ярлык.** Эта опция может использоваться для создания ярлыка для профиля. При нажатии будут два варианта: _Простой_ и _Расширенный_. Последняя опция позволяет установить состояние профиля [][profile_state] перед его применением, в то время как предыдущая опция использует состояние по умолчанию, которое было настроено при последнем сохранении профиля.

[uad]: https://gitlab.com/W1nst0n/universal-android-debloater
[faq_bloatware]: ../faq/misc.md#что-такое-bloatware-и-как-его-удалить
[profile]: ./profile-page.md
[profile_state]: ./profile-page.md#состояние
