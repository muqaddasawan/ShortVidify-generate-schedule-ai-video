'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, Video, Calendar, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-50 selection:bg-purple-500/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="size-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white">
              <Video className="size-5" />
            </div>
            ShortVidify
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">How it Works</a>
            <a href="#pricing" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 text-sm font-medium mb-8"
          >
            <Sparkles className="size-4" />
            <span>AI-Powered Short Video Creation & Scheduling</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            Create Viral Shorts <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              On Autopilot
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Generate engaging AI shorts and automatically schedule them across YouTube Shorts, Instagram Reels, and TikTok from one powerful dashboard.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full h-14 px-8 text-base bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto">
              Start Creating for Free <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base w-full sm:w-auto group">
              <Play className="mr-2 size-5 group-hover:text-purple-500 transition-colors" /> Watch Demo
            </Button>
          </motion.div>
          
          {/* Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 relative rounded-2xl md:rounded-[32px] border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-xl p-2 md:p-4 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent z-10 rounded-2xl md:rounded-[32px] pointer-events-none" />
            <div className="rounded-xl md:rounded-[24px] overflow-hidden border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-slate-900 aspect-video relative flex items-center justify-center">
               <div className="text-center">
                  <Video className="size-16 mx-auto text-slate-400 dark:text-slate-600 mb-4" />
                  <p className="font-medium text-slate-500 dark:text-slate-400">App Dashboard Interface Preview</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to go viral</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Stop spending hours editing and posting. Let AI handle the heavy lifting while you focus on the creative vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="size-6 text-purple-500" />,
                title: "AI Video Generation",
                description: "Turn text prompts or blog posts into highly engaging short videos with captions, music, and voiceovers."
              },
              {
                icon: <Calendar className="size-6 text-blue-500" />,
                title: "Smart Auto-Scheduling",
                description: "Plan a month's worth of content in minutes. Our scheduler optimal times for maximum reach."
              },
              {
                icon: <Video className="size-6 text-pink-500" />,
                title: "Multi-Platform Sync",
                description: "Post simultaneously to YouTube Shorts, Instagram Reels, TikTok, and even embed in Emails."
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white dark:bg-black border border-slate-200 dark:border-white/10 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-colors group">
                <div className="size-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
           <h2 className="text-3xl md:text-5xl font-bold mb-16">3 Simple steps to dominance</h2>
           
           <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20" />
              
              {[
                { step: "01", title: "Generate", desc: "Input your idea and let AI craft the perfect video." },
                { step: "02", title: "Review", desc: "Tweak captions, swap visuals, and approve." },
                { step: "03", title: "Schedule", desc: "Set it and forget it across all major platforms." }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className="size-24 rounded-full bg-white dark:bg-black border-4 border-slate-50 dark:border-slate-900 shadow-xl flex items-center justify-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-blue-600 mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-[3rem] bg-gradient-to-br from-purple-900 to-blue-900 p-12 md:p-20 text-center relative overflow-hidden border border-white/10 text-white">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale your content?</h2>
              <p className="text-purple-200 text-lg mb-10 max-w-2xl mx-auto">
                Join thousands of creators who are already saving 20+ hours a week using ShortVidify's AI generation and scheduling.
              </p>
              <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-white text-purple-900 hover:bg-slate-100 w-full sm:w-auto">
                Start your 14-day free trial
              </Button>
              <p className="mt-6 text-sm text-purple-300 flex items-center justify-center gap-2">
                 <CheckCircle2 className="size-4" /> No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/50 pt-20 pb-10 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl mb-6">
                <div className="size-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white">
                  <Video className="size-5" />
                </div>
                ShortVidify
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
                The all-in-one AI platform for creating and scheduling short-form video content across the internet.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">AI Generator</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Scheduler</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Guides</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 dark:text-slate-400 text-sm">
            <p>© 2024 ShortVidify Inc. All rights reserved.</p>
            <div className="flex gap-4">
              {/* Note: In a real app add proper social icons, placing placeholders here */}
              <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Twitter</a>
              <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Instagram</a>
              <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
