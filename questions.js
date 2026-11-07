// Question wording and marked answers transcribed from the supplied material.
// answer is a zero-based index: 0=A, 1=B, 2=C, 3=D.
(function (root) {
  "use strict";
  const bank = {
  "title": "QuizRoo",
  "topics": [
    {
      "id": "aids",
      "label": "Pharmaceutical Aids & Antioxidants"
    },
    {
      "id": "ions",
      "label": "Physiological & Essential Ions"
    },
    {
      "id": "gi",
      "label": "GI Agents"
    },
    {
      "id": "topical",
      "label": "Topical, Dental & Miscellaneous Agents"
    }
  ],
  "questions": [
    {
      "id": "aids-01",
      "topic": "aids",
      "question": "According to the Lewis concept, an acid is a substance that:",
      "options": [
        "Donates an electron pair",
        "Accepts a proton",
        "Accepts an electron pair",
        "Liberates hydroxide ions"
      ],
      "answer": 2
    },
    {
      "id": "aids-02",
      "topic": "aids",
      "question": "What is the concentration of Hydrochloric Acid USP?",
      "options": [
        "35–38% (w/w)",
        "9.5–10.5% (w/w)",
        "85–88% (w/w)",
        "94–98% (w/w)"
      ],
      "answer": 0
    },
    {
      "id": "aids-03",
      "topic": "aids",
      "question": "Which official acid is also known as “eau forte” or “aqua fortis”?",
      "options": [
        "Hydrochloric acid",
        "Phosphoric acid",
        "Sulfuric acid",
        "Nitric acid"
      ],
      "answer": 3
    },
    {
      "id": "aids-04",
      "topic": "aids",
      "question": "What is the role of diluted sulfuric acid in the preparation of saccharated ferrous carbonate?",
      "options": [
        "Antimicrobial preservative",
        "Acidifier",
        "Source of carbon dioxide",
        "Antioxidant"
      ],
      "answer": 1
    },
    {
      "id": "aids-05",
      "topic": "aids",
      "question": "Which official acid is associated with the preparation of Lister’s solution?",
      "options": [
        "Nitric acid",
        "Phosphoric acid",
        "Boric acid",
        "Hydrochloric acid"
      ],
      "answer": 2
    },
    {
      "id": "aids-06",
      "topic": "aids",
      "question": "Which official base is specifically listed as a standard solution for acid–base titrations?",
      "options": [
        "Calcium hydroxide",
        "Strong ammonia solution",
        "Sodium carbonate",
        "Sodium hydroxide"
      ],
      "answer": 3
    },
    {
      "id": "aids-07",
      "topic": "aids",
      "question": "Which pharmaceutical buffer is also called Phosphate Buffered Saline (PBS)?",
      "options": [
        "Sorensen phosphate buffer",
        "Gifford’s buffer",
        "Atkin’s and Pantin buffer",
        "Feldman’s buffer"
      ],
      "answer": 0
    },
    {
      "id": "aids-08",
      "topic": "aids",
      "question": "Which substances are responsible for temporary water hardness?",
      "options": [
        "Calcium and magnesium chlorides",
        "Calcium and magnesium bicarbonates",
        "Calcium and magnesium sulfates",
        "Calcium and magnesium chlorides and sulfates"
      ],
      "answer": 1
    },
    {
      "id": "aids-09",
      "topic": "aids",
      "question": "Which bulk monographed water is identified as the water of choice for extemporaneous compounding?",
      "options": [
        "Water for Injection",
        "Water for Hemodialysis",
        "Purified Water",
        "Pure Steam"
      ],
      "answer": 2
    },
    {
      "id": "aids-10",
      "topic": "aids",
      "question": "Which bulk monographed water is also known as “clean steam”?",
      "options": [
        "Purified Steam",
        "Sterile Steam",
        "Bulk Steam",
        "Pure Steam"
      ],
      "answer": 3
    },
    {
      "id": "aids-11",
      "topic": "aids",
      "question": "For at least how long must Purified Water be vigorously boiled when preparing carbon dioxide-free water?",
      "options": [
        "1 minute",
        "5 minutes",
        "10 minutes",
        "30 minutes"
      ],
      "answer": 1
    },
    {
      "id": "aids-12",
      "topic": "aids",
      "question": "Which process produces Deionized Water?",
      "options": [
        "Replacing cations and anions with H⁺ and OH⁻ using ion-exchange resins",
        "Vaporizing water and condensing the vapor into a purer state",
        "Boiling water and protecting it from atmospheric carbon dioxide",
        "Packaging Purified Water and rendering it sterile"
      ],
      "answer": 0
    },
    {
      "id": "aids-13",
      "topic": "aids",
      "question": "Which pairing of glass type and composition is correct?",
      "options": [
        "Type I — soda-lime-silica glass",
        "Type II — borosilicate glass",
        "Type III — treated soda-lime-silica glass",
        "Type I — borosilicate glass"
      ],
      "answer": 3
    },
    {
      "id": "aids-14",
      "topic": "aids",
      "question": "What is the purpose of the Glass Grains Test?",
      "options": [
        "To determine the concentration of an official acid on glass",
        "To identify the cause of water hardness on glass",
        "To differentiate the types of glass",
        "To determine the pH range of a buffer on glass"
      ],
      "answer": 2
    },
    {
      "id": "aids-15",
      "topic": "aids",
      "question": "Which antioxidant prevents oxidation in ferrous iodide syrup?",
      "options": [
        "Sulfur dioxide",
        "Hypophosphorous acid",
        "Sodium metabisulfite",
        "Argon gas"
      ],
      "answer": 1
    },
    {
      "id": "aids-16",
      "topic": "aids",
      "question": "The material gives the reaction “Lidocaine + HCl → Lidocaine HCl Injection USP.” Which pharmaceutical use of acids does this illustrate?",
      "options": [
        "Dissolving insoluble medicinals",
        "Preparing effervescent mixtures",
        "Preventing oxidation during storage",
        "Maintaining pH through a buffer system"
      ],
      "answer": 0
    },
    {
      "id": "aids-17",
      "topic": "aids",
      "question": "Why are buffers useful in maintaining the quality of pharmaceutical preparations?",
      "options": [
        "They ensure that all preparations are sterile.",
        "They remove calcium and magnesium salts from water.",
        "They prevent atmospheric oxygen from entering containers.",
        "They resist pH changes when small quantities of acid or alkali are added."
      ],
      "answer": 3
    },
    {
      "id": "aids-18",
      "topic": "aids",
      "question": "Which statement correctly distinguishes bulk Water for Injection from Sterile Water for Injection?",
      "options": [
        "Both must be sterile, but only bulk Water for Injection contains a preservative.",
        "Bulk Water for Injection is not required to be sterile; Sterile Water for Injection is packaged and rendered sterile.",
        "Bulk Water for Injection contains a preservative; Sterile Water for Injection is not required to be sterile.",
        "Both are not required to be sterile, but only Sterile Water for Injection is packaged."
      ],
      "answer": 1
    },
    {
      "id": "aids-19",
      "topic": "aids",
      "question": "Which statement correctly compares the uses of Type I and Type III glass containers?",
      "options": [
        "Type I is suitable for most parenteral and nonparenteral products; Type III is not used for parenteral products.",
        "Type I is used only for nonparenteral products; Type III is suitable for most parenteral products.",
        "Both types are suitable for most parenteral and nonparenteral products.",
        "Both types are excluded from use for parenteral products and powders for parenteral use."
      ],
      "answer": 0
    },
    {
      "id": "aids-20",
      "topic": "aids",
      "question": "How does nitrogen gas help extend the shelf life of cod liver oil and vitamin preparations?",
      "options": [
        "It releases sulfur dioxide into the package.",
        "It neutralizes acids present in the preparation.",
        "It displaces air containing oxygen and moisture.",
        "It maintains pH by forming a buffer system."
      ],
      "answer": 2
    },
    {
      "id": "aids-21",
      "topic": "aids",
      "question": "According to the Arrhenius concept, a base is a substance that:",
      "options": [
        "Liberates H⁺ ions",
        "Liberates OH⁻ ions",
        "Accepts an electron pair",
        "Donates a proton"
      ],
      "answer": 1
    },
    {
      "id": "aids-22",
      "topic": "aids",
      "question": "How is an acid defined under the Brønsted–Lowry concept?",
      "options": [
        "Electron-pair donor",
        "Electron-pair acceptor",
        "Proton acceptor",
        "Proton donor"
      ],
      "answer": 3
    },
    {
      "id": "aids-23",
      "topic": "aids",
      "question": "What are the products of the neutralization reaction?",
      "options": [
        "Salt and water",
        "Salt and hydrogen",
        "Carbon dioxide and water",
        "Salt and oxygen"
      ],
      "answer": 0
    },
    {
      "id": "aids-24",
      "topic": "aids",
      "question": "Which preparation is used for the treatment of gastric achlorhydria?",
      "options": [
        "Diluted Phosphoric Acid USP",
        "Boric acid solution",
        "Diluted Hydrochloric Acid USP",
        "Sulfuric Acid USP"
      ],
      "answer": 2
    },
    {
      "id": "aids-25",
      "topic": "aids",
      "question": "Which acid is also known as “nitromuriatic acid” or “aqua regia”?",
      "options": [
        "Phosphoric acid",
        "Nitric acid",
        "Hydrochloric acid",
        "Nitrohydrochloric acid"
      ],
      "answer": 3
    },
    {
      "id": "aids-26",
      "topic": "aids",
      "question": "Which preparation is also called Monsel’s solution?",
      "options": [
        "Mercuric nitrate solution",
        "Ferric subsulfate solution",
        "Boric acid solution",
        "Strong ammonia solution"
      ],
      "answer": 1
    },
    {
      "id": "aids-27",
      "topic": "aids",
      "question": "What is the concentration of Phosphoric Acid USP?",
      "options": [
        "85–88% (w/w)",
        "35–38% (w/w)",
        "94–98% (w/w)",
        "9.5–10.5% (w/w)"
      ],
      "answer": 0
    },
    {
      "id": "aids-28",
      "topic": "aids",
      "question": "What is the stated pH range of Gifford’s buffer?",
      "options": [
        "pH 6–8",
        "pH 5–7",
        "pH 5–9",
        "pH 7–9"
      ],
      "answer": 2
    },
    {
      "id": "aids-29",
      "topic": "aids",
      "question": "Which buffer contains boric acid, sodium carbonate, and sodium chloride?",
      "options": [
        "Sorensen phosphate buffer",
        "Atkin’s and Pantin buffer",
        "Gifford’s buffer",
        "Feldman’s buffer"
      ],
      "answer": 1
    },
    {
      "id": "aids-30",
      "topic": "aids",
      "question": "Which substances are responsible for permanent water hardness?",
      "options": [
        "Calcium and magnesium chlorides and sulfates",
        "Calcium and magnesium bicarbonates",
        "Sodium phosphate and sodium chloride",
        "Boric acid and sodium borate"
      ],
      "answer": 0
    },
    {
      "id": "aids-31",
      "topic": "aids",
      "question": "Which term is another name for Drinking Water?",
      "options": [
        "Deionized Water",
        "Purified Water",
        "Distilled Water",
        "Potable Water"
      ],
      "answer": 3
    },
    {
      "id": "aids-32",
      "topic": "aids",
      "question": "Which sterile monographed water is intended for inhalators and the preparation of inhalation solutions?",
      "options": [
        "Sterile Water for Irrigation",
        "Sterile Purified Water",
        "Sterile Water for Inhalation",
        "Bacteriostatic Water for Injection"
      ],
      "answer": 2
    },
    {
      "id": "aids-33",
      "topic": "aids",
      "question": "How is Distilled Water produced?",
      "options": [
        "By vaporizing water and condensing the vapor into a purer state",
        "By replacing dissolved ions using ion-exchange resins",
        "By adding an antimicrobial preservative to sterile water",
        "By packaging Purified Water and rendering it sterile"
      ],
      "answer": 0
    },
    {
      "id": "aids-34",
      "topic": "aids",
      "question": "Which antioxidant serves as a source of sulfur dioxide?",
      "options": [
        "Hypophosphorous acid",
        "Nitrogen gas",
        "Argon gas",
        "Sodium metabisulfite"
      ],
      "answer": 3
    },
    {
      "id": "aids-35",
      "topic": "aids",
      "question": "Which gas is listed as a preservative?",
      "options": [
        "Oxygen",
        "Argon",
        "Hydrogen",
        "Carbon dioxide"
      ],
      "answer": 1
    },
    {
      "id": "aids-36",
      "topic": "aids",
      "question": "Which explanation correctly connects the composition of effervescent mixtures with their pharmaceutical purpose?",
      "options": [
        "Citric acid supplies hydroxide ions, making oral drugs more palatable.",
        "Sodium bicarbonate prevents oxidation, improving the taste of oral drugs.",
        "Sodium bicarbonate supplies carbon dioxide, and the effervescent mixture helps make oral drugs more palatable.",
        "Tartaric acid provides antimicrobial preservation, making oral drugs more palatable."
      ],
      "answer": 2
    },
    {
      "id": "aids-37",
      "topic": "aids",
      "question": "Which of the following is true about potassium hydroxide and sodium hydroxide?",
      "options": [
        "Choosing potassium hydroxide involves a stronger, more deliquescent, and more expensive base.",
        "Choosing potassium hydroxide reduces cost while providing a stronger base.",
        "Choosing sodium hydroxide provides the more deliquescent and more expensive base.",
        "Choosing sodium hydroxide provides a stronger base at a higher cost."
      ],
      "answer": 0
    },
    {
      "id": "aids-38",
      "topic": "aids",
      "question": "Which feature explains the use of Bacteriostatic Water for Injection in preparing multidose parenteral products requiring repeated withdrawals?",
      "options": [
        "It contains salts that resist changes in pH.",
        "It is packaged exclusively in containers larger than 1 L.",
        "It is produced without a requirement for sterility.",
        "It contains one or more suitable antimicrobial preservatives."
      ],
      "answer": 3
    },
    {
      "id": "aids-39",
      "topic": "aids",
      "question": "Which statement correctly interprets the packaging limits for Sterile Water for Injection and Sterile Water for Irrigation?",
      "options": [
        "Both must be packaged in containers holding no more than 30 mL.",
        "Irrigation containers may exceed 1 L, while injection containers must not exceed 1 L.",
        "Injection containers may exceed 1 L, while irrigation containers must not exceed 1 L.",
        "Both must be packaged in multiple-dose containers holding more than 1 L."
      ],
      "answer": 1
    },
    {
      "id": "aids-40",
      "topic": "aids",
      "question": "A student claims that Type II glass is suitable only for nonparenteral products. Which statement best corrects this interpretation?",
      "options": [
        "Type II glass is suitable only for powders intended for parenteral use.",
        "Type II glass is suitable for all products regardless of their characteristics.",
        "Type II glass is suitable for most acidic and neutral aqueous products for both parenteral and nonparenteral uses.",
        "Type II glass is suitable only for nonaqueous products for both parenteral and nonparenteral uses."
      ],
      "answer": 2
    },
    {
      "id": "ions-01",
      "topic": "ions",
      "question": "Which ion is the principal cation in intracellular fluid?",
      "options": [
        "Sodium",
        "Potassium",
        "Calcium",
        "Magnesium"
      ],
      "answer": 1
    },
    {
      "id": "ions-02",
      "topic": "ions",
      "question": "Why is dietary intake of essential and trace elements necessary for metabolic processes?",
      "options": [
        "These elements provide all the energy required for metabolism.",
        "These elements replace the enzymes involved in biochemical reactions.",
        "The body produces these elements only when dietary intake is excessive.",
        "The body cannot produce these elements, and they support enzymes involved in metabolic reactions."
      ],
      "answer": 3
    },
    {
      "id": "ions-03",
      "topic": "ions",
      "question": "Which ion is the principal anion in intracellular fluid?",
      "options": [
        "Phosphate",
        "Bicarbonate",
        "Chloride",
        "Sodium"
      ],
      "answer": 0
    },
    {
      "id": "ions-04",
      "topic": "ions",
      "question": "Which statement identifies a shared function of manganese and selenium?",
      "options": [
        "Both are integral components of thyroid hormones.",
        "Both are principal cations in body fluids.",
        "Both help protect cells against damage associated with free radicals.",
        "Both are components of cysteine and methionine."
      ],
      "answer": 2
    },
    {
      "id": "ions-05",
      "topic": "ions",
      "question": "Which ion is the second most abundant cation in extracellular fluid?",
      "options": [
        "Calcium",
        "Potassium",
        "Magnesium",
        "Sodium"
      ],
      "answer": 0
    },
    {
      "id": "ions-06",
      "topic": "ions",
      "question": "Which compound is listed as an electrolyte replenisher?",
      "options": [
        "Sodium citrate",
        "Sodium biphosphate",
        "Potassium bicarbonate",
        "Potassium chloride"
      ],
      "answer": 3
    },
    {
      "id": "ions-07",
      "topic": "ions",
      "question": "Which compound is classified as a systemic alkalizer?",
      "options": [
        "Calcium chloride",
        "Sodium citrate",
        "Ammonium chloride",
        "Potassium chloride"
      ],
      "answer": 1
    },
    {
      "id": "ions-08",
      "topic": "ions",
      "question": "Which compound is classified as a systemic acidifier?",
      "options": [
        "Sodium bicarbonate",
        "Potassium citrate",
        "Ammonium chloride",
        "Potassium bicarbonate"
      ],
      "answer": 2
    },
    {
      "id": "ions-09",
      "topic": "ions",
      "question": "Which element is associated with hemoglobin?",
      "options": [
        "Copper",
        "Cobalt",
        "Molybdenum",
        "Iron"
      ],
      "answer": 3
    },
    {
      "id": "ions-10",
      "topic": "ions",
      "question": "Which element acts as a cofactor of redox enzymes such as cytochrome c oxidase?",
      "options": [
        "Copper",
        "Zinc",
        "Chromium",
        "Selenium"
      ],
      "answer": 0
    },
    {
      "id": "ions-11",
      "topic": "ions",
      "question": "Which element is described as essential for the development and maintenance of the immune system?",
      "options": [
        "Cobalt",
        "Molybdenum",
        "Zinc",
        "Iodine"
      ],
      "answer": 2
    },
    {
      "id": "ions-12",
      "topic": "ions",
      "question": "Which element is described as required to potentiate insulin and support normal glucose metabolism?",
      "options": [
        "Iron",
        "Chromium",
        "Sulfur",
        "Calcium"
      ],
      "answer": 1
    },
    {
      "id": "ions-13",
      "topic": "ions",
      "question": "Which explanation best connects iodine with cellular metabolism?",
      "options": [
        "Iodine serves as the principal intracellular cation.",
        "Iodine forms part of thyroid hormones needed for cellular metabolism.",
        "Iodine forms the Moco cofactor used in redox reactions.",
        "Iodine acts as the metallic component of vitamin B12."
      ],
      "answer": 1
    },
    {
      "id": "ions-14",
      "topic": "ions",
      "question": "Which element is an integral part of vitamin B12 or cyanocobalamin?",
      "options": [
        "Chromium",
        "Iron",
        "Cobalt",
        "Zinc"
      ],
      "answer": 2
    },
    {
      "id": "ions-15",
      "topic": "ions",
      "question": "Which element is present in proteins containing the amino acids cysteine and methionine?",
      "options": [
        "Selenium",
        "Iodine",
        "Copper",
        "Sulfur"
      ],
      "answer": 3
    },
    {
      "id": "gi-01",
      "topic": "gi",
      "question": "Which compound is listed as antacid?",
      "options": [
        "Magnesium nitrate",
        "Magnesium citrate",
        "Magnesium oxide",
        "Magnesium sulfate"
      ],
      "answer": 2
    },
    {
      "id": "gi-02",
      "topic": "gi",
      "question": "Which explanation best describes the action of bulk-forming laxatives?",
      "options": [
        "They retain fluid and increase stool bulk, which can stimulate peristalsis.",
        "They reduce stool weight and intestinal bulk, which stimulates peristalsis.",
        "They lubricate the intestines without retaining fluid in the stool.",
        "They act through local irritation that increases intestinal secretions and motility."
      ],
      "answer": 0
    },
    {
      "id": "gi-03",
      "topic": "gi",
      "question": "Which preparation is listed as antacid?",
      "options": [
        "Sulfurated Lime",
        "Chlorinated Lime",
        "Ringer’s solution",
        "Precipitated calcium carbonate"
      ],
      "answer": 3
    },
    {
      "id": "gi-04",
      "topic": "gi",
      "question": "What is the composition of magaldrate?",
      "options": [
        "Alumina, magnesia, and calcium carbonate",
        "Aluminum magnesium hydroxide sulfate",
        "Calcium and magnesium carbonate",
        "Alumina and magnesium trisilicate"
      ],
      "answer": 1
    },
    {
      "id": "gi-05",
      "topic": "gi",
      "question": "Why does the presence of diarrhea alone not establish the need for antibacterial treatment in the material?",
      "options": [
        "Antibacterials are reserved exclusively for diarrhea following gastrointestinal surgery.",
        "All cases of diarrhea result from impaired digestion without infection.",
        "Antibacterials are intended only for diarrhea caused by chemical poisons.",
        "Diarrhea has several possible causes, and antibacterials are indicated only when infection is present."
      ],
      "answer": 3
    },
    {
      "id": "gi-06",
      "topic": "gi",
      "question": "What is the pharmaceutical action of simethicone?",
      "options": [
        "Protective and antiseptic",
        "Saline and osmotic laxative",
        "Defoaming and antiflatulence",
        "Bulk-forming and lubricating"
      ],
      "answer": 2
    },
    {
      "id": "gi-07",
      "topic": "gi",
      "question": "How is diarrhea described?",
      "options": [
        "A disease caused exclusively by bacteria",
        "A symptom rather than a disease",
        "A condition caused exclusively by drugs",
        "A normal consequence of improved absorption"
      ],
      "answer": 1
    },
    {
      "id": "gi-08",
      "topic": "gi",
      "question": "Which comparison correctly distinguishes emollient laxatives from saline or osmotic laxatives?",
      "options": [
        "Emollients draw water into the bowel; osmotic laxatives lubricate stool passage.",
        "Emollients lubricate stool passage; osmotic laxatives draw water into the bowel.",
        "Emollients increase stool bulk; osmotic laxatives coat the intestinal mucosa.",
        "Emollients adsorb toxins; osmotic laxatives cause local intestinal irritation."
      ],
      "answer": 1
    },
    {
      "id": "gi-09",
      "topic": "gi",
      "question": "Which complication can result from diarrhea?",
      "options": [
        "Increased nutrient absorption",
        "Reduced intestinal bulk",
        "Dehydration",
        "Suppressed peristalsis"
      ],
      "answer": 2
    },
    {
      "id": "gi-10",
      "topic": "gi",
      "question": "Which bismuth compound is described as both protective and antiseptic?",
      "options": [
        "Bismuth subnitrate",
        "Bismuth subgallate",
        "Bismuth subcarbonate",
        "Bismuth magma"
      ],
      "answer": 0
    },
    {
      "id": "gi-11",
      "topic": "gi",
      "question": "Which statement correctly compares magnesium trisilicate and aluminum hydroxide?",
      "options": [
        "Both are listed as adsorbents without antacid or protective actions.",
        "Aluminum hydroxide has three listed actions, while magnesium trisilicate acts only as an antacid.",
        "Both have antacid and protective actions, while magnesium trisilicate is also listed as an adsorbent.",
        "Both have protective and antiseptic actions without antacid activity."
      ],
      "answer": 2
    },
    {
      "id": "gi-12",
      "topic": "gi",
      "question": "Which pair consists of agents listed as adsorbents?",
      "options": [
        "Bisacodyl and senna",
        "Kaolin and activated charcoal",
        "Mineral oil and glycerin",
        "Psyllium and methylcellulose"
      ],
      "answer": 1
    },
    {
      "id": "gi-13",
      "topic": "gi",
      "question": "How are cathartics and purgatives distinguished from laxatives?",
      "options": [
        "They produce a higher degree of effect.",
        "They produce a lower degree of effect.",
        "They act exclusively through lubrication.",
        "They act exclusively by increasing stool bulk."
      ],
      "answer": 0
    },
    {
      "id": "gi-14",
      "topic": "gi",
      "question": "Which agent is an example of a stimulant laxative?",
      "options": [
        "Milk of magnesia",
        "Psyllium",
        "Mineral oil",
        "Senna"
      ],
      "answer": 3
    },
    {
      "id": "gi-15",
      "topic": "gi",
      "question": "Which agent is an example of a bulk-forming laxative?",
      "options": [
        "Glycerin",
        "Lactulose",
        "Methylcellulose",
        "Bisacodyl"
      ],
      "answer": 2
    },
    {
      "id": "topical-01",
      "topic": "topical",
      "question": "Which preparation is listed as an oxidizing germicide?",
      "options": [
        "Zinc sulfate",
        "Hydrogen peroxide solution",
        "Silver nitrate",
        "Sodium borate"
      ],
      "answer": 1
    },
    {
      "id": "topical-02",
      "topic": "topical",
      "question": "Which compound is listed as a precipitating germicide?",
      "options": [
        "Calamine",
        "Titanium dioxide",
        "Aluminum acetate",
        "Silver nitrate"
      ],
      "answer": 3
    },
    {
      "id": "topical-03",
      "topic": "topical",
      "question": "Which compound is classified as an astringent?",
      "options": [
        "Aluminum acetate",
        "Zinc stearate",
        "Ferric oxide",
        "Talc"
      ],
      "answer": 0
    },
    {
      "id": "topical-04",
      "topic": "topical",
      "question": "Which agent is listed as a topical protective?",
      "options": [
        "Sodium hypochlorite",
        "Ferric chloride",
        "Calamine",
        "Cupric citrate"
      ],
      "answer": 2
    },
    {
      "id": "topical-05",
      "topic": "topical",
      "question": "Which compound is listed as an inorganic pigment?",
      "options": [
        "Ferric oxide",
        "Zinc acetate",
        "Calcium hydroxide",
        "Sodium borate"
      ],
      "answer": 0
    },
    {
      "id": "topical-06",
      "topic": "topical",
      "question": "Which compound is listed as a dentifrice?",
      "options": [
        "Sodium fluoride",
        "Calcium fluoride",
        "Sodium perborate",
        "Sodium chloride"
      ],
      "answer": 2
    },
    {
      "id": "topical-07",
      "topic": "topical",
      "question": "Which compound is classified as a dental prophylactic?",
      "options": [
        "Precipitated calcium carbonate",
        "Sodium perborate",
        "Stannic oxide",
        "Calcium fluoride"
      ],
      "answer": 3
    },
    {
      "id": "topical-08",
      "topic": "topical",
      "question": "Which combination constitutes soda lime?",
      "options": [
        "Calcium hydroxide and sodium chloride",
        "Calcium hydroxide and sodium or potassium hydroxide",
        "Barium hydroxide and sodium or potassium hydroxide",
        "Magnesium oxide and sodium carbonate"
      ],
      "answer": 1
    },
    {
      "id": "topical-09",
      "topic": "topical",
      "question": "Which compound is listed as an antidote for thallium poisoning?",
      "options": [
        "Sodium nitrite",
        "Sodium thiosulfate",
        "Ferric ferrocyanide",
        "Ferric hydroxide"
      ],
      "answer": 2
    },
    {
      "id": "topical-10",
      "topic": "topical",
      "question": "Which preparation is listed as a respiratory stimulant?",
      "options": [
        "Aromatic ammonia spirit",
        "Sodium iodide",
        "Hydroiodic acid syrup",
        "Ammonium chloride"
      ],
      "answer": 0
    },
    {
      "id": "topical-11",
      "topic": "topical",
      "question": "Which compound is listed as an expectorant?",
      "options": [
        "Sodium fluoride",
        "Soda lime",
        "Aluminum acetate",
        "Sodium iodide"
      ],
      "answer": 3
    },
    {
      "id": "topical-12",
      "topic": "topical",
      "question": "Which compound is associated with Dobell’s solution?",
      "options": [
        "Sodium perborate",
        "Sodium borate",
        "Sodium nitrite",
        "Sodium chloride"
      ],
      "answer": 1
    },
    {
      "id": "topical-13",
      "topic": "topical",
      "question": "How is an enema administered?",
      "options": [
        "By rectal administration",
        "By oral administration",
        "By topical administration",
        "By intravenous administration"
      ],
      "answer": 0
    },
    {
      "id": "topical-14",
      "topic": "topical",
      "question": "Which agent is specifically associated with the treatment of thyroid diseases and cancer?",
      "options": [
        "Technetium-99m",
        "Gold-198",
        "Barium sulfate",
        "Iodine-131"
      ],
      "answer": 3
    },
    {
      "id": "topical-15",
      "topic": "topical",
      "question": "Which element is used for bone replacement, temporary braces of long bones, and closing openings in the skull?",
      "options": [
        "Gold",
        "Silver",
        "Tantalum",
        "Zinc"
      ],
      "answer": 2
    },
    {
      "id": "topical-16",
      "topic": "topical",
      "question": "Titanium dioxide is classified as an inorganic pigment and:",
      "options": [
        "An oxidizing germicide.",
        "A topical protective.",
        "A dental prophylactic.",
        "An antacid."
      ],
      "answer": 1
    },
    {
      "id": "topical-17",
      "topic": "topical",
      "question": "Why are carbon dioxide absorbers used during general anesthesia when a patient rebreathes air?",
      "options": [
        "They prevent the buildup of carbon dioxide.",
        "They supply carbon dioxide to stimulate respiration.",
        "They replace the oxygen needed for respiration.",
        "They provide an artificial atmosphere composed of helium."
      ],
      "answer": 0
    },
    {
      "id": "topical-18",
      "topic": "topical",
      "question": "Under which category is talc listed?",
      "options": [
        "Astringents",
        "Protectives",
        "Oxidizing germicides",
        "Inorganic pigments"
      ],
      "answer": 1
    },
    {
      "id": "topical-19",
      "topic": "topical",
      "question": "How does the acidic pH of the citric acid, magnesium oxide, and sodium carbonate bladder irrigant contribute to its use?",
      "options": [
        "It forms a protective coating over bladder calculi.",
        "It makes bladder calculi visible during imaging.",
        "It provides conditions conducive to dissolving bladder calculi.",
        "It increases bladder alkalinity to dissolve calculi."
      ],
      "answer": 2
    },
    {
      "id": "topical-20",
      "topic": "topical",
      "question": "Which comparison correctly distinguishes the structural repair uses of gold and Plaster of Paris?",
      "options": [
        "Gold provides temporary support for broken bones; Plaster of Paris is used for dental restorations.",
        "Gold is used for dental crowns, bridges, and inlays; Plaster of Paris provides temporary support for broken bones.",
        "Gold replaces long bones; Plaster of Paris is used to close openings in the skull.",
        "Gold closes openings in the skull; Plaster of Paris replaces long bones."
      ],
      "answer": 1
    }
  ]
};
  if (typeof module === "object" && module.exports) module.exports = bank;
  else root.QUIZ_BANK = bank;
})(typeof globalThis !== "undefined" ? globalThis : this);
