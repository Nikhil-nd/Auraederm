import { ServiceDetail, SkinRoutineResult } from './types';

export const CLINIC_INFO = {
  name: "Auraederm Skin Solutions",
  doctorName: "Dr. Aishwarya Devaraj",
  title: "Clinical & Aesthetic Dermatologist",
  tagline: "Expert Care for Healthy, Radiant Skin",
  phone: "+91 9740392626",
  email: "aishwaryadevraj.adha@gmail.com",
  instagram: "aishwarya_raj26",
  address: "Auraederm, Sector 23, Gurugram, Haryana, India",
  googleMapsMockUrl: "https://maps.google.com/maps?q=28.5113708,77.0480877&hl=en&z=18&output=embed",
  timings: [
    { days: "Monday - Saturday", hours: "10:00 AM - 07:00 PM" },
    { days: "Sunday", hours: "By Appointment Only" }
  ]
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "acne-treatment",
    name: "Acne & Acne Scar Management",
    category: "clinical",
    description: "Customized clinical treatments targeting acne at its root, including chemical peels, comedone extraction, and scar reduction.",
    longDescription: "Our acne program combines medical management with in-clinic procedures to reduce active breakouts, control inflammation, and improve post-acne scarring. Treatment plans are individualized based on acne type, severity, and skin sensitivity.",
    benefits: [
      "Reduces active inflammatory acne lesions",
      "Prevents future breakouts and comedones",
      "Minimizes post-inflammatory hyperpigmentation (PIH)",
      "Improves skin texture and reduces acne scarring"
    ],
    faqs: [
      { question: "How many sessions are typically required?", answer: "Most patients see significant improvement within 3 to 6 sessions, scheduled 2-4 weeks apart, depending on acne severity." },
      { question: "Is there any downtime?", answer: "Active acne treatments have minimal downtime. Chemical peels may cause mild flaking or redness for 2-3 days." }
    ],
    duration: "45 mins"
  },
  {
    id: "pigmentation-disorders",
    name: "Pigmentation Disorders Management",
    category: "aesthetic",
    description: "Treatment for melasma, tanning, dark spots, and uneven skin tone using dermatologist-guided procedures and skincare.",
    longDescription: "We assess the cause and depth of pigmentation, then tailor therapies such as depigmenting regimens, peels, laser support, and medical skincare to reduce melasma, tanning, and dark spots safely.",
    benefits: [
      "Fades melasma and sun-induced pigmentation",
      "Improves overall skin tone and brightness",
      "Reduces patchy or uneven discoloration",
      "Supports long-term pigment control"
    ],
    faqs: [
      { question: "Can pigmentation come back?", answer: "It can recur if triggers such as sun exposure are not controlled, so maintenance with sunscreen and medical follow-up is important." },
      { question: "Are these treatments safe for sensitive skin?", answer: "Yes. We select treatments carefully based on skin type and sensitivity to minimize irritation." }
    ],
    duration: "30 mins"
  },
  {
    id: "skin-allergies",
    name: "Skin Allergies & Chronic Itching",
    category: "clinical",
    description: "Medical care for eczema, dermatitis, urticaria, and contact allergy with itch control and trigger-based management.",
    longDescription: "We diagnose the cause of chronic itching and rashes, then provide targeted treatment for eczema, dermatitis, urticaria, and allergic contact reactions. Care plans may include medication, trigger avoidance, and barrier repair strategies.",
    benefits: [
      "Relieves itching and redness",
      "Treats recurrent flare-ups and inflammation",
      "Identifies likely allergy or irritant triggers",
      "Strengthens the skin barrier for long-term control"
    ],
    faqs: [
      { question: "Do you treat recurring hives or urticaria?", answer: "Yes. We assess triggers and provide medical treatment for both acute and chronic urticaria." },
      { question: "Can contact allergy be diagnosed in clinic?", answer: "Yes. A detailed history often helps identify the trigger, and further testing may be advised when needed." }
    ],
    duration: "30 mins"
  },
  {
    id: "skin-infections",
    name: "Skin Infection Treatment",
    category: "clinical",
    description: "Care for fungal, bacterial, viral, and parasitic skin infections affecting the skin, scalp, and nails.",
    longDescription: "We diagnose and manage common and complex skin infections, including fungal rashes, bacterial boils, viral lesions, and parasitic infestations. Treatment is guided by the infection type, severity, and recurrence pattern.",
    benefits: [
      "Treats active infection and reduces spread",
      "Relieves discomfort, itching, and inflammation",
      "Addresses recurrent or resistant infections",
      "Provides guidance for hygiene and prevention"
    ],
    faqs: [
      { question: "Do all infections need tests?", answer: "Not always, but swabs, scrapings, or other tests may be used when the diagnosis is unclear or the infection keeps returning." },
      { question: "Can fungal infections affect the scalp or nails?", answer: "Yes. Scalp, nail, and body infections are all commonly treated in dermatology." }
    ],
    duration: "30 mins"
  },
  {
    id: "psoriasis-autoimmune",
    name: "Psoriasis & Autoimmune Skin Disease Care",
    category: "clinical",
    description: "Specialized management for psoriasis and other immune-mediated skin diseases.",
    longDescription: "We offer long-term management for psoriasis and related autoimmune skin diseases with a focus on symptom control, flare reduction, and quality of life. Treatment is personalized to disease extent, sites involved, and overall health status.",
    benefits: [
      "Reduces scaling, redness, and itching",
      "Helps control chronic flare-ups",
      "Supports safer long-term treatment planning",
      "Improves comfort and daily function"
    ],
    faqs: [
      { question: "Is psoriasis curable?", answer: "Psoriasis is typically a chronic condition, but it can often be well controlled with proper treatment and follow-up." },
      { question: "Do you treat other autoimmune skin diseases too?", answer: "Yes. We evaluate similar immune-mediated skin conditions and choose treatment accordingly." }
    ],
    duration: "30 mins"
  },
  {
    id: "vitiligo",
    name: "Vitiligo (White Patches) Care",
    category: "clinical",
    description: "Diagnosis and management for depigmentation / white patch conditions with medical and procedural options.",
    longDescription: "Vitiligo care focuses on stabilizing disease progression, encouraging repigmentation where possible, and supporting long-term management. The approach is tailored to lesion pattern, body site, and stage of disease.",
    benefits: [
      "Assesses disease activity and extent",
      "Supports repigmentation strategies",
      "Helps stabilize spreading lesions",
      "Provides ongoing follow-up and counseling"
    ],
    faqs: [
      { question: "Can vitiligo be treated early?", answer: "Yes. Early evaluation is important because treatment outcomes are often better when active spread is addressed promptly." },
      { question: "Does vitiligo always spread?", answer: "Not always. Many cases can be stabilized with proper treatment and monitoring." }
    ],
    duration: "30 mins"
  },
  {
    id: "hair-scalp",
    name: "Hair & Scalp Disorders",
    category: "hair",
    description: "Clinical solutions for hair fall, alopecia, dandruff, scalp psoriasis, and other scalp concerns.",
    longDescription: "Hair and scalp care includes evaluation for hair fall, alopecia, dandruff, scalp inflammation, and related disorders. We identify underlying causes and recommend medical, procedural, and lifestyle-based treatment plans.",
    benefits: [
      "Identifies the cause of hair loss or shedding",
      "Treats dandruff and scalp inflammation",
      "Supports regrowth in selected alopecia cases",
      "Improves overall scalp health"
    ],
    faqs: [
      { question: "Can dandruff cause hair fall?", answer: "Dandruff and scalp inflammation can worsen hair shedding, so treating the scalp often helps overall hair health." },
      { question: "Do you manage alopecia?", answer: "Yes. We evaluate the type of alopecia and build a treatment plan accordingly." }
    ],
    duration: "45 mins"
  },
  {
    id: "nail-disorders",
    name: "Nail Infections & Nail Disorders",
    category: "clinical",
    description: "Treatment for nail fungal infection, discoloration, thickening, and other common nail problems.",
    longDescription: "We evaluate nail infections and structural nail disorders to identify the exact cause of discoloration, brittleness, thickening, or lifting. Treatment may include medicines, local care, and prevention advice.",
    benefits: [
      "Treats fungal nail infection and inflammation",
      "Improves nail appearance and strength",
      "Prevents spread to surrounding skin",
      "Supports long-term nail health"
    ],
    faqs: [
      { question: "Are nail infections hard to treat?", answer: "They can take time, but with the right diagnosis and consistent treatment, improvement is possible." },
      { question: "Can a nail problem be something other than fungus?", answer: "Yes. Trauma, psoriasis, and other skin conditions can also affect nails." }
    ],
    duration: "30 mins"
  },
  {
    id: "growths",
    name: "Moles, Warts, Corns, Calluses & Skin Growths",
    category: "clinical",
    description: "Evaluation and treatment of benign skin growths, warts, skin tags, corns, and calluses.",
    longDescription: "We assess common skin growths and thickened lesions to determine whether they are benign and whether treatment or removal is appropriate. Options are selected based on the lesion type, location, and symptoms.",
    benefits: [
      "Assesses whether the lesion is benign",
      "Treats annoying or painful skin growths",
      "Improves comfort and cosmetic appearance",
      "Provides removal options when appropriate"
    ],
    faqs: [
      { question: "Should every mole be removed?", answer: "No. Moles are evaluated individually, and only lesions needing treatment or removal are recommended for a procedure." },
      { question: "Can warts come back?", answer: "They can recur, so follow-up and preventive care are sometimes needed." }
    ],
    duration: "30 mins"
  },
  {
    id: "cysts-scars-keloids",
    name: "Cysts, Lipomas, Keloids & Scar Care",
    category: "clinical",
    description: "Treatment for cysts, lipomas, keloids, acne scars, and other scar-related concerns.",
    longDescription: "This service includes evaluation of lumps, cysts, lipomas, keloids, and different scar types. We discuss medical and procedural options to reduce symptoms, improve appearance, and prevent worsening.",
    benefits: [
      "Evaluates lumps and scar tissue accurately",
      "Improves painful or cosmetically bothersome lesions",
      "Helps manage keloid recurrence risk",
      "Supports scar revision planning"
    ],
    faqs: [
      { question: "Do keloids need special care?", answer: "Yes. Keloids often need a tailored approach because they can recur if treated like ordinary scars." },
      { question: "Are lipomas dangerous?", answer: "Most lipomas are benign, but they should still be clinically assessed before deciding on treatment." }
    ],
    duration: "30 mins"
  },
  {
    id: "rosacea-sensitive-skin",
    name: "Rosacea & Sensitive Skin Care",
    category: "aesthetic",
    description: "Management of facial redness, flushing, sensitivity, and reactive skin.",
    longDescription: "We help patients with rosacea and sensitive skin reduce redness, burning, and flare triggers. Treatment focuses on calming the skin barrier and selecting low-irritation procedures and skincare.",
    benefits: [
      "Reduces redness and facial flushing",
      "Calms burning and stinging sensations",
      "Identifies common trigger patterns",
      "Supports gentle skin-barrier repair"
    ],
    faqs: [
      { question: "Can sensitive skin still get procedures?", answer: "Yes, but they must be carefully selected and adjusted to the patient’s skin tolerance." },
      { question: "Is rosacea the same as acne?", answer: "No. It can look similar at times, but it is a different condition and needs different treatment." }
    ],
    duration: "30 mins"
  },
  {
    id: "pediatric-geriatric",
    name: "Pediatric & Geriatric Dermatology",
    category: "clinical",
    description: "Dermatology care for newborns, children, older adults, and age-specific skin issues.",
    longDescription: "We provide age-appropriate skin care for newborns, children, and older adults, addressing sensitive, chronic, and age-related dermatological concerns with safe, individualized treatment plans.",
    benefits: [
      "Offers age-specific dermatology care",
      "Supports newborn and child skin concerns",
      "Addresses age-related dryness and fragility",
      "Uses safer treatment selection for vulnerable groups"
    ],
    faqs: [
      { question: "Do you see newborn skin concerns?", answer: "Yes. Newborn and infant skin issues are evaluated with extra care and age-appropriate management." },
      { question: "Is geriatric skin care different?", answer: "Yes. Older skin is more fragile and often needs gentler treatment choices." }
    ],
    duration: "30 mins"
  },
  {
    id: "pregnancy-dermatosis",
    name: "Pregnancy-Induced Dermatosis",
    category: "clinical",
    description: "Care for skin problems that appear or worsen during pregnancy.",
    longDescription: "Pregnancy-related skin conditions are assessed carefully to protect both mother and baby. We help manage itching, rashes, pigment changes, and other pregnancy-associated dermatoses with safe treatment choices.",
    benefits: [
      "Uses pregnancy-conscious treatment planning",
      "Relieves itch and rash symptoms",
      "Addresses hormonal skin changes",
      "Supports maternal comfort and safety"
    ],
    faqs: [
      { question: "Are all skin medicines safe in pregnancy?", answer: "No. Treatment choice must be individualized, so medical supervision is important." },
      { question: "Can pregnancy worsen existing skin disease?", answer: "Yes. Pregnancy can change how some skin conditions behave." }
    ],
    duration: "30 mins"
  },
  {
    id: "sti-genital",
    name: "STIs & Genital Skin Disorders",
    category: "clinical",
    description: "Diagnosis and management of sexually transmitted infections and genital skin conditions.",
    longDescription: "We offer confidential evaluation and treatment for STIs and genital skin concerns, including infections, rashes, irritation, and recurrent symptoms. Care is discreet, evidence-based, and tailored to the diagnosis.",
    benefits: [
      "Confidential and discreet evaluation",
      "Treats infection and irritation causes",
      "Supports partner and recurrence counseling",
      "Helps prevent spread and reinfection"
    ],
    faqs: [
      { question: "Is this visit confidential?", answer: "Yes. We handle these concerns with privacy and professionalism." },
      { question: "Do genital symptoms always mean an STI?", answer: "No. Several non-STI skin conditions can affect the genital area as well." }
    ],
    duration: "30 mins"
  },
  {
    id: "skin-cancer-screening",
    name: "Skin Cancer Screening & Chronic Skin Care",
    category: "clinical",
    description: "Screening of suspicious lesions and long-term care for chronic skin conditions.",
    longDescription: "We evaluate suspicious moles, non-healing lesions, and chronic skin disorders to identify issues early and guide appropriate next steps. Chronic skin conditions are managed with structured follow-up and long-term planning.",
    benefits: [
      "Checks suspicious or changing lesions",
      "Supports early medical evaluation",
      "Helps manage chronic skin disease",
      "Provides structured follow-up care"
    ],
    faqs: [
      { question: "Should I get a changing mole checked?", answer: "Yes. Any lesion that grows, changes color, bleeds, or becomes painful should be assessed." },
      { question: "Do chronic skin conditions need follow-up?", answer: "Yes. Ongoing follow-up helps maintain control and adjust treatment when needed." }
    ],
    duration: "30 mins"
  },
  {
    id: "laser-procedures",
    name: "Laser Procedures",
    category: "aesthetic",
    description: "LASERS for hair reduction, resurfacing, acne scars, pigmentation, and tattoo removal.",
    longDescription: "We offer laser-based procedures for hair reduction, resurfacing, acne scar improvement, pigmentation correction, and tattoo removal. Treatment choice depends on skin type, concern, and expected recovery.",
    benefits: [
      "Targets multiple aesthetic concerns",
      "Improves acne scars and texture",
      "Reduces unwanted hair growth",
      "Supports pigment and tattoo treatment"
    ],
    faqs: [
      { question: "Are lasers suitable for every skin type?", answer: "Not every laser is ideal for every skin type, so the device and settings are selected carefully." },
      { question: "How many laser sessions are needed?", answer: "That depends on the concern being treated and the depth or extent of the problem." }
    ],
    duration: "45 mins"
  },
  {
    id: "mnrf",
    name: "Microneedling with Radiofrequency (MNRF)",
    category: "aesthetic",
    description: "Collagen remodelling treatment for deep scars, stretch marks, and skin tightening concerns.",
    longDescription: "MNRF uses microneedling plus radiofrequency energy to stimulate collagen remodelling and improve deeper scars, stretch marks, and skin texture. It is selected when a stronger regenerative procedure is needed.",
    benefits: [
      "Improves deep acne scars",
      "Helps remodel collagen",
      "Reduces stretch mark visibility",
      "Supports texture and skin tightening goals"
    ],
    faqs: [
      { question: "Is MNRF painful?", answer: "A numbing cream is usually used to improve comfort during the procedure." },
      { question: "How many sessions are usually needed?", answer: "It varies by the concern and severity, but multiple sessions are commonly recommended." }
    ],
    duration: "45 mins"
  },
  {
    id: "chemical-peels",
    name: "Chemical Peels",
    category: "aesthetic",
    description: "Chemical peels for acne, rejuvenation, party peel, pigmentation, and more.",
    longDescription: "Chemical peels are selected based on the problem being treated, such as acne, pigmentation, dullness, or pre-event glow. The peel strength and formulation are matched to the skin’s tolerance and treatment goal.",
    benefits: [
      "Helps acne and acne marks",
      "Improves glow and skin smoothness",
      "Targets pigmentation and tanning",
      "Can be tailored for event-ready skin"
    ],
    faqs: [
      { question: "Will I peel visibly after every session?", answer: "Not always. Some peels cause mild flaking, while others work with minimal visible peeling." },
      { question: "Are peels only for oily skin?", answer: "No. Different peel types can be chosen for multiple skin concerns and skin types." }
    ],
    duration: "30 mins"
  },
  {
    id: "prp",
    name: "PRP Injections",
    category: "hair",
    description: "Platelet-rich plasma injections for hair restoration and selected skin rejuvenation goals.",
    longDescription: "PRP uses your own platelet-rich plasma to support hair fall treatment and selected regenerative skin procedures. It is commonly used as part of hair restoration protocols and can be combined with other treatments.",
    benefits: [
      "Supports hair fall treatment",
      "Uses the body’s own growth factors",
      "Can complement scalp procedures",
      "May help selected regenerative skin goals"
    ],
    faqs: [
      { question: "Is PRP a medication?", answer: "No. It is an autologous procedure that uses plasma prepared from your own blood." },
      { question: "Can PRP be combined with other treatments?", answer: "Yes. It is often used with other hair and skin procedures when appropriate." }
    ],
    duration: "45 mins"
  },
  {
    id: "anti-aging",
    name: "Anti-Ageing Skin Procedures",
    category: "aesthetic",
    description: "Natural-looking anti-ageing procedures to soften fine lines, restore volume, and refresh the skin.",
    longDescription: "We provide personalized anti-ageing procedures that may include injectables, skin boosters, and other rejuvenation strategies. The goal is to maintain a natural look while improving wrinkles, volume loss, and overall skin quality.",
    benefits: [
      "Smooths dynamic lines (crow's feet, forehead, frown lines)",
      "Restores lost facial volume with natural fillers",
      "Boosts skin elasticity and native collagen synthesis",
      "Provides a subtle, refreshed, non-surgical facelift"
    ],
    faqs: [
      { question: "How long do the results last?", answer: "Anti-wrinkle treatments typically last 4-6 months, while dermal fillers and volume restorers can last 9 to 18 months." },
      { question: "Does the treatment hurt?", answer: "We apply a medical-grade topical numbing cream beforehand, and use ultra-fine needles, making the procedure highly comfortable." }
    ],
    duration: "60 mins"
  },
  {
    id: "iv-glutathione",
    name: "IV Glutathione Therapy",
    category: "aesthetic",
    description: "IV glutathione for wellness, pigment control, and antioxidant support.",
    longDescription: "IV glutathione therapy is used as a wellness and antioxidant-focused treatment with pigment-control goals in selected cases. Suitability, frequency, and safety should always be determined medically.",
    benefits: [
      "Supports antioxidant wellness goals",
      "May help selected pigment-control plans",
      "Can complement broader aesthetic care",
      "Delivered under medical supervision"
    ],
    faqs: [
      { question: "Is IV glutathione for everyone?", answer: "No. It should only be considered after medical review to confirm suitability." },
      { question: "Can it be part of a broader treatment plan?", answer: "Yes. It may be used alongside other procedures where clinically appropriate." }
    ],
    duration: "30 mins"
  },
  {
    id: "hair-scalp",
    name: "Hair Restoration & Scalp Therapy",
    category: "hair",
    description: "Clinical solutions for hair thinning, alopecia, and dry scalp, featuring PRP and advanced growth factor micro-infusion.",
    longDescription: "Hair health starts at the scalp. We offer clinical diagnosis and evidence-based treatments for male/female pattern hair loss, telogen effluvium, and scalp disorders. Procedures include Platelet-Rich Plasma (PRP) therapy and Growth Factor Concentrate (GFC) injections that revive dormant hair follicles and promote thick, healthy hair.",
    benefits: [
      "Stimulates natural hair regrowth and density",
      "Reduces excessive hair shedding and breakage",
      "Nourishes hair follicles with vital growth factors",
      "Improves overall scalp health and circulation"
    ],
    faqs: [
      { question: "Is PRP hair therapy safe?", answer: "Absolutely. PRP uses your own blood plasma, meaning there is zero risk of allergic reactions or side effects." },
      { question: "How soon can I see results?", answer: "Hair growth is a gradual process. Initial reduction in hair fall is seen in 2 sessions, with new hair growth visible within 3 to 6 months." }
    ],
    duration: "45 mins"
  },
  {
    id: "clinical-derm",
    name: "General & Pediatric Dermatology",
    category: "clinical",
    description: "Expert medical care for skin conditions like Eczema, Psoriasis, Vitiligo, Rosacea, hives, and pediatric skin allergies.",
    longDescription: "From infants to senior citizens, we diagnose and treat a wide range of pathological skin conditions. Dr. Aishwarya Devaraj delivers compassionate, evidence-based management for chronic conditions like Psoriasis, Vitiligo, Atopic Dermatitis, drug rashes, and fungal infections, focusing on both clinical recovery and quality of life.",
    benefits: [
      "Accurate diagnostics for complex dermatological rashes",
      "Targeted symptom management and long-term remission",
      "Safe, child-friendly pediatric skin treatments",
      "Patient education on flare-up triggers and skin care"
    ],
    faqs: [
      { question: "Do you treat chronic conditions like Psoriasis?", answer: "Yes, Dr. Aishwarya has specialized clinical experience in chronic disease management and offers personalized systemic, topical, and lifestyle modification plans." },
      { question: "Can I consult for a baby's skin rash?", answer: "Yes, we offer safe, gentle pediatric dermatology consultations for eczema, cradle cap, and childhood skin allergies." }
    ],
    duration: "30 mins"
  },
  {
    id: "hydrafacial",
    name: "AuraeGlow Hydradermabrasion",
    category: "aesthetic",
    description: "A premium multi-step medical facial that cleanses, exfoliates, extracts impurities, and infuses active antioxidant serums.",
    longDescription: "Our signature medical facial uses fluid vortex technology to vacuum away blackheads, sebum, and dry dead skin cells while simultaneously bathing the skin in nutrient-rich serums containing hyaluronic acid, peptides, and vitamin complexes for instant, brilliant radiance.",
    benefits: [
      "Instantly clears blackheads and clogged pores",
      "Deeply hydrates and plumps skin layers",
      "Softens fine lines and improves overall skin tone",
      "Zero downtime - perfect before special events"
    ],
    faqs: [
      { question: "Is this suitable for sensitive skin?", answer: "Yes! The treatment is fully customizable. We adjust the suction and use ultra-soothing serums tailored specifically for sensitive or reactive skin." },
      { question: "Can I wear makeup immediately after?", answer: "We recommend letting the nourishing serums absorb for at least 4-6 hours, but you can resume normal makeup and skincare the next morning." }
    ],
    duration: "50 mins"
  }
];

export const EDUCATION_MILESTONES = [
  {
    degree: "Fellowship in Aesthetic Dermatology (FRGUHS)",
    institution: "Bangalore Medical College & Research Institute, Bangalore",
    period: "Oct 2022 - Sept 2023",
    description: "Advanced clinical training in high-end cosmetic dermatology procedures, lasers, anti-aging injections, and advanced chemical peels."
  },
  {
    degree: "MD Dermatology, Venereology & Leprosy",
    institution: "Mahatma Gandhi Medical College & Research Institute, Puducherry",
    period: "May 2019 - June 2022",
    description: "Secured extensive academic excellence and research credentials. Specialized in complex clinical dermatology, clinical trials, and dermato-pathology."
  },
  {
    degree: "MBBS",
    institution: "MVJ Medical College & Research Hospital, Bangalore",
    period: "2011 - 2017",
    description: "Completed comprehensive undergraduate medical training and rotations, securing strong foundational knowledge in medicine and surgery."
  }
];

export const EXPERIENCES = [
  {
    role: "Founder and consultant",
    organization: "Auraederm Skin Solutions, Sector 23, Gurugram",
    period: "2026 - Present",
   description: "Founded Auraederm Skin Solutions with a vision to provide ethical, evidence-based dermatology care while offering comprehensive diagnosis, treatment, and advanced skin, hair, and aesthetic procedures."},
  {
    role: "Consultant Dermatologist",
    organization: "Manipal Hospital, Palam Vihar, Gurugram",
    period: "Dec 2023 - Present",
    description: "Consultant Dermatologist providing comprehensive diagnosis, treatment, and long-term management of skin, hair, and nail disorders, with a patient-centered and evidence-based approach."
  },
  {
    role: "Junior Resident (Department of DVL)",
    organization: "Mahatma Gandhi Medical College, Puducherry",
    period: "May 2019 - June 2022",
    description: "Diagnosed and managed thousands of outpatient and inpatient clinical cases, conducted clinical trials, taught undergraduate students, and presented award-winning research papers."
  },
  {
    role: "Resident Intern",
    organization: "MVJ Medical College & Research Hospital, Bangalore",
    period: "Aug 2016 - Aug 2017",
    description: "Hands-on clinical internship across multiple departments including dermatology, emergency medicine, general surgery, and pediatrics."
  }
];

export const COMMUNITY_WELFARE = [
  {
    title: "Psoriasis & Vitiligo Support",
    description: "Organized and facilitated dedicated awareness camps in hospital OPDs to dispel myths and stigma surrounding Psoriasis and Vitiligo."
  },
  {
    title: "Rural Healthcare Outreaches",
    description: "Conducted multiple free medical camps in the remote villages of Puducherry, distributing free medications and diagnosing critical skin diseases."
  },
  {
    title: "COVID-19 Village Surveys",
    description: "Volunteered in rural health surveys and direct patient care in Puducherry villages under government initiatives during national lockdowns."
  },
  {
    title: "Scabies & Hygiene Education",
    description: "Distributed medical pamphlets and conducted interactive sessions on Dermatophytosis (fungal infection) prevention and daily hygiene in rural clinics."
  }
];

export const TESTIMONIALS = [
  {
    name: "Rohan Malhotra",
    text: "Dr. Aishwarya completely cured my severe cystic acne. I had visited several clinics before, but her patient-first approach and customized chemical peels made all the difference. Highly recommend!",
    treatment: "Advanced Acne Therapy",
    rating: 5
  },
  {
    name: "Dr. Priya Sharma",
    text: "As a fellow physician, I can attest to Dr. Aishwarya's profound clinical knowledge. Her fellowship in aesthetics is evident in the natural and beautiful dermal fillers she does. She is incredibly gentle and detailed.",
    treatment: "Anti-Aging Filler Lift",
    rating: 5
  },
  {
    name: "Ananya Goel",
    text: "Loved the AuraeGlow facial! My skin was glowing for weeks. The clinic in Sector 23 is stunningly designed, hygienic, and the staff is extremely professional.",
    treatment: "AuraeGlow Hydradermabrasion",
    rating: 5
  },
  {
    name: "Vikram Jeet",
    text: "I was struggling with heavy hair fall and thinning. Dr. Aishwarya recommended GFC therapy. After just 3 sessions, my hair shedding has stopped, and I can see thick, healthy regrowth.",
    treatment: "GFC Scalp Therapy",
    rating: 5
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: 1,
    title: "Active Acne Clear-Up",
    subtitle: "Dermatologist-designed 4-Month Regimen",
    duration: "16 weeks",
    before: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400", // abstract or matching skin patterns
    after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
    description: "Comprehensive medical therapy combined with 4 sessions of salicylic chemical peels."
  },
  {
    id: 2,
    title: "Hyperpigmentation & Glow",
    subtitle: "Medical Peels & Active Skincare",
    duration: "8 weeks",
    before: "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=400",
    after: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400",
    description: "Rejuvenating chemical peels to lift deep melasma, dark spots, and dull skin tone."
  },
  {
    id: 3,
    title: "Hair Density Restoration",
    subtitle: "Platelet-Rich Plasma (PRP) Therapy",
    duration: "24 weeks",
    before: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400",
    after: "https://images.unsplash.com/photo-1501554724053-cd4a4b6844df?auto=format&fit=crop&q=80&w=400",
    description: "6 sessions of high-yield PRP therapy coupled with personalized scalp therapeutics."
  }
];

export const SKINCARE_ROUTINES: Record<string, SkinRoutineResult> = {
  oily_acne: {
    skinType: "Oily & Acne-Prone Skin",
    morning: [
      { step: "Cleanser", product: "Salicylic Acid (2%) Foaming Cleanser", description: "Gently washes off overnight sebum, penetrates pores, and prevents clogging." },
      { step: "Treatment Serum", product: "Niacinamide (10%) + Zinc (1%) Serum", description: "Controls excess oil production, refines pores, and reduces redness." },
      { step: "Moisturizer", product: "Ultra-Lightweight Oil-Free Gel Moisturizer", description: "Locks in hydration without feeling heavy or clogging pores." },
      { step: "Sunscreen", product: "Broad-Spectrum SPF 50 Matte-Gel Sunscreen", description: "Protects from UVA/UVB rays. Mandatory to prevent post-acne dark marks." }
    ],
    evening: [
      { step: "Cleanser", product: "Gentle Salicylic Cleanser", description: "Removes dirt, pollution, and oil accumulated during the day." },
      { step: "Active Treatment", product: "Adapalene (0.1%) or Retinol Serum", description: "Promotes skin cell turnover, clears microcomedones, and smooths texture. Apply a pea-sized amount." },
      { step: "Moisturizer", product: "Ceramide-Infused Soothing Gel Cream", description: "Restores skin barrier health and prevents dryness caused by actives." }
    ],
    proTips: [
      "Avoid scrubbing active pimples to prevent inflammation and scarring.",
      "Look for labels that say 'Non-Comedogenic' and 'Oil-Free'.",
      "Keep dynamic treatments localized or apply Retinol only 2-3 nights a week to start."
    ]
  },
  dry_dull: {
    skinType: "Dry, Dehydrated & Dull Skin",
    morning: [
      { step: "Cleanser", product: "Hydrating Cream-to-Foam Cleanser", description: "Cleanses without stripping the skin's natural moisturizing factors." },
      { step: "Hydration Boost", product: "Hyaluronic Acid (2%) Serum on Damp Skin", description: "Draws and binds moisture into the deep skin layers for a plump look." },
      { step: "Antioxidant", product: "Vitamin C (10%) Serum", description: "Brightens skin tone, fights free radical damage, and boosts collagen." },
      { step: "Moisturizer & SPF", product: "Rich Ceramide Cream + Broad Spectrum SPF 50 Cream", description: "Seals in hydration and provides a dewy, glowing protective shield." }
    ],
    evening: [
      { step: "Cleanser", product: "Gentle Cream Cleanser", description: "Mild formula that removes impurities while respecting dry skin." },
      { step: "Repair Serum", product: "Peptide or Squalane Facial Oil", description: "Supports cellular repair and deeply nourishes damaged skin barrier." },
      { step: "Moisturizer", product: "Intense Barrier-Restoring Night Cream", description: "Rich, creamy lotion packed with Ceramides, Shea Butter, and Glycerin to repair overnight." }
    ],
    proTips: [
      "Apply your Hyaluronic Acid serum on damp skin to maximize its hydration power.",
      "Avoid long hot showers, which strip natural lipids from your skin.",
      "Consider sleeping with a humidifier nearby during cold or dry months."
    ]
  },
  sensitive_red: {
    skinType: "Sensitive & Reactive Skin (Rosacea-Prone)",
    morning: [
      { step: "Cleanser", product: "Ultra-Mild, Soap-Free Cleansing Lotion", description: "Zero fragrance, non-foaming formula that calms the skin." },
      { step: "Soothing Serum", product: "Centella Asiatica (Cica) or Panthenol Serum", description: "Instantly dampens redness and repairs sensitive skin barrier." },
      { step: "Moisturizer", product: "Hypoallergenic Calming Gel Moisturizer", description: "Ultra-clean formulation that provides cool, weightless hydration." },
      { step: "Sunscreen", product: "100% Mineral (Zinc Oxide) SPF 50 Sunscreen", description: "Physical sunscreen is gentler on sensitive skin compared to chemical filters." }
    ],
    evening: [
      { step: "Cleanser", product: "Soap-Free Soothing Cleanser", description: "Gently lifts impurities without disrupting pH balance." },
      { step: "Calming Repair", product: "Azelaic Acid (10%) Cream", description: "Reduces clinical redness, rosacea flare-ups, and calms inflammation." },
      { step: "Moisturizer", product: "Fragrance-Free Ceramide Repair Balm", description: "Reinforces the weakened epidermal barrier while you sleep." }
    ],
    proTips: [
      "Always patch-test new skincare products on your inner wrist or jawline for 24 hours.",
      "Avoid products containing denatured alcohol, synthetic fragrances, and essential oils.",
      "Use lukewarm or cool water for washing your face."
    ]
  },
  combination: {
    skinType: "Combination Skin (Oily T-Zone, Dry Cheeks)",
    morning: [
      { step: "Cleanser", product: "pH-Balanced Gentle Foaming Cleanser", description: "Cleanses oily areas while remaining gentle enough on dry cheeks." },
      { step: "Balance Serum", product: "Niacinamide (5%) Serum", description: "Perfect all-rounder that regulates oil in the T-zone while hydrating cheeks." },
      { step: "Moisturizer", product: "Lightweight Hyaluronic Gel-Cream", description: "Provides adaptive hydration without clogging oily pores." },
      { step: "Sunscreen", product: "Ultra-Light Fluid SPF 50 Sunscreen", description: "Lightweight, non-greasy shield that sits perfectly on combination skin." }
    ],
    evening: [
      { step: "Cleanser", product: "Gentle Balancing Cleanser", description: "Maintains optimal moisture balance across differing facial zones." },
      { step: "Treatment", product: "Gentle Lactic Acid (5%) or Mild Retinol (twice a week)", description: "Provides mild resurfacing for dry zones and pore clearing for the T-zone." },
      { step: "Moisturizer", product: "Double-Zone Moisturization", description: "Apply a light layer overall, adding an extra dab of rich cream on dry cheeks if needed." }
    ],
    proTips: [
      "Multi-masking is key: use charcoal masks on the nose/forehead and hydrating masks on cheeks.",
      "Listen to your skin: adjust your moisturizer thickness depending on seasonal humidity.",
      "Focus active treatments on zones that require them (e.g. salicylic acid on congested areas)."
    ]
  }
};
