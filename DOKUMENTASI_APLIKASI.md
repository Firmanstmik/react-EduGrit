# DOKUMENTASI APLIKASI EDU-GRIT

## 📋 Daftar Isi
1. [Halaman Home](#1-halaman-home)
2. [Halaman About](#2-halaman-about)
3. [Halaman Login](#3-halaman-login)
4. [Dashboard Student](#4-dashboard-student)
5. [Dashboard Advisor](#5-dashboard-advisor)
6. [Dashboard Kaprodi](#6-dashboard-kaprodi)
7. [Dashboard Head](#7-dashboard-head)
8. [Dashboard Admin](#8-dashboard-admin)
9. [Halaman Survey](#9-halaman-survey)
10. [Halaman Result](#10-halaman-result)
11. [Halaman Aspirations](#11-halaman-aspirations)
12. [Halaman Profile](#12-halaman-profile)
13. [Halaman Admin Panel](#13-halaman-admin-panel)
14. [Fitur Bilingual](#14-fitur-bilingual)

---

## 1. HALAMAN HOME

### URL: `/`

### Deskripsi:
Halaman utama aplikasi Edu-GRIT yang menampilkan informasi umum tentang platform dan fitur-fitur yang tersedia.

### Fitur Utama:
- **Hero Section**: Menampilkan judul "Selamat Datang di Edu-GRIT" dengan tagline platform
- **Call-to-Action Buttons**: 
  - Tombol "Masuk" untuk user yang belum login
  - Tombol "Tentang Aplikasi" untuk melihat informasi lebih lanjut
  - Tombol "Dashboard" dan "Survey" untuk user yang sudah login
- **Feature Cards**: Menampilkan 3 fitur utama:
  1. **Analisis GRIT Berbasis AI**: Menggunakan Natural Language Processing untuk menganalisis tingkat GRIT mahasiswa
  2. **Visualisasi Data**: Dashboard interaktif dengan grafik dan statistik
  3. **Rekomendasi Personal**: Saran intervensi berdasarkan hasil analisis

### Komponen Visual:
- Gradient background (biru muda ke putih)
- Card dengan shadow dan hover effect
- Ikon untuk setiap fitur
- Responsive design untuk mobile dan desktop

### Screenshot yang Perlu Diambil:
1. Tampilan full page (sebelum login)
2. Tampilan full page (setelah login sebagai student)
3. Tampilan feature cards
4. Tampilan mobile responsive

---

## 2. HALAMAN ABOUT

### URL: `/about`

### Deskripsi:
Halaman yang menjelaskan tentang aplikasi Edu-GRIT, misi, teknologi yang digunakan, dan informasi pengembang.

### Fitur Utama:

#### A. Mission Section
- Menjelaskan misi utama aplikasi
- Fokus pada deteksi dini mahasiswa yang membutuhkan bantuan
- Mendukung kesejahteraan mental dan akademik

#### B. SDGs Alignment
Menampilkan keselarasan dengan Sustainable Development Goals:
- **SDG 3**: Kesehatan yang Baik dan Kesejahteraan
  - Mendukung kesehatan mental mahasiswa
  - Deteksi dini masalah akademik
- **SDG 4**: Pendidikan Berkualitas
  - Meningkatkan kualitas pendidikan
  - Personalisasi pembelajaran

#### C. Technology Stack
Menampilkan 3 teknologi utama:
1. **AI & NLP** 🤖
   - Natural Language Processing untuk analisis teks
   - Ikon: Robot emoji
2. **Data Visualization** 📊
   - Chart dan grafik interaktif
   - Ikon: Bar chart
3. **Responsive Design** 📱
   - Tampilan optimal di semua device
   - Ikon: Mobile phone

#### D. Developer Information
- **Nama**: Firman Maulana
- **Institusi**: STMIK Lombok
- **Email**: firmanmaulanastmik@gmail.com
- **Spesialisasi**: Web Development & AI
- **GitHub**: [github.com/Firmanstmik](https://github.com/Firmanstmik)

#### E. Contact Section
- Form kontak atau informasi untuk feedback
- Email untuk pertanyaan dan saran

### Komponen Visual:
- Card dengan gradient background
- Hover effects pada setiap section
- Badge untuk SDG numbers
- Avatar placeholder untuk developer
- Responsive grid layout

### Screenshot yang Perlu Diambil:
1. Full page view
2. Mission section
3. SDGs cards (close-up)
4. Technology icons (pastikan ikon robot 🤖 terlihat)
5. Developer information card
6. Contact section
7. Mobile responsive view

---

## 3. HALAMAN LOGIN

### URL: `/login`

### Deskripsi:
Halaman autentikasi untuk masuk ke sistem dengan berbagai role pengguna.

### Fitur Utama:
- **Form Login**:
  - Input Username/NIM
  - Input Password
  - Tombol "Masuk"
  - Loading state saat proses login

- **Demo Credentials Box**:
  Menampilkan kredensial demo untuk testing:
  - **Student**: TI19220003 / TI19220003
  - **Advisor**: dosen001 / dosen001
  - **Kaprodi TI**: kaprodi_ti / kaprodi_ti
  - **Kaprodi SI**: kaprodi_si / kaprodi_si
  - **Head**: ketua / ketua
  - **Admin**: admin / admin

### Validasi:
- Required field validation
- Error message jika login gagal
- Success notification dengan toast

### Komponen Visual:
- Centered card layout
- Form dengan styling modern
- Demo credentials dalam box abu-abu
- Responsive design

### Screenshot yang Perlu Diambil:
1. Halaman login kosong
2. Form dengan input terisi
3. Demo credentials box
4. Error state (login gagal)
5. Loading state
6. Mobile view

---

## 4. DASHBOARD STUDENT

### URL: `/dashboard` (setelah login sebagai student)

### Deskripsi:
Dashboard khusus untuk mahasiswa yang menampilkan informasi personal dan hasil analisis GRIT.

### Fitur Utama:

#### A. Header Section
- Greeting: "Selamat Datang, [Nama Mahasiswa]"
- Role badge: "Student"
- Informasi personal (NIM, Prodi, Semester)

#### B. Statistics Cards
Menampilkan 4 kartu statistik:
1. **GRIT Score**: Skor GRIT terkini (0-100)
2. **Survey Completed**: Jumlah survey yang sudah diselesaikan
3. **Recommendations**: Jumlah rekomendasi yang diterima
4. **Status**: Status GRIT (Strong/Moderate/Low)

#### C. GRIT Score Chart
- Line chart atau bar chart menampilkan perkembangan skor GRIT
- X-axis: Tanggal/Periode
- Y-axis: Skor (0-100)
- Color coding berdasarkan level (hijau/kuning/merah)

#### D. Recent Activities
- List aktivitas terbaru
- Survey yang sudah dikerjakan
- Rekomendasi yang diterima

#### E. Quick Actions
Tombol aksi cepat:
- "Isi Survey Baru"
- "Lihat Hasil Analisis"
- "Kirim Aspirasi"

### Data yang Ditampilkan (Contoh):
- **Nama**: Firman Maulana
- **NIM**: TI19220003
- **Program Studi**: Teknik Informatika
- **Semester**: 3
- **GRIT Score**: 95
- **Status**: Strong

### Screenshot yang Perlu Diambil:
1. Full dashboard view
2. Statistics cards
3. GRIT score chart
4. Recent activities section
5. Quick actions buttons
6. Mobile responsive view

---

## 5. DASHBOARD ADVISOR

### URL: `/dashboard` (setelah login sebagai advisor)

### Deskripsi:
Dashboard untuk dosen pembimbing akademik yang menampilkan daftar mahasiswa bimbingan.

### Fitur Utama:

#### A. Header Section
- Greeting: "Selamat Datang, [Nama Dosen]"
- Role badge: "Academic Advisor"

#### B. Statistics Overview
Menampilkan statistik mahasiswa bimbingan:
1. **Total Students**: Jumlah total mahasiswa bimbingan
2. **High GRIT**: Mahasiswa dengan GRIT tinggi (≥75)
3. **Moderate GRIT**: Mahasiswa dengan GRIT sedang (50-74)
4. **Low GRIT**: Mahasiswa dengan GRIT rendah (<50)

#### C. Students List Table
Tabel mahasiswa bimbingan dengan kolom:
- **Nama**: Nama lengkap mahasiswa
- **NIM**: Nomor Induk Mahasiswa
- **Prodi**: Program Studi
- **Semester**: Semester saat ini
- **GRIT Score**: Skor GRIT terkini
- **Status**: Badge status (Strong/Moderate/Low)
- **Action**: Tombol "Lihat Detail"

#### D. Filter & Search
- Search bar untuk mencari mahasiswa
- Filter berdasarkan:
  - Program Studi
  - Semester
  - Status GRIT

#### E. Recommendations Section
- Daftar mahasiswa yang memerlukan perhatian khusus
- Alert untuk mahasiswa dengan GRIT rendah

### Data yang Ditampilkan (Contoh):
- **Nama Dosen**: Dr. Budi Santoso
- **Total Mahasiswa**: 25
- **High GRIT**: 10 mahasiswa
- **Moderate GRIT**: 12 mahasiswa
- **Low GRIT**: 3 mahasiswa

### Screenshot yang Perlu Diambil:
1. Full dashboard view
2. Statistics cards
3. Students table (full)
4. Filter dan search functionality
5. Detail mahasiswa (modal/popup)
6. Recommendations section
7. Mobile view

---

## 6. DASHBOARD KAPRODI

### URL: `/dashboard` (setelah login sebagai kaprodi)

### Deskripsi:
Dashboard untuk Kepala Program Studi yang menampilkan overview seluruh mahasiswa di program studi.

### Fitur Utama:

#### A. Header Section
- Greeting: "Selamat Datang, [Nama Kaprodi]"
- Role badge: "Head of Program"
- Program Studi: TI atau SI

#### B. Program Statistics
Statistik keseluruhan program studi:
1. **Total Students**: Jumlah seluruh mahasiswa
2. **Surveys Completed**: Total survey yang sudah dikerjakan
3. **High GRIT**: Persentase mahasiswa dengan GRIT tinggi
4. **Moderate GRIT**: Persentase mahasiswa dengan GRIT sedang
5. **Low GRIT**: Persentase mahasiswa dengan GRIT rendah
6. **Average GRIT Score**: Rata-rata skor GRIT program studi

#### C. GRIT Distribution Chart
- Pie chart atau bar chart distribusi GRIT
- Breakdown per semester
- Color coding: Hijau (High), Kuning (Moderate), Merah (Low)

#### D. Students by Semester
Tabel breakdown mahasiswa per semester:
- Semester 1-8
- Jumlah mahasiswa
- Rata-rata GRIT score
- Status overview

#### E. Trending Analysis
- Grafik trend GRIT score per semester
- Perbandingan antar semester
- Identifikasi semester kritis

#### F. Action Items
- Mahasiswa yang memerlukan intervensi
- Rekomendasi untuk dosen PA
- Export data untuk laporan

### Filter Options:
- Filter berdasarkan semester
- Filter berdasarkan level GRIT
- Filter berdasarkan dosen PA

### Data yang Ditampilkan (Contoh - Kaprodi TI):
- **Nama**: Sofiansyah Fadli S.Kom.,M.Kom
- **Program Studi**: Teknik Informatika
- **Total Mahasiswa**: 45
- **Survey Completed**: 40
- **Average GRIT**: 78.5

### Screenshot yang Perlu Diambil:
1. Full dashboard view
2. Program statistics cards
3. GRIT distribution chart
4. Students by semester table
5. Trending analysis graph
6. Filter options
7. Export functionality
8. Mobile view

---

## 7. DASHBOARD HEAD

### URL: `/dashboard` (setelah login sebagai head)

### Deskripsi:
Dashboard untuk Ketua STMIK yang menampilkan overview seluruh institusi.

### Fitur Utama:

#### A. Header Section
- Greeting: "Selamat Datang, [Nama Ketua]"
- Role badge: "STMIK Head"

#### B. Institution-Wide Statistics
Statistik keseluruhan institusi:
1. **Total Students**: Seluruh mahasiswa STMIK
2. **Total Programs**: Jumlah program studi (TI, SI)
3. **Surveys Completed**: Total survey yang sudah dikerjakan
4. **Average GRIT Score**: Rata-rata GRIT institusi
5. **High GRIT**: Persentase mahasiswa dengan GRIT tinggi
6. **Students Needing Support**: Mahasiswa yang perlu bantuan

#### C. Program Comparison
Perbandingan antar program studi:
- **Teknik Informatika**:
  - Jumlah mahasiswa
  - Rata-rata GRIT
  - Status overview
- **Sistem Informasi**:
  - Jumlah mahasiswa
  - Rata-rata GRIT
  - Status overview

#### D. GRIT Trends Chart
- Line chart perkembangan GRIT institusi
- Perbandingan antar program studi
- Trend per bulan/semester

#### E. Critical Alerts
- Mahasiswa dengan GRIT sangat rendah
- Program studi yang perlu perhatian
- Rekomendasi kebijakan

#### F. Reports Section
- Summary report per program studi
- Export data untuk rapat
- Statistik untuk akreditasi

### Data yang Ditampilkan (Contoh):
- **Nama**: Khairul Imtihan S.Kom.,M.Kom
- **Total Mahasiswa**: 83 (TI: 45, SI: 38)
- **Average GRIT**: 76.8
- **Surveys Completed**: 72

### Screenshot yang Perlu Diambil:
1. Full dashboard view
2. Institution statistics
3. Program comparison cards
4. GRIT trends chart
5. Critical alerts section
6. Reports section
7. Mobile view

---

## 8. DASHBOARD ADMIN

### URL: `/dashboard` (setelah login sebagai admin)

### Deskripsi:
Dashboard untuk administrator sistem dengan akses penuh ke semua fitur manajemen.

### Fitur Utama:

#### A. Header Section
- Greeting: "Selamat Datang, Admin"
- Role badge: "Administrator"

#### B. System Statistics
Statistik sistem keseluruhan:
1. **Total Users**: Jumlah seluruh pengguna
2. **Active Surveys**: Survey yang sedang aktif
3. **Total Responses**: Total respons survey
4. **System Health**: Status sistem

#### C. Tab Navigation
Admin dashboard menggunakan tab untuk navigasi antar fitur:
1. **Overview**: Ringkasan sistem
2. **User Management**: CRUD semua pengguna
3. **Survey Control**: Kontrol akses survey
4. **Aspirations**: Daftar aspirasi mahasiswa

#### D. User Management (CRUD Lengkap)
**Fitur CRUD untuk semua tipe pengguna:**

**1. CREATE - Tambah User Baru**
- Modal form dengan field:
  - Nama Lengkap
  - Username (unique)
  - Email (dengan validasi)
  - Password (required untuk user baru)
  - Role (Student, Advisor, Kaprodi, Head, Admin)
  - Prodi (untuk Student & Kaprodi)
  - Semester (untuk Student)
  - Status (Active/Inactive)
- Dynamic fields berdasarkan role
- Validasi real-time
- Auto-update statistik setelah create

**2. READ - Lihat Daftar User**
- Tabel responsif dengan kolom:
  - User (Nama & Username)
  - Role (dengan badge warna)
  - Email
  - Status (Active/Inactive)
  - Actions (Edit, Delete)
- Badge warna per role:
  - Student: Biru
  - Advisor: Hijau
  - Kaprodi: Kuning
  - Head: Ungu
  - Admin: Merah
- Hover effect pada row

**3. UPDATE - Edit User**
- Klik tombol "Edit" untuk membuka modal
- Form pre-filled dengan data user
- Password optional (tidak wajib diisi saat edit)
- Validasi sama dengan create
- Auto-update tabel setelah save

**4. DELETE - Hapus User**
- Konfirmasi dialog sebelum delete
- Tidak bisa delete diri sendiri (logged-in admin)
- Auto-update statistik dan tabel
- Toast notification untuk feedback

**5. TOGGLE STATUS**
- Klik badge status untuk toggle Active/Inactive
- Instant update tanpa reload
- Toast notification
- Alternatif soft-delete

#### E. Survey Management
- Daftar semua survey
- Status survey (Open/Closed)
- Access control:
  - Set periode akses survey (Start Date & End Date)
  - Enable/disable survey dengan toggle button
  - Notifikasi perubahan status
- Display tanggal dalam format Indonesia

#### F. Aspirations Management
- Daftar semua aspirasi mahasiswa terbaru
- Badge untuk status:
  - Anonymous (Abu-abu)
  - Identified (Biru)
- Tanggal submission
- Preview text aspirasi

#### G. Statistics Auto-Update
Statistik otomatis update setelah operasi CRUD:
- Total Users
- Total Students
- Total Advisors
- Total Kaprodi
- Total Admins

### Admin Panel Features Detail:

**User Management Table:**
```
| User (Nama & Username) | Role | Email | Status | Actions |
|------------------------|------|-------|--------|---------|
| Firman Maulana         | 🔵   | ...   | ✅     | ✏️ 🗑️  |
| TI19220003             |      |       |        |         |
```

**Modal Form (Create/Edit):**
- Responsive modal dengan backdrop
- Form validation
- Dynamic fields (Prodi & Semester muncul sesuai role)
- Button: Cancel & Submit/Update
- Toast notification untuk feedback

**Survey Control Panel:**
- Status badge (Open: Hijau, Closed: Merah)
- Tanggal mulai & berakhir
- Toggle button untuk open/close
- Konfirmasi perubahan status

**Data Pengguna Default:**
- 6 Mahasiswa (TI19220003 - TI19220008)
- 1 Dosen PA (Jihadul Akbar S.Kom.,M.Kom)
- 2 Kaprodi (TI & SI)
- 1 Ketua STMIK
- 1 Admin

### Screenshot yang Perlu Diambil:
1. **Dashboard Overview (Tab Overview)**
   - Full dashboard dengan 4 kartu statistik
   - Survey control panel
   - User distribution
   
2. **User Management Tab**
   - Tabel dengan semua pengguna
   - Berbagai role dengan badge warna
   - Status active/inactive
   
3. **Modal Create User**
   - Form kosong untuk tambah user baru
   - Semua field visible
   
4. **Modal Create User - Role Student**
   - Field Prodi & Semester muncul
   
5. **Modal Edit User**
   - Form terisi dengan data user
   - Password field kosong (optional)
   
6. **Tabel User dengan Hover**
   - Hover effect pada row
   - Badge warna untuk role
   
7. **Konfirmasi Delete**
   - Dialog konfirmasi sebelum delete
   
8. **Toast Notification**
   - Success message setelah create
   - Success message setelah update
   - Success message setelah delete
   - Success message setelah toggle status
   
9. **Survey Control Tab**
   - Status survey (Open/Closed)
   - Tanggal mulai & berakhir
   - Toggle button
   
10. **Aspirations Tab**
    - List aspirasi mahasiswa
    - Badge anonymous/identified
    
11. **Mobile View**
    - Responsive layout untuk mobile
    - Tab navigation
    - Modal form di mobile

### Demo Credentials:
- **Username**: `admin`
- **Password**: `admin`

### Penjelasan untuk Laporan:
```
Dashboard Admin adalah pusat kontrol untuk mengelola seluruh sistem Edu-GRIT.

FITUR UTAMA:

1. STATISTIK SISTEM (Real-time)
   - Total Users: Jumlah seluruh pengguna
   - Students: Jumlah mahasiswa
   - Advisors: Jumlah dosen PA
   - Kaprodi: Jumlah kepala program studi
   - Statistik auto-update setelah operasi CRUD

2. USER MANAGEMENT (CRUD LENGKAP)
   
   A. CREATE - Tambah User Baru
      - Klik tombol "Tambah User"
      - Modal form terbuka
      - Isi data: Nama, Username, Email, Password, Role
      - Field Prodi & Semester muncul otomatis untuk Student/Kaprodi
      - Validasi email dan required fields
      - Klik "Simpan" untuk create user
      - Toast notification muncul
      - Tabel dan statistik auto-update
   
   B. READ - Lihat Daftar User
      - Tabel responsif dengan semua pengguna
      - Kolom: User (Nama & Username), Role, Email, Status, Actions
      - Badge warna untuk setiap role:
        * Student: Badge biru
        * Advisor: Badge hijau
        * Kaprodi: Badge kuning
        * Head: Badge ungu
        * Admin: Badge merah
      - Status badge (Active: hijau, Inactive: merah)
      - Hover effect pada setiap row
   
   C. UPDATE - Edit User
      - Klik tombol "Edit" pada row user
      - Modal form terbuka dengan data pre-filled
      - Password optional (tidak wajib diisi)
      - Edit data yang diperlukan
      - Klik "Update" untuk save
      - Toast notification muncul
      - Tabel auto-update
   
   D. DELETE - Hapus User
      - Klik tombol "Delete" pada row user
      - Dialog konfirmasi muncul
      - Klik "OK" untuk konfirmasi
      - User dihapus dari sistem
      - Toast notification muncul
      - Tabel dan statistik auto-update
   
   E. TOGGLE STATUS
      - Klik badge status (Active/Inactive)
      - Status berubah instant tanpa reload
      - Toast notification muncul
      - Alternatif soft-delete untuk menonaktifkan user

3. SURVEY CONTROL
   - Lihat status survey (Open/Closed)
   - Tanggal mulai dan berakhir survey
   - Toggle button untuk open/close survey
   - Notifikasi perubahan status
   - Kontrol akses mahasiswa ke survey

4. ASPIRATIONS MANAGEMENT
   - Lihat daftar aspirasi mahasiswa terbaru
   - Badge status: Anonymous (abu-abu) atau Identified (biru)
   - Tanggal submission
   - Preview text aspirasi

KEUNGGULAN:
- CRUD lengkap untuk semua tipe user
- Real-time update statistik
- Modal form yang user-friendly
- Validasi input yang ketat
- Toast notification untuk setiap aksi
- Dynamic fields berdasarkan role
- Konfirmasi sebelum delete
- Toggle status sebagai soft-delete
- Responsive design untuk mobile
- Tab navigation yang intuitif

TEKNOLOGI:
- React dengan Hooks (useState, useEffect)
- Modal form dengan backdrop
- Toast notification (react-hot-toast)
- Validasi email dengan regex
- Auto-update state management
- Responsive table layout
- Badge component dengan color coding

Dashboard ini memberikan kontrol penuh kepada admin untuk mengelola seluruh aspek sistem Edu-GRIT dengan interface yang modern dan user-friendly.
```

---

## 9. HALAMAN SURVEY

### URL: `/survey`

### Deskripsi:
Halaman untuk mahasiswa mengisi survey GRIT dengan pertanyaan terbuka dalam Bahasa Indonesia.

### Fitur Utama:

#### A. Survey Header
- Judul: "Survey GRIT"
- Instruksi: "Jawab pertanyaan berikut dengan jujur dan detail"
- Progress indicator (1/4, 2/4, dst.)

#### B. Student Information Form
Form informasi mahasiswa:
- **Nama Lengkap**: Auto-fill dari data login
- **NIM**: Auto-fill dari data login
- **Program Studi**: Auto-fill dari data login
- **Semester**: Auto-fill dari data login

#### C. Survey Questions
4 pertanyaan terbuka dalam Bahasa Indonesia:

**Pertanyaan 1:**
"Apa yang memotivasi Anda untuk tetap bertahan di kuliah?"
- Textarea (min 50 karakter)
- Character counter

**Pertanyaan 2:**
"Ceritakan pengalaman ketika Anda hampir menyerah namun tetap melanjutkan."
- Textarea (min 50 karakter)
- Character counter

**Pertanyaan 3:**
"Bagaimana Anda mengatasi kegagalan atau tantangan dalam belajar?"
- Textarea (min 50 karakter)
- Character counter

**Pertanyaan 4:**
"Apa yang membuat Anda tetap fokus pada tujuan jangka panjang?"
- Textarea (min 50 karakter)
- Character counter

#### D. Validation
- Minimum character requirement
- Required field validation
- Real-time character count
- Error messages

#### E. Submit Button
- "Kirim Survey"
- Loading state saat submit
- Confirmation dialog

#### F. Access Control
- Hanya bisa diakses saat periode survey aktif
- Notifikasi jika survey belum dibuka atau sudah ditutup
- Redirect jika tidak memiliki akses

### Komponen Visual:
- Clean form layout
- Textarea dengan border dan focus state
- Character counter di bawah setiap textarea
- Progress bar
- Responsive design

### Screenshot yang Perlu Diambil:
1. Survey form kosong
2. Form dengan beberapa jawaban terisi
3. Character counter
4. Validation error
5. Submit confirmation
6. Loading state
7. Access denied message (jika survey tidak aktif)
8. Mobile view

---

## 10. HALAMAN RESULT

### URL: `/result`

### Deskripsi:
Halaman yang menampilkan hasil analisis GRIT mahasiswa setelah mengisi survey.

### Fitur Utama:

#### A. Result Header
- Judul: "Hasil Analisis GRIT"
- Nama mahasiswa
- Tanggal analisis

#### B. GRIT Score Display
Tampilan skor GRIT yang prominent:
- **Skor**: Angka besar (0-100)
- **Status Badge**: 
  - Strong (≥75): Hijau
  - Moderate (50-74): Kuning
  - Low (<50): Merah
- **Circular Progress**: Visual representation

#### C. Score Breakdown
Breakdown komponen GRIT:
1. **Perseverance (Ketekunan)**: Skor dan bar chart
2. **Passion (Gairah)**: Skor dan bar chart
3. **Consistency (Konsistensi)**: Skor dan bar chart
4. **Resilience (Ketahanan)**: Skor dan bar chart

#### D. Visualization Charts
**Chart 1: GRIT Score Over Time**
- Line chart menampilkan perkembangan skor
- X-axis: Tanggal survey
- Y-axis: Skor GRIT

**Chart 2: Component Comparison**
- Bar chart membandingkan 4 komponen GRIT
- Color coding untuk setiap komponen

#### E. Keyword Analysis
Kata kunci yang terdeteksi dari jawaban:
- Positive keywords: "motivasi", "semangat", "tekun", dll.
- Negative keywords: "menyerah", "sulit", "gagal", dll.
- Frequency count

#### F. Recommendations
Rekomendasi berdasarkan hasil analisis:

**Untuk High GRIT (≥75):**
- "Excellent grit level! Continue current strategies."
- "Consider mentoring other students."
- "Keep up the good work!"

**Untuk Moderate GRIT (50-74):**
- "Good grit level. Focus on maintaining motivation."
- "Set clear long-term goals."
- "Join study groups for support."

**Untuk Low GRIT (<50):**
- "Consider seeking academic counseling."
- "Talk to your academic advisor."
- "Join support programs."

#### G. Action Buttons
- **"Isi Survey Lagi"**: Untuk survey berikutnya
- **"Kembali ke Dashboard"**: Kembali ke dashboard
- **"Download PDF"**: Download hasil analisis
- **"Konsultasi dengan PA"**: Link ke halaman aspirasi

### Data yang Ditampilkan (Contoh):
- **GRIT Score**: 85
- **Status**: Strong
- **Perseverance**: 88
- **Passion**: 82
- **Consistency**: 84
- **Resilience**: 86

### Screenshot yang Perlu Diambil:
1. Full result page
2. GRIT score display (close-up)
3. Score breakdown section
4. Line chart (GRIT over time)
5. Bar chart (component comparison)
6. Keyword analysis
7. Recommendations section
8. Action buttons
9. Mobile view

---

## 11. HALAMAN ASPIRATIONS

### URL: `/aspirations`

### Deskripsi:
Halaman untuk mahasiswa menyampaikan aspirasi dan untuk dosen/admin melihat aspirasi mahasiswa.

### Fitur Utama:

#### A. Untuk Student

**A.1. Aspirations Form**
Form untuk mengirim aspirasi:
- **Judul**: Input text untuk judul aspirasi
- **Kategori**: Dropdown
  - Akademik
  - Non-Akademik
  - Fasilitas
  - Lainnya
- **Isi Aspirasi**: Textarea untuk detail aspirasi
- **Anonim**: Checkbox untuk menyembunyikan nama
- **Tombol Submit**: "Kirim Aspirasi"

**A.2. My Aspirations**
Daftar aspirasi yang sudah dikirim:
- Judul aspirasi
- Tanggal kirim
- Status (Pending/Reviewed/Responded)
- Respons dari dosen/admin (jika ada)

#### B. Untuk Advisor/Kaprodi/Head

**B.1. Aspirations List**
Daftar semua aspirasi mahasiswa:
- **Nama Mahasiswa**: 
  - Tampil normal jika tidak anonim
  - "Mahasiswa Anonim" jika anonim
  - Blur effect untuk privacy
- **NIM**: Blur jika anonim
- **Kategori**: Badge dengan warna
- **Judul**: Judul aspirasi
- **Tanggal**: Tanggal submit
- **Status**: Badge status
- **Action**: Tombol "Lihat Detail"

**B.2. Filter & Search**
- Search bar
- Filter berdasarkan:
  - Kategori
  - Status
  - Program Studi
  - Tanggal

**B.3. Detail Modal**
Modal untuk melihat detail aspirasi:
- Informasi mahasiswa (jika tidak anonim)
- Kategori
- Judul
- Isi lengkap aspirasi
- Form respons
- Tombol "Tandai Selesai"

#### C. Untuk Admin

**C.1. Moderation Panel**
- Semua fitur advisor plus:
- Edit aspirasi
- Delete aspirasi
- Toggle privacy (blur/unblur names)
- Assign to specific advisor

**C.2. Statistics**
- Total aspirasi
- Aspirasi per kategori
- Response rate
- Average response time

### Privacy Features:
- **Blur Effect**: Nama dan NIM di-blur untuk aspirasi anonim
- **Anonymous Badge**: Badge "Anonim" untuk aspirasi anonim
- **Privacy Toggle**: Admin bisa toggle blur on/off

### Screenshot yang Perlu Diambil:
1. **Student View**:
   - Form aspirasi kosong
   - Form terisi
   - My aspirations list
   - Detail aspirasi dengan respons

2. **Advisor View**:
   - Aspirations list (dengan blur)
   - Filter dan search
   - Detail modal
   - Response form

3. **Admin View**:
   - Moderation panel
   - Statistics dashboard
   - Privacy toggle
   - Edit/delete actions

4. **Mobile View**:
   - Form responsive
   - List responsive

---

## 12. HALAMAN PROFILE

### URL: `/profile`

### Deskripsi:
Halaman untuk melihat dan mengedit profil pengguna.

### Fitur Utama:

#### A. Profile Header
- Avatar/Photo placeholder
- Nama lengkap
- Role badge
- Email

#### B. Untuk Student

**B.1. Personal Information**
- **Nama Lengkap**: Editable
- **NIM**: Read-only
- **Email**: Editable
- **Program Studi**: Read-only
- **Semester**: Editable
- **Angkatan**: Read-only
- **Nomor HP**: Editable
- **Alamat**: Editable (textarea)

**B.2. Academic Information**
- **Dosen PA**: Display nama dosen PA
- **IPK**: Display IPK
- **SKS Diambil**: Display total SKS

**B.3. GRIT Summary**
- Current GRIT Score
- Last survey date
- Total surveys completed
- Trend indicator (naik/turun)

**B.4. Change Password**
- Old password
- New password
- Confirm new password
- Tombol "Ubah Password"

#### C. Untuk Lecturer (Advisor/Kaprodi/Head)

**C.1. Professional Information**
- **Nama Lengkap**: Editable
- **NIP/NIDN**: Read-only
- **Email**: Editable
- **Program Studi**: Display
- **Jabatan**: Display
- **Nomor HP**: Editable

**C.2. Teaching Information**
- Jumlah mahasiswa bimbingan
- Mata kuliah yang diampu
- Jadwal konsultasi

**C.3. Change Password**
- Same as student

#### D. Untuk Admin

**D.1. Admin Information**
- **Nama**: Editable
- **Email**: Editable
- **Role**: Display
- **Last Login**: Display

**D.2. System Access**
- Access level
- Permissions

**D.3. Change Password**
- Same as others

### Form Actions:
- **"Simpan Perubahan"**: Save profile updates
- **"Batal"**: Cancel changes
- **"Ubah Foto"**: Upload new photo

### Validation:
- Email format validation
- Phone number format
- Password strength indicator
- Confirmation before save

### Screenshot yang Perlu Diambil:
1. **Student Profile**:
   - Full profile view
   - Personal information section
   - Academic information
   - GRIT summary
   - Edit mode
   - Change password form

2. **Lecturer Profile**:
   - Full profile view
   - Professional information
   - Teaching information
   - Edit mode

3. **Admin Profile**:
   - Full profile view
   - Admin information
   - System access

4. **Mobile View**:
   - Profile responsive

---

## 13. HALAMAN ADMIN PANEL

### URL: `/admin`

### Deskripsi:
Panel administrasi lengkap untuk mengelola seluruh sistem Edu-GRIT.

### Fitur Utama:

#### A. Dashboard Overview
Statistics cards:
1. **Total Users**: Jumlah semua pengguna
2. **Active Students**: Mahasiswa aktif
3. **Active Surveys**: Survey yang sedang berjalan
4. **Pending Aspirations**: Aspirasi yang belum ditanggapi

#### B. User Management

**B.1. Users Table**
Tabel dengan kolom:
- **ID**: User ID
- **Name**: Nama lengkap
- **Username**: Username/NIM
- **Email**: Email address
- **Role**: Badge role (Student/Advisor/Kaprodi/Head/Admin)
- **Status**: Active/Inactive
- **Actions**: Edit, Delete, Reset Password

**B.2. Add User Form**
Form untuk menambah user baru:
- Username/NIM
- Password
- Nama Lengkap
- Email
- Role (dropdown)
- Program Studi (jika student/kaprodi)
- Semester (jika student)

**B.3. Edit User**
Modal untuk edit user:
- Update informasi
- Change role
- Activate/deactivate

**B.4. Bulk Actions**
- Import users dari CSV
- Export users ke CSV
- Bulk delete
- Bulk activate/deactivate

#### C. Survey Management

**C.1. Surveys Table**
- **Survey Title**: Judul survey
- **Date Range**: Periode survey
- **Status**: Active/Inactive/Scheduled
- **Responses**: Jumlah respons
- **Actions**: Edit, Delete, View Results

**C.2. Create Survey**
Form untuk membuat survey baru:
- Judul survey
- Deskripsi
- Start date
- End date
- Target (All/Specific prodi/Specific semester)
- Questions (dynamic form)

**C.3. Access Control**
- Set survey availability
- Define access periods
- Assign to specific groups
- Enable/disable survey

**C.4. Survey Results**
- View all responses
- Export to CSV/Excel
- Analytics dashboard
- Individual student results

#### D. Aspirations Management

**D.1. Aspirations Table**
- **Student**: Nama mahasiswa (blur jika anonim)
- **Category**: Kategori aspirasi
- **Title**: Judul
- **Date**: Tanggal submit
- **Status**: Pending/Reviewed/Responded
- **Actions**: View, Respond, Delete

**D.2. Moderation Tools**
- Approve/reject aspirations
- Assign to advisor
- Toggle privacy (blur/unblur)
- Bulk actions

**D.3. Response Management**
- View responses
- Edit responses
- Delete responses
- Mark as resolved

#### E. System Settings

**E.1. General Settings**
- Application name
- Institution name
- Contact information
- Logo upload

**E.2. Email Settings**
- SMTP configuration
- Email templates
- Notification settings

**E.3. Access Control Settings**
- Default survey access period
- Role permissions
- Feature toggles

**E.4. Backup & Restore**
- Database backup
- Restore from backup
- Export all data

#### F. Reports & Analytics

**F.1. System Reports**
- User activity report
- Survey completion report
- GRIT score trends
- Aspirations report

**F.2. Export Options**
- PDF reports
- CSV exports
- Excel exports
- Custom date ranges

**F.3. Analytics Dashboard**
- Charts and graphs
- Trend analysis
- Comparative analysis
- Predictive analytics

#### G. System Logs

**G.1. Activity Logs**
- User login/logout
- Data changes
- System errors
- API calls

**G.2. Audit Trail**
- Who did what and when
- Data modification history
- Security events

### Screenshot yang Perlu Diambil:
1. **Dashboard Overview**:
   - Statistics cards
   - Quick actions

2. **User Management**:
   - Users table
   - Add user form
   - Edit user modal
   - Bulk actions

3. **Survey Management**:
   - Surveys table
   - Create survey form
   - Access control settings
   - Survey results

4. **Aspirations Management**:
   - Aspirations table with blur
   - Moderation panel
   - Response form

5. **System Settings**:
   - General settings
   - Email settings
   - Access control

6. **Reports**:
   - Reports dashboard
   - Export options
   - Analytics charts

7. **System Logs**:
   - Activity logs
   - Audit trail

8. **Mobile View**:
   - Admin panel responsive

---

## 14. FITUR BILINGUAL

### Deskripsi:
Aplikasi mendukung dua bahasa: Bahasa Indonesia (default) dan Bahasa Inggris.

### Fitur Utama:

#### A. Language Switcher
- **Lokasi**: Navbar (pojok kanan atas)
- **Tampilan**: Toggle button atau dropdown
- **Pilihan**: 
  - 🇮🇩 Bahasa Indonesia
  - 🇬🇧 English

#### B. Konten yang Diterjemahkan

**B.1. Navigation**
- Home → Beranda
- Dashboard → Dasbor
- Survey → Survei
- Aspirations → Aspirasi
- Profile → Profil
- About → Tentang
- Login → Masuk
- Logout → Keluar

**B.2. Roles**
- Student → Mahasiswa
- Advisor → Dosen PA
- Head of Program → Kepala Program Studi
- STMIK Head → Ketua STMIK
- Admin → Administrator

**B.3. Common Terms**
- Welcome → Selamat Datang
- Loading → Memuat
- Save → Simpan
- Cancel → Batal
- Edit → Ubah
- Delete → Hapus
- Search → Cari
- Filter → Saring

**B.4. Survey Questions**
Pertanyaan survey tetap dalam Bahasa Indonesia (untuk konsistensi analisis NLP)

**B.5. Dashboard Labels**
- GRIT Score → Skor GRIT
- Status → Status
- Recommendations → Rekomendasi
- Statistics → Statistik

**B.6. Footer**
- Quick Links → Tautan Cepat
- Contact → Kontak
- Developer → Pengembang
- Institution → Institusi
- Copyright © 2025 → Hak Cipta © 2025

#### C. Implementasi
- Menggunakan `react-i18next`
- File translasi: 
  - `src/locales/id/translation.json` (Bahasa Indonesia)
  - `src/locales/en/translation.json` (English)
- Auto-detect browser language
- Persistent language selection (localStorage)

### Screenshot yang Perlu Diambil:
1. **Language Switcher**:
   - Tampilan toggle di navbar
   - Dropdown (jika ada)

2. **Halaman dalam Bahasa Indonesia**:
   - Home
   - Dashboard
   - Survey
   - About

3. **Halaman dalam Bahasa Inggris**:
   - Home (English version)
   - Dashboard (English version)
   - Survey (English version)
   - About (English version)

4. **Side-by-Side Comparison**:
   - Screenshot yang sama dalam kedua bahasa
   - Menunjukkan perbedaan terjemahan

5. **Footer**:
   - Footer dalam Bahasa Indonesia
   - Footer dalam Bahasa Inggris

---

## 15. KOMPONEN UMUM

### A. Navbar

**Fitur:**
- Logo Edu-GRIT (kiri)
- Navigation menu (tengah):
  - Home
  - Dashboard (jika login)
  - Survey (jika student)
  - Aspirations (jika login)
  - Profile (jika login)
  - Admin (jika admin)
  - About
- Language switcher (kanan)
- User info & logout (kanan, jika login)
- Login button (kanan, jika belum login)

**Responsive:**
- Desktop: Horizontal menu
- Mobile: Hamburger menu

### B. Footer

**Konten:**
- **Kolom 1**: Logo & deskripsi singkat
- **Kolom 2**: Quick Links
  - Home
  - Survey
  - Dashboard
  - About
- **Kolom 3**: Contact
  - Developer: Firman Maulana
  - Institution: STMIK Lombok
  - Email: firmanmaulanastmik@gmail.com
- **Copyright**: © 2025 Edu-GRIT. All rights reserved.

### C. Card Component

**Fitur:**
- Shadow effect
- Hover effect
- Rounded corners
- Padding konsisten
- Responsive

### D. Toast Notifications

**Jenis:**
- Success (hijau)
- Error (merah)
- Warning (kuning)
- Info (biru)

**Posisi:** Top-right

### E. Loading States

**Tampilan:**
- Spinner
- Skeleton loading
- Progress bar
- Loading text

### Screenshot yang Perlu Diambil:
1. Navbar (desktop & mobile)
2. Footer (full width)
3. Card components (berbagai jenis)
4. Toast notifications (semua jenis)
5. Loading states (berbagai variasi)

---

## 16. RESPONSIVE DESIGN

### Breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Fitur Responsive:

#### A. Layout
- Grid responsive (1 kolom di mobile, 2-3 kolom di desktop)
- Flexible containers
- Adaptive spacing

#### B. Navigation
- Hamburger menu di mobile
- Full menu di desktop

#### C. Tables
- Horizontal scroll di mobile
- Card view alternative
- Collapsible rows

#### D. Forms
- Full width di mobile
- Multi-column di desktop
- Touch-friendly inputs

#### E. Charts
- Responsive sizing
- Touch interactions
- Simplified view di mobile

### Screenshot yang Perlu Diambil:
1. **Mobile View (< 640px)**:
   - Home
   - Dashboard
   - Survey
   - Aspirations
   - Profile

2. **Tablet View (640px - 1024px)**:
   - Home
   - Dashboard
   - Survey

3. **Desktop View (> 1024px)**:
   - Semua halaman

---

## 17. TEKNOLOGI YANG DIGUNAKAN

### Frontend:
- **React 18.2.0**: Library JavaScript untuk UI
- **React Router DOM 6.11.0**: Routing
- **Tailwind CSS 3.3.0**: Styling
- **Recharts 2.7.0**: Data visualization
- **Axios 1.4.0**: HTTP client
- **react-i18next 13.5.0**: Internationalization
- **react-hot-toast 2.4.1**: Notifications
- **react-hook-form 7.48.2**: Form handling
- **react-helmet-async 1.3.0**: SEO management

### Backend (Planned):
- **Django REST Framework** atau **Node.js + Express**
- **PostgreSQL**: Database
- **Python NLP Libraries**: 
  - NLTK
  - spaCy
  - scikit-learn
- **JWT**: Authentication

### Development Tools:
- **Git**: Version control
- **GitHub**: Repository hosting
- **VS Code**: Code editor
- **npm**: Package manager

---

## 18. ALUR PENGGUNAAN APLIKASI

### A. Alur Student

1. **Login** → Masuk dengan NIM dan password
2. **Dashboard** → Lihat GRIT score dan statistik
3. **Survey** → Isi survey GRIT (jika periode aktif)
4. **Result** → Lihat hasil analisis
5. **Aspirations** → Kirim aspirasi (opsional)
6. **Profile** → Update profil

### B. Alur Advisor

1. **Login** → Masuk dengan username dan password
2. **Dashboard** → Lihat daftar mahasiswa bimbingan
3. **View Student Details** → Lihat detail GRIT mahasiswa
4. **Aspirations** → Baca dan tanggapi aspirasi
5. **Profile** → Update profil

### C. Alur Kaprodi

1. **Login** → Masuk dengan username dan password
2. **Dashboard** → Lihat overview program studi
3. **View Statistics** → Analisis data program studi
4. **Aspirations** → Baca aspirasi mahasiswa
5. **Reports** → Generate laporan

### D. Alur Head

1. **Login** → Masuk dengan username dan password
2. **Dashboard** → Lihat overview institusi
3. **Compare Programs** → Bandingkan program studi
4. **View Trends** → Analisis trend GRIT
5. **Reports** → Generate laporan institusi

### E. Alur Admin

1. **Login** → Masuk dengan username dan password
2. **Admin Panel** → Akses panel admin
3. **Manage Users** → Kelola pengguna
4. **Manage Surveys** → Kelola survey
5. **Set Access Control** → Atur akses survey
6. **Moderate Aspirations** → Moderasi aspirasi
7. **Generate Reports** → Buat laporan sistem

---

## 19. PANDUAN SCREENSHOT

### Tips Mengambil Screenshot:

1. **Resolusi**:
   - Desktop: 1920x1080 atau 1366x768
   - Mobile: 375x667 (iPhone) atau 360x640 (Android)

2. **Browser**:
   - Gunakan Chrome atau Firefox
   - Hide browser toolbar (F11 untuk fullscreen)
   - Clear cache sebelum screenshot

3. **Konten**:
   - Pastikan semua data terlihat jelas
   - Gunakan data yang realistis (bukan lorem ipsum)
   - Tampilkan loading states jika perlu

4. **Kualitas**:
   - Format: PNG (untuk kualitas terbaik)
   - Jangan compress terlalu banyak
   - Crop dengan rapi

5. **Annotasi** (opsional):
   - Tambahkan arrow untuk highlight fitur
   - Tambahkan text box untuk penjelasan
   - Gunakan warna konsisten

### Daftar Screenshot yang Diperlukan:

**Halaman Home (4 screenshots)**
- [ ] Full page (sebelum login)
- [ ] Full page (setelah login)
- [ ] Feature cards section
- [ ] Mobile view

**Halaman About (7 screenshots)**
- [ ] Full page
- [ ] Mission section
- [ ] SDGs cards
- [ ] Technology section (dengan ikon robot 🤖)
- [ ] Developer info
- [ ] Contact section
- [ ] Mobile view

**Halaman Login (6 screenshots)**
- [ ] Login form kosong
- [ ] Form terisi
- [ ] Demo credentials
- [ ] Error state
- [ ] Loading state
- [ ] Mobile view

**Dashboard Student (6 screenshots)**
- [ ] Full dashboard
- [ ] Statistics cards
- [ ] GRIT chart
- [ ] Recent activities
- [ ] Quick actions
- [ ] Mobile view

**Dashboard Advisor (7 screenshots)**
- [ ] Full dashboard
- [ ] Statistics
- [ ] Students table
- [ ] Filter/search
- [ ] Student detail
- [ ] Recommendations
- [ ] Mobile view

**Dashboard Kaprodi (8 screenshots)**
- [ ] Full dashboard
- [ ] Program statistics
- [ ] GRIT distribution chart
- [ ] Students by semester
- [ ] Trending analysis
- [ ] Filter options
- [ ] Export functionality
- [ ] Mobile view

**Dashboard Head (7 screenshots)**
- [ ] Full dashboard
- [ ] Institution statistics
- [ ] Program comparison
- [ ] GRIT trends chart
- [ ] Critical alerts
- [ ] Reports section
- [ ] Mobile view

**Dashboard Admin (9 screenshots)**
- [ ] Full dashboard
- [ ] System statistics
- [ ] User management
- [ ] Add/Edit user
- [ ] Survey management
- [ ] Access control
- [ ] Aspirations moderation
- [ ] Reports
- [ ] Mobile view

**Halaman Survey (8 screenshots)**
- [ ] Survey form kosong
- [ ] Form terisi
- [ ] Character counter
- [ ] Validation error
- [ ] Submit confirmation
- [ ] Loading state
- [ ] Access denied
- [ ] Mobile view

**Halaman Result (9 screenshots)**
- [ ] Full page
- [ ] GRIT score display
- [ ] Score breakdown
- [ ] Line chart
- [ ] Bar chart
- [ ] Keyword analysis
- [ ] Recommendations
- [ ] Action buttons
- [ ] Mobile view

**Halaman Aspirations (8 screenshots)**
- [ ] Student: Form aspirasi
- [ ] Student: My aspirations
- [ ] Advisor: Aspirations list (dengan blur)
- [ ] Advisor: Detail modal
- [ ] Admin: Moderation panel
- [ ] Admin: Statistics
- [ ] Admin: Privacy toggle
- [ ] Mobile view

**Halaman Profile (7 screenshots)**
- [ ] Student profile
- [ ] Student edit mode
- [ ] Lecturer profile
- [ ] Admin profile
- [ ] Change password
- [ ] Validation errors
- [ ] Mobile view

**Halaman Admin Panel (15 screenshots)**
- [ ] Dashboard overview
- [ ] Users table
- [ ] Add user form
- [ ] Edit user modal
- [ ] Surveys table
- [ ] Create survey
- [ ] Access control
- [ ] Survey results
- [ ] Aspirations table
- [ ] Moderation tools
- [ ] System settings
- [ ] Reports dashboard
- [ ] Analytics charts
- [ ] System logs
- [ ] Mobile view

**Fitur Bilingual (10 screenshots)**
- [ ] Language switcher
- [ ] Home (ID)
- [ ] Home (EN)
- [ ] Dashboard (ID)
- [ ] Dashboard (EN)
- [ ] Survey (ID)
- [ ] Survey (EN)
- [ ] About (ID)
- [ ] About (EN)
- [ ] Footer (ID & EN)

**Komponen Umum (5 screenshots)**
- [ ] Navbar (desktop & mobile)
- [ ] Footer
- [ ] Card components
- [ ] Toast notifications
- [ ] Loading states

**Total: 120+ screenshots**

---

## 20. STRUKTUR LAPORAN

### Format Laporan:

```
LAPORAN APLIKASI EDU-GRIT
Platform Analisis GRIT Mahasiswa Berbasis AI

Oleh: Firman Maulana
NIM: TI19220003
Institusi: STMIK Lombok

---

BAB I: PENDAHULUAN
1.1 Latar Belakang
1.2 Tujuan Aplikasi
1.3 Ruang Lingkup

BAB II: LANDASAN TEORI
2.1 Konsep GRIT
2.2 Natural Language Processing
2.3 React dan Modern Web Development
2.4 SDGs (Goal 3 & 4)

BAB III: ANALISIS DAN PERANCANGAN
3.1 Analisis Kebutuhan
3.2 Perancangan Sistem
3.3 Perancangan Database
3.4 Perancangan UI/UX

BAB IV: IMPLEMENTASI
4.1 Teknologi yang Digunakan
4.2 Struktur Aplikasi
4.3 Fitur-Fitur Aplikasi
    4.3.1 Halaman Home
    4.3.2 Halaman Login
    4.3.3 Dashboard (per role)
    4.3.4 Halaman Survey
    4.3.5 Halaman Result
    4.3.6 Halaman Aspirations
    4.3.7 Halaman Profile
    4.3.8 Admin Panel
    4.3.9 Fitur Bilingual
4.4 Implementasi NLP (Backend)

BAB V: PENGUJIAN
5.1 Pengujian Fungsional
5.2 Pengujian Usability
5.3 Pengujian Responsiveness
5.4 Hasil Pengujian

BAB VI: PENUTUP
6.1 Kesimpulan
6.2 Saran Pengembangan

DAFTAR PUSTAKA

LAMPIRAN
- Screenshot Aplikasi
- Source Code (link GitHub)
- User Manual
```

### Template per Halaman:

```
## [NAMA HALAMAN]

### Deskripsi
[Penjelasan singkat tentang halaman]

### Fitur Utama
1. [Fitur 1]
2. [Fitur 2]
3. [Fitur 3]

### Screenshot
[Screenshot 1: Full page view]
Gambar X.X: [Caption]

[Screenshot 2: Detail fitur]
Gambar X.X: [Caption]

### Penjelasan Teknis
[Penjelasan implementasi teknis]

### User Flow
[Alur penggunaan halaman]
```

---

## 21. DEMO CREDENTIALS LENGKAP

### Student
- **Username**: TI19220003
- **Password**: TI19220003
- **Nama**: Firman Maulana
- **Prodi**: Teknik Informatika
- **Semester**: 3

### Advisor (Dosen PA)
- **Username**: dosen001
- **Password**: dosen001
- **Nama**: Dr. Budi Santoso

### Kaprodi TI
- **Username**: kaprodi_ti
- **Password**: kaprodi_ti
- **Nama**: Sofiansyah Fadli S.Kom.,M.Kom
- **Prodi**: Teknik Informatika

### Kaprodi SI
- **Username**: kaprodi_si
- **Password**: kaprodi_si
- **Nama**: Dr. Dedi Kurniawan
- **Prodi**: Sistem Informasi

### Ketua STMIK
- **Username**: ketua
- **Password**: ketua
- **Nama**: Khairul Imtihan S.Kom.,M.Kom

### Admin
- **Username**: admin
- **Password**: admin
- **Nama**: Admin System

---

## 22. LINK PENTING

### Repository
- **GitHub**: https://github.com/Firmanstmik/react-EduGrit

### Developer
- **Email**: firmanmaulanastmik@gmail.com
- **GitHub**: https://github.com/Firmanstmik
- **Institusi**: STMIK Lombok

### Dokumentasi
- **README**: https://github.com/Firmanstmik/react-EduGrit/blob/main/README.md
- **Dokumentasi Aplikasi**: (file ini)

---

## CATATAN PENTING

1. **Pastikan semua screenshot diambil dengan data yang realistis**
2. **Gunakan demo credentials yang sudah disediakan**
3. **Screenshot harus jelas dan berkualitas tinggi**
4. **Tambahkan caption/keterangan untuk setiap screenshot**
5. **Susun screenshot sesuai urutan alur penggunaan**
6. **Sertakan screenshot untuk mode mobile**
7. **Tampilkan fitur bilingual (ID & EN)**
8. **Highlight fitur-fitur utama dengan annotasi**
9. **Pastikan ikon robot 🤖 terlihat di halaman About**
10. **Dokumentasikan setiap role dengan lengkap**

---

**Dibuat oleh: Firman Maulana**  
**Tanggal: 2 November 2025**  
**Versi: 2.0**

---

## CHANGELOG

### Version 2.0 (3 November 2025)
**Major Update: Admin CRUD & Bug Fixes**

#### ✨ Fitur Baru:
1. **Admin Dashboard - CRUD Lengkap**
   - ✅ Create: Tambah user baru dengan modal form
   - ✅ Read: Tabel user management dengan badge warna
   - ✅ Update: Edit user dengan form pre-filled
   - ✅ Delete: Hapus user dengan konfirmasi
   - ✅ Toggle Status: Active/Inactive user
   - ✅ Auto-update statistik setelah operasi CRUD
   - ✅ Toast notification untuk setiap aksi
   - ✅ Dynamic fields berdasarkan role
   - ✅ Validasi email dan required fields

2. **Tab Navigation di Admin Dashboard**
   - Overview: Statistik sistem
   - User Management: CRUD pengguna
   - Survey Control: Kontrol akses survey
   - Aspirations: Daftar aspirasi mahasiswa

#### 🐛 Bug Fixes:
1. **Home Page**
   - ✅ Fixed: Judul "Edu-GRIT Edu-GRIT" → "Selamat Datang di Edu-GRIT"
   - ✅ Fixed: Terjemahan judul ke bahasa Inggris
   - ✅ Fixed: Button "navigation.about" → "Tentang Aplikasi"

2. **Footer**
   - ✅ Fixed: Copyright year 2024 → 2025
   - ✅ Fixed: Footer content sekarang bilingual (ID/EN)

3. **Navbar**
   - ✅ Fixed: Duplicate "Masuk" (Login) links di header

4. **About Page**
   - ✅ Fixed: Icon AI & NLP (menggunakan robot emoji 🤖)
   - ✅ Added: GitHub username dan link (Firmanstmik)
   - ✅ Improved: Visual appeal dan responsiveness

5. **Dashboard**
   - ✅ Fixed: Layout terlalu dekat dengan header (added padding)
   - ✅ Fixed: Chart labels "Analisis" → komponen GRIT spesifik (Ketekunan, Gairah, Ketahanan, Fokus)

6. **Result Page**
   - ✅ Fixed: Semua konten sekarang bilingual (ID/EN)
   - ✅ Fixed: Rekomendasi intervensi bilingual
   - ✅ Fixed: Status label bilingual
   - ✅ Fixed: Chart labels bilingual
   - ✅ Fixed: "Selamat Mahasiswa" → "Selamat [Nama Mahasiswa]"
   - ✅ Fixed: ESLint warning (getIntervention dependency)

7. **Data Update**
   - ✅ Updated: Demo credentials student → TI19220003 (Firman Maulana)
   - ✅ Updated: Advisor name → Jihadul Akbar S.Kom.,M.Kom
   - ✅ Added: New students (Rizal, Melinda, Nora, Herman, Hasan)
   - ✅ Updated: NIMs TI19220004 - TI19220008

#### 🔧 Technical Improvements:
1. **Code Quality**
   - ✅ Fixed: ESLint warnings
   - ✅ Removed: Unused imports
   - ✅ Improved: Component structure
   - ✅ Added: Proper dependency arrays in useEffect

2. **Localization (i18n)**
   - ✅ Added: Translation keys untuk Result page
   - ✅ Added: Translation keys untuk Admin dashboard
   - ✅ Added: Translation keys untuk GRIT components
   - ✅ Added: Translation keys untuk Footer
   - ✅ Improved: Consistency across all pages

3. **State Management**
   - ✅ Improved: Admin dashboard state management
   - ✅ Added: Auto-update statistik setelah CRUD
   - ✅ Added: Real-time table update

4. **User Experience**
   - ✅ Added: Toast notifications untuk feedback
   - ✅ Added: Konfirmasi dialog sebelum delete
   - ✅ Added: Loading states
   - ✅ Improved: Form validation
   - ✅ Improved: Responsive design

#### 📝 Documentation:
- ✅ Updated: DOKUMENTASI_APLIKASI.md dengan fitur CRUD
- ✅ Added: Screenshot guidelines untuk Admin CRUD
- ✅ Added: Penjelasan detail untuk setiap fitur CRUD
- ✅ Added: Demo credentials update
- ✅ Added: Changelog section

#### 🚀 Git Commits:
1. "Add full CRUD functionality to Admin Dashboard"
2. "Fix ESLint warning: move getIntervention inside useEffect"
3. "Update documentation with CRUD features and bug fixes"

---

### Version 1.0 (2 November 2025)
**Initial Release**

#### ✨ Fitur Awal:
1. Multi-role authentication (Student, Advisor, Kaprodi, Head, Admin)
2. Bilingual support (Indonesian & English)
3. Role-based dashboards
4. Survey GRIT untuk mahasiswa
5. Analisis hasil survey dengan AI/NLP
6. Visualisasi data dengan charts
7. Student aspirations
8. Profile management
9. About page dengan informasi developer

#### 🎨 Design:
- Clean, minimalist UI
- Tailwind CSS
- Blue-gray-white color scheme
- Responsive design
- Modern card layouts

#### 🔧 Tech Stack:
- React (JSX)
- Tailwind CSS
- React Router DOM
- Axios
- Recharts
- react-i18next
- react-helmet-async
- react-hook-form
- react-hot-toast

