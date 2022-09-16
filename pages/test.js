import { useState } from "react";
import { Magic } from "magic-sdk";
import { ethers } from "ethers";
import axios from "axios";
import {useRouter} from 'next/router';
export default function SignIn() {
  const router = useRouter()
  const data = JSON.parse(router.query.id); 
  console.log(typeof(data));
  // console.log(JSON.parse(router.query.id));
  // const CONTRACT_ADDRESS = data.CONTRACT_ADDRESS;
  // const NFT_NAME = data.NFT_NAME;
  console.log(data);
  return (
    <div>
      {/* {CONTRACT_ADDRESS}
      {NFT_NAME} */}
      {router.query.id}
      {data.CONTRACT_ADDRESS}
      {data.NFT_NAME}
    </div>
  )
}
