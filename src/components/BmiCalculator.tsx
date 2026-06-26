import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function BmiCalculator() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>(''); // cm for metric, inches for imperial
  const [feet, setFeet] = useState<string>(''); // for imperial feet
  const [inches, setInches] = useState<string>(''); // for imperial inches
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    
    let bmiValue = 0;
    
    if (unit === 'metric') {
      const w = parseFloat(weight);
      const h = parseFloat(height) / 100; // convert cm to meters
      
      if (w > 0 && h > 0) {
        bmiValue = w / (h * h);
      }
    } else {
      const f = parseFloat(feet) || 0;
      const i = parseFloat(inches) || 0;
      const totalInches = (f * 12) + i;
      const w = parseFloat(weight);
      
      if (w > 0 && totalInches > 0) {
        bmiValue = (w / (totalInches * totalInches)) * 703;
      }
    }

    if (bmiValue > 0) {
      const rounded = Math.round(bmiValue * 10) / 10;
      setBmi(rounded);
      determineCategory(rounded);
    } else {
      setBmi(null);
      setCategory('');
      setSuggestion('');
    }
  };

  const determineCategory = (val: number) => {
    if (val < 18.5) {
      setCategory('Underweight');
      setSuggestion('Focus on a caloric surplus with nutrient-dense foods and heavy strength training to build clean muscle mass at Gymnazo.');
    } else if (val >= 18.5 && val < 25) {
      setCategory('Normal Weight');
      setSuggestion('Excellent! You are in a healthy range. Maintain your condition with our functional fitness routines and balanced strength cycles.');
    } else if (val >= 25 && val < 30) {
      setCategory('Overweight');
      setSuggestion('Consider a moderate caloric deficit combined with active HIIT sessions, cardio machines, and resistance training here to shred fat.');
    } else {
      setCategory('Obese');
      setSuggestion('We recommend consulting a personal coach. A routine prioritizing joint-friendly cardio, metabolic conditioning, and meal planning is key.');
    }
  };

  const clearFields = () => {
    setWeight('');
    setHeight('');
    setFeet('');
    setInches('');
    setBmi(null);
    setCategory('');
    setSuggestion('');
  };

  return (
    <section id="bmi-calc" className="relative py-24 bg-dark-900 border-b border-gold-500/5">
      {/* Background glow */}
      <div className="absolute right-1/4 top-1/3 w-[300px] h-[300px] bg-gold-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Descriptions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-8 bg-gold-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-gold-500">BMI Indicator</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
                Check Your <span className="text-gold-gradient">Fitness Metrics</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Body Mass Index (BMI) is a rapid screening tool that estimates body fat content based on your height and weight. Use this interactive tool to assess your range and select your programs.
              </p>
            </div>

            {/* Scale Categories Details */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-gold-500">BMI Index Reference</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex justify-between items-center bg-dark-950/40 p-2.5 rounded-lg border border-white/5 text-[11px]">
                  <span className="text-gray-400">Below 18.5</span>
                  <span className="text-blue-400 font-bold">Underweight</span>
                </div>
                <div className="flex justify-between items-center bg-dark-950/40 p-2.5 rounded-lg border border-white/5 text-[11px]">
                  <span className="text-gray-400">18.5 – 24.9</span>
                  <span className="text-emerald-400 font-bold">Normal</span>
                </div>
                <div className="flex justify-between items-center bg-dark-950/40 p-2.5 rounded-lg border border-white/5 text-[11px]">
                  <span className="text-gray-400">25.0 – 29.9</span>
                  <span className="text-amber-500 font-bold">Overweight</span>
                </div>
                <div className="flex justify-between items-center bg-dark-950/40 p-2.5 rounded-lg border border-white/5 text-[11px]">
                  <span className="text-gray-400">30.0 & Above</span>
                  <span className="text-rose-500 font-bold">Obese</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Panel */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl shadow-black/60">
              
              {/* Unit Toggles */}
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-gold-500" />
                  <h3 className="font-heading font-extrabold text-sm uppercase text-white tracking-wider">
                    Calculator Setup
                  </h3>
                </div>
                
                <div className="flex bg-dark-950 rounded-lg p-0.5 border border-gold-500/10">
                  <button
                    onClick={() => { setUnit('metric'); clearFields(); }}
                    className={`px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider rounded-md transition-colors ${
                      unit === 'metric' ? 'bg-gold-500 text-black' : 'text-gray-400'
                    }`}
                  >
                    Metric
                  </button>
                  <button
                    onClick={() => { setUnit('imperial'); clearFields(); }}
                    className={`px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider rounded-md transition-colors ${
                      unit === 'imperial' ? 'bg-gold-500 text-black' : 'text-gray-400'
                    }`}
                  >
                    Imperial
                  </button>
                </div>
              </div>

              {/* Calculator Inputs Form */}
              <form onSubmit={calculateBmi} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Height Input */}
                  {unit === 'metric' ? (
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Height (cm)</label>
                      <input
                        type="number"
                        placeholder="e.g. 175"
                        required
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full bg-dark-950 border border-white/5 focus:border-gold-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-colors"
                      />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Height (Feet & Inches)</label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="number"
                          placeholder="Ft"
                          required
                          value={feet}
                          onChange={(e) => setFeet(e.target.value)}
                          className="w-full bg-dark-950 border border-white/5 focus:border-gold-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-colors"
                        />
                        <input
                          type="number"
                          placeholder="In"
                          value={inches}
                          onChange={(e) => setInches(e.target.value)}
                          className="w-full bg-dark-950 border border-white/5 focus:border-gold-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {/* Weight Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                    </label>
                    <input
                      type="number"
                      placeholder={unit === 'metric' ? 'e.g. 70' : 'e.g. 154'}
                      required
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full bg-dark-950 border border-white/5 focus:border-gold-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black py-3 rounded-xl font-heading font-black text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10 active:scale-95"
                  >
                    Calculate BMI
                  </button>
                  <button
                    type="button"
                    onClick={clearFields}
                    className="bg-dark-950 border border-white/10 text-gray-400 hover:text-white px-5 rounded-xl font-heading font-black text-xs uppercase tracking-wider transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </form>

              {/* BMI Output Display */}
              {bmi !== null && (
                <div className="mt-8 pt-6 border-t border-white/5 space-y-5 animate-fadeIn">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Your Body Mass Index</p>
                      <h4 className="text-4xl font-heading font-black text-gold-500 mt-1">{bmi}</h4>
                    </div>
                    
                    <div className="text-center sm:text-right">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Classification</p>
                      <span className={`inline-block mt-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border ${
                        category === 'Underweight' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                        category === 'Normal Weight' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                        category === 'Overweight' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                        'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      }`}>
                        {category}
                      </span>
                    </div>
                  </div>

                  {/* Horizontal gauge gauge meter */}
                  <div className="space-y-1.5">
                    <div className="relative h-2 w-full bg-dark-950 rounded-full overflow-hidden border border-white/5 flex">
                      <div className="h-full bg-blue-500" style={{ width: '18.5%' }} />
                      <div className="h-full bg-emerald-500" style={{ width: '25%' }} />
                      <div className="h-full bg-amber-500" style={{ width: '20%' }} />
                      <div className="h-full bg-rose-500" style={{ width: '36.5%' }} />

                      {/* Gauge Indicator marker indicator */}
                      <div 
                        className="absolute top-0 bottom-0 w-1 bg-white border border-black shadow-[0_0_8px_rgba(255,255,255,1)] transition-all duration-1000"
                        style={{ 
                          left: `${Math.min(Math.max((bmi / 40) * 100, 2), 98)}%` 
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-[9px] font-semibold text-gray-500 uppercase tracking-widest">
                      <span>15 (Low)</span>
                      <span>18.5</span>
                      <span>25</span>
                      <span>30</span>
                      <span>40+ (High)</span>
                    </div>
                  </div>

                  {/* Suggestion Text */}
                  <div className="bg-gold-500/5 border border-gold-500/10 rounded-2xl p-4 mt-2">
                    <p className="text-xs text-gold-200/90 leading-relaxed">
                      <span className="font-bold text-gold-500 uppercase tracking-wider text-[10px] block mb-1">Recommendation</span>
                      {suggestion}
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
