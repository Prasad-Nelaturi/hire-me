import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Atom,
  Code,
  Palette,
  Github,
  Terminal,
  Wind,
  Database,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Briefcase,
  ArrowUpRight,
  Eye,
} from "lucide-react";

// Java Icon
export const JavaIcon = ({ className = "" }) => (
  <svg
    className={`transition-all duration-300 ${className}`}
    width="48"
    height="48"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 6C32 6 26 16 32 22C38 16 32 6 32 6Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 28C22 28 18 36 22 40C26 36 22 28 22 28Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="32" cy="46" r="14" stroke="currentColor" strokeWidth="3" />
  </svg>
);

export const SpringIcon = ({ className = "" }) => (
  <svg
    className={`transition-all duration-300 ${className}`}
    width="48"
    height="48"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 6L56 18V46L32 58L8 46V18L32 6Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38 24C38 30 30 40 26 42"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HtmlIcon = ({ className = "" }) => (
  <svg
    className={`transition-all duration-300 ${className}`}
    width="48"
    height="48"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 6L16 54L32 58L48 54L54 6H10Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AngularIcon = ({ className = "" }) => (
  <svg
    className={`transition-all duration-300 ${className}`}
    width="48"
    height="48"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 6L10 16L14 48L32 58L50 48L54 16L32 6Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 18L24 44H28L32 34L36 44H40L32 18Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [moduleIndex, setModuleIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    images.forEach((_, i) => {
      setTimeout(() => {
        setActiveIndex(i);
      }, i * 100000);
    });
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "./images/pr1.png",
    "./images/pr2.png",
    "./images/pr3.png",
    "./images/pr4.png",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectGoals: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d{0,10}$/.test(value)) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, company, projectGoals } = formData;

    if (!name || !email || !phone || !company || !projectGoals) {
      alert("Please fill all the fields before sending.");
      return;
    }

    const message = `
New Contact Request From Hire me Portfolio
---------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Message: ${projectGoals}
    `;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappNumber = "919652593606";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  const techStack = [
    { name: "React", icon: Atom },
    { name: "CSS3", icon: Palette },
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Terminal },
    { name: "MongoDB", icon: Database },
    { name: "Tailwind", icon: Wind },
    { name: "GitHub", icon: Github },
    { name: "Java", icon: JavaIcon },
    { name: "Spring Boot", icon: SpringIcon },
    { name: "HTML", icon: HtmlIcon },
    { name: "Angular", icon: AngularIcon },
  ];

  const cards = [
    {
      id: 1,
      number: "01.",
      title: "VELOX ERP – Versatile Commerce",
      desc: "A complete business management system with finance, sales, inventory & more.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      gradient: "from-blue-600 to-purple-600",
      website: null,
      details: {
        description: `VELOX ERP is an integrated business management solution designed to streamline and automate business operations. It centralizes all major processes including Finance, Sales, Purchasing, Inventory, Warehouse & HR, making it suitable for small to large enterprises.

The system improves accuracy, reduces manual work, and gives real-time visibility into business performance.`,

        features: [
          "Complete business workflow automation",
          "Real-time dashboards & KPIs",
          "Multi-user & role-based access",
          "Highly scalable architecture",
          "Centralized data & fast reporting",
        ],

        modules: [
          {
            name: "⚙️ Setup & Configuration",
            points: [
              "Company setup & master configuration",
              "Chart of accounts creation",
              "Financial period setup",
              "User roles & permissions",
            ],
          },
          {
            name: "💰 Financial Management",
            points: [
              "General Ledger & Chart of Accounts",
              "Accounts Receivable (Customer Payments)",
              "Accounts Payable (Vendor Payments)",
              "Banking, Reconciliation & Cashflow",
              "Budgeting & Fixed Asset Management",
            ],
          },
          {
            name: "🛒 Sales Management",
            points: [
              "Lead → Quote → Order → Delivery workflow",
              "Customer management & interaction tracking",
              "Order processing & sales pipeline",
              "Invoice generation & sales reports",
            ],
          },
          {
            name: "📦 Purchasing Management",
            points: [
              "Vendor management",
              "Purchase requests & purchase orders",
              "Goods receipt & vendor payments",
              "Supplier performance tracking",
            ],
          },
          {
            name: "🏬 Inventory & Warehouse",
            points: [
              "Real-time stock tracking",
              "Warehouse transfers",
              "Item, Lot & Serial number tracking",
              "Stock adjustments & reorder alerts",
              "Basic manufacturing support (BOM, Production Orders, Capacity Planning)",
            ],
          },
          {
            name: "👥 Human Resources",
            points: [
              "Employee records & profiles",
              "Attendance & shift management",
              "Payroll processing",
            ],
          },
        ],
      },
    },
    {
      id: 2,
      number: "02.",
      title: "INFIMOBILE – Aryagami Cloud Services",
      desc: "Telecom service backend platform for SIM orders, activation, usage tracking & promotions.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop",
      gradient: "from-green-600 to-teal-600",
      website: "https://infimobile.com/",
      details: {
        description: `InfiMobile is a telecom service backend platform developed for Aryagami Cloud Services. It provides seamless SIM card order processing, activation, usage tracking, and promotional plan management.

As a backend developer, I built scalable REST APIs using Java & Spring Boot, optimized MySQL queries, and ensured secure user authentication and service integration. I also implemented automated email notifications for customer orders and telecom promotions.`,

        features: [
          "Secure Spring Boot API architecture",
          "Optimized MySQL database performance",
          "Scalable backend for telecom workflows",
          "Real-time usage & activation tracking",
          "Automated email communication system",
        ],

        modules: [
          {
            name: "📦 SIM Order Processing",
            points: [
              "Backend logic for SIM order placement",
              "Order verification & validation",
              "Delivery status management",
              "API integration with logistics systems",
            ],
          },
          {
            name: "🔐 SIM Activation Services",
            points: [
              "APIs for SIM activation workflow",
              "Activation status tracking",
              "Validation with telecom regulations",
              "Secure service activation endpoints",
            ],
          },
          {
            name: "📊 Service Usage Tracking",
            points: [
              "Real-time monitoring of customer usage",
              "Voice / data / SMS usage tracking",
              "Usage alerts & limitations",
              "Database optimization for large datasets",
            ],
          },
          {
            name: "🎁 Promotional & Telecom Plans",
            points: [
              "Dynamic promotional plan integration",
              "Offer mapping based on user category",
              "Automated eligibility management",
              "Backend logic for discount & offer activation",
            ],
          },
          {
            name: "📧 Email Integration",
            points: [
              "Automated order confirmation emails",
              "Promotional mail sending system",
              "Template-based email builder",
              "Spring Mail API integration",
            ],
          },
        ],
      },
    },
    {
      id: 3,
      number: "03.",
      title: "EDFILX – Custom Web & App Development",
      desc: "Web & mobile app platform with built-in digital marketing, SEO tools, analytics & automation.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      gradient: "from-orange-600 to-red-600",
      website: "https://edflixsolutions.netlify.app/",
      details: {
        description: `EDFILX is a custom-built web and mobile application platform combined with a powerful digital marketing engine. It includes SEO automation, analytics dashboards, campaign automation, and client management tools.

As a backend developer, I designed scalable APIs, integrated SEO & marketing modules, optimized MongoDB queries, and developed interactive dashboards with responsive UI components.`,

        features: [
          "Custom web & mobile application platform",
          "Built-in SEO & digital marketing automation",
          "Analytics dashboards for campaigns & traffic",
          "Responsive UI using React/Angular + TailwindCSS",
          "Optimized MongoDB & API performance",
          "Integration with payment, email & social APIs",
          "JWT authentication & role-based access",
          "AWS CI/CD automated deployments",
        ],

        modules: [
          {
            name: "🛠 Web & Mobile Platform Development",
            points: [
              "Full-stack development for web & mobile",
              "Custom client dashboards & CMS panels",
              "TailwindCSS-based responsive UI",
              "Cross-platform performance optimization",
            ],
          },
          {
            name: "📈 SEO & Digital Marketing Engine",
            points: [
              "Automated SEO meta & sitemap generation",
              "Campaign automation workflows",
              "Keyword & competitor analytics tracking",
              "Integrated Google Analytics & Search Console",
            ],
          },
          {
            name: "📊 Analytics & Dashboard Module",
            points: [
              "Real-time traffic analytics",
              "Campaign performance tracking",
              "User behavior heatmap integration",
              "Custom chart & reporting tools",
            ],
          },
          {
            name: "🔌 Third-Party Integrations",
            points: [
              "Payment gateway integration",
              "Email & SMS campaign APIs",
              "Facebook / Instagram / Google Ads APIs",
              "Push notifications & OTP services",
            ],
          },
          {
            name: "🔐 Security & Deployment",
            points: [
              "JWT authentication with role-based access",
              "Data encryption & secure REST APIs",
              "AWS automated CI/CD pipelines",
              "Blue-green deployments for zero downtime",
            ],
          },
        ],
      },
    },
    {
      id: 4,
      number: "04.",
      title: "EDFILX eBook – Academic Support Platform",
      desc: "Student academic assistance platform for essays, assignments, mentors & eBook learning.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      gradient: "from-purple-600 to-pink-600",
      website: "https://edflix-ebook.netlify.app/",
      details: {
        description: `EDFILX eBook is a student-focused digital academic assistance platform. It offers expert help with essays, assignments, assessments, and project mentoring. Students can browse a rich library of academic eBooks, track their progress, and submit assignments with ease.

As a backend & full-stack developer, I built secure APIs, dashboards, mentor portals, authentication modules, and a searchable academic eBook library. The platform also includes subscription billing and digital marketing tools.`,

        features: [
          "Student academic support & mentoring system",
          "Dynamic dashboards for students & mentors",
          "Secure JWT & OAuth2 authentication",
          "Assignment submission & tracking workflow",
          "Searchable academic eBook library module",
          "REST API integration with Spring Boot",
          "MongoDB optimized search queries",
          "Subscription billing & invoice generation",
          "SEO optimization & email automation",
          "AWS deployment with CI/CD",
        ],

        modules: [
          {
            name: "📘 Academic Support & Mentoring",
            points: [
              "Essay & assignment guidance workflow",
              "Mentor-student communication module",
              "Assessment submission & grading system",
              "Progress-tracking dashboards",
            ],
          },
          {
            name: "📚 eBook Knowledge Library",
            points: [
              "Searchable library of academic resources",
              "Category filtering & recommendation engine",
              "Fast MongoDB search optimization",
              "Secure content view & download protections",
            ],
          },
          {
            name: "🧑‍🎓 Student & Mentor Dashboards",
            points: [
              "Role-based dashboards with tailored views",
              "React + TailwindCSS responsive UI",
              "Real-time status updates & notifications",
              "Admin tools for content & user management",
            ],
          },
          {
            name: "🔐 Authentication & Security",
            points: [
              "JWT & OAuth2 secure login system",
              "Role-based access for student/mentor/admin",
              "Encrypted API communication",
              "Session validation & refresh tokens",
            ],
          },
          {
            name: "💳 Payments & Subscriptions",
            points: [
              "Integrated payment gateway workflow",
              "Subscription-based access control",
              "Automated invoice & receipt generation",
              "Renewal reminders & alerts",
            ],
          },
          {
            name: "📣 Digital Marketing & Engagement",
            points: [
              "Push notifications & email automation",
              "SEO optimization for content",
              "Campaign analytics tracking",
              "User engagement boosters",
            ],
          },
          {
            name: "☁ AWS Deployment & DevOps",
            points: [
              "AWS-based CI/CD pipeline",
              "Zero-downtime deployments",
              "Automated backups & monitoring",
              "Secure environment configuration",
            ],
          },
        ],
      },
    },
    {
      id: 5,
      number: "05.",
      title: "EduLynks – Smart Institution Management",
      desc: "Complete education management system with MIS, LMS, automation, dashboards & data migration.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      gradient: "from-cyan-600 to-blue-600",
      website: "https://edulynks.in/",
      details: {
        description: `EduLynks is a complete academic + administrative management platform for schools, colleges and universities. It includes smart dashboards, AI-powered timetabling, data migration, automation tools, API integrations, and end-to-end operational management.

As a backend & full-stack developer, I built secure modules, dashboards, API integrations, data migration workflows, HR operations, and deployment automation. The system supports institutions from setup to analytics with scalable architecture.`,

        features: [
          "Smart MIS & LMS dashboards",
          "AI-powered timetable automation",
          "Data cleaning, migration & processing",
          "Secure authentication & role-based access",
          "Admin, teacher & student portals",
          "API integration & automation workflows",
          "HR, payroll & hiring management",
          "Maintenance & support monitoring tools",
          "High-performance MongoDB/MySQL storage",
          "AWS deployment & CI/CD automation",
        ],

        modules: [
          {
            name: "📊 Institution Dashboard (VETRI)",
            points: [
              "Centralized academic & administrative dashboard",
              "Live analytics for attendance, fees & academics",
              "Role-based widgets for admin/teacher/student",
              "AI-powered insights for decision making",
            ],
          },
          {
            name: "📁 Data Cleaning & Migration",
            points: [
              "Structured data filtering & validation",
              "Automated migration workflows",
              "Error-free import/export handling",
              "Zero-data-loss mapping pipeline",
            ],
          },
          {
            name: "🧑‍🏫 Staff Training & Onboarding",
            points: [
              "Multi-level staff onboarding modules",
              "Guided product usage steps for teachers & admins",
              "Interactive training dashboards",
              "Role-based access & permission setup",
            ],
          },
          {
            name: "🔌 API Integration & Automation",
            points: [
              "Integration with ERP, HRMS, LMS & payment systems",
              "Automated attendance & timetable sync",
              "Workflow automation for routine operations",
              "Secure API gateway & token-based access",
            ],
          },
          {
            name: "🔧 Maintenance & Technical Support",
            points: [
              "Live monitoring & issue tracking",
              "Scheduled system maintenance automation",
              "Security patches & uptime monitoring",
              "User-level support dashboards",
            ],
          },
          {
            name: "🗂 Data Management & Optimization",
            points: [
              "Institution-wide data structuring & cleanup",
              "Query optimization for large datasets",
              "Performance tuning for dashboards",
              "Institution record mapping & categorization",
            ],
          },
          {
            name: "🧾 Hiring, Payroll & HR Operations",
            points: [
              "Complete HR workflow automation",
              "Payroll generation & salary slip automation",
              "Employee attendance & leave management",
              "Recruitment pipeline & onboarding tools",
            ],
          },
        ],
      },
    },
    {
      id: 6,
      number: "06.",
      title: "D S Interiors – Interior Design Studio",
      desc: "Premium interior design studio transforming residential & commercial spaces since 2012.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      gradient: "from-amber-600 to-orange-600",
      website: "https://thedsinteriors.com/",
      details: {
        description: `D S Interiors is a premier interior design studio based in Hyderabad, specializing in residential and commercial spaces since 2012. The studio believes that great design transforms not just spaces, but lives.

As a full-stack developer for this project, I built a complete, responsive website showcasing their portfolio, services, and client testimonials. The platform includes dynamic project galleries, service booking system, contact forms, and integration with Google Maps for location services.`,

        features: [
          "Complete responsive website with modern UI/UX",
          "Dynamic project portfolio & gallery management",
          "Service catalog with detailed offerings",
          "Client testimonial & review system",
          "Free consultation booking form",
          "Google Maps API integration",
          "Contact form with email automation",
          "SEO optimized for interior design keywords",
          "Mobile-first responsive design",
          "Fast loading & optimized performance",
        ],

        modules: [
          {
            name: "🏠 Residential Design Services",
            points: [
              "Complete home transformation solutions",
              "Custom layouts & space planning",
              "3D visualizations & realistic renderings",
              "Material selection & furniture curation",
              "Smart home integration & automation",
            ],
          },
          {
            name: "🏢 Commercial Spaces",
            points: [
              "Office planning & workspace design",
              "Retail store & showroom interiors",
              "Brand identity integration",
              "Productivity-focused layouts",
              "Ergonomic furniture solutions",
            ],
          },
          {
            name: "✨ Interior Styling & Decor",
            points: [
              "Complete styling with curated furniture",
              "Art selection & placement",
              "Accessories & decor items",
              "Color palette consultation",
              "Lighting design solutions",
            ],
          },
          {
            name: "🏰 Luxury Villas",
            points: [
              "Premium villa designs with exquisite finishes",
              "Luxury material selection",
              "Landscape & outdoor design",
              "Smart home technology",
              "Custom furniture manufacturing",
            ],
          },
          {
            name: "📐 Space Planning",
            points: [
              "Optimized layouts for maximum functionality",
              "Traffic flow analysis & planning",
              "Zoning strategy implementation",
              "Furniture placement optimization",
              "Storage & organization solutions",
            ],
          },
          {
            name: "🎨 3D Visualization",
            points: [
              "Realistic 3D renderings before execution",
              "Virtual tours of designed spaces",
              "Material & texture previews",
              "Lighting simulation",
              "Interactive design walkthroughs",
            ],
          },
          {
            name: "📊 Project Management Dashboard",
            points: [
              "Client project tracking system",
              "Design approval workflow",
              "Material procurement management",
              "Timeline & milestone tracking",
              "Budget & expense monitoring",
            ],
          },
          {
            name: "📱 Client Portal",
            points: [
              "Secure client login & dashboard",
              "Design concept gallery access",
              "Real-time project updates",
              "Direct messaging with designers",
              "Payment & invoice management",
            ],
          },
        ],
      },
    },
  ];

  return (
    <>
      <nav className="px-[5%] w-full bg-[#16151b] text-white py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Logo Image */}
            <div className="relative flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20 shadow-md">
              <img
                src="https://images.scalebranding.com/minimal-pn-letter-mark-logo-e244d895-da3b-457b-b00b-b31da63ffa2b.png"
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/64x64/ff8a0c/ffffff?text=Logo";
                }}
              />
            </div>

            {/* Text */}
            <div className="leading-tight min-w-0">
              <h1 className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide text-white whitespace-nowrap">
                HIRE ME
              </h1>

              <span className="block text-[9px] sm:text-[11px] md:text-xs text-[#ff8a0c] font-semibold tracking-wide truncate">
                Prasad Nelaturi
              </span>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-20px]">
            <a href="#aboutme" className="hover:text-violet-600">
              About Me
            </a>
            <a href="#tech-stach" className="hover:text-violet-600">
              TechStach
            </a>
            <a href="#tools" className="hover:text-violet-600">
              Tools
            </a>
            <a href="#experience" className="hover:text-violet-600">
              Experience
            </a>
            <a href="#projects" className="hover:text-violet-600">
              Projects
            </a>
            <div className="flex items-center gap-6">
              <a href="#contact-me" className="hover:text-violet-600">
                <i className="bi bi-telephone-fill text-lg"></i>
              </a>

              <a
                href="https://wa.me/919652593606"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-600"
              >
                <i className="bi bi-whatsapp text-lg"></i>
              </a>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <i className="bi bi-x-lg text-2xl"></i>
            ) : (
              <i className="bi bi-list text-3xl"></i>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
          md:hidden rounded-2xl flex flex-col gap-5 px-4 overflow-hidden border-t border-gray-800
          transition-all duration-300 ease-in-out
          ${open ? "max-h-full py-5 opacity-100" : "max-h-0 py-0 opacity-0"}
        `}
        >
          <a
            href="#aboutme"
            className="hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
            About Me
          </a>

          <a
            href="#tech-stach"
            className="hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
            TechStach
          </a>

          <a
            href="#tools"
            className="hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
            Tools
          </a>
          <a
            href="#experience"
            className="hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <div className="flex gap-6 pt-2 text-gray-400">
            <a
              href="tel:+919652593606"
              className="hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              <i className="bi bi-telephone-fill text-lg"></i>
            </a>
            <a
              href="https://wa.me/919652593606"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-600"
            >
              <i className="bi bi-whatsapp text-lg"></i>
            </a>
          </div>
        </div>
      </nav>

      <section className="relative w-full overflow-hidden bg-[#16151b] text-white px-4 md:px-10">
        {/* MAIN CONTENT */}
        <div id="home" className="relative z-10 text-center space-y-4 py-[8%]">
          {/* Tagline */}
          <p className="text-[#ff8a0c] text-lg md:text-xl">
            Let’s Build Modern Web Experiences Together
          </p>

          {/* Heading Line 1 */}
          <div className="flex justify-center items-center text-[8vw] leading-tight">
            Im Prasad
            <span>
              <img
                src="./images/hero1.jpg"
                alt=""
                className="w-[14vw] h-[12vh] object-cover rounded-[40px] mx-3"
              />
            </span>
            Nelaturi
          </div>

          {/* Heading Line 2 */}
          <div className="relative flex justify-center items-center text-[7vw] leading-tight w-max mx-auto">
            <div className="absolute w-[200px] h-[200px] bg-violet-600 top-[-40px] left-[-90px] rounded-full blur-[80px]"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="absolute left-[-50px] text-[#ff8a0c] w-[40px] md:w-[5vw]"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
            </svg>
            Full Stack Developer
          </div>

          {/* Heading Line 3 */}
          <div className="relative flex justify-center items-center text-[8vw] leading-tight">
            <span>
              <img
                src="./images/hero2.jpg"
                alt=""
                className="w-[14vw] h-[12vh] object-cover rounded-[40px] mx-3"
              />
            </span>
            & UI Specialist.
            <span className="relative ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute bottom-[-20px] rotate-[60deg] text-[#4e8bf5] w-[5vw] animate-spin-slow"
                viewBox="0 0 16 16"
              >
                <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2m2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2 2 0 0 1 1.437-1.437V3.937A2 2 0 0 1 12.063 2.5H3.937A2 2 0 0 1 2.5 3.937M14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
              </svg>
            </span>
          </div>
        </div>

        <section id="aboutme" className="px-[5%] my-20 py-20">
          <div
            className="
    grid grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-[25%_40%_25%] 
    gap-10 items-center
  "
          >
            {/* LEFT COLUMN */}
            <div
              className="
      text-white text-right space-y-3 
      order-2 md:order-1
    "
            >
              {/* Vertical Button */}
              <a
                href="tel:919652593606"
                className="
      border border-[#7d7d80] rounded-[50px] 
      flex items-center justify-center
      cursor-pointer px-5 py-2 w-fit
      text-white 
      hover:text-violet-600
    "
              >
                <span
                  className="
        text-[10px] leading-[12px]
        sm:text-[13px] sm:leading-[15px]
        md:text-[14px] md:leading-[16px]
        font-semibold 
        flex flex-col items-center
      "
                >
                  {"GET IN TOUCH".split("").map((letter, i) => (
                    <span key={i}>
                      {letter === " " ? <span>&nbsp;</span> : letter}
                    </span>
                  ))}
                </span>
              </a>

              <h2 className="text-3xl text-violet-600 font-semibold">
                About Me
              </h2>
              <p className="text-[18px] sm:text-[19px] md:text-[17px]">
                I’m <span className="font-semibold">Prasad Nelaturi</span>,{" "}
                <span className="font-semibold">
                  a Full Stack Developer & Tech Innovator
                </span>{" "}
                who loves building fast, scalable and user-friendly
                applications.
              </p>
            </div>

            {/* MIDDLE COLUMN (IMAGE) */}
            <div className="relative flex justify-center order-1 md:order-2 w-full group">
              {/* Background Circle */}
              <div
                className="absolute w-[350px] h-[280px] md:w-[420px] md:h-[330px] 
        bg-violet-600 rounded-full blur-[90px] 
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></div>

              {/* Image Wrapper */}
              <div
                className="relative z-[2] h-[420px] w-[240px] 
        md:h-[480px] md:w-[270px] lg:h-[500px] lg:w-[280px] 
        rounded-[120px] overflow-hidden"
              >
                {/* Image 1 */}
                <div
                  className="relative z-[2] h-[450px] w-[250px]
                 md:h-[500px] md:w-[280px]
                 rounded-[120px] overflow-hidden"
                >
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      className={`
            absolute inset-0 w-full h-full object-cover object-left rounded-[120px]
            transition-opacity duration-700
            ${activeIndex === index ? "opacity-100" : "opacity-0"}
          `}
                    />
                  ))}
                </div>
              </div>

              {/* Shadow Box */}
              <div
                className="
        absolute top-[8%] left-[200px] -translate-x-1/2
        h-[420px] w-[240px]
        md:h-[480px] md:w-[270px]
        lg:h-[500px] lg:w-[280px]
        rounded-[120px]
        bg-gradient-to-b from-[#474747] to-[#6a6fc9] 
        z-[1]
      "
              ></div>
            </div>

            {/* RIGHT COLUMN */}
            <div
              className="
      text-white text-left space-y-3
      order-3 md:order-3
    "
            >
              <a
                href="#contact-me"
                className="
        border border-[#7d7d80] rounded-[50px]
        p-3 w-fit
        text-white 
      hover:text-violet-600
      "
              >
                <span
                  className="
          text-[10px] leading-[12px]
          sm:text-[13px] sm:leading-[15px]
          md:text-[14px] md:leading-[16px]
          font-semibold
        "
                >
                  CONTACT ME
                </span>
              </a>

              <h2 className="text-3xl text-violet-600 font-semibold">
                Who I Am
              </h2>
              <p className="text-[18px] sm:text-[19px] md:text-[17px]">
                I specialize in creating clean UI, strong backend architectures,
                and seamless end-to-end digital experiences. My goal is to
                combine design, performance, and functionality to deliver modern
                web solutions. I enjoy turning ideas into production-ready
                applications and continuously learning new technologies to stay
                ahead in the industry.
              </p>
            </div>
          </div>
        </section>

        <section id="tech-stach" className="py-28 mb-[-4%] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6" data-aos="fade-up">
              {/* Headings */}

              {/* vertical text button */}
              <a
                href="https://wa.me/919652593606"
                className="absolute left-[15%] z-[3]
    flex items-center justify-center cursor-pointer select-none"
              >
                <i className="bi bi-whatsapp text-3xl hover:text-violet-600"></i>
              </a>
              <p
                className="text-center text-[#ff8a0c] font-bold m-0 
  text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              >
                Tech Stack+
              </p>

              <h2
                className="text-center text-white m-0 
  text-xl sm:text-lg md:text-xl lg:text-2xl p-6"
              >
                A modern collection of technologies I use to build, create, and
                scale digital experiences.
              </h2>

              {/* Blurred Circle Background */}
              <div
                className="
          absolute z-0 
          w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]
          bg-violet-600 rounded-full blur-[120px]
          top-[15%] left-[40%] sm:left-[45%]
        "
              ></div>
            </div>

            {/* Marquee Container */}
            <div className="relative">
              {/* Marquee Box with Corner Plus Signs */}
              <div className="relative overflow-hidden">
                {/* Marquee Content */}
                <div className="py-12 px-4">
                  <div className="marquee-container">
                    <div className="marquee-content">
                      {/* First set of icons */}
                      {techStack.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                          <div
                            key={`first-${index}`}
                            className="marquee-item"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                          >
                            <div className="tech-icon-container group">
                              {/* Icon Square with Corner Plus Signs */}
                              <div className="relative icon-square">
                                {/* Corner Plus Signs */}
                                <div className="absolute bg-[#16151b] rounded-full p-1 -top-6 -left-3 text-gray-100 text-2xl">
                                  +
                                </div>
                                <div className="absolute bg-[#16151b] rounded-full p-1 -top-6 -right-3 text-gray-100 text-2xl">
                                  +
                                </div>
                                <div className="absolute bg-[#16151b] rounded-full p-1 -bottom-4 -left-3 text-gray-100 text-2xl">
                                  +
                                </div>
                                <div className="absolute bg-[#16151b] rounded-full p-1 -bottom-4 -right-3 text-gray-100 text-2xl">
                                  +
                                </div>

                                {/* Icon */}
                                <IconComponent className="w-10 h-10 text-gray-600 transition-all duration-300 group-hover:text-violet-600 group-hover:scale-110" />
                              </div>
                              <span className="tech-name text-violet-600">
                                {tech.name}
                              </span>
                            </div>
                          </div>
                        );
                      })}

                      {/* Duplicate set for seamless loop */}
                      {techStack.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                          <div key={`second-${index}`} className="marquee-item">
                            <div className="tech-icon-container group">
                              {/* Icon Square with Corner Plus Signs */}
                              <div className="relative icon-square">
                                {/* Corner Plus Signs */}
                                <div className="absolute bg-[#16151b] rounded-full p-1 -top-6 -left-3 text-gray-400 text-2xl">
                                  +
                                </div>
                                <div className="absolute bg-[#16151b] rounded-full p-1 -top-6 -right-3 text-gray-400 text-2xl">
                                  +
                                </div>
                                <div className="absolute bg-[#16151b] rounded-full p-1 -bottom-4 -left-3 text-gray-400 text-2xl">
                                  +
                                </div>
                                <div className="absolute bg-[#16151b] rounded-full p-1 -bottom-4 -right-3 text-gray-400 text-2xl">
                                  +
                                </div>

                                {/* Icon */}
                                <IconComponent className="w-8 h-8 text-gray-600 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110" />
                              </div>
                              <span className="tech-name">{tech.name}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CSS Styles */}
          <style jsx>{`
        .marquee-container {
          overflow: hidden;
          [#16151b]-space: nowrap;
        }

        .marquee-content {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }

        .marquee-item {
          flex-shrink: 0;
        }

        .tech-icon-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 1rem 1rem 1rem;
          border-radius: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .icon-square {
          width: 10rem;
          height: 10rem;
          border: 2px solid #E5E7EB;
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: [#16151b];
          transition: all 0.3s ease;
        }

        .tech-icon-container:hover .icon-square {
          border-color: #7c3aed;
          box-shadow: 0 4px 12px #7c3aed;
          transform: translateY(-2px);
        }

        .tech-name {
          font-size: 1.19rem;
          font-weight: 600;
          color: #7c3aed;
          text-align: center;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause animation on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

      `}</style>
        </section>

        <section id="tools" className="relative py-28">
          {/* Headings */}
          <p
            className="text-center text-[#ff8a0c] font-bold m-0 
  text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Tools+
          </p>

          <h2
            className="text-center text-white m-0 
  text-xl sm:text-lg md:text-xl lg:text-2xl p-6"
          >
            Essential tools and platforms I use to streamline development and
            bring ideas to life.
          </h2>

          {/* Blurred Circle Background */}
          <div
            className="
          absolute z-0 
          w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]
          bg-[#998ef83d] rounded-full blur-[50px]
          top-[15%] left-[40%] sm:left-[45%]
        "
          ></div>

          {/* vertical text button */}
          <a
            href="mailto:prasadnelaturi333@gmail.com"
            className="
   absolute z-10 border border-white rounded-[50px]
    top-[15%] left-[5%]
    flex items-center justify-center
    cursor-pointer select-none
    px-4 py-2
    w-fit h-fit
    text-white 
      hover:text-violet-600
  "
          >
            <span
              className="
      text-[10px] leading-[12px]     /* mobile */
      sm:text-[13px] sm:leading-[15px] /* tablet */
      md:text-[15px] md:leading-[17px] /* desktop */
      font-semibold 
      flex flex-col items-center
    "
            >
              {"MAIL".split("").map((letter, i) => (
                <span key={i}>{letter}</span>
              ))}
            </span>
          </a>

          <div
            className="
          absolute z-10 rounded-[50px]
          w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]
          top-[20%] right-[15%] sm:right-[20%]
        "
          >
            <a
              href="https://wa.me/919652593606"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <i className="bi bi-whatsapp text-3xl hover:text-violet-600"></i>
            </a>
          </div>
          <div className="mt-5 p-3">
            {/* Row 1 */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <img
                src="./images/vscode.webp"
                className="w-[18vw] sm:w-[14vw] md:w-[10vw] h-[12vw] sm:h-[10vw] md:h-[8vw] object-contain filter invert"
                alt="VS Code"
              />

              <img
                src="./images/swagger.svg"
                className="w-[18vw] sm:w-[14vw] md:w-[10vw] h-[12vw] sm:h-[10vw] md:h-[8vw] object-contain filter invert"
                alt="Swagger"
              />

              <img
                src="./images/mongo.png"
                className="w-[18vw] sm:w-[14vw] md:w-[10vw] h-[12vw] sm:h-[10vw] md:h-[8vw] object-contain filter invert"
                alt="VS Code"
              />

              <img
                src="./images/eclipse.png"
                className="w-[18vw] sm:w-[14vw] md:w-[10vw] h-[12vw] sm:h-[10vw] md:h-[8vw] object-contain filter invert"
                alt="Eclipse IDE"
              />

              <img
                src="./images/sts.png"
                className="w-[18vw] sm:w-[14vw] md:w-[10vw] h-[12vw] sm:h-[10vw] md:h-[8vw] object-contain filter invert"
                alt="Spring Tool Suite"
              />

              <img
                src="./images/postman.png"
                className="w-[18vw] sm:w-[14vw] md:w-[10vw] h-[12vw] sm:h-[10vw] md:h-[8vw] object-contain filter invert"
                alt="Postman"
              />

              <img
                src="./images/robo3t.png"
                className="w-[18vw] sm:w-[14vw] md:w-[10vw] h-[12vw] sm:h-[10vw] md:h-[8vw] object-contain filter invert"
                alt="Robo 3T"
              />

              <img
                src="./images/sourcetree.webp"
                className="w-[18vw] sm:w-[14vw] md:w-[10vw] h-[12vw] sm:h-[10vw] md:h-[8vw] object-contain filter invert"
                alt="SourceTree"
              />
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto px-4 pt-28">
          <div className="px-4 grid md:grid-cols-2 gap-8">
            {/* <!-- Column 1 --> */}
            <div>
              <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
                <span className="font-sans">My </span> Work{" "}
                <span className="text-[#ff8a0c] rounded-full">Experience</span>
              </h2>

              {/* <!-- Card 1 --> */}
              <div className="bg-orange-100 hover:bg-orange-200 transition-all duration-300 ease-in-out rounded-3xl p-8 shadow-[0_6px_0_#f97316,0_8px_20px_rgba(249,115,22,0.35)] hover:-translate-y-1 hover:shadow-[0_4px_0_#c2410c,0_12px_25px_rgba(249,115,22,0.45)] active:translate-y-0.5 active:shadow-[0_2px_0_#9a3412,0_6px_12px_rgba(249,115,22,0.25)]">
                {" "}
                <div>
                  <div className="w-full overflow-hidden">
                    <img
                      src="./images/versatile-commerce.png"
                      alt="Prasad"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-3xl text-black font-semibold mb-2">
                  Full Stack Developer
                </h3>
                <p className="mb-4 text-gray-700">
                  I build end-to-end web applications from responsive UI to
                  scalable backend services.
                </p>
                <a
                  href="https://www.google.com/search?q=Versatile+Commerce+LLP&sca_esv=8836a3985e82810e&sxsrf=AE3TifOf-CoJAP3VYB46r9YFA3ZChpHh1Q%3A1764213193756&ei=ycEnacP6LfWTseMP5r_5sAE&ved=0ahUKEwiDg-OlrpGRAxX1SWwGHeZfHhYQ4dUDCBE&uact=5&oq=Versatile+Commerce+LLP&gs_lp=Egxnd3Mtd2l6LXNlcnAiFlZlcnNhdGlsZSBDb21tZXJjZSBMTFAyERAuGIAEGJECGMcBGIoFGK8BMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgIQJjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMiAQLhiABBiRAhjHARiKBRivARiXBRjcBBjeBBjgBNgBAUiCBlCFA1iFA3ABeAGQAQCYAZYCoAGWAqoBAzItMbgBA8gBAPgBAvgBAZgCAqACzQLCAgcQIxiwAxgnwgIKEAAYsAMY1gQYR5gDAIgGAZAGCLoGBggBEAEYFJIHBTEuMy0xoAfqCbIHAzMtMbgHtALCBwM0LTLIBy4&sclient=gws-wiz-serp"
                  className="text-orange-600 hover:underline font-medium"
                >
                  Take a Look →
                </a>
              </div>
            </div>
            <div>
              {/* <!-- Card 2 --> */}
              <div className="bg-blue-100 hover:bg-blue-300 transition-all duration-300 ease-in-out rounded-3xl p-8 mb-6 shadow-[0_6px_0_#3b82f6,0_8px_15px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_4px_0_#2563eb,0_10px_20px_rgba(0,0,0,0.2)] active:translate-y-0.5 active:shadow-[0_2px_0_#1d4ed8,0_6px_10px_rgba(0,0,0,0.1)]">
                <div className="w-full overflow-hidden">
                  <img
                    src="./images/aryagami-cloud.png"
                    alt="Prasad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl text-black font-semibold mb-2">
                  Backend Developer
                </h3>
                <p className="mb-4 text-gray-700">
                  I design and build secure, robust and scalable server-side
                  systems and APIs.
                </p>

                <a
                  href="https://www.google.com/search?q=aryagami+cloud+services&sca_esv=8836a3985e82810e&sxsrf=AE3TifMXs9oVvnxUH34guFeJCsE_eHr3Yw%3A1764213290181&ei=KsInafbmCvzZseMPgO_UiQE&gs_ssp=eJzj4tVP1zc0TKtKS7I0s0gxYLRSNagwTkpOsjQ0TUtJSUuyMDE1tjKoSEw2M00xSLMwMbM0NzSwMPcSTyyqTExPzM1USM7JL01RKE4tKstMTi0GAI2GGEE&oq=aryagami+cloud+se&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWFyeWFnYW1pIGNsb3VkIHNlKgIIATIQECMY8AUYgAQYJxjJAhiKBTILEC4YgAQYxwEYrwEyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgIQJjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFIyWZQ6QpYt09wAngBkAEAmAGFBqABmxCqAQsyLTEuMC4xLjEuMbgBA8gBAPgBAZgCCKAC9TXCAgoQABiwAxjWBBhHwgIIEAAYgAQYogSYAwCIBgGQBgi6BgYIARABGBSSBxEyLjAuMS4wLjEuMi4wLjEuMaAHrzKyBwkyLTEuMC4xLjK4B-sQwgcFMi0yLjbIB1o&sclient=gws-wiz-serp"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Take a Look →
                </a>
              </div>

              {/* <!-- Card 3 --> */}
              <div className="bg-violet-300 hover:bg-violet-400 transition-all duration-300 ease-in-out rounded-3xl p-8 shadow-[0_6px_0_#9ca3af,0_8px_15px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_4px_0_#6b7280,0_10px_20px_rgba(0,0,0,0.2)] active:translate-y-0.5 active:shadow-[0_2px_0_#4b5563,0_6px_10px_rgba(0,0,0,0.1)]">
                <h3 className="text-3xl font-semibold text-violet-600 mb-2">
                  … get the chance !
                </h3>
                <a
                  href="mailto:prasadnelaturi333@gmail.com"
                  className="text-gray-600 hover:underline font-medium"
                >
                  Explore →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -top-1 -left-1/2 animate-pulse"></div>
            <div className="absolute w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-3xl -bottom-1 -right-1/2 animate-pulse delay-1000"></div>
            <div className="absolute w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Briefcase className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 text-sm font-semibold">
                  Portfolio
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
                My Work
                <span className="bg-orange-400 bg-clip-text text-transparent">
                  {" "}
                  Experience
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transforming ideas into exceptional digital experiences through
                innovative design and cutting-edge technology
              </p>
            </motion.div>

            {/* Contact Button - Floating Action */}
            <motion.a
              href="tel:919652593606"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="fixed right-6 bottom-6 z-50 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-violet-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all cursor-pointer">
                  <Sparkles className="w-5 h-5 text-orange-400" />
                  <span className="text-white font-semibold text-sm">
                    Contact Me
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-orange-400" />
                </div>
              </div>
            </motion.a>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(card)}
                  className="group relative cursor-pointer"
                >
                  <div className="relative h-[400px] rounded-2xl overflow-hidden border-2 border-white/40">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="mb-3">
                        <span className="text-5xl font-bold text-white/20 group-hover:text-orange-400/30 transition-colors">
                          {card.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {card.desc}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold hover:bg-orange-500 transition-all"
                      >
                        Explore Project
                        <Eye className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Modern Modal - Redesigned */}
          <AnimatePresence>
            {/* Modal */}
            {selectedProject && (
              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 z-[999]">
                {/* Popup Box */}
                <div
                  className="bg-white text-black rounded-2xl shadow-xl relative 
      w-full max-w-3xl h-[80vh] flex flex-col overflow-hidden"
                >
                  {/* Scrollable Content */}
                  <div className="overflow-y-auto m-8">
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-11 right-14 bg-white rounded-full px-1.5 text-xl font-bold text-red-500 hover:bg-red-500 hover:text-white"
                    >
                      ✕
                    </button>
                    {/* Image */}
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="rounded-xl w-full h-48 object-cover"
                    />

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-4 text-sm font-semibold">
                      {/* Title */}
                      <h2 className="text-2xl font-bold text-[#ff8a0c]">
                        {selectedProject.title}
                      </h2>

                      {/* Website Link */}
                      {selectedProject.website && (
                        <a
                          href={selectedProject.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 rounded-full border border-[#ff8a0c] text-[#ff8a0c] 
        text-sm font-semibold hover:bg-[#ff8a0c] hover:text-white transition-all w-fit"
                        >
                          🔗 Visit Website
                        </a>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-sm whitespace-pre-line leading-relaxed text-gray-800">
                      {selectedProject.details.description}
                    </p>

                    {/* Features */}
                    <h3 className="mt-4 font-bold text-lg">Key Features</h3>
                    <ul className="mt-2 list-disc ml-5 text-sm text-gray-700 space-y-1">
                      {selectedProject.details.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>

                    {/* Only if modules exist */}
                    {selectedProject.details.modules && (
                      <>
                        <h3 className="mt-6 font-bold text-lg">Modules</h3>

                        {/* Displaying ONE module at a time */}
                        <div className="mt-4 border-l-4 border-[#ff8a0c] pl-4">
                          <h4 className="text-md font-semibold text-[#ff8a0c]">
                            {selectedProject.details.modules[moduleIndex].name}
                          </h4>

                          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1 mt-2">
                            {selectedProject.details.modules[
                              moduleIndex
                            ].points.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Pagination Buttons */}
                        <div className="flex justify-between items-center mt-6 text-sm font-semibold">
                          <button
                            disabled={moduleIndex === 0}
                            onClick={() => setModuleIndex(moduleIndex - 1)}
                            className={`px-4 py-2 rounded-full border 
                ${moduleIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-black hover:text-white"} 
                transition-all`}
                          >
                            ← Previous
                          </button>

                          <span className="text-black font-semibold">
                            {moduleIndex + 1} /{" "}
                            {selectedProject.details.modules.length}
                          </span>

                          <button
                            disabled={
                              moduleIndex ===
                              selectedProject.details.modules.length - 1
                            }
                            onClick={() => setModuleIndex(moduleIndex + 1)}
                            className={`px-4 py-2 rounded-full border 
                ${
                  moduleIndex === selectedProject.details.modules.length - 1
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-black hover:text-white"
                } 
                transition-all`}
                          >
                            Next →
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </section>

        <section
          id="contact-me"
          className="relative w-full overflow-hidden bg-[#16151b] text-white px-4 md:px-10 py-10"
        >
          <div id="contactservice" className="max-w-7xl mx-auto my-16">
            <div className="p-6 md:p-10" data-aos="fade-up">
              {/* vertical text button */}
              <a
                href="mailto:prasadnelaturi333@gmail.com"
                className="absolute left-[15%] z-[3]
    flex items-center justify-center cursor-pointer select-none"
              >
                <i className="bi bi-envelope-fill text-3xl hover:text-violet-600"></i>
              </a>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#ff8a0c] mb-12 text-center"
                data-aos="fade-up"
              >
                Contact Me
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16">
                <div className="w-full rounded-[50px] overflow-hidden">
                  <img
                    src="./images/prasad_output.png"
                    alt="Prasad"
                    className="
      w-full
      h-auto
      object-cover
      object-top      /* 👈 shows top of image first */
      md:h-80
      lg:h-[450px]
    "
                  />
                </div>

                <div className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-white text-sm font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-white text-sm font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-white text-sm font-medium">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-white text-sm font-medium">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-white text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        name="projectGoals"
                        value={formData.projectGoals}
                        onChange={handleInputChange}
                        placeholder="Write your Message..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white resize-none focus:outline-none"
                      />
                    </div>

                    <div className="pt-4">
                      {/* long3 */}
                      <button
                        type="submit"
                        className="
    border border-[#7d7d80] rounded-[50px] z-[3]
    flex items-center justify-center cursor-pointer select-none
    py-3 px-6 w-fit h-fit
    text-white 
      hover:text-violet-600
  "
                      >
                        <span
                          className=" 
      text-[10px] leading-[12px]
      sm:text-[13px] sm:leading-[15px]
      md:text-[15px] md:leading-[17px]
      font-semibold 
      flex flex-col items-center"
                        >
                          Send to WhatsApp
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <footer className="px-[5%] w-full bg-[#16151b] text-white py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Logo Image */}
            <div className="relative flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20 shadow-md">
              <img
                src="https://images.scalebranding.com/minimal-pn-letter-mark-logo-e244d895-da3b-457b-b00b-b31da63ffa2b.png"
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/64x64/ff8a0c/ffffff?text=Logo";
                }}
              />
            </div>

            {/* Text */}
            <div className="leading-tight min-w-0">
              <h1 className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide text-white whitespace-nowrap">
                HIRE ME
              </h1>

              <span className="block text-[9px] sm:text-[11px] md:text-xs text-[#ff8a0c] font-semibold tracking-wide truncate">
                Prasad Nelaturi
              </span>
            </div>
          </a>

          {/* FOOTER LINKS */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 text-sm">
            <a href="#aboutme" className="hover:text-violet-600">
              About Me
            </a>
            <a href="#tech-stach" className="hover:text-violet-600">
              TechStach
            </a>
            <a href="#tools" className="hover:text-violet-600">
              Tools
            </a>
            <a href="#experience" className="hover:text-violet-600">
              Experience
            </a>
            <a href="#projects" className="hover:text-violet-600">
              Projects
            </a>
          </div>

          {/* CONTACT ICONS */}
          <div className="flex items-center gap-6">
            <a href="tel:+919652593606" className="hover:text-violet-600">
              <i className="bi bi-telephone-fill text-lg"></i>
            </a>
            <a
              href="https://wa.me/919652593606"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-600"
            >
              <i className="bi bi-whatsapp text-lg"></i>
            </a>
            <a
              href="mailto:prasadnelaturi333@gmail.com"
              className="hover:text-violet-600"
            >
              <i className="bi bi-envelope-fill text-lg"></i>
            </a>
          </div>
        </div>

        {/* COPYRIGHT OR EXTRA INFO */}
        <p className="text-center text-gray-500 text-lg mt-4">
          © {new Date().getFullYear()}{" "}
          <span className="text-center text-[#ff8a0c]">Prasad Nelaturi</span>.
          All rights reserved.
        </p>
      </footer>
    </>
  );
}
