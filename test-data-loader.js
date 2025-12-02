/**
 * Test Data Loader for Will Creator
 * 
 * Usage:
 * 1. Open the Will Creator website
 * 2. Open browser console (F12 or Cmd+Option+I)
 * 3. Copy and paste this entire script
 * 4. Press Enter
 */

(function () {
    console.log('🚀 Loading test data...');

    // Generate unique IDs
    const baseId = Date.now();
    const benId1 = baseId + 1;
    const benId2 = baseId + 2;
    const benId3 = baseId + 3;
    const benId4 = baseId + 4;

    const testData = {
        lastStep: 4,
        maxStep: 4,
        personal: {
            religion: 'Hindu',
            customReligion: ''
        },
        myName: 'Rajesh Kumar Sharma',
        myRelPrefix: 'S/o',
        fatherName: 'Ramesh Kumar Sharma',
        myDob: '1975-06-15',
        myAddress: '123, MG Road, Koramangala, Bangalore, Karnataka - 560034',
        myPlace: 'Bangalore, Karnataka',
        exName: 'Priya Sharma',
        exRel: 'Wife',
        exRelPrefix: 'D/o',
        exParentName: 'Suresh Patel',
        exAddress: '123, MG Road, Koramangala, Bangalore, Karnataka - 560034',
        beneficiaries: [
            {
                id: benId1,
                name: 'Arjun Sharma',
                rel: 'Son',
                addr: '456, Brigade Road, Bangalore, Karnataka - 560025',
                relPrefix: 'S/o',
                father: 'Rajesh Kumar Sharma',
                defaultAltId: '',
                isMinor: false,
                gName: '',
                gRel: '',
                gRelPrefix: 'S/o',
                gFather: '',
                gAddr: ''
            },
            {
                id: benId2,
                name: 'Ananya Sharma',
                rel: 'Daughter',
                addr: '789, Indiranagar, Bangalore, Karnataka - 560038',
                relPrefix: 'D/o',
                father: 'Rajesh Kumar Sharma',
                defaultAltId: '',
                isMinor: false,
                gName: '',
                gRel: '',
                gRelPrefix: 'S/o',
                gFather: '',
                gAddr: ''
            },
            {
                id: benId3,
                name: 'Priya Sharma',
                rel: 'Wife',
                addr: '123, MG Road, Koramangala, Bangalore, Karnataka - 560034',
                relPrefix: 'D/o',
                father: 'Suresh Patel',
                defaultAltId: '',
                isMinor: false,
                gName: '',
                gRel: '',
                gRelPrefix: 'S/o',
                gFather: '',
                gAddr: ''
            },
            {
                id: benId4,
                name: 'Aarav Sharma',
                rel: 'Son',
                addr: '123, MG Road, Koramangala, Bangalore, Karnataka - 560034',
                relPrefix: 'S/o',
                father: 'Rajesh Kumar Sharma',
                defaultAltId: '',
                isMinor: true,
                gName: 'Priya Sharma',
                gRel: 'Mother',
                gRelPrefix: 'D/o',
                gFather: 'Suresh Patel',
                gAddr: '123, MG Road, Koramangala, Bangalore, Karnataka - 560034'
            }
        ],
        assets: [
            {
                type: 'flat',
                desc: 'Complete Property Address (incl. Pin Code): 3BHK Apartment, Tower A, Prestige Lakeside Habitat, Varthur, Bangalore - 560103, Survey/Khata/Deed No. (optional): 1234',
                details: {
                    addr: '3BHK Apartment, Tower A, Prestige Lakeside Habitat, Varthur, Bangalore - 560103',
                    survey: '1234'
                },
                shares: [
                    { benId: benId1, share: '50', altId: benId2 },
                    { benId: benId2, share: '50', altId: benId1 }
                ]
            },
            {
                type: 'demat',
                desc: 'Broker Name (e.g. Zerodha, Groww): Zerodha, Last 4 digits of Client ID: 5678',
                details: {
                    broker: 'Zerodha',
                    dpid: '5678',
                    specific_holding: ''
                },
                shares: [
                    { benId: benId1, share: '40', altId: '' },
                    { benId: benId2, share: '30', altId: '' },
                    { benId: benId3, share: '30', altId: '' }
                ]
            },
            {
                type: 'mf',
                desc: 'AMC Name (e.g. SBI Mutual Fund): SBI Mutual Fund, Last 4 digits of folio number: 9012',
                details: {
                    fund: 'SBI Mutual Fund',
                    folio: '9012',
                    specific_holding: ''
                },
                shares: [
                    { benId: benId3, share: '100', altId: benId1 }
                ]
            },
            {
                type: 'savings',
                desc: 'Bank Name & Branch: HDFC Bank, Koramangala Branch, Account ending in (last 4 digits): 3456',
                details: {
                    bank: 'HDFC Bank, Koramangala Branch',
                    acc_no: '3456',
                    ifsc: 'HDFC0001234'
                },
                shares: [
                    { benId: benId1, share: '25', altId: '' },
                    { benId: benId2, share: '25', altId: '' },
                    { benId: benId3, share: '25', altId: '' },
                    { benId: benId4, share: '25', altId: '' }
                ]
            },
            {
                type: 'insurance',
                desc: 'Insurance Company: LIC of India, Last 4 digits of policy number: 7890',
                details: {
                    insurer: 'LIC of India',
                    policy: '7890'
                },
                shares: [
                    { benId: benId3, share: '100', altId: benId1 }
                ]
            },
            {
                type: 'vehicle',
                desc: 'Vehicle Make & Model (e.g. Honda City): Honda City 2020, Last 4 digits of registration: 1234',
                details: {
                    model: 'Honda City 2020',
                    reg: '1234'
                },
                shares: [
                    { benId: benId1, share: '100', altId: benId2 }
                ]
            }
        ],
        residual: [
            { benId: benId1, share: '40', altId: benId2 },
            { benId: benId2, share: '30', altId: benId1 },
            { benId: benId3, share: '30', altId: '' }
        ]
    };

    // Load the data into localStorage
    localStorage.setItem('sahayWillDataV30', JSON.stringify(testData));

    console.log('✅ Test data loaded into localStorage!');
    console.log('📋 Data includes:');
    console.log(`   - ${testData.beneficiaries.length} beneficiaries (including 1 minor with guardian)`);
    console.log(`   - ${testData.assets.length} assets of different types`);
    console.log(`   - ${testData.residual.length} residual beneficiaries`);
    console.log('');
    console.log('🔄 Reloading page to apply data...');

    // Reload the page to load the data
    setTimeout(() => {
        location.reload();
    }, 500);
})();
