import SkeletonStaffCard from "@/components/team/SkeletonStaffCard";

export default function Loading() {
  return (
    <main className="scroll-mt-16.25 min-h-[calc(100vh-65px)] bg-base-200 p-8 flex flex-col gap-30">
      <div className="flex flex-col gap-4 text-center bg-base-300 py-10 shadow-xl rounded-xl">
        <h1 className="text-5xl font-semibold">Équipe</h1>
        <p className="text-xl opacity-80">
          Voici les différents membres de notre équipe
        </p>
      </div>
      <div className="hidden">
        <div className="border-purple-300 bg-purple-500/10">
          <div className="bg-purple-500" />
          <div className="bg-purple-500/50" />
        </div>
        <div className="border-sky-300 bg-sky-500/10">
          <div className="bg-sky-500" />
          <div className="bg-sky-500/50" />
        </div>
        <div className="border-emerald-300 bg-emerald-500/10">
          <div className="bg-emerald-500" />
          <div className="bg-emerald-500/50" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl text-center text-purple-500 bg-base-300 shadow-xl p-4 rounded-xl font-semibold">
          Présidence
        </h2>
        <div className="container grid justify-center items-center flex-wrap gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SkeletonStaffCard />
          <SkeletonStaffCard className="hidden sm:flex" />
          <SkeletonStaffCard className="hidden lg:flex" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl text-center text-sky-500 bg-base-300 shadow-xl p-4 rounded-xl font-semibold">
          Direction
        </h2>
        <div className="container grid justify-center items-center flex-wrap gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SkeletonStaffCard />
          <SkeletonStaffCard className="hidden sm:flex" />
          <SkeletonStaffCard className="hidden lg:flex" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl text-center text-emerald-500 shadow-xl bg-base-300 p-4 rounded-xl font-semibold">
          Gestion
        </h2>
        <div className="container grid justify-center items-center flex-wrap gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SkeletonStaffCard />
          <SkeletonStaffCard className="hidden sm:flex" />
          <SkeletonStaffCard className="hidden lg:flex" />
        </div>
      </div>
    </main>
  );
}
