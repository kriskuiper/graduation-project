import React from 'react';
import Head from 'next/head';
import { Dialog } from '@logiq/library';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <h1>A Logiq dialog component</h1>
      <Dialog className="">
        Some content
      </Dialog>
    </>
  )
}
