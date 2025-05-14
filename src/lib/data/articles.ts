import type { Article } from "@/types"

// Dummy article data
export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Wearable Technology",
    slug: "future-of-wearable-technology",
    excerpt:
      "Explore how wearable technology is evolving beyond fitness trackers to revolutionize healthcare, productivity, and everyday life.",
    content: `
      <p>Wearable technology has come a long way since the first fitness trackers hit the market. Today, these devices are becoming increasingly sophisticated, offering features that extend far beyond step counting and heart rate monitoring.</p>
      
      <h2>Healthcare Revolution</h2>
      <p>Modern wearables can monitor blood oxygen levels, detect irregular heart rhythms, and even predict potential health issues before they become serious. Some devices are now FDA-approved for medical monitoring, blurring the line between consumer gadgets and medical devices.</p>
      
      <h2>Productivity Enhancement</h2>
      <p>From smart glasses that provide augmented reality overlays to rings that can authorize payments and unlock doors, wearables are becoming essential productivity tools. Many professionals now rely on these devices to streamline their workflows and stay connected.</p>
      
      <h2>The Future Landscape</h2>
      <p>Looking ahead, we can expect wearables to become even more integrated into our daily lives. Advances in flexible electronics will lead to devices that are virtually indistinguishable from regular clothing or accessories. Neural interfaces may eventually allow direct brain-to-device communication, opening up entirely new possibilities.</p>
      
      <p>As these technologies continue to evolve, the boundary between human and device will become increasingly blurred, raising important questions about privacy, security, and what it means to be human in a digital age.</p>
    `,
    coverImage: "/images/articles/wearable-tech.jpg",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/images/authors/sarah-chen.jpg",
    },
    category: "Technology",
    tags: ["wearables", "technology", "healthcare", "future"],
    publishedAt: "2024-04-15T09:30:00Z",
    readTime: 8,
  },
  {
    id: "2",
    title: "Sustainable Shopping: Making Ethical Consumer Choices",
    slug: "sustainable-shopping-ethical-consumer-choices",
    excerpt:
      "Learn how your shopping habits can make a positive impact on the environment and support ethical business practices.",
    content: `
      <p>In today's consumer-driven world, every purchase we make has an impact. By making more conscious choices about what we buy and who we buy from, we can collectively drive positive change.</p>
      
      <h2>Understanding Product Lifecycles</h2>
      <p>Sustainable shopping begins with understanding the full lifecycle of products - from raw material sourcing to manufacturing, distribution, use, and eventual disposal. Products with minimal environmental impact throughout their lifecycle are generally more sustainable choices.</p>
      
      <h2>Researching Brands</h2>
      <p>Not all companies are created equal when it comes to ethical practices. Research brands before purchasing to understand their stance on worker conditions, fair trade, animal testing, and environmental initiatives. Many apps and websites now make this research easier than ever.</p>
      
      <h2>Quality Over Quantity</h2>
      <p>Investing in higher-quality items that last longer is often more sustainable than repeatedly purchasing cheaper, disposable alternatives. This approach not only reduces waste but can save money in the long run.</p>
      
      <h2>Circular Economy</h2>
      <p>Consider participating in the circular economy by buying second-hand items, renting instead of buying for occasional use, repairing broken items, and properly recycling or donating things you no longer need.</p>
      
      <p>Remember that sustainable shopping isn't about perfection - it's about making better choices when possible and being mindful of the impact of our consumption habits.</p>
    `,
    coverImage: "/images/articles/sustainable-shopping.jpg",
    author: {
      name: "Maya Johnson",
      avatar: "/images/authors/maya-johnson.jpg",
    },
    category: "Lifestyle",
    tags: ["sustainability", "shopping", "ethical", "environment"],
    publishedAt: "2024-04-10T14:15:00Z",
    readTime: 6,
  },
  {
    id: "3",
    title: "Smart Home Essentials for Beginners",
    slug: "smart-home-essentials-beginners",
    excerpt:
      "A comprehensive guide to building your first smart home system without breaking the bank or compromising on security.",
    content: `
      <p>Creating a smart home doesn't have to be complicated or expensive. With some strategic planning and the right devices, you can build a system that enhances your comfort, convenience, and security.</p>
      
      <h2>Start with a Hub</h2>
      <p>A smart home hub serves as the central command center for your devices. Popular options include Amazon Echo, Google Nest Hub, or Apple HomePod. Choose one that's compatible with the devices you plan to add and aligns with your preferred ecosystem.</p>
      
      <h2>Essential Smart Devices</h2>
      <p>Begin with devices that offer the most practical benefits:</p>
      <ul>
        <li>Smart lights for convenience and energy savings</li>
        <li>Smart plugs to automate existing appliances</li>
        <li>Smart thermostats for comfort and efficiency</li>
        <li>Video doorbell for security and convenience</li>
      </ul>
      
      <h2>Security Considerations</h2>
      <p>As you add devices to your home network, security becomes increasingly important. Always change default passwords, keep firmware updated, and consider setting up a separate network for your smart home devices to protect your personal data.</p>
      
      <h2>Creating Routines</h2>
      <p>The real magic of a smart home comes from automation. Set up routines like "Good Morning" or "Leaving Home" that trigger multiple devices simultaneously. This maximizes convenience and helps you get the most value from your system.</p>
      
      <p>Remember that building a smart home is a journey, not a destination. Start small, add devices as needed, and enjoy the process of creating a home that works smarter for you.</p>
    `,
    coverImage: "/images/articles/smart-home.jpg",
    author: {
      name: "Alex Rivera",
      avatar: "/images/authors/alex-rivera.jpg",
    },
    category: "Smart Home",
    tags: ["smart home", "technology", "automation", "security"],
    publishedAt: "2024-04-05T11:45:00Z",
    readTime: 10,
  },
  {
    id: "4",
    title: "The Rise of Sustainable Tech: Eco-Friendly Electronics",
    slug: "rise-sustainable-tech-eco-friendly-electronics",
    excerpt:
      "Discover how the electronics industry is embracing sustainability through innovative materials, energy-efficient designs, and circular business models.",
    content: `
      <p>As environmental concerns grow, the tech industry is responding with more sustainable approaches to product design, manufacturing, and end-of-life management.</p>
      
      <h2>Sustainable Materials</h2>
      <p>Leading manufacturers are increasingly using recycled plastics, bio-based materials, and responsibly sourced metals in their products. Some companies are developing biodegradable components for accessories and packaging to reduce waste.</p>
      
      <h2>Energy Efficiency</h2>
      <p>Modern devices are becoming more energy-efficient, with processors that consume less power and improved battery technologies that last longer. Energy-saving features like adaptive brightness and power management help extend battery life while reducing overall energy consumption.</p>
      
      <h2>Repairability and Longevity</h2>
      <p>The right-to-repair movement is gaining traction, with some manufacturers designing products that are easier to repair and upgrade. This approach extends product lifespans, reducing electronic waste and the need for frequent replacements.</p>
      
      <h2>Circular Business Models</h2>
      <p>Trade-in programs, device refurbishment, and component recycling are becoming standard practices. These circular approaches ensure that valuable materials are recovered and reused rather than ending up in landfills.</p>
      
      <p>While there's still much progress to be made, these developments represent important steps toward a more sustainable future for consumer electronics. As consumers, we can support these efforts by choosing products from companies with strong environmental commitments and participating in recycling and trade-in programs.</p>
    `,
    coverImage: "/images/articles/eco-tech.jpg",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/images/authors/sarah-chen.jpg",
    },
    category: "Technology",
    tags: ["sustainability", "technology", "eco-friendly", "electronics"],
    publishedAt: "2024-03-28T10:20:00Z",
    readTime: 7,
  },
  {
    id: "5",
    title: "Photography Essentials: Capturing Better Photos with Any Camera",
    slug: "photography-essentials-better-photos-any-camera",
    excerpt:
      "Learn the fundamental principles of photography that will help you take stunning photos regardless of your equipment.",
    content: `
      <p>Great photography isn't about having the most expensive camera—it's about understanding light, composition, and timing. With these fundamentals, you can capture compelling images with any camera, including your smartphone.</p>
      
      <h2>Understanding Light</h2>
      <p>Light is the essence of photography. Learn to observe the quality, direction, and color of light. The golden hours after sunrise and before sunset offer soft, warm light that flatters almost any subject. Harsh midday sun creates strong shadows, which can be challenging but also dramatic when used intentionally.</p>
      
      <h2>Composition Techniques</h2>
      <p>How you arrange elements within your frame can make or break a photo:</p>
      <ul>
        <li>Rule of thirds: Place key elements along the lines or at the intersections of a 3x3 grid</li>
        <li>Leading lines: Use natural lines to draw the viewer's eye through the image</li>
        <li>Framing: Use foreground elements to create a natural frame around your subject</li>
        <li>Perspective: Change your viewpoint to find fresh angles</li>
      </ul>
      
      <h2>The Decisive Moment</h2>
      <p>Timing is crucial in photography. Anticipate action and be ready to capture fleeting expressions, gestures, or interactions that tell a story. This often means taking many photos to get the perfect shot.</p>
      
      <h2>Post-Processing Basics</h2>
      <p>Even simple edits can transform a good photo into a great one. Learn to adjust exposure, contrast, and color balance. Cropping can improve composition after the fact. Most smartphones have built-in editing tools that are surprisingly powerful.</p>
      
      <p>Remember that developing your photographic eye takes practice. Make a habit of taking photos regularly, studying images you admire, and experimenting with different techniques. With time, you'll develop an intuitive sense for creating compelling images regardless of your equipment.</p>
    `,
    coverImage: "/images/articles/photography.jpg",
    author: {
      name: "James Wilson",
      avatar: "/images/authors/james-wilson.jpg",
    },
    category: "Photography",
    tags: ["photography", "tips", "creative", "camera"],
    publishedAt: "2024-03-20T15:30:00Z",
    readTime: 9,
  },
  {
    id: "6",
    title: "The Psychology of Product Design: Why We Love Certain Products",
    slug: "psychology-product-design-why-we-love-products",
    excerpt:
      "Explore the psychological principles behind successful product design and why certain products create deep emotional connections with users.",
    content: `
      <p>Great products do more than just solve problems—they create emotional connections with users. Understanding the psychology behind these connections can help us appreciate good design and make better purchasing decisions.</p>
      
      <h2>Aesthetic-Usability Effect</h2>
      <p>Research shows that aesthetically pleasing products are perceived as easier to use, even when they're not. This "beauty bias" explains why visually attractive products often succeed even in competitive markets. However, true design excellence combines beauty with genuine usability.</p>
      
      <h2>Emotional Design</h2>
      <p>Don Norman's concept of emotional design identifies three levels at which products engage us:</p>
      <ul>
        <li>Visceral: Our immediate, instinctive reaction to appearance</li>
        <li>Behavioral: How the product functions and performs</li>
        <li>Reflective: The meaning, cultural associations, and personal satisfaction we derive</li>
      </ul>
      <p>Products that succeed at all three levels create the strongest connections.</p>
      
      <h2>The IKEA Effect</h2>
      <p>We value products more when we've invested effort in them. This explains the satisfaction of assembling furniture or customizing products to our preferences. Companies that allow personalization or co-creation tap into this powerful psychological principle.</p>
      
      <h2>Storytelling and Identity</h2>
      <p>Products that tell compelling stories or align with our personal identity create stronger attachments. This is why brand narratives and values have become increasingly important in consumer decisions.</p>
      
      <p>Understanding these psychological principles doesn't make us immune to them, but it does help us become more conscious consumers. The next time you find yourself drawn to a product, consider which of these factors might be influencing your response.</p>
    `,
    coverImage: "/images/articles/product-design.jpg",
    author: {
      name: "Maya Johnson",
      avatar: "/images/authors/maya-johnson.jpg",
    },
    category: "Design",
    tags: ["design", "psychology", "products", "consumer behavior"],
    publishedAt: "2024-03-15T12:45:00Z",
    readTime: 8,
  },
]

// Helper functions for article data
export const getArticles = () => {
  return articles
}

export const getArticleById = (id: string) => {
  return articles.find((article) => article.id === id)
}

export const getArticleBySlug = (slug: string) => {
  return articles.find((article) => article.slug === slug)
}

export const getRecentArticles = (limit = 3) => {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export const getArticlesByCategory = (category: string) => {
  return articles.filter((article) => article.category === category)
}

export const searchArticles = (query: string) => {
  const lowercaseQuery = query.toLowerCase()
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.excerpt.toLowerCase().includes(lowercaseQuery) ||
      article.content.toLowerCase().includes(lowercaseQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}

export const getRelatedArticles = (articleId: string, limit = 3) => {
  const article = getArticleById(articleId)
  if (!article) return []

  return articles
    .filter(
      (a) =>
        a.id !== articleId && (a.category === article.category || a.tags.some((tag) => article.tags.includes(tag))),
    )
    .slice(0, limit)
}
