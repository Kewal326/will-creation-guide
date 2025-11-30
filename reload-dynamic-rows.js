// Function to reload all dynamic rows when language changes
function reloadDynamicRows() {
    // Save current data
    const currentData = {
        beneficiaries: [],
        assets: []
    };

    // Collect beneficiary data
    document.querySelectorAll('.beneficiary-item').forEach(benRow => {
        const id = benRow.getAttribute('data-id');
        const ben = {
            id: id,
            name: document.getElementById(`ben-name-${id}`)?.value || '',
            rel: document.getElementById(`ben-rel-${id}`)?.value || '',
            addr: document.getElementById(`ben-addr-${id}`)?.value || '',
            father: document.getElementById(`ben-father-${id}`)?.value || '',
            relPrefix: document.getElementById(`ben-relPrefix-${id}`)?.value || 'S/o',
            isMinor: document.getElementById(`ben-minor-${id}`)?.checked || false,
            gName: document.getElementById(`guardian-name-${id}`)?.value || '',
            gRel: document.getElementById(`guardian-rel-${id}`)?.value || '',
            gFather: document.getElementById(`guardian-father-${id}`)?.value || '',
            gRelPrefix: document.getElementById(`ben-gRelPrefix-${id}`)?.value || 'S/o',
            gAddr: document.getElementById(`guardian-addr-${id}`)?.value || '',
            defaultAltId: document.getElementById(`ben-defaultAlt-${id}`)?.getAttribute('data-selected') || ''
        };
        currentData.beneficiaries.push(ben);
    });

    // Collect asset data
    document.querySelectorAll('.asset-item').forEach(assetRow => {
        const assetBody = assetRow.querySelector('[id^="asset-body-"]');
        if (!assetBody) return;

        const assetId = assetBody.id.replace('asset-body-', '');
        const typeSelect = assetRow.querySelector('.asset-type-select');
        const type = typeSelect?.value || '';

        if (!type) return;

        const asset = {
            id: assetId,
            type: type,
            shares: []
        };

        // Collect share data
        const sharesContainer = document.getElementById(`shares-container-${assetId}`);
        if (sharesContainer) {
            sharesContainer.querySelectorAll('.share-row').forEach(shareRow => {
                const benSelect = shareRow.querySelector('.ben-select-share');
                const shareInput = shareRow.querySelector('.share-input');
                const altSelect = shareRow.querySelector('.ben-select-alt-share');

                asset.shares.push({
                    benId: benSelect?.value || '',
                    share: shareInput?.value || '100',
                    altId: altSelect?.value || ''
                });
            });
        }

        currentData.assets.push(asset);
    });

    // Clear existing rows
    document.getElementById('beneficiary-container').innerHTML = '';
    document.getElementById('asset-container').innerHTML = '';

    // Reset counters
    beneficiaryCount = 0;
    assetCount = 0;

    // Re-render beneficiaries
    currentData.beneficiaries.forEach(ben => {
        addBeneficiaryRow(ben);
    });

    // Re-render assets
    currentData.assets.forEach(asset => {
        addAssetRow();
        const assetId = assetCount;

        // Set asset type
        const typeSelect = document.querySelector(`#asset-row-${assetId} .asset-type-select`);
        if (typeSelect) {
            typeSelect.value = asset.type;
            // Trigger the change event to render fields
            typeSelect.dispatchEvent(new Event('change'));

            // Re-add shares after a short delay to ensure fields are rendered
            setTimeout(() => {
                const sharesContainer = document.getElementById(`shares-container-${assetId}`);
                if (sharesContainer) {
                    sharesContainer.innerHTML = ''; // Clear default share
                    asset.shares.forEach(share => {
                        addShareRow(assetId, share.benId, share.share, share.altId);
                    });
                }
            }, 50);
        }
    });
}
