import { ReactNode } from "react";
import { Container } from "@chakra-ui/react";
import CopyRight from "@components/layout/footer/copy-right";
import MetaHead from "@components/layout/meta-head";
import { Analytics } from "@vercel/analytics/react";
import BG from "@assets/download.jpg";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container
      maxW="container.md"
      backgroundImage={BG.src}
      className="bg-image"
    >
      <MetaHead />
      <main style={{ minHeight: "100vh" }}>
        {children}
        <Analytics />
      </main>
      <footer>
        <CopyRight />
      </footer>
    </Container>
  );
};

export default Layout;
