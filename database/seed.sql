-- SIKOMJARU CMS Seed Data
-- Run this after running the schema.sql

-- ===========================
-- HERO SECTION SEED DATA
-- ===========================
INSERT INTO hero_section (title, subtitle, description, image_url) VALUES (
  'Kuasai RJP, Selamatkan Nyawa',
  'SIKOMJARU',
  'SIKOMJARU adalah manekin pelatihan RJP inovatif yang merevolusi pendidikan penyelamatan jiwa. Rasakan pelatihan realistis dengan teknologi umpan balik canggih.',
  'https://placehold.co/600x500/e0f2fe/0ea5e9?text=Manekin+Pelatihan+RJP+SIKOMJARU'
);

-- ===========================
-- TEAM SECTION SEED DATA
-- ===========================
INSERT INTO team_section (
  title, subtitle, mission_description, vision_description, team_photo_url
) VALUES (
  'Profil Tim SIKOMJARU',
  'Inovasi yang lahir dari kepedulian, dedikasi, dan kolaborasi untuk meningkatkan kesiapan masyarakat dalam menghadapi kondisi darurat jantung.',
  'Fokus kami adalah mengatasi tingginya angka kematian akibat henti jantung dengan menyediakan alat edukasi RJP yang terjangkau. Kami ingin memberdayakan masyarakat awam, kader kesehatan, hingga siswa untuk menjadi penolong pertama yang kompeten dan percaya diri.',
  'Menjadi pelopor dalam penyediaan alat edukasi kesehatan yang inovatif, ekonomis, dan berakar pada kearifan lokal, serta memperluas akses pelatihan RJP yang efektif dan menyeluruh ke seluruh lapisan masyarakat Indonesia.',
  'https://placehold.co/600x400/e0f2fe/0ea5e9?text=Foto+Kelompok+Tim+Mahasiswa+P2MW'
);

-- ===========================
-- TEAM MEMBERS SEED DATA
-- ===========================
-- Dosen Pembimbing
INSERT INTO team_members (name, role, description, photo_url, is_supervisor, display_order) VALUES (
  'Ns. M. Hanif Prasetya Adhi, S.Kep., M. kep',
  'Dosen Pembimbing',
  'Memberikan arahan teknis, validasi akademik, dan penguatan struktur bisnis untuk memastikan SIKOMJARU berkembang secara profesional dan berkelanjutan.',
  'https://placehold.co/150x150/99f6e4/115e59?text=Dosen+Pembimbing',
  true,
  1
);

-- Mahasiswa
INSERT INTO team_members (name, role, description, photo_url, is_supervisor, display_order) VALUES 
('Vieki Diva Ksatria', 'CEO', 'Memimpin tim, merancang perencanaan, dan mengawasi pengembangan produk.', 'https://placehold.co/80x80/bfdbfe/1e40af?text=VD', false, 2),
('Ruliyanti', 'Finance', 'Mengelola administrasi dan keuangan proyek secara efisien dan akurat.', 'https://placehold.co/80x80/fecaca/991b1b?text=R', false, 3),
('Mahasiswa 3', 'Teknisi & Engineer', 'Bertanggung jawab atas pengembangan teknis dan engineering produk.', 'https://placehold.co/80x80/fed7aa/ea580c?text=M3', false, 4),
('Mahasiswa 4', 'Marketing & Business', 'Mengelola strategi pemasaran dan pengembangan bisnis.', 'https://placehold.co/80x80/e9d5ff/9333ea?text=M4', false, 5);

-- ===========================
-- PRODUCTS SEED DATA
-- ===========================
INSERT INTO products (title, subtitle, description, image_url, is_featured) VALUES (
  'Manekin SIKOMJARU',
  'Manekin pelatihan RJP generasi berikutnya dengan sensor umpan balik canggih dan anatomi yang realistis',
  'Dirancang untuk edukasi RJP yang efektif, SIKOMJARU hadir dengan fitur canggih untuk simulasi yang realistis dan terjangkau.',
  'https://placehold.co/600x500/e0f2fe/0ea5e9?text=Tampak+Produk+SIKOMJARU',
  true
);

-- ===========================
-- PRODUCT FEATURES SEED DATA
-- ===========================
INSERT INTO product_features (product_id, icon_name, title, description, display_order) 
SELECT p.id, 'CheckCircle', 'Harga Terjangkau', 'Memudahkan akses bagi sekolah, kader kesehatan, dan individu.', 1
FROM products p WHERE p.title = 'Manekin SIKOMJARU';

INSERT INTO product_features (product_id, icon_name, title, description, display_order) 
SELECT p.id, 'CheckCircle', 'Desain Edukatif & Lokal', 'Motif Batik Banyumasan sebagai ikon budaya dan daya tarik edukatif.', 2
FROM products p WHERE p.title = 'Manekin SIKOMJARU';

INSERT INTO product_features (product_id, icon_name, title, description, display_order) 
SELECT p.id, 'CheckCircle', 'Material Tahan Lama', 'Terbuat dari fiber yang kuat, tahan air, dan mudah diperbaiki.', 3
FROM products p WHERE p.title = 'Manekin SIKOMJARU';

-- ===========================
-- RESEARCH SECTION SEED DATA
-- ===========================
INSERT INTO research_section (title, subtitle, main_image_url) VALUES (
  'Penelitian & Pengembangan',
  'Inovasi berkelanjutan untuk meningkatkan kualitas pelatihan RJP di Indonesia',
  'https://placehold.co/600x400/e0f2fe/0ea5e9?text=Penelitian+SIKOMJARU'
);

INSERT INTO research_items (title, description, icon_name, icon_color, display_order) VALUES 
('Studi Efektivitas', 'Penelitian mendalam tentang efektivitas pelatihan RJP menggunakan SIKOMJARU dibandingkan metode konvensional.', 'FlaskConical', 'blue', 1),
('Validasi Klinis', 'Uji validasi dengan tenaga medis profesional untuk memastikan akurasi dan relevansi pelatihan.', 'Shield', 'green', 2),
('Pengembangan Teknologi', 'Riset berkelanjutan untuk pengembangan fitur dan teknologi terbaru dalam pelatihan RJP.', 'Lightbulb', 'orange', 3),
('Kolaborasi Institusi', 'Kerjasama dengan rumah sakit dan institusi pendidikan untuk pengembangan standar pelatihan.', 'Building', 'purple', 4);

-- ===========================
-- STATISTICS SEED DATA
-- ===========================
INSERT INTO statistics (label, value, color, display_order) VALUES 
('Orang Terlatih', '500+', 'teal', 1),
('Institusi Mitra', '50+', 'blue', 2),
('Tingkat Kepuasan', '95%', 'green', 3),
('Tahun Keunggulan', '2+', 'orange', 4);

-- ===========================
-- E-COMMERCE PLATFORMS SEED DATA
-- ===========================
INSERT INTO ecommerce_platforms (name, description, url, icon_color, button_color, display_order) VALUES 
('Shopee', 'Gratis ongkir & cashback menarik', 'https://shopee.co.id/sikomjaru', 'orange', 'orange', 1),
('Tokopedia', 'Mulai dari produk terbaik', 'https://tokopedia.com/sikomjaru', 'green', 'green', 2),
('Lazada', 'Pengiriman cepat se-Indonesia', 'https://lazada.co.id/sikomjaru', 'blue', 'blue', 3);

-- ===========================
-- SOCIAL MEDIA SEED DATA
-- ===========================
INSERT INTO social_media (platform, url, icon_color, button_color, display_order) VALUES 
('WhatsApp', 'https://wa.me/6281234567890', 'green', 'green', 1),
('Instagram', 'https://instagram.com/sikomjaru.official', 'pink', 'pink', 2),
('TikTok', 'https://tiktok.com/@sikomjaru.official', 'gray', 'gray', 3),
('Facebook', 'https://facebook.com/sikomjaru.official', 'blue', 'blue', 4),
('YouTube', 'https://youtube.com/@sikomjaru', 'red', 'red', 5);

-- ===========================
-- SITE SETTINGS SEED DATA
-- ===========================
INSERT INTO site_settings (setting_key, setting_value, setting_type, description) VALUES 
('site_title', 'SIKOMJARU', 'text', 'Website title'),
('site_description', 'Manekin pelatihan RJP inovatif untuk pendidikan penyelamatan jiwa', 'text', 'Website description'),
('contact_email', 'info.sikomjaru@email.com', 'text', 'Contact email'),
('contact_phone', '+62 8XX-XXXX-XXXX', 'text', 'Contact phone'),
('contact_location', 'Purwokerto, Banyumas, Jawa Tengah', 'text', 'Contact location'),
('hero_cta_primary', 'Jelajahi Produk', 'text', 'Hero primary CTA text'),
('hero_cta_secondary', 'Daftar Pelatihan', 'text', 'Hero secondary CTA text');
