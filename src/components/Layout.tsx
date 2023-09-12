import { ReactNode } from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "@components/layout/navbar";
import CopyRight from "@components/layout/footer/copy-right";
import MetaHead from "@components/layout/meta-head";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {

  return (
    <Container maxW="container.md" bg="blue.100">
      <nav>
        <MetaHead />
        
      </nav>
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <footer>
        <CopyRight />
      </footer>
    </Container>
  );
};

export default Layout;
