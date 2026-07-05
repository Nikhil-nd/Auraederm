import { ServiceDetail, SkinRoutineResult } from './types';

export const CLINIC_INFO = {
  name: "Auraederm Skin Solutions",
  doctorName: "Dr. Aishwarya Devaraj",
  title: "Clinical & Aesthetic Dermatologist",
  tagline: "Expert Care for Healthy, Radiant Skin",
  phone: "+91 9740392626",
  email: "aishwaryadevraj.adha@gmail.com",
  instagram: "aishwarya_raj26",
  address: "Auraderm, Sector 23, Gurugram, Haryana, India",
  googleMapsMockUrl: "https://maps.google.com/maps?q=28.5113708,77.0480877&hl=en&z=18&output=embed",
  timings: [
    { days: "Monday - Saturday", hours: "10:00 AM - 07:00 PM" },
    { days: "Sunday", hours: "By Appointment Only" }
  ]
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "acne-treatment",
    name: "Advanced Acne & Scar Management",
    category: "clinical",
    description: "Customized clinical treatments targeting acne at its root, including chemical peels, comedone extraction, and scar reduction.",
    longDescription: "Our comprehensive acne program combines oral and topical therapeutics with state-of-the-art procedures. Dr. Aishwarya Devaraj conducts a complete skin analysis to identify the grade of acne (Grade I-IV) and designs a custom regimen of clinical extractions, medical-grade chemical peels, and advanced laser/microneedling therapies for post-acne scars.",
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
    id: "aesthetic-peels",
    name: "Medical Chemical Peels",
    category: "aesthetic",
    description: "Gentle yet effective chemical resurfacing to treat pigmentation, sun damage, fine lines, and uneven skin tone.",
    longDescription: "We use premium, dermatologist-approved chemical agents (such as Salicylic, Glycolic, Lactic, and Yellow Peels) to gently exfoliate the damaged top layers of your skin. This stimulates cellular turnover and collagen production, revealing fresh, luminous, and evenly toned skin underneath.",
    benefits: [
      "Brightens dull and fatigued skin",
      "Fades dark spots, melasma, and blemishes",
      "Refines enlarged pores and smooths texture",
      "Restores natural youthful glow"
    ],
    faqs: [
      { question: "Will my skin literally peel off?", answer: "Not always. Modern superficial peels work at a cellular level and cause invisible or very fine micro-flaking rather than dramatic sheets of peeling skin." },
      { question: "How should I care for my skin post-peel?", answer: "Moisturization and rigorous sun protection (SPF 50+) are mandatory for 7 days post-treatment. Avoid active exfoliants like retinoids." }
    ],
    duration: "30 mins"
  },
  {
    id: "anti-aging",
    name: "Anti-Aging & Skin Rejuvenation",
    category: "aesthetic",
    description: "Dermal fillers, botulinum toxin, and collagen stimulators to restore volume, smooth fine lines, and lift sagging skin.",
    longDescription: "Dr. Aishwarya Devaraj specializes in natural-looking anti-aging enhancements. Utilizing her advanced Fellowship training, she provides tailored therapies such as anti-wrinkle injections, dermal fillers to restore cheek and jawline volume, and specialized skin-boosters (like hyaluronic acid micro-injections) to deeply hydrate and lift the skin.",
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
    organization: "Auraderm Skin Solutions, Sector 23, Gurugram",
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
