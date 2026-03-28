import React, { useState, useEffect } from "react";
import {
  ThermometerSun,
  Activity,
  ShieldAlert,
  Droplets,
  Watch,
  Users,
  GraduationCap,
  Mail,
  MapPin,
  HeartPulse,
  Sun,
  BookOpen,
  ArrowRight,
  Menu,
  X,
  BookCheck,
  LayoutDashboard,
  ShieldCheck,
  Landmark,
  TrendingUp,
  Settings,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Overview" },
    { id: "children", label: "For Children" },
    { id: "teachers", label: "For Teachers" },
    { id: "policymakers", label: "For Policy" },
    { id: "infographic", label: "The Big Picture" },
    { id: "partner", label: "Partner With Us" },
    { id: "team", label: "Team" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-300 selection:text-orange-900 overflow-x-hidden">
      {/* Custom Keyframe Animations - Guaranteed to work everywhere */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .bg-gradient-animate { background-size: 200% 200%; animation: gradientMove 10s ease infinite; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `,
        }}
      />

      {/* Frosted Glass Navigation */}
      <nav className="bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] sticky top-0 z-50 border-b border-white transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => navigateTo("home")}
            >
              <div className="bg-gradient-to-br from-orange-400 to-red-600 p-2.5 rounded-2xl mr-4 shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <ThermometerSun className="h-7 w-7 text-white shrink-0" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 tracking-tight leading-none">
                  Data-Driven
                </span>
                <span className="font-bold text-orange-500 tracking-widest text-sm uppercase">
                  Resilience
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-105 transform"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 hover:scale-105"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-500 hover:text-slate-700 focus:outline-none p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors shadow-sm"
              >
                {isMobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 absolute w-full z-40 shadow-2xl transition-all duration-300 origin-top ${
            isMobileMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 h-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-8 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`block w-full text-left px-6 py-4 rounded-2xl text-lg font-bold transition-all shadow-sm ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-blue-50 to-indigo-100 text-blue-800 border-l-4 border-blue-600"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:translate-x-2 border-l-4 border-transparent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {activeTab === "home" && <Home navigateTo={navigateTo} />}
        {activeTab === "children" && <ChildrenPage />}
        {activeTab === "teachers" && <TeachersPage />}
        {activeTab === "policymakers" && <PolicymakersPage />}
        {activeTab === "infographic" && <Infographic />}
        {activeTab === "partner" && <Partner />}
        {activeTab === "team" && <Team />}
      </main>

      <footer className="bg-slate-950 text-slate-400 py-16 text-center border-t-4 border-orange-500 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center justify-center p-4 bg-slate-900 rounded-full mb-6 shadow-[0_0_20px_rgba(249,115,22,0.2)] border border-slate-800">
            <ThermometerSun className="h-8 w-8 text-orange-500" />
          </div>
          <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
            Data-Driven Resilience in PE
          </h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Protecting Children and Young People from Heat Stress via Wearable
            Technology in Physical Education Lessons.
          </p>
          <div className="h-px w-32 bg-slate-800 mx-auto mb-8"></div>
          <p className="text-sm font-medium tracking-widest uppercase text-slate-500">
            © Howells et al. (2026) | Climate-Resilient PE
          </p>
        </div>
      </footer>
    </div>
  );
}

// --- HOME PAGE ---
function Home({ navigateTo }) {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-animate bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-32 px-6">
        {/* Floating Background Orbs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] mix-blend-screen animate-float-slow"></div>
        <div
          className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-[100px] mix-blend-screen animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-fade-up inline-flex items-center px-5 py-2.5 rounded-full border border-blue-400/40 bg-blue-500/20 text-blue-200 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-md">
            <Sparkles className="h-4 w-4 mr-2 text-blue-300" />
            The Future of Physical Education
          </div>
          <h1 className="animate-fade-up delay-100 text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            Protecting Children <br className="hidden md:block" /> from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
              Heat Stress
            </span>
          </h1>
          <p className="animate-fade-up delay-200 text-2xl md:text-3xl text-blue-100/90 max-w-4xl mx-auto mb-14 leading-relaxed font-light">
            Rising global temperatures are now an enduring feature of children's
            environments. We build
            <strong className="text-white font-bold bg-white/10 px-2 py-1 rounded-lg mx-1">
              heat literacy
            </strong>
            by making invisible physiological strain visible.
          </p>
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => navigateTo("infographic")}
              className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 flex items-center justify-center shadow-[0_10px_30px_rgba(249,115,22,0.4)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.6)] hover:-translate-y-2 active:translate-y-0 text-xl"
            >
              Explore The Solution
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform duration-300" />
            </button>
            <button
              onClick={() => navigateTo("teachers")}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-xl border-2 border-white/20 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 flex items-center justify-center text-xl hover:-translate-y-2 active:translate-y-0"
            >
              Guidance For Teachers
            </button>
          </div>
        </div>
      </section>

      {/* THE RISK SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-24 animate-fade-up">
          <h2 className="text-5xl font-black text-slate-800 mb-6 tracking-tight">
            Understanding the Risk
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-2xl text-slate-500 max-w-4xl mx-auto leading-relaxed">
            Heat stress occurs when a child's thermoregulatory capacity cannot
            keep up with the demands of physical movement and environmental
            heat.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="animate-fade-up delay-100 group bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-2 border-slate-50 flex items-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-200 cursor-default">
              <div className="bg-blue-100 p-5 rounded-3xl mr-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500 shadow-inner">
                <Droplets className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-black text-2xl mb-2 text-slate-800 group-hover:text-blue-700 transition-colors">
                  Underdeveloped Thirst Reflex
                </h4>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Children easily miss the physiological signs that they need to
                  hydrate during activities.
                </p>
              </div>
            </div>

            <div className="animate-fade-up delay-200 group bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-2 border-slate-50 flex items-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-500/20 hover:border-red-200 cursor-default">
              <div className="bg-red-100 p-5 rounded-3xl mr-6 group-hover:scale-110 group-hover:bg-red-600 transition-all duration-500 shadow-inner">
                <Activity className="h-10 w-10 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-black text-2xl mb-2 text-slate-800 group-hover:text-red-700 transition-colors">
                  Physiological Vulnerability
                </h4>
                <p className="text-slate-600 text-lg leading-relaxed">
                  A higher surface-area-to-mass ratio causes reduced evaporative
                  cooling efficiency.
                </p>
              </div>
            </div>

            <div className="animate-fade-up delay-300 group bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-2 border-slate-50 flex items-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-200 cursor-default">
              <div className="bg-orange-100 p-5 rounded-3xl mr-6 group-hover:scale-110 group-hover:bg-orange-600 transition-all duration-500 shadow-inner">
                <ShieldAlert className="h-10 w-10 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-black text-2xl mb-2 text-slate-800 group-hover:text-orange-700 transition-colors">
                  Hidden Individual Risks
                </h4>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Obesity and common medications (like ADHD treatments) suppress
                  sweat and thirst.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up delay-200 lg:col-span-5 bg-gradient-to-br from-orange-500 to-red-600 p-10 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(249,115,22,0.3)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-[2] transition-transform duration-1000 group-hover:rotate-12 pointer-events-none">
              <ThermometerSun className="h-64 w-64 text-white" />
            </div>
            <h3 className="text-4xl font-black text-white mb-10 flex items-center relative z-10 drop-shadow-md">
              <ShieldAlert className="mr-4 h-10 w-10 text-orange-200" />{" "}
              Recognizing Signs
            </h3>
            <ul className="space-y-6 relative z-10">
              <li className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors">
                <p className="text-white leading-relaxed text-lg m-0">
                  <strong className="font-black text-xl text-orange-200 block mb-2">
                    Physical Symptoms:{" "}
                  </strong>
                  Range from dizziness and nausea to clammy skin and fatigue.
                </p>
              </li>
              <li className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors">
                <p className="text-white leading-relaxed text-lg m-0">
                  <strong className="font-black text-xl text-orange-200 block mb-2">
                    Behavioral Changes:{" "}
                  </strong>
                  Irritability or reduced motivation frequently occur{" "}
                  <em className="text-white font-bold border-b border-orange-300">
                    before
                  </em>{" "}
                  physical symptoms.
                </p>
              </li>
              <li className="bg-red-900/40 backdrop-blur-md p-6 rounded-3xl border border-red-400/30 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                <p className="text-white leading-relaxed text-lg m-0">
                  <strong className="font-black text-xl text-red-300 block mb-2">
                    The "Silent" Risk:{" "}
                  </strong>
                  Critically, skin and core temperatures can rise dangerously
                  without{" "}
                  <strong className="text-white">any visible symptoms</strong>{" "}
                  at all.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WEARABLE SOLUTION */}
      <section className="bg-slate-900 text-white py-32 px-6 relative border-y-8 border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-float inline-flex p-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-8 shadow-[0_0_40px_rgba(59,130,246,0.6)] border-4 border-blue-400">
            <Watch className="h-14 w-14 text-white" />
          </div>
          <h2 className="animate-fade-up text-5xl md:text-6xl font-black mb-8 tracking-tight drop-shadow-lg">
            The Wearable Solution
          </h2>
          <p className="animate-fade-up delay-100 text-2xl text-blue-200 max-w-4xl mx-auto mb-20 leading-relaxed font-light">
            Relying purely on visual observation or external weather thresholds
            is no longer sufficient. We must account for a child's unique,
            individual variability.
          </p>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="animate-fade-up delay-100 bg-slate-800/80 backdrop-blur-xl p-12 rounded-[3rem] border border-slate-700 hover:border-teal-500 transition-all duration-500 group hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(20,184,166,0.2)]">
              <div className="bg-slate-900 border border-slate-700 p-5 rounded-3xl inline-block mb-8 group-hover:scale-110 group-hover:border-teal-500 group-hover:bg-teal-900 transition-all duration-500">
                <Activity className="h-10 w-10 text-teal-400 group-hover:text-teal-300" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white group-hover:text-teal-400 transition-colors">
                Instructional Tools
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Technologies serve as mediators that translate internal
                physiological processes into shared, interpretable signals.
              </p>
            </div>

            <div className="animate-fade-up delay-200 bg-slate-800/80 backdrop-blur-xl p-12 rounded-[3rem] border border-slate-700 hover:border-pink-500 transition-all duration-500 group hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(236,72,153,0.2)]">
              <div className="bg-slate-900 border border-slate-700 p-5 rounded-3xl inline-block mb-8 group-hover:scale-110 group-hover:border-pink-500 group-hover:bg-pink-900 transition-all duration-500">
                <HeartPulse className="h-10 w-10 text-pink-400 group-hover:text-pink-300" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white group-hover:text-pink-400 transition-colors">
                Bridging the Gap
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Monitoring real-time data bridges the "perceptual mismatch"
                between how a child feels and their actual strain.
              </p>
            </div>

            <div className="animate-fade-up delay-300 bg-slate-800/80 backdrop-blur-xl p-12 rounded-[3rem] border border-slate-700 hover:border-blue-500 transition-all duration-500 group hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
              <div className="bg-slate-900 border border-slate-700 p-5 rounded-3xl inline-block mb-8 group-hover:scale-110 group-hover:border-blue-500 group-hover:bg-blue-900 transition-all duration-500">
                <BookOpen className="h-10 w-10 text-blue-400 group-hover:text-blue-300" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white group-hover:text-blue-400 transition-colors">
                Informed Decisions
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Support informed, real-time decisions regarding pacing,
                hydration, and precisely when to rest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- FOR CHILDREN PAGE ---
function ChildrenPage() {
  return (
    <div className="animate-in fade-in duration-500 bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50 min-h-screen relative overflow-hidden pb-20">
      <div className="absolute top-20 left-10 w-64 h-20 bg-white rounded-full opacity-80 blur-md animate-float-slow"></div>
      <div
        className="absolute top-40 right-20 w-80 h-24 bg-white rounded-full opacity-70 blur-md animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-5xl mx-auto py-24 px-6 relative z-10">
        <div className="text-center mb-24 animate-fade-up">
          <div className="animate-float inline-flex items-center justify-center p-6 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full mb-10 shadow-[0_10px_40px_rgba(234,179,8,0.6)] border-4 border-yellow-200">
            <Sun className="h-20 w-20 text-white" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-sky-950 mb-8 tracking-tight drop-shadow-sm">
            Your Body, Your Data: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 drop-shadow-sm">
              Staying Cool!
            </span>
          </h1>
          <p className="text-3xl text-sky-800 font-bold max-w-4xl mx-auto leading-relaxed">
            Welcome to Heat Literacy! Did you know playing sports in the heat
            affects children differently than adults?
          </p>
        </div>

        <div className="grid gap-12">
          <div className="animate-fade-up delay-100 group bg-white/90 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-sky-900/10 border-4 border-sky-100 hover:border-sky-400 transition-all duration-500 hover:-translate-y-3 cursor-default">
            <div className="flex items-center mb-10">
              <div className="bg-red-500 text-white p-5 rounded-[2rem] mr-8 group-hover:scale-110 transition-transform group-hover:rotate-6 shadow-lg shadow-red-500/30">
                <ThermometerSun className="h-12 w-12" />
              </div>
              <h2 className="text-4xl font-black text-slate-800">
                Why Do Children Get Hotter?
              </h2>
            </div>
            <ul className="space-y-6 text-2xl text-slate-600 md:ml-[104px] list-none">
              <li className="flex items-start">
                <ChevronRight className="h-8 w-8 text-sky-400 mr-2 shrink-0" />{" "}
                Your body is still growing, which means you heat up faster than
                adults do when moving around.
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-8 w-8 text-sky-400 mr-2 shrink-0" />{" "}
                You have an underdeveloped thirst reflex. This means you might
                not feel thirsty even when your body really needs water!
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-8 w-8 text-sky-400 mr-2 shrink-0" />{" "}
                Because of this, you might get dangerously hot on the inside
                even if the weather outside seems okay.
              </li>
            </ul>
          </div>

          <div className="animate-fade-up delay-200 group bg-white/90 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-orange-900/10 border-4 border-orange-100 hover:border-orange-400 transition-all duration-500 hover:-translate-y-3 cursor-default">
            <div className="flex items-center mb-10">
              <div className="bg-orange-500 text-white p-5 rounded-[2rem] mr-8 group-hover:scale-110 transition-transform group-hover:-rotate-6 shadow-lg shadow-orange-500/30">
                <ShieldAlert className="h-12 w-12" />
              </div>
              <h2 className="text-4xl font-black text-slate-800">
                Listen to Your Body's Clues
              </h2>
            </div>
            <p className="text-2xl text-slate-600 md:ml-[104px] mb-8 font-bold">
              Sometimes your body gives warning signs before you feel completely
              exhausted:
            </p>
            <ul className="space-y-6 text-2xl text-slate-600 md:ml-[104px] list-none">
              <li className="flex items-start">
                <ChevronRight className="h-8 w-8 text-orange-400 mr-2 shrink-0" />{" "}
                Dizzy, sick, or pale, clammy skin and excessive sweating.
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-8 w-8 text-orange-400 mr-2 shrink-0" />{" "}
                Unusually grumpy, irritated, or tired (this happens{" "}
                <em className="text-orange-600 font-bold border-b-2 border-orange-300">
                  before
                </em>{" "}
                physical symptoms).
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-8 w-8 text-orange-400 mr-2 shrink-0" />{" "}
                It can also make it harder for you to pay attention, remember
                things, or learn.
              </li>
            </ul>
          </div>

          <div className="animate-fade-up delay-300 group bg-white/90 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-teal-900/10 border-4 border-teal-100 hover:border-teal-400 transition-all duration-500 hover:-translate-y-3 cursor-default">
            <div className="flex items-center mb-10">
              <div className="bg-teal-500 text-white p-5 rounded-[2rem] mr-8 group-hover:scale-110 transition-transform group-hover:rotate-12 shadow-lg shadow-teal-500/30">
                <Watch className="h-12 w-12" />
              </div>
              <h2 className="text-4xl font-black text-slate-800">
                How Smart Tech Can Help You
              </h2>
            </div>
            <ul className="space-y-6 text-2xl text-slate-600 md:ml-[104px] list-none">
              <li className="flex items-start">
                <ChevronRight className="h-8 w-8 text-teal-400 mr-2 shrink-0" />{" "}
                These devices are <strong>not</strong> used to check who is the
                fastest or to compare you to your friends.
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-8 w-8 text-teal-400 mr-2 shrink-0" />{" "}
                They are tools to make your invisible body signals (heart rate,
                skin temp) visible on a screen.
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-8 w-8 text-teal-400 mr-2 shrink-0" />{" "}
                Looking at this data helps you and your teacher figure out
                exactly when you need to slow down, grab water, or rest.
              </li>
              <li className="flex items-start font-black text-teal-700 bg-teal-50 p-4 rounded-2xl mt-8">
                <Sparkles className="h-8 w-8 text-teal-500 mr-4 shrink-0" />{" "}
                Over time, this helps you become an expert on your own body!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- FOR TEACHERS PAGE ---
function TeachersPage() {
  return (
    <div className="animate-in fade-in duration-500 bg-emerald-50 min-h-screen relative pb-24">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-emerald-100 to-transparent -z-10"></div>
      <div className="max-w-6xl mx-auto py-24 px-6 relative z-10">
        <div className="text-center mb-24 animate-fade-up">
          <div className="animate-float inline-flex items-center justify-center p-6 bg-emerald-500 rounded-[2rem] mb-10 shadow-xl shadow-emerald-500/40 text-white">
            <BookCheck className="h-16 w-16" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 tracking-tight">
            Pedagogical Transformation: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Guidance for Teachers
            </span>
          </h1>
          <p className="text-3xl text-slate-500 font-bold max-w-4xl mx-auto leading-relaxed">
            Shift away from reactive, threshold-based guidance to safeguard
            student wellbeing.
          </p>
        </div>

        <div className="space-y-16">
          <div className="animate-fade-up delay-100 bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-emerald-900/10 border-2 border-emerald-100 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-50 rounded-full blur-[80px] group-hover:bg-emerald-100 transition-colors duration-1000"></div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-10 flex items-center relative z-10">
              <div className="bg-slate-900 text-emerald-400 p-4 rounded-2xl mr-6 shadow-xl group-hover:scale-110 transition-transform">
                <LayoutDashboard className="h-10 w-10 shrink-0" />
              </div>
              Overcoming "Perceptual Mismatch"
            </h2>
            <div className="prose prose-2xl max-w-none text-slate-600 relative z-10 leading-relaxed">
              <p>
                A persistent challenge in managing heat stress is the{" "}
                <strong>perceptual mismatch</strong> between perceived and
                actual physiological states. Children often lack the
                interoceptive awareness to accurately judge their physical
                activity intensity, hydration needs, or physiological strain.
              </p>
              <p>
                As a teacher, relying purely on visual observation or external
                weather thresholds is insufficient. A child moving slowly may be
                operating near maximal cardiovascular capacity, while a
                confident athlete may approach dangerous thresholds without
                visible distress.
              </p>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-10 rounded-[2rem] mt-12 shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                <strong className="text-white text-3xl font-black block mb-4">
                  The Reframe:
                </strong>
                <span className="text-emerald-50">
                  Perceptual mismatch is not an individual failure of the child,
                  but a <strong>pedagogical design problem</strong>. Wearables
                  serve as instructional tools to translate internal
                  physiological processes into shared, interpretable signals.
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-up delay-200 bg-white rounded-[3rem] p-12 md:p-14 shadow-xl shadow-slate-200/50 border-2 border-slate-100 h-full hover:shadow-2xl hover:border-teal-300 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-3xl font-black text-slate-800 mb-8 flex items-center">
                <div className="bg-teal-500 text-white p-4 rounded-2xl mr-5 shadow-lg">
                  <Settings className="h-8 w-8" />
                </div>
                Real-Time Decisions
              </h3>
              <p className="text-slate-600 mb-10 text-xl leading-relaxed font-medium">
                Wearables should not be used for performance surveillance.
                Instead, scaffold <strong>heat literacy</strong> by linking
                sensation to action.
              </p>
              <ul className="space-y-6 text-slate-700 text-xl font-medium list-none">
                <li className="flex items-start">
                  <ChevronRight className="text-teal-500 mr-2 h-6 w-6 shrink-0" />{" "}
                  Make proportionate adjustments to task intensity in real-time.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-teal-500 mr-2 h-6 w-6 shrink-0" />{" "}
                  Adjust lesson duration based on data, not arbitrary time
                  limits.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-teal-500 mr-2 h-6 w-6 shrink-0" />{" "}
                  Inform exact decisions on pacing, hydrating, and resting.
                </li>
              </ul>
            </div>

            <div className="animate-fade-up delay-300 bg-white rounded-[3rem] p-12 md:p-14 shadow-xl shadow-slate-200/50 border-2 border-slate-100 h-full hover:shadow-2xl hover:border-teal-300 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-3xl font-black text-slate-800 mb-8 flex items-center">
                <div className="bg-teal-500 text-white p-4 rounded-2xl mr-5 shadow-lg">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                Assessment & Inclusion
              </h3>
              <p className="text-slate-600 mb-10 text-xl leading-relaxed font-medium">
                The structural invisibility of individual vulnerabilities means
                heat risk is unevenly distributed among your students.
              </p>
              <ul className="space-y-6 text-slate-700 text-xl font-medium list-none">
                <li className="flex items-start">
                  <ChevronRight className="text-teal-500 mr-2 h-6 w-6 shrink-0" />{" "}
                  Enable <strong>effort-based assessment</strong> relative to a
                  baseline.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-teal-500 mr-2 h-6 w-6 shrink-0" />{" "}
                  Actively avoid peer comparison or competitive data framing.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-teal-500 mr-2 h-6 w-6 shrink-0" />{" "}
                  Address vulnerability without requiring diagnosis or stigma.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- FOR POLICYMAKERS PAGE ---
function PolicymakersPage() {
  return (
    <div className="animate-in fade-in duration-500 bg-slate-950 min-h-screen relative overflow-hidden pb-24 text-white">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="max-w-6xl mx-auto py-24 px-6 relative z-10">
        <div className="text-center mb-24 animate-fade-up">
          <div className="animate-float inline-flex items-center justify-center p-6 bg-indigo-500 rounded-[2rem] mb-10 shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-indigo-400">
            <Landmark className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Systemic Climate Resilience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              For Policymakers
            </span>
          </h1>
          <p className="text-3xl text-indigo-200 font-medium max-w-4xl mx-auto leading-relaxed">
            Addressing heat stress is both a safeguarding obligation and an
            equity imperative for global education systems.
          </p>
        </div>

        <div className="animate-fade-up delay-100 bg-slate-900/80 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 shadow-2xl border border-slate-700 mb-20 relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-500">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-10 relative z-10 flex items-center">
            The Systemic Challenge
          </h2>
          <div className="prose prose-2xl max-w-none text-slate-300 relative z-10 leading-relaxed font-light">
            <p>
              Climate change is a defining condition of contemporary education.
              Schools, many of which were designed for temperate climates, must
              now operate safely under sustained thermal stress. UNICEF
              estimates that by 2050,{" "}
              <strong className="text-white font-bold">
                almost every child globally under the age of 18 will be exposed
                to high heatwave frequency
              </strong>
              .
            </p>
            <p className="mt-8">
              The educational significance of heat stress lies in its unequal
              distribution. Elevated temperatures impair attention, working
              memory, and executive function. Modest increases in school-year
              temperatures are associated with measurable learning losses,
              disproportionately impacting students with underlying
              vulnerabilities and limited access to cooling.
            </p>
          </div>
        </div>

        <div className="text-center mb-16 animate-fade-up delay-200">
          <h2 className="text-5xl font-black text-white tracking-tight">
            Policy Action Plan
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="animate-fade-up delay-100 group bg-slate-900/50 backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl border border-slate-800 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-3">
            <div className="bg-indigo-500/20 text-indigo-400 p-5 rounded-2xl inline-block mb-8 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <TrendingUp className="h-10 w-10" />
            </div>
            <h3 className="text-3xl font-black text-white mb-6">
              1. Curriculum & Training
            </h3>
            <p className="text-slate-400 text-xl leading-relaxed">
              Standardise heat-safety training. Embed "heat literacy" directly
              into national Physical Education curricula. Preservice teachers
              must be taught to respond to biometric feedback within their
              training programs.
            </p>
          </div>

          <div className="animate-fade-up delay-200 group bg-slate-900/50 backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl border border-slate-800 hover:border-purple-500 transition-all duration-300 hover:-translate-y-3">
            <div className="bg-purple-500/20 text-purple-400 p-5 rounded-2xl inline-block mb-8 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
              <ShieldCheck className="h-10 w-10" />
            </div>
            <h3 className="text-3xl font-black text-white mb-6">
              2. Governance & Ethics
            </h3>
            <p className="text-slate-400 text-xl leading-relaxed">
              The integration of wearables raises valid ethical concerns.
              Policymakers must establish clear governance safeguards regarding
              informed consent, data privacy, and the ethical management of
              minors' digital health records.
            </p>
          </div>

          <div className="animate-fade-up delay-300 group bg-slate-900/50 backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl border border-slate-800 hover:border-pink-500 transition-all duration-300 hover:-translate-y-3">
            <div className="bg-pink-500/20 text-pink-400 p-5 rounded-2xl inline-block mb-8 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
              <ThermometerSun className="h-10 w-10" />
            </div>
            <h3 className="text-3xl font-black text-white mb-6">
              3. Resilient Infrastructure
            </h3>
            <p className="text-slate-400 text-xl leading-relaxed">
              Reliance on personal wearable devices risks widening inequalities.
              Schools must be funded to purchase school-owned equipment.
              Wearable data systems must be paired with investments in permanent
              shade and hydration stations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- INFOGRAPHIC PAGE ---
function Infographic() {
  return (
    <div className="animate-in fade-in duration-500 py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 tracking-tight">
          The Big Picture: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Visualizing Resilience
          </span>
        </h1>
        <p className="text-3xl text-slate-500 font-medium max-w-4xl mx-auto leading-relaxed">
          Climate change is changing how we play, but we are changing how we
          teach.
        </p>
      </div>

      <div className="animate-fade-up delay-100 w-full mb-24 rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-[12px] border-white bg-slate-100 relative group">
        <img
          src="1000047591.png"
          alt="Data-Driven Resilience: Protecting Children from Heat Stress via Wearable Technology Infographic"
          className="w-full h-auto object-contain transform transition-transform duration-1000 group-hover:scale-[1.02]"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/1200x675?text=Please+upload+your+image+to+the+public+folder";
          }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="animate-fade-up delay-200 bg-white p-12 rounded-[3rem] shadow-2xl shadow-blue-900/5 border-2 border-slate-50 hover:border-blue-200 transition-colors">
          <h3 className="text-4xl font-black text-slate-800 mb-10 flex items-center">
            <div className="bg-blue-600 text-white p-4 rounded-2xl mr-5 shadow-lg">
              <Sparkles className="h-8 w-8" />
            </div>
            Enhancing Wellbeing
          </h3>
          <ul className="space-y-8">
            <li className="flex flex-col bg-slate-50 p-6 rounded-2xl">
              <strong className="text-2xl font-black text-blue-700 mb-2">
                Real-Time Awareness
              </strong>
              <span className="text-slate-600 text-xl leading-relaxed">
                Wearables provide immediate feedback on heart rate and skin
                temperature to identify invisible strain.
              </span>
            </li>
            <li className="flex flex-col bg-slate-50 p-6 rounded-2xl">
              <strong className="text-2xl font-black text-blue-700 mb-2">
                Fostering Self-Regulation
              </strong>
              <span className="text-slate-600 text-xl leading-relaxed">
                The data helps children identify exactly when they need to
                hydrate or seek shade before symptoms escalate.
              </span>
            </li>
          </ul>
        </div>

        <div className="animate-fade-up delay-300 bg-white p-12 rounded-[3rem] shadow-2xl shadow-emerald-900/5 border-2 border-slate-50 hover:border-emerald-200 transition-colors">
          <h3 className="text-4xl font-black text-slate-800 mb-10 flex items-center">
            <div className="bg-emerald-600 text-white p-4 rounded-2xl mr-5 shadow-lg">
              <LayoutDashboard className="h-8 w-8" />
            </div>
            Effective Implementation
          </h3>
          <ul className="space-y-8">
            <li className="flex flex-col bg-slate-50 p-6 rounded-2xl">
              <strong className="text-2xl font-black text-emerald-700 mb-2">
                Personalized Coaching
              </strong>
              <span className="text-slate-600 text-xl leading-relaxed">
                Teachers use real-time biometric data to tailor exercise
                intensity to individual student needs.
              </span>
            </li>
            <li className="flex flex-col bg-slate-50 p-6 rounded-2xl">
              <strong className="text-2xl font-black text-emerald-700 mb-2">
                Objective Safety Oversight
              </strong>
              <span className="text-slate-600 text-xl leading-relaxed">
                Continuous monitoring allows educators to instantly identify
                students approaching dangerous thresholds.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="animate-fade-up delay-200 bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden text-white border-4 border-slate-800">
        <div className="p-12 text-center border-b border-slate-800 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full"></div>
          <h3 className="text-4xl font-black text-white mb-4 relative z-10">
            The Upgrade: Traditional vs. Wearable PE
          </h3>
          <p className="text-slate-400 text-2xl relative z-10">
            Comparing observation methods reveals a massive leap in safety.
          </p>
        </div>
        <div className="p-10">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-slate-800 p-8 rounded-[2rem] border border-slate-700 hover:bg-slate-800/80 transition-colors">
              <div className="font-black text-white text-2xl">
                Pacing Accuracy
              </div>
              <div className="text-slate-400 text-xl font-medium">
                Low (Trial & Error)
              </div>
              <div className="text-blue-400 font-black text-2xl flex items-center bg-blue-900/30 p-4 rounded-xl border border-blue-800/50">
                <Sparkles className="h-6 w-6 mr-3" /> High (Real-Time)
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-slate-800 p-8 rounded-[2rem] border border-slate-700 hover:bg-slate-800/80 transition-colors">
              <div className="font-black text-white text-2xl">
                Student Motivation
              </div>
              <div className="text-slate-400 text-xl font-medium">
                Low (Invisible Progress)
              </div>
              <div className="text-emerald-400 font-black text-2xl flex items-center bg-emerald-900/30 p-4 rounded-xl border border-emerald-800/50">
                <TrendingUp className="h-6 w-6 mr-3" /> High (Measurable)
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-slate-800 p-8 rounded-[2rem] border border-slate-700 hover:bg-slate-800/80 transition-colors">
              <div className="font-black text-white text-2xl">
                Feedback Precision
              </div>
              <div className="text-slate-400 text-xl font-medium">
                Subjective / Generalized
              </div>
              <div className="text-purple-400 font-black text-2xl flex items-center bg-purple-900/30 p-4 rounded-xl border border-purple-800/50">
                <Watch className="h-6 w-6 mr-3" /> Objective / Personal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- PARTNER PAGE ---
function Partner() {
  return (
    <div className="animate-in fade-in duration-500 pb-24">
      <div className="bg-slate-950 text-white py-32 px-6 relative overflow-hidden rounded-b-[4rem]">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tight text-white">
            Partner With Us
          </h1>
          <p className="text-3xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto">
            Funding the Future of Climate-Resilient Education. We are
            conceptualising children's heat stress as a pedagogical design
            problem, and we need your help to scale the solution.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div className="animate-fade-up delay-100 bg-red-50 p-12 md:p-16 rounded-[3rem] border-2 border-red-100 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-[1.5] transition-transform duration-700">
              <ThermometerSun className="w-64 h-64 text-red-900" />
            </div>
            <h3 className="text-4xl font-black text-red-950 mb-8 relative z-10">
              The Challenge
            </h3>
            <p className="text-red-900/80 mb-6 text-xl leading-relaxed relative z-10 font-medium">
              Climate change makes rising temperatures an enduring feature of
              children's learning. By 2050, nearly every child globally under 18
              will be exposed to high heatwave frequency.
            </p>
            <p className="text-red-900/80 text-xl leading-relaxed relative z-10 font-medium">
              Current safety guidance relies on reactive thresholds or
              self-reports. This is fundamentally flawed because it fails to
              account for dynamic physiology, obesity, diabetes, or medication
              use.
            </p>
          </div>

          <div className="animate-fade-up delay-200 bg-teal-50 p-12 md:p-16 rounded-[3rem] border-2 border-teal-100 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-[1.5] transition-transform duration-700">
              <ShieldCheck className="w-64 h-64 text-teal-900" />
            </div>
            <h3 className="text-4xl font-black text-teal-950 mb-8 relative z-10">
              The Solution
            </h3>
            <p className="text-teal-900/80 mb-6 text-xl leading-relaxed relative z-10 font-medium">
              By introducing wearable technology into PE, we turn devices into
              educational mediators rather than performance surveillance tools.
            </p>
            <p className="text-teal-900/80 text-xl leading-relaxed relative z-10 font-medium">
              Wearables make invisible physiological strain visible, allowing
              real-time adjustments ensuring student safeguarding and equity.
            </p>
          </div>
        </div>

        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl font-black text-slate-800 tracking-tight">
            Support the Next Steps of Our Research
          </h2>
          <div className="h-2 w-32 bg-blue-500 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="space-y-10 max-w-5xl mx-auto">
          <div className="animate-fade-up delay-100 group bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border-2 border-slate-50 flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left hover:-translate-y-2 transition-all duration-500 hover:border-blue-200">
            <div className="bg-blue-50 p-8 rounded-[2rem] flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-inner">
              <span className="font-black text-3xl">Phase 1</span>
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-800 mb-6">
                Short-Term Funding Goals
              </h3>
              <ul className="text-slate-600 space-y-4 text-xl font-medium list-none">
                <li className="flex items-start">
                  <ChevronRight className="h-8 w-8 text-blue-500 shrink-0 mr-2" />{" "}
                  Developing specialised "heat literacy" training modules.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-8 w-8 text-blue-500 shrink-0 mr-2" />{" "}
                  Piloting wearable-integrated PE lessons to monitor internal
                  physiological responses.
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-fade-up delay-200 group bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border-2 border-slate-50 flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left hover:-translate-y-2 transition-all duration-500 hover:border-orange-200">
            <div className="bg-orange-50 p-8 rounded-[2rem] flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500 shadow-inner">
              <span className="font-black text-3xl">Phase 2</span>
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-800 mb-6">
                Medium-Term Funding Goals
              </h3>
              <ul className="text-slate-600 space-y-4 text-xl font-medium list-none">
                <li className="flex items-start">
                  <ChevronRight className="h-8 w-8 text-orange-500 shrink-0 mr-2" />{" "}
                  Funding and scaling resilient school infrastructure.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-8 w-8 text-orange-500 shrink-0 mr-2" />{" "}
                  Integrating wearable data systems directly with physical
                  cooling stations and shaded play areas.
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-fade-up delay-300 group bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border-2 border-slate-50 flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left hover:-translate-y-2 transition-all duration-500 hover:border-emerald-200">
            <div className="bg-emerald-50 p-8 rounded-[2rem] flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500 shadow-inner">
              <span className="font-black text-3xl">Phase 3</span>
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-800 mb-6">
                Long-Term Research & Policy Goals
              </h3>
              <ul className="text-slate-600 space-y-4 text-xl font-medium list-none">
                <li className="flex items-start">
                  <ChevronRight className="h-8 w-8 text-emerald-500 shrink-0 mr-2" />{" "}
                  Conducting longitudinal research to examine how heat literacy
                  develops over time.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-8 w-8 text-emerald-500 shrink-0 mr-2" />{" "}
                  Establishing frameworks to monitor psychological impacts of
                  data-informed pedagogy.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-8 w-8 text-emerald-500 shrink-0 mr-2" />{" "}
                  Embedding heat-resilient PE frameworks seamlessly into
                  national curricula.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 animate-fade-up delay-200 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[4rem] p-16 md:p-24 text-center shadow-[0_20px_50px_rgba(79,70,229,0.4)] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          <h3 className="text-5xl font-black mb-8 relative z-10 drop-shadow-md">
            Get Involved
          </h3>
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10 font-medium">
            Interested in sponsoring the next phase of our research or learning
            more about partnership opportunities? We would love to hear from
            you.
          </p>
          <a
            href="mailto:Kristy.howells@canterbury.ac.uk"
            className="relative z-10 inline-flex items-center justify-center bg-white text-blue-800 hover:bg-slate-50 font-black py-6 px-12 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 text-2xl"
          >
            <Mail className="h-8 w-8 mr-4 shrink-0 text-blue-600" />
            Email Kristy
          </a>
        </div>
      </div>
    </div>
  );
}

// --- TEAM PAGE ---
function Team() {
  const teamMembers = [
    {
      name: "Kristy Howells",
      role: "School of Sciences, Psychology, Arts and Humanities, Computer Engineering and Sports",
      inst: "Canterbury Christ Church University, Kent, UK",
    },
    {
      name: "Pim Koolwijk",
      role: "Research Group Healthy Lifestyle in a Supporting Environment",
      inst: "The Hague University of Applied Sciences, The Netherlands",
    },
    {
      name: "Antonino Mulè",
      role: "Faculty of Education",
      inst: "Free University of Bozen-Bolzano, Italy",
    },
    {
      name: "Ivan Müller",
      role: "Faculty of Medicine / UNESCO Chair",
      inst: "University of Basel, Switzerland",
    },
    {
      name: "Susan Whatman",
      role: "Faculty of Arts, Education and Law",
      inst: "Griffith University, Australia",
    },
  ];

  return (
    <div className="animate-in fade-in duration-500 py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24 animate-fade-up">
        <h1 className="text-6xl md:text-7xl font-black text-slate-800 mb-8 tracking-tight">
          Meet the Team
        </h1>
        <p className="text-3xl text-slate-500 font-medium max-w-4xl mx-auto leading-relaxed">
          A Worldwide Collaboration for Children's Health. We bring together
          experts in physical education, sports science, medicine, and design
          thinking.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="animate-fade-up group bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border-2 border-slate-50 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            style={{ animationDelay: `${(idx % 3) * 100}ms` }}
          >
            <div className="h-20 w-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center font-black text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-inner">
              {member.name.charAt(0)}
            </div>
            <h3 className="text-3xl font-black text-slate-800 mb-4">
              {member.name}
            </h3>
            <p className="text-xl text-slate-500 mb-6 font-bold leading-relaxed">
              {member.role}
            </p>
            <div className="flex items-start text-slate-600 bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-50 transition-colors duration-500">
              <MapPin className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <span className="text-lg font-medium">{member.inst}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="animate-fade-up delay-200 grid lg:grid-cols-2 gap-12 bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl shadow-slate-300/50 border-2 border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-50 rounded-bl-full -z-0 opacity-80"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-black text-slate-800 mb-10">
            Proudly Supported By
          </h2>
          <ul className="space-y-8 text-slate-600 text-xl font-medium">
            <li className="flex items-start bg-white p-6 rounded-3xl border-2 border-slate-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-4 rounded-2xl mr-6">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <div className="leading-relaxed">
                <strong className="text-slate-800 block mb-2 text-2xl font-black">
                  Institutional Support
                </strong>
                Supported by UNESCO Switzerland and the UNESCO Chair on
                ‘Physical Activity and Health in Educational Settings’.
              </div>
            </li>
            <li className="flex items-start bg-white p-6 rounded-3xl border-2 border-slate-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-4 rounded-2xl mr-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="leading-relaxed">
                <strong className="text-slate-800 block mb-2 text-2xl font-black">
                  AIESEP Collaboration
                </strong>
                Special thanks to AIESEP for hosting the Specialist Seminar on
                the Future of Physical Education.
              </div>
            </li>
            <li className="flex items-start bg-white p-6 rounded-3xl border-2 border-slate-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-4 rounded-2xl mr-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <div className="leading-relaxed">
                <strong className="text-slate-800 block mb-2 text-2xl font-black">
                  Design Thinking Advisors
                </strong>
                Gratitude to Prof Fiona Chambers, Prof Christophe Schnitzler,
                Prof Kelly Salchow-MacArthur, and Prof Olivier Vors.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 rounded-[3rem] shadow-[0_20px_40px_rgba(79,70,229,0.3)] relative z-10 flex flex-col justify-center text-white">
          <h2 className="text-4xl font-black mb-6">Get in Touch</h2>
          <p className="text-blue-100 mb-10 text-2xl leading-relaxed font-medium">
            Whether you are a school leader, a teacher wanting to boost heat
            literacy, or an organization interested in sponsoring our research,
            we want to hear from you!
          </p>

          <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2rem] border border-white/20">
            <h4 className="font-black text-2xl text-white mb-2">
              Lead Researcher
            </h4>
            <p className="text-blue-200 mb-8 text-xl font-medium">
              Kristy Howells, Canterbury Christ Church University
            </p>
            <a
              href="mailto:Kristy.howells@canterbury.ac.uk"
              className="inline-flex items-center justify-center w-full bg-white text-blue-800 hover:bg-slate-50 font-black py-5 px-8 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] text-2xl"
            >
              <Mail className="h-6 w-6 mr-4 shrink-0 text-blue-600" /> Contact
              Kristy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
