import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push("/apple")
  }
  const buyProduct = () => {
    router.replace("/product")
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/about'>About</Link>
      <br />
      <Link href="/profile">Profile</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/product">Products</Link>
      <br />
      <button onClick={handleClick}>Buy Apple</button>
      <button onClick={buyProduct}>Place Order</button>
    </div>
  )
}
