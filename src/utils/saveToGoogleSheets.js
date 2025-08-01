export const saveToGoogleSheets = async (data) => {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycby8sdJ00zf421wIEgm2zrg4Fm1SDERzMRsGApvIaRFX5wHe0XMhS5lQ7bjBPg8V93Gn/exechttps://script.google.com/macros/s/AKfycb.../exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("✅ Google Sheets Result:", result);
  } catch (error) {
    console.error("❌ Error saving to Google Sheets:", error);
  }
};

