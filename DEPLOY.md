# 🚀 Инструкция по Деплою на Vercel

## Что такое Vercel?

Vercel - это бесплатная платформа для хостинга веб-сайтов. Идеально подходит для Next.js приложений.

**Преимущества:**
- ✅ Совершенно бесплатно
- ✅ Доступ 24/7 из любой точки мира
- ✅ Быстрая загрузка
- ✅ Автоматический SSL сертификат (безопасное https соединение)
- ✅ Легко обновлять сайт

## 📋 Пошаговая инструкция

### Шаг 1: Подготовка проекта

1. Убедитесь, что все файлы на месте в папке `birthday-website`
2. Фотографии должны быть в `birthday-website/public/photo/`

### Шаг 2: Регистрация на Vercel

1. Перейдите на сайт [https://vercel.com](https://vercel.com)
2. Нажмите **"Sign Up"** (Регистрация)
3. Выберите вход через:
   - GitHub (рекомендуется)
   - GitLab
   - Bitbucket
   - или через Email

### Шаг 3: Загрузка проекта на GitHub (рекомендуемый способ)

#### Вариант A: Через GitHub Desktop (проще)

1. Скачайте [GitHub Desktop](https://desktop.github.com/)
2. Войдите в свой GitHub аккаунт
3. Нажмите **File → Add Local Repository**
4. Выберите папку `birthday-website`
5. Нажмите **Publish repository**
6. Снимите галочку "Keep this code private" если хотите публичный репозиторий
7. Нажмите **Publish**

#### Вариант B: Через командную строку

```bash
cd d:\HappyDayValeria\birthday-website
git init
git add .
git commit -m "Initial commit - Birthday website for Valeria"
git branch -M main
git remote add origin https://github.com/ВАШ_USERNAME/birthday-valeria.git
git push -u origin main
```

### Шаг 4: Деплой на Vercel

1. Войдите на [https://vercel.com](https://vercel.com)
2. Нажмите **"Add New..."** → **"Project"**
3. Выберите **"Import Git Repository"**
4. Найдите ваш репозиторий `birthday-valeria` и нажмите **Import**
5. Vercel автоматически определит Next.js настройки:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `next build`
   - Output Directory: `.next`
6. Нажмите **"Deploy"**
7. Подождите 1-2 минуты
8. 🎉 Готово! Ваш сайт доступен!

### Шаг 5: Получение ссылки на сайт

После успешного деплоя вы увидите:
- ✅ Зеленую галочку
- 🔗 Ссылку вида: `https://your-project-name.vercel.app`

**Эту ссылку можно отправить Валерии!** 💝

## 🔄 Как обновить сайт

Если захотите что-то изменить:

1. Внесите изменения в коде
2. Закоммитьте и запушьте на GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. Vercel автоматически обновит сайт за 1-2 минуты!

## 🎨 Альтернатива: Деплой без GitHub

Если не хотите использовать GitHub:

1. Войдите на [https://vercel.com](https://vercel.com)
2. Нажмите **"Add New..."** → **"Project"**
3. Выберите **"Deploy from template"** или загрузите папку напрямую
4. Перетащите папку `birthday-website` в браузер
5. Нажмите **"Deploy"**

## 🌟 Настройка своего домена (опционально)

Если хотите красивый адрес вместо `vercel.app`:

1. Купите домен (например, на [Namecheap](https://www.namecheap.com) или [REG.RU](https://www.reg.ru))
2. В Vercel зайдите в настройки проекта
3. Перейдите в **Domains**
4. Добавьте свой домен и следуйте инструкциям

## ❓ Возможные проблемы

### Ошибка "Module not found"
```bash
cd d:\HappyDayValeria\birthday-website
npm install
```

### Ошибка при деплое
- Проверьте, что все файлы закоммичены
- Убедитесь, что `package.json` на месте
- Попробуйте локально: `npm run build`

## 💝 Готово!

Теперь у вас есть красивый сайт-поздравление, доступный 24/7 из любой точки мира!

**Не забудьте отправить ссылку Валерии 26 октября!** 🎂🎉
