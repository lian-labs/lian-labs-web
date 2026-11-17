import Header from "./Header";
import Footer from "./Footer";
import { GrainWave } from "./GrainWave";

/**
 * Every page shares the grain backdrop and floating header. `isolate` +
 * `overflow-x-clip` keeps the fixed canvas from creating a horizontal
 * scrollbar.
 */
export default function SiteShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative isolate flex-1 overflow-x-clip">
      <GrainWave />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
