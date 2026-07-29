import consultation from "@/assets/consultation.jpg";

export interface Speciality {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  treatments: string[];
}

export const specialities: Speciality[] = [
  {
    id: "ivf-obstetrics-gynaecology",
    title: "IVF & Gynaecology",
    description: "Norma Luna Healthcare facilitates access to distinguished fertility specialists, reproductive medicine experts, and gynaecologists across leading NABH and JCI-accredited hospitals and fertility centres in India.",
    image: "/ivf.jpg",
    fullDescription: "Norma Luna Healthcare facilitates access to distinguished fertility specialists, reproductive medicine experts, and gynaecologists across leading NABH and JCI-accredited hospitals and fertility centres in India. From preliminary medical record review and specialist consultation to proposed treatment pathways and indicative cost estimates, every stage is thoughtfully coordinated around the individual patient. For international patients seeking fertility treatment or advanced gynaecological care, assistance extends beyond hospital selection to medical visas, travel, accommodation, local transportation, interpreter services, and post-treatment follow-up coordination—creating a seamless pathway to specialised women's healthcare in India.",
    treatments: [
      "IVF (In Vitro Fertilisation) and ICSI",
      "IUI (Intrauterine Insemination)",
      "Fertility evaluation and treatment",
      "Egg and embryo freezing",
      "Donor-assisted fertility treatment, where legally and clinically applicable",
      "Recurrent implantation failure evaluation",
      "Recurrent pregnancy loss evaluation",
      "PCOS-related fertility management",
      "Endometriosis treatment",
      "Fibroid treatment and myomectomy",
      "Ovarian cyst management and surgery",
      "Hysteroscopy and laparoscopy",
      "Minimally invasive gynaecological surgery",
      "Hysterectomy",
      "Treatment of complex gynaecological conditions"
    ]
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    description: "Norma Luna Healthcare connects international patients with accomplished gastroenterologists, hepatologists, gastrointestinal surgeons, and advanced digestive disease centres across India.",
    image: "/gastroenterology.jpg",
    fullDescription: "Norma Luna Healthcare connects international patients with accomplished gastroenterologists, hepatologists, gastrointestinal surgeons, and advanced digestive disease centres across India. Whether seeking evaluation for a complex gastrointestinal condition, sophisticated endoscopic intervention, or surgical treatment, patients can be guided towards appropriate expertise within NABH and JCI-accredited healthcare institutions. Medical documentation, specialist consultations, proposed treatment pathways, hospital estimates, and the wider travel journey are coordinated with discretion and precision, allowing patients to arrive in India with greater clarity about the care ahead.",
    treatments: [
      "Advanced diagnostic and therapeutic endoscopy",
      "Upper GI endoscopy and colonoscopy",
      "ERCP and EUS",
      "Gastrointestinal bleeding management",
      "GERD and complex reflux disorders",
      "Inflammatory bowel disease evaluation and management",
      "Crohn's disease and ulcerative colitis",
      "Pancreatic and biliary disorders",
      "Gallbladder and bile duct procedures",
      "Complex gastrointestinal surgery",
      "Liver and digestive disease evaluation",
      "Minimally invasive gastrointestinal procedures"
    ]
  },
  {
    id: "oncology",
    title: "Oncology",
    description: "A cancer diagnosis often requires expertise across several disciplines rather than a single specialist. Norma Luna Healthcare facilitates access to established oncology programmes in India.",
    image: "/oncology.jpg",
    fullDescription: "A cancer diagnosis often requires expertise across several disciplines rather than a single specialist. Norma Luna Healthcare facilitates access to established oncology programmes in India where medical, surgical, and radiation oncologists collaborate within multidisciplinary environments. International patients can be connected with appropriate cancer specialists for case review, second opinions, advanced diagnostics, and proposed treatment strategies, while the complexities of travelling abroad for care are carefully coordinated. The emphasis remains on creating a clear, well-organised pathway to accredited institutions with sophisticated oncological capabilities while supporting patients and accompanying families throughout their time in India.",
    treatments: [
      "Cancer evaluation and multidisciplinary second opinions",
      "Surgical oncology",
      "Medical oncology and chemotherapy",
      "Radiation oncology and radiotherapy",
      "Immunotherapy",
      "Targeted therapy",
      "Precision oncology and molecular diagnostics",
      "Breast cancer treatment",
      "Gastrointestinal cancer treatment",
      "Gynaecological cancer treatment",
      "Urological cancer treatment",
      "Head and neck cancer treatment",
      "Thoracic cancer treatment",
      "Haematological cancer evaluation and treatment"
    ]
  },
  {
    id: "transplant-kidney-liver",
    title: "Organ Transplantation",
    description: "Organ transplantation demands exceptional clinical expertise, rigorous evaluation, sophisticated infrastructure, and strict adherence to regulatory and ethical requirements.",
    image: "/transplantkidney-liver.jpg",
    fullDescription: "Organ transplantation demands exceptional clinical expertise, rigorous evaluation, sophisticated infrastructure, and strict adherence to regulatory and ethical requirements. Norma Luna Healthcare facilitates connections with established transplant programmes within accredited Indian hospitals for eligible international patients seeking kidney or liver transplantation. From the preliminary exchange of medical records and transplant-team evaluation to hospital coordination and medical travel arrangements, the process is approached with particular care and transparency. All transplant-related decisions, donor and recipient eligibility, documentation, approvals, and procedures remain exclusively subject to the treating institution and applicable Indian laws and regulations.",
    treatments: [
      "Kidney transplantation",
      "Living-donor kidney transplant evaluation",
      "Liver transplantation",
      "Living-donor liver transplant evaluation",
      "Pre-transplant recipient assessment",
      "Donor evaluation through the treating transplant programme",
      "Complex transplant-related consultations",
      "Post-transplant specialist follow-up"
    ]
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics",
    description: "Norma Luna Healthcare opens access to leading orthopaedic expertise in India for international patients seeking solutions for joint, bone, spine, sports-related, and complex musculoskeletal conditions.",
    image: "/orthopaedics.jpg",
    fullDescription: "Norma Luna Healthcare opens access to leading orthopaedic expertise in India for international patients seeking solutions for joint, bone, spine, sports-related, and complex musculoskeletal conditions. Through accredited multispecialty and super-specialty hospitals, patients can be connected with surgeons experienced in contemporary joint replacement, minimally invasive techniques, arthroscopy, spine procedures, and complex reconstruction. Specialist consultations, imaging review, proposed surgical plans, hospital estimates, rehabilitation requirements, and travel logistics can be coordinated in advance, creating a considered pathway from initial enquiry through treatment and recovery.",
    treatments: [
      "Total and partial knee replacement",
      "Hip replacement",
      "Revision joint replacement",
      "Robotic-assisted joint replacement",
      "Arthroscopic surgery",
      "ACL and ligament reconstruction",
      "Rotator cuff and shoulder surgery",
      "Sports injury surgery",
      "Spine surgery",
      "Disc and degenerative spine procedures",
      "Fracture and trauma reconstruction",
      "Complex orthopaedic reconstruction",
      "Post-operative rehabilitation"
    ]
  },
  {
    id: "dental",
    title: "Dental Care",
    description: "For patients combining sophisticated dental treatment with international travel, Norma Luna Healthcare facilitates access to accomplished dental specialists and advanced centres in India.",
    image: "/dental.jpg",
    fullDescription: "For patients combining sophisticated dental treatment with international travel, Norma Luna Healthcare facilitates access to accomplished dental specialists and advanced centres in India across implantology, restorative dentistry, maxillofacial surgery, orthodontics, and aesthetic dentistry. Treatment requirements can be reviewed before arrival, allowing proposed procedures, timelines, anticipated visits, and indicative costs to be coordinated in advance. Where treatment requires multiple appointments or staged procedures, the wider itinerary can be thoughtfully structured around the clinical schedule, creating a dental journey that balances precision, convenience, function, and aesthetics.",
    treatments: [
      "Dental implants",
      "Full-mouth dental rehabilitation",
      "All-on-4 and All-on-6 implant rehabilitation",
      "Crowns and bridges",
      "Veneers and smile design",
      "Orthodontic treatment and clear aligners",
      "Root canal treatment",
      "Periodontal procedures",
      "Oral and maxillofacial surgery",
      "Orthognathic surgery",
      "Bone grafting and sinus lift procedures",
      "Complex restorative dentistry"
    ]
  },
  {
    id: "bariatrics",
    title: "Bariatric & Metabolic Surgery",
    description: "Norma Luna Healthcare facilitates access to established bariatric and metabolic surgery programmes for international patients exploring surgical approaches to clinically significant obesity and associated metabolic conditions.",
    image: "/bariatrics.jpg",
    fullDescription: "Norma Luna Healthcare facilitates access to established bariatric and metabolic surgery programmes for international patients exploring surgical approaches to clinically significant obesity and associated metabolic conditions. Patients can be connected with experienced bariatric surgeons and multidisciplinary teams within accredited hospitals for comprehensive evaluation and consideration of the most appropriate surgical pathway. Preliminary consultations, investigations, proposed treatment plans, indicative costs, expected hospitalisation, recovery requirements, and travel arrangements can be coordinated before arrival, supporting a well-prepared medical journey.",
    treatments: [
      "Laparoscopic sleeve gastrectomy",
      "Gastric bypass surgery",
      "Mini gastric bypass",
      "Revisional bariatric surgery",
      "Metabolic surgery",
      "Bariatric surgery evaluation",
      "Pre-operative multidisciplinary assessment",
      "Post-bariatric nutritional and lifestyle follow-up"
    ]
  },
  {
    id: "aesthetic-dermatology-plastic",
    title: "Aesthetic & Reconstructive Surgery",
    description: "Discretion, specialist expertise, and individual expectations are particularly important when travelling for aesthetic or reconstructive surgery.",
    image: "/aestheticdermatology.jpg",
    fullDescription: "Discretion, specialist expertise, and individual expectations are particularly important when travelling for aesthetic or reconstructive surgery. Norma Luna Healthcare connects international patients with accomplished plastic and reconstructive surgeons at accredited institutions in India, facilitating consultations around procedures suited to their individual objectives and clinical circumstances. From confidential preliminary discussions and treatment planning to accommodation, transportation, recovery arrangements, and follow-up coordination, each element of the journey can be organised with privacy and considered attention to detail.",
    treatments: [
      "Rhinoplasty",
      "Facelift and neck lift",
      "Blepharoplasty",
      "Breast augmentation",
      "Breast reduction and lift",
      "Abdominoplasty",
      "Liposuction and body contouring",
      "Gynaecomastia surgery",
      "Post-weight-loss body contouring",
      "Reconstructive plastic surgery",
      "Scar revision",
      "Selected hair restoration procedures"
    ]
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    description: "Norma Luna Healthcare facilitates access to advanced ophthalmic expertise in India for patients seeking evaluation or treatment for complex vision and eye conditions.",
    image: "/ophthalmology.jpg",
    fullDescription: "Norma Luna Healthcare facilitates access to advanced ophthalmic expertise in India for patients seeking evaluation or treatment for complex vision and eye conditions. Through established eye-care programmes and accredited healthcare institutions, international patients can connect with specialists across corneal, retinal, glaucoma, cataract, and other ophthalmic disciplines. Relevant reports and investigations can be coordinated for preliminary review, followed by assistance with specialist appointments, proposed treatment pathways, cost estimates, travel arrangements, and appropriate follow-up.",
    treatments: [
      "Cataract surgery and advanced intraocular lenses",
      "Corneal procedures",
      "Corneal transplantation",
      "Retinal surgery",
      "Vitrectomy",
      "Glaucoma treatment and surgery",
      "Refractive vision correction",
      "Keratoconus treatment",
      "Complex ophthalmic surgery",
      "Advanced diagnostic ophthalmology"
    ]
  },
  {
    id: "nephrology",
    title: "Nephrology",
    description: "For patients navigating complex kidney disease, Norma Luna Healthcare facilitates connections with experienced nephrologists and renal programmes within accredited hospitals across India.",
    image: "/nephrologists.jpg",
    fullDescription: "For patients navigating complex kidney disease, Norma Luna Healthcare facilitates connections with experienced nephrologists and renal programmes within accredited hospitals across India. International patients can access specialist evaluation for chronic and complex renal conditions, dialysis-related requirements, and transplant assessment where appropriate. Medical records and investigations can be coordinated before travel to support specialist review, while appointments, proposed treatment plans, indicative costs, accommodation, transportation, and ongoing communication are organised around the individual healthcare journey.",
    treatments: [
      "Complex kidney disease evaluation",
      "Chronic kidney disease management",
      "Acute kidney injury evaluation",
      "Dialysis consultation and planning",
      "Haemodialysis",
      "Peritoneal dialysis evaluation",
      "Glomerular and complex renal disorders",
      "Hypertension associated with kidney disease",
      "Kidney transplant evaluation",
      "Post-transplant nephrology follow-up"
    ]
  },
  {
    id: "urology",
    title: "Urology",
    description: "Norma Luna Healthcare connects international patients with experienced urologists and specialised centres in India for conditions involving the urinary system and male genitourinary health.",
    image: "/urology.png",
    fullDescription: "Norma Luna Healthcare connects international patients with experienced urologists and specialised centres in India for conditions involving the urinary system and male genitourinary health. Access extends across minimally invasive, endoscopic, laparoscopic, robotic, and conventional surgical approaches where clinically indicated. By coordinating preliminary medical review, specialist consultations, proposed treatment options, hospital estimates, scheduling, and the wider medical travel itinerary, patients can approach treatment abroad with greater clarity and preparation.",
    treatments: [
      "Kidney stone procedures",
      "Ureteroscopy and laser lithotripsy",
      "PCNL",
      "Prostate surgery",
      "TURP and advanced prostate procedures",
      "Robotic urological surgery",
      "Kidney and urinary tract surgery",
      "Urological cancer surgery",
      "Reconstructive urology",
      "Urinary obstruction treatment",
      "Complex urological procedures"
    ]
  },
  {
    id: "colorectal-surgery",
    title: "Colorectal Surgery",
    description: "Norma Luna Healthcare facilitates access to highly focused colorectal expertise for international patients requiring evaluation or surgical treatment for conditions affecting the colon, rectum, and anorectal region.",
    image: "/colorectalsurgery.jpg",
    fullDescription: "Norma Luna Healthcare facilitates access to highly focused colorectal expertise for international patients requiring evaluation or surgical treatment for conditions affecting the colon, rectum, and anorectal region. Through accredited hospitals in India, patients can be connected with surgeons experienced in minimally invasive, laparoscopic, robotic, and complex colorectal procedures. Preliminary case review, specialist consultations, proposed surgical strategies, hospital estimates, expected recovery periods, and travel requirements can be coordinated before arrival to create a clear and carefully structured treatment journey.",
    treatments: [
      "Colorectal cancer surgery",
      "Laparoscopic colorectal surgery",
      "Robotic colorectal surgery",
      "Rectal surgery",
      "Diverticular disease surgery",
      "Inflammatory bowel disease surgery",
      "Complex anal fistula treatment",
      "Haemorrhoid procedures",
      "Pilonidal disease surgery",
      "Colorectal reconstruction",
      "Selected complex bowel procedures"
    ]
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Complex neurological conditions often require highly focused expertise and sophisticated diagnostic capabilities.",
    image: "/neurology.jpg",
    fullDescription: "Complex neurological conditions often require highly focused expertise and sophisticated diagnostic capabilities. Norma Luna Healthcare facilitates access to experienced neurologists and multidisciplinary neuroscience programmes within accredited Indian healthcare institutions, enabling international patients to seek specialist opinions, further evaluation, and appropriate treatment pathways. Existing imaging, investigations, and medical histories can be coordinated for review before travel, followed by carefully arranged consultations, diagnostics, treatment scheduling, and medical travel support.",
    treatments: [
      "Complex neurological evaluation and second opinions",
      "Epilepsy evaluation and management",
      "Movement disorder evaluation",
      "Parkinson's disease specialist consultation",
      "Multiple sclerosis evaluation",
      "Neuromuscular disorder assessment",
      "Peripheral nerve disorders",
      "Headache and migraine evaluation",
      "Stroke-related neurological evaluation and rehabilitation planning",
      "Advanced neurological diagnostics"
    ]
  },
  {
    id: "andrology",
    title: "Andrology",
    description: "Norma Luna Healthcare provides a discreet pathway to specialist expertise in male reproductive and sexual health through established andrology, urology, and reproductive medicine programmes in India.",
    image: "/andrology.jpg",
    fullDescription: "Norma Luna Healthcare provides a discreet pathway to specialist expertise in male reproductive and sexual health through established andrology, urology, and reproductive medicine programmes in India. International patients can be connected with appropriate specialists for comprehensive evaluation and consideration of medical, microsurgical, reproductive, or other clinically indicated approaches. Privacy remains central to the experience, with medical documentation, consultations, proposed treatment pathways, travel arrangements, and follow-up communication coordinated with sensitivity and discretion.",
    treatments: [
      "Male infertility evaluation",
      "Semen and reproductive health assessment",
      "Varicocele treatment",
      "Microsurgical varicocelectomy",
      "Surgical sperm retrieval procedures",
      "Male-factor infertility treatment",
      "Erectile dysfunction evaluation and treatment",
      "Peyronie's disease evaluation",
      "Selected male reproductive microsurgery",
      "Andrology consultations associated with assisted reproduction"
    ]
  },
  {
    id: "cardiology-cardiac-care",
    title: "Cardiology & Cardiac Care",
    description: "For international patients seeking sophisticated cardiac evaluation or intervention, Norma Luna Healthcare facilitates access to experienced cardiologists, interventional cardiologists, and cardiac surgeons across leading accredited hospitals in India.",
    image: "/cardiology.jpg",
    fullDescription: "For international patients seeking sophisticated cardiac evaluation or intervention, Norma Luna Healthcare facilitates access to experienced cardiologists, interventional cardiologists, and cardiac surgeons across leading accredited hospitals in India. From complex diagnostic assessment and second opinions to catheter-based interventions and major cardiac surgery, patients can be connected with the appropriate expertise according to their medical requirements. Clinical records and cardiac investigations can be reviewed before travel, while proposed treatment plans, hospital estimates, scheduling, accommodation, transportation, and recovery logistics are carefully coordinated around the patient.",
    treatments: [
      "Comprehensive cardiac evaluation and second opinions",
      "Coronary angiography",
      "Coronary angioplasty and stenting",
      "Coronary artery bypass grafting (CABG)",
      "Heart valve repair and replacement",
      "Minimally invasive cardiac surgery",
      "Structural heart interventions",
      "TAVR/TAVI evaluation and procedures",
      "Electrophysiology studies",
      "Cardiac ablation",
      "Pacemaker and selected cardiac device procedures",
      "Complex cardiac surgery"
    ]
  },
  {
    id: "gender-reassignment-surgery",
    title: "Gender Reassignment Surgery",
    description: "Norma Luna Healthcare facilitates discreet access to experienced specialists and multidisciplinary teams in India for individuals considering gender-affirming surgical procedures.",
    image: "/GRS-jpg.webp",
    fullDescription: "Norma Luna Healthcare facilitates discreet access to experienced specialists and multidisciplinary teams in India for individuals considering gender-affirming surgical procedures. Through accredited healthcare institutions, patients can be connected with appropriate surgical expertise for confidential consultation, clinical evaluation, and personalised treatment planning based on their individual requirements. Given the deeply personal nature of this journey, particular emphasis is placed on privacy, sensitivity, and thoughtful coordination—from preliminary medical consultations and proposed treatment pathways to travel, accommodation, local assistance, and post-treatment follow-up with the treating institution.",
    treatments: [
      "Male-to-female (MTF) gender-affirming surgery",
      "Female-to-male (FTM) gender-affirming surgery",
      "Vaginoplasty",
      "Phalloplasty",
      "Metoidioplasty",
      "Chest masculinisation surgery",
      "Breast augmentation",
      "Facial feminisation procedures",
      "Voice-related surgical procedures",
      "Body contouring and gender-affirming aesthetic procedures",
      "Genital reconstructive procedures",
      "Revision gender-affirming surgery",
      "Hormone Therapy & Endocrinological Care",
      "Multidisciplinary pre- and post-operative gender-affirming care"
    ]
  }
];

// CRITICAL: This was missing and caused the build failure
export const getSpecialityById = (id: string): Speciality | undefined => {
  return specialities.find(spec => spec.id === id);
};
