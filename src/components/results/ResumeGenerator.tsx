import { FiDownload, FiPrinter, FiBriefcase, FiAward, FiStar, FiZap } from "react-icons/fi";
import type { GithubData } from "@/lib/github.functions";
import { topLanguages, buildAISummary } from "@/lib/personality";

export function ResumeGenerator({ data }: { data: GithubData }) {
  const topLangs = topLanguages(data.languageBytes, 6);
  const aiSummary = buildAISummary(data);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${data.user.name || data.user.login}
## Software Engineer
*GitHub: github.com/${data.user.login} | Stars: ${data.totals.stars} | Repos: ${data.totals.repos}*

## About Me
${aiSummary}

## Tech Stack
${topLangs.map(l => l.name).join(", ")}

## Open Source Highlights
${data.repos.slice(0, 5).map(r => `- **${r.name}** (${r.stargazers_count} stars) - ${r.description || "No description"}`).join("\n")}
`;
    navigator.clipboard.writeText(md);
    alert("Markdown copied to clipboard!");
  };

  return (
    <div className="card-soft relative overflow-hidden rounded-[40px] p-8 md:p-12 text-slate-900 border border-slate-200 shadow-xl bg-white/90">
      
      {/* Header / Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 print:hidden">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500 mb-1">Developer Resume</h2>
          <h3 className="font-display text-3xl font-black text-slate-800 tracking-tight">Your Auto-Generated CV</h3>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleCopyMarkdown}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all"
          >
            <FiDownload /> Markdown
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
          >
            <FiPrinter /> Save as PDF
          </button>
        </div>
      </div>

      {/* The Resume Document - We use a special ID to target it in print CSS if needed, though standard print CSS usually hides everything else */}
      <div id="resume-document" className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm font-sans">
        {/* Resume Header */}
        <div className="border-b-2 border-slate-800 pb-6 mb-6 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {data.user.avatar_url && (
             <img src={data.user.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-white shadow-md print:w-20 print:h-20" />
          )}
          <div className="flex-1">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">{data.user.name || data.user.login}</h1>
            <h2 className="text-xl font-semibold text-slate-500 mt-1">Software Engineer</h2>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 mt-3 text-sm text-slate-600 font-medium">
              <span>github.com/{data.user.login}</span>
              <span>•</span>
              <span>{data.totals.stars.toLocaleString()} Stars</span>
              <span>•</span>
              <span>{data.totals.repos} Repositories</span>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3 uppercase tracking-wider border-b border-slate-200 pb-2">
                <FiBriefcase className="text-indigo-500" /> About Me
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                {aiSummary}
              </p>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider border-b border-slate-200 pb-2">
                <FiStar className="text-indigo-500" /> Open Source Highlights
              </h3>
              <div className="space-y-5">
                {data.repos.slice(0, 4).map(r => (
                  <div key={r.name}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-800 text-base">{r.name}</h4>
                      <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                        {r.stargazers_count} ⭐
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{r.description || "No description provided."}</p>
                    {r.language && <p className="text-xs font-bold text-indigo-500 mt-1">{r.language}</p>}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider border-b border-slate-200 pb-2">
                <FiZap className="text-indigo-500" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {topLangs.map(l => (
                  <span key={l.name} className="bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">
                    {l.name}
                  </span>
                ))}
              </div>
            </section>
            
            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider border-b border-slate-200 pb-2">
                <FiAward className="text-indigo-500" /> Stats
              </h3>
              <ul className="space-y-3 text-sm font-medium text-slate-700">
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span className="text-slate-500">Followers</span>
                  <span>{data.user.followers.toLocaleString()}</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span className="text-slate-500">Forks</span>
                  <span>{data.totals.forks.toLocaleString()}</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span className="text-slate-500">Public Gists</span>
                  <span>{data.user.public_gists}</span>
                </li>
              </ul>
            </section>
          </div>
          
        </div>
      </div>
    </div>
  );
}
