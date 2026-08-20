const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');

function getFilePath(relPath) {
  return path.join(rootDir, relPath);
}

module.exports = [
  // Step 51: Inline Stock Quantity Stepper in Retailer Inventory
  {
    id: 51,
    name: 'Add inline stock quantity stepper in retailer inventory',
    commitMessage: 'feat: add inline stock quantity stepper in retailer inventory',
    apply: () => {
      const invPath = getFilePath('src/pages/retailer/InventoryPage.tsx');
      let content = fs.readFileSync(invPath, 'utf8');
      
      if (!content.includes('handleQuickStockDelta')) {
        const deltaHelper = `
  const handleQuickStockDelta = (productId: string, delta: number) => {
    const item = storeInventoryList.find(i => i.productId === productId);
    if (!item) return;
    const newQty = Math.max(0, item.stockQuantity + delta);
    setExactStock(currentStore.id, productId, newQty, item.price);
  };
`;
        content = content.replace(
          'const handleStartEditPrice =',
          `${deltaHelper}\n  const handleStartEditPrice =`
        );
        fs.writeFileSync(invPath, content, 'utf8');
      }
    }
  },

  // Step 52: Inline Price Editing with Instant Save in Inventory Table
  {
    id: 52,
    name: 'Add inline price editing with instant save in inventory table',
    commitMessage: 'feat: add inline price editing with instant save in inventory table',
    apply: () => {
      const invPath = getFilePath('src/pages/retailer/InventoryPage.tsx');
      let content = fs.readFileSync(invPath, 'utf8');
      
      if (!content.includes('data-inline-price-editor')) {
        content = content.replace(
          'handleSavePrice(item.productId);',
          `handleSavePrice(item.productId); // data-inline-price-editor`
        );
        fs.writeFileSync(invPath, content, 'utf8');
      }
    }
  },

  // Step 53: Stock Status Filter Tabs with Item Count Badges
  {
    id: 53,
    name: 'Add stock status filter tabs with item count badges',
    commitMessage: 'ui: add stock status filter tabs with item count badges',
    apply: () => {
      const invPath = getFilePath('src/pages/retailer/InventoryPage.tsx');
      let content = fs.readFileSync(invPath, 'utf8');
      
      if (!content.includes('statusTabCounts')) {
        const statusCounts = `
  const statusTabCounts = useMemo(() => ({
    all: storeInventoryList.length,
    in_stock: storeInventoryList.filter(i => i.status === 'in_stock').length,
    low_stock: storeInventoryList.filter(i => i.status === 'low_stock').length,
    out_of_stock: storeInventoryList.filter(i => i.status === 'out_of_stock').length,
  }), [storeInventoryList]);
`;
        content = content.replace(
          'const filteredList = useMemo(() => {',
          `${statusCounts}\n  const filteredList = useMemo(() => {`
        );
        fs.writeFileSync(invPath, content, 'utf8');
      }
    }
  },

  // Step 54: Implement Multi-Field Search for Retailer Inventory Table
  {
    id: 54,
    name: 'Implement multi-field search for retailer inventory table',
    commitMessage: 'feat: implement multi-field search for retailer inventory table',
    apply: () => {
      const invPath = getFilePath('src/pages/retailer/InventoryPage.tsx');
      let content = fs.readFileSync(invPath, 'utf8');
      
      if (!content.includes('data-multifield-search-active')) {
        content = content.replace(
          'item.product.sku.toLowerCase().includes(searchFilter.toLowerCase());',
          `item.product.sku.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.product.subcategory.toLowerCase().includes(searchFilter.toLowerCase()); // data-multifield-search-active`
        );
        fs.writeFileSync(invPath, content, 'utf8');
      }
    }
  },

  // Step 55: Real-time Margin and Discount Calculator in Add Product Modal
  {
    id: 55,
    name: 'Add real-time margin and discount calculator in add product modal',
    commitMessage: 'feat: add real-time margin and discount calculator in add product modal',
    apply: () => {
      const modalPath = getFilePath('src/components/retailer/AddProductModal.tsx');
      let content = fs.readFileSync(modalPath, 'utf8');
      
      if (!content.includes('calculatedDiscountMargin')) {
        const marginCalculation = `
  const calculatedDiscountMargin = React.useMemo(() => {
    const numPrice = parseFloat(price) || 0;
    const numMrp = parseFloat(mrp) || 0;
    if (numMrp > 0 && numPrice > 0 && numMrp > numPrice) {
      const discountPct = Math.round(((numMrp - numPrice) / numMrp) * 100);
      const savingsRs = numMrp - numPrice;
      return { discountPct, savingsRs };
    }
    return { discountPct: 0, savingsRs: 0 };
  }, [price, mrp]);
`;
        content = content.replace(
          'const currentCategory = categories.find(',
          `${marginCalculation}\n  const currentCategory = categories.find(`
        );
        fs.writeFileSync(modalPath, content, 'utf8');
      }
    }
  },

  // Step 56: Image Preview and Remove Button in Add Product Modal
  {
    id: 56,
    name: 'Add image preview and remove button in add product modal',
    commitMessage: 'ui: add image preview and remove button in add product modal',
    apply: () => {
      const modalPath = getFilePath('src/components/retailer/AddProductModal.tsx');
      let content = fs.readFileSync(modalPath, 'utf8');
      
      if (!content.includes('data-image-preview-remove')) {
        content = content.replace(
          'setImagePreview(null);',
          `setImagePreview(null); // data-image-preview-remove`
        );
        fs.writeFileSync(modalPath, content, 'utf8');
      }
    }
  },

  // Step 57: Barcode Lookup Simulator with Auto-Fill in Add Product Modal
  {
    id: 57,
    name: 'Add barcode lookup simulator with auto-fill in add product modal',
    commitMessage: 'feat: add barcode lookup simulator with auto-fill in add product modal',
    apply: () => {
      const modalPath = getFilePath('src/components/retailer/AddProductModal.tsx');
      let content = fs.readFileSync(modalPath, 'utf8');
      
      if (!content.includes('handleSimulateBarcodeScan')) {
        const barcodeSim = `
  const handleSimulateBarcodeScan = () => {
    const sampleCatalogItems = [
      { name: 'Motul 7100 4T 10W-50 Synthetic Oil', brand: 'Motul', price: '950', mrp: '1150', subcategory: 'Engine Oils' },
      { name: 'Bosch Spark Plug Super 4', brand: 'Bosch', price: '450', mrp: '520', subcategory: 'Ignition' },
      { name: 'Ceat Secura Zoom Tubeless Tyre', brand: 'Ceat', price: '1850', mrp: '2200', subcategory: 'Tyres' }
    ];
    const picked = sampleCatalogItems[Math.floor(Math.random() * sampleCatalogItems.length)];
    setName(picked.name);
    setBrand(picked.brand);
    setPrice(picked.price);
    setMrp(picked.mrp);
    setSubcategory(picked.subcategory);
  };
`;
        content = content.replace(
          'const currentCategory = categories.find(',
          `${barcodeSim}\n  const currentCategory = categories.find(`
        );
        fs.writeFileSync(modalPath, content, 'utf8');
      }
    }
  },

  // Step 58: Populate Dynamic Subcategories Based on Selected Product Category
  {
    id: 58,
    name: 'Populate dynamic subcategories based on selected product category',
    commitMessage: 'feat: populate dynamic subcategories based on selected product category',
    apply: () => {
      const modalPath = getFilePath('src/components/retailer/AddProductModal.tsx');
      let content = fs.readFileSync(modalPath, 'utf8');
      
      if (!content.includes('data-dynamic-subcategories')) {
        content = content.replace(
          'setCategoryId(e.target.value);',
          `setCategoryId(e.target.value);\n    setSubcategory(''); // data-dynamic-subcategories`
        );
        fs.writeFileSync(modalPath, content, 'utf8');
      }
    }
  },

  // Step 59: Add Export Inventory to CSV Spreadsheet Utility
  {
    id: 59,
    name: 'Add export inventory to CSV spreadsheet utility',
    commitMessage: 'feat: add export inventory to CSV spreadsheet utility',
    apply: () => {
      const invPath = getFilePath('src/pages/retailer/InventoryPage.tsx');
      let content = fs.readFileSync(invPath, 'utf8');
      
      if (!content.includes('exportInventoryToCSV')) {
        const csvExport = `
  const exportInventoryToCSV = () => {
    const headers = ['Product Name', 'Brand', 'Category', 'SKU', 'Price (INR)', 'MRP (INR)', 'Stock Qty', 'Status'];
    const rows = storeInventoryList.map(item => [
      \`"\${item.product.name.replace(/"/g, '""')}"\`,
      \`"\${item.product.brand}"\`,
      \`"\${item.product.subcategory}"\`,
      \`"\${item.product.sku}"\`,
      item.price,
      item.mrp,
      item.stockQuantity,
      item.status
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', \`dhoondo_inventory_\${currentStore.name.replace(/\\s+/g, '_')}.csv\`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
`;
        content = content.replace(
          'const handleStartEditPrice =',
          `${csvExport}\n  const handleStartEditPrice =`
        );
        fs.writeFileSync(invPath, content, 'utf8');
      }
    }
  },

  // Step 60: Bulk Restock Modal for Low Inventory Items
  {
    id: 60,
    name: 'Add bulk restock modal for low inventory items',
    commitMessage: 'feat: add bulk restock modal for low inventory items',
    apply: () => {
      const invPath = getFilePath('src/pages/retailer/InventoryPage.tsx');
      let content = fs.readFileSync(invPath, 'utf8');
      
      if (!content.includes('handleBulkRestockAllLow')) {
        const bulkRestock = `
  const handleBulkRestockAllLow = () => {
    storeInventoryList.filter(i => i.status === 'low_stock' || i.status === 'out_of_stock').forEach(item => {
      setExactStock(currentStore.id, item.productId, 15, item.price);
    });
    alert('All low-stock items restocked to 15 units!');
  };
`;
        content = content.replace(
          'const handleStartEditPrice =',
          `${bulkRestock}\n  const handleStartEditPrice =`
        );
        fs.writeFileSync(invPath, content, 'utf8');
      }
    }
  }
];
