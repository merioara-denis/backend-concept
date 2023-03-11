## Концепция

Модуль на стороне backend описывает контракт между Backend и Frontend

Backend берёт на себя описание моделей и методов взаимодействия, реализует только логику модуля без привязки к приложению.

- Модель данных которые будут отдаваться
- Модель Repository (это набор методов к которым обращается модуль для получения данных)
- Имплементация методов API

## Использование и реализация

для использования модуля на стороне Backend разработчику требуется установить пакет с модулям (зависимость), 
имплементировать IRepository (сбор и агрегирование данных из базы) и инициализировать модуль в приложений.

## Результат

- Модуль сократит время разработки перенеиспользуемого функционала
- Предоставит возможность делиться решениями
- Будет предоставлять возможность расширения и масштабирования

```
Controller - набор методов для обеспечения работоспособность
Repository - class или сервис для получения данных
Model - интерфейс описывающий структуру данных
```

## Структура проекта

```
┬ src
└┬ main (реализация приложения)
 ├ module-search (реализация модуля)
```