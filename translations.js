// Internationalization (i18n) System
let currentLang = 'en'; // Default language

const TRANSLATIONS = {
    en: {
        // Header
        appTitle: "Sahay | Will Creator",
        btnPreview: "Preview Will",

        // Progress Bar
        pbWhy: "Why",
        pbYou: "You",
        pbExecutor: "Executor",
        pbHeirs: "Heirs",
        pbAssets: "Assets",
        pbGenerate: "Generate",

        // Step 0: Education
        s0Title: "1. Why Create a Will?",
        disclaimerTitle: "Disclaimer:",
        disclaimerText: "This website is a self-help educational tool and does not provide legal advice. The generated document is a draft based on standard Indian legal templates. For complex estates, disputes, or tax planning, please consult a qualified lawyer. This tool has no official legal standing.",
        nomineeTitle: "⚠️ The Truth About \"Nominees\"",
        nomineeText: "There is a dangerous misconception in India that a Nominee becomes the owner of the asset upon death. This is false.",
        legalRealityTitle: "The Legal Reality:",
        legalRealityText: "A Nominee is merely a \"Trustee\" or \"Custodian.\" Their only job is to hold the money/asset until it can be distributed to the Legal Heirs.",
        consequenceTitle: "The Consequence:",
        consequenceText: "If you don't write a Will, your Nominee might have to fight legal battles with other relatives who claim a share of your wealth under religious succession laws. A Will overrides this and makes your wish the final law.",
        offlineTitle: "📝 You Can Do This Offline (No App Needed)",
        offlineText: "We built this app to help you, but you should know your rights. You can create a perfectly valid Will on a plain piece of A4 paper.",
        noStampTitle: "No Stamp Paper:",
        noStampText: "A Will does NOT need to be written on stamp paper.",
        handwrittenTitle: "Handwritten is Best:",
        handwrittenText: "Courts often trust handwritten wills more than typed ones as they are harder to forge.",
        goldenRuleTitle: "The Golden Rule:",
        goldenRuleText: "You must sign it in the presence of Two Witnesses, and they must sign it immediately after you.",
        registrationTitle: "Registration:",
        registrationText: "While optional, registering your Will at the Sub-Registrar's office is highly recommended.",
        resumeDraftTitle: "We found a saved draft!",
        btnResume: "Resume Draft",
        btnStartFresh: "Start Fresh (Delete Data)",
        btnStart: "Start Creating My Will",

        // Step 1: Personal Details
        s1Title: "2. Your Details and Religion",
        legalContextTitle: "Legal Context:",
        legalContextText: "Succession laws in India vary based on religion.",
        lblReligion: "Select Your Religion:",
        optSelect: "-- Select --",
        optHindu: "Hindu (includes Sikh, Jain, Buddhist)",
        optChristian: "Christian / Parsi",
        optMuslim: "Muslim",
        optOther: "Other",
        lblCustomReligion: "Please specify your religion:",
        phCustomReligion: "e.g. Jewish, Bahai",
        muslimWarningTitle: "Important for Muslims (Sharia Law)",
        muslimWarningText1: "Under Islamic succession laws, testamentary freedom is limited:",
        mwRuleTitle: "1/3 Rule:",
        mwRuleText: "You can generally only bequeath 1/3 of your total estate through a Will. The remaining 2/3 must be distributed to your legal heirs according to shares prescribed in the Quran.",
        mwConsentTitle: "Consent Required:",
        mwConsentText: "If you wish to give more than 1/3, or if you want to give any amount to a legal heir who is already receiving a fixed share, you generally need the consent of all other heirs after your death. Without this consent, that part of the Will may be invalid.",
        hinduWarningTitle: "Hindu Succession Act",
        hwNoteTitle: "Note:",
        hwNoteText: "For the purposes of succession laws in India, Sikhs, Jains, and Buddhists are governed by the Hindu Succession Act.",
        hwPropTitle: "Ancestral vs. Self-Acquired Property:",
        hwSelfTitle: "Self-Acquired Property:",
        hwSelfText: "Property you earned or bought yourself. You have 100% freedom to give it to anyone.",
        hwAncestralTitle: "Ancestral Property:",
        hwAncestralText: "Property inherited up to 4 generations ago. You cannot will the entire property, only your share. Other family members (coparceners) have a birthright in this property.",
        lblFullName: "Full Legal Name",
        phFullName: "e.g. Rahul Sharma",
        lblFatherName: "Parent / Spouse Name",
        optSonOf: "Son of",
        optDaughterOf: "Daughter of",
        optWifeOf: "Wife of",
        phFatherName: "Name",
        lblDob: "Date of Birth",
        lblAddress: "Permanent Address",
        phAddress: "Full Address",
        lblPlace: "Place of Signing Will (City)",
        phPlace: "e.g. Mumbai, Maharashtra",
        placeHelper: "This establishes legal jurisdiction.",
        btnBack: "← Back",
        btnNextExecutor: "Next: Executor",

        // Step 2: Executor
        s2Title: "3. The Executor",
        s2NoteTitle: "Note:",
        s2NoteText: "The Executor must be a Major (18+ years) and of Sound Mind. They will legally represent you after death.",
        lblExName: "Executor Name",
        phExName: "Full Name",
        lblExRel: "Relationship",
        phExRel: "e.g. Brother",
        exRelHelper: "Helps distinguish them from others with similar names.",
        lblExAddress: "Executor Address",
        phExAddress: "Current Address",
        lblExParentName: "Executor's Parent / Spouse Name",
        btnNextBeneficiaries: "Next: Beneficiaries",

        // Step 3: Beneficiaries
        s3Title: "4. Your Beneficiaries",
        s3TipTitle: "Flexible Management:",
        s3TipText: "Add your heirs below. You can assign assets to them in the next step.",
        btnAddBeneficiary: "+ Add New Beneficiary",
        btnNextAssets: "Next: Distribute Assets",

        // Step 4: Assets
        s4Title: "5. Distribute Assets",
        s4TipsTitle: "💡 Asset Identification Tips",
        s4TipsText: "You can describe assets in general terms or include specific details to help your executor locate them.",
        s4PrivacyTitle: "⚠️ Privacy Note:",
        s4PrivacyText: "Wills may become public records during probate. Consider:",
        s4PrivacyPt1: "Using partial identifiers (e.g. \"Account ending in 1234\")",
        s4PrivacyPt2: "Keeping full details in a separate private Asset Inventory document that you give directly to your executor (not filed with the Will)",
        s4SpecificTitle: "Specific Assets",
        s4SpecificDesc: "Add detailed assets (Flat, Bank A/C, Insurance, etc.) here.",
        btnAddAsset: "Add Another Asset",
        s4ResidualTitle: "Residual Assets (Everything Else)",
        s4ResidualDesc: "Covers assets not listed above or future acquisitions.",
        btnAddResidual: "Add Residual Beneficiary",
        btnFinish: "Finish & Review",

        // Preview Overlay
        btnClosePreview: "✕ Close Preview",
        previewDisclaimer: "This is a preview. Final formatting may vary slightly in the PDF.",

        // Success Overlay
        successTitle: "Will Draft Ready!",
        successSubtitle: "Choose a format to download your Will.",
        btnDownloadPDF: "Download PDF",
        btnDownloadRTF: "Download Editable (.rtf)",
        nextStepsTitle: "📋 Critical Next Steps",
        nsPrintTitle: "Print",
        nsPrintText: "Print on high-quality A4 paper. Digital signatures are NOT valid for Wills in India.",
        nsSignTitle: "Sign Every Page",
        nsSignText: "To prevent tampering or page swapping, You and your two witnesses must sign the bottom of every single page. A Will without signatures on all pages can be challenged in court.",
        nsSignReminder: "REMINDER: Beneficiaries must NOT sign the Will.",
        nsSafeTitle: "Safe Storage",
        nsSafeText: "Store safely and tell your Executor where it is.",
        nsVideoTitle: "Record a Video Will (Pro Tip)",
        nsVideoText: "Record a video on your phone while signing. Read the Will aloud to prove sound mind.",

        // PDF/RTF Document Content
        pdfTitle: "LAST WILL AND TESTAMENT",
        pdfRevocationTitle: "1. REVOCATION OF PRIOR WILLS",
        pdfRevocationText: "I hereby revoke all former Wills and Codicils made by me. I declare I am in good health and sound mind, making this Will voluntarily.",
        pdfExecutorTitle: "2. APPOINTMENT OF EXECUTOR",
        pdfDistributionTitle: "3. DISTRIBUTION OF ASSETS",
        pdfDistributionIntro: "I bequeath my assets as follows:",
        pdfResidualTitle: "4. RESIDUAL CLAUSE",
        pdfResidualIntro: "All other property (Rest, Residue, and Remainder) I bequeath to:",
        pdfSignatureTitle: "5. EXECUTION",
        pdfSignatureText: "IN WITNESS WHEREOF, I have set my hand to this my Last Will and Testament on this day.",
        pdfTestatorLabel: "TESTATOR",
        pdfWitness1Label: "WITNESS 1",
        pdfWitness2Label: "WITNESS 2",
        pdfDescriptionLabel: "Description",
        pdfBeneficiariesLabel: "Beneficiaries",
        pdfAlternateLabel: "Alternate",
        pdfMinorLabel: "Minor",
        pdfGuardianLabel: "Guardian",
        pdfRelLabel: "Rel",
        pdfReligionLabel: "Religion",
        pdfResidingAt: "residing at",
        pdfToBeThe: "to be the sole Executor of this Will.",
        pdfIAppoint: "I appoint",
        pdfBeingOfSound: "being of sound mind and memory, do hereby make, publish and declare this to be my Last Will and Testament.",

        // Dynamic Beneficiary Form Fields
        dynNewBeneficiary: "New Beneficiary",
        dynExpandDetails: "Expand to add details...",
        dynRelation: "Relation",
        dynEdit: "Edit",
        dynFullName: "Full Name",
        dynRelationship: "Relationship",
        dynPhRelationship: "e.g. Son",
        dynPermAddress: "Permanent Address",
        dynPhAddress: "Full Address",
        dynParentSpouse: "Parent / Spouse Name",
        dynPhName: "Name",
        dynAge: "Age (if minor)",
        dynIsMinor: "Is this beneficiary a minor?",
        dynGuardianName: "Guardian Name",
        dynPhGuardianName: "Guardian Name",
        dynGuardianRel: "Guardian Relationship",
        dynPhGuardianRel: "e.g. Mother",
        dynGuardianParent: "Guardian's Parent / Spouse Name",
        dynGuardianAddress: "Guardian Address",
        dynPhGuardianAddress: "Address",
        dynDefaultAlternate: "Default Alternate (if this person predeceases you)",

        // Dynamic Asset Form Fields
        dynNewAsset: "New Asset",
        dynSelectType: "Select type to configure...",
        dynAssetType: "Asset Type",
        dynSelectAssetType: "-- Select Asset Type --",
        dynDescription: "Description",
        dynBeneficiaries: "Beneficiaries",
        dynPercentShare: "% Share",
        dynAlternate: "Alternate",
        dynAddShare: "+ Add Share",
        dynIndivisibleWarning: "Indivisible Asset Warning: Splitting assets like Real Estate or Vehicles often leads to disputes.",

        // Asset Type Options
        assetOptRealEstate: "🏠 Real Estate",
        assetOptFlat: "Flat / House",
        assetOptLand: "Land / Plot",
        assetOptShop: "Shop / Office",
        assetOptBankCash: "💰 Bank & Cash",
        assetOptSavings: "Savings / Current",
        assetOptFD: "Fixed Deposit",
        assetOptLocker: "Bank Locker",
        assetOptLoan: "Money Owed (Loan)",
        assetOptInvestments: "📈 Investments",
        assetOptNPS: "NPS / EPF / Gratuity",
        assetOptMF: "Mutual Funds",
        assetOptDemat: "Demat / Stocks",
        assetOptCrypto: "Crypto",
        assetOptInsurance: "Life Insurance",
        assetOptBusiness: "💼 Business",
        assetOptESOP: "ESOPs",
        assetOptBusinessInt: "Business / Partnership",
        assetOptValuables: "💍 Valuables",
        assetOptJewelry: "Jewelry / Gold",
        assetOptVehicle: "Vehicle",
    },
    hi: {
        // Header
        appTitle: "सहाय | विल निर्माता",
        btnPreview: "वसीयत पूर्वावलोकन",

        // Progress Bar
        pbWhy: "क्यों",
        pbYou: "आप",
        pbExecutor: "निष्पादक",
        pbHeirs: "वारिस",
        pbAssets: "संपत्ति",
        pbGenerate: "बनाएं",

        // Step 0: Education
        s0Title: "1. वसीयत क्यों बनाएं?",
        disclaimerTitle: "अस्वीकरण:",
        disclaimerText: "यह वेबसाइट एक स्वयं सहायता शैक्षिक उपकरण है और कानूनी सलाह प्रदान नहीं करती है। उत्पन्न दस्तावेज मानक भारतीय कानूनी टेम्पलेट्स पर आधारित एक मसौदा है। जटिल संपत्तियों, विवादों या कर नियोजन के लिए, कृपया एक योग्य वकील से परामर्श करें। इस उपकरण का कोई आधिकारिक कानूनी आधार नहीं है।",
        nomineeTitle: "⚠️ \"नॉमिनी\" के बारे में सच्चाई",
        nomineeText: "भारत में यह एक खतरनाक गलतफहमी है कि मृत्यु के बाद नॉमिनी संपत्ति का मालिक बन जाता है। यह गलत है।",
        legalRealityTitle: "कानूनी वास्तविकता:",
        legalRealityText: "एक नॉमिनी केवल एक \"ट्रस्टी\" या \"कस्टोडियन\" होता है। उनका एकमात्र काम पैसे/संपत्ति को तब तक अपने पास रखना है जब तक कि इसे कानूनी वारिसों को वितरित न किया जा सके।",
        consequenceTitle: "परिणाम:",
        consequenceText: "यदि आप वसीयत नहीं लिखते हैं, तो आपके नॉमिनी को धार्मिक उत्तराधिकार कानूनों के तहत आपकी संपत्ति में हिस्सेदारी का दावा करने वाले अन्य रिश्तेदारों के साथ कानूनी लड़ाई लड़नी पड़ सकती है। एक वसीयत इसे ओवरराइड करती है और आपकी इच्छा को अंतिम कानून बनाती है।",
        offlineTitle: "📝 आप इसे ऑफ़लाइन कर सकते हैं (किसी ऐप की आवश्यकता नहीं)",
        offlineText: "हमने आपकी मदद के लिए यह ऐप बनाया है, लेकिन आपको अपने अधिकारों को जानना चाहिए। आप सादे A4 पेपर पर पूरी तरह से वैध वसीयत बना सकते हैं।",
        noStampTitle: "कोई स्टाम्प पेपर नहीं:",
        noStampText: "वसीयत को स्टाम्प पेपर पर लिखने की आवश्यकता नहीं है।",
        handwrittenTitle: "हस्तलिखित सबसे अच्छा है:",
        handwrittenText: "अदालतें अक्सर टाइप किए गए वसीयत से अधिक हस्तलिखित वसीयत पर भरोसा करती हैं क्योंकि उन्हें जाली बनाना कठिन होता है।",
        goldenRuleTitle: "सुनहरा नियम:",
        goldenRuleText: "आपको दो गवाहों की उपस्थिति में इस पर हस्ताक्षर करना होगा, और उन्हें आपके तुरंत बाद इस पर हस्ताक्षर करना होगा।",
        registrationTitle: "पंजीकरण:",
        registrationText: "हालांकि वैकल्पिक है, उप-पंजीयक कार्यालय में अपनी वसीयत को पंजीकृत करना अत्यधिक अनुशंसित है।",
        resumeDraftTitle: "हमें एक सहेजा गया ड्राफ्ट मिला!",
        btnResume: "ड्राफ्ट फिर से शुरू करें",
        btnStartFresh: "नई शुरुआत करें (डेटा हटाएं)",
        btnStart: "मेरी वसीयत बनाना शुरू करें",

        // Step 1: Personal Details
        s1Title: "2. आपका विवरण और धर्म",
        legalContextTitle: "कानूनी संदर्भ:",
        legalContextText: "भारत में उत्तराधिकार कानून धर्म के आधार पर भिन्न होते हैं।",
        lblReligion: "अपना धर्म चुनें:",
        optSelect: "-- चुनें --",
        optHindu: "हिंदू (सिख, जैन, बौद्ध सहित)",
        optChristian: "ईसाई / पारसी",
        optMuslim: "मुस्लिम",
        optOther: "अन्य",
        lblCustomReligion: "कृपया अपना धर्म निर्दिष्ट करें:",
        phCustomReligion: "जैसे यहूदी, बहाई",
        muslimWarningTitle: "मुस्लिमों के लिए महत्वपूर्ण (शरिया कानून)",
        muslimWarningText1: "इस्लामिक उत्तराधिकार कानूनों के तहत, वसीयतनामा स्वतंत्रता सीमित है:",
        mwRuleTitle: "1/3 नियम:",
        mwRuleText: "आप आम तौर पर वसीयत के माध्यम से अपनी कुल संपत्ति का केवल 1/3 हिस्सा ही वसीयत कर सकते हैं। शेष 2/3 हिस्सा कुरान में निर्धारित शेयरों के अनुसार आपके कानूनी वारिसों को वितरित किया जाना चाहिए।",
        mwConsentTitle: "सहमति आवश्यक:",
        mwConsentText: "यदि आप 1/3 से अधिक देना चाहते हैं, या यदि आप किसी कानूनी वारिस को कोई राशि देना चाहते हैं जो पहले से ही एक निश्चित हिस्सा प्राप्त कर रहा है, तो आपको आमतौर पर अपनी मृत्यु के बाद अन्य सभी वारिसों की सहमति की आवश्यकता होती है। इस सहमति के बिना, वसीयत का वह हिस्सा अमान्य हो सकता है।",
        hinduWarningTitle: "हिंदू उत्तराधिकार अधिनियम",
        hwNoteTitle: "नोट:",
        hwNoteText: "भारत में उत्तराधिकार कानूनों के उद्देश्य के लिए, सिख, जैन और बौद्ध हिंदू उत्तराधिकार अधिनियम द्वारा शासित होते हैं।",
        hwPropTitle: "पैतृक बनाम स्व-अर्जित संपत्ति:",
        hwSelfTitle: "स्व-अर्जित संपत्ति:",
        hwSelfText: "वह संपत्ति जो आपने खुद कमाई या खरीदी है। आपको इसे किसी को भी देने की 100% स्वतंत्रता है।",
        hwAncestralTitle: "पैतृक संपत्ति:",
        hwAncestralText: "4 पीढ़ियों पहले तक विरासत में मिली संपत्ति। आप पूरी संपत्ति को वसीयत नहीं कर सकते, केवल अपना हिस्सा। परिवार के अन्य सदस्यों (सहदायिकों) का इस संपत्ति में जन्मसिद्ध अधिकार है।",
        lblFullName: "पूरा कानूनी नाम",
        phFullName: "जैसे राहुल शर्मा",
        lblFatherName: "माता-पिता / जीवनसाथी का नाम",
        optSonOf: "पुत्र",
        optDaughterOf: "पुत्री",
        optWifeOf: "पत्नी",
        phFatherName: "नाम",
        lblDob: "जन्म तिथि",
        lblAddress: "स्थायी पता",
        phAddress: "पूरा पता",
        lblPlace: "वसीयत पर हस्ताक्षर करने का स्थान (शहर)",
        phPlace: "जैसे मुंबई, महाराष्ट्र",
        placeHelper: "यह कानूनी अधिकार क्षेत्र स्थापित करता है।",
        btnBack: "← पीछे",
        btnNextExecutor: "अगला: Executor (निष्पादक)",

        // Step 2: Executor
        s2Title: "3. Executor (निष्पादक)",
        s2NoteTitle: "नोट:",
        s2NoteText: "Executor एक वयस्क (18+ वर्ष) और स्वस्थ दिमाग का होना चाहिए। वे मृत्यु के बाद कानूनी रूप से आपका प्रतिनिधित्व करेंगे।",
        lblExName: "Executor का नाम",
        phExName: "पूरा नाम",
        lblExRel: "संबंध (Relationship)",
        phExRel: "जैसे भाई",
        exRelHelper: "समान नाम वाले अन्य लोगों से उन्हें अलग करने में मदद करता है।",
        lblExAddress: "Executor का पता",
        phExAddress: "वर्तमान पता",
        lblExParentName: "Executor के माता-पिता / जीवनसाथी का नाम",
        btnNextBeneficiaries: "अगला: Beneficiaries (लाभार्थी)",

        // Step 3: Beneficiaries
        s3Title: "4. आपके Beneficiaries (लाभार्थी)",
        s3TipTitle: "लचीला प्रबंधन:",
        s3TipText: "नीचे अपने वारिसों को जोड़ें। आप अगले चरण में उन्हें Assets आवंटित कर सकते हैं।",
        btnAddBeneficiary: "+ नया Beneficiary जोड़ें",
        btnNextAssets: "अगला: Assets (संपत्ति) वितरित करें",

        // Step 4: Assets
        s4Title: "5. Assets (संपत्ति) वितरित करें",
        s4TipsTitle: "💡 Asset पहचान युक्तियाँ",
        s4TipsText: "आप Asset का वर्णन सामान्य शब्दों में कर सकते हैं या अपने Executor को उन्हें खोजने में मदद करने के लिए विशिष्ट विवरण शामिल कर सकते हैं।",
        s4PrivacyTitle: "⚠️ गोपनीयता नोट:",
        s4PrivacyText: "प्रोबेट के दौरान वसीयत सार्वजनिक रिकॉर्ड बन सकती है। विचार करें:",
        s4PrivacyPt1: "आंशिक पहचानकर्ताओं का उपयोग करना (जैसे \"खाता 1234 में समाप्त हो रहा है\")",
        s4PrivacyPt2: "एक अलग निजी संपत्ति सूची दस्तावेज में पूरा विवरण रखना जो आप सीधे अपने निष्पादक को देते हैं (वसीयत के साथ दाखिल नहीं किया गया)",
        s4SpecificTitle: "विशिष्ट Assets",
        s4SpecificDesc: "यहाँ विस्तृत Assets (फ्लैट, बैंक खाता, बीमा, आदि) जोड़ें।",
        btnAddAsset: "एक और Asset जोड़ें",
        s4ResidualTitle: "अवशिष्ट Assets (बाकी सब कुछ)",
        s4ResidualDesc: "ऊपर सूचीबद्ध नहीं की गई Assets या भविष्य के अधिग्रहण को शामिल करता है।",
        btnAddResidual: "अवशिष्ट Beneficiary जोड़ें",
        btnFinish: "समाप्त और समीक्षा करें",

        // Preview Overlay
        btnClosePreview: "✕ पूर्वावलोकन बंद करें",
        previewDisclaimer: "यह एक पूर्वावलोकन है। पीडीएफ में अंतिम स्वरूपण थोड़ा भिन्न हो सकता है।",

        // Success Overlay
        successTitle: "Will Draft तैयार है!",
        successSubtitle: "अपनी Will डाउनलोड करने के लिए Format चुनें।",
        btnDownloadPDF: "PDF डाउनलोड करें",
        btnDownloadRTF: "Editable (.rtf) डाउनलोड करें",
        nextStepsTitle: "📋 Important Next Steps",
        nsPrintTitle: "Print करें",
        nsPrintText: "High Quality A4 पेपर पर Print करें। भारत में Will के लिए Digital Signature मान्य (valid) नहीं हैं।",
        nsSignTitle: "हर Page पर Sign करें",
        nsSignText: "Tampering से बचने के लिए, आपको और आपके दो Witnesses को हर Page के नीचे Sign करना होगा। बिना Sign के Will को Court में challenge किया जा सकता है।",
        nsSignReminder: "Note: Beneficiaries को Will पर Sign नहीं करना चाहिए।",
        nsSafeTitle: "Safe Storage",
        nsSafeText: "Safe जगह पर store करें और अपने Executor को बताएं कि यह कहां है।",
        nsVideoTitle: "Video Will रिकॉर्ड करें (Pro Tip)",
        nsVideoText: "Sign करते समय अपने Phone पर Video record करें। Sound Mind साबित करने के लिए Will को जोर से पढ़ें।",

        // PDF/RTF Document Content
        pdfTitle: "अंतिम वसीयत और वसीयतनामा (Last Will and Testament)",
        pdfRevocationTitle: "1. पूर्व वसीयतों का निरसन (Revocation of Prior Wills)",
        pdfRevocationText: "मैं अपने द्वारा बनाई गई सभी पूर्व वसीयतों (Wills) और कोडिसिल्स (Codicils) को निरस्त करता/करती हूं। मैं घोषणा करता/करती हूं कि मैं अच्छे स्वास्थ्य और स्वस्थ दिमाग में हूं, और यह वसीयत स्वेच्छा से बना रहा/रही हूं।",
        pdfExecutorTitle: "2. निष्पादक की नियुक्ति (Appointment of Executor)",
        pdfDistributionTitle: "3. संपत्ति का वितरण (Distribution of Assets)",
        pdfDistributionIntro: "मैं अपनी संपत्ति (Assets) निम्नानुसार वसीयत करता/करती हूं:",
        pdfResidualTitle: "4. अवशिष्ट खंड (Residual Clause)",
        pdfResidualIntro: "अन्य सभी संपत्ति (शेष, अवशेष, और शेषांश) मैं वसीयत करता/करती हूं:",
        pdfSignatureTitle: "5. निष्पादन (Execution)",
        pdfSignatureText: "इसके साक्ष्य में, मैंने इस दिन अपनी अंतिम वसीयत और वसीयतनामा पर हस्ताक्षर किए हैं।",
        pdfTestatorLabel: "वसीयतकर्ता (Testator)",
        pdfWitness1Label: "गवाह 1 (Witness 1)",
        pdfWitness2Label: "गवाह 2 (Witness 2)",
        pdfDescriptionLabel: "विवरण (Description)",
        pdfBeneficiariesLabel: "लाभार्थी (Beneficiaries)",
        pdfAlternateLabel: "वैकल्पिक (Alternate)",
        pdfMinorLabel: "नाबालिग (Minor)",
        pdfGuardianLabel: "अभिभावक (Guardian)",
        pdfRelLabel: "संबंध (Rel)",
        pdfReligionLabel: "धर्म (Religion)",
        pdfResidingAt: "निवासी (residing at)",
        pdfToBeThe: "को इस वसीयत का एकमात्र निष्पादक (Executor) होने के लिए।",
        pdfIAppoint: "मैं नियुक्त करता/करती हूं (I appoint)",
        pdfBeingOfSound: "स्वस्थ दिमाग और स्मृति का होते हुए, एतद्द्वारा यह मेरी अंतिम वसीयत और वसीयतनामा बनाता/बनाती, प्रकाशित करता/करती और घोषित करता/करती हूं।",

        // Dynamic Beneficiary Form Fields
        dynNewBeneficiary: "नया Beneficiary",
        dynExpandDetails: "विवरण जोड़ने के लिए विस्तार करें...",
        dynRelation: "संबंध (Relation)",
        dynEdit: "संपादित करें",
        dynFullName: "पूरा नाम",
        dynRelationship: "संबंध (Relationship)",
        dynPhRelationship: "जैसे बेटा",
        dynPermAddress: "स्थायी पता",
        dynPhAddress: "पूरा पता",
        dynParentSpouse: "माता-पिता / जीवनसाथी का नाम",
        dynPhName: "नाम",
        dynAge: "आयु (यदि नाबालिग है)",
        dynIsMinor: "क्या यह Beneficiary नाबालिग है?",
        dynGuardianName: "Guardian का नाम",
        dynPhGuardianName: "Guardian का नाम",
        dynGuardianRel: "Guardian संबंध",
        dynPhGuardianRel: "जैसे माँ",
        dynGuardianParent: "Guardian के माता-पिता / जीवनसाथी का नाम",
        dynGuardianAddress: "Guardian का पता",
        dynPhGuardianAddress: "पता",
        dynDefaultAlternate: "डिफ़ॉल्ट वैकल्पिक (यदि यह व्यक्ति आपसे पहले मर जाता है)",

        // Dynamic Asset Form Fields
        dynNewAsset: "नई Asset",
        dynSelectType: "कॉन्फ़िगर करने के लिए प्रकार चुनें...",
        dynAssetType: "Asset का प्रकार",
        dynSelectAssetType: "-- Asset का प्रकार चुनें --",
        dynDescription: "विवरण",
        dynBeneficiaries: "Beneficiaries",
        dynPercentShare: "% हिस्सा",
        dynAlternate: "वैकल्पिक (Alternate)",
        dynAddShare: "+ हिस्सा जोड़ें",
        dynIndivisibleWarning: "अविभाज्य संपत्ति चेतावनी: अचल संपत्ति या वाहनों जैसी संपत्ति को विभाजित करने से अक्सर विवाद होते हैं।",

        // Asset Type Options
        assetOptRealEstate: "🏠 अचल संपत्ति",
        assetOptFlat: "फ्लैट / घर",
        assetOptLand: "भूमि / प्लॉट",
        assetOptShop: "दुकान / कार्यालय",
        assetOptBankCash: "💰 बैंक और नकद",
        assetOptSavings: "बचत / चालू",
        assetOptFD: "सावधि जमा (FD)",
        assetOptLocker: "बैंक लॉकर",
        assetOptLoan: "उधार दिया धन (Loan)",
        assetOptInvestments: "📈 निवेश",
        assetOptNPS: "NPS / EPF",
        assetOptMF: "म्यूचुअल फंड",
        assetOptDemat: "डीमैट / शेयर",
        assetOptCrypto: "क्रिप्टोकरेंसी",
        assetOptInsurance: "जीवन बीमा",
        assetOptBusiness: "💼 व्यवसाय",
        assetOptESOP: "ESOPs",
        assetOptBusinessInt: "व्यवसाय / साझेदारी",
        assetOptValuables: "💍 कीमती सामान",
        assetOptJewelry: "आभूषण / सोना",
        assetOptVehicle: "वाहन",
    }
};

// Toggle between English and Hindi
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    updateLanguage();
    saveData(); // Save language preference
}

// Update all UI text based on current language
function updateLanguage() {
    const t = TRANSLATIONS[currentLang];

    // Update language toggle button text
    document.getElementById('lang-toggle-text').textContent = currentLang === 'en' ? 'हिंदी' : 'English';

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update all placeholders with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Update header title
    const headerTitle = document.querySelector('header h1');

    // Update dynamic headers (beneficiaries, assets)
    if (typeof updateAllHeaders === 'function') {
        updateAllHeaders();
    }
    if (headerTitle) {
        headerTitle.innerHTML = currentLang === 'en'
            ? 'Sahay <span class="text-indigo-300 font-normal">| Will Creator</span>'
            : 'सहाय <span class="text-indigo-300 font-normal">| विल निर्माता</span>';
    }

    // Toggle PDF download button visibility based on language
    const btnPdf = document.getElementById('btn-download-pdf');
    if (btnPdf) {
        if (currentLang === 'hi') {
            btnPdf.style.display = 'none';
        } else {
            btnPdf.style.display = 'flex';
        }
    }

    // Re-render existing beneficiary and asset rows to update their language
    if (typeof reloadDynamicRows === 'function') {
        reloadDynamicRows();
    }
}
