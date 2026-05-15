export default function StudentTennisProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:px-16 lg:px-28">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-emerald-300 mb-4">
              Student Athlete • Future College Recruit
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Pankaj Verma
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              Aspiring collegiate tennis player with a strong commitment to
              academic excellence, leadership, and competitive performance on
              the court.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all duration-300">
                View Highlights
              </button>

              <button className="border border-slate-500 hover:border-white px-6 py-3 rounded-2xl transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-[2rem] overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=1200&auto=format&fit=crop"
                alt="Tennis athlete"
                className="w-full h-full object-cover opacity-90"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <p className="text-lg font-semibold">USTA / ITF Aspirant</p>
                <p className="text-sm text-slate-300">Dedicated to growth on and off the court</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-16 lg:px-28 py-12">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: 'Academic GPA', value: '3.9 / 4.0' },
            { label: 'Tournament Titles', value: '12+' },
            { label: 'Community Service Hours', value: '150+' },
            { label: 'Leadership Roles', value: '5' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:scale-105 transition-transform duration-300"
            >
              <p className="text-slate-400 text-sm mb-2">{item.label}</p>
              <h3 className="text-3xl font-bold">{item.value}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-16 lg:px-28 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
            alt="Tennis match"
            className="rounded-[2rem] shadow-2xl border border-white/10"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-slate-300 leading-relaxed mb-6 text-lg">
            I am a disciplined student-athlete focused on competing at the
            collegiate tennis level while pursuing academic excellence. My
            journey combines rigorous training, tournament experience, and a
            passion for leadership and teamwork.
          </p>

          <p className="text-slate-300 leading-relaxed mb-8 text-lg">
            Beyond tennis, I actively participate in academic competitions,
            student leadership initiatives, and community service programs that
            reflect my commitment to personal growth and impact.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 border border-white/10 rounded-2xl p-5">
              <h4 className="font-semibold mb-2">Intended Major</h4>
              <p className="text-slate-400">Business / Sports Management</p>
            </div>

            <div className="bg-slate-800 border border-white/10 rounded-2xl p-5">
              <h4 className="font-semibold mb-2">Playing Style</h4>
              <p className="text-slate-400">Aggressive Baseline Player</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tennis Achievements */}
      <section className="px-6 md:px-16 lg:px-28 py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Tennis Achievements</h2>
          <p className="text-slate-300 text-lg">
            Competitive milestones, rankings, and tournament success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'National Junior Finalist',
              desc: 'Reached finals in national-level junior tennis competition.',
            },
            {
              title: 'Regional Champion',
              desc: 'Won consecutive regional singles championships.',
            },
            {
              title: 'Team Captain',
              desc: 'Led school tennis team to interschool championship victory.',
            },
          ].map((achievement, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-emerald-300/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-400/20 flex items-center justify-center mb-6 text-2xl">
                🎾
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {achievement.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {achievement.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Academics */}
      <section className="px-6 md:px-16 lg:px-28 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">Academic Excellence</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Dedicated to maintaining elite academic standards alongside a
              demanding athletic schedule.
            </p>

            <div className="space-y-5">
              {[
                'Honor Roll Student – 4 Consecutive Years',
                'Top 5% in Mathematics and Science',
                'Debate & Leadership Program Participant',
                'STEM Research and Innovation Club Member',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 border border-white/10 rounded-[2rem] p-8 shadow-xl">
            <h3 className="text-3xl font-bold mb-8">Recruitment Snapshot</h3>

            <div className="space-y-6 text-lg">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400">Graduation Year</span>
                <span className="font-semibold">2028</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400">Preferred Colleges</span>
                <span className="font-semibold">NCAA Programs</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400">Training Hours</span>
                <span className="font-semibold">20+ / week</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400">Volunteer Work</span>
                <span className="font-semibold">Youth Tennis Clinics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 md:px-16 lg:px-28 py-24">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 border border-white/10 rounded-[2rem] p-12 shadow-2xl">
          <h2 className="text-5xl font-bold mb-6">
            Ready for the Next Level
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
            Seeking opportunities to compete at the collegiate level while
            contributing academically, athletically, and as a leader within the
            campus community.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300">
              Download Resume
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
              Watch Match Highlights
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-16 lg:px-28 text-center text-slate-500">
        <p>
          © 2026 Pankaj Verma • Student Athlete Portfolio • Built for College
          Tennis Recruitment
        </p>
      </footer>
    </div>
  );
}
