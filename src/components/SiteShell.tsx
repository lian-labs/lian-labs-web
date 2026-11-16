import Header from "./Header";
import Footer from "./Footer";
import { GrainWave } from "./GrainWave";
import type { Region } from "@/lib/regions";

/**
 * Every page shares the grain backdrop and floating header. `isolate` +
 * `overflow-x-clip` keeps the fixed canvas from creating a horizontal
 * scrollbar. `region` picks which edition the header and footer link to.
 */
export default function SiteShell({
  children,
  region = "world",
}: Readonly<{ children: React.ReactNode; region?: Region }>) {
  return (
    <div className="relative isolate flex-1 overflow-x-clip">
      <GrainWave />
      <Header region={region} />
      <main className="flex-1">{children}</main>
      <Footer region={region} />
    </div>
  );
}
