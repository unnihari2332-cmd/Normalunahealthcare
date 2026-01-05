import consultation from "@/assets/consultation.jpg";

export interface Speciality {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  treatments: string[];
  benefits: string[];
}

export const specialities: Speciality[] = [
  {
    id: "ivf-obstetrics-gynaecology",
    title: "IVF, Obstetrics & Gynaecology",
    description: "Complete infertility care with state-of-the-art IVF treatment. Our fertility specialists offer comprehensive support to help make your dream of parenthood a reality.",
    image: consultation,
    fullDescription: "At Norma Luna Healthcare, our IVF and reproductive medicine department offers world-class fertility treatments with cutting-edge technology and compassionate care. Our team of experienced fertility specialists provides personalized treatment plans tailored to each couple's unique needs, ensuring the highest chances of success.",
    treatments: [
      "In Vitro Fertilization (IVF)",
      "Intrauterine Insemination (IUI)",
      "Intracytoplasmic Sperm Injection (ICSI)",
      "Egg and Sperm Donation Programs",
      "Surrogacy Services",
      "Fertility Preservation",
      "High-Risk Pregnancy Care",
      "Laparoscopic Gynecological Surgery"
    ],
    benefits: [
      "State-of-the-art IVF laboratory",
      "High success rates",
      "Personalized treatment protocols",
      "Emotional support and counseling",
      "Affordable treatment packages"
    ]
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    description: "Cutting edge techniques to treat disorders that affect the esophagus, stomach, small intestine, and colon. Our gastroenterologists specialize in minimally invasive gastrointestinal treatments.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600",
    fullDescription: "Our gastroenterology department provides comprehensive care for all digestive system disorders. Using advanced diagnostic tools and minimally invasive procedures, our specialists ensure accurate diagnosis and effective treatment with minimal recovery time.",
    treatments: [
      "Endoscopy and Colonoscopy",
      "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
      "Liver Disease Management",
      "Inflammatory Bowel Disease Treatment",
      "Gastrointestinal Cancer Screening",
      "Capsule Endoscopy",
      "Hepatitis Treatment",
      "Pancreatic Disease Management"
    ],
    benefits: [
      "Advanced endoscopic facilities",
      "Minimally invasive procedures",
      "Quick diagnosis and treatment",
      "Expert hepatologists on staff",
      "Comprehensive liver care unit"
    ]
  },
  {
    id: "oncology",
    title: "Oncology",
    description: "Oncology specialists harness the most advanced cancer care, multidisciplinary expertise, chemotherapy and targeted therapies. Our specialists can help to prevent and alleviate symptoms to improve patient quality of life.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
    fullDescription: "Our oncology department brings together world-class cancer specialists, cutting-edge technology, and compassionate care to provide comprehensive cancer treatment. We offer multidisciplinary tumor boards to ensure every patient receives the most effective treatment plan.",
    treatments: [
      "Chemotherapy",
      "Radiation Therapy",
      "Immunotherapy",
      "Targeted Therapy",
      "Surgical Oncology",
      "Bone Marrow Transplant",
      "Palliative Care",
      "Cancer Screening Programs"
    ],
    benefits: [
      "Multidisciplinary tumor board reviews",
      "Latest cancer treatment protocols",
      "Personalized treatment plans",
      "Supportive care services",
      "Clinical trial access"
    ]
  },
  {
    id: "transplant-kidney-liver",
    title: "Transplant (Kidney & Liver)",
    description: "We specialize in kidney, liver and heart transplant surgeries with exceptional care. Patients recommended to us with a history of transplant are studied so we can personalize the post-operative care.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600",
    fullDescription: "Our transplant program is one of the most comprehensive in the region, offering kidney, liver, and multi-organ transplants with excellent outcomes. Our experienced transplant surgeons and dedicated care teams ensure seamless pre and post-operative care.",
    treatments: [
      "Kidney Transplant",
      "Liver Transplant",
      "Living Donor Transplants",
      "Deceased Donor Programs",
      "Pediatric Transplants",
      "Post-Transplant Care",
      "Immunosuppression Management",
      "Dialysis Services"
    ],
    benefits: [
      "High success rates",
      "Short waiting times",
      "Comprehensive donor evaluation",
      "24/7 transplant team availability",
      "Long-term follow-up care"
    ]
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics",
    description: "Handle spine & joint problem through latest orthopedic technology including joint replacements, fracture treatments. Patient-centric care, advanced tech, and highly skilled doctors ensure treatments heal and restore lasting health.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600",
    fullDescription: "Our orthopedic department offers advanced treatment for all musculoskeletal conditions. From sports injuries to complex joint replacements, our specialists use the latest techniques including robotic-assisted surgery for precise outcomes.",
    treatments: [
      "Total Hip Replacement",
      "Total Knee Replacement",
      "Spine Surgery",
      "Sports Medicine",
      "Arthroscopic Surgery",
      "Fracture Care",
      "Pediatric Orthopedics",
      "Robotic Joint Replacement"
    ],
    benefits: [
      "Robotic-assisted surgery",
      "Minimally invasive techniques",
      "Rapid recovery protocols",
      "Comprehensive rehabilitation",
      "Sports medicine expertise"
    ]
  },
  {
    id: "dental",
    title: "Dental",
    description: "Your smile is in expert hands at Norma Luna Healthcare. We offer dental implants to orthodontics, ensuring the best leading hospital specialists with personalized dental solutions.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600",
    fullDescription: "Our dental department provides comprehensive oral healthcare services from routine checkups to complex surgical procedures. Using state-of-the-art technology and materials, we ensure beautiful, lasting results for every patient.",
    treatments: [
      "Dental Implants",
      "Cosmetic Dentistry",
      "Orthodontics",
      "Root Canal Treatment",
      "Teeth Whitening",
      "Full Mouth Rehabilitation",
      "Pediatric Dentistry",
      "Maxillofacial Surgery"
    ],
    benefits: [
      "3D imaging and digital planning",
      "Same-day crowns available",
      "Sedation dentistry options",
      "Affordable pricing",
      "International quality standards"
    ]
  },
  {
    id: "bariatrics",
    title: "Bariatrics",
    description: "Our bariatric surgery team through innovative weight loss solutions. From sleeve gastrectomy to gastric bypass, we transform lives, one success story at a time.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
    fullDescription: "Our bariatric surgery program offers comprehensive weight loss solutions for patients struggling with obesity. Our multidisciplinary team includes surgeons, nutritionists, and psychologists to ensure long-term success.",
    treatments: [
      "Gastric Sleeve Surgery",
      "Gastric Bypass",
      "Mini Gastric Bypass",
      "Revision Surgery",
      "Intragastric Balloon",
      "Nutritional Counseling",
      "Medical Weight Management",
      "Body Contouring Post Weight Loss"
    ],
    benefits: [
      "Laparoscopic techniques",
      "Comprehensive pre-op evaluation",
      "Lifetime nutritional support",
      "Support groups available",
      "High success rates"
    ]
  },
  {
    id: "aesthetic-dermatology-plastic",
    title: "Aesthetic Dermatology & Plastic",
    description: "Achieve your beauty goals at hospitals known for aesthetic dermatology and plastic surgery expertise. From non-invasive procedures to complex surgeries, trust our surgeons for transformative results.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600",
    fullDescription: "Our aesthetic and plastic surgery department offers a full range of cosmetic and reconstructive procedures. Our board-certified surgeons combine artistic vision with surgical expertise to deliver natural-looking results.",
    treatments: [
      "Rhinoplasty",
      "Facelift Surgery",
      "Liposuction",
      "Breast Augmentation",
      "Tummy Tuck",
      "Botox and Fillers",
      "Laser Treatments",
      "Hair Transplant"
    ],
    benefits: [
      "Board-certified surgeons",
      "Natural-looking results",
      "Advanced laser technology",
      "Privacy and discretion",
      "Comprehensive aftercare"
    ]
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    description: "Our eye specialists are equipped with the latest technology and expertise for world-class vision care. From LASIK to cataract surgery, we help restore your sight to optimum levels for a lifetime of better vision.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600",
    fullDescription: "Our ophthalmology department provides comprehensive eye care services using the most advanced diagnostic and surgical technology. From routine eye exams to complex retinal surgeries, our specialists ensure optimal visual outcomes.",
    treatments: [
      "LASIK Surgery",
      "Cataract Surgery",
      "Glaucoma Treatment",
      "Retinal Surgery",
      "Corneal Transplant",
      "Pediatric Ophthalmology",
      "Oculoplastic Surgery",
      "Diabetic Eye Care"
    ],
    benefits: [
      "Blade-free LASIK",
      "Premium lens implants",
      "Advanced diagnostic imaging",
      "Quick recovery times",
      "High precision surgery"
    ]
  },
  {
    id: "nephrology",
    title: "Nephrology",
    description: "Our nephrology specialists offer comprehensive kidney care using advanced diagnostics and treatment options. From chronic kidney management to dialysis solutions, we ensure the best care for your kidneys.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600",
    fullDescription: "Our nephrology department specializes in the diagnosis and treatment of kidney diseases. With state-of-the-art dialysis facilities and expert nephrologists, we provide comprehensive care for all stages of kidney disease.",
    treatments: [
      "Chronic Kidney Disease Management",
      "Hemodialysis",
      "Peritoneal Dialysis",
      "Acute Kidney Injury Treatment",
      "Kidney Biopsy",
      "Hypertension Management",
      "Electrolyte Disorders",
      "Pre-Transplant Evaluation"
    ],
    benefits: [
      "Modern dialysis units",
      "Individualized care plans",
      "Integrated transplant services",
      "24/7 nephrologist availability",
      "Patient education programs"
    ]
  },
  {
    id: "urology",
    title: "Urology",
    description: "Our urology experts to ensure the best kidney, bladder, and reproductive health. With minimal invasive surgery, patients get expert care, speedy recovery, and superior outcomes in effective care.",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600",
    fullDescription: "Our urology department offers comprehensive care for urinary tract and male reproductive system disorders. Using minimally invasive techniques including robotic surgery, we ensure excellent outcomes with faster recovery.",
    treatments: [
      "Prostate Surgery",
      "Kidney Stone Treatment",
      "Urinary Incontinence Treatment",
      "Robotic Urological Surgery",
      "Bladder Cancer Treatment",
      "Male Infertility Treatment",
      "Pediatric Urology",
      "Urological Cancer Surgery"
    ],
    benefits: [
      "Robotic surgery expertise",
      "Laser stone treatment",
      "Minimally invasive procedures",
      "Quick recovery times",
      "Comprehensive male health services"
    ]
  },
  {
    id: "colorectal-surgery",
    title: "Colorectal Surgery",
    description: "For specialized colorectal surgeries at India's best hospitals, trust our network of experienced surgeons to handle even the most complex procedures. We ensure patient comfort and fast recovery.",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600",
    fullDescription: "Our colorectal surgery department provides specialized care for diseases of the colon, rectum, and anus. Our experienced surgeons use advanced laparoscopic and robotic techniques to ensure minimal scarring and faster recovery.",
    treatments: [
      "Colorectal Cancer Surgery",
      "Hemorrhoid Treatment",
      "Fistula Surgery",
      "Inflammatory Bowel Disease Surgery",
      "Rectal Prolapse Repair",
      "Colonoscopy",
      "Laparoscopic Colectomy",
      "Pelvic Floor Disorders"
    ],
    benefits: [
      "Minimally invasive surgery",
      "Enhanced recovery protocols",
      "Multidisciplinary team approach",
      "Advanced diagnostic capabilities",
      "Comprehensive follow-up care"
    ]
  },
];

export const getSpecialityById = (id: string): Speciality | undefined => {
  return specialities.find(spec => spec.id === id);
};
