
import React from 'react';
import { Navigation } from './Navigation';
import { ParallaxBackground } from './ParallaxBackground';
import { StorySection } from './StorySection';
import { SectionAlignment } from './types';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navigation />
      <ParallaxBackground />

      <main className="relative z-10">
        
        {/* HERO */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-serif leading-tight">
              The biggest issue wasn't <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">complexity</span>—it was uncertainty.
            </h1>
            <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl mx-auto">
              How I rebuilt trust in an enterprise payroll system where users feared their own decisions.
            </p>
            <div className="pt-12 animate-bounce">
              <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto"></div>
            </div>
          </div>
        </section>

        {/* ACT 1: Context (Left -> Center) */}
        <StorySection id="act-1" alignment={SectionAlignment.LEFT}>
          <div className="md:w-3/5 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold">Act I — The Context</span>
            <h2 className="text-4xl md:text-6xl font-serif">A world of silent submissions.</h2>
            <p className="text-lg text-white/60 leading-relaxed">
              In high-stakes enterprise software, a "Submit" button isn't just a UI element. It's a risk. 
              Our users were HR managers handling payroll for thousands. Every time they clicked, they were 
              committing millions of dollars.
            </p>
            <div className="h-48 w-full glass-card rounded-2xl overflow-hidden mt-8 relative">
                <img 
                    src="https://picsum.photos/seed/context/1200/400" 
                    className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-700" 
                    alt="Context"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] to-transparent"></div>
            </div>
          </div>
        </StorySection>

        {/* ACT 2: The Friction (Right -> Center) */}
        <StorySection id="act-2" alignment={SectionAlignment.RIGHT}>
          <div className="md:w-3/5 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">Act II — The Friction</span>
            <h2 className="text-4xl md:text-6xl font-serif">Anxiety in the whitespace.</h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Users weren't asking for more features. They were asking the same question over and over: 
              <span className="text-white"> "Did that actually go through?"</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              <div className="glass-card p-6 rounded-xl border-l-4 border-red-500/50">
                <p className="text-sm italic text-white/40 mb-4">"I hit submit, then spent 20 minutes refreshing to be sure."</p>
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                    <span className="text-xs text-white/60">Sarah, HR Manager</span>
                </div>
              </div>
              <div className="glass-card p-6 rounded-xl border-l-4 border-yellow-500/50">
                <p className="text-sm italic text-white/40 mb-4">"The system is so quiet... it makes me nervous."</p>
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                    <span className="text-xs text-white/60">Mark, Finance Lead</span>
                </div>
              </div>
            </div>
          </div>
        </StorySection>

        {/* ACT 3: The Insight (Left -> Center) */}
        <StorySection id="act-3" alignment={SectionAlignment.CENTER}>
          <div className="max-w-4xl space-y-8 bg-gradient-to-b from-blue-500/5 to-transparent p-12 rounded-3xl border border-white/5">
            <span className="text-xs uppercase tracking-[0.3em] text-teal-400 font-semibold">Act III — The Insight</span>
            <h2 className="text-5xl md:text-7xl font-serif">The problem wasn't visibility, it was reassurance.</h2>
            <p className="text-2xl text-white/80 font-light leading-relaxed italic">
              "We were optimizing for efficiency when our users were begging for safety. 
              Efficiency is fast; Trust is explicit."
            </p>
            <div className="pt-8 flex justify-center">
                <div className="px-6 py-3 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-medium">
                    Critical Pivot Point
                </div>
            </div>
          </div>
        </StorySection>

        {/* ACT 4: The Process (Right -> Center) */}
        <StorySection id="act-4" alignment={SectionAlignment.RIGHT}>
          <div className="md:w-3/5 space-y-8 text-right">
            <span className="text-xs uppercase tracking-[0.3em] text-pink-400 font-semibold">Act IV — The One Process</span>
            <h2 className="text-4xl md:text-6xl font-serif">Kill the 'Black Box'.</h2>
            <div className="space-y-12">
                <div className="relative pr-8 border-r border-white/10">
                    <h4 className="text-xl font-semibold mb-2 text-white">The Failed Prototype</h4>
                    <p className="text-white/50">I tried a complex dashboard showing every log entry. Users hated it—it felt like reading code.</p>
                </div>
                <div className="relative pr-8 border-r border-white/10">
                    <h4 className="text-xl font-semibold mb-2 text-white">The Turning Point</h4>
                    <p className="text-white/50">A simple status bar that changed color wasn't enough. It needed to speak human.</p>
                </div>
                <div className="relative pr-8 border-r border-white/10">
                    <h4 className="text-xl font-semibold mb-2 text-white">The Solution</h4>
                    <p className="text-white/50">Active feedback loops: "Your request is being processed. 2/4 servers verified."</p>
                </div>
            </div>
          </div>
        </StorySection>

        {/* ACT 5: Key Design Decisions (Left -> Center) */}
        <StorySection id="act-5" alignment={SectionAlignment.LEFT}>
          <div className="md:w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.3em] text-orange-400 font-semibold">Act V — Decisions</span>
                <h2 className="text-4xl md:text-6xl font-serif">Design with Intent.</h2>
                <div className="space-y-8">
                    <div className="glass-card p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-2">Deterministic Feedback</h3>
                        <p className="text-white/50">I replaced vague loaders with progressive disclosure. Instead of "Loading...", we showed exactly which stage of the audit was happening.</p>
                    </div>
                    <div className="glass-card p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-2">The 'Safety Net' Animation</h3>
                        <p className="text-white/50">A subtle 200ms "hold" animation on the submit button gave users a split-second to confirm their intent, reducing accidental triggers by 40%.</p>
                    </div>
                </div>
            </div>
            <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                    src="https://picsum.photos/seed/ui/800/600" 
                    className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000" 
                    alt="UI Decisions"
                />
            </div>
          </div>
        </StorySection>

        {/* ACT 6: Outcome (Right -> Center) */}
        <StorySection id="act-6" alignment={SectionAlignment.RIGHT}>
          <div className="md:w-3/5 space-y-12">
            <span className="text-xs uppercase tracking-[0.3em] text-green-400 font-semibold">Act VI — The Outcome</span>
            <h2 className="text-4xl md:text-6xl font-serif">Silence replaced by confidence.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">92%</div>
                    <p className="text-xs text-white/40 uppercase tracking-widest">User Trust Rating</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">-65%</div>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Support Tickets</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">0</div>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Payroll Errors</p>
                </div>
            </div>
            <p className="text-lg text-white/60 leading-relaxed text-right">
              The project didn't just fix a UI problem; it changed how users felt about their workday. 
              Anxiety was replaced by a sense of control.
            </p>
          </div>
        </StorySection>

        {/* ACT 7: Reflection (Left -> Center) */}
        <StorySection id="act-7" alignment={SectionAlignment.CENTER}>
          <div className="max-w-2xl text-center space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-semibold">Final Reflection</span>
            <p className="text-lg font-light leading-relaxed text-white/70">
              This journey taught me that in UX, the most invisible work is often the most important. 
              Sometimes, the best thing you can design is a feeling of "I've got your back."
            </p>
            <div className="pt-12">
                <a href="mailto:alex@example.com" className="inline-block px-12 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform active:scale-95">
                    Start a New Story
                </a>
            </div>
          </div>
        </StorySection>

        {/* FOOTER */}
        <footer id="contact" className="py-24 border-t border-white/5 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                <div className="space-y-2">
                    <h3 className="text-2xl font-serif">Alex Chen</h3>
                    <p className="text-white/40 text-sm">Design Storyteller & Systems Thinker</p>
                </div>
                <div className="flex space-x-8 text-sm text-white/60">
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Dribbble</a>
                    <a href="#" className="hover:text-white transition-colors">Medium</a>
                </div>
                <p className="text-xs text-white/20">© 2026 Crafted with intent.</p>
            </div>
        </footer>

      </main>
    </div>
  );
};

export default App;
