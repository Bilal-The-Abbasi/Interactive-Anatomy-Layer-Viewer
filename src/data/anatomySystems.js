// anatomySystems.js
// Defines the 8 major anatomy systems and 25+ individual anatomy parts
// for the Human Anatomy Layer Explorer.

const anatomySystems = [
  {
    id: 'skin',
    name: 'Integumentary',
    label: 'Skin',
    color: '#d4a899',
    emissiveColor: '#8b5e52',
    description:
      'The skin is the largest organ in the human body, forming a protective barrier against the external environment. It regulates body temperature through sweating and blood vessel dilation, provides sensory input, and synthesizes vitamin D when exposed to sunlight. The integumentary system also includes hair, nails, and various glands.',
    icon: '🧬',
    opacity: 0.85,
    zIndex: 8,
  },
  {
    id: 'muscular',
    name: 'Muscular',
    label: 'Muscles',
    color: '#c0392b',
    emissiveColor: '#7b1a12',
    description:
      'The muscular system consists of over 600 muscles that enable movement, maintain posture, and generate heat. Skeletal muscles attach to bones via tendons and are controlled voluntarily, while smooth and cardiac muscles operate involuntarily. Muscles work in antagonistic pairs—one contracting while the other relaxes—to produce precise, coordinated movement.',
    icon: '💪',
    opacity: 0.9,
    zIndex: 7,
  },
  {
    id: 'skeletal',
    name: 'Skeletal',
    label: 'Skeleton',
    color: '#e8e4d0',
    emissiveColor: '#b5a890',
    description:
      'The skeletal system comprises 206 bones in an adult human, forming the rigid internal framework that supports and protects soft tissues and organs. Bones store minerals such as calcium and phosphorus, produce blood cells in the red marrow, and serve as attachment points for muscles. Joints where bones meet allow a wide range of movements.',
    icon: '🦴',
    opacity: 1.0,
    zIndex: 1,
  },
  {
    id: 'nervous',
    name: 'Nervous',
    label: 'Nerves',
    color: '#4fc3f7',
    emissiveColor: '#0288d1',
    description:
      'The nervous system is the body\'s electrochemical communication network, consisting of the brain, spinal cord, and an intricate web of peripheral nerves. It processes sensory information, coordinates voluntary and involuntary actions, regulates homeostasis, and is the seat of consciousness, thought, and emotion. Neurons transmit electrical impulses at speeds up to 270 miles per hour.',
    icon: '🧠',
    opacity: 0.95,
    zIndex: 3,
  },
  {
    id: 'circulatory',
    name: 'Circulatory',
    label: 'Blood Vessels',
    color: '#e53935',
    emissiveColor: '#b71c1c',
    description:
      'The circulatory system is a closed-loop transport network composed of the heart, approximately 60,000 miles of blood vessels, and around 5 liters of blood. It delivers oxygen and nutrients to every cell, removes metabolic waste products, distributes hormones, regulates body temperature, and plays a crucial role in immune defense. The heart beats roughly 100,000 times per day.',
    icon: '❤️',
    opacity: 0.9,
    zIndex: 4,
  },
  {
    id: 'respiratory',
    name: 'Respiratory',
    label: 'Lungs & Airways',
    color: '#81d4fa',
    emissiveColor: '#0277bd',
    description:
      'The respiratory system facilitates the exchange of oxygen and carbon dioxide between the body and the external environment through the lungs, airways, and diaphragm. Each breath draws air through the nose or mouth, down the trachea, through branching bronchi, and into millions of tiny alveoli where gas exchange occurs. An adult breathes approximately 20,000 times per day.',
    icon: '🫁',
    opacity: 0.88,
    zIndex: 5,
  },
  {
    id: 'digestive',
    name: 'Digestive',
    label: 'Digestive Organs',
    color: '#ff8f00',
    emissiveColor: '#e65100',
    description:
      'The digestive system is a nine-meter-long processing tube that breaks down food into nutrients the body can absorb and use for energy, growth, and repair. It includes the mouth, esophagus, stomach, small intestine, large intestine, and accessory organs such as the liver, pancreas, and gallbladder. The gut also hosts trillions of beneficial microorganisms that support immune function and metabolism.',
    icon: '🫃',
    opacity: 0.9,
    zIndex: 6,
  },
  {
    id: 'lymphatic',
    name: 'Lymphatic',
    label: 'Lymph Nodes',
    color: '#66bb6a',
    emissiveColor: '#2e7d32',
    description:
      'The lymphatic system is a network of vessels, nodes, and organs that maintains fluid balance, absorbs dietary fats from the intestines, and is central to the body\'s immune response. Lymph fluid, collected from tissues throughout the body, passes through lymph nodes where pathogens and debris are filtered out by immune cells. Major lymphoid organs include the thymus, spleen, and tonsils.',
    icon: '🔵',
    opacity: 0.85,
    zIndex: 2,
  },
];

export default anatomySystems;

// ---------------------------------------------------------------------------
// ANATOMY_PARTS — 25+ individual parts with full metadata.
// Coordinate system: body centered at origin, Y-axis runs inferior-to-superior.
// Total height ≈ 4 units (Y: -2 to +2).  X: left is negative, right is positive.
// Z: anterior is positive, posterior is negative.
// ---------------------------------------------------------------------------

export const ANATOMY_PARTS = [
  // ── NERVOUS SYSTEM ─────────────────────────────────────────────────────────
  {
    id: 'brain',
    name: 'Brain',
    systemId: 'nervous',
    position: { x: 0, y: 1.75, z: 0.05 },
    description:
      'The brain is the central organ of the nervous system and the command center of the entire body, weighing roughly 1.4 kg and containing about 86 billion neurons. It is divided into the cerebrum, cerebellum, and brainstem, each responsible for distinct aspects of cognition, movement, and autonomic regulation. Protected by the skull and three layers of meninges, the brain floats in cerebrospinal fluid that cushions it against impact.',
    function:
      'Processes sensory information, generates thoughts and emotions, controls voluntary movement, and regulates all unconscious bodily functions.',
    facts: [
      'The brain generates approximately 23 watts of electrical power—enough to light a small LED bulb.',
      'About 75 percent of the brain is water; even mild dehydration can impair cognitive performance.',
      'The human brain has roughly 100 trillion synaptic connections, far outnumbering the stars in the Milky Way.',
    ],
    relatedSystems: ['nervous', 'circulatory'],
  },
  {
    id: 'spinal_cord',
    name: 'Spinal Cord',
    systemId: 'nervous',
    position: { x: 0, y: 0.5, z: -0.15 },
    description:
      'The spinal cord is a cylindrical bundle of nerve fibers extending from the brainstem to the lumbar region of the vertebral column, measuring roughly 45 cm in adults. It serves as the main conduit for neural signals traveling between the brain and the rest of the body, and also coordinates spinal reflexes independently of the brain. Thirty-one pairs of spinal nerves branch out from it to innervate the trunk and limbs.',
    function:
      'Relays motor commands from the brain to muscles and sensory signals from the body to the brain, and mediates reflex arcs.',
    facts: [
      'The spinal cord stops growing at around age 4, while the vertebral column continues to grow—so the cord ends well above the base of the spine in adults.',
      'Signals travel through spinal cord tracts at speeds ranging from 0.5 to 120 meters per second depending on fiber type.',
      'The spinal cord is only about as thick as a human thumb for most of its length.',
    ],
    relatedSystems: ['nervous', 'skeletal'],
  },

  // ── CIRCULATORY SYSTEM ─────────────────────────────────────────────────────
  {
    id: 'heart',
    name: 'Heart',
    systemId: 'circulatory',
    position: { x: -0.1, y: 0.85, z: 0.2 },
    description:
      'The heart is a hollow, cone-shaped muscular organ located slightly left of center in the thoracic cavity, roughly the size of a fist and weighing 250–350 g. It is divided into four chambers—two atria and two ventricles—separated by valves that ensure one-directional blood flow. The heart beats continuously from before birth until death, pumping the entire blood volume approximately once per minute at rest.',
    function:
      'Pumps oxygenated blood to the body via the systemic circulation and deoxygenated blood to the lungs via the pulmonary circulation.',
    facts: [
      'The heart pumps roughly 7,000 liters of blood every single day.',
      'Cardiac muscle (myocardium) is unique: it never fatigues the way skeletal muscle does and has its own intrinsic pacemaker cells.',
      'The "lub-dub" sounds of a heartbeat are caused by the closing of the heart valves, not the muscle contraction itself.',
    ],
    relatedSystems: ['circulatory', 'respiratory', 'nervous'],
  },
  {
    id: 'aorta',
    name: 'Aorta',
    systemId: 'circulatory',
    position: { x: 0, y: 0.6, z: 0.1 },
    description:
      'The aorta is the largest artery in the body, arising from the left ventricle of the heart and arching over the top of the heart before descending through the thorax and abdomen. It distributes oxygenated blood to all major branches of the arterial tree. Its wall is composed of elastic tissue that stretches with each heartbeat and recoils to maintain continuous blood flow.',
    function:
      'Carries oxygenated blood from the heart and distributes it to all arterial branches supplying the entire body.',
    facts: [
      'The aorta is roughly 2.5 cm in diameter—about the width of a garden hose.',
      'Blood exits the heart through the aorta at speeds of up to 30 cm per second.',
      'The aorta can stretch to accommodate the pressure wave of each heartbeat without rupturing, thanks to its abundance of elastin fibers.',
    ],
    relatedSystems: ['circulatory', 'skeletal'],
  },
  {
    id: 'veins',
    name: 'Major Veins',
    systemId: 'circulatory',
    position: { x: 0.1, y: 0.3, z: 0.05 },
    description:
      'The venous system returns deoxygenated blood from the body\'s tissues back to the right side of the heart via a network of veins of progressively increasing size. The superior vena cava drains blood from the upper body, while the inferior vena cava collects blood from the lower body. Veins contain one-way valves and rely on skeletal muscle contraction and respiratory movements to propel blood against gravity.',
    function:
      'Returns deoxygenated blood and metabolic waste products from peripheral tissues back to the heart and lungs.',
    facts: [
      'About 70 percent of the total blood volume is held in the venous system at any given time.',
      'Varicose veins occur when venous valves weaken and blood pools, causing the vessels to dilate and become visible beneath the skin.',
      'The walls of veins are thinner and more distensible than arteries because venous blood pressure is much lower.',
    ],
    relatedSystems: ['circulatory', 'lymphatic'],
  },

  // ── RESPIRATORY SYSTEM ─────────────────────────────────────────────────────
  {
    id: 'left_lung',
    name: 'Left Lung',
    systemId: 'respiratory',
    position: { x: -0.45, y: 0.8, z: 0.1 },
    description:
      'The left lung is slightly smaller than the right, divided into only two lobes to make room for the heart in the mediastinum. Its surface is covered by the pleura, a double-layered membrane that reduces friction during breathing. Each breath expands the lung as the diaphragm contracts and the rib cage lifts, drawing air deep into the alveolar sacs.',
    function:
      'Performs gas exchange—absorbing oxygen from inhaled air into the bloodstream and releasing carbon dioxide into exhaled air.',
    facts: [
      'The left lung has a cardiac notch, an indentation that accommodates the heart.',
      'If all the alveoli in both lungs were spread flat, they would cover an area roughly the size of a tennis court.',
      'The lungs are the only internal organs routinely exposed to the external environment.',
    ],
    relatedSystems: ['respiratory', 'circulatory'],
  },
  {
    id: 'right_lung',
    name: 'Right Lung',
    systemId: 'respiratory',
    position: { x: 0.45, y: 0.82, z: 0.1 },
    description:
      'The right lung is the larger of the two lungs, divided into three lobes: superior, middle, and inferior. It accounts for about 55 percent of total lung capacity. The right main bronchus is shorter, wider, and more vertical than the left, which is why inhaled foreign objects more often lodge in the right lung.',
    function:
      'Exchanges respiratory gases between the air and the pulmonary blood supply, oxygenating blood and removing carbon dioxide.',
    facts: [
      'The right lung has three lobes versus the left lung\'s two.',
      'Lungs contain no muscle tissue of their own; breathing is driven entirely by the diaphragm and intercostal muscles.',
      'At birth, a baby\'s lungs are filled with fluid; they clear within hours as the newborn begins breathing.',
    ],
    relatedSystems: ['respiratory', 'circulatory'],
  },
  {
    id: 'trachea',
    name: 'Trachea',
    systemId: 'respiratory',
    position: { x: 0, y: 1.25, z: 0.15 },
    description:
      'The trachea, or windpipe, is a flexible tube approximately 12 cm long and 2 cm wide that connects the larynx to the two primary bronchi. It is reinforced by 16–20 C-shaped rings of hyaline cartilage that keep it open during breathing and swallowing. Its inner lining of ciliated epithelium continuously sweeps mucus and trapped particles upward toward the throat.',
    function:
      'Conducts air between the larynx and the lungs, filters and warms incoming air, and propels mucus and debris away from the lower airways.',
    facts: [
      'The trachea is lined with specialized cilia that beat in coordinated waves to move mucus upward—a process called the mucociliary escalator.',
      'During swallowing, the epiglottis covers the tracheal opening to prevent food and liquid from entering the airway.',
      'Tracheotomy—a surgical opening in the trachea—has been performed for over 3,500 years and remains a life-saving emergency procedure.',
    ],
    relatedSystems: ['respiratory'],
  },

  // ── DIGESTIVE SYSTEM ───────────────────────────────────────────────────────
  {
    id: 'liver',
    name: 'Liver',
    systemId: 'digestive',
    position: { x: 0.3, y: 0.35, z: 0.2 },
    description:
      'The liver is the largest internal organ and the largest gland in the body, weighing approximately 1.5 kg in adults. Located in the upper right quadrant of the abdomen, it performs over 500 distinct physiological functions, including detoxifying blood, synthesizing proteins and clotting factors, metabolizing carbohydrates and lipids, and producing bile. It is the only visceral organ with significant regenerative capacity.',
    function:
      'Detoxifies metabolic byproducts and foreign substances, synthesizes essential proteins, and produces bile for fat digestion.',
    facts: [
      'The liver can regenerate to its original size even after up to 70 percent of its mass has been surgically removed.',
      'Every minute, the liver filters approximately 1.5 liters of blood.',
      'The liver produces about 800–1,000 mL of bile every day, which is stored and concentrated in the gallbladder.',
    ],
    relatedSystems: ['digestive', 'circulatory', 'lymphatic'],
  },
  {
    id: 'stomach',
    name: 'Stomach',
    systemId: 'digestive',
    position: { x: -0.15, y: 0.3, z: 0.2 },
    description:
      'The stomach is a J-shaped muscular organ that serves as the primary holding and initial processing chamber of the digestive tract. Its thick walls contain layers of smooth muscle that churn food with gastric acid and enzymes, converting a meal into a semi-liquid paste called chyme. An empty stomach holds about 75 mL but can expand to hold 1–1.5 liters after a large meal.',
    function:
      'Mechanically and chemically breaks down food, beginning protein digestion and regulating the controlled release of chyme into the small intestine.',
    facts: [
      'Gastric acid (hydrochloric acid) in the stomach has a pH of 1.5–3.5, strong enough to dissolve some metals.',
      'The stomach completely replaces its inner mucosal lining every 3–5 days to protect itself from its own acid.',
      'Hunger pangs are caused by strong contractions of an empty stomach, often accompanied by growling sounds called borborygmi.',
    ],
    relatedSystems: ['digestive', 'nervous'],
  },
  {
    id: 'small_intestine',
    name: 'Small Intestine',
    systemId: 'digestive',
    position: { x: 0, y: 0.0, z: 0.2 },
    description:
      'The small intestine is a tightly coiled tube approximately 6–7 meters long that fills much of the abdominal cavity. It is the primary site of nutrient absorption: its inner wall is covered with finger-like villi and microscopic microvilli (forming the brush border) that vastly increase the surface area available for absorption. The three sections—duodenum, jejunum, and ileum—each have distinct roles in digestion.',
    function:
      'Digests food using enzymes from the pancreas and bile from the liver, then absorbs the resulting nutrients into the bloodstream and lymphatic system.',
    facts: [
      'The total absorptive surface area of the small intestine, including villi and microvilli, is estimated at 250 square meters—about the size of a tennis court.',
      'Food typically spends 2–6 hours traveling through the small intestine.',
      'The duodenum receives digestive enzymes from the pancreas and bile from the liver through a shared duct called the ampulla of Vater.',
    ],
    relatedSystems: ['digestive', 'circulatory', 'lymphatic'],
  },
  {
    id: 'large_intestine',
    name: 'Large Intestine',
    systemId: 'digestive',
    position: { x: 0.05, y: -0.25, z: 0.15 },
    description:
      'The large intestine, or colon, is a wider but shorter tube (about 1.5 meters) that frames the small intestine in the abdominal cavity. Its primary roles are to reabsorb water and electrolytes from indigestible food matter, compact waste into feces, and house the vast majority of the gut microbiome. Segments include the cecum, ascending, transverse, descending, and sigmoid colon, ending at the rectum.',
    function:
      'Absorbs water and electrolytes from digestive residue, consolidates waste into feces, and provides a habitat for beneficial gut bacteria.',
    facts: [
      'The large intestine harbors roughly 38 trillion bacteria—approximately equal to the number of human cells in the body.',
      'The gut microbiome in the large intestine synthesizes vitamins K and B12 that the body absorbs.',
      'Peristaltic contractions move material through the large intestine much more slowly than the small intestine—transit takes 10–59 hours.',
    ],
    relatedSystems: ['digestive', 'lymphatic'],
  },
  {
    id: 'kidneys',
    name: 'Kidneys',
    systemId: 'digestive',
    position: { x: 0, y: 0.1, z: -0.25 },
    description:
      'The two kidneys are bean-shaped organs situated retroperitoneally (behind the peritoneum) on either side of the vertebral column. Each kidney contains roughly one million filtration units called nephrons that filter the entire blood volume approximately 30 times per day. They regulate fluid balance, electrolyte levels, blood pressure, and red blood cell production, in addition to removing metabolic waste.',
    function:
      'Filter blood to remove metabolic waste and excess substances, regulate blood pressure and fluid balance, and produce hormones such as erythropoietin.',
    facts: [
      'The kidneys filter about 180 liters of blood per day but produce only 1–2 liters of urine, reabsorbing 99 percent of filtrate.',
      'Each kidney contains about one million nephrons; humans can live normally with as little as 75 percent of total kidney function.',
      'The right kidney sits slightly lower than the left because the liver occupies space on the right side of the abdomen.',
    ],
    relatedSystems: ['digestive', 'circulatory'],
  },

  // ── SKELETAL SYSTEM ────────────────────────────────────────────────────────
  {
    id: 'skull',
    name: 'Skull',
    systemId: 'skeletal',
    position: { x: 0, y: 1.78, z: 0 },
    description:
      'The skull is a complex bony structure composed of 22 bones: 8 cranial bones that encase and protect the brain, and 14 facial bones that form the framework of the face. The bones of the skull are joined by immovable fibrous joints called sutures, except for the mandible (lower jaw), which articulates with the temporal bone via a movable temporomandibular joint. The skull also houses and protects the organs of smell, vision, taste, and hearing.',
    function:
      'Protects the brain and sensory organs, provides attachment points for head and neck muscles, and forms the upper part of the digestive and respiratory tracts.',
    facts: [
      'A human baby\'s skull has six soft spots called fontanelles that allow the skull to flex during childbirth and close by about age two.',
      'The frontal bone (forehead) forms first in fetal development, followed by the parietal and other cranial bones.',
      'Forensic scientists can determine age, sex, and ancestry from skull morphology with over 90 percent accuracy.',
    ],
    relatedSystems: ['skeletal', 'nervous'],
  },
  {
    id: 'spine',
    name: 'Vertebral Column',
    systemId: 'skeletal',
    position: { x: 0, y: 0.5, z: -0.15 },
    description:
      'The vertebral column (spine) consists of 33 vertebrae arranged in five regions: 7 cervical, 12 thoracic, 5 lumbar, 5 fused sacral, and 4 fused coccygeal. Between most adjacent vertebrae lie intervertebral discs composed of fibrocartilage that act as shock absorbers and allow flexibility. The spine has four natural curves—two lordotic and two kyphotic—that distribute mechanical stress and allow upright posture.',
    function:
      'Supports the weight of the head and trunk, protects the spinal cord, and provides attachment points for the back muscles and ribs.',
    facts: [
      'You are approximately 1 cm taller in the morning than in the evening because intervertebral discs compress throughout the day under gravity.',
      'The human spine can withstand compressive loads of up to 1,000 kg before fracturing.',
      'The atlas (C1) and axis (C2) vertebrae are uniquely shaped to allow the head to nod and rotate.',
    ],
    relatedSystems: ['skeletal', 'nervous', 'muscular'],
  },
  {
    id: 'ribcage',
    name: 'Rib Cage',
    systemId: 'skeletal',
    position: { x: 0, y: 0.85, z: 0.05 },
    description:
      'The rib cage is a bony and cartilaginous structure enclosing the thoracic cavity, formed by 12 pairs of ribs, the sternum, and the thoracic vertebrae. The upper seven pairs are "true ribs" connected directly to the sternum by costal cartilage; the next three pairs are "false ribs" with indirect connections; and the bottom two pairs are "floating ribs" with no anterior attachment. The elasticity of the costal cartilage allows the rib cage to expand and recoil with each breath.',
    function:
      'Protects the heart and lungs, facilitates breathing by expanding and contracting, and provides attachment points for respiratory and upper-limb muscles.',
    facts: [
      'About 1 in 500 people are born with a cervical rib—an extra rib above the normal first pair.',
      'Ribs are one of the few bones that regenerate relatively well; strips of rib cartilage are sometimes harvested for reconstructive surgery.',
      'The sternum (breastbone) has three parts: the manubrium, body, and xiphoid process, which fuse progressively with age.',
    ],
    relatedSystems: ['skeletal', 'respiratory', 'circulatory'],
  },
  {
    id: 'pelvis',
    name: 'Pelvis',
    systemId: 'skeletal',
    position: { x: 0, y: -0.5, z: 0 },
    description:
      'The pelvis is a basin-shaped bony ring formed by the two hip bones (each comprising ilium, ischium, and pubis), the sacrum, and the coccyx. It transmits the weight of the upper body to the lower limbs through the hip joints and protects the bladder, reproductive organs, and lower digestive tract. Sexual dimorphism in pelvic shape is marked: the female pelvis is broader and shallower to accommodate childbirth.',
    function:
      'Transfers body weight from the axial to the appendicular skeleton, protects pelvic viscera, and provides attachment for lower-limb and trunk muscles.',
    facts: [
      'The sacroiliac joints connecting the sacrum to the hip bones are among the strongest joints in the body, stabilized by some of the thickest ligaments.',
      'Forensic anthropologists can determine biological sex from pelvis morphology with about 95 percent accuracy.',
      'During pregnancy, the hormone relaxin loosens pelvic ligaments to allow the pelvis to expand slightly for childbirth.',
    ],
    relatedSystems: ['skeletal', 'muscular'],
  },
  {
    id: 'femur',
    name: 'Femur',
    systemId: 'skeletal',
    position: { x: 0.18, y: -0.9, z: 0 },
    description:
      'The femur is the longest, heaviest, and strongest bone in the human body, forming the skeleton of the thigh and connecting the hip to the knee. Its proximal end bears the femoral head, which articulates with the acetabulum of the pelvis in the hip joint; its distal end forms the upper part of the knee joint. The shaft angles medially so that the knees are positioned below the body\'s center of gravity.',
    function:
      'Bears the compressive load of the upper body during standing and locomotion, and provides the lever arm for powerful hip and knee movements.',
    facts: [
      'The femur can withstand compressive forces of over 1,700 kg—about the weight of a small car.',
      'The angle of the femoral neck relative to the shaft (neck-shaft angle) averages 126 degrees in adults and affects gait mechanics.',
      'Fracture of the femoral neck ("broken hip") is one of the most common serious injuries in the elderly and carries a high one-year mortality rate.',
    ],
    relatedSystems: ['skeletal', 'muscular', 'circulatory'],
  },
  {
    id: 'tibia',
    name: 'Tibia',
    systemId: 'skeletal',
    position: { x: 0.17, y: -1.4, z: 0.02 },
    description:
      'The tibia is the larger and more medial of the two bones of the lower leg, running from the knee to the ankle. It is the primary weight-bearing bone of the leg, transmitting forces from the femur through the ankle to the foot. Its anteromedial surface lies just beneath the skin (the "shinbone") with little soft-tissue coverage, making it prone to bruising and stress fractures.',
    function:
      'Bears the weight of the body between the knee and ankle joints, and provides attachment for major leg muscles and ligaments.',
    facts: [
      'Tibial stress fractures are one of the most common overuse injuries in distance runners, often called "shin splints" in their milder form.',
      'The fibula runs parallel to the tibia but bears very little weight; its primary role is providing stability and muscle attachment.',
      'The medial malleolus of the tibia and the lateral malleolus of the fibula form the bony mortise of the ankle joint.',
    ],
    relatedSystems: ['skeletal', 'muscular'],
  },
  {
    id: 'humerus',
    name: 'Humerus',
    systemId: 'skeletal',
    position: { x: 0.7, y: 0.7, z: 0 },
    description:
      'The humerus is the single bone of the upper arm, articulating proximally with the shoulder joint (glenohumeral joint) and distally with the radius and ulna at the elbow. Its rounded head fits into the shallow glenoid cavity of the scapula, giving the shoulder exceptional range of motion at the cost of reduced stability. The deltoid tuberosity on the lateral shaft marks where the powerful deltoid muscle inserts.',
    function:
      'Forms the skeletal framework of the upper arm, serves as the lever for shoulder and elbow movements, and provides attachment for numerous arm and shoulder muscles.',
    facts: [
      'The glenohumeral joint is the most mobile joint in the body and consequently the most frequently dislocated.',
      'The radial nerve winds around the posterior shaft of the humerus in the spiral groove; fractures here can damage this nerve and cause wrist drop.',
      'The humerus ossifies from eight separate growth centers that fuse at different ages between 14 and 20 years.',
    ],
    relatedSystems: ['skeletal', 'muscular', 'nervous'],
  },

  // ── MUSCULAR SYSTEM ────────────────────────────────────────────────────────
  {
    id: 'biceps',
    name: 'Biceps Brachii',
    systemId: 'muscular',
    position: { x: 0.68, y: 0.65, z: 0.1 },
    description:
      'The biceps brachii is a two-headed muscle of the anterior upper arm, originating from the coracoid process and supraglenoid tubercle of the scapula and inserting into the radial tuberosity and bicipital aponeurosis. It is a powerful flexor of the elbow and the primary supinator of the forearm (rotating the palm upward). Despite its fame as a symbol of strength, its force is largely dependent on forearm position.',
    function:
      'Flexes the elbow, supinates the forearm, and weakly assists in shoulder flexion and stabilization.',
    facts: [
      'The biceps muscle is approximately twice as effective at supinating the forearm (turning the palm up) as it is at flexing the elbow.',
      '"Biceps" comes from Latin meaning "two-headed," referring to its two proximal attachment points.',
      'A "Popeye deformity"—a bulge in the lower upper arm—results from proximal biceps tendon rupture, causing the muscle to ball up.',
    ],
    relatedSystems: ['muscular', 'skeletal', 'nervous'],
  },
  {
    id: 'quadriceps',
    name: 'Quadriceps Femoris',
    systemId: 'muscular',
    position: { x: 0.2, y: -0.85, z: 0.12 },
    description:
      'The quadriceps femoris is a group of four muscles on the anterior thigh—rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius—that together form the largest and most powerful muscle mass in the body. All four heads converge into the quadriceps tendon, which encloses the patella and inserts into the tibial tuberosity via the patellar tendon. The quadriceps are essential for standing, walking, running, and climbing.',
    function:
      'Extends the knee joint and, through the rectus femoris head, assists in hip flexion; critical for all weight-bearing lower-limb activities.',
    facts: [
      'The quadriceps generate the greatest absolute force of any muscle group in the body, with peak forces during jumping exceeding three times body weight.',
      'The patella (kneecap) is a sesamoid bone embedded within the quadriceps tendon that increases the mechanical advantage of the muscle by up to 50 percent.',
      'Quadriceps weakness after knee injury or surgery is a major barrier to recovery and is associated with increased risk of re-injury.',
    ],
    relatedSystems: ['muscular', 'skeletal', 'nervous'],
  },
  {
    id: 'deltoid',
    name: 'Deltoid',
    systemId: 'muscular',
    position: { x: 0.6, y: 0.95, z: 0.05 },
    description:
      'The deltoid is a thick triangular muscle capping the shoulder, originating from the clavicle, acromion, and spine of the scapula and converging to insert on the deltoid tuberosity of the humerus. Its three parts—anterior, middle, and posterior—produce different movements and are often targeted selectively in strength training. The deltoid is the primary abductor of the arm at the shoulder and gives the shoulder its characteristic rounded contour.',
    function:
      'Abducts the arm at the shoulder; anterior fibers flex and internally rotate, posterior fibers extend and externally rotate the humerus.',
    facts: [
      'The deltoid is the preferred site for intramuscular injections because it is thick, accessible, and away from major neurovascular structures.',
      'The name "deltoid" comes from the Greek letter delta (Δ) because of the muscle\'s triangular shape.',
      'Paralysis of the deltoid, often from axillary nerve damage, causes severe disability because virtually all arm movements depend on initial shoulder abduction.',
    ],
    relatedSystems: ['muscular', 'skeletal', 'nervous'],
  },

  // ── ADDITIONAL PARTS ───────────────────────────────────────────────────────
  {
    id: 'lymph_nodes',
    name: 'Lymph Nodes',
    systemId: 'lymphatic',
    position: { x: -0.3, y: 1.1, z: 0.1 },
    description:
      'Lymph nodes are small, bean-shaped structures distributed throughout the body along lymphatic vessels, with major clusters in the neck, armpits, groin, and around the major blood vessels of the abdomen. Each node is enclosed in a fibrous capsule and contains specialized immune cells—primarily B and T lymphocytes and macrophages—that monitor lymph fluid for pathogens, abnormal cells, and foreign particles. When infection occurs nearby, nodes often enlarge (lymphadenopathy) as immune cells proliferate.',
    function:
      'Filter lymph fluid, trap and destroy pathogens and cancer cells, and produce and activate lymphocytes as part of the adaptive immune response.',
    facts: [
      'The human body has approximately 500–600 lymph nodes.',
      'Swollen lymph nodes during illness reflect rapid proliferation of immune cells—sometimes increasing node size tenfold.',
      'Cancer cells can spread (metastasize) by entering lymphatic vessels; whether cancer has reached nearby lymph nodes is a critical factor in staging and prognosis.',
    ],
    relatedSystems: ['lymphatic', 'circulatory'],
  },
  {
    id: 'thymus',
    name: 'Thymus',
    systemId: 'lymphatic',
    position: { x: 0, y: 1.05, z: 0.18 },
    description:
      'The thymus is a bilobed lymphoid organ located in the superior mediastinum, just behind the sternum. It is largest and most active during childhood and early adolescence, when it is responsible for the maturation of T lymphocytes (T cells)—the key cellular mediators of adaptive immunity. After puberty the thymus progressively involutes, replaced by fatty tissue, though it retains some functional capacity throughout life.',
    function:
      'Produces and matures T lymphocytes, educating them to distinguish self from non-self and preparing them for deployment in the immune system.',
    facts: [
      'The thymus is the only organ that gets smaller with age under normal physiological conditions.',
      'Congenital absence of the thymus (DiGeorge syndrome) results in profound T-cell immunodeficiency.',
      'The word "thymus" comes from the Greek word for "life force," as ancient physicians believed it was the seat of the soul.',
    ],
    relatedSystems: ['lymphatic', 'nervous'],
  },
  {
    id: 'skin_layer',
    name: 'Skin (Integument)',
    systemId: 'skin',
    position: { x: 0, y: 0, z: 0.5 },
    description:
      'The skin is composed of two main layers: the epidermis, a stratified squamous epithelium that forms the waterproof outer barrier, and the dermis, a connective tissue layer rich in collagen, blood vessels, nerves, and accessory structures. Beneath these lies the hypodermis (subcutaneous tissue), a layer of fat and loose connective tissue that insulates and cushions the body. Skin color is determined by the amount and type of melanin produced by specialized cells called melanocytes.',
    function:
      'Acts as a physical, chemical, and biological barrier; regulates temperature; provides sensory information; and synthesizes vitamin D.',
    facts: [
      'The skin sheds about 30,000–40,000 dead cells every hour, completely renewing its outer layer (epidermis) approximately every 27 days.',
      'Skin is home to about 1.8 trillion bacteria—more microorganisms than there are people on Earth.',
      'The thickest skin on the body is on the soles of the feet (up to 4 mm); the thinnest is on the eyelids (0.5 mm).',
    ],
    relatedSystems: ['skin', 'nervous', 'circulatory'],
  },
];
