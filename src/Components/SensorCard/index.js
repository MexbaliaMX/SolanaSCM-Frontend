import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useState} from "react";
import Container from "react-bootstrap/esm/Container";
import { FormattedMessage } from "react-intl";
import { setDeviceDataParam,setDeviceMetadataParam,deleteDeviceFromRegistry, getDeviceData,getDeviceMetadata } from "../../Utils/Functions";



export default function SensorCard(props) {
 
  const [data, setData] = useState("");
  const [metadata, setMetadata] = useState(false);
  const [registry_name, setRegName] = useState("");
  const [device_name, setDev] = useState("");

  const dataChange =(data) => setData(data);
  const registryChange =(registry_name) => setRegName(registry_name);
  const deviceChange =(device_name) => setDev(device_name);
  const metadataChange=(metadata) => setMetadata(metadata);

  const [showDevice, setShowDevice] = useState(false);
  const [showNewMetaData, setShowNewMetaData] = useState(false);
  const [showNewMetaDataParam, setShowNewMetaDataParam] = useState(false);
  const [showNewData, setShowNewData] = useState(false);
  const [showNewDataParam, setShowNewDataParam] = useState(false);
  const [showDeleteDev, setDeleteDev] = useState(false);

  const handleCloseDevice = () => setShowDevice(false);
  const handleShowDevice = () => setShowDevice(true);
  const handleCloseMetaData = () => setShowNewMetaData(false);
  const handleShowMetaData = () => setShowNewMetaData(true);
  const handleCloseData = () => setShowNewData(false);
  const handleShowData = () => setShowNewData(true);
  const handleCloseDataParam= () => setShowNewDataParam(false);
  const handleShowDataParam = () => setShowNewDataParam(true);
  const handleCloseMetaDataParam= () => setShowNewMetaDataParam(false);
  const handleShowMetaDataParam = () => setShowNewMetaDataParam(true);
  const handleCloseDeleteDev= () => setDeleteDev(false);
  const handleShowDeleteDev = () => setDeleteDev(true);

  const [dataJSON, setDataItems] = useState([]);
  const [metadataJSON, setMetaDataItems] = useState([]);
  
  const accountId=process.env.REACT_APP_NEAR_ACCOUNT_ID;
  console.log(registry_name);
  console.log(device_name);
 
  function getDataJSON(){
   
    getDeviceData(
      registry_name,
      device_name,
    accountId).then((resp) => {
       
        setDataItems(resp);
        // console.log(resp);
        return resp;
    });

    // console.log("String items: "+JSON.stringify(dataJSON));
    //  console.log("items: "+ dataJSON);
    return dataJSON;

    
      }


function getMetaDataJSON(){
   
  getDeviceMetadata(
  registry_name,
  device_name,
  accountId).then((resp) => {
     
      setMetaDataItems(resp);
      // console.log(resp);
      return resp;
  });

  //  console.log("String items: "+JSON.stringify(metadataJSON));
  // console.log("items: "+ metadataJSON);
  return metadataJSON;
}

  return (
    
    <Container>
    <Card onClick={handleShowDevice}>
      <Card.Header style={{ background: "#004aad", color: "#f6f7fc" }}>
        <Card.Title>
          <FormattedMessage id="app.sensor" defaultMessage="Device"/>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={6}><FormattedMessage id="app.data" defaultMessage="Data"/></Col>
          <Col xs={6}><FormattedMessage id="app.chart" defaultMessage="Chart"/></Col>
        </Row>
      </Card.Body>
    </Card>

    {/*--------------------------- Data Modal--------------------------------------- */}
    <Modal show={showNewData} onHide={handleCloseData}>
          <Modal.Header
            closeButton
            style={{ background: "#004aad", color: "#f6f7fc" }}
          >
            <Modal.Title>
              <FormattedMessage
                id="app.datain"
                defaultMessage="Add Data"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
    <Form.Group className="mb-3" controlId="newDdata">
      
    <Form.Label>
        <FormattedMessage
          id="app.addRegistryTextfield"
          defaultMessage="Data"
        />
      </Form.Label>
      <Form.Control id ="txtNR" type="text" 
      onChange={()=>registryChange(document.getElementById("txtNR").value)}

        // placeholder={
        //   <FormattedMessage
        //     id="app.addRegistryPlaceholder"
        //     defaultMessage="Data"
        //   />
          
        // }
        autoFocus
      />
      <Form.Label>
        <FormattedMessage
          id="app.sensor"
          defaultMessage="Data"
        />
      </Form.Label>
      <Form.Control id ="txtND" type="text" 
      onChange={()=>deviceChange(document.getElementById("txtND").value)}
        // placeholder={
        //   <FormattedMessage
        //     id="app.addRegistryPlaceholder"
        //     defaultMessage="Data"
        //   />
        // }
        autoFocus
      />
      <Form.Label>
        <FormattedMessage
          id="app.addDataTextfield"
          defaultMessage="Data"
        />
      </Form.Label>
      <Form.Control id ="txtNDA" type="text" 
      onChange={()=>dataChange(document.getElementById("txtNDA").value)}
        // placeholder={
        //   <FormattedMessage
        //     id="app.addRegistryPlaceholder"
        //     defaultMessage="Data"
        //   />
        // }
        autoFocus
      />
      <Form.Label>
        <FormattedMessage
          id="app.data"
          defaultMessage="Data"
        />
      </Form.Label>
      <Form.Control id ="txtNDAV" type="text" 
      onChange={()=>dataChange(document.getElementById("txtNDAV").value)}
        // placeholder={
        //   <FormattedMessage
        //     id="app.addRegistryPlaceholder"
        //     defaultMessage="Data"
        //   />
        // }
        autoFocus
      />
      
    </Form.Group>
  </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="outline-secondary"  onClick={handleShowDataParam} >
            <FormattedMessage id ="app.addDataTextfield" defaultMessage="Parametro"/>
          </Button>
            <Button variant="outline-danger" onClick={handleCloseData}>
              <FormattedMessage id="app.cancelBtn" defaultMessage="Cancel" />
            </Button>
            
            <Button variant="outline-primary" onClick={()=>{
              console.log(document.getElementById("txtNDA").value.type);
              setDeviceDataParam(
              registry_name,
              device_name,
              document.getElementById("txtNDA").value,
              document.getElementById("txtNDAV").value,
              accountId
              )}}>
              <FormattedMessage id="app.addBtn" defaultMessage="Add"  />
            </Button>
          </Modal.Footer>
        </Modal>

{/*------------------------- MetaData Modal----------------------------------------- */}
    <Modal show={showNewMetaData} onHide={handleCloseMetaData}>
    <Modal.Header
            closeButton
            style={{ background: "#004aad", color: "#f6f7fc" }}
          >
            <Modal.Title>
              <FormattedMessage
                id="app.addMetaData"
                defaultMessage="Add Metadata"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Form.Group className="mb-3" controlId="newMetadata">
                
                {/* <Form.Label>
                  <FormattedMessage
                    id="app.addMetaDataTextfield"
                    defaultMessage="Metadata"
                  />
                  
                </Form.Label> */}
                 
    <Form.Label>
        <FormattedMessage
          id="app.addRegistryTextfield"
          defaultMessage="Data"
        />
      </Form.Label>
      <Form.Control id ="txtNR" type="text" 
      onChange={()=>registryChange(document.getElementById("txtNR").value)}
        // placeholder={
        //   <FormattedMessage
        //     id="app.addRegistryPlaceholder"
        //     defaultMessage="Data"
        //   />
        // }
        autoFocus
      />
      <Form.Label>
        <FormattedMessage
          id="app.sensor"
          defaultMessage="Data"
        />
      </Form.Label>
      <Form.Control id ="txtND" type="text" 
      onChange={()=>deviceChange(document.getElementById("txtND").value)}
        // placeholder={
        //   <FormattedMessage
        //     id="app.addRegistryPlaceholder"
        //     defaultMessage="Data"
        //   />
        // }
        autoFocus
      />
      <Form.Label>
        <FormattedMessage
          id="app.addDataTextfield"
          defaultMessage="Data"
        />
      </Form.Label>
                <Form.Control id ="txtMD" type="text" 
                onChange={()=>metadataChange(document.getElementById("txtMD").value)}
                  // placeholder={
                  //   <FormattedMessage
                  //     id="app.addRegistryPlaceholder"
                  //     defaultMessage="Data"
                  //   />
                  // }
                  autoFocus
                />
                <Form.Label>
                  <FormattedMessage
                    id="app.data"
                    defaultMessage="Metadata"
                    
                  />
                </Form.Label>
                <Form.Control id ="txtMDV" type="text" 
                onChange={()=>metadataChange(document.getElementById("txtMDV").value)}
                  // placeholder={
                  //   <FormattedMessage
                  //     id="app.addRegistryPlaceholder"
                  //     defaultMessage="Data"
                  //   />
                  // }
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleShowMetaDataParam} >
            <FormattedMessage id ="app.addDataTextfield" defaultMessage="Parametro" />
          </Button>
            <Button variant="outline-danger" onClick={handleCloseMetaData}>
              <FormattedMessage id="app.cancelBtn" defaultMessage="Cancel" />
            </Button>
            <Button variant="outline-primary" onClick={()=>{
              setDeviceMetadataParam(
                registry_name,
                device_name,
                document.getElementById("txtMD").value,
                document.getElementById("txtMDV").value,
                  
                accountId,
                )}}>
                 
              <FormattedMessage id="app.addBtn" defaultMessage="Add"  />
            </Button>
          </Modal.Footer>
    </Modal>

   {/* ---------------------------Data Param Modal----------------------------------------- */}
    <Modal show={showNewDataParam} onHide={handleCloseDataParam}>
    <Modal.Header
            closeButton
            style={{ background: "#004aad", color: "#f6f7fc" }}
          >
            <Modal.Title>
              <FormattedMessage
                id="app.addDataParameter"
                defaultMessage="Add Parameter"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Form.Group className="mb-3" controlId="newParameter">   
    <Form.Label>
        <FormattedMessage
          id="app.addRegistryTextfield"
          defaultMessage="Data"
        />
      </Form.Label>
      <Form.Control id ="txtRP" type="text" 
      onChange={()=>registryChange(document.getElementById("txtRP").value)}
        // placeholder={
        //   <FormattedMessage
        //     id="app.addRegistryPlaceholder"
        //     defaultMessage="Data"
        //   />
        // }
        autoFocus
      />
      <Form.Label>
        <FormattedMessage
          id="app.sensor"
          defaultMessage="Data"
        />
      </Form.Label>
      <Form.Control id ="txtDP" type="text" 
      onChange={()=>deviceChange(document.getElementById("txtDP").value)}
        // placeholder={
        //   <FormattedMessage
        //     id="app.addRegistryPlaceholder"
        //     defaultMessage="Data"
        //   />
        // }
        autoFocus
      />
      <Form.Label>
        <FormattedMessage
          id="app.addDataTextfield"
          defaultMessage="Data"
        />
      </Form.Label>
                <Form.Control id ="txtDAP" type="text" 
                onChange={()=>metadataChange(document.getElementById("txtDAP").value)}
                  // placeholder={
                  //   <FormattedMessage
                  //     id="app.addRegistryPlaceholder"
                  //     defaultMessage="Data"
                  //   />
                  // }
                  autoFocus
                />
                 <Form.Label>
        <FormattedMessage
          id="app.value"
          defaultMessage="Value"
        />
      </Form.Label>
                <Form.Control id ="txtVDP" type="text" 
                onChange={()=>dataChange(document.getElementById("txtVDP").value)}
                  // placeholder={
                  //   <FormattedMessage
                  //     id="app.value"
                  //     defaultMessage="Data"
                  //   />
                  // }
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleCloseDataParam}>
              <FormattedMessage id="app.cancelBtn" defaultMessage="Cancel" />
            </Button>
            <Button variant="outline-primary" onClick={()=>{
              setDeviceDataParam(
               registry_name,
                device_name,
                document.getElementById("txtDAP").value,
                document.getElementById("txtVDP").value,
                  
                accountId,
                )}}>
                 
              <FormattedMessage id="app.addBtn" defaultMessage="Add"  />
            </Button>
          </Modal.Footer>
    </Modal>

      {/*-------------------- MetaData Param Modal --------------------------------*/}
    <Modal show={showNewMetaDataParam} onHide={handleCloseMetaDataParam}>
    <Modal.Header
            closeButton
            style={{ background: "#004aad", color: "#f6f7fc" }}
          >
            <Modal.Title>
              <FormattedMessage
                id="app.addDataParameter"
                defaultMessage="Add Parameter"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Form.Group className="mb-3" controlId="newParameter">
                
                {/* <Form.Label>
                  <FormattedMessage
                    id="app.addMetaDataTextfield"
                    defaultMessage="Metadata"
                  />
                  
                </Form.Label> */}
                 
    <Form.Label>
        <FormattedMessage
          id="app.addRegistryTextfield"
          defaultMessage="Data"
        />
      </Form.Label>
      <Form.Control id ="txtRP" type="text" 
      onChange={()=>registryChange(document.getElementById("txtRP").value)}
        // placeholder={
        //   <FormattedMessage
        //     id="app.addRegistryPlaceholder"
        //     defaultMessage="Data"
        //   />
        // }
        autoFocus
      />
      <Form.Label>
        <FormattedMessage
          id="app.sensor"
          defaultMessage="Data"
        />
      </Form.Label>
      <Form.Control id ="txtDP" type="text" 
      onChange={()=>deviceChange(document.getElementById("txtDP").value)}
        // placeholder={
        //   <FormattedMessage
        //     id="app.addRegistryPlaceholder"
        //     defaultMessage="Data"
        //   />
        // }
        autoFocus
      />
      <Form.Label>
        <FormattedMessage
          id="app.addDataTextfield"
          defaultMessage="Data"
        />
      </Form.Label>
                <Form.Control id ="txtMDAP" type="text" 
                onChange={()=>metadataChange(document.getElementById("txtMDAP").value)}
                  // placeholder={
                  //   <FormattedMessage
                  //     id="app.addRegistryPlaceholder"
                  //     defaultMessage="Data"
                  //   />
                  // }
                  autoFocus
                />
                 <Form.Label>
        <FormattedMessage
          id="app.value"
          defaultMessage="Value"
        />
      </Form.Label>
                <Form.Control id ="txtVMDP" type="text" 
                onChange={()=>dataChange(document.getElementById("txtVMDP").value)}
                  // placeholder={
                  //   <FormattedMessage
                  //     id="app.value"
                  //     defaultMessage="Data"
                  //   />
                  // }
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleCloseMetaDataParam}>
              <FormattedMessage id="app.cancelBtn" defaultMessage="Cancel" />
            </Button>
            <Button variant="outline-primary" onClick={()=>{
              setDeviceMetadataParam(
                registry_name,
                device_name,
                document.getElementById("txtMDAP").value,
                document.getElementById("txtVMDP").value,
                  
                accountId,
                )}}>
                 
              <FormattedMessage id="app.addBtn" defaultMessage="Add"  />
            </Button>
          </Modal.Footer>
    </Modal>


  {/*-------------------------- Device Modal -----------------------------------*/}
    <Modal show={showDevice} onHide={handleCloseDevice}>
        <Modal.Header
          closeButton
          style={{ background: "#004aad", color: "#f6f7fc" }}
        >
          <Modal.Title><FormattedMessage id="app.sensor" defaultMessage="Add sensor"/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newDevice">
              {/* <Form.Label><FormattedMessage id="app.chartType" defaultMessage="Chart type"/></Form.Label>
              <Form.Select>
                <option><FormattedMessage id="app.chart" defaultMessage="Chart"/></option>
              </Form.Select> */}
              <Form.Label>
        <FormattedMessage
          id="app.addRegistryTextfield"
          defaultMessage="Data"
        />
      </Form.Label>
      <Form.Control id ="txtRV" type="text" 
      onChange={()=>registryChange(document.getElementById("txtRV").value)}
        // placeholder={
        //   <FormattedMessage
        //     id="app.addRegistryPlaceholder"
        //     defaultMessage="Data"
        //   />
        // }
        autoFocus
      />
      <Form.Label>
        <FormattedMessage
          id="app.sensor"
          defaultMessage="Device"
        />
      </Form.Label>
      <Form.Control id ="txtDV" type="text" 
      onChange={()=>deviceChange(document.getElementById("txtDV").value)}
        // placeholder={
        //   <FormattedMessage
        //     id="app.addRegistryPlaceholder"
        //     defaultMessage="Data"
        //   />
        // }
        autoFocus
      />
            </Form.Group>
          </Form>
          <Table striped>
            <thead>
            
              <tr>
                
                <th><Button variant="outline-dark" onClick={()=>{
                 getDataJSON()
                }
                }>
                  <FormattedMessage id="app.data" defaultMessage="Data"/>
                  </Button></th>
                <th><FormattedMessage id="app.value" defaultMessage="Value"/></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >
                {/* <FormattedMessage id="app.temp" defaultMessage="Temperature"/> */}
                  {
                    Object.keys(dataJSON).map((key,i)=>(
                      <p key={i}>
                          <span>{key}</span>
                      </p>
                    ))
                  }
                  </td>
                <td>{
                    Object.keys(dataJSON).map((key,i)=>(
                      <p key={i}>
                          <span>{dataJSON[key]}</span>
                          
                      </p>
                    ))
                  }</td>
              </tr>
            </tbody>
          </Table>
      
          <Table striped>
            <thead>
              <tr>
                <th><Button variant="outline-dark" onClick={()=>{
                  getMetaDataJSON()
                }}>
                  <FormattedMessage id="app.metadata" defaultMessage="Data"/>
                  </Button></th>
                <th><FormattedMessage id="app.value" defaultMessage="Value"/></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{
                    Object.keys(metadataJSON).map((key,i)=>(
                      <p key={i}>
                          <span>{key}</span>
                      </p>
                    ))
                  }
                  </td>
                <td>{
                    Object.keys(metadataJSON).map((key,i)=>(
                      <p key={i}>
                          <span>{metadataJSON[key]}</span>
                          
                      </p>
                    ))
                  }</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="danger" onClick={handleCloseDevice}>
          <FormattedMessage id="app.cancelBtn" defaultMessage="Cancel" />
          </Button>
        <Button variant ="outline-danger" onClick={handleShowDeleteDev}>
          <FormattedMessage id="app.delBtn" defaultMessage="Delete" />

          </Button>
        <Button variant="outline-success" onClick={handleShowMetaData}>
          <FormattedMessage id="app.optBtn" defaultMessage="Metadata"/>
          </Button>
          <Button variant="outline-primary" onClick={handleShowData}> 
          <FormattedMessage id="app.data" defaultMessage= "Data"/>
          </Button>
          
        </Modal.Footer>
      </Modal>

      {/*------------------------- Delete Modal------------------------------  */}
      <Modal show={showDeleteDev} onHide={handleCloseDeleteDev}>
        <Modal.Header
          closeButton
          style={{ background: "#004aad", color: "#f6f7fc" }}
        >
          <Modal.Title>
            <FormattedMessage
              id="app.delSensor"
              defaultMessage="Delete Device From Registry"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newRegistry">
              <Form.Label>
                <FormattedMessage
                  id="app.addRegistryTextfield"
                  defaultMessage="Data"
                />
              </Form.Label>
              <Form.Control id ="txtNR" type="text" onChange={()=>registryChange(document.getElementById("txtNR").value)}
                // placeholder={
                //   <FormattedMessage
                //     id="app.addRegistryPlaceholder"
                //     defaultMessage="Data"
                //   />
                // }
                autoFocus
              />
              <Form.Label>
                <FormattedMessage
                  id="app.addSensorTextfield"
                  defaultMessage="Data"
                />
              </Form.Label>
              <Form.Control id ="txtND" type="text" onChange={()=>deviceChange(document.getElementById("txtND").value)}
                // placeholder={
                //   <FormattedMessage
                //     id="app.addRegistryPlaceholder"
                //     defaultMessage="Data"
                //   />
                // }
                autoFocus
              />
              
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleCloseDeleteDev}>
            <FormattedMessage id="app.cancelBtn" defaultMessage="Cancel" />
          </Button>
          <Button variant="outline-success" onClick={()=>deleteDeviceFromRegistry(
          registry_name,
          device_name,
          accountId,
          )}>
            <FormattedMessage id="app.delBtn" defaultMessage="Delete"  />
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
  
}
