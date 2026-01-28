import Sacco2Template from "@/components/sacco-2";
import { projectContent } from "@/data/content";

export default function Home() {
  return (
    <main>
      <Sacco2Template content={projectContent} />
    </main>
  );
}
