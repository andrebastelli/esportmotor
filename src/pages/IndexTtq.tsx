import { useEffect } from "react";
import Index from "./Index.tsx";

const IndexTtq = () => {
  useEffect(() => {
    // Dispara o evento/pixel do TikTok assim que a página carrega
    if (typeof window !== "undefined" && (window as any).ttq) {
      (window as any).ttq.page(); // ou (window as any).ttq.track("ViewContent")
    }
  }, []);

  return <Index />;
};

export default IndexTtq;