# J&J Contracting Website

A premium, futuristic glassmorphism website for J&J Contracting - "We do 100%"

## 🚀 Features

- **Modern Glassmorphism Design**: Sleek, translucent panels with blur effects
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth animations, hover effects, and transitions
- **Contact Form**: Functional contact form with validation and API integration
- **Gallery Lightbox**: Interactive image gallery with full-screen viewing
- **Testimonials Carousel**: Auto-advancing customer testimonials
- **FAQ Section**: Expandable frequently asked questions
- **SEO Optimized**: Meta tags, Open Graph data, and semantic HTML
- **Accessibility**: ARIA attributes, keyboard navigation, and screen reader support

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (Icons)

## 📦 Installation

1. **Clone or download** this project
2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`
3. **Start development server**:
   \`\`\`bash
   npm run dev
   \`\`\`
4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Logo Placement
The company logo is located at `/public/logo.png`. Replace this file with your own logo while maintaining the same filename.

### Colors
The website uses a blue/orange/black color scheme defined in `app/globals.css`:
- Primary Blue: `#0ea5e9`
- Accent Orange: `#ff7a00`
- Background: Black/Dark grays

### Content Updates

#### Contact Information
Update contact details in:
- `components/About.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

#### Services
Modify services in `components/Services.tsx`:
\`\`\`tsx
const services = [
  {
    icon: <Truck size={48} className="text-blue-400" />,
    title: "Your Service Name",
    description: "Service description...",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  }
]
\`\`\`

#### Gallery Images
Replace placeholder images in `components/Gallery.tsx`:
\`\`\`tsx
const galleryImages = [
  {
    src: "/your-image.jpg",
    alt: "Description of your image",
    caption: "Image caption"
  }
]
\`\`\`

#### Testimonials
Update customer testimonials in `components/Testimonials.tsx`:
\`\`\`tsx
const testimonials = [
  {
    name: "Customer Name",
    location: "Location",
    rating: 5,
    text: "Customer testimonial..."
  }
]
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

## 📧 Contact Form Setup

The contact form currently uses a mock API. To integrate with a real email service:

1. **Update** `app/api/contact/route.ts`
2. **Add email service** (SendGrid, Nodemailer, etc.)
3. **Configure environment variables** for your email service

Example with SendGrid:
\`\`\`typescript
// Add to your API route
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
\`\`\`

## 🔧 Environment Variables

Create a `.env.local` file for production:
\`\`\`env
SENDGRID_API_KEY=your_sendgrid_key
CONTACT_EMAIL=joshi@jjcontracting.ca
\`\`\`

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design approach
- Touch-friendly interface
- Optimized images and performance
- Hamburger navigation menu
- Swipeable testimonials

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators

## 🎯 SEO Features

- Meta tags and Open Graph data
- Semantic HTML structure
- Optimized images with alt text
- Clean URL structure
- Fast loading times

## 📞 Support

For technical support or customization requests, contact the development team.

---

**J&J Contracting** - "We do 100%"  
Serving Belleville & Surrounding Areas  
Phone: 306-481-3203  
Email: joshi@jjcontracting.ca
