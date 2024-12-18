import { useState } from "react";

export const useFloatingButton = () => {
  const [showNewDevice, setShowNewDevice] = useState(false);
  const [showNewRegistry, setShowNewRegistry] = useState(false);
  const [showDeleteReg, setDeleteReg] = useState(false);

  const handleCloseDevice = () => setShowNewDevice(false);
  const handleShowDevice = () => setShowNewDevice(true);
  const handleCloseRegistry = () => setShowNewRegistry(false);
  const handleShowRegistry = () => setShowNewRegistry(true);
  const handleCloseDeleteReg = () => setDeleteReg(false);
  const handleShowDeleteReg = () => setDeleteReg(true);

  const [registry_name, setRegName] = useState("");
  const [device_name, setDev] = useState("");
  const [dev_desc, setDescription] = useState(false);

  const registryChange = (registry_name) => setRegName(registry_name);
  const deviceChange = (device_name) => setDev(device_name);
  const descriptionChange = (dev_desc) => setDescription(dev_desc);

  return {
    showNewDevice,
    showNewRegistry,
    showDeleteReg,
    handleCloseDevice,
    handleShowDevice,
    handleCloseRegistry,
    handleShowRegistry,
    handleCloseDeleteReg,
    handleShowDeleteReg,
    registry_name,
    device_name,
    dev_desc,
    registryChange,
    deviceChange,
    descriptionChange,
  };
};
