# Simulasi SNBT

Buatkan saya website SIMULASI SNBT/UTBK lengkap yang benar-benar berfungsi dan siap digunakan, bukan sekadar landing page atau mockup.

KONSEP UTAMA

Website bernama SNBT Simulator.

Website ditujukan untuk siswa Indonesia yang ingin berlatih menghadapi SNBT.

Tidak perlu login atau registrasi.

User cukup:

Membuka website.

Memasukkan nama.

Masuk sebagai Guest.

Memilih simulasi.

Mengerjakan soal.

Melihat timer.

Menyelesaikan simulasi.

Mendapatkan skor.

Melihat pembahasan.

Melihat riwayat.

Melihat ranking/leaderboard.

Gunakan LocalStorage untuk menyimpan data Guest, progress ujian, dan riwayat pada versi pertama.

DESAIN

Buat desain yang terlihat seperti platform belajar premium Indonesia.

Style:

Modern

Clean

Profesional

Minimalis

Elegan

Student-friendly

Responsive

Mobile-first

Gunakan warna utama biru/indigo dengan aksen yang menarik.

Buat:

Light Mode

Dark Mode

Smooth transition

Card modern

Rounded corners

Subtle shadows

Progress bars

Modern icons

Jangan membuat desain terlalu ramai.

Pada halaman ujian, prioritaskan kenyamanan membaca dan fokus mengerjakan soal.

LANDING PAGE

Buat landing page lengkap.

Hero:

Latihan SNBT Lebih Terarah

Subtitle:

Simulasikan pengalaman ujian, ukur kemampuanmu, dan lihat perkembanganmu.

Button:

Mulai Simulasi

Tambahkan section:

Fitur

Simulasi SNBT

Timer Real-Time

Pembahasan Lengkap

Statistik Performa

Leaderboard

Riwayat Simulasi

Subtes

Tampilkan seluruh subtes yang tersedia.

Cara Kerja

Masukkan nama

Pilih simulasi

Kerjakan soal

Lihat hasil

Evaluasi kemampuan

CTA

Siap menguji kemampuanmu?

Button:

Mulai Simulasi

GUEST SYSTEM

Tidak ada:

Login

Register

Password

Email

OTP

User cukup memasukkan nama.

Tampilkan:

Masukkan nama kamu

Input nama.

Validasi:

Minimal 2 karakter

Maksimal 30 karakter

Tidak boleh kosong

Buat Guest ID otomatis menggunakan UUID.

Simpan data Guest di LocalStorage.

Contoh:

guestId
name
createdAt


DASHBOARD

Setelah memasukkan nama:

Halo, [Nama] 👋

Siap latihan hari ini?

Tampilkan tombol:

Mulai Simulasi

Statistik:

Rata-rata skor

Best score

Total simulasi

Rata-rata akurasi

Tambahkan:

Simulasi terakhir

Progress

Rekomendasi latihan

Subtes yang perlu ditingkatkan

Contoh:

Best Score
642

Rata-rata
580

Total Simulasi
8

Akurasi
78%


PEMILIHAN SIMULASI

Buat halaman pemilihan simulasi.

Simulasi SNBT Lengkap

Mencakup seluruh subtes.

Latihan Per Subtes

Buat pilihan:

Penalaran Umum

Pengetahuan dan Pemahaman Umum

Pemahaman Bacaan dan Menulis

Pengetahuan Kuantitatif

Literasi Bahasa Indonesia

Literasi Bahasa Inggris

Penalaran Matematika

Quick Practice

Mode latihan singkat dengan jumlah soal lebih sedikit.

Buat desain card yang menarik dan informatif.

BANK SOAL

Buat Question Bank yang benar-benar berfungsi.

Jangan menggunakan soal placeholder seperti:

"Contoh soal nomor 1"

Buat soal latihan yang realistis dan berkualitas.

Gunakan pola, kompetensi, tingkat kesulitan, dan karakteristik soal SNBT/UTBK tahun-tahun sebelumnya sebagai referensi.

Jangan menyalin soal resmi berhak cipta secara mentah dalam jumlah besar.

Buat soal original yang memiliki karakteristik dan kompetensi serupa.

Jangan mengklaim soal buatan sebagai soal resmi SNBT.

Setiap soal memiliki:

Pertanyaan

5 opsi jawaban jika sesuai format

Jawaban benar

Pembahasan

Tingkat kesulitan

Topik

JUMLAH SOAL

Buat bank soal awal yang cukup untuk membuat website benar-benar dapat digunakan.

Target:

Minimal 20 soal per subtes jika memungkinkan.

Variasi tingkat kesulitan:

Easy

Medium

Hard

Variasi topik.

Jangan membuat website yang hanya memiliki 3–5 soal dummy.

Buat struktur sehingga soal dapat ditambahkan dengan mudah nantinya.

MATA PELAJARAN / SUBTES

Gunakan struktur subtes SNBT yang relevan saat ini:

Penalaran Umum

Materi:

Logika

Analisis

Pola

Hubungan

Penalaran

Evaluasi argumen

Problem solving

Pengetahuan dan Pemahaman Umum

Materi:

Kosakata

Makna kata

Konsep

Konteks

Hubungan informasi

Pemahaman Bacaan dan Menulis

Materi:

Ide utama

Informasi tersurat

Inferensi

Kesimpulan

Struktur teks

Hubungan paragraf

Efektivitas kalimat

Tata bahasa

Gunakan bacaan/stimulus yang realistis.

Pengetahuan Kuantitatif

Materi:

Aritmetika

Aljabar

Perbandingan

Geometri

Statistika

Probabilitas

Data

Soal kontekstual

Literasi Bahasa Indonesia

Materi:

Pemahaman bacaan

Analisis informasi

Inferensi

Evaluasi

Kesimpulan

Literasi Bahasa Inggris

Materi:

Main idea

Detail

Inference

Vocabulary

Reference

Author's purpose

Conclusion

Penalaran Matematika

Materi:

Pemodelan matematika

Interpretasi data

Penalaran

Analisis

Problem solving

Masalah kontekstual

EXAM INTERFACE

Buat interface ujian profesional seperti platform CBT.

Header:

SNBT Simulator

Penalaran Umum

Waktu tersisa
01:24:32


Content:

Soal 12 dari 30

[PERTANYAAN]

A. ...
B. ...
C. ...
D. ...
E. ...


Bottom:

[← Sebelumnya]

[Tandai Soal]

[Berikutnya →]


TIMER

Timer harus benar-benar bekerja.

Gunakan timestamp agar timer tidak reset ketika halaman direfresh.

Simpan:

startedAt

endsAt

Timer harus tetap berjalan setelah refresh.

Berikan warning ketika:

10 menit tersisa

5 menit tersisa

1 menit tersisa

Ketika timer mencapai 00:00:

Disable input.

Simpan jawaban.

Submit otomatis.

Hitung skor.

Simpan hasil.

Tampilkan halaman hasil.

QUESTION NAVIGATOR

Buat navigator nomor soal:

1  2  3  4  5
6  7  8  9  10
11 12 13 14 15


Status:

Abu-abu = belum dijawab

Hijau = sudah dijawab

Kuning = ditandai

Biru = sedang dibuka

Tambahkan legend.

User dapat langsung mengklik nomor soal.

Pada mobile, jadikan navigator sebagai drawer/modal.

MARK QUESTION

User dapat menandai soal:

☆ Tandai Soal

Soal yang ditandai tampil warna kuning.

User dapat membatalkan tanda tersebut.

AUTO SAVE

Progress harus otomatis tersimpan.

Jika user refresh halaman atau browser tertutup, tampilkan:

Kamu memiliki simulasi yang belum selesai.

Pilihan:

Lanjutkan

atau

Mulai Ulang

Simpan:

Current question

Answers

Marked questions

startedAt

endsAt

Exam ID

RANDOMIZATION

Tambahkan opsi:

Shuffle questions

Shuffle answer options

Pastikan randomization tidak merusak jawaban benar.

Jika user refresh halaman saat sedang ujian, urutan soal tidak boleh berubah.

SUBMIT

Sebelum submit tampilkan modal:

Apakah kamu yakin ingin menyelesaikan simulasi?

Tampilkan:

Terjawab: 72
Belum dijawab: 18
Ditandai: 4


Button:

Kembali

Selesaikan Simulasi

Jika masih ada soal yang belum dijawab, berikan warning.

SCORING

Buat sistem scoring yang terpisah dari UI.

Hitung:

Skor

Benar

Salah

Tidak dijawab

Akurasi

Skor per subtes

Buat scoring configurable sehingga dapat diubah nantinya.

Jangan menyebut skor sebagai skor resmi SNBT.

Tampilkan:

Skor simulasi merupakan estimasi untuk latihan dan bukan skor resmi SNBT.

RESULT PAGE

Setelah selesai:

🎉 Simulasi Selesai!

Budi

SKOR

612

Akurasi
80%

Benar
72

Salah
18

Tidak Dijawab
10


Tambahkan grafik:

Performa tiap subtes

Benar vs salah

Akurasi

Tingkat kesulitan

Tambahkan:

Kemampuan Terbaik

Yang Perlu Ditingkatkan

Rekomendasi harus berdasarkan hasil nyata pengguna.

Button:

Review Jawaban

Kembali ke Dashboard

Coba Lagi

REVIEW SOAL

Buat halaman review.

Setiap soal menampilkan:

Soal 12

Jawaban kamu:
B

Jawaban benar:
D

❌ Salah

Pembahasan:
...


Jika benar:

✓ Jawaban benar


Jika tidak dijawab:

Tidak dijawab


Tampilkan pembahasan lengkap.

HISTORY

Buat halaman:

Riwayat Simulasi

Tampilkan:

SimulasiTanggalSkorAkurasi

User dapat membuka hasil simulasi sebelumnya.

Simpan history di LocalStorage.

LEADERBOARD

Buat halaman:

Leaderboard

Tampilkan:

RankNamaSkorAkurasiWaktu

Ranking:

Skor tertinggi

Jika skor sama → akurasi tertinggi

Jika masih sama → waktu tercepat

Karena belum menggunakan backend, gunakan LocalStorage untuk versi pertama.

Buat arsitektur yang nantinya mudah dihubungkan dengan database/backend untuk leaderboard global.

PROFILE GUEST

Tampilkan:

Budi
Guest User

Best Score
642

Total Simulasi
8


Tidak perlu login.

RESPONSIVE DESIGN

Website wajib bagus pada:

Mobile 360px+

Tablet

Laptop

Desktop

Pastikan:

Tidak ada horizontal scrolling.

Tombol mudah ditekan di HP.

Timer mudah dilihat.

Navigator nyaman digunakan.

Sidebar berubah menjadi drawer di mobile.

Exam controls dapat menjadi sticky bottom bar di mobile.

DARK MODE

Tambahkan tombol:

☀️ / 🌙

Simpan pilihan user di LocalStorage.

ACCESSIBILITY

Gunakan:

Semantic HTML

Keyboard navigation

Focus states

Kontras yang baik

Accessible buttons

ARIA labels jika diperlukan

Jangan hanya menggunakan warna untuk menunjukkan status soal.

ERROR HANDLING

Tangani:

LocalStorage corrupt

Data sesi rusak

Timer invalid

Question ID tidak ditemukan

Exam tidak ditemukan

Browser refresh

Browser back

Jangan sampai website menjadi blank screen.

Jika data rusak, berikan opsi reset dengan aman.

ARSITEKTUR DATA

Gunakan struktur data yang modular.

Contoh:

questions
  ├── penalaran-umum
  ├── pengetahuan-pemahaman-umum
  ├── pemahaman-bacaan-menulis
  ├── pengetahuan-kuantitatif
  ├── literasi-indonesia
  ├── literasi-inggris
  └── penalaran-matematika


Setiap soal memiliki struktur:

id
sectionId
question
options
correctAnswer
explanation
difficulty
topic
source


Pisahkan data soal dari logic aplikasi.

Saya harus dapat menambahkan soal baru tanpa mengubah exam engine.

FLEXIBLE SYSTEM

Buat sistem yang mudah dikembangkan.

Saya nantinya ingin dapat:

Menambah simulasi baru

Menambah subtes

Menambah soal

Mengubah jumlah soal

Mengubah durasi

Mengubah scoring

Mengubah branding

tanpa harus menulis ulang aplikasi.

FUTURE BACKEND

Jangan membuat login atau backend sekarang.

Namun struktur aplikasi harus siap dikembangkan menjadi:

Supabase

Database

Global leaderboard

Admin panel

Cloud question bank

Authentication

Google Login

Statistik pengguna

Subscription

Payment

Analytics

Untuk versi sekarang, gunakan LocalStorage.

KUALITAS SOAL

Sangat penting:

Jangan membuat soal yang terlalu mudah atau generik.

Buat soal yang benar-benar menguji:

Penalaran

Pemahaman

Analisis

Inferensi

Pemecahan masalah

Interpretasi data

Buat stimulus yang realistis.

Untuk soal literasi, gunakan bacaan yang cukup panjang dan berkualitas.

Untuk matematika, gunakan soal kontekstual dan penalaran, bukan sekadar operasi hitung sederhana.

Setiap soal wajib memiliki pembahasan.

COPYRIGHT

Jangan menyalin soal resmi SNBT/UTBK tahun-tahun sebelumnya secara mentah dalam jumlah besar.

Gunakan soal publik sebelumnya hanya sebagai referensi untuk memahami format, kompetensi, dan karakteristik soal.

Buat soal original dengan kualitas dan pola yang mirip.

Jangan menyatakan soal buatan sebagai soal resmi.

TECHNICAL REQUIREMENTS

Gunakan component-based architecture.

Pisahkan:

UI components

Pages

Question data

Exam engine

Scoring

Storage

Leaderboard

Utilities

Hindari satu file besar.

Gunakan TypeScript dengan type yang jelas.

Hindari penggunaan any secara berlebihan.

FINAL CHECK

Sebelum menyatakan website selesai, pastikan seluruh flow ini benar-benar bekerja:

Landing Page
↓
Masukkan Nama
↓
Guest Dashboard
↓
Pilih Simulasi
↓
Instruksi
↓
Mulai Ujian
↓
Timer
↓
Jawab Soal
↓
Navigasi
↓
Tandai Soal
↓
Auto Save
↓
Submit
↓
Scoring
↓
Result
↓
Review Pembahasan
↓
History
↓
Leaderboard


Pastikan website:

Tidak memiliki broken button.

Tidak memiliki halaman kosong.

Tidak menggunakan placeholder untuk fitur utama.

Tidak kehilangan progress ketika refresh.

Timer tidak reset ketika refresh.

Scoring benar.

Shuffle tidak merusak jawaban.

Review menampilkan jawaban yang benar.

History tersimpan.

Leaderboard berfungsi.

Dark mode berfungsi.

Mobile responsive.

Desktop responsive.

INSTRUKSI TERAKHIR

Jangan hanya memberikan saya desain atau penjelasan. Bangun website-nya secara langsung di Lovable.

Implementasikan seluruh fitur utama sampai website benar-benar dapat digunakan.

Jika ada bagian yang belum sempurna, prioritaskan agar core exam experience terlebih dahulu benar-benar berfungsi:

Guest

Question Bank

Exam Engine

Timer

Navigation

Auto Save

Submit

Scoring

Result

Review

Setelah itu sempurnakan Dashboard, History, Leaderboard, Dark Mode, dan responsive design.

Mulai membangun website SNBT Simulator sekarang.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://simulasi-snbt.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/463fbfcd-2aa0-43e0-af98-c58991f2e8da).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
