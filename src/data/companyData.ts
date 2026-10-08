import openMouldHeroImgAsset from '../assets/images/injection_mould_press_open_1791345438856.jpg.asset.json';
const openMouldHeroImg = openMouldHeroImgAsset.url;
import heroInjectionMouldImgAsset from '../assets/images/hero_injection_moulding_1791344816956.jpg.asset.json';
const heroInjectionMouldImg = heroInjectionMouldImgAsset.url;
import haasVmcImgAsset from '../assets/images/haas_vmc_machining_1791344829999.jpg.asset.json';
const haasVmcImg = haasVmcImgAsset.url;
import cadProductDesignImgAsset from '../assets/images/cad_product_design_1791344841891.jpg.asset.json';
const cadProductDesignImg = cadProductDesignImgAsset.url;
import injectionFacilityImgAsset from '../assets/images/injection_molding_facility_1791344853234.jpg.asset.json';
const injectionFacilityImg = injectionFacilityImgAsset.url;
import reviewsFactoryWideImgAsset from '../assets/images/reviews_factory_wide_1791344867162.jpg.asset.json';
const reviewsFactoryWideImg = reviewsFactoryWideImgAsset.url;
import founderPortraitImgAsset from '../assets/images/founder_portrait_1791344880828.jpg.asset.json';
const founderPortraitImg = founderPortraitImgAsset.url;
import thinWallPackagingImgAsset from '../assets/images/thin_wall_packaging_1791344893213.jpg.asset.json';
const thinWallPackagingImg = thinWallPackagingImgAsset.url;
import jewelleryBoxesImgAsset from '../assets/images/jewellery_boxes_1791344906090.jpg.asset.json';
const jewelleryBoxesImg = jewelleryBoxesImgAsset.url;
import plasticPartsCustomImgAsset from '../assets/images/plastic_parts_custom_1791344922773.jpg.asset.json';
const plasticPartsCustomImg = plasticPartsCustomImgAsset.url;
import oemProductionCellImgAsset from '../assets/images/oem_production_cell_1791344935450.jpg.asset.json';
const oemProductionCellImg = oemProductionCellImgAsset.url;
import toolroomFittingBenchImgAsset from '../assets/images/toolroom_fitting_bench_1791344948737.jpg.asset.json';
const toolroomFittingBenchImg = toolroomFittingBenchImgAsset.url;
import sanitaryFluidImgAsset from '../assets/images/sanitary_plumbing_parts_1791344960420.jpg.asset.json';
const sanitaryFluidImg = sanitaryFluidImgAsset.url;
import cmmQualityLabImgAsset from '../assets/images/cmm_quality_lab_1791345342335.jpg.asset.json';
const cmmQualityLabImg = cmmQualityLabImgAsset.url;
import automotiveClipsImgAsset from '../assets/images/automotive_nylon_clips_1791345361571.jpg.asset.json';
const automotiveClipsImg = automotiveClipsImgAsset.url;
import electricalSwitchgearImgAsset from '../assets/images/electrical_switchgear_parts_1791345377549.jpg.asset.json';
const electricalSwitchgearImg = electricalSwitchgearImgAsset.url;
import irrigationDripImgAsset from '../assets/images/irrigation_drip_fittings_1791345389523.jpg.asset.json';
const irrigationDripImg = irrigationDripImgAsset.url;
import consumerHousingsImgAsset from '../assets/images/consumer_housings_1791345416221.jpg.asset.json';
const consumerHousingsImg = consumerHousingsImgAsset.url;
import toyComponentsImgAsset from '../assets/images/toy_components_molded_1791345405093.jpg.asset.json';
const toyComponentsImg = toyComponentsImgAsset.url;
import applicationsHeroImgAsset from '../assets/images/applications_sectors_hero_1791346836260.jpg.asset.json';
const applicationsHeroImg = applicationsHeroImgAsset.url;
import contactExteriorImgAsset from '../assets/images/contact_plant_exterior_1791346820103.jpg.asset.json';
const contactExteriorImg = contactExteriorImgAsset.url;

import { CapabilityItem, IndustryItem, ProcessStage, FaqItem } from '../types';

export interface DetailedCapability extends CapabilityItem {
  detailedSpecs?: {
    toolSteel: string;
    cavityRange: string;
    cycleTime: string;
    tolerance: string;
    typicalResins: string;
    surfaceFinish: string;
  };
  useCases?: string[];
}

export const COMPANY_INFO = {
  name: "ADVAY ENGINEERS",
  tagline: "Redefine Excellence",
  subTagline: "Precision Moulds. Reliable Manufacturing.",
  bullets: "Injection Moulds • Engineering Plastic Components • OEM Manufacturing",
  description: "From product development and precision tooling to injection moulding and production — engineered for consistency, quality and dependable performance.",
  established: "2016",
  location: "Rajkot, Gujarat, India",
  founder: {
    name: "Keyur Vaghani",
    title: "Founder & Managing Director",
    experience: "15+ Years in Toolroom Engineering & Injection Moulding",
    bio: "Passionate toolmaker and manufacturing entrepreneur dedicated to precision engineering. Established Advay Engineers in 2016 in Rajkot with the vision of providing turnkey, high-precision injection tooling and zero-defect OEM plastic components under one unified facility.",
    image: founderPortraitImg
  },
  address: {
    line1: "SR. No. 202, Plot No. 51, Shed No. 51A",
    line2: "Opp. Inova Cast, Essen Road, Veraval (Shapar)",
    city: "Rajkot",
    pincode: "360024",
    state: "Gujarat",
    country: "India"
  },
  phones: [
    { label: "+91 99746 98789", raw: "+919974698789" },
    { label: "+91 88666 04575", raw: "+918866604575" }
  ],
  whatsapp: "+919974698789",
  email: "advayengineers1@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/advay.engineers/",
    facebook: "https://www.facebook.com/advayengineers",
    linkedin: "https://www.linkedin.com/company/advay-engineers",
    youtube: "https://www.youtube.com/@advayengineers"
  },
  images: {
    hero: openMouldHeroImg,
    mouldCore: heroInjectionMouldImg,
    haasVmc: haasVmcImg,
    facility: injectionFacilityImg,
    cadDesign: cadProductDesignImg,
    injectionPress: injectionFacilityImg,
    oemCell: oemProductionCellImg,
    plasticParts: plasticPartsCustomImg,
    thinWall: thinWallPackagingImg,
    jewelleryBoxes: jewelleryBoxesImg,
    toolroomBench: toolroomFittingBenchImg,
    reviewsFactory: reviewsFactoryWideImg,
    founder: founderPortraitImg,
    cmmQuality: cmmQualityLabImg,
    applicationsHero: applicationsHeroImg,
    contactExterior: contactExteriorImg
  }
};

export const CAPABILITIES: DetailedCapability[] = [
  {
    id: "precision-injection-moulds",
    name: "Precision Injection Moulds",
    description: "Design and manufacturing of production-ready injection moulds engineered for accuracy, repeatability and dependable performance. Fabricated using hardened tool steels with microscopic dimensional precision, cooling circuit optimization, and long tool life.",
    iconName: "Layers",
    image: heroInjectionMouldImg,
    keyPoints: [
      "Rigid hardened tool steel core & cavity inserts",
      "Optimized cooling circuits for fast cycle times",
      "Guaranteed micron accuracy & high dimensional stability"
    ],
    detailedSpecs: {
      toolSteel: "P20, H13, DIN 1.2316, Stavax Hardened (48-52 HRC)",
      cavityRange: "1 to 32 Cavity Tooling Architectures",
      cycleTime: "High-Speed Cycling with Balanced Conformal Cooling",
      tolerance: "±0.005 mm Machining & Toolroom Tolerance",
      typicalResins: "PA66, POM, PC, ABS, PBT, Polypropylene, TPE",
      surfaceFinish: "SPI A2 Diamond Mirror Polish or EDM VDI Texture"
    },
    useCases: [
      "Multi-cavity engineering component moulds",
      "Thin-wall container and enclosure tooling",
      "Insert moulding and unscrewing thread moulds",
      "Hot runner & cold runner valve gate configurations"
    ]
  },
  {
    id: "injection-moulding",
    name: "Injection Moulding Production",
    description: "Manufacturing of engineering plastic components with focus on consistency, process control and reliable production. Automated injection machines processing technical resins with closed-loop parameter monitoring.",
    iconName: "Cog",
    image: injectionFacilityImg,
    keyPoints: [
      "Automatic injection molding production cell",
      "Engineering polymer processing (PA66, PC, POM, ABS)",
      "Batch-to-batch repeatability and flash-free quality"
    ],
    detailedSpecs: {
      toolSteel: "High-Duty Automatic Microprocessor Machines",
      cavityRange: "Shot Capacities from 10 grams to 450 grams",
      cycleTime: "Continuous 24/7 Automated Production Runs",
      tolerance: "±0.02 mm Component Molding Repeatability",
      typicalResins: "Engineering Grade GF-Nylon, Polycarbonate, POM, Delrin",
      surfaceFinish: "Flash-free, uniform wall thickness, zero sink marks"
    },
    useCases: [
      "High-volume automotive and electrical components",
      "Consumer plastic cases and precision closures",
      "Agricultural irrigation fittings and drippers",
      "Industrial gears, wear bushes, and valve bodies"
    ]
  },
  {
    id: "oem-manufacturing",
    name: "OEM Manufacturing",
    description: "End-to-end manufacturing support for businesses looking for a dependable long-term production partner. From custom mould fabrication through trials, sampling, and volume manufacturing scheduled to assembly lines.",
    iconName: "Factory",
    image: oemProductionCellImg,
    keyPoints: [
      "Turnkey contract component supply agreements",
      "In-house tooling custody, routine service & maintenance",
      "Strict NDA confidentiality and on-schedule delivery"
    ],
    detailedSpecs: {
      toolSteel: "Tooling Custody & Life-Cycle Tool Room Maintenance",
      cavityRange: "Scheduled Monthly OEM Dispatch Calendars",
      cycleTime: "Full Traceability with Batch Inspection Reports",
      tolerance: "100% Quality Assurance to Drawing Standards",
      typicalResins: "Customer-specified certified polymer raw materials",
      surfaceFinish: "Custom branding, pad printing, and secondary assembly"
    },
    useCases: [
      "Contract manufacturing for switchgear and power tools",
      "White-label industrial machinery plastic components",
      "Turnkey assembly and sub-component packaging",
      "Long-term OEM master supply agreements"
    ]
  },
  {
    id: "product-development",
    name: "Product Development & DFM",
    description: "Engineering support from concept and component development through tooling, trials and production. Translating functional customer ideas into production-ready 3D CAD models optimized for plastic flow feasibility.",
    iconName: "PenTool",
    image: cadProductDesignImg,
    keyPoints: [
      "DFM plastic flow analysis & gate placement",
      "Draft angles, parting lines & uniform wall thickness checks",
      "Polymer material feasibility & structural optimization"
    ],
    detailedSpecs: {
      toolSteel: "3D Parametric CAD/CAM Workstations",
      cavityRange: "STEP, IGES, Parasolid, DXF, DWG Compatibility",
      cycleTime: "Rapid 48-Hour DFM Feasibility Analysis",
      tolerance: "Nominal CAD 3D Solid Model Verification",
      typicalResins: "Resin recommendation based on operating environment",
      surfaceFinish: "DFM reports indicating sink risk and parting lines"
    },
    useCases: [
      "Plastic part weight and structural optimization",
      "Conversion of metal parts to engineering plastics",
      "Snap-fit geometry and living hinge design",
      "Pre-tooling mold flow and gate location consultation"
    ]
  },
  {
    id: "custom-plastic-components",
    name: "Custom Engineering Plastic Components",
    description: "Application-specific plastic components developed and manufactured to customer drawings. Engineered to withstand demanding mechanical, thermal, dielectric, and environmental operating conditions.",
    iconName: "Box",
    image: plasticPartsCustomImg,
    keyPoints: [
      "Application-tailored engineering polymers",
      "Functional snap fits, threads & internal ribs",
      "Tight geometric tolerances conforming to CAD models"
    ],
    detailedSpecs: {
      toolSteel: "Custom Geometry Conforming to 2D/3D Drawings",
      cavityRange: "Small to Medium and High Volume Runs",
      cycleTime: "Optimized for dimensional stability and heat aging",
      tolerance: "Strict geometric dimensioning and tolerancing (GD&T)",
      typicalResins: "Glass-filled nylon, PEEK, Delrin, ABS/PC blend",
      surfaceFinish: "Aesthetic matte, gloss, or spark erosion texture"
    },
    useCases: [
      "Automotive cable clips and electrical sensor housings",
      "Pneumatic valve bodies, manifolds, and wear bushings",
      "Sanitary plumbing components and water meters",
      "Precision toy gears and structural figurines"
    ]
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: "Product Development",
    description: "Early-stage engineering collaboration, part feasibility review, and DFM optimization.",
    image: cadProductDesignImg,
    details: "Our engineering team evaluates customer 2D/3D part drawings for injection feasibility. We verify draft angles, wall thickness uniformity, parting lines, and select the optimal engineering resin for mechanical and thermal performance.",
    keyDeliverables: [
      "3D CAD Solid Model validation (STEP/IGES)",
      "DFM flow feasibility & sink mark risk analysis",
      "Resin recommendation & shrinkage optimization"
    ]
  },
  {
    step: "02",
    title: "Mould Design",
    description: "Full 3D parametric tool engineering, runner sizing, cooling layout, and kinematics.",
    image: openMouldHeroImg,
    details: "Precision tool design built around component geometry. We design balanced cooling circuits, sliding mechanisms, lifters, unscrewing cores, and optimized hot/cold runner gating systems for fast, reliable cycles.",
    keyDeliverables: [
      "Parametric 3D mould assembly architecture",
      "Balanced cooling water line circuits",
      "Hardened core/cavity insert engineering"
    ]
  },
  {
    step: "03",
    title: "Tool Manufacturing",
    description: "High-precision Haas VMC machining, EDM erosion, surface grinding, and bench fitting.",
    image: haasVmcImg,
    details: "Precision machining utilizing our Haas CNC Vertical Machining Centers, precision spark EDM, surface grinders, and skilled fitting benches to achieve sub-micron tolerances on certified tool steels.",
    keyDeliverables: [
      "High-speed Haas CNC milling & 3D profiling",
      "Mirror-finish surface grinding & spark erosion",
      "Mould alignment, guide pin & slide bench fitting"
    ]
  },
  {
    step: "04",
    title: "Mould Trial & Validation",
    description: "First trial sampling, parameter baselining, and optical/dimensional validation.",
    image: heroInjectionMouldImg,
    details: "Rigorous T0 and T1 sampling trials on dedicated automatic injection molding presses. We baseline cycle parameters, verify part ejection, and measure critical dimensions against nominal CAD geometry.",
    keyDeliverables: [
      "Initial T0/T1 trial component sampling",
      "Molding process parameter baselining",
      "Optical & tactile dimensional verification"
    ]
  },
  {
    step: "05",
    title: "Injection Moulding",
    description: "Component manufacturing on automatic injection molding machines with strict process controls.",
    image: injectionFacilityImg,
    details: "Dedicated serial manufacturing setup of automatic injection molding machines. Closed-loop process control ensures uniform wall density, high dimensional repeatability, and flash-free parts.",
    keyDeliverables: [
      "Continuous microprocessor-controlled production",
      "Engineering plastics processing (PA66, POM, PC, ABS)",
      "Strict barrel temperature & cycle time stability"
    ]
  },
  {
    step: "06",
    title: "Quality Inspection",
    description: "In-process monitoring, CAD comparison, and final dimensional inspection.",
    image: cmmQualityLabImg,
    details: "Metrology verification utilizing tactile 3D CMM probes, digital profile projectors, and height gauges. We ensure 100% adherence to customer geometric tolerance specifications before release.",
    keyDeliverables: [
      "3D CMM coordinate measuring probe reports",
      "First Article Inspection (FAI) ballooned approvals",
      "Zero-defect pre-shipment quality audit"
    ]
  },
  {
    step: "07",
    title: "Production & Supply",
    description: "Repeatable batch manufacturing, packaging, and scheduled supply to assembly lines.",
    image: plasticPartsCustomImg,
    details: "Scheduled contract production runs, protective part packaging, and dependable batch dispatches tailored to your just-in-time (JIT) assembly line schedules pan-India.",
    keyDeliverables: [
      "Custom protective packaging & labeling",
      "Material test certificates & batch traceability",
      "Pan-India scheduled delivery coordination"
    ]
  }
];

export const INFRASTRUCTURE_HIGHLIGHTS = [
  {
    title: "In-House Toolroom",
    description: "Dedicated mould development and manufacturing capability.",
    sub: "TOOLROOM",
    image: toolroomFittingBenchImg,
    detail: "Equipped with dedicated mould fitting benches, precision surface grinders, and specialized assembly infrastructure for complete mould fabrication."
  },
  {
    title: "Haas VMC Machining",
    description: "Precision machining support for mould components, profiles and tooling requirements.",
    sub: "CNC MACHINING",
    image: haasVmcImg,
    detail: "High-speed vertical machining centers ensuring microscopic accuracy, smooth surface finishes, and repeatable tool steel milling."
  },
  {
    title: "Injection Moulding",
    description: "Dedicated production capability for engineering plastic components.",
    sub: "PRODUCTION CELL",
    image: injectionFacilityImg,
    detail: "Automatic injection molding machines operating with closed-loop process parameters for tight-tolerance technical resins."
  },
  {
    title: "Engineering Support",
    description: "Manufacturing input from development through tooling, trials and production.",
    sub: "CAD / CAM",
    image: cadProductDesignImg,
    detail: "Digital engineering workstations equipped for 3D solid modeling, mold flow analysis, and first-article CAD verification."
  }
];

export const WHY_ADVAY_POINTS = [
  {
    title: "Integrated Tooling & Moulding",
    description: "Toolroom and production under one roof for seamless coordination and zero blame-game between mold makers and molders.",
    iconName: "Layers"
  },
  {
    title: "Prototype-to-Production Support",
    description: "Guiding projects from initial design and 3D modeling through pilot trials to mass production.",
    iconName: "PenTool"
  },
  {
    title: "Custom OEM Solutions",
    description: "Tailored manufacturing arrangements aligning tool design, component volume, and scheduled batch supply.",
    iconName: "Factory"
  },
  {
    title: "Responsive Engineering Support",
    description: "Direct interaction with manufacturing engineers for rapid turnaround on technical modifications and queries.",
    iconName: "CheckCircle"
  },
  {
    title: "Production-Focused Approach",
    description: "Every mould is designed specifically around component geometry, cycle time efficiency, and tool longevity.",
    iconName: "Target"
  },
  {
    title: "Long-Term Collaboration",
    description: "Building dependable partnerships based on technical integrity, consistent part quality, and reliable delivery.",
    iconName: "ShieldCheck"
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "automotive-engineering",
    name: "Automotive & Engineering",
    description: "Under-the-hood and functional components requiring high dimensional stability, heat resistance, and structural strength.",
    highlightPart: "Clips, brackets, sensor housings & mechanical bushings",
    iconName: "Car",
    image: automotiveClipsImg
  },
  {
    id: "electrical-electronics",
    name: "Electrical & Electronics",
    description: "Flame-retardant enclosures, terminal blocks, and switchgear parts compliant with thermal and dielectric standards.",
    highlightPart: "Switchgear bodies, terminal housings & socket covers",
    iconName: "Zap",
    image: electricalSwitchgearImg
  },
  {
    id: "industrial-components",
    name: "Industrial Components",
    description: "Durable engineering plastic components designed to endure continuous mechanical duty and chemical exposure.",
    highlightPart: "Gears, rollers, wear pads & pneumatic valve manifolds",
    iconName: "Wrench",
    image: toolroomFittingBenchImg
  },
  {
    id: "agriculture-irrigation",
    name: "Agriculture & Irrigation",
    description: "Fittings, drippers, and sprinkler components engineered to resist high hydraulic pressure and harsh outdoor UV exposure.",
    highlightPart: "Drip fittings, sprinkler bodies & pipe joiners",
    iconName: "Sprout",
    image: irrigationDripImg
  },
  {
    id: "consumer-products",
    name: "Consumer Products",
    description: "Aesthetically refined, functional plastic components with smooth surface finishes and sturdy snap-fit ergonomics.",
    highlightPart: "Enclosures, functional handles & structural shells",
    iconName: "ShoppingBag",
    image: consumerHousingsImg
  },
  {
    id: "toy-components",
    name: "Toy Components",
    description: "Child-safe plastic components engineered with radius edges, non-toxic materials, and high-impact resistance.",
    highlightPart: "Gears, chassis parts, figurine components & blocks",
    iconName: "Gamepad2",
    image: toyComponentsImg
  },
  {
    id: "thin-wall-enclosures-boxes",
    name: "Thin-Wall Enclosures & Boxes",
    description: "High-speed injection molded thin-wall containers, protective enclosures, and specialized storage boxes.",
    highlightPart: "Thin-wall containers, modular boxes & utility cases",
    iconName: "Box",
    image: thinWallPackagingImg
  },
  {
    id: "jewellery-packaging-boxes",
    name: "Jewellery Packaging & Storage Boxes",
    description: "Precision moulds and plastic packaging solutions for jewellery boxes, storage cases and presentation containers.",
    highlightPart: "Jewellery display cases, presentation boxes & storage containers",
    iconName: "Package",
    image: jewelleryBoxesImg
  },
  {
    id: "custom-oem-applications",
    name: "Custom OEM Applications",
    description: "Application-specific components developed and manufactured to bespoke OEM customer drawings and specifications.",
    highlightPart: "Turnkey proprietary components manufactured to client specs",
    iconName: "Cpu",
    image: oemProductionCellImg
  },
  {
    id: "sanitary-plumbing-fluid",
    name: "Sanitary, Plumbing & Fluid Handling",
    description: "Precision pump impellers, valve manifolds, irrigation adapters, and fluid components resistant to continuous hydraulic pressure.",
    highlightPart: "Pump impellers, check valve discs & plumbing connectors",
    iconName: "Droplets",
    image: sanitaryFluidImg
  }
];

export const QUALITY_PILLARS = [
  {
    title: "Tool & Component Inspection",
    description: "Rigorous dimensional verification of tool inserts, core pins, and molded part samples against engineering CAD models.",
    iconName: "CheckCircle"
  },
  {
    title: "Process Control",
    description: "Standardized injection molding parameter logging, melt temperature monitoring, and cycle time regulation.",
    iconName: "Settings"
  },
  {
    title: "Trial & Validation",
    description: "Structured sampling protocols (T0, T1) to optimize gate freeze, part ejection, and shrinkage compensation.",
    iconName: "Target"
  },
  {
    title: "Final Inspection",
    description: "Pre-shipment visual and dimensional quality audits ensuring zero flash, sink marks, or warp defects.",
    iconName: "ShieldCheck"
  },
  {
    title: "Repeatable Production",
    description: "In-process quality checkpoints guaranteeing consistent part weights and tight tolerances across long production runs.",
    iconName: "Layers"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What files can I send for a quotation?",
    answer: "STEP, IGES, 2D drawings or available product information."
  },
  {
    question: "Can Advay support product development before mould manufacturing?",
    answer: "Yes, we can support the project from product development through tooling and production."
  },
  {
    question: "Do you manufacture custom OEM plastic components?",
    answer: "Yes. We support application-specific OEM requirements based on customer drawings and specifications."
  },
  {
    question: "Can you manufacture both the mould and the final component?",
    answer: "Yes. Our integrated capabilities support tooling development, mould trials and component production."
  },
  {
    question: "Can we discuss confidentiality or NDA requirements?",
    answer: "Yes. Project confidentiality requirements can be discussed before technical information is shared."
  }
];
