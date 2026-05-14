// storyModes.js
// Defines 4 guided story mode experiences for the Human Anatomy Layer Explorer.
// Each story walks the user through a curated sequence of anatomy systems and
// focal parts with narration, camera positions, and timing metadata.

const storyModes = [
  // ────────────────────────────────────────────────────────────────────────────
  // STORY 1: Journey Through the Circulatory System
  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'circulatory_journey',
    title: 'Journey Through the Circulatory System',
    description:
      'Follow a single drop of blood on its continuous journey through the heart, arteries, capillaries, and veins. Discover how the circulatory system delivers life-sustaining oxygen and nutrients to every cell in the body.',
    duration: 80,
    icon: '❤️',
    color: '#e53935',
    steps: [
      {
        id: 'circ_step_1',
        title: 'The Beating Heart',
        narration:
          'At the center of the circulatory system sits the heart—a tireless muscular pump that has been beating since before you were born. This fist-sized organ contracts roughly 100,000 times a day, driving blood through an astonishing 60,000 miles of vessels.',
        systemsToShow: ['circulatory', 'skin'],
        focusPartId: 'heart',
        cameraPosition: { x: 0, y: 0.85, z: 3.5 },
        duration: 20,
      },
      {
        id: 'circ_step_2',
        title: 'The Great Artery: Aorta',
        narration:
          'Oxygenated blood leaves the left ventricle and surges into the aorta, the body\'s largest artery, at speeds of nearly 30 centimeters per second. The elastic walls of the aorta stretch to absorb the pressure wave and then recoil, maintaining smooth blood flow between heartbeats.',
        systemsToShow: ['circulatory'],
        focusPartId: 'aorta',
        cameraPosition: { x: 0, y: 0.6, z: 3.0 },
        duration: 20,
      },
      {
        id: 'circ_step_3',
        title: 'Oxygen Delivery Network',
        narration:
          'Arteries branch progressively into smaller arterioles and finally into microscopic capillaries just one cell thick, where oxygen and nutrients diffuse across their walls into surrounding tissues. This vast capillary bed ensures that no cell in the body is more than a fraction of a millimeter from a blood supply.',
        systemsToShow: ['circulatory', 'muscular'],
        focusPartId: 'aorta',
        cameraPosition: { x: 0.3, y: 0.2, z: 3.2 },
        duration: 20,
      },
      {
        id: 'circ_step_4',
        title: 'The Return Journey: Veins',
        narration:
          'Deoxygenated blood, now carrying carbon dioxide and metabolic waste, flows from capillaries into venules and then into the large veins that return it to the right side of the heart. Venous valves and the squeezing action of surrounding muscles prevent backflow, ensuring blood always travels in one direction.',
        systemsToShow: ['circulatory'],
        focusPartId: 'veins',
        cameraPosition: { x: 0.1, y: 0.3, z: 3.0 },
        duration: 20,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // STORY 2: Layers of the Human Body
  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'body_layers',
    title: 'Layers of the Human Body',
    description:
      'Peel back the human body one layer at a time—from the protective skin on the outside all the way down to the bones at its core. Each layer reveals a new world of structure and function that depends on the layers around it.',
    duration: 100,
    icon: '🔬',
    color: '#7b1fa2',
    steps: [
      {
        id: 'layers_step_1',
        title: 'The Outer Shell: Skin',
        narration:
          'The journey begins at the body\'s outermost layer—the skin, our largest organ and first line of defense. Covering roughly two square meters, this waterproof, self-repairing barrier shields us from pathogens, regulates temperature, and allows us to feel the world around us.',
        systemsToShow: ['skin'],
        focusPartId: 'skin_layer',
        cameraPosition: { x: 0, y: 0, z: 4.5 },
        duration: 20,
      },
      {
        id: 'layers_step_2',
        title: 'Beneath the Surface: Muscles',
        narration:
          'Removing the skin reveals the muscular layer—over 600 muscles that give the body its shape, generate heat, and produce every movement from a heartbeat to a sprint. Skeletal muscles attach to bones via tendons and are arranged in opposing pairs so that as one contracts, the other relaxes.',
        systemsToShow: ['skin', 'muscular'],
        focusPartId: 'deltoid',
        cameraPosition: { x: 0.3, y: 0.5, z: 4.0 },
        duration: 20,
      },
      {
        id: 'layers_step_3',
        title: 'The Framework: Skeleton',
        narration:
          'Deeper still lies the skeletal system—206 bones that form the rigid internal scaffold supporting and protecting everything above. Far from inert, bones are living tissue that continuously remodel themselves, store minerals, and produce millions of blood cells every second in their red marrow.',
        systemsToShow: ['muscular', 'skeletal'],
        focusPartId: 'spine',
        cameraPosition: { x: 0, y: 0, z: 4.0 },
        duration: 20,
      },
      {
        id: 'layers_step_4',
        title: 'Vital Organs: The Inner Core',
        narration:
          'Protected within the skeletal cage are the vital organs—the heart, lungs, liver, stomach, and intestines—each performing specialized roles that keep the body alive. The rib cage shields the heart and lungs while the pelvis guards the lower abdominal organs.',
        systemsToShow: ['skeletal', 'circulatory', 'respiratory', 'digestive'],
        focusPartId: 'heart',
        cameraPosition: { x: 0, y: 0.5, z: 4.0 },
        duration: 20,
      },
      {
        id: 'layers_step_5',
        title: 'The Complete Picture',
        narration:
          'Viewed together, every system of the human body interweaves in a breathtaking tapestry of form and function. No layer exists in isolation—the skin shields the muscles, muscles move the bones, bones protect the organs, and organs sustain the entire living whole.',
        systemsToShow: ['skin', 'muscular', 'skeletal', 'circulatory', 'respiratory', 'digestive', 'nervous', 'lymphatic'],
        focusPartId: null,
        cameraPosition: { x: 0, y: 0, z: 5.5 },
        duration: 20,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // STORY 3: The Nervous System
  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'nervous_system_tour',
    title: 'The Nervous System',
    description:
      'Explore the body\'s master control network—the nervous system. From the towering complexity of the brain to the split-second reflexes of the spinal cord, discover how 86 billion neurons orchestrate every thought, sensation, and movement.',
    duration: 80,
    icon: '🧠',
    color: '#0288d1',
    steps: [
      {
        id: 'nervous_step_1',
        title: 'Command Central: The Brain',
        narration:
          'Everything you think, feel, sense, and do originates in the brain—a 1.4-kilogram organ of almost unfathomable complexity packed into the cranium. Its 86 billion neurons form approximately 100 trillion connections, making it the most complex structure known in the universe.',
        systemsToShow: ['nervous', 'skeletal'],
        focusPartId: 'brain',
        cameraPosition: { x: 0, y: 1.75, z: 3.0 },
        duration: 20,
      },
      {
        id: 'nervous_step_2',
        title: 'The Information Highway: Spinal Cord',
        narration:
          'Descending from the brainstem, the spinal cord is the main communication cable between the brain and the rest of the body, bundling millions of nerve fibers into an organ no thicker than your thumb. It also processes spinal reflexes entirely on its own—your hand recoils from a hot surface before your brain has even registered pain.',
        systemsToShow: ['nervous', 'skeletal'],
        focusPartId: 'spinal_cord',
        cameraPosition: { x: 0.3, y: 0.5, z: 3.0 },
        duration: 20,
      },
      {
        id: 'nervous_step_3',
        title: 'Branching Out: Peripheral Nerves',
        narration:
          'Thirty-one pairs of spinal nerves branch from the spinal cord and spread throughout the body, connecting the central nervous system to every organ, muscle, and patch of skin. These peripheral nerves carry motor commands outward from the brain and sensory signals inward, creating a continuous two-way conversation.',
        systemsToShow: ['nervous', 'muscular'],
        focusPartId: 'spinal_cord',
        cameraPosition: { x: 0.5, y: 0.0, z: 3.5 },
        duration: 20,
      },
      {
        id: 'nervous_step_4',
        title: 'Body and Mind United',
        narration:
          'The nervous system does not act alone—it is intertwined with every other body system, sending and receiving signals from muscles, blood vessels, organs, and glands. This intimate integration means that mental state directly affects physical health, and physical state constantly shapes our thoughts and emotions.',
        systemsToShow: ['nervous', 'circulatory', 'muscular', 'skeletal'],
        focusPartId: 'brain',
        cameraPosition: { x: 0, y: 0.5, z: 5.0 },
        duration: 20,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // STORY 4: The Respiratory Journey
  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'respiratory_journey',
    title: 'The Respiratory Journey',
    description:
      'Take a breath and follow the air as it travels from the outside world, through the airways, and into the lungs where the oxygen we need to survive enters our blood. This is the story of one of life\'s most fundamental and continuous processes.',
    duration: 80,
    icon: '🫁',
    color: '#0277bd',
    steps: [
      {
        id: 'resp_step_1',
        title: 'First Breath: Nose and Mouth',
        narration:
          'Each breath begins at the nose or mouth, where incoming air is warmed, humidified, and filtered by tiny hairs and mucous membranes before it travels any deeper. The nasal passages alone can warm frigid air by up to 40 degrees Celsius in the fraction of a second it takes to inhale.',
        systemsToShow: ['respiratory', 'skeletal', 'skin'],
        focusPartId: 'trachea',
        cameraPosition: { x: 0, y: 1.5, z: 3.0 },
        duration: 20,
      },
      {
        id: 'resp_step_2',
        title: 'Down the Airway: The Trachea',
        narration:
          'Air flows from the throat down the trachea, a rigid yet flexible tube reinforced by C-shaped rings of cartilage that keep it open at all times. The trachea\'s inner lining continuously sweeps trapped particles and mucus upward, acting as a self-cleaning conveyor belt that protects the delicate lung tissue below.',
        systemsToShow: ['respiratory'],
        focusPartId: 'trachea',
        cameraPosition: { x: 0, y: 1.2, z: 3.0 },
        duration: 20,
      },
      {
        id: 'resp_step_3',
        title: 'Into the Lungs',
        narration:
          'The trachea splits into two primary bronchi, one entering each lung, then branches into progressively smaller tubes until reaching the microscopic alveoli—more than 300 million tiny air sacs whose combined surface area equals a tennis court. It is here, across walls just one cell thick, that oxygen passes into the bloodstream and carbon dioxide moves out.',
        systemsToShow: ['respiratory', 'circulatory'],
        focusPartId: 'left_lung',
        cameraPosition: { x: -0.45, y: 0.8, z: 3.5 },
        duration: 20,
      },
      {
        id: 'resp_step_4',
        title: 'Gas Exchange: Life at the Alveoli',
        narration:
          'At the alveolar surface, oxygen dissolves into the thin film of fluid lining the air sacs and diffuses across into the surrounding capillaries, binding to hemoglobin in red blood cells. Simultaneously, carbon dioxide—a waste product of cellular metabolism—diffuses in the opposite direction to be exhaled, completing the respiratory cycle that sustains every cell in the body.',
        systemsToShow: ['respiratory', 'circulatory', 'nervous'],
        focusPartId: 'right_lung',
        cameraPosition: { x: 0.45, y: 0.8, z: 3.5 },
        duration: 20,
      },
    ],
  },
];

export default storyModes;
