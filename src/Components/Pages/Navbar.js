import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "react-bootstrap/Button";
import ModalExample from "../Modal/modal";
import AlterExample from "../Modal/Alter";
import SelectExample from "../Modal/Select";
import SecurityExample from "../Modal/Security";
import TallyExample from "../Modal/TallyVult";
import ButtonExample from "../Modal/Button";
import { useState } from "react";

function CollapsibleExample() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalSecurity, setModalSecurity] = useState(false);
  const [modalTally, setModalTally] = useState(false);
  const [modalButton, setModalButton] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      className="rounded-none"
    >
      <ModalExample show={modalShow} onHide={() => setModalShow(false)} />
      <AlterExample show={modalShow1} onHide={() => setModalShow1(false)} />
      <SelectExample show={modalShow2} onHide={() => setModalShow2(false)} />
      <SecurityExample
        show={modalSecurity}
        onHide={() => setModalSecurity(false)}
      />
      <TallyExample show={modalTally} onHide={() => setModalTally(false)} />

      <ButtonExample show={modalButton} onHide={() => setModalButton(false)} />

      <Container>
        <Navbar.Brand href="#">
          <NavDropdown
            style={{ marginLeft: "30px" }}
            title="K:Company"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item onClick={() => setModalShow(true)}>
              Create
            </NavDropdown.Item>

            <NavDropdown.Item onClick={() => setModalShow1(true)}>
              Alter
            </NavDropdown.Item>

            <NavDropdown.Item href="/change">ChangeGe</NavDropdown.Item>

            <NavDropdown.Item onClick={() => setModalShow2(true)}>
              Select
            </NavDropdown.Item>

            <NavDropdown.Item href="/shut">SHut</NavDropdown.Item>

            <NavDropdown.Item href="#action/3.4">
              ONLINE ACCESS
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">COnnect</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Disconnect</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Connectivity Status
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              ReMote Access
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Browser Access
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-yellow-300" href="#action/3.4">
              CONFIGURE
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Features</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setModalSecurity(true)}>
              SEcurity
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setModalTally(true)}>
              Tally Vault
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              ONline Access
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={{ margin: "0 20px" }}
              className="text-white"
              href="#features"
            >
              <NavDropdown title="Y:Data" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  COMPANY DATA
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Backup</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Restore</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Split</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  CONFIGURE
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Data Path
                </NavDropdown.Item>

                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
            </Nav.Link>
            <Nav.Link
              style={{ margin: "0 20px" }}
              className="text-white"
              href="#pricing"
            >
              <NavDropdown title="Z:Exchange" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  E-WAY BILL
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Send for e-Way Bill
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  CONFIGURE
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/3.4">
                  Data SyNchronisation
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Nav>

          <NavDropdown.Item onClick={() => setModalButton(true)}>
            <div className="text-white text-xl">G:GoTo</div>
          </NavDropdown.Item>
          <Nav.Link
            style={{ margin: "0 30px" }}
            className="text-white "
            href="#pricing"
          >
            <NavDropdown title="O:Import" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                COMPANY DATA
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Masters</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Transactions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Bank Details
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                CoNfiguration
              </NavDropdown.Item>

              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav.Link>
          <Nav.Link
            style={{ margin: "0 20px" }}
            className="text-white left-6"
            href="#pricing"
          >
            <NavDropdown
              title="E:Export"
              id="collasible-nav-dropdown"
              style={{ color: "skyblue-light" }}
            >
              <NavDropdown.Item href="#action/3.1">Report</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">CuRrent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Others</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
                COMPANY DATA
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Masters</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Transactions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                CoNfiguration
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
          <Nav.Link
            style={{ margin: "0 20px" }}
            className="text-white margin-left"
            href="#pricing"
          >
            <NavDropdown title="M:E-mail" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">REPORTS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">CuRrent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Others</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
                CoNfiguration
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
          <Nav.Link
            style={{ margin: "0 20px" }}
            className="text-white left-6"
            href="#pricing"
          >
            <NavDropdown title="P:Print" id="collasible-nav-dropdown">
              <NavDropdown.Item
                style={{ backgroundhover: "danger" }}
                href="#action/3.1"
              >
                REPORTS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">CuRrent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Others</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
                CoNfiguration
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
          <Nav.Link
            style={{ margin: "0 20px" }}
            className="text-white "
            href="#pricing"
          >
            <NavDropdown title="F1:Help" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">TallyHelp</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">What's New</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Upgrade</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">TallyShop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                TRoubleshooting
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                TDLs & AddOns
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
