* Туллинг

- git + package.json - инициализация
- ESLint(Prettier опционально). Настроил linter
- Autoformat. Автоформатирование - fix и фиксить его.
- Husky - что это за пакет. Испольвать husky -> добавить hook на pre-commit(pre-push) - запускать линтер.

- Lint-staged
- EditorConfig // вариант конфига для IDE
- Test // E2E и integration в первую очередь, unit по возможности.
- Test coverage // Можно добавить.

* Что нужно иметь в проекте

- Тесты.
- Логирование. Не console.log, а какой-то пакет типа pino, winston и т.д.
- Мониторинг.
- Профилирование.
- Code analytics.

Логирование - почему console.log(console.info/console.error) не подходит?
// console.log хорош для разработки -> пишет в stdout
// Пакеты для работы с логами -> могут писать в разные места, от файла, до ELK(собирать логи, искать по ним, графически отобржать). pino, bunyan, winston.
// Логов может быть много, они могут быть многоуровневыми. Один поток запимался нашим кодом, другой поток писал логи.

Мониторинг. Что мониторить?
- лежит ли сервер. boolean: 1 или 0.
- время ответа. latency.
- RPS - request per second.
- CPU/mem/disk space - параметры системы.
- Метрики между точками - У нас 10K RPS -> 2KRPS

Профилирование - мы сами проверяет
А как наша система поведет под большой нагрузкой?
yandex-task, autocannon, apache benchmark

* Код

- чистый код. Что это?
KISS - keep it simple stupid
DRY - do not repeat yourself
SOLID
GRASP
Паттерны проектирования: порождающих паттернов, заканчивая поведения.
Observer
Singleton
Fabrica
Public subscriber
Открытый модуль

Называйте переменные понятно, не пишете GoD модули/методы/функции - это когда много кода и попытка сделать униврсальное что-то

Не трогать если работает?
- покройте теста.
- трогайте(и рефакторите).

- заставить его работать
- занимайтесь оптимизацией

- слоистая архитектура
Используете компоненты. Лучше 3 с минимумом кода компонента, чем 1 запутанный.
MVC - модуль-вью-контроллер
DDD - domain driven development
Хорошии примеры из системы

сцепление и связность

1. Пару задач на event loop
2. Best practise NodeJS
3. Stream
4. Error
5. Процессы и потоки.

// Представьте что вы начинаете "с нуля" новый проект на Javascript. Как начнете? Что добавить?
// Без чего будет грусно разрабатывать? И какие хорошие практики по созданию и поддержке?

// git -> npm -> jest -> linters -> ci/cd -> write code
// c архитектуру
// 


// stdin, stdout, stderr

// Задача, прочитать большой файл и с ним поработать.
// Прочитать файл, зашифровать его и записать куда-то.
// Подход без стримов - читаем весь файл, его обрабатываем и записываем весь.
// Читаем наш файл частями(чанками/chuck), его сразу обрабатываем и записывает.
