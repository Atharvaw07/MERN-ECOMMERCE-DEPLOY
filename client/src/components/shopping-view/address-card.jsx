import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {
  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`cursor-pointer border-red-700 ${selectedId?._id === addressInfo?._id ? 'border-x-red-900 border-[4px]' :'border-black'}`}
    >
      <CardContent
        className={`${
          selectedId === addressInfo?._id ? "border-black" : ""
        } grid p-4 gap-4`}
      >
        <Label>Address: {addressInfo?.address}</Label>
        <Label>City: {addressInfo?.city}</Label>
        <Label>Pincode: {addressInfo?.pincode}</Label>
        <Label>Notes: {addressInfo?.notes}</Label>
        <Label>Phone: {addressInfo?.phone}</Label>
      </CardContent>
      <CardFooter className="flex p-3 justify-between">
        <Button onClick={() => handleEditAddress(addressInfo)}>Edit</Button>
        <Button onClick={() => handleDeleteAddress(addressInfo)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default AddressCard;
