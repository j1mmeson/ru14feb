В файле Google Sheets создать и поставить первым пустой лист.

На него скопировать данные с ответами при помощи формулы ниже.

```
=IMPORTRANGE("ID таблицы"; "Название листа с ответами!A2:C10001")
```

Создать столбец (в HTML предполагается 4-й по счету) с формулой, где B1 - ячейка с адресом и растянуть формулу на нужное кол-во строк (10000 в примере выше).

```
=GOOGLEMAPS_LATLONG(B1)
```

Формулу добавить в Редактор скриптов Google Sheets из файла Code.gs.

В веб-странице указать встраиваемый код (iframe) для формы Google Forms и ссылку на Google Sheet (она вида https://spreadsheets.google.com/feeds/cells/ID таблицы/1/public/full?alt=json)

Пример ID таблицы (между /d/ и /edit) https://docs.google.com/spreadsheets/d/1pIj0m7_5JQcnR7x7zG2CcuQ822JZFpT8YdgeZnvlWPU/edit
