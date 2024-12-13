# 🎬 **Movie App**

## 📚 توضیحات پروژه

"Movie App" یک برنامه وب ساده است که با استفاده از **HTML**، **CSS**، **JavaScript** و **Dart** ساخته شده است. این اپلیکیشن به کاربران این امکان را می‌دهد که فیلم‌ها را جستجو کنند و اطلاعات دقیقی از آن‌ها مشاهده کنند. این پروژه برای یک دوره دانشگاهی ایجاد شده و بر روی **رابط کاربری** و **تعاملات پایه‌ای** تمرکز دارد.

---

## 🛠️ **تکنولوژی‌ها و زبان‌های استفاده شده**

- **HTML**: برای ساختار صفحات وب.
- **CSS**: برای طراحی و استایل صفحات.
- **JavaScript**: برای عملکردهای داینامیک.
- **Dart**: برای بک‌اند و اتصال به سرور
- **MySQL**: برای دیتابیس جهت ذخیره‌سازی اطلاعات فیلم‌ها.

---

## 📥 **نصب و راه‌اندازی**

### 1. کلون کردن مخزن
برای شروع، ابتدا پروژه را از گیت‌هاب کلون کنید:

```bash
git clone https://github.com/Ali66196/movie-App-main
```

### 2. نصب وابستگی‌ها
به پوشه پروژه بروید و دستور زیر را برای نصب وابستگی‌ها اجرا کنید:

```bash
cd movie-app
pub get
```

### 3. راه‌اندازی دیتابیس

برای ایجاد دیتابیس و جدول‌های مورد نیاز، مراحل زیر را دنبال کنید:

1. **ایجاد دیتابیس**: ابتدا وارد MySQL شوید و دیتابیس `movie_db` را ایجاد کنید.

```sql
CREATE DATABASE movie_db;
```

2. **ایجاد جدول**: برای ایجاد جدول `movies`، دستور زیر را اجرا کنید:

```sql
CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  genre VARCHAR(100),
  rating DECIMAL(3, 1),
  cover_image_url VARCHAR(255)
);
```

3. **پیکربندی اتصال به دیتابیس**: در فایل `server.dart`، اطلاعات اتصال به دیتابیس خود (مانند یوزرنیم و پسورد) را در خطوط 9 تا 18 وارد کنید:

```dart
import 'package:mysql1/mysql1.dart';

var settings = ConnectionSettings(
  host: 'localhost',  // آدرس سرور دیتابیس
  port: 3306,         // پورت پیش‌فرض MySQL
  user: 'your_username',  // یوزرنیم MySQL
  password: 'your_password',  // پسورد MySQL
  db: 'movie_db',     // نام دیتابیس
);
```

### 4. اجرای پروژه
برای اجرای پروژه و مشاهده آن در مرورگر خود، دستور زیر را وارد کنید:

```bash
dart run
```

## 👥 **اعضای تیم**


- **Ali Shahmoradi** 
- **MohammadJavad Takallo** 
- **Mohammad** 

---

## 🎨 **طراحی رابط کاربری (UI/UX)**

- **Mardin shahbaziy** – طراح رابط کاربری (UI/UX)
- https://www.figma.com/community/file/1447649440846722932

---

## 🔧 **مشارکت در پروژه**

برای مشارکت در این پروژه، لطفاً مخزن را فورک کرده، تغییرات خود را اعمال کرده و یک pull request ارسال کنید. همه پیشنهادات و مشارکت‌ها خوش‌آمد هستند!

### توضیحات اضافه:

1. **ایجاد دیتابیس و جدول**: در بخش "راه‌اندازی دیتابیس" مراحل لازم برای ایجاد دیتابیس `movie_db` و جدول `movies` به صورت دقیق ذکر شده است. در این بخش، اطلاعات مربوط به فیلدهای جدول مانند `id`، `title`، `genre`، `rating` و `cover_image_url` آمده است.

2. **پیکربندی فایل `server.dart`**: برای اتصال به دیتابیس، کاربران باید اطلاعات مربوط به یوزرنیم و پسورد دیتابیس را در فایل `server.dart` وارد کنند. این کار در خطوط 9 تا 18 فایل انجام می‌شود.