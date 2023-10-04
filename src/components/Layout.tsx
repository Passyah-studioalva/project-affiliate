import { ReactNode } from "react";
import { Container } from "@chakra-ui/react";
import CopyRight from "@components/layout/footer/copy-right";
import MetaHead from "@components/layout/meta-head";
import { Analytics } from '@vercel/analytics/react';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxW="container.md" className="bg-image">
      <nav>
        <MetaHead />
      </nav>
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
