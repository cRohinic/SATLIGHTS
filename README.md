#  Satlights Founder Intake MVP (Invite-Only)

This is a trust-focused, invite-only, founder-facing intake MVP built for SATELIGHTS.

It helps founders record their video answers, provide written responses to key startup questions, and submit everything seamlessly via a warm and personal web interface.

## Features Implemented

- 🔒 **Invite Code Access**  
  Only founders with a valid code (e.g., `SATLIGHTS-TEST-001`) can access the form.

- 🎥 **Live Video Recording using VideoAsk**  
  Founders can directly record videos in the form using embedded **VideoAsk** (no uploads required).

- 📝 **Written Question Answers**  
  Founders provide responses to 8 thoughtfully designed startup-related questions.

- 📥 **Data Storage**  
  All responses are stored in a connected **Google Sheet**/**Airtable** for easy review.

- 📱 **Responsive and Mobile-Friendly UI**  
  Built with mobile-first design using React and CSS.

- ✨ **Warm, Trust-Building UI**  
  Minimal, encouraging, startup-friendly tone with branding and thank-you flow.

---

## 💡 Tech Stack

- **Frontend**: React (Vite)
- **CSS**: Custom CSS (optional: Tailwind or Bootstrap)
- **Video Recorder**: [VideoAsk](https://www.videoask.com/)
- **Storage**: Google Sheets or Airtable via API / Webhook
- **Deployment**: Vercel

---

## 🧪 How It Works

1. User visits the site and sees an invite-only access field.
2. After entering the correct invite code (`SATLIGHTS-TEST-001`), the full form is revealed.
3. The form includes:
   - A VideoAsk embedded video recorder
   - 8 long-form written question fields
4. When submitted, the data is stored in Google Sheets or Airtable:
   - Invite code
   - Timestamp
   - Founder name, email, startup
   - Video response link
   - All 8 question responses
5. On submission, the user sees a thank-you message:
   > _"Thanks for applying — we’ll reach out after reviewing your story."_

---


---

## 🔗 Deployment
[
> Live Site: [https://your-deployment-url.vercel.app](https://your-deployment-url.vercel.app](https://satlights-latest.vercel.app/))

---

## 🔧 Setup Locally

```bash
git clone https://github.com/yourusername/satlights-intake-mvp.git
cd satlights-intake-mvp
npm install
npm start
