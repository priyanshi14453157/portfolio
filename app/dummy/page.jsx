export default function ProjectsUnavailable() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
          🚀 Deployment in Progress
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white">
          Projects
        </h1>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-zinc-300">
          Deployment Pending
        </h2>

        <p className="mt-8 text-lg leading-8 text-zinc-400">
          All projects have been successfully completed and are currently being
          prepared for deployment. They will be available here soon with live
          demos and source code.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-4">
            <p className="text-white font-medium">
              ⚡ Status:{" "}
              <span className="text-yellow-400">Deployment Pending</span>
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Thank you for your patience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
