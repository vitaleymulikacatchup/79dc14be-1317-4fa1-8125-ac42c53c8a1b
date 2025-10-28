"use client";

import { Award, BarChart3, Cog, Cpu, Database, HelpCircle, Rocket, Shield, Target, TrendingUp, Trophy, Users, Wifi, Zap } from "lucide-react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Analytics", id: "analytics" },
            { name: "Live", id: "live" },
            { name: "How It Works", id: "how-it-works" },
            { name: "Performance", id: "performance" },
            { name: "Case Studies", id: "case-studies" }
          ]}
          brandName="LayUp"
          button={{
            text: "Book Walkthrough",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Industry-Leading Sports Betting Predictions"
          description="Built for high rollers, hedge funds, and fan platforms. Our machine learning models deliver timing-optimized predictions with proven 16.3% ROI performance."
          tag="Elite Analytics"
          tagIcon={TrendingUp}
          buttons={[
            {
              text: "Explore Analytics",
              href: "analytics"
            },
            {
              text: "Book Walkthrough",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/8353799/pexels-photo-8353799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="LayUp sports betting analytics dashboard"
        />
      </div>

      <div id="analytics" data-section="analytics">
        <FeatureCardTwo
          title="LayUp Analytics & Live Solutions"
          description="Elite sports betting infrastructure designed for institutional clients and fan engagement platforms"
          tag="Products"
          tagIcon={Zap}
          features={[
            {
              title: "LayUp Analytics",
              description: "Elite sports betting infrastructure for high rollers and hedge funds. Time-sensitive predictions, custom model integration, 2-week pilot program.",
              icon: BarChart3,
              button: {
                text: "Book Walkthrough",
                href: "contact"
              }
            },
            {
              title: "LayUp Live",
              description: "Real-time fan activation experiences for sports platforms. Live prediction overlays, API integration, fan engagement tools.",
              icon: Wifi,
              button: {
                text: "Book Demo",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <SplitAbout
          title="How It Works"
          description="Our three-step process delivers optimized predictions for timing and performance"
          tag="Process"
          tagIcon={Cog}
          bulletPoints={[
            {
              title: "Input",
              description: "We collect market data, historical results, and live odds feeds",
              icon: Database
            },
            {
              title: "Engine",
              description: "Our machine learning models predict outcomes with precision",
              icon: Cpu
            },
            {
              title: "Output",
              description: "Clients receive prediction sets optimized for timing and performance",
              icon: Target
            }
          ]}
          imageSrc="https://images.pexels.com/photos/8566445/pexels-photo-8566445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Machine learning prediction models"
          imagePosition="right"
        />
      </div>

      <div id="performance" data-section="performance">
        <MetricCardOne
          title="Performance"
          description="Built for scale, backed by data, optimized for timing"
          tag="Results"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "16.3%",
              title: "ROI",
              description: "NBA spreads performance in March 2025",
              icon: TrendingUp
            },
            {
              id: "2",
              value: "100%",
              title: "Expert Built",
              description: "By ML engineers and data scientists",
              icon: Users
            },
            {
              id: "3",
              value: "Edge",
              title: "Protected",
              description: "Timing-optimized delivery for scale",
              icon: Shield
            }
          ]}
          buttons={[
            {
              text: "Access Case Study",
              href: "case-studies"
            }
          ]}
        />
      </div>

      <div id="case-studies" data-section="case-studies">
        <TestimonialCardThree
          title="Recent Case Studies"
          description="Real results from institutional clients using LayUp predictions"
          tag="Success Stories"
          tagIcon={Trophy}
          testimonials={[
            {
              id: "1",
              name: "Marcus Chen",
              handle: "@hedgefund_pro",
              testimonial: "LayUp's NBA predictions delivered consistent edge throughout March. The timing optimization made all the difference for our systematic strategies.",
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Sarah Williams",
              handle: "@quantitative_edge",
              testimonial: "The machine learning models behind LayUp are impressive. We've seen significant improvement in our sports betting portfolio performance.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "David Rodriguez",
              handle: "@institutional_bets",
              testimonial: "LayUp Analytics transformed our approach to sports betting. The data quality and prediction accuracy are industry-leading.",
              imageSrc: "https://images.pexels.com/photos/7414273/pexels-photo-7414273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Jennifer Park",
              handle: "@fintech_insider",
              testimonial: "The easiest shot in sports. LayUp's platform makes institutional-grade predictions accessible and actionable.",
              imageSrc: "https://images.pexels.com/photos/4816771/pexels-photo-4816771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about LayUp's prediction platform"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What makes LayUp predictions different?",
              content: "LayUp uses advanced machine learning models trained on market data, historical results, and live odds feeds. Our predictions are optimized for timing and performance, specifically designed for institutional clients."
            },
            {
              id: "2",
              title: "Who can access LayUp Analytics?",
              content: "LayUp Analytics is designed for high rollers and hedge funds. We offer custom model integration and a 2-week pilot program for qualified institutional clients."
            },
            {
              id: "3",
              title: "How does the performance tracking work?",
              content: "We provide comprehensive performance metrics including ROI tracking, prediction accuracy, and timing analysis. Our March 2025 NBA spreads achieved 16.3% ROI."
            },
            {
              id: "4",
              title: "What is LayUp Live?",
              content: "LayUp Live provides real-time fan activation experiences for sports platforms, including live prediction overlays, API integration, and fan engagement tools."
            },
            {
              id: "5",
              title: "How do I get started?",
              content: "Book a walkthrough to discuss your specific needs. We offer tailored solutions for high rollers and fan platforms with custom integration support."
            },
            {
              id: "6",
              title: "What sports do you cover?",
              content: "We currently focus on NBA with proven results. Our models are expanding to cover additional major sports leagues with the same institutional-grade accuracy."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Rocket}
          title="Ready to Access Elite Predictions?"
          description="Join institutional clients using LayUp for industry-leading sports betting performance. Book your walkthrough today."
          inputPlaceholder="Enter your institutional email"
          buttonText="Book Walkthrough"
          termsText="By clicking Book Walkthrough you're confirming interest in LayUp's institutional services."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="LayUp"
          columns={[
            {
              items: [
                { label: "LayUp Analytics", href: "analytics" },
                { label: "LayUp Live", href: "live" },
                { label: "How It Works", href: "how-it-works" }
              ]
            },
            {
              items: [
                { label: "Performance", href: "performance" },
                { label: "Case Studies", href: "case-studies" },
                { label: "FAQ", href: "faq" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}