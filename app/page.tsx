"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

/* ─── DATA ─────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { id: "about",    label: "About"    },
  { id: "services", label: "Services" },
  { id: "brands",   label: "Brands"   },
  { id: "projects", label: "Projects" },
  { id: "contact",  label: "Contact"  },
];

const SERVICES = [
  {
    title: "Industrial Electrical Installation & Maintenance",
    items: ["Power Distribution (LV/MV)", "Transformer Installation", "MDB / SMDB / DB Panels", "Cable Tray Systems", "Generator & UPS Setup", "Earthing & Lightning Protection"],
    img: "/project1.jpg",
    href: "#services",
  },
  {
    title: "Machine Installation & Commissioning",
    items: ["Machine Installation", "Commissioning", "Load Testing", "Production Line Setup", "Electrical Integration", "Startup Support"],
    img: "/project2.jpg",
    href: "#services",
  },
  {
    title: "PLC, SCADA & Automation Systems",
    items: ["Control Panel Wiring", "MCC Installation", "VFD Configuration", "Instrumentation Wiring", "Testing & Calibration", "System Validation"],
    img: "/project3.jpg",
    href: "#services",
  },
  {
    title: "Fiber Optic Cabling & Network Infrastructure",
    items: ["Fiber Optic Installation", "Splicing & OTDR Testing", "Data Center Connectivity", "Structured Cabling", "Network Infrastructure", "Telecommunication Systems"],
    img: "/project4.jpg",
    href: "#services",
  },
  {
    title: "Industrial Piping, Fabrication & Welding",
    items: ["Industrial & Process Piping", "Gas Pipeline Installation", "Structural Steel Fabrication", "Industrial Welding", "MEP Solutions", "Shutdown Maintenance"],
    img: "/project5.jpg",
    href: "#services",
  },
  {
    title: "Industrial Material Supply & Trading",
    items: ["Control & Power Cables", "PLC, HMI & SCADA Products", "VFDs & Soft Starters", "Sensors & Instruments", "MCC & Control Panels", "MEP Materials"],
    img: "/hero.png",
    href: "#services",
  },
];

const STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "20+",  label: "Global Brands"      },
  { value: "24/7", label: "Technical Support"  },
  { value: "KSA",  label: "Service Coverage"   },
];

const PROJECTS = [
  { title: "Industrial Substation", location: "Jubail, Saudi Arabia", img: "/project1.jpg" },
  { title: "Factory Automation", location: "Dammam, Saudi Arabia",  img: "/project2.jpg" },
  { title: "Fiber Optic Network", location: "Riyadh, Saudi Arabia",  img: "/project3.jpg" },
  { title: "MCC Panel Installation", location: "Yanbu, Saudi Arabia", img: "/project4.jpg" },
  { title: "Process Piping Works", location: "Dhahran, Saudi Arabia", img: "/project5.jpg" },
  { title: "Data Center Cabling", location: "Khobar, Saudi Arabia",  img: "/hero.png"     },
];

const TESTIMONIALS = [
  {
    text: "Al Mayuf delivered our full electrical installation on time and with zero incidents. Professional team and excellent quality workmanship.",
    name: "Eng. Khalid Al-Dosari, Project Manager",
    company: "Jubail Industrial Project",
  },
  {
    text: "Their fiber optic team is highly skilled. The OTDR testing and splicing work was completed with precision — exactly what we needed for our data center.",
    name: "Mohammed Al-Harbi, IT Infrastructure Lead",
    company: "Riyadh Data Center",
  },
  {
    text: "As an Aramco-approved contractor, Al Mayuf handled our plant shutdown and maintenance with full HSE compliance. Highly recommended.",
    name: "Faisal Al-Qahtani, Plant Director",
    company: "Dammam Industrial Plant",
  },
  {
    text: "Their automation team configured our entire PLC/SCADA system flawlessly. Great communication, fast execution.",
    name: "Omar Al-Shammari, Operations Director",
    company: "Manufacturing Facility – Yanbu",
  },
];

const COMMITMENTS = [
  {
    icon: "/brands/brand.png",
    title: "Aramco-Approved Contractor",
    desc: "Certified and approved to work on Oil & Gas, industrial and infrastructure projects under Saudi Aramco standards.",
  },
  {
    icon: "/brands/brand.png",
    title: "HSE First, Always",
    desc: "Zero-incident culture with full HSE compliance across all sites, shutdowns and high-risk environments.",
  },
  {
    icon: "/brands/brand.png",
    title: "End-to-End Delivery",
    desc: "From engineering and procurement to installation, testing, commissioning and ongoing maintenance.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [active, setActive]         = useState("about");
  const [brandImages, setBrandImages] = useState<string[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeProject, setActiveProject]         = useState(0);
  const testimonialsLen = TESTIMONIALS.length;

  /* scroll-spy for nav */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* brands */
  useEffect(() => {
    let mounted = true;
    fetch("/api/brands")
      .then((r) => r.json())
      .then((d) => {
        if (mounted && d?.images?.length) setBrandImages(d.images);
      })
      .catch(() => {});
    return () => { mounted = false; };
  }, []);

  /* auto-rotate testimonials */
  useEffect(() => {
    const id = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonialsLen);
    }, 5000);
    return () => clearInterval(id);
  }, [testimonialsLen]);

  function handleNavClick(id: string, ev?: React.MouseEvent) {
    ev?.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    setMobileOpen(false);
    history.replaceState(null, "", `#${id}`);
  }

  const brandList = brandImages.length
    ? brandImages
    : Array.from({ length: 8 }).map(() => "/brands/brand.png");

  return (
    <main className="bg-white text-slate-800 font-[Outfit,sans-serif]">

      {/* ── GLOBAL STYLES ─────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap');
        *{box-sizing:border-box}
        body{font-family:'Outfit',sans-serif;}

        /* accent colour */
        :root{--gold:#C9A84C;--dark:#1a1a1a;--mid:#252525;--text-muted:#aaa}

        /* section utility */
        .section-xl{padding:80px 0}
        .section-md{padding:60px 0}
        .container{max-width:1200px;margin:0 auto;padding:0 24px}

        /* subtitle pill */
        .sub-pill{
          display:inline-block;
          border:1px solid var(--gold);
          color:var(--gold);
          border-radius:20px;
          padding:4px 16px;
          font-size:13px;
          letter-spacing:2px;
          font-weight:600;
          margin-bottom:16px;
        }

        /* SABQ-style heading */
        .sec-title{font-size:clamp(28px,4vw,46px);font-weight:800;line-height:1.15;color:#111}
        .sec-title-white{color:#fff}

        /* ── NAV ── */
        .site-header{
          position:fixed;top:0;width:100%;z-index:100;
          transition:background .35s,box-shadow .35s,padding .35s;
          padding:0;
        }
        .site-header.scrolled{background:rgba(255,255,255,0.97);box-shadow:0 2px 20px rgba(0,0,0,.08);}
        .site-header:not(.scrolled){background:transparent;}
        .header-inner{
          max-width:1280px;margin:0 auto;padding:14px 32px;
          display:flex;align-items:center;justify-content:space-between;
        }
        .logo-wrap{display:flex;align-items:center;gap:14px}
        .logo-text-main{font-size:22px;font-weight:800;color:#fff;letter-spacing:1px}
        .logo-text-sub{font-size:11px;color:rgba(255,255,255,.7)}
        .site-header.scrolled .logo-text-main{color:#0F2A5A}
        .site-header.scrolled .logo-text-sub{color:#666}

        nav.main-nav{display:flex;gap:40px;align-items:center}
        nav.main-nav a{
          color:rgba(255,255,255,.85);font-weight:500;font-size:15px;
          text-decoration:none;position:relative;padding-bottom:4px;
          transition:color .2s;
        }
        nav.main-nav a::after{
          content:'';position:absolute;left:0;bottom:0;height:2px;
          background:var(--gold);width:0;transition:width .3s;
        }
        nav.main-nav a.active::after,nav.main-nav a:hover::after{width:100%}
        nav.main-nav a.active,nav.main-nav a:hover{color:#fff}
        .site-header.scrolled nav.main-nav a{color:#222}
        .site-header.scrolled nav.main-nav a.active,
        .site-header.scrolled nav.main-nav a:hover{color:#0F2A5A}

        .btn-top{
          background:var(--gold);color:#fff;border:none;
          padding:10px 26px;border-radius:0;font-weight:600;
          font-size:14px;letter-spacing:.5px;cursor:pointer;
          text-decoration:none;transition:background .2s,transform .2s;
        }
        .btn-top:hover{background:#a88930;transform:translateY(-1px)}

        /* ── HERO ── */
        .hero-section{
          position:relative;min-height:100vh;
          display:flex;align-items:center;justify-content:center;
          text-align:center;
          background-size:cover;background-position:center;
        }
        .hero-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.6) 60%,rgba(0,0,0,.35) 100%)}
        .hero-content{position:relative;z-index:2;max-width:860px;padding:0 24px;color:#fff}
        .hero-sub{font-size:13px;letter-spacing:3px;font-weight:600;color:var(--gold);text-transform:uppercase;margin-bottom:18px}
        .hero-title{font-size:clamp(36px,6vw,72px);font-weight:900;line-height:1.08;font-family:'Poppins',sans-serif}
        .hero-title span{color:var(--gold)}
        .hero-desc{margin-top:22px;font-size:17px;color:rgba(255,255,255,.8);line-height:1.7}
        .hero-btns{margin-top:36px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
        .btn-hero-primary{
          background:var(--gold);color:#fff;padding:14px 36px;
          font-weight:700;font-size:15px;text-decoration:none;
          transition:background .2s,transform .2s;
        }
        .btn-hero-primary:hover{background:#a88930;transform:translateY(-2px)}
        .btn-hero-outline{
          border:2px solid rgba(255,255,255,.7);color:#fff;
          padding:14px 36px;font-weight:600;font-size:15px;
          text-decoration:none;transition:.2s;
        }
        .btn-hero-outline:hover{border-color:#fff;background:rgba(255,255,255,.1)}

        /* hero bottom bar */
        .hero-bottom{
          position:absolute;bottom:0;left:0;right:0;z-index:3;
          border-top:1px solid rgba(255,255,255,.15);
          padding:24px 40px;
          display:flex;justify-content:space-between;align-items:center;
          flex-wrap:wrap;gap:16px;
        }
        .hero-bottom-left p{color:rgba(255,255,255,.9);font-size:15px;font-weight:600}
        .hero-bottom-left span{color:var(--gold)}
        .btn-hero-cta{
          background:var(--gold);color:#fff;padding:12px 30px;
          font-weight:700;text-decoration:none;font-size:14px;
          transition:.2s;white-space:nowrap;
        }
        .btn-hero-cta:hover{background:#a88930}

        /* ── ICON BOXES (below hero) ── */
        .ihbox-strip{background:var(--dark);padding:0}
        .ihbox-grid{display:grid;grid-template-columns:repeat(3,1fr)}
        .ihbox-item{
          padding:36px 32px;border-right:1px solid rgba(255,255,255,.08);
          display:flex;gap:20px;align-items:flex-start;
        }
        .ihbox-item:last-child{border-right:none}
        .ihbox-icon{width:48px;height:48px;flex-shrink:0;display:flex;align-items:center;justify-content:center}
        .ihbox-icon svg{width:40px;height:40px;fill:var(--gold)}
        .ihbox-text h3{color:#fff;font-size:17px;font-weight:700;margin:0 0 8px}
        .ihbox-text p{color:var(--text-muted);font-size:14px;line-height:1.6;margin:0}

        /* ── ABOUT ── */
        .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start}
        .about-vision-mission{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:32px}
        .vm-box img{width:40px;margin-bottom:10px}
        .vm-box h4{font-weight:700;font-size:15px;color:#111;margin-bottom:8px}
        .vm-box p{font-size:14px;color:#555;line-height:1.7}
        .about-img{width:100%;border-radius:0;object-fit:cover;max-height:380px}
        .about-stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px}
        .stat-box{
          background:#f5f5f5;padding:28px 24px;
          border-left:3px solid var(--gold);
        }
        .stat-box h2{font-size:36px;font-weight:900;color:#111;line-height:1}
        .stat-box sup{color:var(--gold);font-size:20px}
        .stat-box p{margin-top:6px;font-size:13px;color:#666;font-weight:500}

        /* video / play box */
        .play-box{
          background:var(--dark);padding:28px 24px;
          display:flex;align-items:center;justify-content:center;
          min-height:140px;cursor:pointer;
        }
        .play-btn{
          width:54px;height:54px;border-radius:50%;
          background:var(--gold);display:flex;align-items:center;justify-content:center;
          transition:transform .2s;
        }
        .play-btn:hover{transform:scale(1.1)}
        .play-btn svg{width:22px;height:22px;fill:#fff;margin-left:4px}

        /* ── SERVICES ── */
        .services-bg{background:#f5f5f5}
        .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0}
        .service-card{
          background:#fff;position:relative;overflow:hidden;cursor:pointer;
        }
        .service-card:hover .service-img{transform:scale(1.05)}
        .service-img-wrap{overflow:hidden;height:220px}
        .service-img{width:100%;height:100%;object-fit:cover;transition:transform .4s}
        .service-body{padding:24px 24px 60px}
        .service-body h3{font-size:19px;font-weight:700;color:#111;margin:0}
        .service-arrow-btn{
          position:absolute;bottom:20px;right:20px;
          width:40px;height:40px;background:var(--gold);
          display:flex;align-items:center;justify-content:center;
          transition:background .2s;
        }
        .service-card:hover .service-arrow-btn{background:#a88930}
        .service-arrow-btn svg{width:18px;height:18px;fill:#fff;transform:rotate(-45deg)}

        /* ── PROJECTS ── */
        .projects-bg{background:var(--mid);padding:80px 0}
        .projects-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px;flex-wrap:wrap;gap:16px}
        .btn-outline-white{
          border:2px solid rgba(255,255,255,.5);color:#fff;
          padding:12px 28px;font-weight:600;font-size:14px;
          text-decoration:none;transition:.2s;
        }
        .btn-outline-white:hover{border-color:#fff;background:rgba(255,255,255,.08)}
        .projects-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0}
        .project-card{position:relative;overflow:hidden;cursor:pointer;aspect-ratio:4/3}
        .project-card:hover .project-img{transform:scale(1.06)}
        .project-img{width:100%;height:100%;object-fit:cover;transition:transform .45s;display:block}
        .project-overlay{
          position:absolute;inset:0;
          background:linear-gradient(to top,rgba(0,0,0,.85) 0%,transparent 55%);
          display:flex;flex-direction:column;justify-content:flex-end;
          padding:24px;opacity:0;transition:opacity .3s;
        }
        .project-card:hover .project-overlay{opacity:1}
        .project-overlay-title{display:flex;flex-direction:column;justify-content:flex-end;
          padding:24px;position:absolute;bottom:0;left:0;right:0;
          background:linear-gradient(to top,rgba(0,0,0,.75) 0%,transparent 100%)}
        .project-title{color:#fff;font-size:16px;font-weight:700;margin:0}
        .project-loc{color:var(--gold);font-size:13px;margin-top:4px}
        .btn-view-project{
          display:inline-block;margin-top:12px;
          border:2px solid #fff;color:#fff;padding:8px 20px;
          font-size:13px;font-weight:600;text-decoration:none;transition:.2s;
        }
        .btn-view-project:hover{background:#fff;color:#111}

        /* ── COMMITMENT / ABOUT SECOND ── */
        .commitment-grid{display:grid;grid-template-columns:1fr 1fr;gap:0}
        .commitment-img-col{position:relative;min-height:520px}
        .commitment-img-col img{width:100%;height:100%;object-fit:cover;display:block}
        .rating-badge{
          position:absolute;bottom:32px;left:32px;
          background:#fff;padding:20px 24px;
          box-shadow:0 8px 32px rgba(0,0,0,.15);
          display:flex;align-items:center;gap:16px;
        }
        .rating-badge .rating-num{font-size:36px;font-weight:900;color:#111}
        .rating-badge .rating-label{font-size:13px;color:#555;line-height:1.5}
        .commitment-content{background:#fff;padding:60px 48px;display:flex;flex-direction:column;justify-content:center}
        .commitment-items{margin-top:28px;display:flex;flex-direction:column;gap:0}
        .cmt-item{
          display:flex;gap:20px;align-items:flex-start;
          padding:24px 0;border-bottom:1px solid #eee;
        }
        .cmt-item:last-child{border-bottom:none}
        .cmt-icon{
          width:48px;height:48px;background:#f5f5f5;
          display:flex;align-items:center;justify-content:center;flex-shrink:0;
        }
        .cmt-icon svg{width:24px;height:24px;fill:var(--gold)}
        .cmt-text h3{font-size:16px;font-weight:700;color:#111;margin:0 0 6px}
        .cmt-text p{font-size:14px;color:#666;margin:0;line-height:1.6}

        /* ── TESTIMONIALS ── */
        .testimonials-section{background:var(--dark);padding:80px 0}
        .testimonials-inner{max-width:800px;margin:0 auto;text-align:center;padding:0 24px}
        .testi-quote{
          font-size:18px;color:rgba(255,255,255,.9);line-height:1.8;
          font-style:italic;margin-bottom:28px;position:relative;
        }
        .testi-quote::before{content:'"';font-size:60px;color:var(--gold);line-height:0;vertical-align:-0.3em;margin-right:4px}
        .testi-author h3{color:#fff;font-size:16px;font-weight:700;margin:0 0 4px}
        .testi-author p{color:var(--gold);font-size:14px;margin:0}
        .testi-dots{margin-top:32px;display:flex;gap:10px;justify-content:center}
        .testi-dot{
          width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.25);
          border:none;cursor:pointer;padding:0;transition:.2s;
        }
        .testi-dot.active{background:var(--gold);width:28px;border-radius:5px}

        /* ── BRANDS / CLIENTS ── */
        .brands-section{padding:60px 0;background:#fff}
        .brands-title{text-align:center;margin-bottom:40px}
        .brands-title h2{font-size:clamp(22px,3vw,34px);font-weight:800;color:#111}
        .brands-title h2 span{color:var(--gold)}
        .brands-track-wrap{overflow:hidden;position:relative}
        .brands-track{display:flex;gap:0;animation:scroll-brands 28s linear infinite}
        @keyframes scroll-brands{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .brands-track:hover{animation-play-state:paused}
        .brand-slide{
          flex-shrink:0;width:160px;padding:20px 24px;
          border-right:1px solid #eee;
          display:flex;align-items:center;justify-content:center;
        }
        .brand-slide img{max-height:56px;object-fit:contain;filter:grayscale(1);opacity:.6;transition:.2s}
        .brand-slide:hover img{filter:none;opacity:1}

        /* ── CONTACT FORM ── */
        .contact-section{background:#f5f5f5;padding:80px 0}
        .contact-form-box{
          background:#fff;max-width:860px;margin:0 auto;
          padding:60px;box-shadow:0 8px 48px rgba(0,0,0,.07);
        }
        .contact-form-box input,
        .contact-form-box textarea{
          width:100%;border:1px solid #ddd;padding:14px 18px;
          font-size:15px;font-family:inherit;margin-bottom:16px;
          outline:none;transition:border .2s;background:#fafafa;
        }
        .contact-form-box input:focus,
        .contact-form-box textarea:focus{border-color:var(--gold);background:#fff}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .btn-submit{
          width:100%;background:var(--gold);color:#fff;border:none;
          padding:16px;font-size:16px;font-weight:700;cursor:pointer;
          font-family:inherit;transition:.2s;
        }
        .btn-submit:hover{background:#a88930}

        /* ── FOOTER ── */
        .site-footer{
          background:var(--dark);
          position:relative;overflow:hidden;
        }
        .footer-cta{
          text-align:center;padding:80px 24px;
          border-bottom:1px solid rgba(255,255,255,.08);
        }
        .footer-cta h2{font-size:clamp(28px,4vw,52px);font-weight:900;color:#fff;margin:0 0 12px}
        .footer-cta p{color:rgba(255,255,255,.6);font-size:17px;margin-bottom:28px}
        .btn-footer-cta{
          display:inline-block;background:var(--gold);color:#fff;
          padding:14px 40px;font-weight:700;font-size:15px;
          text-decoration:none;transition:.2s;
        }
        .btn-footer-cta:hover{background:#a88930}
        .footer-main{padding:60px 0 0}
        .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 2fr;gap:40px}
        .footer-logo{margin-bottom:16px}
        .footer-tagline{color:rgba(255,255,255,.55);font-size:14px;line-height:1.7;margin-top:12px}
        .footer-col h4{color:var(--gold);font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:16px}
        .footer-col ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px}
        .footer-col ul li a{color:rgba(255,255,255,.6);text-decoration:none;font-size:14px;transition:.2s}
        .footer-col ul li a:hover{color:var(--gold)}
        .footer-contact-line{display:flex;align-items:center;gap:10px;color:rgba(255,255,255,.7);font-size:14px;margin-bottom:12px}
        .footer-contact-line svg{width:16px;height:16px;fill:var(--gold);flex-shrink:0}
        .social-links{display:flex;gap:12px;margin-top:20px}
        .social-link{
          width:38px;height:38px;border:1px solid rgba(255,255,255,.2);
          display:flex;align-items:center;justify-content:center;
          text-decoration:none;transition:.2s;
        }
        .social-link:hover{border-color:var(--gold);background:var(--gold)}
        .social-link svg{width:16px;height:16px;fill:#fff}
        .footer-bottom{
          border-top:1px solid rgba(255,255,255,.08);
          padding:24px;margin-top:48px;text-align:center;
          color:rgba(255,255,255,.4);font-size:13px;
        }
        .footer-bottom a{color:rgba(255,255,255,.5);text-decoration:none}
        .footer-bottom a:hover{color:var(--gold)}

        /* ── SCROLL TO TOP ── */
        .scroll-top{
          position:fixed;bottom:90px;right:24px;z-index:99;
          width:44px;height:44px;background:var(--gold);
          display:flex;align-items:center;justify-content:center;
          cursor:pointer;border:none;transition:.2s;
        }
        .scroll-top svg{width:20px;height:20px;fill:#fff}
        .scroll-top:hover{background:#a88930}

        /* WhatsApp */
        .wa-btn{
          position:fixed;bottom:24px;right:24px;z-index:99;
          background:#25D366;color:#fff;padding:12px 22px;
          font-weight:700;font-size:14px;text-decoration:none;
          box-shadow:0 4px 20px rgba(0,0,0,.25);transition:.2s;
          display:flex;align-items:center;gap:8px;
        }
        .wa-btn:hover{background:#1eb854;transform:translateY(-2px)}
        .wa-btn svg{width:20px;height:20px;fill:#fff;flex-shrink:0}

        /* Mobile menu */
        .mobile-nav{
          position:absolute;top:100%;left:0;right:0;
          background:#fff;box-shadow:0 8px 24px rgba(0,0,0,.12);
          padding:16px 24px;display:flex;flex-direction:column;gap:0;
          transition:transform .3s,opacity .3s;
        }
        .mobile-nav a{
          padding:14px 0;border-bottom:1px solid #f0f0f0;
          color:#222;font-weight:500;text-decoration:none;font-size:16px;
        }
        .mobile-nav a.active{color:var(--gold)}
        .hamburger{
          background:none;border:none;cursor:pointer;
          display:flex;flex-direction:column;gap:5px;padding:4px;
        }
        .hamburger span{display:block;width:24px;height:2px;background:#fff;transition:.3s}
        .site-header.scrolled .hamburger span{background:#111}

        /* Responsive */
        @media(max-width:900px){
          nav.main-nav{display:none}
          .hamburger{display:flex}
          .ihbox-grid{grid-template-columns:1fr}
          .ihbox-item{border-right:none;border-bottom:1px solid rgba(255,255,255,.08)}
          .about-grid{grid-template-columns:1fr}
          .services-grid{grid-template-columns:1fr 1fr}
          .projects-grid{grid-template-columns:1fr 1fr}
          .commitment-grid{grid-template-columns:1fr}
          .footer-grid{grid-template-columns:1fr 1fr}
          .form-row{grid-template-columns:1fr}
          .contact-form-box{padding:32px 24px}
          .hero-bottom{flex-direction:column;text-align:center}
        }
        @media(max-width:600px){
          .services-grid{grid-template-columns:1fr}
          .projects-grid{grid-template-columns:1fr}
          .about-stats-grid{grid-template-columns:1fr 1fr}
          .about-vision-mission{grid-template-columns:1fr}
          .footer-grid{grid-template-columns:1fr}
        }
        @media(min-width:901px){.hamburger{display:none}.mobile-nav{display:none!important}}
      `}</style>

      {/* ═══════════════════ HEADER ════════════════════════ */}
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">

          {/* Logo */}
          <div className="logo-wrap">
            <Image
              src="/logo.png"
              alt="Al Mayuf Logo"
              width={280}
              height={100}
              style={{ width: "auto", height: 100, objectFit: "contain" }}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="main-nav">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={active === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div style={{display:"flex",gap:"12px",alignItems:"center"}}>
            <a href="#contact" onClick={(e)=>handleNavClick("contact",e)} className="btn-top">Get in Touch</a>
            <button className="hamburger" aria-label="Menu" onClick={() => setMobileOpen(s => !s)}>
              <span style={mobileOpen ? {transform:"translateY(7px) rotate(45deg)"} : {}}></span>
              <span style={mobileOpen ? {opacity:0} : {}}></span>
              <span style={mobileOpen ? {transform:"translateY(-7px) rotate(-45deg)"} : {}}></span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="mobile-nav">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={active === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ═══════════════════ HERO ══════════════════════════ */}
      <section
        className="hero-section"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-sub">Aramco-Approved Contractor · Saudi Arabia</div>
          <h1 className="hero-title">
            Powering Industry Through<br />
            <span>Electrical Excellence</span>
          </h1>
          <p className="hero-desc">
            Industrial Electrical · Automation · Fiber Optics · Piping · Fabrication · Reliable Industrial Solutions
          </p>
          <div className="hero-btns">
            <a href="#services" onClick={(e)=>handleNavClick("services",e)} className="btn-hero-primary">Our Services</a>
            <a href="#contact" onClick={(e)=>handleNavClick("contact",e)} className="btn-hero-outline">Request Quote</a>
          </div>
        </div>

        {/* Bottom bar — SABQ style */}
        <div className="hero-bottom">
          <div className="hero-bottom-left">
            <p>SOME BUILD PROJECTS, <span>WE BUILD INDUSTRIES.</span></p>
            <p style={{color:"rgba(255,255,255,.6)",fontSize:"13px",marginTop:"4px",fontWeight:400}}>
              That power economies, protect lives, and stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ICON STRIP ════════════════════ */}
      <div className="ihbox-strip">
        <div className="ihbox-grid">

          <div className="ihbox-item">
            <div className="ihbox-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div className="ihbox-text">
              <h3>Engineering-First Approach</h3>
              <p>Solutions engineered for performance — not just spaces that look good, but systems that work reliably for decades.</p>
            </div>
          </div>

          <div className="ihbox-item">
            <div className="ihbox-icon">
              <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div className="ihbox-text">
              <h3>Safety Without Compromise</h3>
              <p>Zero-incident culture with full HSE compliance — from plant shutdowns to high-risk industrial sites.</p>
            </div>
          </div>

          <div className="ihbox-item">
            <div className="ihbox-icon">
              <svg viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/></svg>
            </div>
            <div className="ihbox-text">
              <h3>One Team, Full Delivery</h3>
              <p>From engineering to commissioning — no handoffs, no disconnects. One committed team, every step of the way.</p>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════ ABOUT ═════════════════════════ */}
      <section id="about" className="section-xl" style={{background:"#fff"}}>
        <div className="container">

          <div className="about-grid">
            <div>
              <span className="sub-pill">.WHO WE ARE.</span>
              <h2 className="sec-title">
                We're the team behind<br />projects that can't afford to go wrong.
              </h2>
              <div className="about-vision-mission" style={{marginTop:"28px"}}>
                <div className="vm-box">
                  <h4>Our Vision</h4>
                  <p>To be the most trusted industrial electrical and contracting company in Saudi Arabia — delivering excellence that powers growth.</p>
                </div>
                <div className="vm-box">
                  <h4>Our Mission</h4>
                  <p>To deliver safe, reliable, and cost-effective solutions — from engineering through commissioning — with integrity and precision.</p>
                </div>
              </div>
            </div>

            <div>
              <p style={{color:"#555",lineHeight:"1.8",fontSize:"15px",marginBottom:"20px"}}>
                Al Mayuf Trading & Contracting Est. is a Saudi-based, Aramco-approved contractor specializing in industrial electrical installations, machine commissioning, automation systems, power distribution, cabling works, fiber optic solutions, piping, fabrication, welding, MEP solutions, and industrial maintenance.
              </p>
              <p style={{color:"#555",lineHeight:"1.8",fontSize:"15px"}}>
                We serve manufacturing facilities, industrial plants, Oil & Gas projects, data centers, warehouses, and commercial developments throughout Saudi Arabia.
              </p>
            </div>
          </div>

          {/* Stats + Image */}
          <div className="about-grid" style={{marginTop:"48px"}}>
            <div>
              <img src="/project1.jpg" alt="Al Mayuf Works" className="about-img" style={{maxHeight:"460px"}} />
            </div>
            <div>
              <div className="about-stats-grid">
                <div className="stat-box">
                  <h2>100<sup>+</sup></h2>
                  <p>Projects Delivered</p>
                </div>
                <div className="stat-box">
                  <h2>20<sup>+</sup></h2>
                  <p>Global Brand Partners</p>
                </div>
                <div className="stat-box">
                  <h2>24/7</h2>
                  <p>Technical Support</p>
                </div>
                <div className="play-box">
                  <div className="play-btn">
                    <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════ SERVICES ══════════════════════ */}
      <section id="services" className="services-bg section-xl">
        <div className="container">
          <div style={{textAlign:"center",marginBottom:"48px"}}>
            <span className="sub-pill" style={{borderColor:"#999",color:"#777"}}>.WHAT WE OFFER.</span>
            <h2 className="sec-title">Services That Solve<br />What You're Building For</h2>
          </div>
          <div className="services-grid">
            {SERVICES.map((svc, i) => (
              <div key={i} className="service-card">
                <div className="service-img-wrap">
                  <img src={svc.img} alt={svc.title} className="service-img" />
                </div>
                <div className="service-body">
                  <h3>{svc.title}</h3>
                </div>
                <a href={svc.href} className="service-arrow-btn">
                  <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROJECTS ══════════════════════ */}
      <section id="projects" className="projects-bg">
        <div className="container">
          <div className="projects-header">
            <div>
              <span className="sub-pill">.OUR PROJECTS.</span>
              <h2 className="sec-title sec-title-white" style={{marginTop:"8px"}}>
                Projects That Define<br />Our Reputation
              </h2>
              <p style={{color:"rgba(255,255,255,.6)",marginTop:"8px",fontSize:"15px"}}>Not just finished, but finished right.</p>
            </div>
            <a href="#contact" onClick={(e)=>handleNavClick("contact",e)} className="btn-outline-white">View All Projects</a>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div key={i} className="project-card">
                <img src={p.img} alt={p.title} className="project-img" />
                {/* Always-visible bottom label */}
                <div className="project-overlay-title">
                  <div className="project-title">{p.title}</div>
                  <div className="project-loc">📍 {p.location}</div>
                </div>
                {/* Hover overlay with button */}
                <div className="project-overlay">
                  <div className="project-title">{p.title}</div>
                  <div className="project-loc">📍 {p.location}</div>
                  <a href="#contact" className="btn-view-project">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ COMMITMENT ════════════════════ */}
      <section className="section-xl" style={{background:"#fff",padding:0}}>
        <div className="commitment-grid">
          <div className="commitment-img-col">
            <img src="/project2.jpg" alt="Al Mayuf Commitment" />
            <div className="rating-badge">
              <div className="rating-num">4.9</div>
              <div className="rating-label">
                <strong style={{display:"block",color:"#111"}}>2,000+ Satisfied Clients</strong>
                Across Saudi Arabia
              </div>
            </div>
          </div>

          <div className="commitment-content">
            <span className="sub-pill">.OUR COMMITMENT.</span>
            <h2 className="sec-title" style={{marginTop:"12px"}}>
              Dear Builders of<br />Tomorrow
            </h2>
            <p style={{color:"#666",fontSize:"15px",lineHeight:"1.8",marginTop:"12px"}}>
              We understand the weight of your decision. The pressure. The risk. We've stood beside developers, plant managers, and project owners who needed more than a contractor — they needed someone who would care as much as they do.
            </p>
            <hr style={{margin:"24px 0",borderColor:"#eee"}} />

            <div className="commitment-items">
              {COMMITMENTS.map((c, i) => (
                <div key={i} className="cmt-item">
                  <div className="cmt-icon">
                    <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                  </div>
                  <div className="cmt-text">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BRANDS ════════════════════════ */}
      <section id="brands" className="brands-section">
        <div className="brands-title">
          <span className="sub-pill">.OUR PARTNERS.</span>
          <h2>Proud to Work with <span>Leading Global Brands</span></h2>
        </div>
        <div className="brands-track-wrap">
          <div className="brands-track">
            {[...brandList, ...brandList].map((src, i) => (
              <div key={i} className="brand-slide">
                <img src={src} alt={`brand-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ══════════════════ */}
      <div className="testimonials-section">
        <div className="testimonials-inner">
          <span className="sub-pill">.CLIENT FEEDBACK.</span>
          <div style={{marginTop:"32px"}}>
            <div className="testi-quote">
              {TESTIMONIALS[activeTestimonial].text}
            </div>
            <div className="testi-author">
              <h3>{TESTIMONIALS[activeTestimonial].name}</h3>
              <p>{TESTIMONIALS[activeTestimonial].company}</p>
            </div>
          </div>
          <div className="testi-dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`testi-dot${i === activeTestimonial ? " active" : ""}`}
                onClick={() => setActiveTestimonial(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════ CONTACT FORM ══════════════════ */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div style={{textAlign:"center",marginBottom:"48px"}}>
            <span className="sub-pill"  style={{borderColor:"#999",color:"#777"}}>.GET A QUOTE.</span>
            <h2 className="sec-title">How to Save 15–25% on Your<br />Next Industrial Project</h2>
            <p style={{color:"#666",marginTop:"12px"}}>Without sacrificing quality or safety.</p>
          </div>

          <div className="contact-form-box">
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="Project Type / Subject" />
            </div>
            <textarea rows={5} placeholder="Tell us about your requirement..." style={{marginBottom:"20px"}}></textarea>
            <button className="btn-submit">Submit Inquiry →</button>
          </div>

          {/* Contact info strip */}
          <div style={{display:"flex",justifyContent:"center",gap:"48px",marginTop:"40px",flexWrap:"wrap"}}>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:"13px",color:"#999",marginBottom:"4px",letterSpacing:"1px"}}>PHONE</div>
              <a href="tel:+966569053122" style={{color:"#111",fontWeight:"700",fontSize:"16px",textDecoration:"none"}}>+966 569 053 122</a>
            </div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:"13px",color:"#999",marginBottom:"4px",letterSpacing:"1px"}}>EMAIL</div>
              <a href="mailto:ansari.ali@almayuf.com" style={{color:"#111",fontWeight:"700",fontSize:"16px",textDecoration:"none"}}>ansari.ali@almayuf.com</a>
            </div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:"13px",color:"#999",marginBottom:"4px",letterSpacing:"1px"}}>WHATSAPP</div>
              <a href="https://wa.me/966569053122" target="_blank" style={{color:"#25D366",fontWeight:"700",fontSize:"16px",textDecoration:"none"}}>Chat Now →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ════════════════════════ */}
      <footer className="site-footer">

        {/* CTA Banner */}
        <div className="footer-cta">
          <h2>Still Scrolling?</h2>
          <p>Your Next Industrial Project Isn't Going to Build Itself.</p>
          <a href="#contact" onClick={(e)=>handleNavClick("contact",e)} className="btn-footer-cta">Enquire Now</a>
        </div>

        {/* Footer Links */}
        <div className="footer-main">
          <div className="container">
            <div className="footer-grid">

              <div>
                <div className="footer-logo">
                  <Image src="/logo.png" alt="Al Mayuf" width={52} height={52} style={{objectFit:"contain"}} />
                </div>
                <div style={{color:"rgba(255,255,255,.9)",fontWeight:"700",fontSize:"18px",marginBottom:"4px"}}>ALMAYUF</div>
                <div style={{color:"rgba(255,255,255,.5)",fontSize:"12px",marginBottom:"12px"}}>Trading & Contracting Est.</div>
                <p className="footer-tagline">
                  "More than contractors. We're your partners in powering industry through electrical excellence, automation, fiber optics, and reliable industrial solutions."
                </p>
              </div>

              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  {[["#about","About Us"],["#services","Services"],["#projects","Projects"],["#brands","Our Brands"],["#contact","Contact"]].map(([href,label])=>(
                    <li key={href}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </div>

              <div className="footer-col">
                <h4>Services</h4>
                <ul>
                  {["Industrial Electrical","Automation & SCADA","Fiber Optic Works","Piping & Fabrication","MEP Solutions","Material Trading"].map((s)=>(
                    <li key={s}><a href="#services">{s}</a></li>
                  ))}
                </ul>
              </div>

              <div className="footer-col">
                <h4>Contact</h4>
                <div className="footer-contact-line">
                  <svg viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <a href="tel:+966569053122" style={{color:"rgba(255,255,255,.7)",textDecoration:"none"}}>+966 569 053 122</a>
                </div>
                <div className="footer-contact-line">
                  <svg viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <a href="mailto:ansari.ali@almayuf.com" style={{color:"rgba(255,255,255,.7)",textDecoration:"none"}}>ansari.ali@almayuf.com</a>
                </div>
                <a href="#contact" onClick={(e)=>handleNavClick("contact",e)} style={{
                  display:"inline-block",marginTop:"12px",
                  border:"2px solid rgba(255,255,255,.3)",color:"#fff",
                  padding:"10px 24px",fontSize:"13px",fontWeight:"600",textDecoration:"none",
                }}>Enquire Now</a>
                <div className="social-links">
                  <a href="https://wa.me/966569053122" target="_blank" className="social-link" title="WhatsApp">
                    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.533 5.856L0 24l6.335-1.617A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.011-1.373l-.36-.213-3.728.952.992-3.616-.233-.373A9.785 9.785 0 012.182 12C2.182 6.671 6.671 2.182 12 2.182c5.33 0 9.818 4.489 9.818 9.818 0 5.33-4.488 9.818-9.818 9.818z"/></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" className="social-link" title="LinkedIn">
                    <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>

            </div>

            <div className="footer-bottom">
              © 2026 <a href="#">Almayuf Trading & Contracting Est.</a>, All Rights Reserved.&nbsp;&nbsp;|&nbsp;&nbsp;
              Industrial Electrical · Automation · Fiber Optics · Piping · Fabrication
            </div>
          </div>
        </div>

      </footer>

      {/* ═══════ WhatsApp Floating Button ══════════════════ */}
      <a href="https://wa.me/966569053122" target="_blank" className="wa-btn">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.533 5.856L0 24l6.335-1.617A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.011-1.373l-.36-.213-3.728.952.992-3.616-.233-.373A9.785 9.785 0 012.182 12C2.182 6.671 6.671 2.182 12 2.182c5.33 0 9.818 4.489 9.818 9.818 0 5.33-4.488 9.818-9.818 9.818z"/></svg>
        WhatsApp
      </a>

    </main>
  );
}
