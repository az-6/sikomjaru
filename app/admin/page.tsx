"use client";

import React, { useState, useEffect, useRef } from "react";
import { uploadImage, deleteImage } from "@/lib/imageUpload";
import AdminHeader from "@/components/AdminHeader";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import {
  Save,
  Eye,
  Settings,
  Upload,
  Trash2,
  Plus,
  Edit,
  Lightbulb,
  Mic,
  Monitor,
  Zap,
  CheckCircle,
  Target,
  Users,
  ShoppingBag,
  Phone,
  Heart,
  ExternalLink,
  Globe,
  Instagram,
  Facebook,
  Youtube,
  Image as ImageIcon,
} from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  url: string;
  title?: string;
  description?: string;
}

interface Platform {
  name: string;
  url: string;
  color: string;
  icon: string;
}

interface HomeSection {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  background_image: string;
  video_url?: string;
  carousel_images?: string[];
  carousel_items: MediaItem[];
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface TeamMember {
  name: string;
  position: string;
  avatar: string;
  instagram: string;
  type: "supervisor" | "student";
}

interface ProdukSection {
  id?: string;
  title: string;
  subtitle: string;
  benefits_title: string;
  benefits_description: string;
  features_title: string;
  carousel_items: MediaItem[];
  benefits: Benefit[];
  features: Feature[];
}

interface ProfilSection {
  id?: string;
  title: string;
  subtitle: string;
  objective_title: string;
  objective_description: string;
  objective_icon: string;
  vision_title: string;
  vision_description: string;
  vision_icon: string;
  team_title: string;
  team_carousel_items: MediaItem[];
  team_members: TeamMember[];
}

interface SertifikasiSection {
  id?: string;
  title: string;
  subtitle: string;
  documents_title: string;
  nib_title: string;
  nib_description: string;
  nib_image: string;
  hki_title: string;
  hki_description: string;
  hki_image: string;
}

interface PenelitianSection {
  id?: string;
  title: string;
  description: string;
  implementation_title: string;
  carousel_items: MediaItem[];
}

interface BelanjaSection {
  id?: string;
  title: string;
  subtitle: string;
  product_name: string;
  product_description: string;
  product_price: string;
  platforms_title: string;
  carousel_items: MediaItem[];
  platforms: Platform[];
}

interface SpecialContent {
  icon: string;
  text: string;
  background: string;
}

interface ReviewItem {
  type: "image" | "special";
  url: string;
  title: string;
  description: string;
  special_content?: SpecialContent;
}

interface ReviewSection {
  id?: string;
  title: string;
  subtitle: string;
  photos_title: string;
  review_items: ReviewItem[];
}

interface SupportedByLink {
  name: string;
  url: string;
}

interface SocialMediaLink {
  platform: string;
  url: string;
  display_text: string;
  icon: string;
}

interface FooterSection {
  id?: number;
  company_name: string;
  company_description: string;
  supported_by_links: SupportedByLink[];
  social_media_links: SocialMediaLink[];
  contact_email: string;
  contact_location: string;
  copyright_text: string;
}

export default function AdminPanel() {
  const [homeSection, setHomeSection] = useState<HomeSection>({
    title: "",
    subtitle: "",
    description: "",
    background_image: "",
    video_url: "",
    carousel_images: [],
    carousel_items: [],
  });

  const [produkSection, setProdukSection] = useState<ProdukSection>({
    title: "Produk Inovatif SIKOMJARU",
    subtitle:
      "Dirancang untuk edukasi RJP yang efektif, SIKOMJARU hadir dengan fitur canggih untuk simulasi yang realistis dan terjangkau.",
    benefits_title: "Manfaat dan Keunggulan",
    benefits_description:
      "SIKOMJARU mengatasi kelemahan produk komersial dengan harga yang jauh lebih terjangkau (hanya 15% dari harga pasar), material fiber yang kokoh, serta fitur edukatif yang ramah bagi pemula.",
    features_title: "Fitur Utama & Spesifikasi",
    carousel_items: [],
    benefits: [],
    features: [],
  });

  const [profilSection, setProfilSection] = useState<ProfilSection>({
    title: "Profil Tim SIKOMJARU",
    subtitle:
      "Inovasi yang lahir dari kepedulian, dedikasi, dan kolaborasi untuk meningkatkan kesiapan masyarakat dalam menghadapi kondisi darurat jantung.",
    objective_title: "Tujuan Mulia Kami",
    objective_description:
      "Fokus kami adalah mengatasi tingginya angka kematian akibat henti jantung dengan menyediakan alat edukasi RJP yang terjangkau. Kami ingin memberdayakan masyarakat awam, kader kesehatan, hingga siswa untuk menjadi penolong pertama yang kompeten dan percaya diri.",
    objective_icon: "Target",
    vision_title: "Visi Kami",
    vision_description:
      "Menjadi pelopor dalam penyediaan alat edukasi kesehatan yang inovatif, ekonomis, dan berakar pada kearifan lokal, serta memperluas akses pelatihan RJP yang efektif dan menyeluruh ke seluruh lapisan masyarakat Indonesia.",
    vision_icon: "Eye",
    team_title: "Sikomjaru Team",
    team_carousel_items: [],
    team_members: [],
  });

  const [sertifikasiSection, setSertifikasiSection] =
    useState<SertifikasiSection>({
      title: "Sertifikasi & Legalitas",
      subtitle:
        "SIKOMJARU telah memiliki legalitas dan sertifikasi resmi sebagai produk inovasi yang terdaftar dan diakui secara hukum.",
      documents_title: "Dokumen Resmi",
      nib_title: "Surat NIB (Nomor Induk Berusaha)",
      nib_description: "Legalitas usaha resmi dari pemerintah Indonesia",
      nib_image:
        "https://placehold.co/400x300/dbeafe/1e3a8a?text=Surat+NIB+SIKOMJARU",
      hki_title: "Sertifikat HKI (Hak Kekayaan Intelektual)",
      hki_description: "Perlindungan hukum atas inovasi produk SIKOMJARU",
      hki_image:
        "https://placehold.co/400x300/ecfdf5/10b981?text=Sertifikat+HKI+SIKOMJARU",
    });

  const [penelitianSection, setPenelitianSection] = useState<PenelitianSection>(
    {
      title: "Penelitian",
      description:
        "Dokumentasi dari proses perancangan, pengujian, hingga sosialisasi produk kepada masyarakat dan institusi pendidikan. SIKOMJARU telah melalui serangkaian penelitian mendalam untuk memastikan efektivitas sebagai alat peraga RJP. Proses penelitian meliputi analisis kebutuhan, pengembangan prototype, pengujian fungsionalitas, hingga evaluasi dampak pembelajaran pada berbagai kelompok target termasuk siswa SMK, kader kesehatan masyarakat, dan tenaga medis profesional.",
      implementation_title: "Implementasi",
      carousel_items: [],
    }
  );

  const [belanjaSection, setBelanjaSection] = useState<BelanjaSection>({
    title: "Belanja Produk SIKOMJARU",
    subtitle:
      "Dapatkan alat peraga RJP inovatif kami dengan mudah melalui berbagai platform marketplace terpercaya di Indonesia.",
    product_name: "SIKOMJARU - Phantom Edukasi Kompresi Jantung Paru",
    product_description:
      "Alat peraga RJP inovatif dengan fitur lengkap: indikator lampu, panduan suara, dan layar LCD.",
    product_price: "Rp 660.000",
    platforms_title: "Tersedia di:",
    carousel_items: [],
    platforms: [],
  });

  const [reviewSection, setReviewSection] = useState<ReviewSection>({
    title: "Review & Testimoni",
    subtitle:
      "Kepuasan dan testimoni dari pengguna SIKOMJARU di berbagai institusi pendidikan, rumah sakit, dan komunitas kesehatan di seluruh Indonesia.",
    photos_title: "Foto Review Pengguna",
    review_items: [],
  });

  const [footerSection, setFooterSection] = useState<FooterSection>({
    company_name: "SIKOMJARU",
    company_description:
      "Inovasi pelatihan RJP untuk memberdayakan masyarakat dan tenaga kesehatan.",
    supported_by_links: [],
    social_media_links: [],
    contact_email: "sikomjaru.official@gmail.com",
    contact_location: "Purwokerto, Indonesia",
    copyright_text: "Hak cipta dilindungi undang-undang.",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [isUploadingEditAvatar, setIsUploadingEditAvatar] = useState(false);
  const [isTeamMemberModalOpen, setIsTeamMemberModalOpen] = useState(false);
  const [isEditTeamMemberModalOpen, setIsEditTeamMemberModalOpen] =
    useState(false);
  const [isBenefitModalOpen, setIsBenefitModalOpen] = useState(false);
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);
  const [editingMemberIndex, setEditingMemberIndex] = useState<number | null>(
    null
  );
  const [newBenefit, setNewBenefit] = useState({
    title: "",
    description: "",
    icon: "CheckCircle",
  });
  const [newFeature, setNewFeature] = useState({
    title: "",
    description: "",
    icon: "Lightbulb",
    color: "blue",
  });
  const [newTeamMember, setNewTeamMember] = useState<TeamMember>({
    name: "",
    position: "",
    avatar: "",
    instagram: "",
    type: "student",
  });
  const [editTeamMember, setEditTeamMember] = useState<TeamMember>({
    name: "",
    position: "",
    avatar: "",
    instagram: "",
    type: "student",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Modal state for review items
  const [isImageReviewModalOpen, setIsImageReviewModalOpen] = useState(false);
  const [isSpecialReviewModalOpen, setIsSpecialReviewModalOpen] =
    useState(false);
  const [newImageReview, setNewImageReview] = useState({
    file: null as File | null,
    url: "",
    title: "",
    description: "",
  });
  const [isUploadingImageReview, setIsUploadingImageReview] = useState(false);
  const [newSpecialReview, setNewSpecialReview] = useState({
    title: "",
    description: "",
    text: "Kepuasan 100%",
    icon: "Heart",
    background: "from-blue-50 to-blue-100",
  });

  // Modal state for footer items
  const [isSupportedByModalOpen, setIsSupportedByModalOpen] = useState(false);
  const [isSocialMediaModalOpen, setIsSocialMediaModalOpen] = useState(false);
  const [newSupportedBy, setNewSupportedBy] = useState({
    name: "",
    url: "",
    icon: "Building2",
  });
  const [newSocialMedia, setNewSocialMedia] = useState({
    platform: "",
    url: "",
    display_text: "",
    icon: "Globe",
  });

  // Modal state for belanja items
  const [isBelanjaImageModalOpen, setIsBelanjaImageModalOpen] = useState(false);
  const [isPlatformModalOpen, setIsPlatformModalOpen] = useState(false);
  const [newBelanjaImage, setNewBelanjaImage] = useState({
    file: null as File | null,
    title: "",
    previewUrl: "",
  });
  const [newPlatform, setNewPlatform] = useState({
    name: "",
    url: "",
    color: "blue",
    icon: "ShoppingBag",
  });

  // Helper function to extract YouTube video ID
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Helper function to get YouTube thumbnail
  const getYouTubeThumbnail = (url: string): string => {
    const videoId = getYouTubeVideoId(url);
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : "/placeholder.svg";
  };

  // Load data saat komponen dimount
  useEffect(() => {
    loadHomeData();
    loadProdukData();
    loadProfilData();
    loadSertifikasiData();
    loadPenelitianData();
    loadBelanjaData();
    loadReviewData();
    loadFooterData();
  }, []);

  const loadHomeData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/cms/home");
      const data = await response.json();

      if (data.homeSection) {
        // Migrate old carousel_images to new carousel_items format if needed
        const section = data.homeSection;
        if (
          section.carousel_images &&
          section.carousel_images.length > 0 &&
          !section.carousel_items
        ) {
          section.carousel_items = section.carousel_images.map(
            (url: string) => ({
              type: "image" as const,
              url: url,
              title: "",
            })
          );
        }

        // Ensure carousel_items exists
        if (!section.carousel_items) {
          section.carousel_items = [];
        }

        setHomeSection(section);
      }
    } catch (error) {
      console.error("Error loading home data:", error);
      toast({
        title: "Error",
        description: "Gagal memuat data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveHomeSection = async () => {
    try {
      setIsSaving(true);
      const response = await fetch("/api/cms/home", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          homeSection,
        }),
      });

      if (response.ok) {
        toast({
          title: "Berhasil!",
          description: "Data section Home telah disimpan",
        });
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      console.error("Error saving home data:", error);
      toast({
        title: "Error",
        description: "Gagal menyimpan data",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Produk Section Functions
  const loadProdukData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/cms/produk");
      const data = await response.json();

      if (data.produkSection) {
        setProdukSection(data.produkSection);
      }
    } catch (error) {
      console.error("Error loading produk data:", error);
      toast({
        title: "Error",
        description: "Gagal memuat data produk",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveProdukSection = async () => {
    try {
      setIsSaving(true);
      const response = await fetch("/api/cms/produk", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produkSection),
      });

      if (response.ok) {
        toast({
          title: "Berhasil!",
          description: "Data section Produk telah disimpan",
        });
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      console.error("Error saving produk data:", error);
      toast({
        title: "Error",
        description: "Gagal menyimpan data produk",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Profil Section Functions
  const loadProfilData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/cms/profil");
      const data = await response.json();

      if (data.profilSection) {
        setProfilSection(data.profilSection);
      }
    } catch (error) {
      console.error("Error loading profil data:", error);
      toast({
        title: "Error",
        description: "Gagal memuat data profil",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveProfilSection = async () => {
    try {
      setIsSaving(true);
      const response = await fetch("/api/cms/profil", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profilSection),
      });

      if (response.ok) {
        toast({
          title: "Berhasil!",
          description: "Data section Profil telah disimpan",
        });
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      console.error("Error saving profil data:", error);
      toast({
        title: "Error",
        description: "Gagal menyimpan data profil",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Sertifikasi Section Functions
  const loadSertifikasiData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/cms/sertifikasi");
      const data = await response.json();

      if (data) {
        setSertifikasiSection(data);
      }
    } catch (error) {
      console.error("Error loading sertifikasi data:", error);
      toast({
        title: "Error",
        description: "Gagal memuat data sertifikasi",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveSertifikasiSection = async () => {
    try {
      setIsSaving(true);
      const response = await fetch("/api/cms/sertifikasi", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sertifikasiSection),
      });

      if (response.ok) {
        toast({
          title: "Berhasil!",
          description: "Data section Sertifikasi telah disimpan",
        });
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      console.error("Error saving sertifikasi data:", error);
      toast({
        title: "Error",
        description: "Gagal menyimpan data sertifikasi",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const addProdukCarouselItem = async (type: "image" | "video") => {
    if (type === "image") {
      const newImage = prompt("Masukkan URL gambar:");
      if (newImage) {
        const title = prompt("Masukkan judul gambar (opsional):") || "";
        const newItem: MediaItem = {
          type: "image",
          url: newImage,
          title: title,
        };
        setProdukSection((prev) => ({
          ...prev,
          carousel_items: [...(prev.carousel_items || []), newItem],
        }));
      }
    } else {
      const videoUrl = prompt("Masukkan URL YouTube:");
      if (videoUrl) {
        const videoId = getYouTubeVideoId(videoUrl);
        if (videoId) {
          const title = prompt("Masukkan judul video (opsional):") || "";
          const newItem: MediaItem = {
            type: "video",
            url: videoUrl,
            title: title,
          };
          setProdukSection((prev) => ({
            ...prev,
            carousel_items: [...(prev.carousel_items || []), newItem],
          }));
        } else {
          toast({
            title: "Error",
            description: "URL YouTube tidak valid",
            variant: "destructive",
          });
        }
      }
    }
  };

  const uploadProdukImage = async (file: File) => {
    try {
      setIsUploading(true);
      const result = await uploadImage(file, "produk");

      if (result.success && result.url) {
        const title = prompt("Masukkan judul gambar (opsional):") || "";
        const newItem: MediaItem = {
          type: "image",
          url: result.url!,
          title: title,
        };
        setProdukSection((prev) => ({
          ...prev,
          carousel_items: [...(prev.carousel_items || []), newItem],
        }));
        toast({
          title: "Berhasil!",
          description: "Gambar berhasil diupload",
        });
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading produk image:", error);
      toast({
        title: "Error",
        description: "Gagal mengupload gambar",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const removeProdukCarouselItem = async (index: number) => {
    const item = produkSection.carousel_items[index];
    if (item.type === "image" && item.url.includes("supabase")) {
      try {
        await deleteImage(item.url);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }

    setProdukSection((prev) => ({
      ...prev,
      carousel_items: (prev.carousel_items || []).filter((_, i) => i !== index),
    }));
  };

  const addBenefit = () => {
    setIsBenefitModalOpen(true);
  };

  const saveBenefit = () => {
    if (newBenefit.title && newBenefit.description) {
      const benefitToAdd: Benefit = {
        title: newBenefit.title,
        description: newBenefit.description,
        icon: newBenefit.icon,
      };
      setProdukSection((prev) => ({
        ...prev,
        benefits: [...(prev.benefits || []), benefitToAdd],
      }));
      setNewBenefit({ title: "", description: "", icon: "CheckCircle" });
      setIsBenefitModalOpen(false);
    }
  };

  const removeBenefit = (index: number) => {
    setProdukSection((prev) => ({
      ...prev,
      benefits: (prev.benefits || []).filter((_, i) => i !== index),
    }));
  };

  const addFeature = () => {
    setIsFeatureModalOpen(true);
  };

  const saveFeature = () => {
    if (newFeature.title && newFeature.description) {
      const featureToAdd: Feature = {
        title: newFeature.title,
        description: newFeature.description,
        icon: newFeature.icon,
        color: newFeature.color,
      };
      setProdukSection((prev) => ({
        ...prev,
        features: [...(prev.features || []), featureToAdd],
      }));
      setNewFeature({
        title: "",
        description: "",
        icon: "Lightbulb",
        color: "blue",
      });
      setIsFeatureModalOpen(false);
    }
  };

  const removeFeature = (index: number) => {
    setProdukSection((prev) => ({
      ...prev,
      features: (prev.features || []).filter((_, i) => i !== index),
    }));
  };

  // Profil Section Helper Functions
  const uploadProfilTeamImage = async (file: File) => {
    try {
      setIsUploading(true);
      const result = await uploadImage(file, "profil");

      if (result.success && result.url) {
        const title = prompt("Masukkan judul gambar (opsional):") || "";
        const newItem: MediaItem = {
          type: "image",
          url: result.url!,
          title: title,
        };
        setProfilSection((prev) => ({
          ...prev,
          team_carousel_items: [...(prev.team_carousel_items || []), newItem],
        }));
        toast({
          title: "Berhasil!",
          description: "Gambar tim berhasil diupload",
        });
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading profil team image:", error);
      toast({
        title: "Error",
        description: "Gagal mengupload gambar tim",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const addProfilTeamVideo = () => {
    const videoUrl = prompt("Masukkan URL YouTube:");
    if (videoUrl) {
      const videoId = getYouTubeVideoId(videoUrl);
      if (videoId) {
        const title = prompt("Masukkan judul video (opsional):") || "Video Tim";
        const newItem: MediaItem = {
          type: "video",
          url: videoUrl,
          title: title,
        };
        setProfilSection((prev) => ({
          ...prev,
          team_carousel_items: [...(prev.team_carousel_items || []), newItem],
        }));
      } else {
        toast({
          title: "Error",
          description: "URL YouTube tidak valid. Pastikan URL benar.",
          variant: "destructive",
        });
      }
    }
  };

  const removeProfilTeamCarouselItem = async (index: number) => {
    const item = profilSection.team_carousel_items[index];
    if (item.type === "image" && item.url.includes("supabase")) {
      try {
        await deleteImage(item.url);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }

    setProfilSection((prev) => ({
      ...prev,
      team_carousel_items: (prev.team_carousel_items || []).filter(
        (_, i) => i !== index
      ),
    }));
  };

  const addTeamMember = () => {
    if (!newTeamMember.name || !newTeamMember.position) {
      toast({
        title: "Error",
        description: "Nama dan posisi harus diisi",
        variant: "destructive",
      });
      return;
    }

    const memberToAdd: TeamMember = {
      ...newTeamMember,
      avatar:
        newTeamMember.avatar ||
        "https://placehold.co/60x60/e5e7eb/4b5563?text=?",
      instagram: newTeamMember.instagram || "#",
    };

    setProfilSection((prev) => ({
      ...prev,
      team_members: [...(prev.team_members || []), memberToAdd],
    }));

    // Reset form
    setNewTeamMember({
      name: "",
      position: "",
      avatar: "",
      instagram: "",
      type: "student",
    });

    setIsTeamMemberModalOpen(false);

    toast({
      title: "Berhasil!",
      description: "Anggota tim berhasil ditambahkan",
    });
  };

  const openEditTeamMember = (index: number) => {
    const member = profilSection.team_members[index];
    setEditTeamMember({ ...member });
    setEditingMemberIndex(index);
    setIsEditTeamMemberModalOpen(true);
  };

  const updateTeamMember = () => {
    if (!editTeamMember.name || !editTeamMember.position) {
      toast({
        title: "Error",
        description: "Nama dan posisi harus diisi",
        variant: "destructive",
      });
      return;
    }

    if (editingMemberIndex === null) return;

    const updatedMembers = [...profilSection.team_members];
    updatedMembers[editingMemberIndex] = {
      ...editTeamMember,
      avatar:
        editTeamMember.avatar ||
        "https://placehold.co/60x60/e5e7eb/4b5563?text=?",
      instagram: editTeamMember.instagram || "#",
    };

    setProfilSection((prev) => ({
      ...prev,
      team_members: updatedMembers,
    }));

    setIsEditTeamMemberModalOpen(false);
    setEditingMemberIndex(null);

    toast({
      title: "Berhasil!",
      description: "Data anggota tim berhasil diupdate",
    });
  };

  // Upload avatar functions for team members
  const uploadNewMemberAvatar = async (file: File) => {
    try {
      setIsUploadingAvatar(true);
      const result = await uploadImage(file, "team-avatars");

      if (result.success && result.url) {
        setNewTeamMember((prev) => ({
          ...prev,
          avatar: result.url!,
        }));
        toast({
          title: "Berhasil!",
          description: "Avatar berhasil diupload",
        });
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
      toast({
        title: "Error",
        description: "Gagal mengupload avatar",
        variant: "destructive",
      });
    } finally {
      setIsUploadingAvatar(false);
    }
  };

  const uploadEditMemberAvatar = async (file: File) => {
    try {
      setIsUploadingEditAvatar(true);
      const result = await uploadImage(file, "team-avatars");

      if (result.success && result.url) {
        setEditTeamMember((prev) => ({
          ...prev,
          avatar: result.url!,
        }));
        toast({
          title: "Berhasil!",
          description: "Avatar berhasil diupload",
        });
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
      toast({
        title: "Error",
        description: "Gagal mengupload avatar",
        variant: "destructive",
      });
    } finally {
      setIsUploadingEditAvatar(false);
    }
  };

  // Upload Functions for Sertifikasi Images
  const uploadNibImage = async (file: File) => {
    try {
      setIsUploading(true);
      const result = await uploadImage(file, "sertifikasi");

      if (result.success && result.url) {
        setSertifikasiSection((prev) => ({
          ...prev,
          nib_image: result.url!,
        }));
        toast({
          title: "Berhasil!",
          description: "Foto NIB berhasil diupload",
        });
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading NIB image:", error);
      toast({
        title: "Error",
        description: "Gagal mengupload foto NIB",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const uploadHkiImage = async (file: File) => {
    try {
      setIsUploading(true);
      const result = await uploadImage(file, "sertifikasi");

      if (result.success && result.url) {
        setSertifikasiSection((prev) => ({
          ...prev,
          hki_image: result.url!,
        }));
        toast({
          title: "Berhasil!",
          description: "Foto HKI berhasil diupload",
        });
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading HKI image:", error);
      toast({
        title: "Error",
        description: "Gagal mengupload foto HKI",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  // Penelitian Section Functions
  const loadPenelitianData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/cms/penelitian");
      const data = await response.json();

      if (data) {
        setPenelitianSection(data);
      }
    } catch (error) {
      console.error("Error loading penelitian data:", error);
      toast({
        title: "Error",
        description: "Gagal memuat data penelitian",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const savePenelitianSection = async () => {
    try {
      setIsSaving(true);
      const response = await fetch("/api/cms/penelitian", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(penelitianSection),
      });

      if (response.ok) {
        toast({
          title: "Berhasil!",
          description: "Data section Penelitian telah disimpan",
        });
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      console.error("Error saving penelitian data:", error);
      toast({
        title: "Error",
        description: "Gagal menyimpan data penelitian",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Belanja Section Functions
  const loadBelanjaData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/cms/belanja");
      const data = await response.json();

      if (data) {
        setBelanjaSection(data);
      }
    } catch (error) {
      console.error("Error loading belanja data:", error);
      toast({
        title: "Error",
        description: "Gagal memuat data belanja",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveBelanjaSection = async () => {
    try {
      setIsSaving(true);
      const response = await fetch("/api/cms/belanja", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(belanjaSection),
      });

      if (response.ok) {
        toast({
          title: "Berhasil!",
          description: "Data section Belanja telah disimpan",
        });
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      console.error("Error saving belanja data:", error);
      toast({
        title: "Error",
        description: "Gagal menyimpan data belanja",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Review Section Functions
  const loadReviewData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/cms/review");
      const data = await response.json();

      if (data) {
        setReviewSection(data);
      }
    } catch (error) {
      console.error("Error loading review data:", error);
      toast({
        title: "Error",
        description: "Gagal memuat data review",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveReviewSection = async () => {
    try {
      setIsSaving(true);
      const response = await fetch("/api/cms/review", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewSection),
      });

      if (response.ok) {
        toast({
          title: "Berhasil!",
          description: "Data section Review telah disimpan",
        });
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      console.error("Error saving review data:", error);
      toast({
        title: "Error",
        description: "Gagal menyimpan data review",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const loadFooterData = async () => {
    try {
      setIsLoading(true);
      console.log("Loading footer data...");

      const response = await fetch("/api/cms/footer");
      console.log("Footer data response status:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("Footer data loaded:", data);

        if (data) {
          setFooterSection(data);
        }
      } else {
        const errorData = await response.json();
        console.error("Error loading footer data:", errorData);
        throw new Error(errorData.error || "Failed to load footer data");
      }
    } catch (error) {
      console.error("Error loading footer data:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Gagal memuat data footer",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveFooterSection = async () => {
    try {
      setIsSaving(true);
      console.log("Saving footer data:", footerSection);

      const response = await fetch("/api/cms/footer", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(footerSection),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        const responseData = await response.json();
        console.log("Response data:", responseData);
        toast({
          title: "Berhasil!",
          description: "Data section Footer telah disimpan",
        });
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error(errorData.error || "Failed to save footer data");
      }
    } catch (error) {
      console.error("Error saving footer data:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Gagal menyimpan data footer",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const addPenelitianCarouselItem = async (type: "image" | "video") => {
    if (type === "image") {
      const newImage = prompt("Masukkan URL gambar:");
      if (newImage) {
        const title = prompt("Masukkan judul gambar (opsional):") || "";
        const description =
          prompt("Masukkan deskripsi gambar (opsional):") || "";
        const newItem: MediaItem = {
          type: "image",
          url: newImage,
          title: title,
          description: description,
        };
        setPenelitianSection((prev) => ({
          ...prev,
          carousel_items: [...(prev.carousel_items || []), newItem],
        }));
      }
    } else {
      const videoUrl = prompt("Masukkan URL YouTube:");
      if (videoUrl) {
        const videoId = getYouTubeVideoId(videoUrl);
        if (videoId) {
          const title = prompt("Masukkan judul video (opsional):") || "";
          const description =
            prompt("Masukkan deskripsi video (opsional):") || "";
          const newItem: MediaItem = {
            type: "video",
            url: videoId,
            title: title,
            description: description,
          };
          setPenelitianSection((prev) => ({
            ...prev,
            carousel_items: [...(prev.carousel_items || []), newItem],
          }));
        } else {
          alert("URL YouTube tidak valid");
        }
      }
    }
  };

  const removePenelitianCarouselItem = (index: number) => {
    setPenelitianSection((prev) => ({
      ...prev,
      carousel_items: (prev.carousel_items || []).filter((_, i) => i !== index),
    }));
  };

  const updatePenelitianCarouselItem = (
    index: number,
    field: "title" | "description" | "url",
    value: string
  ) => {
    setPenelitianSection((prev) => ({
      ...prev,
      carousel_items: (prev.carousel_items || []).map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const uploadPenelitianImage = async (file: File, index: number) => {
    try {
      setIsUploading(true);
      const result = await uploadImage(file, "penelitian");

      if (result.success && result.url) {
        updatePenelitianCarouselItem(index, "url", result.url);
        toast({
          title: "Berhasil!",
          description: "Foto penelitian berhasil diupload",
        });
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading penelitian image:", error);
      toast({
        title: "Error",
        description: "Gagal mengupload foto penelitian",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  // Belanja Section Helper Functions
  const addBelanjaCarouselItem = async (type: "image" | "video") => {
    if (type === "image") {
      setIsBelanjaImageModalOpen(true);
    }
  };

  const saveBelanjaImage = async () => {
    if (newBelanjaImage.file) {
      try {
        let imageUrl = newBelanjaImage.previewUrl;

        // If previewUrl is a blob URL, we need to upload the file
        if (imageUrl.startsWith("blob:")) {
          setIsUploading(true);
          const result = await uploadImage(newBelanjaImage.file, "belanja");

          if (result.success && result.url) {
            imageUrl = result.url;
          } else {
            alert("Upload gagal: " + (result.error || "Unknown error"));
            return;
          }
        }

        const newItem: MediaItem = {
          type: "image",
          url: imageUrl,
          title: newBelanjaImage.title.trim(),
        };

        setBelanjaSection((prev) => ({
          ...prev,
          carousel_items: [...(prev.carousel_items || []), newItem],
        }));

        // Clean up and close modal
        if (newBelanjaImage.previewUrl.startsWith("blob:")) {
          URL.revokeObjectURL(newBelanjaImage.previewUrl);
        }
        setNewBelanjaImage({ file: null, title: "", previewUrl: "" });
        setIsBelanjaImageModalOpen(false);

        toast({
          title: "Berhasil!",
          description: "Gambar produk berhasil ditambahkan",
        });
      } catch (error) {
        console.error("Upload error:", error);
        alert("Upload gagal!");
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleBelanjaImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setNewBelanjaImage((prev) => ({
        ...prev,
        file: file,
        previewUrl: previewUrl,
      }));
    }
  };

  const closeBelanjaImageModal = () => {
    // Clean up preview URL to prevent memory leaks
    if (newBelanjaImage.previewUrl) {
      URL.revokeObjectURL(newBelanjaImage.previewUrl);
    }
    setNewBelanjaImage({ file: null, title: "", previewUrl: "" });
    setIsBelanjaImageModalOpen(false);
  };

  const uploadBelanjaImage = async (file: File) => {
    try {
      setIsUploading(true);
      const result = await uploadImage(file, "belanja");

      if (result.success && result.url) {
        // Set the uploaded file info and open modal for title input
        setNewBelanjaImage({
          file: file,
          title: "",
          previewUrl: result.url,
        });
        setIsBelanjaImageModalOpen(true);
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading belanja image:", error);
      toast({
        title: "Error",
        description: "Gagal mengupload gambar produk",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const removeBelanjaCarouselItem = async (index: number) => {
    const item = belanjaSection.carousel_items[index];
    if (item.type === "image" && item.url.includes("supabase")) {
      try {
        await deleteImage(item.url);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }

    setBelanjaSection((prev) => ({
      ...prev,
      carousel_items: (prev.carousel_items || []).filter((_, i) => i !== index),
    }));
  };

  const addPlatform = () => {
    setIsPlatformModalOpen(true);
  };

  const savePlatform = () => {
    if (newPlatform.name.trim() && newPlatform.url.trim()) {
      const platform: Platform = {
        name: newPlatform.name.trim(),
        url: newPlatform.url.trim(),
        color: newPlatform.color,
        icon: newPlatform.icon,
      };
      setBelanjaSection((prev) => ({
        ...prev,
        platforms: [...(prev.platforms || []), platform],
      }));
      setNewPlatform({
        name: "",
        url: "",
        color: "blue",
        icon: "ShoppingBag",
      });
      setIsPlatformModalOpen(false);
    }
  };

  const removePlatform = (index: number) => {
    setBelanjaSection((prev) => ({
      ...prev,
      platforms: (prev.platforms || []).filter((_, i) => i !== index),
    }));
  };

  // Review Section Helper Functions
  // Open modal for adding review items
  const addReviewItem = (type: "image" | "special") => {
    if (type === "image") {
      setNewImageReview({ file: null, url: "", title: "", description: "" });
      setIsImageReviewModalOpen(true);
    } else {
      setNewSpecialReview({
        title: "",
        description: "",
        text: "Kepuasan 100%",
        icon: "Heart",
        background: "from-blue-50 to-blue-100",
      });
      setIsSpecialReviewModalOpen(true);
    }
  };

  // Handle submit for image review modal
  const handleSubmitImageReview = async () => {
    setIsUploadingImageReview(true);
    let imageUrl = newImageReview.url;
    try {
      if (newImageReview.file) {
        const result = await uploadImage(newImageReview.file, "review");
        if (result.success && result.url) {
          imageUrl = result.url;
        } else {
          throw new Error(result.error || "Upload failed");
        }
      }
      if (imageUrl) {
        const newItem: ReviewItem = {
          type: "image",
          url: imageUrl,
          title: newImageReview.title,
          description: newImageReview.description,
        };
        setReviewSection((prev) => ({
          ...prev,
          review_items: [...(prev.review_items || []), newItem],
        }));
        setIsImageReviewModalOpen(false);
        setNewImageReview({ file: null, url: "", title: "", description: "" });
        toast({
          title: "Berhasil!",
          description: "Image review berhasil ditambahkan",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal menambah image review",
        variant: "destructive",
      });
    } finally {
      setIsUploadingImageReview(false);
    }
  };

  // Handle submit for special review modal
  const handleSubmitSpecialReview = () => {
    const newItem: ReviewItem = {
      type: "special",
      url: "",
      title: newSpecialReview.title,
      description: newSpecialReview.description,
      special_content: {
        icon: newSpecialReview.icon,
        text: newSpecialReview.text,
        background: newSpecialReview.background,
      },
    };
    setReviewSection((prev) => ({
      ...prev,
      review_items: [...(prev.review_items || []), newItem],
    }));
    setIsSpecialReviewModalOpen(false);
    setNewSpecialReview({
      title: "",
      description: "",
      text: "Kepuasan 100%",
      icon: "Heart",
      background: "from-blue-50 to-blue-100",
    });
    toast({
      title: "Berhasil!",
      description: "Special item berhasil ditambahkan",
    });
  };

  const uploadReviewImage = async (file: File) => {
    try {
      setIsUploading(true);
      const result = await uploadImage(file, "review");

      if (result.success && result.url) {
        const title = prompt("Masukkan judul review (opsional):") || "";
        const description =
          prompt("Masukkan deskripsi review (opsional):") || "";
        const newItem: ReviewItem = {
          type: "image",
          url: result.url!,
          title: title,
          description: description,
        };
        setReviewSection((prev) => ({
          ...prev,
          review_items: [...(prev.review_items || []), newItem],
        }));
        toast({
          title: "Berhasil!",
          description: "Gambar review berhasil diupload",
        });
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading review image:", error);
      toast({
        title: "Error",
        description: "Gagal mengupload gambar review",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const removeReviewItem = async (index: number) => {
    const item = reviewSection.review_items[index];
    if (item.type === "image" && item.url.includes("supabase")) {
      try {
        await deleteImage(item.url);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }

    setReviewSection((prev) => ({
      ...prev,
      review_items: (prev.review_items || []).filter((_, i) => i !== index),
    }));
  };

  // Footer Section Helper Functions
  const addSupportedByLink = () => {
    setNewSupportedBy({ name: "", url: "", icon: "Building2" });
    setIsSupportedByModalOpen(true);
  };

  const handleSubmitSupportedBy = () => {
    if (newSupportedBy.name && newSupportedBy.url) {
      const newLink: SupportedByLink = {
        name: newSupportedBy.name,
        url: newSupportedBy.url,
      };
      setFooterSection((prev) => ({
        ...prev,
        supported_by_links: [...(prev.supported_by_links || []), newLink],
      }));
      setNewSupportedBy({ name: "", url: "", icon: "Building2" });
      setIsSupportedByModalOpen(false);
      toast({
        title: "Berhasil!",
        description: "Supported by link berhasil ditambahkan",
      });
    }
  };

  const removeSupportedByLink = (index: number) => {
    setFooterSection((prev) => ({
      ...prev,
      supported_by_links: (prev.supported_by_links || []).filter(
        (_, i) => i !== index
      ),
    }));
  };

  const addSocialMediaLink = () => {
    setNewSocialMedia({
      platform: "",
      url: "",
      display_text: "",
      icon: "Globe",
    });
    setIsSocialMediaModalOpen(true);
  };

  const handleSubmitSocialMedia = () => {
    if (
      newSocialMedia.platform &&
      newSocialMedia.url &&
      newSocialMedia.display_text &&
      newSocialMedia.icon
    ) {
      const newLink: SocialMediaLink = {
        platform: newSocialMedia.platform.toLowerCase(),
        url: newSocialMedia.url,
        display_text: newSocialMedia.display_text,
        icon: newSocialMedia.icon.toLowerCase(),
      };
      setFooterSection((prev) => ({
        ...prev,
        social_media_links: [...(prev.social_media_links || []), newLink],
      }));
      setNewSocialMedia({
        platform: "",
        url: "",
        display_text: "",
        icon: "Globe",
      });
      setIsSocialMediaModalOpen(false);
      toast({
        title: "Berhasil!",
        description: "Social media link berhasil ditambahkan",
      });
    }
  };

  const removeSocialMediaLink = (index: number) => {
    setFooterSection((prev) => ({
      ...prev,
      social_media_links: (prev.social_media_links || []).filter(
        (_, i) => i !== index
      ),
    }));
  };

  const removeTeamMember = (index: number) => {
    setProfilSection((prev) => ({
      ...prev,
      team_members: (prev.team_members || []).filter((_, i) => i !== index),
    }));
  };

  const addCarouselImage = () => {
    const newImage = prompt("Masukkan URL gambar:");
    if (newImage) {
      const newItem: MediaItem = {
        type: "image",
        url: newImage,
        title: "",
      };
      setHomeSection((prev) => ({
        ...prev,
        carousel_items: [...(prev.carousel_items || []), newItem],
        carousel_images: [...(prev.carousel_images || []), newImage], // Keep backward compatibility
      }));
    }
  };

  const addCarouselVideo = () => {
    const videoUrl = prompt("Masukkan URL YouTube:");
    if (videoUrl) {
      const videoId = getYouTubeVideoId(videoUrl);
      if (videoId) {
        const title =
          prompt("Masukkan judul video (opsional):") || "Video Demo SIKOMJARU";
        const newItem: MediaItem = {
          type: "video",
          url: videoUrl,
          title: title,
        };
        setHomeSection((prev) => ({
          ...prev,
          carousel_items: [...(prev.carousel_items || []), newItem],
        }));
      } else {
        toast({
          title: "Error",
          description: "URL YouTube tidak valid. Pastikan URL benar.",
          variant: "destructive",
        });
      }
    }
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const result = await uploadImage(file, "carousel");

      if (result.success && result.url) {
        const newItem: MediaItem = {
          type: "image",
          url: result.url!,
          title: "",
        };
        setHomeSection((prev) => ({
          ...prev,
          carousel_items: [...(prev.carousel_items || []), newItem],
          carousel_images: [...(prev.carousel_images || []), result.url!], // Keep backward compatibility
        }));
        toast({
          title: "Berhasil!",
          description: "Gambar berhasil diupload",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Gagal upload gambar",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat upload",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const removeCarouselItem = async (index: number) => {
    const items = homeSection.carousel_items || [];
    const item = items[index];

    if (!item) return;

    // Jika URL dari Supabase storage, hapus dari storage
    if (
      item.type === "image" &&
      item.url.includes("/storage/v1/object/public/cms-images/")
    ) {
      const confirmDelete = confirm(
        "Yakin ingin menghapus item ini? Gambar akan dihapus permanen dari storage."
      );
      if (confirmDelete) {
        const deleted = await deleteImage(item.url);
        if (!deleted) {
          toast({
            title: "Peringatan",
            description:
              "Item dihapus dari list tapi gambar mungkin masih ada di storage",
            variant: "destructive",
          });
        }
      } else {
        return; // User cancelled
      }
    }

    setHomeSection((prev) => ({
      ...prev,
      carousel_items: (prev.carousel_items || []).filter((_, i) => i !== index),
      // Also remove from carousel_images for backward compatibility
      carousel_images: (prev.carousel_images || []).filter(
        (url) => url !== item.url
      ),
    }));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat data...</p>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div>
        <AdminHeader />
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  CMS SIKOMJARU - Panel Admin
                </h1>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 sm:p-6">
                  <Tabs defaultValue="home" className="w-full">
                    <div className="mb-6">
                      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1 h-auto p-1">
                        <TabsTrigger value="home" className="text-xs px-2 py-2">
                          Home
                        </TabsTrigger>
                        <TabsTrigger
                          value="produk"
                          className="text-xs px-2 py-2"
                        >
                          Produk
                        </TabsTrigger>
                        <TabsTrigger
                          value="profil"
                          className="text-xs px-2 py-2"
                        >
                          Profil
                        </TabsTrigger>
                        <TabsTrigger
                          value="sertifikasi"
                          className="text-xs px-2 py-2"
                        >
                          Sertifikasi
                        </TabsTrigger>
                        <TabsTrigger
                          value="penelitian"
                          className="text-xs px-2 py-2"
                        >
                          Penelitian
                        </TabsTrigger>
                        <TabsTrigger
                          value="belanja"
                          className="text-xs px-2 py-2"
                        >
                          Belanja
                        </TabsTrigger>
                        <TabsTrigger
                          value="review"
                          className="text-xs px-2 py-2"
                        >
                          Review
                        </TabsTrigger>
                        <TabsTrigger
                          value="footer"
                          className="text-xs px-2 py-2"
                        >
                          Footer
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="home" className="mt-2 sm:mt-6">
                      <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                            Kelola Section Home
                          </h2>
                          <Button
                            onClick={saveHomeSection}
                            disabled={isSaving}
                            className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            {isSaving ? "Menyimpan..." : "Simpan Section"}
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Konten Utama */}
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-gray-700">
                                <Settings className="w-5 h-5" />
                                Konten Utama
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div>
                                <Label htmlFor="title">Judul Utama</Label>
                                <Input
                                  id="title"
                                  value={homeSection.title}
                                  onChange={(e) =>
                                    setHomeSection((prev) => ({
                                      ...prev,
                                      title: e.target.value,
                                    }))
                                  }
                                  placeholder="SIKOMJARU: Solusi Inovatif..."
                                />
                              </div>
                              <div>
                                <Label htmlFor="subtitle">Subtitle</Label>
                                <Textarea
                                  id="subtitle"
                                  value={homeSection.subtitle}
                                  onChange={(e) =>
                                    setHomeSection((prev) => ({
                                      ...prev,
                                      subtitle: e.target.value,
                                    }))
                                  }
                                  placeholder="Tingkatkan keterampilan Bantuan Hidup Dasar..."
                                  rows={3}
                                />
                              </div>
                              <div>
                                <Label htmlFor="description">Deskripsi</Label>
                                <Textarea
                                  id="description"
                                  value={homeSection.description}
                                  onChange={(e) =>
                                    setHomeSection((prev) => ({
                                      ...prev,
                                      description: e.target.value,
                                    }))
                                  }
                                  placeholder="Deskripsi produk..."
                                  rows={2}
                                />
                              </div>
                              <div>
                                <Label htmlFor="background">
                                  Background Image
                                </Label>
                                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                                  <label className="cursor-pointer inline-flex items-center justify-center rounded-md text-xs font-medium h-9 px-3 py-2 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground">
                                    <Upload className="w-4 h-4 mr-1" />
                                    {isUploading
                                      ? "Uploading..."
                                      : "Upload Gambar"}
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="hidden"
                                      onChange={async (e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                          // Set uploading state if needed
                                          if (
                                            typeof setIsUploading === "function"
                                          )
                                            setIsUploading(true);
                                          const result = await uploadImage(
                                            file,
                                            "home-bg"
                                          );
                                          if (result.success && result.url) {
                                            setHomeSection((prev) => ({
                                              ...prev,
                                              background_image:
                                                result.url || "",
                                            }));
                                          }
                                          if (
                                            typeof setIsUploading === "function"
                                          )
                                            setIsUploading(false);
                                        }
                                      }}
                                      disabled={isUploading}
                                    />
                                  </label>
                                  {homeSection.background_image && (
                                    <img
                                      src={homeSection.background_image}
                                      alt="Background Preview"
                                      className="w-24 h-16 object-cover rounded border ml-0 sm:ml-2 mt-2 sm:mt-0"
                                    />
                                  )}
                                </div>
                              </div>
                              <div>
                                <Label htmlFor="video">
                                  Video URL (Opsional)
                                </Label>
                                <Input
                                  id="video"
                                  value={homeSection.video_url || ""}
                                  onChange={(e) =>
                                    setHomeSection((prev) => ({
                                      ...prev,
                                      video_url: e.target.value,
                                    }))
                                  }
                                  placeholder="https://youtube.com/..."
                                />
                              </div>
                            </CardContent>
                          </Card>
                          {/* Carousel Media */}
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-gray-700">
                                <ImageIcon className="w-5 h-5" />
                                Carousel Media (Gambar & Video)
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                {/* Upload and Add Buttons */}
                                <div className="flex flex-col sm:flex-row flex-wrap gap-2 w-full">
                                  <Button
                                    onClick={addCarouselImage}
                                    size="sm"
                                    variant="outline"
                                    className="text-xs w-full sm:w-auto"
                                  >
                                    <Plus className="w-4 h-4 mr-1" />
                                    URL Gambar
                                  </Button>
                                  <Button
                                    onClick={addCarouselVideo}
                                    size="sm"
                                    variant="outline"
                                    className="text-xs w-full sm:w-auto"
                                  >
                                    <Plus className="w-4 h-4 mr-1" />
                                    Video YouTube
                                  </Button>
                                  <label className="cursor-pointer inline-flex items-center justify-center rounded-md text-xs font-medium h-9 px-3 py-2 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
                                    <Upload className="w-4 h-4 mr-1" />
                                    {isUploading
                                      ? "Uploading..."
                                      : "Upload Gambar"}
                                    <input
                                      ref={fileInputRef}
                                      type="file"
                                      accept="image/*"
                                      className="hidden"
                                      onChange={handleImageUpload}
                                      disabled={isUploading}
                                    />
                                  </label>
                                </div>
                                {/* Carousel Items List */}
                                <div className="space-y-3">
                                  {(homeSection.carousel_items || []).map(
                                    (item, index) => (
                                      <div
                                        key={index}
                                        className="border rounded-lg p-3"
                                      >
                                        <div className="flex flex-col sm:flex-row items-start gap-3">
                                          {/* Media Preview */}
                                          <div className="flex-shrink-0 w-full sm:w-24 h-32 sm:h-24 bg-gray-100 rounded-lg overflow-hidden relative mb-2 sm:mb-0">
                                            {item.type === "image" ? (
                                              <img
                                                src={item.url}
                                                alt={`Carousel ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                  e.currentTarget.src =
                                                    "https://placehold.co/100x100/d1d5db/ffffff?text=Error";
                                                }}
                                              />
                                            ) : (
                                              <div className="w-full h-full bg-red-100 flex items-center justify-center relative">
                                                <img
                                                  src={getYouTubeThumbnail(
                                                    item.url
                                                  )}
                                                  alt={`Video ${index + 1}`}
                                                  className="w-full h-full object-cover"
                                                  onError={(e) => {
                                                    e.currentTarget.src =
                                                      "https://placehold.co/100x100/d1d5db/ffffff?text=Error";
                                                  }}
                                                />
                                                {/* Play button overlay */}
                                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="w-8 h-8 text-white opacity-80"
                                                  >
                                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                  </svg>
                                                </div>
                                              </div>
                                            )}
                                            {/* Type badge */}
                                            <div className="absolute top-1 right-1">
                                              <span
                                                className={`text-xs px-1.5 py-0.5 rounded-full font-medium text-white ${
                                                  item.type === "image"
                                                    ? "bg-green-500"
                                                    : "bg-red-500"
                                                }`}
                                              >
                                                {item.type === "image"
                                                  ? "IMG"
                                                  : "VID"}
                                              </span>
                                            </div>
                                          </div>
                                          {/* Content */}
                                          <div className="flex-1 space-y-2 min-w-0 w-full">
                                            <div>
                                              <Label className="text-sm text-gray-600 mb-1 block">
                                                {item.type === "image"
                                                  ? "URL Gambar"
                                                  : "URL Video YouTube"}{" "}
                                                {index + 1}
                                              </Label>
                                              <Input
                                                value={item.url}
                                                onChange={(e) => {
                                                  const newItems = [
                                                    ...(homeSection.carousel_items ||
                                                      []),
                                                  ];
                                                  newItems[index] = {
                                                    ...newItems[index],
                                                    url: e.target.value,
                                                  };
                                                  setHomeSection((prev) => ({
                                                    ...prev,
                                                    carousel_items: newItems,
                                                  }));
                                                }}
                                                placeholder={
                                                  item.type === "image"
                                                    ? "https://..."
                                                    : "https://youtube.com/watch?v=..."
                                                }
                                                className="text-sm truncate"
                                                readOnly={
                                                  item.type === "image" &&
                                                  item.url.includes(
                                                    "/storage/v1/object/public/cms-images/"
                                                  )
                                                }
                                              />
                                            </div>
                                            {item.type === "video" && (
                                              <div>
                                                <Label className="text-sm text-gray-600 mb-1 block">
                                                  Judul Video (Opsional)
                                                </Label>
                                                <Input
                                                  value={item.title || ""}
                                                  onChange={(e) => {
                                                    const newItems = [
                                                      ...(homeSection.carousel_items ||
                                                        []),
                                                    ];
                                                    newItems[index] = {
                                                      ...newItems[index],
                                                      title: e.target.value,
                                                    };
                                                    setHomeSection((prev) => ({
                                                      ...prev,
                                                      carousel_items: newItems,
                                                    }));
                                                  }}
                                                  placeholder="Video Demo SIKOMJARU"
                                                  className="text-sm"
                                                />
                                              </div>
                                            )}
                                            {item.type === "video" &&
                                              getYouTubeVideoId(item.url) && (
                                                <p className="text-xs text-red-600">
                                                  ✓ Video YouTube valid
                                                </p>
                                              )}
                                          </div>
                                          {/* Delete Button */}
                                          <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() =>
                                              removeCarouselItem(index)
                                            }
                                            className="text-red-600 hover:text-red-700 hover:bg-red-50 flex-shrink-0 w-9 h-9 mt-2 sm:mt-0"
                                          >
                                            <Trash2 className="w-4 h-4" />
                                            <span className="sr-only">
                                              Hapus item
                                            </span>
                                          </Button>
                                        </div>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="produk" className="mt-6">
                      <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                            Kelola Section Produk
                          </h2>
                          <Button
                            onClick={saveProdukSection}
                            disabled={isSaving}
                            className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            {isSaving ? "Menyimpan..." : "Simpan Section"}
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-gray-700">
                                <Settings className="w-5 h-5" />
                                Konten Utama
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div>
                                <Label htmlFor="produk-title">
                                  Judul Section
                                </Label>
                                <Input
                                  id="produk-title"
                                  value={produkSection.title}
                                  onChange={(e) =>
                                    setProdukSection((prev) => ({
                                      ...prev,
                                      title: e.target.value,
                                    }))
                                  }
                                  placeholder="Produk Inovatif SIKOMJARU"
                                />
                              </div>
                              <div>
                                <Label htmlFor="produk-subtitle">
                                  Subtitle
                                </Label>
                                <Textarea
                                  id="produk-subtitle"
                                  value={produkSection.subtitle}
                                  onChange={(e) =>
                                    setProdukSection((prev) => ({
                                      ...prev,
                                      subtitle: e.target.value,
                                    }))
                                  }
                                  placeholder="Dirancang untuk edukasi RJP yang efektif..."
                                  rows={3}
                                />
                              </div>
                              <div>
                                <Label htmlFor="benefits-title">
                                  Judul Benefits
                                </Label>
                                <Input
                                  id="benefits-title"
                                  value={produkSection.benefits_title}
                                  onChange={(e) =>
                                    setProdukSection((prev) => ({
                                      ...prev,
                                      benefits_title: e.target.value,
                                    }))
                                  }
                                  placeholder="Manfaat dan Keunggulan"
                                />
                              </div>
                              <div>
                                <Label htmlFor="benefits-description">
                                  Deskripsi Benefits
                                </Label>
                                <Textarea
                                  id="benefits-description"
                                  value={produkSection.benefits_description}
                                  onChange={(e) =>
                                    setProdukSection((prev) => ({
                                      ...prev,
                                      benefits_description: e.target.value,
                                    }))
                                  }
                                  placeholder="SIKOMJARU mengatasi kelemahan produk komersial..."
                                  rows={4}
                                />
                              </div>
                              <div>
                                <Label htmlFor="features-title">
                                  Judul Features
                                </Label>
                                <Input
                                  id="features-title"
                                  value={produkSection.features_title}
                                  onChange={(e) =>
                                    setProdukSection((prev) => ({
                                      ...prev,
                                      features_title: e.target.value,
                                    }))
                                  }
                                  placeholder="Fitur Utama & Spesifikasi"
                                />
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-gray-700">
                                <ImageIcon className="w-5 h-5" />
                                Carousel Produk (
                                {produkSection.carousel_items?.length || 0})
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              {/* Upload and Add Buttons */}
                              <div className="flex flex-wrap gap-2">
                                <Button
                                  onClick={() => addProdukCarouselItem("image")}
                                  size="sm"
                                  variant="outline"
                                  className="text-xs"
                                >
                                  <Plus className="w-4 h-4 mr-1" />
                                  URL Gambar
                                </Button>
                                <Button
                                  onClick={() => addProdukCarouselItem("video")}
                                  size="sm"
                                  variant="outline"
                                  className="text-xs"
                                >
                                  <Plus className="w-4 h-4 mr-1" />
                                  Video YouTube
                                </Button>
                                <label className="cursor-pointer inline-flex items-center justify-center rounded-md text-xs font-medium h-9 px-3 py-2 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground">
                                  <Upload className="w-4 h-4 mr-1" />
                                  {isUploading
                                    ? "Uploading..."
                                    : "Upload Gambar"}
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        uploadProdukImage(file);
                                        e.target.value = "";
                                      }
                                    }}
                                  />
                                </label>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-80 overflow-y-auto p-1">
                                {produkSection.carousel_items?.map(
                                  (item, index) => (
                                    <div key={index} className="relative group">
                                      {item.type === "video" ? (
                                        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                                          <img
                                            src={getYouTubeThumbnail(item.url)}
                                            alt={
                                              item.title || `Video ${index + 1}`
                                            }
                                            className="w-full h-full object-cover"
                                          />
                                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                              <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                                            </div>
                                          </div>
                                        </div>
                                      ) : (
                                        <img
                                          src={item.url}
                                          alt={
                                            item.title || `Image ${index + 1}`
                                          }
                                          className="w-full h-24 object-cover rounded-lg"
                                        />
                                      )}
                                      <Button
                                        size="sm"
                                        variant="destructive"
                                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto"
                                        onClick={() =>
                                          removeProdukCarouselItem(index)
                                        }
                                      >
                                        <Trash2 className="w-3 h-3" />
                                      </Button>
                                      {item.title && (
                                        <p className="text-xs text-gray-600 mt-1 truncate">
                                          {item.title}
                                        </p>
                                      )}
                                    </div>
                                  )
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-gray-700">
                                <Plus className="w-5 h-5" />
                                Benefits ({produkSection.benefits?.length || 0})
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <Button
                                onClick={addBenefit}
                                size="sm"
                                variant="outline"
                                className="text-xs"
                              >
                                <Plus className="w-4 h-4 mr-1" />
                                Tambah Benefit
                              </Button>
                              <div className="space-y-3 max-h-60 overflow-y-auto p-1">
                                {produkSection.benefits?.map(
                                  (benefit, index) => (
                                    <div
                                      key={index}
                                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                                    >
                                      <div className="flex-1">
                                        <h4 className="font-medium text-sm">
                                          {benefit.title}
                                        </h4>
                                        <p className="text-xs text-gray-600">
                                          {benefit.description}
                                        </p>
                                      </div>
                                      <Button
                                        size="sm"
                                        variant="destructive"
                                        className="p-1 h-auto"
                                        onClick={() => removeBenefit(index)}
                                      >
                                        <Trash2 className="w-3 h-3" />
                                      </Button>
                                    </div>
                                  )
                                )}
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-gray-700">
                                <Settings className="w-5 h-5" />
                                Features ({produkSection.features?.length || 0})
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <Button
                                onClick={addFeature}
                                size="sm"
                                variant="outline"
                                className="text-xs"
                              >
                                <Plus className="w-4 h-4 mr-1" />
                                Tambah Feature
                              </Button>
                              <div className="space-y-3 max-h-60 overflow-y-auto p-1">
                                {produkSection.features?.map(
                                  (feature, index) => (
                                    <div
                                      key={index}
                                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                                    >
                                      <div className="flex-1">
                                        <h4 className="font-medium text-sm">
                                          {feature.title}
                                        </h4>
                                        <p className="text-xs text-gray-600">
                                          {feature.description}
                                        </p>
                                        <div className="flex gap-2 mt-1">
                                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                                            {feature.icon}
                                          </span>
                                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                            {feature.color}
                                          </span>
                                        </div>
                                      </div>
                                      <Button
                                        size="sm"
                                        variant="destructive"
                                        className="p-1 h-auto"
                                        onClick={() => removeFeature(index)}
                                      >
                                        <Trash2 className="w-3 h-3" />
                                      </Button>
                                    </div>
                                  )
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Modal Tambah Benefit */}
                    <Dialog
                      open={isBenefitModalOpen}
                      onOpenChange={setIsBenefitModalOpen}
                    >
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Tambah Benefit Baru</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div>
                            <Label htmlFor="benefit-title">Judul Benefit</Label>
                            <Input
                              id="benefit-title"
                              value={newBenefit.title}
                              onChange={(e) =>
                                setNewBenefit((prev) => ({
                                  ...prev,
                                  title: e.target.value,
                                }))
                              }
                              placeholder="Contoh: Pelatihan Berkualitas"
                            />
                          </div>
                          <div>
                            <Label htmlFor="benefit-description">
                              Deskripsi
                            </Label>
                            <Textarea
                              id="benefit-description"
                              value={newBenefit.description}
                              onChange={(e) =>
                                setNewBenefit((prev) => ({
                                  ...prev,
                                  description: e.target.value,
                                }))
                              }
                              placeholder="Deskripsi lengkap tentang benefit..."
                              rows={3}
                            />
                          </div>
                          <div className="flex gap-2 pt-4">
                            <Button onClick={saveBenefit} className="flex-1">
                              Simpan Benefit
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setIsBenefitModalOpen(false)}
                            >
                              Batal
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* Modal Tambah Feature */}
                    <Dialog
                      open={isFeatureModalOpen}
                      onOpenChange={setIsFeatureModalOpen}
                    >
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Tambah Feature Baru</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div>
                            <Label htmlFor="feature-title">Judul Feature</Label>
                            <Input
                              id="feature-title"
                              value={newFeature.title}
                              onChange={(e) =>
                                setNewFeature((prev) => ({
                                  ...prev,
                                  title: e.target.value,
                                }))
                              }
                              placeholder="Contoh: Sensor Real-time"
                            />
                          </div>
                          <div>
                            <Label htmlFor="feature-description">
                              Deskripsi
                            </Label>
                            <Textarea
                              id="feature-description"
                              value={newFeature.description}
                              onChange={(e) =>
                                setNewFeature((prev) => ({
                                  ...prev,
                                  description: e.target.value,
                                }))
                              }
                              placeholder="Deskripsi lengkap tentang feature..."
                              rows={3}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="feature-icon">Icon</Label>
                              <Select
                                value={newFeature.icon}
                                onValueChange={(value) =>
                                  setNewFeature((prev) => ({
                                    ...prev,
                                    icon: value,
                                  }))
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Pilih icon" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Lightbulb">
                                    💡 Lightbulb - Lampu
                                  </SelectItem>
                                  <SelectItem value="Mic">
                                    🎤 Mic - Mikrofon
                                  </SelectItem>
                                  <SelectItem value="Monitor">
                                    🖥️ Monitor - Layar
                                  </SelectItem>
                                  <SelectItem value="Zap">
                                    ⚡ Zap - Listrik
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="feature-color">Warna</Label>
                              <Select
                                value={newFeature.color}
                                onValueChange={(value) =>
                                  setNewFeature((prev) => ({
                                    ...prev,
                                    color: value,
                                  }))
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Pilih warna" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="blue">🔵 Blue</SelectItem>
                                  <SelectItem value="teal">🟢 Teal</SelectItem>
                                  <SelectItem value="orange">
                                    🟠 Orange
                                  </SelectItem>
                                  <SelectItem value="green">
                                    🟢 Green
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-600 mb-2">
                              Preview:
                            </p>
                            <div className="flex gap-2">
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                                {newFeature.icon || "Icon"}
                              </span>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                {newFeature.color || "Warna"}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2 pt-4">
                            <Button onClick={saveFeature} className="flex-1">
                              Simpan Feature
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setIsFeatureModalOpen(false)}
                            >
                              Batal
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <TabsContent value="profil" className="mt-6">
                      <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <h2 className="text-2xl font-bold">
                            Kelola Section Profil
                          </h2>
                          <Button
                            onClick={saveProfilSection}
                            disabled={isSaving}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            {isSaving ? "Menyimpan..." : "Simpan Section"}
                          </Button>
                        </div>

                        {/* Basic Information */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center">
                              <Settings className="w-5 h-5 mr-2" />
                              Informasi Dasar
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <Label htmlFor="profil-title">
                                Judul Section
                              </Label>
                              <Input
                                id="profil-title"
                                value={profilSection.title}
                                onChange={(e) =>
                                  setProfilSection((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                  }))
                                }
                                placeholder="Profil Tim SIKOMJARU"
                              />
                            </div>
                            <div>
                              <Label htmlFor="profil-subtitle">Deskripsi</Label>
                              <Textarea
                                id="profil-subtitle"
                                value={profilSection.subtitle}
                                onChange={(e) =>
                                  setProfilSection((prev) => ({
                                    ...prev,
                                    subtitle: e.target.value,
                                  }))
                                }
                                placeholder="Deskripsi singkat tentang tim"
                                rows={3}
                              />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="objective-title">
                                  Judul Tujuan
                                </Label>
                                <Input
                                  id="objective-title"
                                  value={profilSection.objective_title}
                                  onChange={(e) =>
                                    setProfilSection((prev) => ({
                                      ...prev,
                                      objective_title: e.target.value,
                                    }))
                                  }
                                  placeholder="Tujuan Mulia Kami"
                                />
                              </div>
                              <div>
                                <Label htmlFor="vision-title">Judul Visi</Label>
                                <Input
                                  id="vision-title"
                                  value={profilSection.vision_title}
                                  onChange={(e) =>
                                    setProfilSection((prev) => ({
                                      ...prev,
                                      vision_title: e.target.value,
                                    }))
                                  }
                                  placeholder="Visi Kami"
                                />
                              </div>
                            </div>

                            <div>
                              <Label htmlFor="objective-description">
                                Deskripsi Tujuan
                              </Label>
                              <Textarea
                                id="objective-description"
                                value={profilSection.objective_description}
                                onChange={(e) =>
                                  setProfilSection((prev) => ({
                                    ...prev,
                                    objective_description: e.target.value,
                                  }))
                                }
                                placeholder="Deskripsi tujuan organisasi"
                                rows={4}
                              />
                            </div>

                            <div>
                              <Label htmlFor="vision-description">
                                Deskripsi Visi
                              </Label>
                              <Textarea
                                id="vision-description"
                                value={profilSection.vision_description}
                                onChange={(e) =>
                                  setProfilSection((prev) => ({
                                    ...prev,
                                    vision_description: e.target.value,
                                  }))
                                }
                                placeholder="Deskripsi visi organisasi"
                                rows={4}
                              />
                            </div>

                            <div>
                              <Label htmlFor="team-title">Judul Tim</Label>
                              <Input
                                id="team-title"
                                value={profilSection.team_title}
                                onChange={(e) =>
                                  setProfilSection((prev) => ({
                                    ...prev,
                                    team_title: e.target.value,
                                  }))
                                }
                                placeholder="Sikomjaru Team"
                              />
                            </div>
                          </CardContent>
                        </Card>

                        {/* Team Carousel */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center">
                              <ImageIcon className="w-5 h-5 mr-2" />
                              Carousel Foto Tim
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex flex-col sm:flex-row gap-2 w-full">
                                <Button
                                  onClick={addProfilTeamVideo}
                                  size="sm"
                                  variant="outline"
                                  className="w-full sm:w-auto"
                                >
                                  <Plus className="w-4 h-4 mr-2" />
                                  Video YouTube
                                </Button>
                                <label className="cursor-pointer w-full sm:w-auto">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    disabled={isUploading}
                                    asChild
                                    className="w-full sm:w-auto"
                                  >
                                    <span>
                                      <Upload className="w-4 h-4 mr-2" />
                                      {isUploading
                                        ? "Upload..."
                                        : "Upload Foto Tim"}
                                    </span>
                                  </Button>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        uploadProfilTeamImage(file);
                                        e.target.value = "";
                                      }
                                    }}
                                  />
                                </label>
                              </div>

                              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 max-h-80 overflow-y-auto">
                                {profilSection.team_carousel_items?.map(
                                  (item, index) => (
                                    <div key={index} className="relative group">
                                      {item.type === "video" ? (
                                        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                                          <img
                                            src={getYouTubeThumbnail(item.url)}
                                            alt={
                                              item.title || `Video ${index + 1}`
                                            }
                                            className="w-full h-full object-cover"
                                          />
                                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                              <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                                            </div>
                                          </div>
                                        </div>
                                      ) : (
                                        <img
                                          src={item.url}
                                          alt={
                                            item.title ||
                                            `Foto Tim ${index + 1}`
                                          }
                                          className="w-full h-40 sm:h-48 object-cover rounded-lg"
                                        />
                                      )}
                                      <Button
                                        size="sm"
                                        variant="destructive"
                                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={() =>
                                          removeProfilTeamCarouselItem(index)
                                        }
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </Button>
                                      {item.title && (
                                        <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                                          {item.title}
                                        </div>
                                      )}
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Team Members */}
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              <span className="flex items-center">
                                <Settings className="w-5 h-5 mr-2" />
                                Anggota Tim
                              </span>
                              <Dialog
                                open={isTeamMemberModalOpen}
                                onOpenChange={setIsTeamMemberModalOpen}
                              >
                                <DialogTrigger asChild>
                                  <Button size="sm">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Tambah Anggota
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                  <DialogHeader>
                                    <DialogTitle>
                                      Tambah Anggota Tim
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4 py-4">
                                    <div>
                                      <Label htmlFor="member-name">
                                        Nama Lengkap
                                      </Label>
                                      <Input
                                        id="member-name"
                                        value={newTeamMember.name}
                                        onChange={(e) =>
                                          setNewTeamMember((prev) => ({
                                            ...prev,
                                            name: e.target.value,
                                          }))
                                        }
                                        placeholder="Masukkan nama lengkap"
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor="member-position">
                                        Posisi/Jabatan
                                      </Label>
                                      <Input
                                        id="member-position"
                                        value={newTeamMember.position}
                                        onChange={(e) =>
                                          setNewTeamMember((prev) => ({
                                            ...prev,
                                            position: e.target.value,
                                          }))
                                        }
                                        placeholder="Contoh: CEO, Finance, etc."
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor="member-type">
                                        Tipe Anggota
                                      </Label>
                                      <Select
                                        value={newTeamMember.type}
                                        onValueChange={(
                                          value: "supervisor" | "student"
                                        ) =>
                                          setNewTeamMember((prev) => ({
                                            ...prev,
                                            type: value,
                                          }))
                                        }
                                      >
                                        <SelectTrigger>
                                          <SelectValue placeholder="Pilih tipe anggota" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="supervisor">
                                            Supervisor/Dosen
                                          </SelectItem>
                                          <SelectItem value="student">
                                            Mahasiswa
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div>
                                      <Label htmlFor="member-avatar">
                                        Avatar
                                      </Label>
                                      <div className="space-y-2">
                                        {newTeamMember.avatar && (
                                          <div className="flex items-center gap-2">
                                            <img
                                              src={newTeamMember.avatar}
                                              alt="Preview"
                                              className="w-12 h-12 rounded-lg object-cover"
                                            />
                                            <Button
                                              type="button"
                                              size="sm"
                                              variant="outline"
                                              onClick={() =>
                                                setNewTeamMember((prev) => ({
                                                  ...prev,
                                                  avatar: "",
                                                }))
                                              }
                                            >
                                              Hapus
                                            </Button>
                                          </div>
                                        )}
                                        <div className="flex gap-2">
                                          <label className="cursor-pointer flex-1">
                                            <Button
                                              type="button"
                                              size="sm"
                                              variant="outline"
                                              disabled={isUploadingAvatar}
                                              className="w-full"
                                              asChild
                                            >
                                              <span>
                                                <Upload className="w-4 h-4 mr-2" />
                                                {isUploadingAvatar
                                                  ? "Upload..."
                                                  : "Upload Foto"}
                                              </span>
                                            </Button>
                                            <input
                                              type="file"
                                              accept="image/*"
                                              className="hidden"
                                              onChange={(e) => {
                                                const file =
                                                  e.target.files?.[0];
                                                if (file) {
                                                  uploadNewMemberAvatar(file);
                                                  e.target.value = "";
                                                }
                                              }}
                                            />
                                          </label>
                                        </div>
                                        <Input
                                          id="member-avatar"
                                          value={newTeamMember.avatar}
                                          onChange={(e) =>
                                            setNewTeamMember((prev) => ({
                                              ...prev,
                                              avatar: e.target.value,
                                            }))
                                          }
                                          placeholder="Atau masukkan URL avatar"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <Label htmlFor="member-instagram">
                                        URL Instagram (Opsional)
                                      </Label>
                                      <Input
                                        id="member-instagram"
                                        value={newTeamMember.instagram}
                                        onChange={(e) =>
                                          setNewTeamMember((prev) => ({
                                            ...prev,
                                            instagram: e.target.value,
                                          }))
                                        }
                                        placeholder="https://instagram.com/username"
                                      />
                                    </div>
                                    <div className="flex justify-end gap-2 pt-4">
                                      <Button
                                        variant="outline"
                                        onClick={() =>
                                          setIsTeamMemberModalOpen(false)
                                        }
                                      >
                                        Batal
                                      </Button>
                                      <Button onClick={addTeamMember}>
                                        Tambah Anggota
                                      </Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {profilSection.team_members?.map(
                                  (member, index) => (
                                    <div
                                      key={index}
                                      className="flex flex-col sm:flex-row items-center gap-3 p-3 border rounded-lg"
                                    >
                                      <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-16 h-16 sm:w-12 sm:h-12 rounded-lg object-cover"
                                      />
                                      <div className="flex-1 text-center sm:text-left">
                                        <div className="font-semibold text-sm">
                                          {member.name}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                          {member.position}
                                        </div>
                                        <div className="text-xs text-blue-500">
                                          {member.type}
                                        </div>
                                      </div>
                                      <div className="flex gap-2 justify-center sm:justify-end w-full sm:w-auto">
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          onClick={() =>
                                            openEditTeamMember(index)
                                          }
                                        >
                                          <Settings className="w-4 h-4" />
                                        </Button>
                                        <Button
                                          size="sm"
                                          variant="destructive"
                                          onClick={() =>
                                            removeTeamMember(index)
                                          }
                                        >
                                          <Trash2 className="w-4 h-4" />
                                        </Button>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Modal Edit Team Member */}
                        <Dialog
                          open={isEditTeamMemberModalOpen}
                          onOpenChange={setIsEditTeamMemberModalOpen}
                        >
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Edit Anggota Tim</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div>
                                <Label htmlFor="edit-member-name">
                                  Nama Lengkap
                                </Label>
                                <Input
                                  id="edit-member-name"
                                  value={editTeamMember.name}
                                  onChange={(e) =>
                                    setEditTeamMember((prev) => ({
                                      ...prev,
                                      name: e.target.value,
                                    }))
                                  }
                                  placeholder="Masukkan nama lengkap"
                                />
                              </div>
                              <div>
                                <Label htmlFor="edit-member-position">
                                  Posisi/Jabatan
                                </Label>
                                <Input
                                  id="edit-member-position"
                                  value={editTeamMember.position}
                                  onChange={(e) =>
                                    setEditTeamMember((prev) => ({
                                      ...prev,
                                      position: e.target.value,
                                    }))
                                  }
                                  placeholder="Contoh: CEO, Finance, etc."
                                />
                              </div>
                              <div>
                                <Label htmlFor="edit-member-type">
                                  Tipe Anggota
                                </Label>
                                <Select
                                  value={editTeamMember.type}
                                  onValueChange={(
                                    value: "supervisor" | "student"
                                  ) =>
                                    setEditTeamMember((prev) => ({
                                      ...prev,
                                      type: value,
                                    }))
                                  }
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Pilih tipe anggota" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="supervisor">
                                      Supervisor/Dosen
                                    </SelectItem>
                                    <SelectItem value="student">
                                      Mahasiswa
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label htmlFor="edit-member-avatar">
                                  Avatar
                                </Label>
                                <div className="space-y-2">
                                  {editTeamMember.avatar && (
                                    <div className="flex items-center gap-2">
                                      <img
                                        src={editTeamMember.avatar}
                                        alt="Preview"
                                        className="w-12 h-12 rounded-lg object-cover"
                                      />
                                      <Button
                                        type="button"
                                        size="sm"
                                        variant="outline"
                                        onClick={() =>
                                          setEditTeamMember((prev) => ({
                                            ...prev,
                                            avatar: "",
                                          }))
                                        }
                                      >
                                        Hapus
                                      </Button>
                                    </div>
                                  )}
                                  <div className="flex gap-2">
                                    <label className="cursor-pointer flex-1">
                                      <Button
                                        type="button"
                                        size="sm"
                                        variant="outline"
                                        disabled={isUploadingEditAvatar}
                                        className="w-full"
                                        asChild
                                      >
                                        <span>
                                          <Upload className="w-4 h-4 mr-2" />
                                          {isUploadingEditAvatar
                                            ? "Upload..."
                                            : "Upload Foto"}
                                        </span>
                                      </Button>
                                      <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                          const file = e.target.files?.[0];
                                          if (file) {
                                            uploadEditMemberAvatar(file);
                                            e.target.value = "";
                                          }
                                        }}
                                      />
                                    </label>
                                  </div>
                                  <Input
                                    id="edit-member-avatar"
                                    value={editTeamMember.avatar}
                                    onChange={(e) =>
                                      setEditTeamMember((prev) => ({
                                        ...prev,
                                        avatar: e.target.value,
                                      }))
                                    }
                                    placeholder="Atau masukkan URL avatar"
                                  />
                                </div>
                              </div>
                              <div>
                                <Label htmlFor="edit-member-instagram">
                                  URL Instagram (Opsional)
                                </Label>
                                <Input
                                  id="edit-member-instagram"
                                  value={editTeamMember.instagram}
                                  onChange={(e) =>
                                    setEditTeamMember((prev) => ({
                                      ...prev,
                                      instagram: e.target.value,
                                    }))
                                  }
                                  placeholder="https://instagram.com/username"
                                />
                              </div>
                              <div className="flex justify-end gap-2 pt-4">
                                <Button
                                  variant="outline"
                                  onClick={() =>
                                    setIsEditTeamMemberModalOpen(false)
                                  }
                                >
                                  Batal
                                </Button>
                                <Button onClick={updateTeamMember}>
                                  Update Anggota
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TabsContent>

                    {/* Tab Sertifikasi */}
                    <TabsContent value="sertifikasi" className="mt-6">
                      <div className="space-y-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <h2 className="text-xl sm:text-2xl font-bold">
                            Kelola Section Sertifikasi
                          </h2>
                          <Button
                            onClick={saveSertifikasiSection}
                            disabled={isSaving}
                            className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            {isSaving ? "Menyimpan..." : "Simpan Section"}
                          </Button>
                        </div>

                        <Card>
                          <CardHeader>
                            <CardTitle>Header Section</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <Label htmlFor="sertifikasi-title">Judul</Label>
                              <Input
                                id="sertifikasi-title"
                                value={sertifikasiSection.title}
                                onChange={(e) =>
                                  setSertifikasiSection((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                  }))
                                }
                              />
                            </div>
                            <div>
                              <Label htmlFor="sertifikasi-subtitle">
                                Subtitle
                              </Label>
                              <Textarea
                                id="sertifikasi-subtitle"
                                value={sertifikasiSection.subtitle}
                                onChange={(e) =>
                                  setSertifikasiSection((prev) => ({
                                    ...prev,
                                    subtitle: e.target.value,
                                  }))
                                }
                                rows={3}
                              />
                            </div>
                            <div>
                              <Label htmlFor="documents-title">
                                Judul Dokumen
                              </Label>
                              <Input
                                id="documents-title"
                                value={sertifikasiSection.documents_title}
                                onChange={(e) =>
                                  setSertifikasiSection((prev) => ({
                                    ...prev,
                                    documents_title: e.target.value,
                                  }))
                                }
                              />
                            </div>
                          </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          {/* NIB Document */}
                          <Card>
                            <CardHeader>
                              <CardTitle>Dokumen NIB</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div>
                                <Label htmlFor="nib-title">Judul NIB</Label>
                                <Input
                                  id="nib-title"
                                  value={sertifikasiSection.nib_title}
                                  onChange={(e) =>
                                    setSertifikasiSection((prev) => ({
                                      ...prev,
                                      nib_title: e.target.value,
                                    }))
                                  }
                                />
                              </div>
                              <div>
                                <Label htmlFor="nib-description">
                                  Deskripsi NIB
                                </Label>
                                <Textarea
                                  id="nib-description"
                                  value={sertifikasiSection.nib_description}
                                  onChange={(e) =>
                                    setSertifikasiSection((prev) => ({
                                      ...prev,
                                      nib_description: e.target.value,
                                    }))
                                  }
                                  rows={2}
                                />
                              </div>
                              <div>
                                <Label>Foto NIB</Label>
                                <div className="space-y-2">
                                  {sertifikasiSection.nib_image && (
                                    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2">
                                      <img
                                        src={sertifikasiSection.nib_image}
                                        alt="Preview NIB"
                                        className="w-20 h-20 rounded-lg object-cover"
                                      />
                                      <Button
                                        type="button"
                                        size="sm"
                                        variant="outline"
                                        onClick={() =>
                                          setSertifikasiSection((prev) => ({
                                            ...prev,
                                            nib_image: "",
                                          }))
                                        }
                                      >
                                        Hapus
                                      </Button>
                                    </div>
                                  )}
                                  <div className="flex flex-col sm:flex-row gap-2">
                                    <label className="cursor-pointer flex-1">
                                      <Button
                                        type="button"
                                        size="sm"
                                        variant="outline"
                                        disabled={isUploading}
                                        className="w-full"
                                        asChild
                                      >
                                        <span>
                                          <Upload className="w-4 h-4 mr-2" />
                                          {isUploading
                                            ? "Upload..."
                                            : "Upload Foto NIB"}
                                        </span>
                                      </Button>
                                      <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                          const file = e.target.files?.[0];
                                          if (file) {
                                            uploadNibImage(file);
                                            e.target.value = "";
                                          }
                                        }}
                                      />
                                    </label>
                                  </div>
                                  <Input
                                    value={sertifikasiSection.nib_image}
                                    onChange={(e) =>
                                      setSertifikasiSection((prev) => ({
                                        ...prev,
                                        nib_image: e.target.value,
                                      }))
                                    }
                                    placeholder="Atau masukkan URL foto NIB"
                                  />
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* HKI Document */}
                          <Card>
                            <CardHeader>
                              <CardTitle>Dokumen HKI</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div>
                                <Label htmlFor="hki-title">Judul HKI</Label>
                                <Input
                                  id="hki-title"
                                  value={sertifikasiSection.hki_title}
                                  onChange={(e) =>
                                    setSertifikasiSection((prev) => ({
                                      ...prev,
                                      hki_title: e.target.value,
                                    }))
                                  }
                                />
                              </div>
                              <div>
                                <Label htmlFor="hki-description">
                                  Deskripsi HKI
                                </Label>
                                <Textarea
                                  id="hki-description"
                                  value={sertifikasiSection.hki_description}
                                  onChange={(e) =>
                                    setSertifikasiSection((prev) => ({
                                      ...prev,
                                      hki_description: e.target.value,
                                    }))
                                  }
                                  rows={2}
                                />
                              </div>
                              <div>
                                <Label>Foto HKI</Label>
                                <div className="space-y-2">
                                  {sertifikasiSection.hki_image && (
                                    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2">
                                      <img
                                        src={sertifikasiSection.hki_image}
                                        alt="Preview HKI"
                                        className="w-20 h-20 rounded-lg object-cover"
                                      />
                                      <Button
                                        type="button"
                                        size="sm"
                                        variant="outline"
                                        onClick={() =>
                                          setSertifikasiSection((prev) => ({
                                            ...prev,
                                            hki_image: "",
                                          }))
                                        }
                                      >
                                        Hapus
                                      </Button>
                                    </div>
                                  )}
                                  <div className="flex flex-col sm:flex-row gap-2">
                                    <label className="cursor-pointer flex-1">
                                      <Button
                                        type="button"
                                        size="sm"
                                        variant="outline"
                                        disabled={isUploading}
                                        className="w-full"
                                        asChild
                                      >
                                        <span>
                                          <Upload className="w-4 h-4 mr-2" />
                                          {isUploading
                                            ? "Upload..."
                                            : "Upload Foto HKI"}
                                        </span>
                                      </Button>
                                      <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                          const file = e.target.files?.[0];
                                          if (file) {
                                            uploadHkiImage(file);
                                            e.target.value = "";
                                          }
                                        }}
                                      />
                                    </label>
                                  </div>
                                  <Input
                                    value={sertifikasiSection.hki_image}
                                    onChange={(e) =>
                                      setSertifikasiSection((prev) => ({
                                        ...prev,
                                        hki_image: e.target.value,
                                      }))
                                    }
                                    placeholder="Atau masukkan URL foto HKI"
                                  />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Tab Penelitian */}
                    <TabsContent value="penelitian" className="mt-6">
                      <div className="space-y-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <h2 className="text-xl sm:text-2xl font-bold">
                            Kelola Section Penelitian
                          </h2>
                          <Button
                            onClick={savePenelitianSection}
                            disabled={isSaving}
                            className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            {isSaving ? "Menyimpan..." : "Simpan Section"}
                          </Button>
                        </div>

                        <Card>
                          <CardHeader>
                            <CardTitle>Header Section</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <Label htmlFor="penelitian-title">Judul</Label>
                              <Input
                                id="penelitian-title"
                                value={penelitianSection.title}
                                onChange={(e) =>
                                  setPenelitianSection((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                  }))
                                }
                              />
                            </div>
                            <div>
                              <Label htmlFor="penelitian-description">
                                Deskripsi
                              </Label>
                              <Textarea
                                id="penelitian-description"
                                value={penelitianSection.description}
                                onChange={(e) =>
                                  setPenelitianSection((prev) => ({
                                    ...prev,
                                    description: e.target.value,
                                  }))
                                }
                                rows={6}
                              />
                            </div>
                            <div>
                              <Label htmlFor="implementation-title">
                                Judul Implementasi
                              </Label>
                              <Input
                                id="implementation-title"
                                value={penelitianSection.implementation_title}
                                onChange={(e) =>
                                  setPenelitianSection((prev) => ({
                                    ...prev,
                                    implementation_title: e.target.value,
                                  }))
                                }
                              />
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Carousel Penelitian</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-2">
                              <Button
                                onClick={() =>
                                  addPenelitianCarouselItem("image")
                                }
                                variant="outline"
                                size="sm"
                                className="w-full sm:w-auto"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Tambah Gambar
                              </Button>
                              <Button
                                onClick={() =>
                                  addPenelitianCarouselItem("video")
                                }
                                variant="outline"
                                size="sm"
                                className="w-full sm:w-auto"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Tambah Video
                              </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {penelitianSection.carousel_items?.map(
                                (item, index) => (
                                  <Card
                                    key={index}
                                    className="border border-gray-200"
                                  >
                                    <CardContent className="p-4">
                                      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-start mb-3">
                                        <h4 className="font-medium">
                                          {item.type === "image"
                                            ? "Gambar"
                                            : item.type === "video"
                                            ? "Video"
                                            : "Special"}{" "}
                                          #{index + 1}
                                        </h4>
                                        <Button
                                          onClick={() =>
                                            removePenelitianCarouselItem(index)
                                          }
                                          variant="outline"
                                          size="sm"
                                        >
                                          <Trash2 className="w-4 h-4" />
                                        </Button>
                                      </div>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <Label>Judul</Label>
                                          <Input
                                            value={item.title || ""}
                                            onChange={(e) =>
                                              updatePenelitianCarouselItem(
                                                index,
                                                "title",
                                                e.target.value
                                              )
                                            }
                                            placeholder="Masukkan judul"
                                          />
                                        </div>
                                        <div>
                                          <Label>Deskripsi</Label>
                                          <Input
                                            value={item.description || ""}
                                            onChange={(e) =>
                                              updatePenelitianCarouselItem(
                                                index,
                                                "description",
                                                e.target.value
                                              )
                                            }
                                            placeholder="Masukkan deskripsi"
                                          />
                                        </div>
                                        <div className="md:col-span-2">
                                          <Label>
                                            {item.type === "image"
                                              ? "Foto"
                                              : "URL Video"}
                                          </Label>
                                          {item.type === "image" ? (
                                            <div className="space-y-2">
                                              {item.url && (
                                                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2">
                                                  <img
                                                    src={item.url}
                                                    alt="Preview"
                                                    className="w-20 h-20 rounded-lg object-cover"
                                                  />
                                                  <Button
                                                    type="button"
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() =>
                                                      updatePenelitianCarouselItem(
                                                        index,
                                                        "url",
                                                        ""
                                                      )
                                                    }
                                                  >
                                                    Hapus
                                                  </Button>
                                                </div>
                                              )}
                                              <div className="flex flex-col sm:flex-row gap-2">
                                                <label className="cursor-pointer flex-1">
                                                  <Button
                                                    type="button"
                                                    size="sm"
                                                    variant="outline"
                                                    disabled={isUploading}
                                                    className="w-full"
                                                    asChild
                                                  >
                                                    <span>
                                                      <Upload className="w-4 h-4 mr-2" />
                                                      {isUploading
                                                        ? "Upload..."
                                                        : "Upload Foto"}
                                                    </span>
                                                  </Button>
                                                  <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                      const file =
                                                        e.target.files?.[0];
                                                      if (file) {
                                                        uploadPenelitianImage(
                                                          file,
                                                          index
                                                        );
                                                        e.target.value = "";
                                                      }
                                                    }}
                                                  />
                                                </label>
                                              </div>
                                              <Input
                                                value={item.url}
                                                onChange={(e) =>
                                                  updatePenelitianCarouselItem(
                                                    index,
                                                    "url",
                                                    e.target.value
                                                  )
                                                }
                                                placeholder="Atau masukkan URL foto"
                                              />
                                            </div>
                                          ) : (
                                            <Input
                                              value={item.url}
                                              onChange={(e) =>
                                                updatePenelitianCarouselItem(
                                                  index,
                                                  "url",
                                                  e.target.value
                                                )
                                              }
                                              placeholder="https://youtube.com/watch?v=..."
                                            />
                                          )}
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                )
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    {/* Tab Belanja */}
                    <TabsContent value="belanja" className="mt-6">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h2 className="text-2xl font-bold">
                            Kelola Section Belanja
                          </h2>
                          <Button
                            onClick={saveBelanjaSection}
                            disabled={isSaving}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            {isSaving ? "Menyimpan..." : "Simpan Section"}
                          </Button>
                        </div>

                        <Card>
                          <CardHeader>
                            <CardTitle>Header Section</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <Label htmlFor="belanja-title">
                                Judul Section
                              </Label>
                              <Input
                                id="belanja-title"
                                value={belanjaSection.title}
                                onChange={(e) =>
                                  setBelanjaSection((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                  }))
                                }
                              />
                            </div>
                            <div>
                              <Label htmlFor="belanja-subtitle">Subtitle</Label>
                              <Textarea
                                id="belanja-subtitle"
                                value={belanjaSection.subtitle}
                                onChange={(e) =>
                                  setBelanjaSection((prev) => ({
                                    ...prev,
                                    subtitle: e.target.value,
                                  }))
                                }
                                rows={3}
                              />
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Informasi Produk</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <Label htmlFor="product-name">Nama Produk</Label>
                              <Input
                                id="product-name"
                                value={belanjaSection.product_name}
                                onChange={(e) =>
                                  setBelanjaSection((prev) => ({
                                    ...prev,
                                    product_name: e.target.value,
                                  }))
                                }
                              />
                            </div>
                            <div>
                              <Label htmlFor="product-description">
                                Deskripsi Produk
                              </Label>
                              <Textarea
                                id="product-description"
                                value={belanjaSection.product_description}
                                onChange={(e) =>
                                  setBelanjaSection((prev) => ({
                                    ...prev,
                                    product_description: e.target.value,
                                  }))
                                }
                                rows={3}
                              />
                            </div>
                            <div>
                              <Label htmlFor="product-price">
                                Harga Produk
                              </Label>
                              <Input
                                id="product-price"
                                value={belanjaSection.product_price}
                                onChange={(e) =>
                                  setBelanjaSection((prev) => ({
                                    ...prev,
                                    product_price: e.target.value,
                                  }))
                                }
                                placeholder="Rp 660.000"
                              />
                            </div>
                            <div>
                              <Label htmlFor="platforms-title">
                                Judul Platform
                              </Label>
                              <Input
                                id="platforms-title"
                                value={belanjaSection.platforms_title}
                                onChange={(e) =>
                                  setBelanjaSection((prev) => ({
                                    ...prev,
                                    platforms_title: e.target.value,
                                  }))
                                }
                                placeholder="Tersedia di:"
                              />
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Carousel Produk</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              <Button
                                onClick={() => addBelanjaCarouselItem("image")}
                                variant="outline"
                                size="sm"
                                className="text-xs"
                              >
                                <Plus className="w-3 h-3 mr-1" />
                                URL Gambar
                              </Button>
                              <label className="cursor-pointer">
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  disabled={isUploading}
                                  asChild
                                  className="text-xs"
                                >
                                  <span>
                                    <Upload className="w-3 h-3 mr-1" />
                                    {isUploading ? "Upload..." : "Upload"}
                                  </span>
                                </Button>
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      uploadBelanjaImage(file);
                                      e.target.value = "";
                                    }
                                  }}
                                />
                              </label>
                            </div>

                            <div className="space-y-4">
                              {belanjaSection.carousel_items.map(
                                (item, index) => (
                                  <Card
                                    key={index}
                                    className="border border-gray-200"
                                  >
                                    <CardHeader className="pb-3">
                                      <div className="flex items-center justify-between">
                                        <span className="font-medium text-sm">
                                          Gambar {index + 1}
                                        </span>
                                        <Button
                                          onClick={() =>
                                            removeBelanjaCarouselItem(index)
                                          }
                                          variant="destructive"
                                          size="sm"
                                          className="h-8 w-8 p-0"
                                        >
                                          <Trash2 className="w-3 h-3" />
                                        </Button>
                                      </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                                        <div className="md:col-span-1">
                                          {item.url && (
                                            <img
                                              src={item.url}
                                              alt={item.title || "Preview"}
                                              className="w-full h-20 object-cover rounded-lg border"
                                            />
                                          )}
                                        </div>
                                        <div className="md:col-span-3 space-y-3">
                                          <div>
                                            <Label className="text-xs text-gray-600">
                                              Judul Gambar
                                            </Label>
                                            <Input
                                              value={item.title || ""}
                                              onChange={(e) => {
                                                const updatedItems = [
                                                  ...belanjaSection.carousel_items,
                                                ];
                                                updatedItems[index] = {
                                                  ...item,
                                                  title: e.target.value,
                                                };
                                                setBelanjaSection((prev) => ({
                                                  ...prev,
                                                  carousel_items: updatedItems,
                                                }));
                                              }}
                                              placeholder="Judul gambar produk"
                                              className="text-sm"
                                            />
                                          </div>
                                          <div>
                                            <Label className="text-xs text-gray-600">
                                              URL Gambar
                                            </Label>
                                            <Input
                                              value={item.url}
                                              onChange={(e) => {
                                                const updatedItems = [
                                                  ...belanjaSection.carousel_items,
                                                ];
                                                updatedItems[index] = {
                                                  ...item,
                                                  url: e.target.value,
                                                };
                                                setBelanjaSection((prev) => ({
                                                  ...prev,
                                                  carousel_items: updatedItems,
                                                }));
                                              }}
                                              placeholder="https://..."
                                              className="text-sm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                )
                              )}
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <span>Platform Penjualan</span>
                              <Button
                                onClick={addPlatform}
                                size="sm"
                                className="w-full sm:w-auto"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Tambah Platform
                              </Button>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {belanjaSection.platforms.map(
                                (platform, index) => (
                                  <Card
                                    key={index}
                                    className="border border-gray-200"
                                  >
                                    <CardHeader className="pb-3">
                                      <div className="flex items-center justify-between">
                                        <span className="font-medium text-sm truncate">
                                          {platform.name ||
                                            `Platform ${index + 1}`}
                                        </span>
                                        <Button
                                          onClick={() => removePlatform(index)}
                                          variant="destructive"
                                          size="sm"
                                          className="h-8 w-8 p-0 flex-shrink-0"
                                        >
                                          <Trash2 className="w-3 h-3" />
                                        </Button>
                                      </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                          <Label className="text-xs text-gray-600">
                                            Nama Platform
                                          </Label>
                                          <Input
                                            value={platform.name}
                                            onChange={(e) => {
                                              const updatedPlatforms = [
                                                ...belanjaSection.platforms,
                                              ];
                                              updatedPlatforms[index] = {
                                                ...platform,
                                                name: e.target.value,
                                              };
                                              setBelanjaSection((prev) => ({
                                                ...prev,
                                                platforms: updatedPlatforms,
                                              }));
                                            }}
                                            placeholder="Contoh: Shopee"
                                            className="text-sm"
                                          />
                                        </div>
                                        <div>
                                          <Label className="text-xs text-gray-600">
                                            URL Platform
                                          </Label>
                                          <Input
                                            value={platform.url}
                                            onChange={(e) => {
                                              const updatedPlatforms = [
                                                ...belanjaSection.platforms,
                                              ];
                                              updatedPlatforms[index] = {
                                                ...platform,
                                                url: e.target.value,
                                              };
                                              setBelanjaSection((prev) => ({
                                                ...prev,
                                                platforms: updatedPlatforms,
                                              }));
                                            }}
                                            placeholder="https://..."
                                            className="text-sm"
                                          />
                                        </div>
                                        <div>
                                          <Label className="text-xs text-gray-600">
                                            Warna
                                          </Label>
                                          <Select
                                            value={platform.color}
                                            onValueChange={(value) => {
                                              const updatedPlatforms = [
                                                ...belanjaSection.platforms,
                                              ];
                                              updatedPlatforms[index] = {
                                                ...platform,
                                                color: value,
                                              };
                                              setBelanjaSection((prev) => ({
                                                ...prev,
                                                platforms: updatedPlatforms,
                                              }));
                                            }}
                                          >
                                            <SelectTrigger className="text-sm">
                                              <SelectValue placeholder="Pilih warna" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="orange">
                                                🟠 Orange
                                              </SelectItem>
                                              <SelectItem value="green">
                                                🟢 Green
                                              </SelectItem>
                                              <SelectItem value="green-600">
                                                🟢 Green-600
                                              </SelectItem>
                                              <SelectItem value="blue">
                                                🔵 Blue
                                              </SelectItem>
                                              <SelectItem value="red">
                                                🔴 Red
                                              </SelectItem>
                                              <SelectItem value="purple">
                                                🟣 Purple
                                              </SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </div>
                                        <div>
                                          <Label className="text-xs text-gray-600">
                                            Icon
                                          </Label>
                                          <Select
                                            value={platform.icon}
                                            onValueChange={(value) => {
                                              const updatedPlatforms = [
                                                ...belanjaSection.platforms,
                                              ];
                                              updatedPlatforms[index] = {
                                                ...platform,
                                                icon: value,
                                              };
                                              setBelanjaSection((prev) => ({
                                                ...prev,
                                                platforms: updatedPlatforms,
                                              }));
                                            }}
                                          >
                                            <SelectTrigger className="text-sm">
                                              <SelectValue placeholder="Pilih icon" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="ShoppingBag">
                                                🛍️ ShoppingBag
                                              </SelectItem>
                                              <SelectItem value="Phone">
                                                📱 Phone
                                              </SelectItem>
                                              <SelectItem value="Globe">
                                                🌐 Globe
                                              </SelectItem>
                                              <SelectItem value="ExternalLink">
                                                🔗 ExternalLink
                                              </SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </div>
                                      </div>
                                      {/* Preview */}
                                      <div className="mt-3 p-2 bg-gray-50 rounded-md">
                                        <p className="text-xs text-gray-600 mb-1">
                                          Preview:
                                        </p>
                                        <div className="flex items-center gap-2">
                                          <span className="text-xs font-medium">
                                            {platform.icon}
                                          </span>
                                          <span
                                            className={`text-xs px-2 py-1 rounded-full bg-${platform.color}-100 text-${platform.color}-800`}
                                          >
                                            {platform.color}
                                          </span>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                )
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    {/* Review & Testimoni Section */}
                    <TabsContent value="review" className="mt-6">
                      <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                            Kelola Section Review & Testimoni
                          </h2>
                          <Button
                            onClick={saveReviewSection}
                            disabled={isSaving}
                            className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            {isSaving ? "Menyimpan..." : "Simpan Section"}
                          </Button>
                        </div>

                        <Card>
                          <CardHeader>
                            <CardTitle>Informasi Dasar Section</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <Label>Judul Section</Label>
                              <Input
                                value={reviewSection.title || ""}
                                onChange={(e) =>
                                  setReviewSection((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                  }))
                                }
                                placeholder="Masukkan judul section..."
                              />
                            </div>

                            <div>
                              <Label>Subtitle</Label>
                              <Input
                                value={reviewSection.subtitle || ""}
                                onChange={(e) =>
                                  setReviewSection((prev) => ({
                                    ...prev,
                                    subtitle: e.target.value,
                                  }))
                                }
                                placeholder="Masukkan subtitle..."
                              />
                            </div>

                            <div>
                              <Label>Judul Foto Review</Label>
                              <Input
                                value={reviewSection.photos_title || ""}
                                onChange={(e) =>
                                  setReviewSection((prev) => ({
                                    ...prev,
                                    photos_title: e.target.value,
                                  }))
                                }
                                placeholder="Masukkan judul untuk bagian foto review..."
                              />
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                              <span>Review Items</span>
                              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => addReviewItem("image")}
                                  className="w-full sm:w-auto text-xs"
                                >
                                  <Plus className="w-3 h-3 mr-1" />
                                  Image Review
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => addReviewItem("special")}
                                  className="w-full sm:w-auto text-xs"
                                >
                                  <Plus className="w-3 h-3 mr-1" />
                                  Special Item
                                </Button>
                              </div>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {reviewSection.review_items?.map(
                                (item, index) => (
                                  <Card
                                    key={index}
                                    className="border border-gray-200"
                                  >
                                    <CardHeader className="pb-3">
                                      <div className="flex items-center justify-between">
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                          {item.type === "image"
                                            ? "📷 Image Review"
                                            : "⭐ Special Item"}
                                        </span>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() =>
                                            removeReviewItem(index)
                                          }
                                          className="text-red-600 hover:text-red-700 h-8 w-8 p-0"
                                        >
                                          <Trash2 className="w-3 h-3" />
                                        </Button>
                                      </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                      {item.title && (
                                        <div>
                                          <Label className="text-xs text-gray-600">
                                            Judul
                                          </Label>
                                          <p className="text-sm font-medium">
                                            {item.title}
                                          </p>
                                        </div>
                                      )}

                                      {item.description && (
                                        <div>
                                          <Label className="text-xs text-gray-600">
                                            Deskripsi
                                          </Label>
                                          <p className="text-sm text-gray-700">
                                            {item.description}
                                          </p>
                                        </div>
                                      )}

                                      {item.type === "image" && (
                                        <div>
                                          <Label className="text-xs text-gray-600">
                                            URL Gambar
                                          </Label>
                                          <p className="text-sm text-blue-600 break-all bg-gray-50 p-2 rounded border">
                                            {item.url}
                                          </p>
                                        </div>
                                      )}

                                      {item.type === "special" &&
                                        item.special_content && (
                                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                                            <div>
                                              <Label className="text-xs text-gray-600">
                                                Text
                                              </Label>
                                              <p className="font-medium">
                                                {item.special_content.text}
                                              </p>
                                            </div>
                                            <div>
                                              <Label className="text-xs text-gray-600">
                                                Icon
                                              </Label>
                                              <p className="bg-gray-50 p-1 rounded text-center">
                                                {item.special_content.icon}
                                              </p>
                                            </div>
                                            <div>
                                              <Label className="text-xs text-gray-600">
                                                Background
                                              </Label>
                                              <p className="bg-gray-50 p-1 rounded text-center">
                                                {
                                                  item.special_content
                                                    .background
                                                }
                                              </p>
                                            </div>
                                          </div>
                                        )}
                                    </CardContent>
                                  </Card>
                                )
                              )}

                              {(!reviewSection.review_items ||
                                reviewSection.review_items.length === 0) && (
                                <div className="text-center py-8 text-gray-500">
                                  <p className="text-sm">
                                    Belum ada review items. Klik tombol di atas
                                    untuk menambahkan.
                                  </p>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>

                        {/* Modal for Image Review */}
                        <Dialog
                          open={isImageReviewModalOpen}
                          onOpenChange={setIsImageReviewModalOpen}
                        >
                          <DialogContent className="max-w-md w-full">
                            <DialogHeader>
                              <DialogTitle>Tambah Image Review</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label>Upload Gambar</Label>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      setNewImageReview((prev) => ({
                                        ...prev,
                                        file,
                                        url: "",
                                      }));
                                    }
                                  }}
                                />
                                {newImageReview.file && (
                                  <div className="mt-2">
                                    <span className="text-xs text-gray-500">
                                      {newImageReview.file.name}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div>
                                <Label>atau URL Gambar</Label>
                                <Input
                                  value={newImageReview.url}
                                  onChange={(e) =>
                                    setNewImageReview((prev) => ({
                                      ...prev,
                                      url: e.target.value,
                                      file: null,
                                    }))
                                  }
                                  placeholder="https://..."
                                />
                              </div>
                              <div>
                                <Label>Judul</Label>
                                <Input
                                  value={newImageReview.title}
                                  onChange={(e) =>
                                    setNewImageReview((prev) => ({
                                      ...prev,
                                      title: e.target.value,
                                    }))
                                  }
                                  placeholder="Judul review (opsional)"
                                />
                              </div>
                              <div>
                                <Label>Deskripsi</Label>
                                <Textarea
                                  value={newImageReview.description}
                                  onChange={(e) =>
                                    setNewImageReview((prev) => ({
                                      ...prev,
                                      description: e.target.value,
                                    }))
                                  }
                                  placeholder="Deskripsi review (opsional)"
                                  rows={2}
                                />
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button
                                  variant="outline"
                                  onClick={() =>
                                    setIsImageReviewModalOpen(false)
                                  }
                                >
                                  Batal
                                </Button>
                                <Button
                                  onClick={handleSubmitImageReview}
                                  disabled={isUploadingImageReview}
                                >
                                  {isUploadingImageReview
                                    ? "Menyimpan..."
                                    : "Tambah"}
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        {/* Modal for Special Item */}
                        <Dialog
                          open={isSpecialReviewModalOpen}
                          onOpenChange={setIsSpecialReviewModalOpen}
                        >
                          <DialogContent className="max-w-md w-full">
                            <DialogHeader>
                              <DialogTitle>Tambah Special Item</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label>Judul</Label>
                                <Input
                                  value={newSpecialReview.title}
                                  onChange={(e) =>
                                    setNewSpecialReview((prev) => ({
                                      ...prev,
                                      title: e.target.value,
                                    }))
                                  }
                                  placeholder="Judul special item"
                                />
                              </div>
                              <div>
                                <Label>Deskripsi</Label>
                                <Textarea
                                  value={newSpecialReview.description}
                                  onChange={(e) =>
                                    setNewSpecialReview((prev) => ({
                                      ...prev,
                                      description: e.target.value,
                                    }))
                                  }
                                  placeholder="Deskripsi special item"
                                  rows={2}
                                />
                              </div>
                              <div>
                                <Label>Text</Label>
                                <Input
                                  value={newSpecialReview.text}
                                  onChange={(e) =>
                                    setNewSpecialReview((prev) => ({
                                      ...prev,
                                      text: e.target.value,
                                    }))
                                  }
                                  placeholder="Kepuasan 100%"
                                />
                              </div>
                              <div>
                                <Label>Icon</Label>
                                <Input
                                  value={newSpecialReview.icon}
                                  onChange={(e) =>
                                    setNewSpecialReview((prev) => ({
                                      ...prev,
                                      icon: e.target.value,
                                    }))
                                  }
                                  placeholder="Heart"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                  Gunakan nama icon dari lucide-react, misal:
                                  Heart, Star, Smile, dll.
                                </p>
                              </div>
                              <div>
                                <Label>Background</Label>
                                <Input
                                  value={newSpecialReview.background}
                                  onChange={(e) =>
                                    setNewSpecialReview((prev) => ({
                                      ...prev,
                                      background: e.target.value,
                                    }))
                                  }
                                  placeholder="from-blue-50 to-blue-100"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                  Contoh: from-blue-50 to-blue-100,
                                  from-green-50 to-green-100, dll.
                                </p>
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button
                                  variant="outline"
                                  onClick={() =>
                                    setIsSpecialReviewModalOpen(false)
                                  }
                                >
                                  Batal
                                </Button>
                                <Button onClick={handleSubmitSpecialReview}>
                                  Tambah
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TabsContent>

                    {/* Footer Section */}
                    <TabsContent value="footer" className="mt-6">
                      <div className="space-y-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <h2 className="text-xl sm:text-2xl font-bold">
                            Kelola Section Footer
                          </h2>
                          <Button
                            onClick={saveFooterSection}
                            disabled={isSaving}
                            className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            {isSaving ? "Menyimpan..." : "Simpan Section"}
                          </Button>
                        </div>

                        <Card>
                          <CardHeader>
                            <CardTitle>Informasi Perusahaan</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <Label>Nama Perusahaan</Label>
                              <Input
                                value={footerSection.company_name || ""}
                                onChange={(e) =>
                                  setFooterSection((prev) => ({
                                    ...prev,
                                    company_name: e.target.value,
                                  }))
                                }
                                placeholder="Masukkan nama perusahaan..."
                              />
                            </div>

                            <div>
                              <Label>Deskripsi Perusahaan</Label>
                              <Textarea
                                value={footerSection.company_description || ""}
                                onChange={(e) =>
                                  setFooterSection((prev) => ({
                                    ...prev,
                                    company_description: e.target.value,
                                  }))
                                }
                                placeholder="Masukkan deskripsi perusahaan..."
                                rows={3}
                              />
                            </div>

                            <div>
                              <Label>Teks Copyright</Label>
                              <Input
                                value={footerSection.copyright_text || ""}
                                onChange={(e) =>
                                  setFooterSection((prev) => ({
                                    ...prev,
                                    copyright_text: e.target.value,
                                  }))
                                }
                                placeholder="Masukkan teks copyright..."
                              />
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                              <span>Supported By Links</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={addSupportedByLink}
                                className="w-full sm:w-auto"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Tambah Link
                              </Button>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {footerSection.supported_by_links?.map(
                                (link, index) => (
                                  <Card
                                    key={index}
                                    className="border border-gray-200"
                                  >
                                    <CardContent className="p-4">
                                      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                                        <div className="flex-1 space-y-2">
                                          <div>
                                            <Label className="text-xs text-gray-500">
                                              Nama
                                            </Label>
                                            <p className="text-sm">
                                              {link.name}
                                            </p>
                                          </div>
                                          <div>
                                            <Label className="text-xs text-gray-500">
                                              URL
                                            </Label>
                                            <p className="text-sm text-blue-600 break-all">
                                              {link.url}
                                            </p>
                                          </div>
                                        </div>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() =>
                                            removeSupportedByLink(index)
                                          }
                                          className="text-red-600 hover:text-red-700 mt-2 sm:mt-0"
                                        >
                                          <Trash2 className="w-4 h-4" />
                                        </Button>
                                      </div>
                                    </CardContent>
                                  </Card>
                                )
                              )}

                              {(!footerSection.supported_by_links ||
                                footerSection.supported_by_links.length ===
                                  0) && (
                                <div className="text-center py-8 text-gray-500">
                                  <p>
                                    Belum ada supported by links. Klik tombol di
                                    atas untuk menambahkan.
                                  </p>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                              <span>Social Media Links</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={addSocialMediaLink}
                                className="w-full sm:w-auto"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Tambah Social Media
                              </Button>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {footerSection.social_media_links?.map(
                                (social, index) => (
                                  <Card
                                    key={index}
                                    className="border border-gray-200"
                                  >
                                    <CardContent className="p-4">
                                      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                                        <div className="flex-1 space-y-2">
                                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                              <Label className="text-xs text-gray-500">
                                                Platform
                                              </Label>
                                              <p className="text-sm">
                                                {social.platform}
                                              </p>
                                            </div>
                                            <div>
                                              <Label className="text-xs text-gray-500">
                                                Icon
                                              </Label>
                                              <p className="text-sm">
                                                {social.icon}
                                              </p>
                                            </div>
                                          </div>
                                          <div>
                                            <Label className="text-xs text-gray-500">
                                              Display Text
                                            </Label>
                                            <p className="text-sm">
                                              {social.display_text}
                                            </p>
                                          </div>
                                          <div>
                                            <Label className="text-xs text-gray-500">
                                              URL
                                            </Label>
                                            <p className="text-sm text-blue-600 break-all">
                                              {social.url}
                                            </p>
                                          </div>
                                        </div>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() =>
                                            removeSocialMediaLink(index)
                                          }
                                          className="text-red-600 hover:text-red-700 mt-2 sm:mt-0"
                                        >
                                          <Trash2 className="w-4 h-4" />
                                        </Button>
                                      </div>
                                    </CardContent>
                                  </Card>
                                )
                              )}

                              {(!footerSection.social_media_links ||
                                footerSection.social_media_links.length ===
                                  0) && (
                                <div className="text-center py-8 text-gray-500">
                                  <p>
                                    Belum ada social media links. Klik tombol di
                                    atas untuk menambahkan.
                                  </p>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Informasi Kontak</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <Label>Email Kontak</Label>
                              <Input
                                type="email"
                                value={footerSection.contact_email || ""}
                                onChange={(e) =>
                                  setFooterSection((prev) => ({
                                    ...prev,
                                    contact_email: e.target.value,
                                  }))
                                }
                                placeholder="Masukkan email kontak..."
                              />
                            </div>

                            <div>
                              <Label>Lokasi</Label>
                              <Input
                                value={footerSection.contact_location || ""}
                                onChange={(e) =>
                                  setFooterSection((prev) => ({
                                    ...prev,
                                    contact_location: e.target.value,
                                  }))
                                }
                                placeholder="Masukkan lokasi..."
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    {/* Modal Tambah Supported By Link */}
                    <Dialog
                      open={isSupportedByModalOpen}
                      onOpenChange={setIsSupportedByModalOpen}
                    >
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Tambah Supported By Link</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div>
                            <Label htmlFor="supported-name">
                              Nama Organisasi
                            </Label>
                            <Input
                              id="supported-name"
                              value={newSupportedBy.name}
                              onChange={(e) =>
                                setNewSupportedBy((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              placeholder="Contoh: Universitas Jenderal Soedirman"
                            />
                          </div>
                          <div>
                            <Label htmlFor="supported-url">URL Link</Label>
                            <Input
                              id="supported-url"
                              value={newSupportedBy.url}
                              onChange={(e) =>
                                setNewSupportedBy((prev) => ({
                                  ...prev,
                                  url: e.target.value,
                                }))
                              }
                              placeholder="https://www.unsoed.ac.id"
                            />
                          </div>
                          <div className="flex gap-2 pt-4">
                            <Button
                              onClick={handleSubmitSupportedBy}
                              className="flex-1"
                            >
                              Tambah Link
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setIsSupportedByModalOpen(false)}
                            >
                              Batal
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* Modal Tambah Social Media Link */}
                    <Dialog
                      open={isSocialMediaModalOpen}
                      onOpenChange={setIsSocialMediaModalOpen}
                    >
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Tambah Social Media Link</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div>
                            <Label htmlFor="social-platform">Platform</Label>
                            <Input
                              id="social-platform"
                              value={newSocialMedia.platform}
                              onChange={(e) =>
                                setNewSocialMedia((prev) => ({
                                  ...prev,
                                  platform: e.target.value,
                                }))
                              }
                              placeholder="Contoh: WhatsApp, Instagram, TikTok"
                            />
                          </div>
                          <div>
                            <Label htmlFor="social-url">URL Link</Label>
                            <Input
                              id="social-url"
                              value={newSocialMedia.url}
                              onChange={(e) =>
                                setNewSocialMedia((prev) => ({
                                  ...prev,
                                  url: e.target.value,
                                }))
                              }
                              placeholder="https://wa.me/6281234567890"
                            />
                          </div>
                          <div>
                            <Label htmlFor="social-display">Display Text</Label>
                            <Input
                              id="social-display"
                              value={newSocialMedia.display_text}
                              onChange={(e) =>
                                setNewSocialMedia((prev) => ({
                                  ...prev,
                                  display_text: e.target.value,
                                }))
                              }
                              placeholder="Contoh: +62 812-3456-7890, @sikomjaru.official"
                            />
                          </div>
                          <div>
                            <Label htmlFor="social-icon">Icon</Label>
                            <Select
                              value={newSocialMedia.icon}
                              onValueChange={(value) =>
                                setNewSocialMedia((prev) => ({
                                  ...prev,
                                  icon: value,
                                }))
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih icon" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Phone">
                                  📞 Phone - WhatsApp/Telepon
                                </SelectItem>
                                <SelectItem value="MessageCircle">
                                  💬 MessageCircle - Chat/WhatsApp
                                </SelectItem>
                                <SelectItem value="Instagram">
                                  📷 Instagram - Instagram
                                </SelectItem>
                                <SelectItem value="Facebook">
                                  👥 Facebook - Facebook
                                </SelectItem>
                                <SelectItem value="Youtube">
                                  📺 Youtube - YouTube
                                </SelectItem>
                                <SelectItem value="Twitter">
                                  🐦 Twitter - Twitter/X
                                </SelectItem>
                                <SelectItem value="Linkedin">
                                  💼 Linkedin - LinkedIn
                                </SelectItem>
                                <SelectItem value="Music">
                                  🎵 Music - TikTok
                                </SelectItem>
                                <SelectItem value="Mail">
                                  📧 Mail - Email
                                </SelectItem>
                                <SelectItem value="Globe">
                                  🌐 Globe - Website
                                </SelectItem>
                                <SelectItem value="MapPin">
                                  📍 MapPin - Lokasi
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <p className="text-xs text-gray-500 mt-1">
                              Icon akan ditampilkan di sebelah teks display
                            </p>
                          </div>

                          <div className="flex gap-2 pt-4">
                            <Button
                              onClick={handleSubmitSocialMedia}
                              className="flex-1"
                            >
                              Tambah Social Media
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setIsSocialMediaModalOpen(false)}
                            >
                              Batal
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* Modal Tambah Gambar Belanja */}
                    <Dialog
                      open={isBelanjaImageModalOpen}
                      onOpenChange={(open) => {
                        if (!open) closeBelanjaImageModal();
                      }}
                    >
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Tambah Gambar Produk</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div>
                            <Label htmlFor="belanja-image-file">
                              Upload Gambar
                            </Label>
                            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                              <label className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
                                <Upload className="w-4 h-4 mr-2" />
                                {newBelanjaImage.file
                                  ? "Ganti Gambar"
                                  : "Pilih Gambar"}
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={handleBelanjaImageSelect}
                                />
                              </label>
                              {newBelanjaImage.file && (
                                <span className="text-sm text-gray-600 truncate">
                                  {newBelanjaImage.file.name}
                                </span>
                              )}
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="belanja-image-title">
                              Judul Gambar (Opsional)
                            </Label>
                            <Input
                              id="belanja-image-title"
                              value={newBelanjaImage.title}
                              onChange={(e) =>
                                setNewBelanjaImage((prev) => ({
                                  ...prev,
                                  title: e.target.value,
                                }))
                              }
                              placeholder="Contoh: SIKOMJARU Depan"
                            />
                          </div>
                          {newBelanjaImage.previewUrl && (
                            <div className="border rounded-lg p-3 bg-gray-50">
                              <p className="text-sm text-gray-600 mb-2">
                                Preview:
                              </p>
                              <img
                                src={newBelanjaImage.previewUrl}
                                alt="Preview"
                                className="w-full max-h-40 object-cover rounded"
                              />
                            </div>
                          )}
                          <div className="flex gap-2 pt-4">
                            <Button
                              onClick={saveBelanjaImage}
                              className="flex-1"
                              disabled={!newBelanjaImage.file || isUploading}
                            >
                              {isUploading ? "Mengupload..." : "Tambah Gambar"}
                            </Button>
                            <Button
                              variant="outline"
                              onClick={closeBelanjaImageModal}
                            >
                              Batal
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* Modal Tambah Platform Penjualan */}
                    <Dialog
                      open={isPlatformModalOpen}
                      onOpenChange={setIsPlatformModalOpen}
                    >
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Tambah Platform Penjualan</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div>
                            <Label htmlFor="platform-name">Nama Platform</Label>
                            <Input
                              id="platform-name"
                              value={newPlatform.name}
                              onChange={(e) =>
                                setNewPlatform((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              placeholder="Contoh: Shopee, Tokopedia, WhatsApp"
                            />
                          </div>
                          <div>
                            <Label htmlFor="platform-url">URL Platform</Label>
                            <Input
                              id="platform-url"
                              value={newPlatform.url}
                              onChange={(e) =>
                                setNewPlatform((prev) => ({
                                  ...prev,
                                  url: e.target.value,
                                }))
                              }
                              placeholder="https://shopee.co.id/product-link"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="platform-color">Warna</Label>
                              <Select
                                value={newPlatform.color}
                                onValueChange={(value) =>
                                  setNewPlatform((prev) => ({
                                    ...prev,
                                    color: value,
                                  }))
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Pilih warna" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="orange">
                                    🟠 Orange
                                  </SelectItem>
                                  <SelectItem value="green">
                                    🟢 Green
                                  </SelectItem>
                                  <SelectItem value="green-600">
                                    🟢 Green-600
                                  </SelectItem>
                                  <SelectItem value="blue">🔵 Blue</SelectItem>
                                  <SelectItem value="red">🔴 Red</SelectItem>
                                  <SelectItem value="purple">
                                    🟣 Purple
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="platform-icon">Icon</Label>
                              <Select
                                value={newPlatform.icon}
                                onValueChange={(value) =>
                                  setNewPlatform((prev) => ({
                                    ...prev,
                                    icon: value,
                                  }))
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Pilih icon" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="ShoppingBag">
                                    🛍️ ShoppingBag
                                  </SelectItem>
                                  <SelectItem value="Phone">
                                    📱 Phone
                                  </SelectItem>
                                  <SelectItem value="Globe">
                                    🌐 Globe
                                  </SelectItem>
                                  <SelectItem value="ExternalLink">
                                    🔗 ExternalLink
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-600 mb-2">
                              Preview:
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium">
                                {newPlatform.icon}
                              </span>
                              <span
                                className={`text-xs px-2 py-1 rounded-full bg-${newPlatform.color}-100 text-${newPlatform.color}-800`}
                              >
                                {newPlatform.color}
                              </span>
                              <span className="text-xs text-gray-600">
                                {newPlatform.name || "Nama Platform"}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2 pt-4">
                            <Button onClick={savePlatform} className="flex-1">
                              Tambah Platform
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setIsPlatformModalOpen(false)}
                            >
                              Batal
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
